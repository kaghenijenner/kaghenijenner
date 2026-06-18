(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useInView.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useInView = (threshold = 0.15)=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useInView.useLayoutEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            // If element is already in the viewport, show it immediately (no blank flash)
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                setInView(true);
                return;
            }
            // Otherwise watch for it scrolling into view
            const observer = new IntersectionObserver({
                "useInView.useLayoutEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        observer.disconnect();
                    }
                }
            }["useInView.useLayoutEffect"], {
                threshold
            });
            observer.observe(el);
            return ({
                "useInView.useLayoutEffect": ()=>observer.disconnect()
            })["useInView.useLayoutEffect"];
        }
    }["useInView.useLayoutEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
};
_s(useInView, "ebzufJeV9qQHaRSTB5YIzQV6Qxw=");
const __TURBOPACK__default__export__ = useInView;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/views/About.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$jennermaxim$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$jennermaxim$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/jennermaxim.png.mjs { IMAGE => "[project]/src/assets/jennermaxim.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useInView.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const u = (i)=>i?.src ?? i;
const Icon = ({ d, d2, d3, circle, rect, poly, lines = [] })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            circle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: circle.cx,
                cy: circle.cy,
                r: circle.r
            }, void 0, false, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 11,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)),
            rect && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: rect.x,
                y: rect.y,
                width: rect.w,
                height: rect.h,
                rx: rect.rx || 0
            }, void 0, false, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 12,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            poly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: poly
            }, void 0, false, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 13,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0)),
            d && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d
            }, void 0, false, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 14,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            d2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d2
            }, void 0, false, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 15,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            d3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: d3
            }, void 0, false, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 16,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0)),
            lines.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: l[0],
                    y1: l[1],
                    x2: l[2],
                    y2: l[3]
                }, i, false, {
                    fileName: "[project]/src/views/About.jsx",
                    lineNumber: 17,
                    columnNumber: 26
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Icon;
const GlobeIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        circle: {
            cx: 12,
            cy: 12,
            r: 10
        },
        d: "M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = GlobeIcon;
const PhoneIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        rect: {
            x: 5,
            y: 2,
            w: 14,
            h: 20,
            rx: 2
        },
        lines: [
            [
                12,
                18,
                12,
                18
            ]
        ]
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 28,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = PhoneIcon;
const MonitorIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        rect: {
            x: 2,
            y: 3,
            w: 20,
            h: 14,
            rx: 2
        },
        lines: [
            [
                8,
                21,
                16,
                21
            ],
            [
                12,
                17,
                12,
                21
            ]
        ]
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 34,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c3 = MonitorIcon;
const CpuIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        rect: {
            x: 4,
            y: 4,
            w: 16,
            h: 16,
            rx: 2
        },
        d2: "M9 9h6v6H9z",
        lines: [
            [
                9,
                1,
                9,
                4
            ],
            [
                15,
                1,
                15,
                4
            ],
            [
                9,
                20,
                9,
                23
            ],
            [
                15,
                20,
                15,
                23
            ],
            [
                20,
                9,
                23,
                9
            ],
            [
                20,
                14,
                23,
                14
            ],
            [
                1,
                9,
                4,
                9
            ],
            [
                1,
                14,
                4,
                14
            ]
        ]
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 40,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c4 = CpuIcon;
const CloudIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 47,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c5 = CloudIcon;
const WrenchIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c6 = WrenchIcon;
const FileTextIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
        d2: "M14 2v6h6",
        lines: [
            [
                16,
                13,
                8,
                13
            ],
            [
                16,
                17,
                8,
                17
            ]
        ]
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 53,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c7 = FileTextIcon;
const AwardIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        circle: {
            cx: 12,
            cy: 8,
            r: 6
        },
        d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 60,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c8 = AwardIcon;
const KeyboardIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        rect: {
            x: 2,
            y: 6,
            w: 20,
            h: 12,
            rx: 2
        },
        lines: [
            [
                6,
                10,
                6,
                10
            ],
            [
                10,
                10,
                10,
                10
            ],
            [
                14,
                10,
                14,
                10
            ],
            [
                18,
                10,
                18,
                10
            ],
            [
                6,
                14,
                6,
                14
            ],
            [
                18,
                14,
                18,
                14
            ],
            [
                10,
                14,
                14,
                14
            ]
        ]
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 66,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c9 = KeyboardIcon;
const StarIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        poly: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 72,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c10 = StarIcon;
const InfinityIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        d: "M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4zm0 0c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4z"
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 75,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c11 = InfinityIcon;
const UsersIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2",
        d2: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
        circle: {
            cx: 9,
            cy: 7,
            r: 4
        }
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 78,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c12 = UsersIcon;
const ZapIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
        poly: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
    }, void 0, false, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 85,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c13 = ZapIcon;
