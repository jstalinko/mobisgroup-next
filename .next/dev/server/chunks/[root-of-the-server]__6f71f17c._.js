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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/src/app/api/payment/check/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tripay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tripay.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
;
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
        // 1. Get current status from DB
        const tx = db.prepare('SELECT * FROM transactions WHERE reference = ?').get(reference);
        if (!tx) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Transaction not found'
            }, {
                status: 404
            });
        }
        // 2. If already PAID, return immediately
        if (tx.status === 'PAID') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
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
            const access_key = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(12).toUpperCase();
            // Calculate subscription dates
            const now = new Date();
            const start_at = now.toISOString();
            const end_at = new Date(now.setMonth(now.getMonth() + tx.plan_duration)).toISOString();
            // Generate User Name based on Customer Name
            const userName = tx.customer_name || `User-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(6)}`;
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
            db.transaction(()=>{
                updateTx.run(access_key, reference);
                insertUser.run(userName, access_key, tx.plan_duration, start_at, end_at);
            })();
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: true,
                status: 'PAID',
                access_key
            });
        }
        // 5. Update status if changed (FAILED, EXPIRED) but not PAID
        if (currentStatus !== tx.status) {
            db.prepare('UPDATE transactions SET status = ? WHERE reference = ?').run(currentStatus, reference);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            status: currentStatus
        });
    } catch (error) {
        console.error('Check Status Error:', error);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__6f71f17c._.js.map