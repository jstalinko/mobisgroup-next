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
"[project]/src/app/api/payment/channels/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tripay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tripay.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const tripay = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tripay$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TriPayClient"]();
        const channels = await tripay.getPaymentChannels();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: channels
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06ebea83._.js.map