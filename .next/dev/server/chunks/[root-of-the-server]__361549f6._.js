module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDb",
    ()=>getDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__ = __turbopack_context__.i("[externals]/better-sqlite3 [external] (better-sqlite3, cjs, [project]/node_modules/better-sqlite3)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const DB_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'database.sqlite');
let db = null;
function getDb() {
    if (!db) {
        db = new __TURBOPACK__imported__module__$5b$externals$5d2f$better$2d$sqlite3__$5b$external$5d$__$28$better$2d$sqlite3$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$better$2d$sqlite3$29$__["default"](DB_PATH);
        db.pragma('journal_mode = WAL');
        db.pragma('foreign_keys = ON');
    }
    return db;
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/src/lib/tripay.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TriPayClient",
    ()=>TriPayClient,
    "tripay",
    ()=>tripay
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
const TRIPAY_PRODUCTION = process.env.TRIPAY_PRODUCTION === 'true';
const TRIPAY_API_URL = TRIPAY_PRODUCTION ? 'https://tripay.co.id/api' : 'https://tripay.co.id/api-sandbox';
const TRIPAY_API_KEY = process.env.TRIPAY_API_KEY || '';
const TRIPAY_PRIVATE_KEY = process.env.TRIPAY_PRIVATE_KEY || process.env.TRIPAY_SECRET_KEY || '';
const TRIPAY_MERCHANT_CODE = process.env.TRIPAY_MERCHANT_CODE || '';
class TriPayClient {
    apiKey;
    privateKey;
    merchantCode;
    baseUrl;
    constructor(){
        this.apiKey = TRIPAY_API_KEY;
        this.privateKey = TRIPAY_PRIVATE_KEY;
        this.merchantCode = TRIPAY_MERCHANT_CODE;
        this.baseUrl = TRIPAY_API_URL;
    }
    generateSignature(merchantRef, amount) {
        const data = this.merchantCode + merchantRef + amount;
        return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHmac('sha256', this.privateKey).update(data).digest('hex');
    }
    async request(method, endpoint, data) {
        const url = `${this.baseUrl}${endpoint}`;
        const options = {
            method,
            headers: {
                'Authorization': `Bearer ${this.apiKey}`,
                'Content-Type': 'application/json'
            }
        };
        if (data) {
            options.body = JSON.stringify(data);
        }
        const response = await fetch(url, options);
        const result = await response.json();
        if (!result.success) {
            throw new Error(result.message || 'TriPay API Error');
        }
        return result.data;
    }
    async getPaymentChannels() {
        return this.request('GET', '/merchant/payment-channel');
    }
    async getFeeCalculator(code, amount) {
        return this.request('GET', `/merchant/fee-calculator?code=${code}&amount=${amount}`);
    }
    async createTransaction(payload) {
        const signature = this.generateSignature(payload.merchant_ref, payload.amount);
        const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 60; // 24 hours
        const data = {
            ...payload,
            expired_time: payload.expired_time || expiry,
            signature
        };
        return this.request('POST', '/transaction/create', data);
    }
    async getTransactionDetail(reference) {
        return this.request('GET', `/transaction/detail?reference=${reference}`);
    }
}
const tripay = new TriPayClient();
}),
"[project]/src/app/api/payment/detail/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tripay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tripay.ts [app-route] (ecmascript)");
;
;
;
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const reference = searchParams.get('reference');
    if (!reference) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: 'Reference required'
        }, {
            status: 400
        });
    }
    const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
    const tripay = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tripay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TriPayClient"]();
    try {
        // 1. Get from DB
        const tx = db.prepare('SELECT * FROM transactions WHERE reference = ?').get(reference);
        if (!tx) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Transaction not found'
            }, {
                status: 404
            });
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
            ...tripayDetail || {},
            status: tx.status,
            // Actually, if TriPay says PAID but DB says UNPAID, we should update DB.
            // But let the check API handle status updates.
            // Here we just want to show instructions.
            instructions: tripayDetail?.instructions || [],
            qr_url: tripayDetail?.qr_url || tx.qr_url,
            pay_code: tripayDetail?.pay_code || tx.pay_code,
            payment_name: tripayDetail?.payment_name || tx.payment_method,
            expired_time: tripayDetail?.expired_time || Math.floor(Date.now() / 1000) + 86400
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: merged
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__361549f6._.js.map