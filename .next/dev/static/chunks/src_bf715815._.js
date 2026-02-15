(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/PlatformSelector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlatformSelector",
    ()=>PlatformSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlatform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlatform.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function PlatformSelector() {
    _s();
    const { currentPlatform, setPlatform, platforms, getPlatformInfo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlatform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const currentPlatformInfo = getPlatformInfo(currentPlatform);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlatformSelector.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "PlatformSelector.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["PlatformSelector.useEffect"];
        }
    }["PlatformSelector.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full py-4 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "block md:hidden",
                ref: dropdownRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-muted/50 hover:bg-muted/80 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-6 h-6 rounded-md overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: currentPlatformInfo.logo,
                                            alt: currentPlatformInfo.name,
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "24px"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PlatformSelector.tsx",
                                            lineNumber: 36,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlatformSelector.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-foreground",
                                        children: currentPlatformInfo.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlatformSelector.tsx",
                                        lineNumber: 44,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/PlatformSelector.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                className: `w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/PlatformSelector.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/PlatformSelector.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-4 right-4 mt-2 bg-card rounded-xl shadow-lg border border-border overflow-hidden z-50",
                        children: platforms.map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setPlatform(platform.id);
                                    setIsOpen(false);
                                },
                                className: `w-full flex items-center gap-3 px-4 py-3 transition-colors ${currentPlatform === platform.id ? 'bg-primary/10 text-primary' : 'hover:bg-muted/50'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-6 h-6 rounded-md overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: platform.logo,
                                            alt: platform.name,
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "24px"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PlatformSelector.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlatformSelector.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: platform.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlatformSelector.tsx",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    currentPlatform === platform.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-auto w-2 h-2 rounded-full bg-primary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/PlatformSelector.tsx",
                                        lineNumber: 78,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, platform.id, true, {
                                fileName: "[project]/src/components/PlatformSelector.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/PlatformSelector.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/PlatformSelector.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:flex items-center gap-3",
                children: platforms.map((platform)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlatformButton, {
                        platform: platform,
                        isActive: currentPlatform === platform.id,
                        onClick: ()=>setPlatform(platform.id)
                    }, platform.id, false, {
                        fileName: "[project]/src/components/PlatformSelector.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/PlatformSelector.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlatformSelector.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(PlatformSelector, "/uYS11W/vEpB7tsSvyML+OUetxw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlatform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"]
    ];
});
_c = PlatformSelector;
function PlatformButton({ platform, isActive, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: `
        relative flex items-center gap-2 px-4 py-2.5 rounded-full
        transition-all duration-300 ease-out
        ${isActive ? "bg-primary/20 ring-2 ring-primary shadow-lg shadow-primary/20" : "bg-muted/50 hover:bg-muted/80"}
      `,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-6 h-6 rounded-md overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: platform.logo,
                    alt: platform.name,
                    fill: true,
                    className: "object-cover",
                    sizes: "24px"
                }, void 0, false, {
                    fileName: "[project]/src/components/PlatformSelector.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/PlatformSelector.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `
          font-medium text-sm whitespace-nowrap
          ${isActive ? "text-primary" : "text-muted-foreground"}
        `,
                children: platform.name
            }, void 0, false, {
                fileName: "[project]/src/components/PlatformSelector.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/PlatformSelector.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/PlatformSelector.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c1 = PlatformButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "PlatformSelector");
__turbopack_context__.k.register(_c1, "PlatformButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/UnifiedMediaCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnifiedMediaCard",
    ()=>UnifiedMediaCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
"use client";
;
;
;
function UnifiedMediaCard({ title, cover, link, episodes = 0, topLeftBadge, topRightBadge, index = 0 }) {
    // SHARED STYLES
    // Responsive: Mobile (Default) -> smaller | Desktop (md:) -> regular 10px
    // Using text-[8px] for mobile and text-[10px] for desktop
    // Note: Removed absolute positioning from BASE, moving it to container
    const BADGE_BASE = "px-1 py-0.5 md:px-1.5 rounded font-bold text-white shadow-sm leading-none tracking-wide flex items-center justify-center font-sans text-[8px] md:text-[10px]";
    const BADGE_FONT = {
        lineHeight: "1",
        fontFamily: "inherit"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: link,
        className: "group relative block",
        style: {
            animationDelay: `${index * 50}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-[2/3] relative overflow-hidden rounded-xl bg-muted/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: cover.includes(".heic") ? `https://wsrv.nl/?url=${encodeURIComponent(cover)}&output=jpg` : cover,
                        alt: title,
                        className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                        loading: "lazy",
                        referrerPolicy: "no-referrer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1.5 left-1.5 right-1.5 md:top-2 md:left-2 md:right-2 flex justify-between items-start pointer-events-none z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 min-w-0 pr-1 flex justify-start",
                                children: topLeftBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${BADGE_BASE} truncate max-w-full`,
                                    style: {
                                        ...BADGE_FONT,
                                        backgroundColor: topLeftBadge.color || "#E52E2E",
                                        color: topLeftBadge.textColor || "#FFFFFF"
                                    },
                                    children: topLeftBadge.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "shrink-0 flex justify-end",
                                children: topRightBadge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${BADGE_BASE} ${topRightBadge.isTransparent ? 'backdrop-blur-sm' : ''}`,
                                    style: {
                                        ...BADGE_FONT,
                                        backgroundColor: topRightBadge.isTransparent ? "rgba(0,0,0,0.6)" : topRightBadge.color || "rgba(0,0,0,0.6)",
                                        color: topRightBadge.textColor || "#FFFFFF"
                                    },
                                    children: topRightBadge.text
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                                    lineNumber: 87,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    episodes > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-1.5 left-1.5 md:bottom-2 md:left-2 flex items-center gap-1 text-[9px] md:text-xs text-white font-medium pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-2.5 h-2.5 md:w-3 md:h-3 fill-white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    episodes,
                                    " Ep"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                className: "w-4 h-4 md:w-5 md:h-5 text-white fill-white ml-0.5"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2 md:pt-3 pb-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-display font-semibold text-xs md:text-sm leading-snug line-clamp-2 text-foreground group-hover:text-primary transition-colors",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UnifiedMediaCard.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UnifiedMediaCard.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = UnifiedMediaCard;
var _c;
__turbopack_context__.k.register(_c, "UnifiedMediaCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/UnifiedMediaCardSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnifiedMediaCardSkeleton",
    ()=>UnifiedMediaCardSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function UnifiedMediaCardSkeleton({ index = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl overflow-hidden animate-fade-up w-full",
        style: {
            animationDelay: `${index * 50}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "aspect-[2/3] bg-muted/50 relative overflow-hidden rounded-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-muted/30 to-transparent animate-shimmer",
                    style: {
                        backgroundSize: '200% 100%'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/UnifiedMediaCardSkeleton.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UnifiedMediaCardSkeleton.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-3 pb-1 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 bg-muted/50 rounded-lg w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedMediaCardSkeleton.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-3 bg-muted/50 rounded-lg w-2/3"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedMediaCardSkeleton.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UnifiedMediaCardSkeleton.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UnifiedMediaCardSkeleton.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = UnifiedMediaCardSkeleton;
var _c;
__turbopack_context__.k.register(_c, "UnifiedMediaCardSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/UnifiedErrorDisplay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UnifiedErrorDisplay",
    ()=>UnifiedErrorDisplay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
;
;
function UnifiedErrorDisplay({ message = "Terjadi kesalahan saat memuat data.", title = "Gagal Memuat", onRetry, retryLabel = "Coba Lagi" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center p-8 md:p-12 text-center space-y-6 bg-[#1a1625] rounded-2xl border border-white/5 mx-auto max-w-4xl w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-full bg-red-500/10 p-4 ring-1 ring-red-500/20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "w-8 h-8 text-red-500"
                }, void 0, false, {
                    fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display font-bold text-lg md:text-xl text-white",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white/60 max-w-sm mx-auto",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRetry,
                className: "flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#3D2942] text-purple-300 text-sm font-medium hover:bg-[#4D3453] transition-colors hover:text-purple-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: retryLabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UnifiedErrorDisplay.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = UnifiedErrorDisplay;
var _c;
__turbopack_context__.k.register(_c, "UnifiedErrorDisplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/DramaSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DramaSection",
    ()=>DramaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCardSkeleton.tsx [app-client] (ecmascript)"); // Import skeleton
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedErrorDisplay.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function DramaSection({ title, dramas, isLoading, error, onRetry }) {
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "font-display font-bold text-xl md:text-2xl text-foreground mb-4",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/components/DramaSection.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedErrorDisplay"], {
                    title: `Gagal Memuat ${title}`,
                    message: "Tidak dapat mengambil data drama.",
                    onRetry: onRetry
                }, void 0, false, {
                    fileName: "[project]/src/components/DramaSection.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DramaSection.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this);
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-7 md:h-8 w-48 bg-white/10 rounded-lg animate-pulse mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/DramaSection.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                    children: Array.from({
                        length: 12
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCardSkeleton"], {}, i, false, {
                            fileName: "[project]/src/components/DramaSection.tsx",
                            lineNumber: 41,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/DramaSection.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DramaSection.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-display font-bold text-xl md:text-2xl text-foreground mb-4",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/DramaSection.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                children: dramas?.slice(0, 16).map((drama, index)=>{
                    // Normalize badge color: If text is "Terpopuler", force RED to match ReelShort/NetShort
                    const isPopular = drama.corner?.name?.toLowerCase().includes("populer");
                    const badgeColor = isPopular ? "#E52E2E" : drama.corner?.color || "#e5a00d";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                        index: index,
                        title: drama.bookName,
                        cover: drama.coverWap || drama.cover || "",
                        link: `/detail/dramabox/${drama.bookId}`,
                        episodes: drama.chapterCount,
                        topLeftBadge: drama.corner ? {
                            text: drama.corner.name,
                            color: badgeColor
                        } : null,
                        topRightBadge: drama.rankVo ? {
                            text: drama.rankVo.hotCode,
                            isTransparent: true
                        } : null
                    }, drama.bookId || `drama-${index}`, false, {
                        fileName: "[project]/src/components/DramaSection.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/DramaSection.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DramaSection.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = DramaSection;
var _c;
__turbopack_context__.k.register(_c, "DramaSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/BannerCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BannerCarousel",
    ()=>BannerCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function BannerCarousel({ banners, autoPlayInterval = 5000 }) {
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const nextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BannerCarousel.useCallback[nextSlide]": ()=>{
            setCurrentIndex({
                "BannerCarousel.useCallback[nextSlide]": (prev)=>(prev + 1) % banners.length
            }["BannerCarousel.useCallback[nextSlide]"]);
        }
    }["BannerCarousel.useCallback[nextSlide]"], [
        banners.length
    ]);
    const prevSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "BannerCarousel.useCallback[prevSlide]": ()=>{
            setCurrentIndex({
                "BannerCarousel.useCallback[prevSlide]": (prev)=>(prev - 1 + banners.length) % banners.length
            }["BannerCarousel.useCallback[prevSlide]"]);
        }
    }["BannerCarousel.useCallback[prevSlide]"], [
        banners.length
    ]);
    // Auto-play
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BannerCarousel.useEffect": ()=>{
            if (isHovered || banners.length <= 1) return;
            const interval = setInterval(nextSlide, autoPlayInterval);
            return ({
                "BannerCarousel.useEffect": ()=>clearInterval(interval)
            })["BannerCarousel.useEffect"];
        }
    }["BannerCarousel.useEffect"], [
        isHovered,
        nextSlide,
        autoPlayInterval,
        banners.length
    ]);
    if (banners.length === 0) return null;
    const currentBanner = banners[currentIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full aspect-[3/1] md:aspect-[4/1] rounded-2xl overflow-hidden group",
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: `/detail/reelshort/${currentBanner.jump_param.book_id}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: currentBanner.pic,
                        alt: currentBanner.jump_param.book_title,
                        className: "w-full h-full object-cover transition-transform duration-700"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerCarousel.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerCarousel.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerCarousel.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-6 left-6 right-20 space-y-3",
                        children: [
                            currentBanner.pic_artistic_word && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: currentBanner.pic_artistic_word,
                                alt: "",
                                className: "h-12 md:h-16 object-contain"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BannerCarousel.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg md:text-xl font-bold text-white line-clamp-1",
                                children: currentBanner.jump_param.book_title
                            }, void 0, false, {
                                fileName: "[project]/src/components/BannerCarousel.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            currentBanner.jump_param.book_theme && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: currentBanner.jump_param.book_theme.slice(0, 3).map((theme)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-full text-xs bg-white/20 text-white backdrop-blur-sm",
                                        children: theme
                                    }, theme, false, {
                                        fileName: "[project]/src/components/BannerCarousel.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/BannerCarousel.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            currentBanner.play_button === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-4 h-4 fill-current"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/BannerCarousel.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    "Tonton"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BannerCarousel.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BannerCarousel.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    currentBanner.book_mark?.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-4 left-4 px-3 py-1 rounded-md text-xs font-bold",
                        style: {
                            backgroundColor: currentBanner.book_mark.color || "#E52E2E",
                            color: currentBanner.book_mark.text_color || "#FFFFFF"
                        },
                        children: currentBanner.book_mark.text
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerCarousel.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BannerCarousel.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            banners.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.preventDefault();
                            prevSlide();
                        },
                        className: "absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BannerCarousel.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerCarousel.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.preventDefault();
                            nextSlide();
                        },
                        className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BannerCarousel.tsx",
                            lineNumber: 129,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BannerCarousel.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            banners.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-4 right-4 flex items-center gap-1.5",
                children: banners.slice(0, 10).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: (e)=>{
                            e.preventDefault();
                            setCurrentIndex(idx);
                        },
                        className: `
                w-2 h-2 rounded-full transition-all duration-200
                ${idx === currentIndex ? "bg-primary w-6" : "bg-white/50 hover:bg-white/80"}
              `
                    }, idx, false, {
                        fileName: "[project]/src/components/BannerCarousel.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/BannerCarousel.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BannerCarousel.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(BannerCarousel, "V9I8LM0w+h43G5QAt92Z3XpoNwY=");
_c = BannerCarousel;
var _c;
__turbopack_context__.k.register(_c, "BannerCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ReelShortSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReelShortSection",
    ()=>ReelShortSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReelShort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useReelShort.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BannerCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BannerCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedErrorDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function ReelShortSection() {
    _s();
    const { data, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReelShort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReelShortHomepage"])();
    // Group content by sections
    const sections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReelShortSection.useMemo[sections]": ()=>{
            if (!data?.data?.lists) return {
                banners: [],
                bookGroups: []
            };
            const tabs = data.data.tab_list || [];
            const popularTab = tabs.find({
                "ReelShortSection.useMemo[sections]": (t)=>t.tab_name === "POPULER"
            }["ReelShortSection.useMemo[sections]"]) || tabs[0];
            if (!popularTab) return {
                banners: [],
                bookGroups: []
            };
            const tabLists = data.data.lists.filter({
                "ReelShortSection.useMemo[sections].tabLists": (list)=>list.tab_id === popularTab.tab_id
            }["ReelShortSection.useMemo[sections].tabLists"]);
            const banners = [];
            const bookGroups = [];
            tabLists.forEach({
                "ReelShortSection.useMemo[sections]": (list, index)=>{
                    if (list.banners && list.banners.length > 0) {
                        banners.push(...list.banners);
                    }
                    if (list.books && list.books.length > 0) {
                        const sectionNames = [
                            "Populer",
                            "Terbaru",
                            "Trending",
                            "Untuk Kamu"
                        ];
                        const title = sectionNames[index] || `Section ${index + 1}`;
                        bookGroups.push({
                            title,
                            books: list.books
                        });
                    }
                }
            }["ReelShortSection.useMemo[sections]"]);
            return {
                banners,
                bookGroups
            };
        }
    }["ReelShortSection.useMemo[sections]"], [
        data
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedErrorDisplay"], {
            title: "Gagal Memuat ReelShort",
            message: "Terjadi kesalahan saat mengambil data dari server.",
            onRetry: ()=>refetch()
        }, void 0, false, {
            fileName: "[project]/src/components/ReelShortSection.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-[21/9] rounded-2xl bg-muted/50 animate-pulse"
                }, void 0, false, {
                    fileName: "[project]/src/components/ReelShortSection.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                Array.from({
                    length: 3
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionSkeleton, {}, i, false, {
                        fileName: "[project]/src/components/ReelShortSection.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ReelShortSection.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    const { banners, bookGroups } = sections;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            banners.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BannerCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BannerCarousel"], {
                banners: banners
            }, void 0, false, {
                fileName: "[project]/src/components/ReelShortSection.tsx",
                lineNumber: 69,
                columnNumber: 30
            }, this),
            bookGroups.map((group, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-xl md:text-2xl text-foreground mb-4",
                            children: group.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReelShortSection.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                            children: group.books.filter((book)=>book.book_id && book.book_pic).slice(0, 16).map((book, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                    index: index,
                                    title: book.book_title,
                                    cover: book.book_pic,
                                    link: `/detail/reelshort/${book.book_id}`,
                                    episodes: book.chapter_count,
                                    topLeftBadge: book.book_mark?.text ? {
                                        text: book.book_mark.text,
                                        color: book.book_mark.color || "#E52E2E",
                                        textColor: book.book_mark.text_color
                                    } : null,
                                    topRightBadge: book.rank_level ? {
                                        text: book.rank_level,
                                        isTransparent: true
                                    } : null
                                }, book.book_id, false, {
                                    fileName: "[project]/src/components/ReelShortSection.tsx",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ReelShortSection.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/ReelShortSection.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReelShortSection.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(ReelShortSection, "c3k/sS8F0e80qffVB2oWpdxRufc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useReelShort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReelShortHomepage"]
    ];
});
_c = ReelShortSection;
function SectionSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-6 w-32 bg-muted/50 rounded animate-pulse mb-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ReelShortSection.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                children: Array.from({
                    length: 8
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-[2/3] rounded-lg bg-muted/50 animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReelShortSection.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-1.5 h-3 bg-muted/50 rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ReelShortSection.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/ReelShortSection.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ReelShortSection.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ReelShortSection.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_c1 = SectionSkeleton;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReelShortSection");
__turbopack_context__.k.register(_c1, "SectionSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NetShortHome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetShortHome",
    ()=>NetShortHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNetShort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useNetShort.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedErrorDisplay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCardSkeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ... existing emoji stripper ...
function stripEmoji(text) {
    // Comprehensive emoji removal including clock symbols, misc symbols, etc.
    return text.replace(/[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{1F550}-\u{1F567}]|[\u{231A}-\u{231B}]|[\u{23E9}-\u{23F3}]|[\u{23F8}-\u{23FA}]|[\u{25AA}-\u{25AB}]|[\u{25B6}]|[\u{25C0}]|[\u{25FB}-\u{25FE}]|[\u{2614}-\u{2615}]|[\u{2648}-\u{2653}]|[\u{267F}]|[\u{2693}]|[\u{26A1}]|[\u{26AA}-\u{26AB}]|[\u{26BD}-\u{26BE}]|[\u{26C4}-\u{26C5}]|[\u{26CE}]|[\u{26D4}]|[\u{26EA}]|[\u{26F2}-\u{26F3}]|[\u{26F5}]|[\u{26FA}]|[\u{26FD}]|[\u{2702}]|[\u{2705}]|[\u{2708}-\u{270D}]|[\u{270F}]|[\u{2712}]|[\u{2714}]|[\u{2716}]|[\u{271D}]|[\u{2721}]|[\u{2728}]|[\u{2733}-\u{2734}]|[\u{2744}]|[\u{2747}]|[\u{274C}]|[\u{274E}]|[\u{2753}-\u{2755}]|[\u{2757}]|[\u{2763}-\u{2764}]|[\u{2795}-\u{2797}]|[\u{27A1}]|[\u{27B0}]|[\u{27BF}]|[\u{2934}-\u{2935}]|[\u{2B05}-\u{2B07}]|[\u{2B1B}-\u{2B1C}]|[\u{2B50}]|[\u{2B55}]|[\u{3030}]|[\u{303D}]|[\u{3297}]|[\u{3299}]|[\u{FE0F}]/gu, '').trim();
}
// Section names to exclude (causes 404)
const EXCLUDED_SECTIONS = [
    'segera tayang',
    'coming soon',
    'upcoming'
];
function NetShortHome() {
    _s();
    const { data: theatersData, isLoading: loadingTheaters, error: errorTheaters, refetch: refetchTheaters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNetShort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetShortTheaters"])();
    const { data: forYouData, isLoading: loadingForYou, error: errorForYou, refetch: refetchForYou } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNetShort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetShortForYou"])();
    const isLoading = loadingTheaters || loadingForYou;
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-10",
            children: Array.from({
                length: 3
            }).map((_, sectionIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-7 w-48 bg-muted/50 rounded animate-pulse mb-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NetShortHome.tsx",
                            lineNumber: 29,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                            children: Array.from({
                                length: 12
                            }).map((_, cardIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCardSkeleton"], {
                                    index: cardIndex
                                }, cardIndex, false, {
                                    fileName: "[project]/src/components/NetShortHome.tsx",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/NetShortHome.tsx",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    ]
                }, sectionIndex, true, {
                    fileName: "[project]/src/components/NetShortHome.tsx",
                    lineNumber: 27,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/NetShortHome.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    if (errorTheaters || errorForYou) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedErrorDisplay"], {
            title: "Gagal Memuat NetShort",
            message: "Tidak dapat terhubung ke layanan NetShort.",
            onRetry: ()=>{
                refetchTheaters();
                refetchForYou();
            }
        }, void 0, false, {
            fileName: "[project]/src/components/NetShortHome.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this);
    }
    // Filter out excluded sections
    const filteredGroups = (theatersData?.data || []).filter((group)=>{
        const sectionName = stripEmoji(group.groupName).toLowerCase();
        return !EXCLUDED_SECTIONS.some((excluded)=>sectionName.includes(excluded));
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-10",
        children: [
            forYouData?.data && forYouData.data.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold font-display text-foreground",
                            children: "Rekomendasi Untukmu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NetShortHome.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NetShortHome.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                        children: forYouData.data.map((drama, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                index: index,
                                title: drama.title,
                                cover: drama.cover,
                                link: `/detail/netshort/${drama.shortPlayId}`,
                                episodes: drama.totalEpisodes,
                                topLeftBadge: drama.scriptName ? {
                                    text: drama.scriptName,
                                    color: "#E52E2E"
                                } : null,
                                topRightBadge: drama.heatScore ? {
                                    text: drama.heatScore,
                                    isTransparent: true
                                } : null
                            }, drama.shortPlayId, false, {
                                fileName: "[project]/src/components/NetShortHome.tsx",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/NetShortHome.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NetShortHome.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this),
            filteredGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold font-display text-foreground",
                                children: stripEmoji(group.groupName)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NetShortHome.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/NetShortHome.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                            children: group.dramas.slice(0, 12).map((drama, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                    index: index,
                                    title: drama.title,
                                    cover: drama.cover,
                                    link: `/detail/netshort/${drama.shortPlayId}`,
                                    episodes: drama.totalEpisodes,
                                    topLeftBadge: drama.scriptName ? {
                                        text: drama.scriptName,
                                        color: "#E52E2E"
                                    } : null,
                                    topRightBadge: drama.heatScore ? {
                                        text: drama.heatScore,
                                        isTransparent: true
                                    } : null
                                }, drama.shortPlayId, false, {
                                    fileName: "[project]/src/components/NetShortHome.tsx",
                                    lineNumber: 108,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/NetShortHome.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, group.groupId, true, {
                    fileName: "[project]/src/components/NetShortHome.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NetShortHome.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_s(NetShortHome, "yuxsCMFoWStKL/aXVolID3K43Fk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNetShort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetShortTheaters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useNetShort$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNetShortForYou"]
    ];
});
_c = NetShortHome;
var _c;
__turbopack_context__.k.register(_c, "NetShortHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MeloloHome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeloloHome",
    ()=>MeloloHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMelolo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMelolo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedErrorDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MeloloSectionSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-8 w-48 bg-muted/50 rounded animate-pulse"
            }, void 0, false, {
                fileName: "[project]/src/components/MeloloHome.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                children: Array.from({
                    length: 8
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "aspect-[3/4] rounded-xl bg-muted/30 animate-pulse mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MeloloHome.tsx",
                                lineNumber: 15,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-4 w-3/4 bg-muted/30 rounded animate-pulse"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MeloloHome.tsx",
                                lineNumber: 16,
                                columnNumber: 14
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/MeloloHome.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/MeloloHome.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MeloloHome.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = MeloloSectionSkeleton;
function MeloloHome() {
    _s();
    const { data: latestData, isLoading: loadingLatest, error: errorLatest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMelolo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeloloLatest"])();
    const { data: trendingData, isLoading: loadingTrending, error: errorTrending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMelolo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeloloTrending"])();
    if (errorLatest || errorTrending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedErrorDisplay"], {
            onRetry: ()=>window.location.reload()
        }, void 0, false, {
            fileName: "[project]/src/components/MeloloHome.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
    if (loadingLatest || loadingTrending) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8 animate-fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeloloSectionSkeleton, {}, void 0, false, {
                    fileName: "[project]/src/components/MeloloHome.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MeloloSectionSkeleton, {}, void 0, false, {
                    fileName: "[project]/src/components/MeloloHome.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/MeloloHome.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 animate-fade-in pb-12",
        children: [
            trendingData?.books && trendingData.books.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-xl md:text-2xl text-foreground",
                            children: "Sedang Hangat"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MeloloHome.tsx",
                            lineNumber: 60,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeloloHome.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                        children: trendingData.books.map((book, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                title: book.book_name,
                                cover: book.thumb_url,
                                link: `/detail/melolo/${book.book_id}`,
                                episodes: book.serial_count || 0,
                                topLeftBadge: null,
                                index: index
                            }, book.book_id, false, {
                                fileName: "[project]/src/components/MeloloHome.tsx",
                                lineNumber: 67,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeloloHome.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MeloloHome.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this),
            latestData?.books && latestData.books.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-xl md:text-2xl text-foreground",
                            children: "Rilis Baru"
                        }, void 0, false, {
                            fileName: "[project]/src/components/MeloloHome.tsx",
                            lineNumber: 85,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeloloHome.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                        children: latestData.books.map((book, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                title: book.book_name,
                                cover: book.thumb_url,
                                link: `/detail/melolo/${book.book_id}`,
                                episodes: book.serial_count || 0,
                                topLeftBadge: null,
                                index: index
                            }, book.book_id, false, {
                                fileName: "[project]/src/components/MeloloHome.tsx",
                                lineNumber: 92,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MeloloHome.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MeloloHome.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this),
            !loadingLatest && !loadingTrending && !latestData?.books?.length && !trendingData?.books?.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 text-muted-foreground",
                children: "Tidak ada konten tersedia saat ini."
            }, void 0, false, {
                fileName: "[project]/src/components/MeloloHome.tsx",
                lineNumber: 107,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MeloloHome.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(MeloloHome, "oTHTse1Mu6SA/ToZ6AceqCO5dfA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMelolo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeloloLatest"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMelolo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMeloloTrending"]
    ];
});
_c1 = MeloloHome;
var _c, _c1;
__turbopack_context__.k.register(_c, "MeloloSectionSkeleton");
__turbopack_context__.k.register(_c1, "MeloloHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FlickReelsHome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FlickReelsHome",
    ()=>FlickReelsHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFlickReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFlickReels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCardSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedErrorDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Helper Component for Section Skeleton
function SectionLoader({ count = 6, titleWidth = "w-48" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-7 md:h-8 ${titleWidth} bg-white/10 rounded-lg animate-pulse`
            }, void 0, false, {
                fileName: "[project]/src/components/FlickReelsHome.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                children: Array.from({
                    length: count
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCardSkeleton"], {}, i, false, {
                        fileName: "[project]/src/components/FlickReelsHome.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FlickReelsHome.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FlickReelsHome.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SectionLoader;
function FlickReelsHome() {
    _s();
    const { data: forYouData, isLoading: loadingForYou, error: errorForYou, refetch: refetchForYou } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFlickReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlickReelsForYou"])();
    const { data: latestData, isLoading: loadingLatest, error: errorLatest, refetch: refetchLatest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFlickReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlickReelsLatest"])();
    const { data: hotRankData, isLoading: loadingHotRank, error: errorHotRank, refetch: refetchHotRank } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFlickReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlickReelsHotRank"])();
    if (errorForYou || errorLatest || errorHotRank) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedErrorDisplay"], {
            onRetry: ()=>{
                if (errorForYou) refetchForYou();
                if (errorLatest) refetchLatest();
                if (errorHotRank) refetchHotRank();
            }
        }, void 0, false, {
            fileName: "[project]/src/components/FlickReelsHome.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-12 pb-20",
        children: [
            loadingForYou ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLoader, {
                count: 12,
                titleWidth: "w-56"
            }, void 0, false, {
                fileName: "[project]/src/components/FlickReelsHome.tsx",
                lineNumber: 65,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-xl md:text-2xl text-foreground",
                            children: "Rekomendasi Untukmu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FlickReelsHome.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FlickReelsHome.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                        children: forYouData?.data?.list?.filter((item)=>item.title && item.cover && item.title !== "Untitled").map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                title: item.title,
                                cover: item.cover,
                                link: `/detail/flickreels/${item.playlet_id}`,
                                episodes: item.upload_num ? parseInt(item.upload_num) : 0,
                                topRightBadge: item.hot_num ? {
                                    text: item.hot_num,
                                    isTransparent: true
                                } : null,
                                topLeftBadge: item.status === "2" ? {
                                    text: "Ongoing",
                                    color: "#EAB308"
                                } : null
                            }, `${item.playlet_id}-${idx}`, false, {
                                fileName: "[project]/src/components/FlickReelsHome.tsx",
                                lineNumber: 78,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FlickReelsHome.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FlickReelsHome.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            loadingHotRank ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLoader, {
                count: 6,
                titleWidth: "w-40"
            }, void 0, false, {
                fileName: "[project]/src/components/FlickReelsHome.tsx",
                lineNumber: 94,
                columnNumber: 10
            }, this) : hotRankData?.data?.map((section, sIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-bold text-xl md:text-2xl text-foreground flex items-center gap-2",
                                children: section.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/FlickReelsHome.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FlickReelsHome.tsx",
                            lineNumber: 98,
                            columnNumber: 14
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                            children: section.data?.filter((item)=>item.title && item.cover).map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                        title: item.title,
                                        cover: item.cover,
                                        link: `/detail/flickreels/${item.playlet_id}`,
                                        episodes: item.upload_num ? parseInt(item.upload_num) : 0,
                                        topRightBadge: item.hot_num ? {
                                            text: item.hot_num,
                                            isTransparent: true
                                        } : null
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FlickReelsHome.tsx",
                                        lineNumber: 107,
                                        columnNumber: 20
                                    }, this)
                                }, `${item.playlet_id}-${idx}`, false, {
                                    fileName: "[project]/src/components/FlickReelsHome.tsx",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FlickReelsHome.tsx",
                            lineNumber: 104,
                            columnNumber: 13
                        }, this)
                    ]
                }, section.name || sIdx, true, {
                    fileName: "[project]/src/components/FlickReelsHome.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this)),
            loadingLatest ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLoader, {
                count: 12,
                titleWidth: "w-48"
            }, void 0, false, {
                fileName: "[project]/src/components/FlickReelsHome.tsx",
                lineNumber: 123,
                columnNumber: 10
            }, this) : latestData?.data?.map((section, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-4",
                    children: [
                        section.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-bold text-xl md:text-2xl text-foreground",
                                children: section.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/FlickReelsHome.tsx",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FlickReelsHome.tsx",
                            lineNumber: 128,
                            columnNumber: 16
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                            children: section.list?.filter((item)=>item.title && item.cover).map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                    title: item.title,
                                    cover: item.cover,
                                    link: `/detail/flickreels/${item.playlet_id}`,
                                    episodes: item.upload_num ? parseInt(item.upload_num) : 0,
                                    topRightBadge: null
                                }, `${item.playlet_id}-${i}`, false, {
                                    fileName: "[project]/src/components/FlickReelsHome.tsx",
                                    lineNumber: 137,
                                    columnNumber: 18
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FlickReelsHome.tsx",
                            lineNumber: 135,
                            columnNumber: 14
                        }, this)
                    ]
                }, idx, true, {
                    fileName: "[project]/src/components/FlickReelsHome.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FlickReelsHome.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(FlickReelsHome, "iJ1GjUtzMhmZzW8OjIQHZeKgjs8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFlickReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlickReelsForYou"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFlickReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlickReelsLatest"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFlickReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFlickReelsHotRank"]
    ];
});
_c1 = FlickReelsHome;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionLoader");
__turbopack_context__.k.register(_c1, "FlickReelsHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FreeReelsHome.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FreeReelsHome",
    ()=>FreeReelsHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFreeReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFreeReels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedMediaCardSkeleton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnifiedErrorDisplay.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Helper to extract items from a module, handling special cases like 'recommend'
function getModuleItems(module) {
    if (module.type === "recommend" && module.items && module.items.length > 0) {
        // Check for nested module_card
        const firstItem = module.items[0];
        if (firstItem.module_card && firstItem.module_card.items) {
            return firstItem.module_card.items;
        }
    }
    return module.items || [];
}
// Helper Component for Section Skeleton
function SectionLoader({ count = 6, titleWidth = "w-48" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-7 md:h-8 ${titleWidth} bg-white/10 rounded-lg animate-pulse`
            }, void 0, false, {
                fileName: "[project]/src/components/FreeReelsHome.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                children: Array.from({
                    length: count
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCardSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCardSkeleton"], {}, i, false, {
                        fileName: "[project]/src/components/FreeReelsHome.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FreeReelsHome.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FreeReelsHome.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = SectionLoader;
// Helper to clean title (remove emojis)
function cleanTitle(title) {
    // Removes standard emojis and specific ones like 🎉
    return title.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
}
function FreeReelsHome() {
    _s();
    const { data: forYouData, isLoading: loadingForYou, error: errorForYou, refetch: refetchForYou } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFreeReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFreeReelsForYou"])();
    const { data: homeData, isLoading: loadingHome, error: errorHome, refetch: refetchHome } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFreeReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFreeReelsHome"])();
    const { data: animeData, isLoading: loadingAnime, error: errorAnime, refetch: refetchAnime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFreeReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFreeReelsAnime"])();
    if (errorForYou && errorHome && errorAnime) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedErrorDisplay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedErrorDisplay"], {
            onRetry: ()=>{
                if (errorForYou) refetchForYou();
                if (errorHome) refetchHome();
                if (errorAnime) refetchAnime();
            }
        }, void 0, false, {
            fileName: "[project]/src/components/FreeReelsHome.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8 pb-20",
        children: [
            loadingForYou ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLoader, {
                count: 12,
                titleWidth: "w-56"
            }, void 0, false, {
                fileName: "[project]/src/components/FreeReelsHome.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-xl md:text-2xl text-foreground",
                            children: "Rekomendasi Untukmu"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FreeReelsHome.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FreeReelsHome.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                        children: forYouData?.data?.items?.filter((item)=>item.title && item.cover).map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                title: item.title,
                                cover: item.cover,
                                link: `/detail/freereels/${item.key}`,
                                episodes: item.episode_count || 0,
                                topRightBadge: item.follow_count ? {
                                    text: `${(item.follow_count / 1000).toFixed(1)}k`,
                                    isTransparent: true
                                } : null,
                                topLeftBadge: null
                            }, `${item.key}-foryou-${idx}`, false, {
                                fileName: "[project]/src/components/FreeReelsHome.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FreeReelsHome.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FreeReelsHome.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            loadingHome ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLoader, {
                count: 6,
                titleWidth: "w-40"
            }, void 0, false, {
                fileName: "[project]/src/components/FreeReelsHome.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this) : homeData?.data?.items?.filter((module)=>module.type !== 'coming_soon').map((module, mIdx)=>{
                const items = getModuleItems(module);
                if (!items || items.length === 0) return null;
                // Skip if all items are invalid
                const validItems = items.filter((item)=>item.title && item.cover);
                if (validItems.length === 0) return null;
                const title = module.module_name ? cleanTitle(module.module_name) : "";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "space-y-4",
                    children: [
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display font-bold text-xl md:text-2xl text-foreground",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/FreeReelsHome.tsx",
                                lineNumber: 130,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FreeReelsHome.tsx",
                            lineNumber: 129,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                            children: validItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                    title: item.title,
                                    cover: item.cover,
                                    link: `/detail/freereels/${item.key}`,
                                    episodes: item.episode_count || 0,
                                    topRightBadge: item.follow_count ? {
                                        text: `${(item.follow_count / 1000).toFixed(1)}k`,
                                        isTransparent: true
                                    } : null
                                }, `${item.key}-home-${mIdx}-${idx}`, false, {
                                    fileName: "[project]/src/components/FreeReelsHome.tsx",
                                    lineNumber: 138,
                                    columnNumber: 19
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FreeReelsHome.tsx",
                            lineNumber: 136,
                            columnNumber: 15
                        }, this)
                    ]
                }, `home-module-${mIdx}`, true, {
                    fileName: "[project]/src/components/FreeReelsHome.tsx",
                    lineNumber: 127,
                    columnNumber: 13
                }, this);
            }),
            loadingAnime ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionLoader, {
                count: 6,
                titleWidth: "w-40"
            }, void 0, false, {
                fileName: "[project]/src/components/FreeReelsHome.tsx",
                lineNumber: 155,
                columnNumber: 9
            }, this) : animeData?.data?.items && animeData.data.items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display font-bold text-xl md:text-2xl text-foreground",
                            children: "Anime"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FreeReelsHome.tsx",
                            lineNumber: 160,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FreeReelsHome.tsx",
                        lineNumber: 159,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: animeData.data.items.map((module, mIdx)=>{
                            const items = getModuleItems(module);
                            if (!items || items.length === 0) return null;
                            const validItems = items.filter((item)=>item.title && item.cover);
                            if (validItems.length === 0) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    module.module_name && cleanTitle(module.module_name) !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-display font-semibold text-lg text-foreground/90",
                                        children: cleanTitle(module.module_name)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FreeReelsHome.tsx",
                                        lineNumber: 176,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4",
                                        children: validItems.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnifiedMediaCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnifiedMediaCard"], {
                                                title: item.title,
                                                cover: item.cover,
                                                link: `/detail/freereels/${item.key}`,
                                                episodes: item.episode_count || 0,
                                                topRightBadge: item.follow_count ? {
                                                    text: `${(item.follow_count / 1000).toFixed(1)}k`,
                                                    isTransparent: true
                                                } : null
                                            }, `${item.key}-anime-${mIdx}-${idx}`, false, {
                                                fileName: "[project]/src/components/FreeReelsHome.tsx",
                                                lineNumber: 183,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FreeReelsHome.tsx",
                                        lineNumber: 181,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, `anime-module-${mIdx}`, true, {
                                fileName: "[project]/src/components/FreeReelsHome.tsx",
                                lineNumber: 174,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/FreeReelsHome.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FreeReelsHome.tsx",
                lineNumber: 158,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FreeReelsHome.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(FreeReelsHome, "RLIb1nC1jN7pb8BD26ICqDh3hCI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFreeReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFreeReelsForYou"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFreeReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFreeReelsHome"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFreeReels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFreeReelsAnime"]
    ];
});
_c1 = FreeReelsHome;
var _c, _c1;
__turbopack_context__.k.register(_c, "SectionLoader");
__turbopack_context__.k.register(_c1, "FreeReelsHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/home-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomeContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlatformSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PlatformSelector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DramaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DramaSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReelShortSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReelShortSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NetShortHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NetShortHome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MeloloHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MeloloHome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlickReelsHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FlickReelsHome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FreeReelsHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FreeReelsHome.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useDramas.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlatform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/usePlatform.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function HomeContent() {
    _s();
    const { isDramaBox, isReelShort, isNetShort, isMelolo, isFlickReels, isFreeReels } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlatform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"])();
    // Fetch data for all DramaBox sections
    const { data: popularDramas, isLoading: loadingPopular, error: errorPopular, refetch: refetchPopular } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForYouDramas"])();
    const { data: latestDramas, isLoading: loadingLatest, error: errorLatest, refetch: refetchLatest } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestDramas"])();
    const { data: trendingDramas, isLoading: loadingTrending, error: errorTrending, refetch: refetchTrending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrendingDramas"])();
    const { data: dubindoDramas, isLoading: loadingDubindo, error: errorDubindo, refetch: refetchDubindo } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDubindoDramas"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-strong sticky top-16 z-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PlatformSelector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlatformSelector"], {}, void 0, false, {
                        fileName: "[project]/src/app/home-content.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/home-content.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-content.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            isDramaBox && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6 space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DramaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DramaSection"], {
                        title: "Populer",
                        dramas: popularDramas,
                        isLoading: loadingPopular,
                        error: !!errorPopular,
                        onRetry: ()=>refetchPopular()
                    }, void 0, false, {
                        fileName: "[project]/src/app/home-content.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DramaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DramaSection"], {
                        title: "Terbaru",
                        dramas: latestDramas,
                        isLoading: loadingLatest,
                        error: !!errorLatest,
                        onRetry: ()=>refetchLatest()
                    }, void 0, false, {
                        fileName: "[project]/src/app/home-content.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DramaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DramaSection"], {
                        title: "Terpopuler",
                        dramas: trendingDramas,
                        isLoading: loadingTrending,
                        error: !!errorTrending,
                        onRetry: ()=>refetchTrending()
                    }, void 0, false, {
                        fileName: "[project]/src/app/home-content.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DramaSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DramaSection"], {
                        title: "Dubindo",
                        dramas: dubindoDramas,
                        isLoading: loadingDubindo,
                        error: !!errorDubindo,
                        onRetry: ()=>refetchDubindo()
                    }, void 0, false, {
                        fileName: "[project]/src/app/home-content.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/home-content.tsx",
                lineNumber: 33,
                columnNumber: 9
            }, this),
            isReelShort && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6 space-y-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReelShortSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReelShortSection"], {}, void 0, false, {
                    fileName: "[project]/src/app/home-content.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-content.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            isNetShort && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6 space-y-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NetShortHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetShortHome"], {}, void 0, false, {
                    fileName: "[project]/src/app/home-content.tsx",
                    lineNumber: 75,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-content.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            isMelolo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6 space-y-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MeloloHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeloloHome"], {}, void 0, false, {
                    fileName: "[project]/src/app/home-content.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-content.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            isFlickReels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6 space-y-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FlickReelsHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlickReelsHome"], {}, void 0, false, {
                    fileName: "[project]/src/app/home-content.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-content.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this),
            isFreeReels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-6 space-y-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FreeReelsHome$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FreeReelsHome"], {}, void 0, false, {
                    fileName: "[project]/src/app/home-content.tsx",
                    lineNumber: 96,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/home-content.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/home-content.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(HomeContent, "R3t8Ucr5oNsAhSK5zCqHsflA8Jk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$usePlatform$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePlatform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForYouDramas"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLatestDramas"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTrendingDramas"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useDramas$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDubindoDramas"]
    ];
});
_c = HomeContent;
var _c;
__turbopack_context__.k.register(_c, "HomeContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_bf715815._.js.map