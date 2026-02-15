import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
    const db = getDb();
    try {
        // Fetch only active plans for public view
        const plans = db.prepare('SELECT * FROM plans WHERE is_active = 1 ORDER BY price ASC').all();
        
        // Parse features JSON
        const parsedPlans = plans.map((p: any) => ({
            ...p,
            features: JSON.parse(p.features)
        }));
        
        return NextResponse.json({ success: true, data: parsedPlans });
    } catch (error: any) {
        console.error('Error fetching plans:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
