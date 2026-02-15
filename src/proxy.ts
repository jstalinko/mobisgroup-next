import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'default-secret-change-me');

// Simple in-memory store for rate limiting
const rateLimit = new Map<string, { count: number; startTime: number }>();

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // --- 1. Rate Limiting (Original Proxy Logic) ---
    if (pathname.startsWith('/api')) {
        let ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? '127.0.0.1';
        if (ip === '::1') ip = '127.0.0.1';

        const limit = 150; // Requests per window
        const windowMs = 60 * 1000; // 1 minute window

        if (!rateLimit.has(ip)) {
            rateLimit.set(ip, { count: 0, startTime: Date.now() });
        }

        const data = rateLimit.get(ip)!;
        if (Date.now() - data.startTime > windowMs) {
            data.count = 0;
            data.startTime = Date.now();
        }

        data.count++;

        if (data.count > limit) {
            return new NextResponse(
                JSON.stringify({ 
                    success: false, 
                    message: 'Too Many Requests',
                    error: "Terlalu banyak permintaan. Mohon tunggu sebentar."
                }),
                { status: 429, headers: { 'content-type': 'application/json' } }
            );
        }
    }

    // --- 2. Authentication Protection ---
    const token = request.cookies.get('auth_token')?.value;

    // Admin protection
    if (pathname.startsWith('/admin')) {
        if (pathname === '/admin/login') {
            if (token) {
                try {
                    const { payload } = await jwtVerify(token, secret);
                    if (payload.role === 'admin') {
                        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
                    }
                } catch (e) {}
            }
            return NextResponse.next();
        }

        if (!token) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        try {
            const { payload } = await jwtVerify(token, secret);
            if (payload.role !== 'admin') {
                return NextResponse.redirect(new URL('/admin/login', request.url));
            }
            return NextResponse.next();
        } catch (e) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    // Login page protection (redirect if already logged in)
    if (pathname === '/login') {
        if (token) {
            try {
                await jwtVerify(token, secret);
                return NextResponse.redirect(new URL('/', request.url));
            } catch (e) {}
        }
        return NextResponse.next();
    }

    // Watch protection
    if (pathname.startsWith('/watch')) {
        if (!token) {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }

        try {
            const { payload } = await jwtVerify(token, secret);
            if (payload.role !== 'user' && payload.role !== 'admin') {
                const loginUrl = new URL('/login', request.url);
                loginUrl.searchParams.set('redirect', pathname);
                return NextResponse.redirect(loginUrl);
            }
            return NextResponse.next();
        } catch (e) {
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    return NextResponse.next();
}

// Configure which paths the proxy runs on
export const config = {
    matcher: [
        '/api/:path*',
        '/admin/:path*',
        '/watch/:path*',
        '/login',
    ],
};
