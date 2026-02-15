import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { TriPayClient } from '@/lib/tripay';
import { nanoid } from 'nanoid';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');

    if (!reference) {
        return NextResponse.json({ success: false, message: 'Reference required' }, { status: 400 });
    }

    const db = getDb();
    const tripay = new TriPayClient();

    try {
        // 1. Get current status from DB
        const tx = db.prepare('SELECT * FROM transactions WHERE reference = ?').get(reference) as any;

        if (!tx) {
            return NextResponse.json({ success: false, message: 'Transaction not found' }, { status: 404 });
        }

        // 2. If already PAID, return immediately
        if (tx.status === 'PAID') {
            return NextResponse.json({ 
                success: true, 
                status: 'PAID', 
                access_key: tx.created_access_key 
            });
        }

        // 3. Check status from TriPay
        const detail = await tripay.getTransactionDetail(reference);
        const currentStatus = detail.status;

        // 4. If status changed to PAID, generate key and update DB
        if (currentStatus === 'PAID' && tx.status !== 'PAID') {
            const access_key = nanoid(12).toUpperCase();
            
            // Calculate subscription dates
            const now = new Date();
            const start_at = now.toISOString();
            const end_at = new Date(now.setMonth(now.getMonth() + tx.plan_duration)).toISOString();
            
            // Generate User Name based on Customer Name
            const userName = tx.customer_name || `User-${nanoid(6)}`;

            // Transaction
            const updateTx = db.prepare(`
                UPDATE transactions 
                SET status = 'PAID', created_access_key = ? 
                WHERE reference = ?
            `);
            
            // Insert into Users table
            const insertUser = db.prepare(`
                INSERT INTO users (name, access_key, subscription_month, start_at, end_at, max_devices)
                VALUES (?, ?, ?, ?, ?, 3)
            `);

            db.transaction(() => {
                updateTx.run(access_key, reference);
                insertUser.run(userName, access_key, tx.plan_duration, start_at, end_at);
            })();

            return NextResponse.json({ 
                success: true, 
                status: 'PAID', 
                access_key 
            });
        } 
        
        // 5. Update status if changed (FAILED, EXPIRED) but not PAID
        if (currentStatus !== tx.status) {
            db.prepare('UPDATE transactions SET status = ? WHERE reference = ?').run(currentStatus, reference);
        }

        return NextResponse.json({ success: true, status: currentStatus });

    } catch (error: any) {
        console.error('Check Status Error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