const services = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GlobeIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 89,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Full Stack Development",
        desc: "Complete web applications using React, Node.js, Next.js, and modern databases,  front to back."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 90,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Mobile Development",
        desc: "Cross-platform mobile apps with React Native and Flutter for iOS and Android."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MonitorIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 91,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Desktop Development",
        desc: "Electron.js desktop applications with cross-platform compatibility."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CpuIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 92,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "AI & Machine Learning",
        desc: "Intelligent systems and AI/ML integration, face recognition, computer vision, NLP."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloudIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 93,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Cloud & DevOps",
        desc: "AWS cloud infrastructure, CI/CD pipelines, and deployment automation."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WrenchIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 94,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Technical Solutions",
        desc: "Network configuration, system administration, and full technical support."
    }
];
const achievements = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FileTextIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 98,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Published Research",
        desc: "Face Recognition Attendance System. Published in the Cavendish Journal of Science and Technology."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AwardIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 99,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "12+ Certifications",
        desc: "JavaScript, React.js, DevOps, Cloud Computing (AWS), Backend Development from Google & Microsoft programs."
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(KeyboardIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 100,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        title: "Advanced Typing Certified",
        desc: "Certified in Advanced Typing Assessment, exceptional speed and accuracy in technical documentation."
    }
];
const values = [
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Quality First",
        desc: "Every project deserves attention to detail and excellence"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfinityIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 105,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Continuous Learning",
        desc: "Technology evolves and so do I"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UsersIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Collaboration",
        desc: "Great products are built together"
    },
    {
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ZapIcon, {}, void 0, false, {
            fileName: "[project]/src/views/About.jsx",
            lineNumber: 107,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)),
        label: "Innovation",
        desc: "Always seeking better, smarter solutions"
    }
];
const About = ()=>{
    _s();
    const [heroRef, heroInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0.1);
    const [servicesRef, servicesInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0.05);
    const [achieveRef, achieveInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0.1);
    const [valuesRef, valuesInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0.1);
    const [focusRef, focusInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(0.1);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "about-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-hero",
                ref: heroRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-orb hero-orb-1"
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-orb hero-orb-2"
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `about-photo reveal-left${heroInView ? " in-view" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "photo-ring"
                            }, void 0, false, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: u(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$jennermaxim$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$jennermaxim$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
                                alt: "Kagheni Jenner"
                            }, void 0, false, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-text",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `eyebrow reveal${heroInView ? " in-view" : ""} stagger-1`,
                                children: "About Me"
                            }, void 0, false, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `reveal${heroInView ? " in-view" : ""} stagger-2`,
                                children: "Kagheni Jenner"
                            }, void 0, false, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `subtitle reveal${heroInView ? " in-view" : ""} stagger-3`,
                                children: "Software Engineer · Full Stack Developer · Tech Innovator"
                            }, void 0, false, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 131,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `bio reveal${heroInView ? " in-view" : ""} stagger-4`,
                                children: "A passionate Software Engineer from Uganda building scalable, efficient, and user-friendly applications. I thrive on solving complex problems and delivering high-quality solutions that exceed expectations, from web and mobile to AI systems."
                            }, void 0, false, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `bio reveal${heroInView ? " in-view" : ""} stagger-5`,
                                children: "Beyond coding, I'm skilled in network configuration and computer repair, giving me a holistic view of technology, from the hardware layer to the user interface."
                            }, void 0, false, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about-section",
                ref: servicesRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `section-header reveal${servicesInView ? " in-view" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "What I ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Build"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 149,
                                        columnNumber: 22
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "End-to-end development across every platform"
                            }, void 0, false, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-grid",
                        children: services.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `service-card reveal${servicesInView ? " in-view" : ""} stagger-${i + 1}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "service-icon",
                                        children: s.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: s.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: s.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card-glow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, s.title, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 147,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about-section achievement-section",
                ref: achieveRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `section-header reveal${achieveInView ? " in-view" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Achievements & ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Research"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 167,
                                    columnNumber: 34
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/About.jsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "achievement-list",
                        children: achievements.map((a, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `achievement reveal-left${achieveInView ? " in-view" : ""} stagger-${i + 1}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "achievement-icon",
                                        children: a.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 172,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: a.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: a.desc
                                            }, void 0, false, {
                                                fileName: "[project]/src/views/About.jsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, a.title, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 165,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about-section",
                ref: focusRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `section-header reveal${focusInView ? " in-view" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "Current ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Focus"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 185,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/About.jsx",
                            lineNumber: 185,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "focus-list",
                        children: [
                            "Building private projects with cutting-edge technologies",
                            "Learning something new every single day",
                            "Looking to collaborate on open-source projects",
                            "Exploring AI/ML integration in production web applications"
                        ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `reveal${focusInView ? " in-view" : ""} stagger-${i + 1}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "focus-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 195,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item
                                ]
                            }, item, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 194,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 183,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "about-section",
                ref: valuesRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `section-header reveal${valuesInView ? " in-view" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: [
                                "My ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Values"
                                }, void 0, false, {
                                    fileName: "[project]/src/views/About.jsx",
                                    lineNumber: 205,
                                    columnNumber: 18
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/views/About.jsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "values-grid",
                        children: values.map((v, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `value reveal${valuesInView ? " in-view" : ""} stagger-${i + 1}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "value-icon",
                                        children: v.icon
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 210,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: v.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: v.desc
                                    }, void 0, false, {
                                        fileName: "[project]/src/views/About.jsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, v.label, true, {
                                fileName: "[project]/src/views/About.jsx",
                                lineNumber: 209,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/views/About.jsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/views/About.jsx",
                lineNumber: 203,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/views/About.jsx",
        lineNumber: 118,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(About, "jDyxHmIWW2nxYQyuB7NxkIgMdc8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInView$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c14 = About;
const __TURBOPACK__default__export__ = About;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "Icon");
__turbopack_context__.k.register(_c1, "GlobeIcon");
__turbopack_context__.k.register(_c2, "PhoneIcon");
__turbopack_context__.k.register(_c3, "MonitorIcon");
__turbopack_context__.k.register(_c4, "CpuIcon");
__turbopack_context__.k.register(_c5, "CloudIcon");
__turbopack_context__.k.register(_c6, "WrenchIcon");
__turbopack_context__.k.register(_c7, "FileTextIcon");
__turbopack_context__.k.register(_c8, "AwardIcon");
__turbopack_context__.k.register(_c9, "KeyboardIcon");
__turbopack_context__.k.register(_c10, "StarIcon");
__turbopack_context__.k.register(_c11, "InfinityIcon");
__turbopack_context__.k.register(_c12, "UsersIcon");
__turbopack_context__.k.register(_c13, "ZapIcon");
__turbopack_context__.k.register(_c14, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1-0_jwk._.js.map