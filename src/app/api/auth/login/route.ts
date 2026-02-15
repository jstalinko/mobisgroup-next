import { NextRequest, NextResponse } from 'next/server';
import { getDb, User, Device } from '@/lib/db';
import { createToken } from '@/lib/auth';
import { headers } from 'next/headers';

export async function POST(req: NextRequest) {
    try {
        const { access_key, device_id } = await req.json();
        const db = getDb();

        // 1. Find user
        const user = db.prepare('SELECT * FROM users WHERE access_key = ?').get(access_key) as User | undefined;

        if (!user) {
            return NextResponse.json({ success: false, message: 'Invalid Access Key' }, { status: 401 });
        }

        // 2. Check if active (date range)
        const now = new Date();
        const start = user.start_at ? new Date(user.start_at) : null;
        const end = user.end_at ? new Date(user.end_at) : null;

        if (start && now < start) {
            return NextResponse.json({ success: false, message: 'Subscription not started yet' }, { status: 403 });
        }
        if (end && now > end) {
            return NextResponse.json({ success: false, message: 'Subscription expired' }, { status: 403 });
        }

        // 3. Device check
        const devices = db.prepare("SELECT * FROM devices WHERE user_id = ? AND status = 'active'").all(user.id) as Device[];
        const currentDevice = devices.find(d => d.device_id === device_id);

        if (!currentDevice) {
            if (devices.length >= user.max_devices) {
                return NextResponse.json({ 
                    success: false, 
                    message: `Device limit reached (${user.max_devices}). Please logout from other devices.` 
                }, { status: 403 });
            }

            // Register new device
            const headerList = await headers();
            const user_agent = headerList.get('user-agent');
            const ip = headerList.get('x-forwarded-for') || 'unknown';

            db.prepare(`
                INSERT INTO devices (user_id, device_id, user_agent, ip)
                VALUES (?, ?, ?, ?)
            `).run(user.id, device_id, user_agent, ip);
        }

        // 4. Create session
        const token = await createToken({ 
            user_id: user.id, 
            access_key: user.access_key,
            role: 'user' 
        });

        const response = NextResponse.json({ success: true });
        response.cookies.set('auth_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            path: '/',
        });
        
        // Add non-httpOnly hint cookies for the client-side UI
        response.cookies.set('is_logged_in', 'true', {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30,
            path: '/',
        });

        response.cookies.set('user_role', 'user', {
            httpOnly: false,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 * 30,
            path: '/',
        });

        return response;
    } catch (error: any) {
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
