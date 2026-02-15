import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(req: NextRequest) {
    const session = await getSession();
    if (session?.role !== 'admin') {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    const db = getDb();
    try {
        const plans = db.prepare('SELECT * FROM plans ORDER BY price ASC').all();
        // Parse features JSON
        const parsedPlans = plans.map((p: any) => ({
            ...p,
            features: JSON.parse(p.features)
        }));
        return NextResponse.json({ success: true, data: parsedPlans });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    const session = await getSession();
    if (session?.role !== 'admin') {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { name, price, duration, features, is_popular, is_active } = body;

        const db = getDb();
        db.prepare(`
            INSERT INTO plans (name, price, duration, features, is_popular, is_active)
            VALUES (?, ?, ?, ?, ?, ?)
        `).run(
            name, price, duration, 
            JSON.stringify(features), 
            is_popular ? 1 : 0, 
            is_active ? 1 : 0
        );

        return NextResponse.json({ success: true, message: 'Plan created' });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    const session = await getSession();
    if (session?.role !== 'admin') {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const body = await req.json();
        const { id, name, price, duration, features, is_popular, is_active } = body;

        const db = getDb();
        db.prepare(`
            UPDATE plans 
            SET name = ?, price = ?, duration = ?, features = ?, is_popular = ?, is_active = ?
            WHERE id = ?
        `).run(
            name, price, duration, 
            JSON.stringify(features), 
            is_popular ? 1 : 0, 
            is_active ? 1 : 0,
            id
        );

        return NextResponse.json({ success: true, message: 'Plan updated' });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    const session = await getSession();
    if (session?.role !== 'admin') {
        return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');

        const db = getDb();
        db.prepare('DELETE FROM plans WHERE id = ?').run(id);

        return NextResponse.json({ success: true, message: 'Plan deleted' });
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
