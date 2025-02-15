(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([[84467], {
    264667: (p, o) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        o.default = void 0;
        var t;
        (function(s) {
            s.SUB_FOOTER = "SUB_FOOTER",
            s.PILL = "PILL",
            s.HIDDEN = "HIDDEN"
        }
        )(t || (t = {}));
        var v = t;
        o.default = v,
        p.exports = o.default
    }
    ,
    845076: (p, o) => {
        var t, v;
        /*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
        (function() {
            "use strict";
            var s = {}.hasOwnProperty;
            function S() {
                for (var i = [], g = 0; g < arguments.length; g++) {
                    var u = arguments[g];
                    if (u) {
                        var O = typeof u;
                        if (O === "string" || O === "number")
                            i.push(u);
                        else if (Array.isArray(u)) {
                            if (u.length) {
                                var n = S.apply(null, u);
                                n && i.push(n)
                            }
                        } else if (O === "object")
                            if (u.toString === Object.prototype.toString)
                                for (var c in u)
                                    s.call(u, c) && u[c] && i.push(c);
                            else
                                i.push(u.toString())
                    }
                }
                return i.join(" ")
            }
            p.exports ? (S.default = S,
            p.exports = S) : (t = [],
            v = function() {
                return S
            }
            .apply(o, t),
            v !== void 0 && (p.exports = v))
        }
        )()
    }
    ,
    418008: (p, o, t) => {
        var v = "Expected a function"
          , s = NaN
          , S = "[object Symbol]"
          , i = /^\s+|\s+$/g
          , g = /^[-+]0x[0-9a-f]+$/i
          , u = /^0b[01]+$/i
          , O = /^0o[0-7]+$/i
          , n = parseInt
          , c = typeof t.g == "object" && t.g && t.g.Object === Object && t.g
          , m = typeof self == "object" && self && self.Object === Object && self
          , f = c || m || Function("return this")()
          , T = Object.prototype
          , M = T.toString
          , b = Math.max
          , P = Math.min
          , A = function() {
            return f.Date.now()
        };
        function F(l, y, w) {
            var I, R, U, N, k, e, a = 0, r = !1, d = !1, C = !0;
            if (typeof l != "function")
                throw new TypeError(v);
            y = j(y) || 0,
            x(w) && (r = !!w.leading,
            d = "maxWait"in w,
            U = d ? b(j(w.maxWait) || 0, y) : U,
            C = "trailing"in w ? !!w.trailing : C);
            function h(E) {
                var Y = I
                  , V = R;
                return I = R = void 0,
                a = E,
                N = l.apply(V, Y),
                N
            }
            function L(E) {
                return a = E,
                k = setTimeout(D, y),
                r ? h(E) : N
            }
            function W(E) {
                var Y = E - e
                  , V = E - a
                  , J = y - Y;
                return d ? P(J, U - V) : J
            }
            function B(E) {
                var Y = E - e
                  , V = E - a;
                return e === void 0 || Y >= y || Y < 0 || d && V >= U
            }
            function D() {
                var E = A();
                if (B(E))
                    return H(E);
                k = setTimeout(D, W(E))
            }
            function H(E) {
                return k = void 0,
                C && I ? h(E) : (I = R = void 0,
                N)
            }
            function $() {
                k !== void 0 && clearTimeout(k),
                a = 0,
                I = e = R = k = void 0
            }
            function q() {
                return k === void 0 ? N : H(A())
            }
            function X() {
                var E = A()
                  , Y = B(E);
                if (I = arguments,
                R = this,
                e = E,
                Y) {
                    if (k === void 0)
                        return L(e);
                    if (d)
                        return k = setTimeout(D, y),
                        h(e)
                }
                return k === void 0 && (k = setTimeout(D, y)),
                N
            }
            return X.cancel = $,
            X.flush = q,
            X
        }
        function x(l) {
            var y = typeof l;
            return !!l && (y == "object" || y == "function")
        }
        function _(l) {
            return !!l && typeof l == "object"
        }
        function K(l) {
            return typeof l == "symbol" || _(l) && M.call(l) == S
        }
        function j(l) {
            if (typeof l == "number")
                return l;
            if (K(l))
                return s;
            if (x(l)) {
                var y = typeof l.valueOf == "function" ? l.valueOf() : l;
                l = x(y) ? y + "" : y
            }
            if (typeof l != "string")
                return l === 0 ? l : +l;
            l = l.replace(i, "");
            var w = u.test(l);
            return w || O.test(l) ? n(l.slice(2), w ? 2 : 8) : g.test(l) ? s : +l
        }
        p.exports = F
    }
    ,
    750317: p => {
        p.exports = {}
    }
    ,
    439896: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        function v(_, K) {
            for (var j in K)
                Object.defineProperty(_, j, {
                    enumerable: !0,
                    get: K[j]
                })
        }
        v(o, {
            SITE_STYLES_ACCESSORIES: function() {
                return n
            },
            SITE_STYLES_ANIMATIONS: function() {
                return T
            },
            SITE_STYLES_BUTTONS: function() {
                return u
            },
            SITE_STYLES_COLORS: function() {
                return b
            },
            SITE_STYLES_COOKIE_BANNER: function() {
                return M
            },
            SITE_STYLES_FONTS: function() {
                return g
            },
            SITE_STYLES_FORMS: function() {
                return F
            },
            SITE_STYLES_IMAGE_BLOCKS: function() {
                return m
            },
            SITE_STYLES_PALETTE_EDITOR: function() {
                return P
            },
            SITE_STYLES_PRODUCT_ITEMS: function() {
                return O
            },
            SITE_STYLES_ROOT: function() {
                return i
            },
            SITE_STYLES_SITE_SPACING: function() {
                return f
            },
            SITE_STYLES_THEME_EDITOR: function() {
                return A
            },
            default: function() {
                return x
            }
        });
        var s = S(t(62600));
        function S(_) {
            return _ && _.__esModule ? _ : {
                default: _
            }
        }
        var i = "".concat(s.default.forSiteStyles(), "/site-styles")
          , g = "".concat(i, "/fonts")
          , u = "".concat(i, "/buttons")
          , O = "".concat(i, "/product-items")
          , n = "".concat(i, "/accessories")
          , c = n
          , m = "".concat(c, "/image-blocks")
          , f = "".concat(c, "/site-spacing")
          , T = "".concat(c, "/animations")
          , M = "".concat(n, "/cookie-banner")
          , b = "".concat(i, "/colors")
          , P = "".concat(b, "/palette-editor")
          , A = "".concat(b, "/theme-editor")
          , F = "".concat(i, "/forms")
          , x = {
            ROOT: i,
            FONTS: g,
            COLORS: b,
            PALETTE_EDITOR: P,
            THEME_EDITOR: A,
            BUTTONS: u,
            ACCESSORIES: n,
            IMAGE_BLOCKS: m,
            PRODUCT_ITEMS: O,
            SITE_SPACING: f,
            ANIMATIONS: T,
            FORMS: F,
            COOKIE_BANNER: M
        }
    }
    ,
    508948: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        function v(e, a) {
            for (var r in a)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: a[r]
                })
        }
        v(o, {
            areCookiesSet: function() {
                return U
            },
            default: function() {
                return k
            }
        });
        var s = F(t(174161))
          , S = t(233284)
          , i = P(t(687048))
          , g = P(t(602775))
          , u = P(t(994336))
          , O = P(t(680907))
          , n = P(t(477577))
          , c = t(57466)
          , m = P(t(304974))
          , f = t(71226);
        function T(e, a) {
            (a == null || a > e.length) && (a = e.length);
            for (var r = 0, d = new Array(a); r < a; r++)
                d[r] = e[r];
            return d
        }
        function M(e) {
            if (Array.isArray(e))
                return e
        }
        function b(e, a, r) {
            return a in e ? Object.defineProperty(e, a, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[a] = r,
            e
        }
        function P(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function A(e) {
            if (typeof WeakMap != "function")
                return null;
            var a = new WeakMap
              , r = new WeakMap;
            return (A = function(d) {
                return d ? r : a
            }
            )(e)
        }
        function F(e, a) {
            if (!a && e && e.__esModule)
                return e;
            if (e === null || typeof e != "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = A(a);
            if (r && r.has(e))
                return r.get(e);
            var d = {
                __proto__: null
            }
              , C = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var h in e)
                if (h !== "default" && Object.prototype.hasOwnProperty.call(e, h)) {
                    var L = C ? Object.getOwnPropertyDescriptor(e, h) : null;
                    L && (L.get || L.set) ? Object.defineProperty(d, h, L) : d[h] = e[h]
                }
            return d.default = e,
            r && r.set(e, d),
            d
        }
        function x(e, a) {
            var r = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
            if (r != null) {
                var d = [], C = !0, h = !1, L, W;
                try {
                    for (r = r.call(e); !(C = (L = r.next()).done) && (d.push(L.value),
                    !(a && d.length === a)); C = !0)
                        ;
                } catch (B) {
                    h = !0,
                    W = B
                } finally {
                    try {
                        !C && r.return != null && r.return()
                    } finally {
                        if (h)
                            throw W
                    }
                }
                return d
            }
        }
        function _() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        function K(e) {
            for (var a = 1; a < arguments.length; a++) {
                var r = arguments[a] != null ? arguments[a] : {}
                  , d = Object.keys(r);
                typeof Object.getOwnPropertySymbols == "function" && (d = d.concat(Object.getOwnPropertySymbols(r).filter(function(C) {
                    return Object.getOwnPropertyDescriptor(r, C).enumerable
                }))),
                d.forEach(function(C) {
                    b(e, C, r[C])
                })
            }
            return e
        }
        function j(e, a) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var d = Object.getOwnPropertySymbols(e);
                a && (d = d.filter(function(C) {
                    return Object.getOwnPropertyDescriptor(e, C).enumerable
                })),
                r.push.apply(r, d)
            }
            return r
        }
        function l(e, a) {
            return a = a != null ? a : {},
            Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : j(Object(a)).forEach(function(r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r))
            }),
            e
        }
        function y(e, a) {
            return M(e) || x(e, a) || w(e, a) || _()
        }
        function w(e, a) {
            if (e) {
                if (typeof e == "string")
                    return T(e, a);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                if (r === "Object" && e.constructor && (r = e.constructor.name),
                r === "Map" || r === "Set")
                    return Array.from(r);
                if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                    return T(e, a)
            }
        }
        var I = {
            performance: "ss_performanceCookiesAllowed",
            marketing: "ss_marketingCookiesAllowed"
        }
          , R = [I.performance, I.marketing]
          , U = () => R.some(e => !!u.default.get(e))
          , N = () => {
            (0,
            i.default)(window.onCookieBannerInteraction) && window.onCookieBannerInteraction()
        }
        ;
        function k(e) {
            var a = e.cookiesControlledOutsideOfBanner
              , r = y((0,
            s.useState)(!!e.forceShowCookieBanner), 2)
              , d = r[0]
              , C = r[1]
              , h = y((0,
            s.useState)(U()), 2)
              , L = h[0]
              , W = h[1]
              , B = y((0,
            s.useState)(!1), 2)
              , D = B[0]
              , H = B[1]
              , $ = (0,
            s.useRef)(null)
              , q = (0,
            m.default)($, D)
              , X = new Date(Date.now() + 1e3 * 60 * 60 * 24 * 30)
              , E = {
                path: "/",
                expires: X.toUTCString()
            }
              , Y = (e.hasDeclineCookies || e.hasManageCookies) && e.savedPreferencesLayout !== "HIDDEN";
            (0,
            s.useEffect)( () => {
                var G = ee => {
                    C(ee.detail.forceShow)
                }
                ;
                return document.addEventListener(c.COOKIE_BANNER_FORCE_SHOW_EVENT, G),
                () => {
                    document.removeEventListener(c.COOKIE_BANNER_FORCE_SHOW_EVENT, G)
                }
            }
            , []),
            (0,
            s.useEffect)( () => {
                a && (0,
                n.default)({
                    performanceGranted: u.default.get(I.performance) === "true",
                    marketingGranted: u.default.get(I.marketing) === "true"
                })
            }
            , [a]);
            var V = () => {
                d || (R.forEach(G => {
                    u.default.set(G, "true", E)
                }
                ),
                W(!0),
                (0,
                f.setThirdPartyConsentViaCookieBanner)({
                    performance: !0,
                    marketing: !0
                }),
                N())
            }
              , J = () => {
                d || (R.forEach(G => {
                    u.default.set(G, "false", E)
                }
                ),
                W(!0),
                (0,
                f.setThirdPartyConsentViaCookieBanner)({
                    performance: !1,
                    marketing: !1
                }),
                N())
            }
              , te = G => {
                G || (q.current = !0),
                H(G)
            }
              , ne = G => {
                if (!d) {
                    R.forEach(z => {
                        var Z = G.includes(z) ? "true" : "false";
                        u.default.set(z, Z, E)
                    }
                    ),
                    W(!0),
                    H(!1);
                    var ee = Object.keys(I).reduce( (z, Z) => (z[Z] = G.includes(I[Z]),
                    z), {});
                    (0,
                    f.setThirdPartyConsentViaCookieBanner)(ee),
                    N()
                }
            }
              , oe = () => {
                H(!0)
            }
              , ie = l(K({}, e), {
                onAccept: V,
                onDecline: J,
                onSaveManageSettings: ne,
                toggleManageOverlay: te,
                showManageOverlay: D,
                cookieNames: I,
                manageButtonRef: $
            })
              , re = "cookie-banner-mount-point"
              , Q = document.querySelector(".".concat(re));
            if (!Q) {
                Q = document.createElement("div"),
                Q.classList.add(re);
                var ue = document.body.querySelector("#siteWrapper") || document.body;
                ue.prepend(Q)
            }
            var se = e.bannerPosition === "TOP" && document.body.querySelector(".sqs-announcement-bar-dropzone") || Q
              , ae = s.default.createElement(g.default.ManageOverlay, {
                theme: e.theme,
                cookieNames: I,
                onClose: () => {
                    te(!1)
                }
                ,
                onSave: ne
            });
            return L && !d ? Y ? s.default.createElement(O.default, null, s.default.createElement(g.default.ManageBar, {
                savedPreferencesLayout: e.savedPreferencesLayout,
                savedPreferencesText: e.savedPreferencesText,
                theme: e.theme,
                manageButtonRef: $,
                openOverlay: oe
            }), D && ae) : null : s.default.createElement(O.default, null, (0,
            S.createPortal)(s.default.createElement(g.default.Banner, ie), se), D && ae)
        }
    }
    ,
    457966: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        function v(b, P) {
            for (var A in P)
                Object.defineProperty(b, A, {
                    enumerable: !0,
                    get: P[A]
                })
        }
        v(o, {
            default: function() {
                return M
            },
            renderCookieBannerManager: function() {
                return T
            }
        });
        var s = c(t(174161))
          , S = t(233284)
          , i = c(t(843383))
          , g = c(t(378434))
          , u = c(t(222684))
          , O = t(439896)
          , n = c(t(508948));
        t(750317);
        function c(b) {
            return b && b.__esModule ? b : {
                default: b
            }
        }
        var m = "/config".concat(O.SITE_STYLES_COOKIE_BANNER)
          , f = "cookie-banner-manager"
          , T = function() {
            var b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, P, A, F = (P = window.Static) === null || P === void 0 ? void 0 : P.SQUARESPACE_CONTEXT, x = F || {}, _ = x.cookieSettings, K = x.pageType, j = _ && u.default.shouldShowCookieBanner({
                settings: _,
                urlSearch: window.location.search
            });
            if (j) {
                var l = _.cookieBannerCtaText
                  , y = _.cookieBannerText
                  , w = _.cookieBannerOptOutCtaText
                  , I = _.cookieBannerHasOptOut
                  , R = _.cookieBannerHasManageCookies
                  , U = _.cookieBannerManageCookiesLabel
                  , N = _.cookieBannerSavedPreferencesLayout
                  , k = _.cookieBannerSavedPreferencesText
                  , e = _.cookieBannerTheme
                  , a = _.cookieBannerThemeName
                  , r = _.isRestrictiveCookiePolicyEnabled
                  , d = b.theme || (g.default.isSevenOne() ? a : "legacy-".concat(e.toLowerCase()))
                  , C = b.bannerPosition || _.cookieBannerPosition
                  , h = ((A = window.top) === null || A === void 0 ? void 0 : A.location.pathname) === m
                  , L = K === i.default.SPLASH_PAGE
                  , W = {
                    acceptCookiesLabel: l,
                    bannerPosition: C,
                    bannerText: y,
                    cookiesControlledOutsideOfBanner: r,
                    declineCookiesLabel: w,
                    forceShowCookieBanner: h,
                    hasDeclineCookies: I,
                    hasManageCookies: R,
                    manageCookiesLabel: U,
                    savedPreferencesLayout: N,
                    savedPreferencesText: k,
                    theme: d
                }
                  , B = document.querySelector(".".concat(f));
                if (!B) {
                    B = document.createElement("div"),
                    B.classList.add(f),
                    L && B.classList.add("cover-page");
                    var D = document.body.querySelector("#siteWrapper") || document.body;
                    D.appendChild(B)
                }
                (0,
                S.render)(s.default.createElement(n.default, W), B)
            }
        }
          , M = T
    }
    ,
    304974: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            get: function() {
                return S
            }
        });
        var v = t(174161);
        function s(i, g) {
            var u = (0,
            v.useRef)(!1);
            return (0,
            v.useEffect)( () => {
                !g && u.current && i.current && i.current.focus(),
                u.current = !1
            }
            , [i, g]),
            u
        }
        var S = s
    }
    ,
    71226: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        Object.defineProperty(o, "setThirdPartyConsentViaCookieBanner", {
            enumerable: !0,
            get: function() {
                return S
            }
        });
        var v = t(714698)
          , s = t(828930)
          , S = i => {
            var g = i.marketing
              , u = i.performance;
            (0,
            v.setFacebookPixelConsentViaCookieBanner)(g),
            (0,
            s.setGoogleAnalyticsConsentViaCookieBanner)(u)
        }
    }
    ,
    590291: (p, o) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            get: function() {
                return t
            }
        });
        var t = {
            CAMPAIGNS: "campaigns",
            COMPED: "comped",
            DOMAIN: "domain",
            GETTY_IMAGE: "getty-image",
            GOOGLE_APPS: "googleapps",
            IAP: "resold",
            MEMBER_AREAS: "member-areas",
            DIGITAL_PRODUCTS: "digital-products",
            SCHEDULING: "scheduling",
            V5_LINKED: "v5-linked",
            WEBSITE: "website",
            SQUARESPACE: "squarespace"
        }
    }
    ,
    680907: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            get: function() {
                return m
            }
        });
        var v = u(t(174161))
          , s = t(910771)
          , S = t(684353)
          , i = t(491644)
          , g = u(t(273289));
        function u(f) {
            return f && f.__esModule ? f : {
                default: f
            }
        }
        function O() {
            return i.context === null || i.context === void 0 ? void 0 : i.context.website.language
        }
        function n() {
            return S.translationLocale
        }
        var c = f => {
            var T = f.children;
            return v.default.createElement(s.I18nContext.Provider, {
                value: {
                    translationLocale: n(),
                    formattingLocale: O(),
                    cldrLoader: g.default
                }
            }, T)
        }
          , m = c
    }
    ,
    714698: (p, o) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        Object.defineProperty(o, "setFacebookPixelConsentViaCookieBanner", {
            enumerable: !0,
            get: function() {
                return t
            }
        });
        var t = v => {
            window.fbq && window.facebookPixelRequiresConsentUpdates && window.fbq("consent", v ? "grant" : "revoke")
        }
    }
    ,
    828930: (p, o) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        Object.defineProperty(o, "setGoogleAnalyticsConsentViaCookieBanner", {
            enumerable: !0,
            get: function() {
                return t
            }
        });
        var t = v => {
            window.gtag && window.googleAnalyticsRequiresConsentUpdates && (v ? window.gtag("consent", "update", {
                analytics_storage: "granted"
            }) : window.gtag("consent", "update", {
                analytics_storage: "denied"
            }))
        }
    }
    ,
    477577: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        function v(n, c) {
            for (var m in c)
                Object.defineProperty(n, m, {
                    enumerable: !0,
                    get: c[m]
                })
        }
        v(o, {
            LEGACY_SQUARESPACE_COOKIES_TO_EXPIRE: function() {
                return u
            },
            default: function() {
                return O
            }
        });
        var s = S(t(994336));
        function S(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }
        var i = ["SS_MID", "SS_MATTR", "SS_lastvisit", "user_segment"]
          , g = ["ss_cid", "ss_cpvisit", "ss_cvisit", "ss_cvr", "ss_cvt"]
          , u = ["ss_cookieAllowed"]
          , O = n => {
            var c = n.performanceGranted
              , m = n.marketingGranted;
            if (!(c && m)) {
                var f = {
                    expires: new Date(0).toUTCString()
                }
                  , T = u;
                c || (T = T.concat(g)),
                m || (T = T.concat(i)),
                T.forEach(M => {
                    s.default.set(M, "", f)
                }
                )
            }
        }
    }
    ,
    62600: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        }),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            get: function() {
                return O
            }
        });
        var v = g(t(988047))
          , s = t(566593)
          , S = g(t(590291))
          , i = t(769119);
        function g(n) {
            return n && n.__esModule ? n : {
                default: n
            }
        }
        function u() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0,
            i.getWebsiteType)();
            return n === v.default.PARKING_PAGE ? "/settings/email/google-workspace" : "/settings/domains-email/google-workspace"
        }
        var O = {
            forDomains() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0,
                i.getWebsiteType)();
                return n === v.default.PARKING_PAGE && !s.multiProductConfig.isStandaloneScheduling() ? "/" : "/settings/domains-email/domains/"
            },
            forDomainsAndEmail() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0,
                i.getWebsiteType)();
                return n === v.default.PARKING_PAGE && !s.multiProductConfig.isStandaloneScheduling() ? "/" : "/settings/domains-email/"
            },
            forDomainsFullWidth() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0,
                i.getWebsiteType)();
                return n === v.default.PARKING_PAGE && !s.multiProductConfig.isStandaloneScheduling() ? "/domains/" : "/settings/domains-email/domains/"
            },
            forDomainsInAccountService() {
                return "/domains/"
            },
            forBilling() {
                return "/settings/billing/"
            },
            forBillingSubscriptionsList() {
                var n = this.forBilling();
                return "".concat(n, "subscriptions/")
            },
            forBillingSubscription(n) {
                var c = this.forBillingSubscriptionsList();
                return "".concat(c).concat(n)
            },
            forAccountMenu() {
                return "/settings/billing/"
            },
            forSettingsOrConfig() {
                return "/settings/"
            },
            forGoogleWorkspace: u,
            forGoogleWorkspaceAccount(n) {
                var c = n.websiteType
                  , m = c === void 0 ? (0,
                i.getWebsiteType)() : c
                  , f = n.googleAppsSubscriptionInfoId;
                return "".concat(u(m), "/account/").concat(f)
            },
            forGoogleWorkspaceSubscriptionRequest(n) {
                var c = n.websiteType
                  , m = c === void 0 ? (0,
                i.getWebsiteType)() : c
                  , f = n.billingRequestId;
                return "".concat(u(m), "/subscription-request/").concat(f)
            },
            forGSuiteBillingAndAccountingLink() {
                return "".concat(this.forBilling(), "subscriptions/").concat(S.default.GOOGLE_APPS)
            },
            forSwitchProducts() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : (0,
                i.getWebsiteType)();
                return n === v.default.PARKING_PAGE ? "/upgrade/" : "/settings/billing/switch-products/"
            },
            forMemberAreasCheckout() {
                return "".concat(this.forBilling(), "digital-products-checkout")
            },
            forWebsiteCheckout() {
                return "".concat(this.forBilling(), "upgrade")
            },
            forChangeWebsitePlan() {
                return "/settings/billing/subscriptions/website"
            },
            forGSuiteIntitialPurchase() {
                return "/settings/gsuite-checkout"
            },
            forGSuiteAddUser(n) {
                return "/settings/gsuite-add-user/".concat(n)
            },
            forGSuiteReactivation(n) {
                return "/settings/gsuite-reactivation/".concat(n)
            },
            forPermissions() {
                return "/settings/permissions-ownership/permissions"
            },
            forSiteStyles() {
                return ""
            },
            forDesignPanel() {
                return "/design"
            },
            forPagesPanel() {
                return "/pages"
            },
            forWebsiteTools() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
                return s.multiProductConfig.isStandaloneScheduling() ? "/settings" + n : this.forPagesPanel() + "/website-tools"
            },
            forMobilePathToPublish() {
                return "/mobile-path-to-publish"
            }
        }
    }
    ,
    769119: (p, o, t) => {
        "use strict";
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        function v(f, T) {
            for (var M in T)
                Object.defineProperty(f, M, {
                    enumerable: !0,
                    get: T[M]
                })
        }
        v(o, {
            getWebsiteType: function() {
                return g
            },
            isClassic: function() {
                return n
            },
            isCommerce: function() {
                return c
            },
            isCoverPage: function() {
                return O
            },
            isEnterprise: function() {
                return m
            },
            isParkingPage: function() {
                return u
            }
        });
        var s = t(491644)
          , S = i(t(988047));
        function i(f) {
            return f && f.__esModule ? f : {
                default: f
            }
        }
        var g = () => {
            var f;
            return s.context === null || s.context === void 0 || (f = s.context.website) === null || f === void 0 ? void 0 : f.websiteType
        }
          , u = () => g() === S.default.PARKING_PAGE
          , O = () => g() === S.default.COVER_PAGE
          , n = () => g() === S.default.CLASSIC
          , c = () => g() === S.default.COMMERCE
          , m = () => g() === S.default.ENTERPRISE
    }
}]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/4753d33d38e409214928fe8860624aa9/async-gdpr-cookie-banner-1d2874b95fe552df90d1-min.en-US.js.map
