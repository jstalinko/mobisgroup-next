import { NextResponse } from 'next/server';
import { TriPayClient } from '@/lib/tripay';

export async function GET() {
    try {
        const tripay = new TriPayClient();
        const channels = await tripay.getPaymentChannels();
        return NextResponse.json({ success: true, data: channels });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
