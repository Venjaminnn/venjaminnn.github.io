"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([[52730, 69078], {
    843383: (x, _) => {
        Object.defineProperty(_, "__esModule", {
            value: !0
        }),
        _.default = void 0;
        var A;
        (function(f) {
            f.MAIN_CONTENT = 1,
            f.CONTENT_COLLECTION = 1,
            f.PAGE = 2,
            f.SPLASH_PAGE = 3,
            f.CONTENT_ITEM = 50,
            f.NOT_FOUND = 100,
            f.ERROR = 101,
            f.SEARCH = 102,
            f.LOCK_SCREEN = 103,
            f.POPUP_OVERLAY = 104,
            f.PROTECTED_CONTENT = 105,
            f.MEMBER_AREA_ACCESS_DENIED = 106,
            f.PAYWALL = 107,
            f.SHOW_CART = 200,
            f.CHECKOUT = 201,
            f.ORDER_CONFIRMED = 202,
            f.DONATE = 203,
            f.CONTRIBUTION_CONFIRMED = 204,
            f.COMMERCE_CART_V2 = 205,
            f.SUBSCRIPTION_CONFIRMED = 206,
            f.ORDER_RECEIVED = 207,
            f.MEMBERSHIP_CONFIRMED = 208,
            f.REVIEWS_REQUEST = 209,
            f.DIGITAL_PRODUCT_COMPOSER_PREVIEW = 210,
            f.ORDER_STATUS = 211,
            f.NEWSLETTER_UNSUBSCRIBE = 300,
            f.COMMERCE_EMAIL_PREVIEW = 301,
            f.SSO_PAGE = 400
        }
        )(A || (A = {}));
        var L = A;
        _.default = L,
        x.exports = _.default
    }
    ,
    319484: (x, _, A) => {
        var L;
        L = {
            value: !0
        };
        var f = A(769078)
          , g = F(A(843383))
          , M = A(701996);
        function P(l, v, E) {
            return v in l ? Object.defineProperty(l, v, {
                value: E,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : l[v] = E,
            l
        }
        function F(l) {
            return l && l.__esModule ? l : {
                default: l
            }
        }
        function H(l) {
            for (var v = 1; v < arguments.length; v++) {
                var E = arguments[v] != null ? arguments[v] : {}
                  , q = Object.keys(E);
                typeof Object.getOwnPropertySymbols == "function" && (q = q.concat(Object.getOwnPropertySymbols(E).filter(function(N) {
                    return Object.getOwnPropertyDescriptor(E, N).enumerable
                }))),
                q.forEach(function(N) {
                    P(l, N, E[N])
                })
            }
            return l
        }
        var j = {
            "commerce-cart": 1,
            "v7-user-sites": 1,
            "v7_1-user-sites": 1
        }
          , h = window.Static && window.Static.SQUARESPACE_CONTEXT
          , D = window.top !== window
          , K = !!h && Object.keys(h).length > 0
          , V = Object.freeze({
            [g.default.COMMERCE_CART_V2]: "commerce-cart"
        });
        function C() {
            return {
                inFrame: D,
                templateId: h.templateId || "",
                impersonatedSession: !!h.impersonatedSession,
                pageType: typeof h.pageType == "number" ? h.pageType : -1
            }
        }
        function b() {
            var l = h.website
              , v = l === void 0 ? {} : l;
            return {
                authenticUrl: v.authenticUrl || "",
                cloneable: !!v.cloneable,
                developerMode: !!v.developerMode,
                isHstsEnabled: !!v.isHstsEnabled,
                language: v.language || "",
                timeZone: v.timeZone || "",
                websiteId: v.id || "",
                websiteType: v.websiteType || -1
            }
        }
        function S() {
            var l = h.websiteSettings
              , v = l === void 0 ? {} : l;
            return {
                ampEnabled: !!v.ampEnabled
            }
        }
        function p() {
            var l = h.collection
              , v = l === void 0 ? {} : l;
            return {
                collectionType: v.type || -1
            }
        }
        function T() {
            return h.hasOwnProperty("templateVersion") ? h.templateVersion.replace(".", "_") : null
        }
        function R(l) {
            var v, E = (v = j[l]) !== null && v !== void 0 ? v : 0;
            return Math.random() <= E
        }
        function W(l) {
            var v = V[h.pageType]
              , E = {
                appName: v || "v".concat(l, "-user-sites"),
                context: H({}, C(), b(), S(), p()),
                captureException: (q, N) => {
                    (0,
                    M.withScope)(te => {
                        te.setTag("product_area", "rum-collector"),
                        N !== void 0 && te.setExtra("extras", N),
                        (0,
                        M.captureException)(q)
                    }
                    )
                }
            };
            return R(E.appName) && (E.serviceURL = "https://performance.squarespace.com/api/v1/records"),
            E
        }
        function de() {
            if (K && h.env === "PRODUCTION") {
                var l = T();
                if (l !== null) {
                    var v = W(l);
                    (0,
                    f.init)(v)
                }
            }
        }
        de()
    }
    ,
    701996: (x, _) => {
        Object.defineProperty(_, "__esModule", {
            value: !0
        });
        function A(b, S) {
            for (var p in S)
                Object.defineProperty(b, p, {
                    enumerable: !0,
                    get: S[p]
                })
        }
        A(_, {
            addBreadcrumb: function() {
                return f
            },
            captureEvent: function() {
                return P
            },
            captureException: function() {
                return M
            },
            captureMessage: function() {
                return g
            },
            configureScope: function() {
                return F
            },
            getCurrentScope: function() {
                return j
            },
            isSentryConnected: function() {
                return V
            },
            withScope: function() {
                return H
            }
        });
        var L = () => {}
        , f, g, M, P, F, H, j, h = b => function(S) {
            for (var p = arguments.length, T = new Array(p > 1 ? p - 1 : 0), R = 1; R < p; R++)
                T[R - 1] = arguments[R];
            return console.log("[Sentry][".concat(b, "] ").concat(S), ...T),
            "some-error-identifier"
        }
        , D = !1, K = b => {
            var S = b.category
              , p = b.message;
            console.log("[Sentry][addBreadcrumb] (".concat(S, ") ").concat(p))
        }
        , V = !1;
        function C() {
            return new Proxy({},{
                get: () => L
            })
        }
        window.SQUARESPACE_SENTRY ? (V = !0,
        f = window.SQUARESPACE_SENTRY.addBreadcrumb,
        g = window.SQUARESPACE_SENTRY.captureMessage,
        M = window.SQUARESPACE_SENTRY.captureException,
        P = window.SQUARESPACE_SENTRY.captureEvent,
        F = window.SQUARESPACE_SENTRY.configureScope,
        H = window.SQUARESPACE_SENTRY.withScope,
        j = window.SQUARESPACE_SENTRY.getCurrentScope) : (console.warn("SENTRY WAS __NOT__ INITIALIZED. Logs will be forwarded to console instead."),
        f = D ? K : L,
        g = h("captureMessage"),
        M = h("captureException"),
        P = h("captureEvent"),
        j = C,
        F = L,
        H = function() {
            for (var S = arguments.length, p = new Array(S), T = 0; T < S; T++)
                p[T] = arguments[T];
            var R = p.length === 2 ? p[1] : p[0]
              , W = C();
            return R(W)
        }
        )
    }
    ,
    769078: x => {
        function _(t, e) {
            (e == null || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        function A(t) {
            if (Array.isArray(t))
                return t
        }
        function L(t) {
            if (Array.isArray(t))
                return _(t)
        }
        function f(t, e, n, r, a, i, o) {
            try {
                var u = t[i](o)
                  , s = u.value
            } catch (c) {
                n(c);
                return
            }
            u.done ? e(s) : Promise.resolve(s).then(r, a)
        }
        function g(t) {
            return function() {
                var e = this
                  , n = arguments;
                return new Promise(function(r, a) {
                    var i = t.apply(e, n);
                    function o(s) {
                        f(i, r, a, o, u, "next", s)
                    }
                    function u(s) {
                        f(i, r, a, o, u, "throw", s)
                    }
                    o(void 0)
                }
                )
            }
        }
        function M(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n,
            t
        }
        function P(t, e) {
            return e != null && typeof Symbol != "undefined" && e[Symbol.hasInstance] ? !!e[Symbol.hasInstance](t) : t instanceof e
        }
        function F(t) {
            if (typeof Symbol != "undefined" && t[Symbol.iterator] != null || t["@@iterator"] != null)
                return Array.from(t)
        }
        function H(t, e) {
            var n = t == null ? null : typeof Symbol != "undefined" && t[Symbol.iterator] || t["@@iterator"];
            if (n != null) {
                var r = [], a = !0, i = !1, o, u;
                try {
                    for (n = n.call(t); !(a = (o = n.next()).done) && (r.push(o.value),
                    !(e && r.length === e)); a = !0)
                        ;
                } catch (s) {
                    i = !0,
                    u = s
                } finally {
                    try {
                        !a && n.return != null && n.return()
                    } finally {
                        if (i)
                            throw u
                    }
                }
                return r
            }
        }
        function j() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function h() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function D(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e] != null ? arguments[e] : {}
                  , r = Object.keys(n);
                typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
                    return Object.getOwnPropertyDescriptor(n, a).enumerable
                }))),
                r.forEach(function(a) {
                    M(t, a, n[a])
                })
            }
            return t
        }
        function K(t, e) {
            if (t == null)
                return {};
            var n = V(t, e), r, a;
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (a = 0; a < i.length; a++)
                    r = i[a],
                    !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r])
            }
            return n
        }
        function V(t, e) {
            if (t == null)
                return {};
            var n = {}, r = Object.keys(t), a, i;
            for (i = 0; i < r.length; i++)
                a = r[i],
                !(e.indexOf(a) >= 0) && (n[a] = t[a]);
            return n
        }
        function C(t, e) {
            return A(t) || H(t, e) || S(t, e) || j()
        }
        function b(t) {
            return L(t) || F(t) || S(t) || h()
        }
        function S(t, e) {
            if (t) {
                if (typeof t == "string")
                    return _(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                if (n === "Object" && t.constructor && (n = t.constructor.name),
                n === "Map" || n === "Set")
                    return Array.from(n);
                if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return _(t, e)
            }
        }
        function p(t, e) {
            var n, r, a, i, o = {
                label: 0,
                sent: function() {
                    if (a[0] & 1)
                        throw a[1];
                    return a[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: u(0),
                throw: u(1),
                return: u(2)
            },
            typeof Symbol == "function" && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function u(c) {
                return function(d) {
                    return s([c, d])
                }
            }
            function s(c) {
                if (n)
                    throw new TypeError("Generator is already executing.");
                for (; o; )
                    try {
                        if (n = 1,
                        r && (a = c[0] & 2 ? r.return : c[0] ? r.throw || ((a = r.return) && a.call(r),
                        0) : r.next) && !(a = a.call(r, c[1])).done)
                            return a;
                        switch (r = 0,
                        a && (c = [c[0] & 2, a.value]),
                        c[0]) {
                        case 0:
                        case 1:
                            a = c;
                            break;
                        case 4:
                            return o.label++,
                            {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            o.label++,
                            r = c[1],
                            c = [0];
                            continue;
                        case 7:
                            c = o.ops.pop(),
                            o.trys.pop();
                            continue;
                        default:
                            if (a = o.trys,
                            !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                                o = 0;
                                continue
                            }
                            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
                                o.label = c[1];
                                break
                            }
                            if (c[0] === 6 && o.label < a[1]) {
                                o.label = a[1],
                                a = c;
                                break
                            }
                            if (a && o.label < a[2]) {
                                o.label = a[2],
                                o.ops.push(c);
                                break
                            }
                            a[2] && o.ops.pop(),
                            o.trys.pop();
                            continue
                        }
                        c = e.call(t, o)
                    } catch (d) {
                        c = [6, d],
                        r = 0
                    } finally {
                        n = a = 0
                    }
                if (c[0] & 5)
                    throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            }
        }
        var T = Object.defineProperty, R = Object.getOwnPropertyDescriptor, W = Object.getOwnPropertyNames, de = Object.prototype.hasOwnProperty, l = function(t, e) {
            return function() {
                return t && (e = (0,
                t[W(t)[0]])(t = 0)),
                e
            }
        }, v = function(t, e) {
            for (var n in e)
                T(t, n, {
                    get: e[n],
                    enumerable: !0
                })
        }, E = function(t, e, n, r) {
            if (e && typeof e == "object" || typeof e == "function") {
                var a = !0
                  , i = !1
                  , o = void 0;
                try {
                    for (var u = function() {
                        var d = c.value;
                        !de.call(t, d) && d !== n && T(t, d, {
                            get: function() {
                                return e[d]
                            },
                            enumerable: !(r = R(e, d)) || r.enumerable
                        })
                    }, s = W(e)[Symbol.iterator](), c; !(a = (c = s.next()).done); a = !0)
                        u()
                } catch (d) {
                    i = !0,
                    o = d
                } finally {
                    try {
                        !a && s.return != null && s.return()
                    } finally {
                        if (i)
                            throw o
                    }
                }
            }
            return t
        }, q = function(t) {
            return E(T({}, "__esModule", {
                value: !0
            }), t)
        }, N, te = l({
            "../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/url-alphabet/index.js": function() {
                "use strict";
                N = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"
            }
        }), Oe = {};
        v(Oe, {
            customAlphabet: function() {
                return Me
            },
            customRandom: function() {
                return le
            },
            nanoid: function() {
                return Ie
            },
            random: function() {
                return ve
            },
            urlAlphabet: function() {
                return N
            }
        });
        var ve, le, Me, Ie, Vt = l({
            "../../node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/index.browser.js": function() {
                "use strict";
                te(),
                ve = function(t) {
                    return crypto.getRandomValues(new Uint8Array(t))
                }
                ,
                le = function(t, e, n) {
                    var r = (2 << Math.log(t.length - 1) / Math.LN2) - 1
                      , a = -~(1.6 * r * e / t.length);
                    return function() {
                        for (var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e, o = ""; ; )
                            for (var u = n(a), s = a; s--; )
                                if (o += t[u[s] & r] || "",
                                o.length === i)
                                    return o
                    }
                }
                ,
                Me = function(t) {
                    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 21;
                    return le(t, e, ve)
                }
                ,
                Ie = function() {
                    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 21;
                    return crypto.getRandomValues(new Uint8Array(t)).reduce(function(e, n) {
                        return n &= 63,
                        n < 36 ? e += n.toString(36) : n < 62 ? e += (n - 26).toString(36).toUpperCase() : n > 62 ? e += "-" : e += "_",
                        e
                    }, "")
                }
            }
        }), xe = {};
        v(xe, {
            RUM_PREFIX: function() {
                return X
            },
            default: function() {
                return cr
            },
            getA11yData: function() {
                return Pt
            },
            getCumulativeLayoutShift: function() {
                return St
            },
            getDomainLookup: function() {
                return Fe
            },
            getFirstContentfulPaint: function() {
                return bt
            },
            getFirstInputDelay: function() {
                return Tt
            },
            getInteractionToNextPaint: function() {
                return At
            },
            getLargestContentfulPaint: function() {
                return Ct
            },
            getNavigationTimingType: function() {
                return He
            },
            getPerformanceMetrics: function() {
                return Ae
            },
            getServerTiming: function() {
                return je
            },
            getTcpConnection: function() {
                return qe
            },
            getTlsNegotiation: function() {
                return Qe
            },
            init: function() {
                return Ft
            },
            mark: function() {
                return Yn
            },
            measure: function() {
                return Vn
            },
            trackEventsV2Factory: function() {
                return or
            },
            trackLoadPerformance: function() {
                return ur
            },
            trackSqspImages: function() {
                return Mt
            }
        }),
        x.exports = q(xe);
        var De = {};
        v(De, {
            getCumulativeLayoutShift: function() {
                return St
            },
            getDomainLookup: function() {
                return Fe
            },
            getFirstContentfulPaint: function() {
                return bt
            },
            getFirstInputDelay: function() {
                return Tt
            },
            getInteractionToNextPaint: function() {
                return At
            },
            getLargestContentfulPaint: function() {
                return Ct
            },
            getNavigationTimingType: function() {
                return He
            },
            getServerTiming: function() {
                return je
            },
            getTcpConnection: function() {
                return qe
            },
            getTlsNegotiation: function() {
                return Qe
            }
        });
        var Wt = "/api/1/performance/records", zt = "load", ne = "visibilitychange", Gt = ["Tab", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp", "End", "Home", "PageDown", "PageUp", " ", "Enter"], Xt = "SS_MID", Kt = "SS_ANALYTICS_ID", Jt = 3e4, Zt = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i, pe = 200, $t = "4.13.1", me = function(t) {
            return function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                return new Promise(function(a, i) {
                    try {
                        t.apply(void 0, [function(o) {
                            a(o)
                        }
                        ].concat(b(n)))
                    } catch (o) {
                        i(o)
                    }
                }
                )
            }
        }, Ue = function(t) {
            return me(setTimeout)(t)
        }, ke = function() {
            return me(function(t) {
                var e = function(n) {
                    (n.type === "pagehide" || document.visibilityState === "hidden") && (t(n),
                    removeEventListener("visibilitychange", e, !0),
                    removeEventListener("pagehide", e, !0))
                };
                window.addEventListener("visibilitychange", e, !0),
                window.addEventListener("pagehide", e, !0)
            })()
        }, en = function(t) {
            document.readyState === "complete" ? window.setTimeout(t, 0) : window.addEventListener("pageshow", t, {
                once: !0
            })
        }, tn = function() {
            return me(en)
        }, nn = function() {
            var t = {
                entryType: "navigation",
                startTime: 0
            }
              , e = performance.timing;
            for (var n in e)
                if (n !== "navigationStart" && n !== "toJSON") {
                    var r = Math.max(e[n] - e.navigationStart, 0);
                    t[n] = r
                }
            return t
        }, ge = function() {
            var t = g(function() {
                var e, n;
                return p(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return [4, tn()];
                    case 1:
                        return r.sent(),
                        e = C(window.performance.getEntriesByType("navigation"), 1),
                        n = e[0],
                        [2, n != null ? n : nn()]
                    }
                })
            });
            return function() {
                return t.apply(this, arguments)
            }
        }(), Q = function() {
            var t = g(function(e) {
                var n, r;
                return p(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, ge()];
                    case 1:
                        return n = a.sent(),
                        r = n[e],
                        typeof r != "number" || r < 0 || r > 2147483647 ? [2] : [2, Math.round(r)]
                    }
                })
            });
            return function(n) {
                return t.apply(this, arguments)
            }
        }(), rn = function() {
            var t = g(function() {
                var e;
                return p(this, function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, ge()];
                    case 1:
                        return e = n.sent(),
                        [2, e.serverTiming]
                    }
                })
            });
            return function() {
                return t.apply(this, arguments)
            }
        }(), Be = function() {
            var t = g(function(e) {
                var n, r;
                return p(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, ge()];
                    case 1:
                        return n = a.sent(),
                        r = n[e],
                        typeof r != "string" ? [2] : [2, r]
                    }
                })
            });
            return function(n) {
                return t.apply(this, arguments)
            }
        }(), he = function(t, e) {
            if (typeof t == "number" && typeof e == "number" && t >= e)
                return t - e
        }, Fe = function(t) {
            return Promise.all([Q("domainLookupEnd"), Q("domainLookupStart")]).then(function(e) {
                var n = C(e, 2)
                  , r = n[0]
                  , a = n[1];
                t({
                    domainLookup: he(r, a)
                })
            })
        }, He = function(t) {
            return Be("type").then(function(e) {
                t({
                    navigationTimingType: e
                })
            })
        }, je = function(t) {
            return rn().then(function(e) {
                t({
                    serverTiming: JSON.stringify(e)
                })
            })
        }, qe = function(t) {
            return Promise.all([Q("connectEnd"), Q("connectStart")]).then(function(e) {
                var n = C(e, 2)
                  , r = n[0]
                  , a = n[1];
                t({
                    tcpConnection: he(r, a)
                })
            })
        }, Qe = function(t) {
            return Promise.all([Q("connectEnd"), Q("secureConnectionStart")]).then(function(e) {
                var n = C(e, 2)
                  , r = n[0]
                  , a = n[1];
                t({
                    tlsNegotiation: he(r, a)
                })
            })
        }, U, J, Ye, re, we, Ve = -1, Z = function(e) {
            addEventListener("pageshow", function(n) {
                n.persisted && (Ve = n.timeStamp,
                e(n))
            }, !0)
        }, We = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        }, ze = function() {
            var e = We();
            return e && e.activationStart || 0
        }, k = function(e, n) {
            var r = We()
              , a = "navigate";
            return Ve >= 0 ? a = "back-forward-cache" : r && (document.prerendering || ze() > 0 ? a = "prerender" : document.wasDiscarded ? a = "restore" : r.type && (a = r.type.replace(/_/g, "-"))),
            {
                name: e,
                value: n === void 0 ? -1 : n,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: a
            }
        }, $ = function(e, n, r) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var a = new PerformanceObserver(function(i) {
                        Promise.resolve().then(function() {
                            n(i.getEntries())
                        })
                    }
                    );
                    return a.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, r || {})),
                    a
                }
            } catch (i) {}
        }, B = function(e, n, r, a) {
            var i, o;
            return function(u) {
                n.value >= 0 && (u || a) && ((o = n.value - (i || 0)) || i === void 0) && (i = n.value,
                n.delta = o,
                n.rating = function(s, c) {
                    return s > c[1] ? "poor" : s > c[0] ? "needs-improvement" : "good"
                }(n.value, r),
                e(n))
            }
        }, Ge = function(e) {
            requestAnimationFrame(function() {
                return requestAnimationFrame(function() {
                    return e()
                })
            })
        }, ye = function(e) {
            var n = function(a) {
                a.type !== "pagehide" && document.visibilityState !== "hidden" || e(a)
            };
            addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0)
        }, Xe = function(e) {
            var n = !1;
            return function(r) {
                n || (e(r),
                n = !0)
            }
        }, z = -1, Ke = function() {
            return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
        }, ae = function(e) {
            document.visibilityState === "hidden" && z > -1 && (z = e.type === "visibilitychange" ? e.timeStamp : 0,
            an())
        }, Je = function() {
            addEventListener("visibilitychange", ae, !0),
            addEventListener("prerenderingchange", ae, !0)
        }, an = function() {
            removeEventListener("visibilitychange", ae, !0),
            removeEventListener("prerenderingchange", ae, !0)
        }, Ze = function() {
            return z < 0 && (z = Ke(),
            Je(),
            Z(function() {
                setTimeout(function() {
                    z = Ke(),
                    Je()
                }, 0)
            })),
            {
                get firstHiddenTime() {
                    return z
                }
            }
        }, Ee = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", function() {
                return e()
            }, !0) : e()
        }, $e = [1800, 3e3], et = function(e, n) {
            n = n || {},
            Ee(function() {
                var r, a = Ze(), i = k("FCP"), o = $("paint", function(u) {
                    u.forEach(function(s) {
                        s.name === "first-contentful-paint" && (o.disconnect(),
                        s.startTime < a.firstHiddenTime && (i.value = Math.max(s.startTime - ze(), 0),
                        i.entries.push(s),
                        r(!0)))
                    })
                });
                o && (r = B(e, i, $e, n.reportAllChanges),
                Z(function(u) {
                    i = k("FCP"),
                    r = B(e, i, $e, n.reportAllChanges),
                    Ge(function() {
                        i.value = performance.now() - u.timeStamp,
                        r(!0)
                    })
                }))
            })
        }, tt = [.1, .25], on = function(e, n) {
            n = n || {},
            et(Xe(function() {
                var r, a = k("CLS", 0), i = 0, o = [], u = function(d) {
                    d.forEach(function(m) {
                        if (!m.hadRecentInput) {
                            var w = o[0]
                              , y = o[o.length - 1];
                            i && m.startTime - y.startTime < 1e3 && m.startTime - w.startTime < 5e3 ? (i += m.value,
                            o.push(m)) : (i = m.value,
                            o = [m])
                        }
                    }),
                    i > a.value && (a.value = i,
                    a.entries = o,
                    r())
                }, s = $("layout-shift", u);
                s && (r = B(e, a, tt, n.reportAllChanges),
                ye(function() {
                    u(s.takeRecords()),
                    r(!0)
                }),
                Z(function() {
                    i = 0,
                    a = k("CLS", 0),
                    r = B(e, a, tt, n.reportAllChanges),
                    Ge(function() {
                        return r()
                    })
                }),
                setTimeout(r, 0))
            }))
        }, ee = {
            passive: !0,
            capture: !0
        }, un = new Date, nt = function(e, n) {
            U || (U = n,
            J = e,
            Ye = new Date,
            at(removeEventListener),
            rt())
        }, rt = function() {
            if (J >= 0 && J < Ye - un) {
                var e = {
                    entryType: "first-input",
                    name: U.type,
                    target: U.target,
                    cancelable: U.cancelable,
                    startTime: U.timeStamp,
                    processingStart: U.timeStamp + J
                };
                re.forEach(function(n) {
                    n(e)
                }),
                re = []
            }
        }, cn = function(e) {
            if (e.cancelable) {
                var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                e.type == "pointerdown" ? function(r, a) {
                    var i = function() {
                        nt(r, a),
                        u()
                    }
                      , o = function() {
                        u()
                    }
                      , u = function() {
                        removeEventListener("pointerup", i, ee),
                        removeEventListener("pointercancel", o, ee)
                    };
                    addEventListener("pointerup", i, ee),
                    addEventListener("pointercancel", o, ee)
                }(n, e) : nt(n, e)
            }
        }, at = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(n) {
                return e(n, cn, ee)
            })
        }, it = [100, 300], sn = function(e, n) {
            n = n || {},
            Ee(function() {
                var r, a = Ze(), i = k("FID"), o = function(d) {
                    d.startTime < a.firstHiddenTime && (i.value = d.processingStart - d.startTime,
                    i.entries.push(d),
                    r(!0))
                }, u = function(d) {
                    d.forEach(o)
                }, s = $("first-input", u);
                r = B(e, i, it, n.reportAllChanges),
                s && ye(Xe(function() {
                    u(s.takeRecords()),
                    s.disconnect()
                })),
                s && Z(function() {
                    var c;
                    i = k("FID"),
                    r = B(e, i, it, n.reportAllChanges),
                    re = [],
                    J = -1,
                    U = null,
                    at(addEventListener),
                    c = o,
                    re.push(c),
                    rt()
                })
            })
        }, ot = 0, _e = 1 / 0, ie = 0, fn = function(e) {
            e.forEach(function(n) {
                n.interactionId && (_e = Math.min(_e, n.interactionId),
                ie = Math.max(ie, n.interactionId),
                ot = ie ? (ie - _e) / 7 + 1 : 0)
            })
        }, ut = function() {
            return we ? ot : performance.interactionCount || 0
        }, dn = function() {
            "interactionCount"in performance || we || (we = $("event", fn, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        }, ct = [200, 500], st = 0, ft = function() {
            return ut() - st
        }, O = [], Se = {}, dt = function(e) {
            var n = O[O.length - 1]
              , r = Se[e.interactionId];
            if (r || O.length < 10 || e.duration > n.latency) {
                if (r)
                    r.entries.push(e),
                    r.latency = Math.max(r.latency, e.duration);
                else {
                    var a = {
                        id: e.interactionId,
                        latency: e.duration,
                        entries: [e]
                    };
                    Se[a.id] = a,
                    O.push(a)
                }
                O.sort(function(i, o) {
                    return o.latency - i.latency
                }),
                O.splice(10).forEach(function(i) {
                    delete Se[i.id]
                })
            }
        }, vn = function(e, n) {
            n = n || {},
            Ee(function() {
                var r;
                dn();
                var a, i = k("INP"), o = function(c) {
                    c.forEach(function(w) {
                        w.interactionId && dt(w),
                        w.entryType === "first-input" && !O.some(function(y) {
                            return y.entries.some(function(I) {
                                return w.duration === I.duration && w.startTime === I.startTime
                            })
                        }) && dt(w)
                    });
                    var d, m = (d = Math.min(O.length - 1, Math.floor(ft() / 50)),
                    O[d]);
                    m && m.latency !== i.value && (i.value = m.latency,
                    i.entries = m.entries,
                    a())
                }, u = $("event", o, {
                    durationThreshold: (r = n.durationThreshold) !== null && r !== void 0 ? r : 40
                });
                a = B(e, i, ct, n.reportAllChanges),
                u && ("PerformanceEventTiming"in window && "interactionId"in PerformanceEventTiming.prototype && u.observe({
                    type: "first-input",
                    buffered: !0
                }),
                ye(function() {
                    o(u.takeRecords()),
                    i.value < 0 && ft() > 0 && (i.value = 0,
                    i.entries = []),
                    a(!0)
                }),
                Z(function() {
                    O = [],
                    st = ut(),
                    i = k("INP"),
                    a = B(e, i, ct, n.reportAllChanges)
                }))
            })
        }, be = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        }, ln = function(e) {
            var n = e.nodeName;
            return e.nodeType === 1 ? n.toLowerCase() : n.toUpperCase().replace(/^#/, "")
        }, pn = function(e, n) {
            var r = "";
            try {
                for (; e && e.nodeType !== 9; ) {
                    var a = e
                      , i = a.id ? "#" + a.id : ln(a) + (a.classList && a.classList.value && a.classList.value.trim() && a.classList.value.trim().length ? "." + a.classList.value.trim().replace(/\s+/g, ".") : "");
                    if (r.length + i.length > (n || 100) - 1)
                        return r || i;
                    if (r = r ? i + ">" + r : i,
                    a.id)
                        break;
                    e = a.parentNode
                }
            } catch (o) {}
            return r
        }, vt = -1, mn = function() {
            return vt
        }, lt = function(e) {
            addEventListener("pageshow", function(n) {
                n.persisted && (vt = n.timeStamp,
                e(n))
            }, !0)
        }, pt = function() {
            var e = be();
            return e && e.activationStart || 0
        }, mt = function(e, n) {
            var r = be()
              , a = "navigate";
            return mn() >= 0 ? a = "back-forward-cache" : r && (document.prerendering || pt() > 0 ? a = "prerender" : document.wasDiscarded ? a = "restore" : r.type && (a = r.type.replace(/_/g, "-"))),
            {
                name: e,
                value: n === void 0 ? -1 : n,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: a
            }
        }, gn = function(e, n, r) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var a = new PerformanceObserver(function(i) {
                        Promise.resolve().then(function() {
                            n(i.getEntries())
                        })
                    }
                    );
                    return a.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, r || {})),
                    a
                }
            } catch (i) {}
        }, gt = function(e, n, r, a) {
            var i, o;
            return function(u) {
                n.value >= 0 && (u || a) && ((o = n.value - (i || 0)) || i === void 0) && (i = n.value,
                n.delta = o,
                n.rating = function(s, c) {
                    return s > c[1] ? "poor" : s > c[0] ? "needs-improvement" : "good"
                }(n.value, r),
                e(n))
            }
        }, hn = function(e) {
            requestAnimationFrame(function() {
                return requestAnimationFrame(function() {
                    return e()
                })
            })
        }, wn = function(e) {
            var n = function(a) {
                a.type !== "pagehide" && document.visibilityState !== "hidden" || e(a)
            };
            addEventListener("visibilitychange", n, !0),
            addEventListener("pagehide", n, !0)
        }, yn = function(e) {
            var n = !1;
            return function(r) {
                n || (e(r),
                n = !0)
            }
        }, G = -1, ht = function() {
            return document.visibilityState !== "hidden" || document.prerendering ? 1 / 0 : 0
        }, oe = function(e) {
            document.visibilityState === "hidden" && G > -1 && (G = e.type === "visibilitychange" ? e.timeStamp : 0,
            En())
        }, wt = function() {
            addEventListener("visibilitychange", oe, !0),
            addEventListener("prerenderingchange", oe, !0)
        }, En = function() {
            removeEventListener("visibilitychange", oe, !0),
            removeEventListener("prerenderingchange", oe, !0)
        }, _n = function() {
            return G < 0 && (G = ht(),
            wt(),
            lt(function() {
                setTimeout(function() {
                    G = ht(),
                    wt()
                }, 0)
            })),
            {
                get firstHiddenTime() {
                    return G
                }
            }
        }, Sn = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", function() {
                return e()
            }, !0) : e()
        }, fr = 1 / 0, yt = [2500, 4e3], Te = {}, bn = function(e, n) {
            (function(r, a) {
                a = a || {},
                Sn(function() {
                    var i, o = _n(), u = mt("LCP"), s = function(w) {
                        var y = w[w.length - 1];
                        y && y.startTime < o.firstHiddenTime && (u.value = Math.max(y.startTime - pt(), 0),
                        u.entries = [y],
                        i())
                    }, c = gn("largest-contentful-paint", s);
                    if (c) {
                        i = gt(r, u, yt, a.reportAllChanges);
                        var d = yn(function() {
                            Te[u.id] || (s(c.takeRecords()),
                            c.disconnect(),
                            Te[u.id] = !0,
                            i(!0))
                        });
                        ["keydown", "click"].forEach(function(m) {
                            addEventListener(m, function() {
                                return setTimeout(d, 0)
                            }, !0)
                        }),
                        wn(d),
                        lt(function(m) {
                            u = mt("LCP"),
                            i = gt(r, u, yt, a.reportAllChanges),
                            hn(function() {
                                u.value = performance.now() - m.timeStamp,
                                Te[u.id] = !0,
                                i(!0)
                            })
                        })
                    }
                })
            }
            )(function(r) {
                (function(a) {
                    if (a.entries.length) {
                        var i = be();
                        if (i) {
                            var o = i.activationStart || 0
                              , u = a.entries[a.entries.length - 1]
                              , s = u.url && performance.getEntriesByType("resource").filter(function(I) {
                                return I.name === u.url
                            })[0]
                              , c = Math.max(0, i.responseStart - o)
                              , d = Math.max(c, s ? (s.requestStart || s.startTime) - o : 0)
                              , m = Math.max(d, s ? s.responseEnd - o : 0)
                              , w = Math.max(m, u ? u.startTime - o : 0)
                              , y = {
                                element: pn(u.element),
                                timeToFirstByte: c,
                                resourceLoadDelay: d - c,
                                resourceLoadTime: m - d,
                                elementRenderDelay: w - m,
                                navigationEntry: i,
                                lcpEntry: u
                            };
                            return u.url && (y.url = u.url),
                            s && (y.lcpResourceEntry = s),
                            void (a.attribution = y)
                        }
                    }
                    a.attribution = {
                        timeToFirstByte: 0,
                        resourceLoadDelay: 0,
                        resourceLoadTime: 0,
                        elementRenderDelay: a.value
                    }
                }
                )(r),
                e(r)
            }, n)
        }, Tn = function(t) {
            var e = t.getAttribute("elementtiming");
            if (e !== null)
                return e;
            var n = t.tagName;
            if (n === "IMG") {
                var r = t.getAttribute("data-loader");
                if (r !== null)
                    return "unknown-image-component-".concat(r);
                var a = t.getAttribute("data-src") !== null;
                if (a)
                    return "unknown-imageloader"
            }
            return "unknown-".concat(n)
        }, Et = function(t) {
            var e, n = "";
            n += t.tagName;
            var r = t
              , a = -1;
            do
                r = r.previousElementSibling,
                a += 1;
            while (r !== null);
            n += "[" + a + "]";
            var i = (e = t.classList.value) === null || e === void 0 ? void 0 : e.trim().replace(/\s+/g, ".");
            return i && (n += "." + i),
            n
        }, _t = function(t) {
            return t.substring(0, pe - 3) + "..."
        }, An = function(t) {
            var e = Et(t);
            if (e.length > pe)
                return _t(e);
            for (var n = t.parentElement; n !== null && n.tagName !== "BODY"; ) {
                var r = "<" + Et(n);
                if (e += r,
                e.length > pe)
                    return _t(e);
                n = n.parentElement
            }
            return e
        }, Cn = function(t) {
            var e, n = (e = t.attribution.lcpEntry) === null || e === void 0 ? void 0 : e.element;
            return {
                largestContentfulPaint: Math.round(t.value),
                lcpElementName: n ? Tn(n) : void 0,
                lcpElementPath: n ? An(n) : void 0,
                lcpElementRenderDelay: Math.round(t.attribution.elementRenderDelay),
                lcpResourceLoadDelay: Math.round(t.attribution.resourceLoadDelay),
                lcpResourceLoadTime: Math.round(t.attribution.resourceLoadTime),
                lcpTtfb: Math.round(t.attribution.timeToFirstByte)
            }
        }, St = function(t) {
            on(function(e) {
                t({
                    cumulativeLayoutShift: e.value
                })
            }, {
                reportAllChanges: !0
            })
        }, bt = function(t) {
            et(function(e) {
                t({
                    firstContentfulPaint: Math.round(e.value)
                })
            })
        }, Tt = function(t) {
            sn(function(e) {
                t({
                    firstInputDelay: Math.round(e.value)
                })
            })
        }, At = function(t) {
            vn(function(e) {
                t({
                    interactionToNextPaint: Math.round(e.value)
                })
            })
        }, Ct = function(t) {
            bn(function(e) {
                t(Cn(e))
            })
        }, Ln = ["connectEnd", "connectStart", "decodedBodySize", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "encodedBodySize", "fetchStart", "loadEventEnd", "loadEventStart", "redirectCount", "redirectEnd", "redirectStart", "responseStart", "responseEnd", "responseStatus", "secureConnectionStart", "transferSize", "unloadEventEnd", "unloadEventStart", "workerStart"], Pn = ["initiatorType", "nextHopProtocol"], Lt = function(t, e) {
            return function() {
                var n = g(function(r) {
                    var a, i, o, u, s;
                    return p(this, function(c) {
                        switch (c.label) {
                        case 0:
                            return c.trys.push([0, 2, , 3]),
                            a = [{}, r],
                            [4, t(r)];
                        case 1:
                            return e.apply(void 0, [M.apply(void 0, a.concat([c.sent()]))]),
                            [3, 3];
                        case 2:
                            return i = c.sent(),
                            (s = window) === null || s === void 0 || (u = s.SQUARESPACE_SENTRY) === null || u === void 0 || (o = u.captureException) === null || o === void 0 || o.call(u, i),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                });
                return function(r) {
                    return n.apply(this, arguments)
                }
            }()
        };
        function Ae(t) {
            Object.values(De).forEach(function() {
                var e = g(function(n) {
                    var r, a, i, o;
                    return p(this, function(u) {
                        switch (u.label) {
                        case 0:
                            return u.trys.push([0, 2, , 3]),
                            [4, n(t)];
                        case 1:
                            return u.sent(),
                            [3, 3];
                        case 2:
                            return r = u.sent(),
                            (o = window) === null || o === void 0 || (i = o.SQUARESPACE_SENTRY) === null || i === void 0 || (a = i.captureException) === null || a === void 0 || a.call(i, r),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                });
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()),
            Ln.forEach(Lt(Q, t)),
            Pn.forEach(Lt(Be, t))
        }
        var Rn = ["more", "less", "custom"]
          , Nn = function() {
            var t;
            return (t = Rn.find(function(e) {
                return window.matchMedia("prefers-contrast: ".concat(e)).matches
            })) !== null && t !== void 0 ? t : "no-preference"
        }
          , Pt = function() {
            var t;
            return {
                forceColors: window.matchMedia("(forced-colors: active)").matches,
                networkInformationType: (t = navigator.connection) === null || t === void 0 ? void 0 : t.type,
                prefersContrast: Nn(),
                prefersReducedMotion: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                primaryInputHasHover: window.matchMedia("(hover: hover)").matches,
                keyboardUsage: !1
            }
        }
          , On = function(t) {
            var e = Pt()
              , n = function() {
                t(e, "a11y")
            }
              , r = function(i) {
                var o;
                ["INPUT", "TEXTAREA"].includes((o = i.target) === null || o === void 0 ? void 0 : o.tagName) || !Gt.includes(i.key) || (e.keyboardUsage = !0,
                document.removeEventListener("keydown", r))
            };
            document.addEventListener("keydown", r);
            var a = function() {
                document.visibilityState === "hidden" && (n(),
                document.removeEventListener("keydown", r),
                document.removeEventListener(ne, a))
            };
            document.addEventListener(ne, a)
        };
        function Rt(t) {
            var e = new RegExp("(^| )".concat(t, "=([^;]+)"))
              , n = document.cookie.match(e);
            return n ? n[2] : ""
        }
        function Mn() {
            return !!(window.PerformanceMeasure && window.PerformanceMark)
        }
        function Nt() {
            if (!Object.prototype.hasOwnProperty.call(window, "PerformanceObserver"))
                return !1;
            try {
                var t = new window.PerformanceObserver(function() {
                    return null
                }
                );
                t.observe({
                    entryTypes: ["mark"]
                }),
                t.disconnect()
            } catch (e) {
                return !1
            }
            return !0
        }
        function Ot() {
            var t;
            return typeof ((t = window.navigator) === null || t === void 0 ? void 0 : t.sendBeacon) == "function" && !Zt.test(window.navigator.userAgent)
        }
        var ue = function(t) {
            var e = Number(t);
            return Number.isNaN(e) ? void 0 : e
        };
        function In() {
            var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e, n, r, a, i, o, u;
            return {
                context: t,
                analyticsId: Rt(Kt),
                marketingId: Rt(Xt),
                memberId: (r = window.Static) === null || r === void 0 || (n = r.SQUARESPACE_CONTEXT) === null || n === void 0 || (e = n.authenticatedAccount) === null || e === void 0 ? void 0 : e.id,
                version: $t,
                downlink: ue((a = navigator.connection) === null || a === void 0 ? void 0 : a.downlink),
                effectiveType: (i = navigator.connection) === null || i === void 0 ? void 0 : i.effectiveType,
                rtt: ue((o = navigator.connection) === null || o === void 0 ? void 0 : o.rtt),
                saveData: Number(((u = navigator.connection) === null || u === void 0 ? void 0 : u.saveData) || 0),
                deliveryType: Ot() ? "beacon" : "xhr",
                devicePixelRatio: window.devicePixelRatio,
                screenHeight: window.screen.height,
                screenWidth: window.screen.width,
                viewportHeight: window.innerHeight,
                viewportWidth: window.innerWidth,
                deviceMemory: ue(navigator.deviceMemory),
                hardwareConcurrency: ue(navigator.hardwareConcurrency),
                hash: window.location.hash || "",
                hostname: window.location.hostname || "",
                pathname: window.location.pathname || "/"
            }
        }
        var xn = function() {
            var t = g(function(e) {
                var n, r;
                return p(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return n = In(e),
                        r = {},
                        Ae(function(i) {
                            Object.assign(r, i)
                        }),
                        [4, Promise.race([Ue(6e4), ke()])];
                    case 1:
                        return a.sent(),
                        [2, D({}, n, r)]
                    }
                })
            });
            return function(n) {
                return t.apply(this, arguments)
            }
        }(), Dn = function() {
            var t = g(function(e, n) {
                var r;
                return p(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return [4, xn(n)];
                    case 1:
                        return r = a.sent(),
                        e(r, "page_speed"),
                        [2]
                    }
                })
            });
            return function(n, r) {
                return t.apply(this, arguments)
            }
        }(), Un = ["media-www.sqspcdn.com", "images.squarespace-cdn.com", "static1.squarespace.com"], kn = function(t) {
            return Un.some(function(e) {
                return t.includes(e)
            })
        }, Bn = function(t) {
            return t.hasAttribute("data-loader") ? 2 : t.hasAttribute("data-src") ? 1 : 0
        }, Fn = function(t, e) {
            if (t.hasAttribute("data-image-resolution")) {
                var n;
                return Number((n = t.getAttribute("data-image-resolution")) === null || n === void 0 ? void 0 : n.replace("w", ""))
            }
            var r = e.indexOf("format=");
            return r !== -1 ? Number(e.slice(r + 7).replace(/w.*/, "")) : NaN
        }, Hn = function(t, e, n) {
            if (n === 1 && P(t, HTMLImageElement) && t.naturalHeight === 0) {
                var r = document.querySelector('div[style*="'.concat(e, '"]'));
                if (r)
                    return r
            }
            return t
        }, jn = function(t) {
            if (P(t, HTMLImageElement)) {
                var e = t.naturalHeight
                  , n = t.naturalWidth
                  , r = t.width
                  , a = t.height;
                return {
                    naturalHeight: e,
                    naturalWidth: n,
                    width: r,
                    height: a
                }
            }
            var i = t.getBoundingClientRect()
              , o = Math.floor(i.width)
              , u = Math.floor(i.height);
            return {
                naturalHeight: u,
                naturalWidth: o
            }
        }, qn = function() {
            var t = g(function(e, n) {
                var r, a, i, o, u, s, c, d, m, w, y, I, jt, Pe, qt, Re, se, Qt;
                return p(this, function(dr) {
                    r = Fn(n, e.name),
                    a = Bn(n),
                    i = n.getAttribute("data-loader"),
                    o = n.getAttribute("elementtiming"),
                    u = e.toJSON(),
                    s = u.serverTiming,
                    c = u.workerTiming,
                    d = K(u, ["serverTiming", "workerTiming"]),
                    m = !0,
                    w = !1,
                    y = void 0;
                    try {
                        for (I = Object.entries(d)[Symbol.iterator](); !(m = (jt = I.next()).done); m = !0)
                            Pe = C(jt.value, 2),
                            qt = Pe[0],
                            Re = Pe[1],
                            typeof Re == "number" && (d[qt] = Math.floor(Re))
                    } catch (Ne) {
                        w = !0,
                        y = Ne
                    } finally {
                        try {
                            !m && I.return != null && I.return()
                        } finally {
                            if (w)
                                throw y
                        }
                    }
                    return se = Hn(n, e.name, a),
                    Qt = jn(se),
                    [2, new Promise(function(Ne) {
                        var Yt = new IntersectionObserver(function(sr) {
                            sr.forEach(function(fe) {
                                if (fe.target === se)
                                    return Yt.disconnect(),
                                    Ne(D({
                                        visibleOnLoad: fe.isIntersecting,
                                        observationTime: Math.floor(fe.time),
                                        intersectionRatio: fe.intersectionRatio,
                                        squarespaceSize: r,
                                        imageType: a,
                                        imageLoaderType: i,
                                        elementTiming: o
                                    }, Qt, d))
                            })
                        }
                        );
                        Yt.observe(se)
                    }
                    )]
                })
            });
            return function(n, r) {
                return t.apply(this, arguments)
            }
        }(), Qn = function() {
            var t = g(function(e) {
                var n, r, a, i, o;
                return p(this, function(u) {
                    switch (u.label) {
                    case 0:
                        return n = e.resource,
                        r = e.deliverMetrics,
                        !(P(n, PerformanceResourceTiming) && n.initiatorType === "img") || !kn(n.name) ? [2] : (a = n.name.replace(/\?.*/, ""),
                        i = Array.from(document.querySelectorAll('img[src="'.concat(n.name, '"], img[data-src*="').concat(a, '"], img[srcset*="').concat(n.name, '"]'))),
                        document.querySelectorAll('picture > source[srcset*="'.concat(n.name, '"]')).forEach(function(s) {
                            var c = s.parentElement;
                            c !== null && i.push(c.lastElementChild)
                        }),
                        i.length !== 1 ? [2] : [4, qn(n, i[0])]);
                    case 1:
                        return o = u.sent(),
                        r(o, "image"),
                        [2]
                    }
                })
            });
            return function(n) {
                return t.apply(this, arguments)
            }
        }(), Mt = function() {
            var t = g(function(e) {
                var n, r;
                return p(this, function(a) {
                    return Nt() ? (n = function(i) {
                        return Qn({
                            resource: i,
                            deliverMetrics: e
                        })
                    }
                    ,
                    performance.getEntriesByType("resource").forEach(n),
                    r = new PerformanceObserver(function(i) {
                        i.getEntries().forEach(n)
                    }
                    ),
                    r.observe({
                        entryTypes: ["resource"]
                    }),
                    [2]) : [2]
                })
            });
            return function(n) {
                return t.apply(this, arguments)
            }
        }(), Y, Ce = function(t) {
            var e = t.spanName
              , n = t.tracer
              , r = t.startTime
              , a = t.spanAttributes
              , i = a === void 0 ? {} : a;
            Y === void 0 && (Y = new Map);
            var o = n.startSpan(e, {
                startTime: r
            });
            o.setAttributes(i),
            Y.set(e, o)
        }, It = function(t) {
            var e = t.spanName
              , n = t.spanAttributes
              , r = n === void 0 ? {} : n
              , a = t.updateName;
            if (!(Y === void 0 || !Y.has(e))) {
                var i = Y.get(e);
                i.setAttributes(r),
                a !== void 0 && i.updateName(a),
                i.end(),
                Y.delete(e)
            }
        }, X = "rum-", xt = function(t) {
            var e, n;
            typeof ((n = window) === null || n === void 0 || (e = n.SQUARESPACE_SENTRY) === null || e === void 0 ? void 0 : e.captureException) == "function" ? window.SQUARESPACE_SENTRY.captureException(t) : console.warn("@sqs/rum-collector: user timing exception: ".concat(t))
        };
        function Yn(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            try {
                if (!Dt())
                    return;
                var n = X + t;
                window.performance.clearMarks(n);
                var r = window.performance.mark(n, {
                    detail: e.detail,
                    startTime: e.startTime
                });
                if (e.tracer !== void 0) {
                    var a = C(window.performance.getEntriesByName(n, "mark").slice(-1), 1)
                      , i = a[0];
                    Ce({
                        spanName: n,
                        tracer: e.tracer,
                        startTime: i.startTime,
                        spanAttributes: e.spanAttributes
                    })
                }
                return r
            } catch (o) {
                xt(o)
            }
        }
        function Vn(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                requireStart: !1
            };
            try {
                if (!(Dt() && Wn()))
                    return;
                var n = X + t
                  , r = {
                    detail: e.detail,
                    duration: e.duration
                };
                if (e.start === void 0 ? window.performance.getEntriesByName(n, "mark").length > 0 && (r.start = n) : typeof e.start == "string" ? r.start = X + e.start : r.start = e.start,
                r.end = typeof e.end == "string" ? X + e.end : e.end,
                e.requireStart && typeof r.start != "string")
                    return;
                if (e.tracer !== void 0) {
                    var a = D({
                        measureName: n
                    }, e.spanAttributes);
                    if (typeof r.start == "number")
                        Ce({
                            spanName: n,
                            tracer: e.tracer,
                            startTime: r.start
                        }),
                        It({
                            spanName: n,
                            spanAttributes: a
                        });
                    else {
                        var i;
                        if (window.performance.getEntriesByName((i = r.start) !== null && i !== void 0 ? i : n, "mark").length === 0) {
                            var o;
                            Ce({
                                spanName: (o = r.start) !== null && o !== void 0 ? o : n,
                                tracer: e.tracer,
                                startTime: 0
                            })
                        }
                        var u;
                        It({
                            spanName: (u = r.start) !== null && u !== void 0 ? u : n,
                            spanAttributes: a,
                            updateName: r.start !== n ? n : void 0
                        })
                    }
                }
                Gn(n, r);
                var s = zn(n);
                return s
            } catch (c) {
                xt(c)
            }
        }
        function Wn() {
            return "performance"in window && "getEntries"in window.performance && "getEntriesByType"in window.performance && "getEntriesByName"in window.performance
        }
        function Dt() {
            return "mark"in window.performance && "measure"in window.performance
        }
        function zn(t) {
            var e = window.performance.getEntriesByName(t, "measure");
            return e[e.length - 1]
        }
        function Gn(t, e) {
            try {
                window.performance.measure(t, e)
            } catch (a) {
                var n = typeof e.start == "string" ? e.start : t
                  , r = typeof e.end == "string" ? e.end : void 0;
                try {
                    window.performance.measure(t, n, r)
                } catch (i) {
                    if (!P(i, DOMException))
                        throw i;
                    try {
                        window.performance.measure(t, "navigationStart")
                    } catch (o) {
                        if (!P(o, DOMException))
                            throw o;
                        window.performance.measure(t)
                    }
                }
            }
        }
        function Xn(t) {
            return typeof t == "string" && t.substring(0, 4) === X
        }
        var Ut = new Set, Kn = function(t) {
            if (Mn()) {
                var e = function(r) {
                    var a = r.map(function(i) {
                        return i.entryType === "measure" ? {
                            duration: Math.floor(i.duration),
                            detail: i.detail || null,
                            startTime: Math.floor(i.startTime),
                            name: i.name
                        } : {}
                    });
                    a.forEach(function(i) {
                        if (!(i.name && !Xn(i.name))) {
                            var o = "".concat(i.name, "|").concat(i.duration);
                            Ut.has(o) || (t(i, "user"),
                            Ut.add(o))
                        }
                    })
                };
                if (e(window.performance.getEntriesByType("measure")),
                Nt()) {
                    var n = new window.PerformanceObserver(function(r) {
                        return e(r.getEntries())
                    }
                    );
                    n.observe({
                        entryTypes: ["measure"]
                    })
                } else
                    document.addEventListener(ne, function() {
                        document.visibilityState === "hidden" && e(window.performance.getEntriesByType("measure"))
                    })
            }
        }, kt, ce = [], Jn = function(t) {
            ce.push(t)
        };
        function Zn(t, e) {
            if (!(Ot() && navigator.sendBeacon(t, e))) {
                var n = new XMLHttpRequest;
                n.open("POST", t, !0),
                n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"),
                n.send(e)
            }
        }
        function Bt(t) {
            if (ce.length) {
                var e = JSON.stringify(ce);
                Zn(t, e),
                ce = []
            }
        }
        function $n(t) {
            window.addEventListener(zt, function() {
                kt = window.setTimeout(function() {
                    return Bt(t)
                }, Jt)
            }),
            document.addEventListener(ne, function() {
                document.visibilityState === "hidden" && (window.clearTimeout(kt),
                Bt(t))
            })
        }
        function er(t) {
            Jn(D({
                raw: !0
            }, t))
        }
        var tr = function(t, e) {
            return function(n, r) {
                var a = {
                    app: t,
                    data: n,
                    event: r,
                    pageLoadId: e,
                    ts: Date.now()
                };
                er(a)
            }
        }
          , nr = function(t) {
            return function() {
                for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                    n[r] = arguments[r];
                t && t.apply(void 0, b(n))
            }
        }
          , rr = function(t) {
            var e = {
                appName: t.appName || "",
                context: t.context || {},
                enabled: typeof t.enabled == "boolean" ? t.enabled : !0,
                serviceURL: t.serviceURL || Wt,
                captureException: nr(t.captureException)
            };
            return e
        };
        function Ft(t) {
            return Le.apply(this, arguments)
        }
        function Le() {
            return Le = g(function(t) {
                var e, n, r;
                return p(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return e = rr(t),
                        e.enabled ? [4, Promise.resolve().then(function() {
                            return Vt(),
                            Oe
                        })] : [2];
                    case 1:
                        n = a.sent().nanoid();
                        try {
                            r = tr(e.appName, n),
                            Dn(r, e.context),
                            Kn(r),
                            Mt(r),
                            On(r),
                            $n(e.serviceURL)
                        } catch (i) {
                            e.captureException(i, {
                                pageLoadId: n,
                                parsedOptions: e
                            })
                        }
                        return [2]
                    }
                })
            }),
            Le.apply(this, arguments)
        }
        var ar = {
            action: "load",
            actor: "user",
            event_owner_team: "web_performance",
            event_source: "web",
            object_type: "website"
        }
          , ir = function() {
            var t = /^qa\d+.sqsp.net/g
              , e = /^stage.sqsp.net/g
              , n = /(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g
              , r = window.location.hostname.substr(window.location.hostname.indexOf(".") + 1);
            return e.test(r) || t.test(r) ? "staging" : n.test(r) ? "dev" : "prod"
        }
          , or = function(t) {
            var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ir();
            return new t({
                customSchemaName: "Performance",
                sourceEnvironment: e
            },ar)
        }
          , Ht = Object.freeze({
            cumulativeLayoutShift: "cumulative_layout_shift",
            decodedBodySize: "decoded_body_size_bytes",
            domContentLoadedEventEnd: "dom_content_loaded_event_end_ms",
            domContentLoadedEventStart: "dom_content_loaded_event_start_ms",
            domainLookup: "domain_lookup_ms",
            encodedBodySize: "encoded_body_size_bytes",
            firstContentfulPaint: "first_contentful_paint_ms",
            firstInputDelay: "first_input_delay_ms",
            interactionToNextPaint: "interaction_to_next_paint_ms",
            largestContentfulPaint: "largest_contentful_paint_ms",
            loadEventEnd: "load_event_end_ms",
            loadEventStart: "load_event_start_ms",
            responseStart: "response_start_ms",
            tcpConnection: "tcp_connection_ms",
            tlsNegotiation: "tls_negotiation_ms"
        })
          , ur = function() {
            var t = g(function(e) {
                var n;
                return p(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return n = {},
                        Ae(function(a) {
                            Object.entries(a).forEach(function(i) {
                                var o = C(i, 2)
                                  , u = o[0]
                                  , s = o[1];
                                Object.prototype.hasOwnProperty.call(Ht, u) && (n[Ht[u]] = s)
                            })
                        }),
                        [4, Promise.race([Ue(6e4), ke()])];
                    case 1:
                        return r.sent(),
                        e(n),
                        [2]
                    }
                })
            });
            return function(n) {
                return t.apply(this, arguments)
            }
        }();
        function cr() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return console.warn("@sqs/rum-collector default export is deprecated. Use named export `init` instead."),
            Ft.apply(void 0, b(e))
        }
    }
}, x => {
    var _ = L => x(x.s = L)
      , A = _(319484)
}
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/840806199e6888386d8c1ad4bf378c0d/performance-3a405b78d33ac9233ff6-min.en-US.js.map
