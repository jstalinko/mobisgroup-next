import { NextRequest, NextResponse } from 'next/server';
import { getDb, User } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { nanoid } from 'nanoid';

// Middleware-like check for admin session
async function isAdmin() {
    const session = await getSession();
    return session?.role === 'admin';
}

export async function GET(req: NextRequest) {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = getDb();
    const users = db.prepare('SELECT * FROM users ORDER BY created_at DESC').all() as User[];
    return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { name, subscription_month, start_at, end_at, max_devices } = await req.json();
        const db = getDb();

        const access_key = nanoid(12).toUpperCase();
        const finalName = name || `MobisUser${Math.floor(Math.random() * 10000)}`;

        const stmt = db.prepare(`
            INSERT INTO users (name, access_key, subscription_month, start_at, end_at, max_devices)
            VALUES (?, ?, ?, ?, ?, ?)
        `);

        const result = stmt.run(finalName, access_key, subscription_month, start_at, end_at, max_devices || 3);

        return NextResponse.json({ 
            success: true, 
            user: { id: result.lastInsertRowid, name: finalName, access_key } 
        });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { id, name, subscription_month, start_at, end_at, max_devices } = await req.json();
        const db = getDb();

        const stmt = db.prepare(`
            UPDATE users 
            SET name = ?, subscription_month = ?, start_at = ?, end_at = ?, max_devices = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);

        stmt.run(name, subscription_month, start_at, end_at, max_devices, id);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    if (!(await isAdmin())) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        const db = getDb();

        db.prepare('DELETE FROM users WHERE id = ?').run(id);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
