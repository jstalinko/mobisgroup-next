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
"[project]/src/lib/crypto.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decryptData",
    ()=>decryptData,
    "encryptData",
    ()=>encryptData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/crypto-js/index.js [app-route] (ecmascript)");
;
const SECRET_KEY = ("TURBOPACK compile-time value", "SekaiDrama-Yusril") || "dramaku-default-secret";
function encryptData(data) {
    // If data is an object/array, stringify it first
    const stringified = typeof data === "string" ? data : JSON.stringify(data);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].AES.encrypt(stringified, SECRET_KEY).toString();
}
function decryptData(ciphertext) {
    try {
        const bytes = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].AES.decrypt(ciphertext, SECRET_KEY);
        const decryptedString = bytes.toString(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$crypto$2d$js$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].enc.Utf8);
        if (!decryptedString) {
            throw new Error("Decryption failed: Empty result");
        }
        return JSON.parse(decryptedString);
    } catch (error) {
        console.error("Decryption Error:", error);
        throw error;
    }
}
}),
"[project]/src/lib/api-utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encryptedResponse",
    ()=>encryptedResponse,
    "safeJson",
    ()=>safeJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/crypto.ts [app-route] (ecmascript)");
;
;
async function safeJson(response) {
    const text = await response.text();
    if (!text || !text.trim()) {
        throw new Error(`Empty response from upstream: ${response.url}`);
    }
    try {
        return JSON.parse(text);
    } catch (error) {
        console.error("JSON Parse Error:", error);
        console.error("Raw Text (truncated):", text.substring(0, 200));
        throw new Error("Invalid JSON response from upstream");
    }
}
function encryptedResponse(data, status = 200) {
    const encrypted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$crypto$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptData"])(data);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        data: encrypted
    }, {
        status
    });
}
}),
"[project]/src/app/api/reelshort/homepage/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
const UPSTREAM_API = (("TURBOPACK compile-time value", "https://api.sansekai.my.id/api") || "https://api.sansekai.my.id/api") + "/reelshort";
async function GET() {
    try {
        const response = await fetch(`${UPSTREAM_API}/homepage`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Failed to fetch data"
            }, {
                status: response.status
            });
        }
        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeJson"])(response);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["encryptedResponse"])(data);
    } catch (error) {
        console.error("ReelShort API Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6fe1c236._.js.map