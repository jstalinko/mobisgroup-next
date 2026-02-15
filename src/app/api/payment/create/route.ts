import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { TriPayClient, TransactionPayload } from '@/lib/tripay';
import { nanoid } from 'nanoid';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, payment_method, amount, duration } = body;

        if (!name || !email || !phone || !payment_method || !amount || !duration) {
            return NextResponse.json({ success: false, message: 'Data tidak lengkap' }, { status: 400 });
        }

        const db = getDb();
        const tripay = new TriPayClient();

        // 1. Generate Merchant Ref
        const merchant_ref = `INV-${Date.now()}-${nanoid(4).toUpperCase()}`;

        // 2. Prepare Payload
        const payload: TransactionPayload = {
            method: payment_method,
            merchant_ref,
            amount,
            customer_name: name,
            customer_email: email,
            customer_phone: phone,
            order_items: [
                {
                    sku: `SUB-${duration}M`,
                    name: `Langganan ${duration} Bulan`,
                    price: amount,
                    quantity: 1,
                    image_url: 'https://mobisgroup.id/assets/premium-badge.png', // Placeholder
                }
            ],
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/invoice/${merchant_ref}`,
            expired_time: Math.floor(Date.now() / 1000) + (24 * 60 * 60), // 24 hours
        };

        // 3. Create Transaction in DB (Initial State)
        // We use merchant_ref as primary identifier initially
        db.prepare(`
            INSERT INTO transactions (
                reference, merchant_ref, amount, status, plan_duration,
                customer_name, customer_email, customer_phone, payment_method
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(
            `TEMP-${merchant_ref}`, // Temporary reference until we get real one from TriPay
            merchant_ref, amount, 'UNPAID', duration,
            name, email, phone, payment_method
        );

        // 4. Call TriPay
        const transaction = await tripay.createTransaction(payload);

        // 5. Update DB with real Reference and Payment Details
        db.prepare(`
            UPDATE transactions 
            SET reference = ?, pay_code = ?, qr_url = ?, checkout_url = ?
            WHERE merchant_ref = ?
        `).run(
            transaction.reference,
            transaction.pay_code,
            transaction.qr_url,
            transaction.checkout_url,
            merchant_ref
        );

        return NextResponse.json({ 
            success: true, 
            reference: transaction.reference 
        });

    } catch (error: any) {
        console.error('Payment Error:', error);
        return NextResponse.json({ success: false, message: error.message || 'Gagal memproses pembayaran' }, { status: 500 });
    }
}
