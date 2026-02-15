import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { TriPayClient } from '@/lib/tripay';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');

    if (!reference) {
        return NextResponse.json({ success: false, message: 'Reference required' }, { status: 400 });
    }

    const db = getDb();
    const tripay = new TriPayClient();

    try {
        // 1. Get from DB
        const tx = db.prepare('SELECT * FROM transactions WHERE reference = ?').get(reference) as any;

        if (!tx) {
            return NextResponse.json({ success: false, message: 'Transaction not found' }, { status: 404 });
        }

        // 2. Get full details from TriPay (to get instructions, QR string, etc.)
        // Only if UNPAID, otherwise we might not need instructions.
        // But for consistency, let's fetch it if possible.
        // Note: TriPay might rate limit, so maybe cache?
        // For now, fetch direct.
        
        let tripayDetail = null;
        try {
            tripayDetail = await tripay.getTransactionDetail(reference);
        } catch (e) {
            console.warn('TriPay fetch failed:', e);
        }

        // Merge DB data with TriPay data
        const merged = {
            ...tx,
            ...(tripayDetail || {}),
            status: tx.status, // Trust DB status more? Or TriPay?
            // Actually, if TriPay says PAID but DB says UNPAID, we should update DB.
            // But let the check API handle status updates.
            // Here we just want to show instructions.
            instructions: tripayDetail?.instructions || [],
            qr_url: tripayDetail?.qr_url || tx.qr_url,
            pay_code: tripayDetail?.pay_code || tx.pay_code,
            payment_name: tripayDetail?.payment_name || tx.payment_method,
            expired_time: tripayDetail?.expired_time || Math.floor(Date.now()/1000) + 86400, // Fallback
        };

        return NextResponse.json({ success: true, data: merged });

    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
