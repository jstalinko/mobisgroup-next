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
"[project]/src/app/api/payment/create/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tripay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tripay.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/nanoid/index.js [app-route] (ecmascript) <locals>");
;
;
;
;
async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, phone, payment_method, amount, duration } = body;
        if (!name || !email || !phone || !payment_method || !amount || !duration) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: 'Data tidak lengkap'
            }, {
                status: 400
            });
        }
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getDb"])();
        const tripay = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tripay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TriPayClient"]();
        // 1. Generate Merchant Ref
        const merchant_ref = `INV-${Date.now()}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nanoid$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["nanoid"])(4).toUpperCase()}`;
        // 2. Prepare Payload
        const payload = {
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
                    image_url: 'https://mobisgroup.id/assets/premium-badge.png'
                }
            ],
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/invoice/${merchant_ref}`,
            expired_time: Math.floor(Date.now() / 1000) + 24 * 60 * 60
        };
        // 3. Create Transaction in DB (Initial State)
        // We use merchant_ref as primary identifier initially
        db.prepare(`
            INSERT INTO transactions (
                reference, merchant_ref, amount, status, plan_duration,
                customer_name, customer_email, customer_phone, payment_method
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).run(`TEMP-${merchant_ref}`, merchant_ref, amount, 'UNPAID', duration, name, email, phone, payment_method);
        // 4. Call TriPay
        const transaction = await tripay.createTransaction(payload);
        // 5. Update DB with real Reference and Payment Details
        db.prepare(`
            UPDATE transactions 
            SET reference = ?, pay_code = ?, qr_url = ?, checkout_url = ?
            WHERE merchant_ref = ?
        `).run(transaction.reference, transaction.pay_code, transaction.qr_url, transaction.checkout_url, merchant_ref);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            reference: transaction.reference
        });
    } catch (error) {
        console.error('Payment Error:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: error.message || 'Gagal memproses pembayaran'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__20319bd2._.js.map