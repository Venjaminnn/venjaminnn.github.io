"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([[10771], {
    793161: (te, C, i) => {
        Object.defineProperty(C, "__esModule", {
            value: !0
        }),
        C.getPluralHash = C.getTranslateHash = void 0;
        var u = i(744485)
          , T = u.__importDefault(i(625392))
          , Q = u.__importDefault(i(412139))
          , J = ["one", "other"]
          , S = function(p) {
            return p.replace(/\n/g, "\\n")
        }
          , x = function(p, b, O) {
            return p + "value:".concat(S(b)) + (O ? "notes:".concat(S(O)) : "")
        };
        function I(p, b, O) {
            var F = O != null ? O : "";
            return x(b, p, F)
        }
        function U(p, b, O) {
            var F = O != null ? O : ""
              , B = Object.keys(p).map(function(H) {
                return J.includes(H) ? "".concat(H, ":").concat(p[H]) : ""
            }).join("");
            return x(b, B, F)
        }
        var X = (0,
        T.default)(function(p, b, O) {
            return (0,
            Q.default)(I(p, b, O))
        }, I)
          , $ = (0,
        T.default)(function(p, b, O) {
            return (0,
            Q.default)(U(p, b, O))
        }, U)
          , E = function(p, b) {
            return X(p, b.project, b.notes)
        };
        C.getTranslateHash = E;
        var w = function(p, b) {
            return $(p, b.project, b.notes)
        };
        C.getPluralHash = w
    }
    ,
    395426: (te, C, i) => {
        var u;
        u = {
            value: !0
        },
        C.Ju = C.H5 = void 0;
        var T = i(793161);
        Object.defineProperty(C, "H5", {
            enumerable: !0,
            get: function() {
                return T.getTranslateHash
            }
        }),
        Object.defineProperty(C, "Ju", {
            enumerable: !0,
            get: function() {
                return T.getPluralHash
            }
        })
    }
    ,
    910771: (te, C, i) => {
        i.r(C),
        i.d(C, {
            I18nContext: () => T,
            useFormatters: () => le,
            useFormattingLocale: () => Xe,
            useI18nHelpers: () => me,
            useLoadTranslations: () => q,
            usePluralWithTranslationLoader: () => Pe,
            useTranslateWithTranslationLoader: () => Se,
            useTranslationLocale: () => ve,
            withI18n: () => Ir
        });
        var u = i(174161)
          , T = (0,
        u.createContext)(null)
          , Q = i(392338)
          , J = i(346797)
          , S = i.n(J);
        function x(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function I(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? x(Object(r), !0).forEach(function(n) {
                    S()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var U = {
            group: !0,
            round: "half-up"
        };
        function X(e) {
            var t = (0,
            u.useCallback)(function(s, c, l) {
                var o = I(I({}, U), l);
                return isNaN(s) ? String(NaN) : e.Numbers.formatCurrency(s, c, o)
            }, [e])
              , r = (0,
            u.useCallback)(function(s, c, l) {
                var o = I(I({}, U), l);
                return e.Numbers.formatCurrencyToParts(s, c, o)
            }, [e])
              , n = (0,
            u.useCallback)(function(s) {
                return e.Numbers.getCurrencyFractions(s)
            }, [e])
              , a = (0,
            u.useCallback)(function(s, c) {
                return e.Numbers.getCurrencySymbol(s, c)
            }, [e]);
            return {
                formatCurrency: t,
                formatCurrencyToParts: r,
                getCurrencySymbol: a,
                getCurrencyFractions: n
            }
        }
        var $ = X
          , E = i(677769)
          , w = function(t) {
            var r, n = (r = Intl) === null || r === void 0 || (r = r.DateTimeFormat()) === null || r === void 0 || (r = r.resolvedOptions()) === null || r === void 0 ? void 0 : r.timeZone;
            return t instanceof Date || typeof t == "number" ? {
                date: t,
                zoneId: n
            } : t.zoneId ? t : {
                date: t.date,
                zoneId: n
            }
        }
          , p = function(t) {
            var r = [E.gd.SUN, E.gd.MON, E.gd.TUE, E.gd.WED, E.gd.THU, E.gd.FRI, E.gd.SAT];
            return r[t.dayOfWeek() - 1]
        }
          , b = function(t, r, n) {
            var a = t.Calendars.formatDate(r, {
                time: "short"
            });
            return t.Calendars.formatDateWrapper(n, a, {
                atTime: !1,
                width: "full"
            })
        };
        function O(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function F(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? O(Object(r), !0).forEach(function(n) {
                    S()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var B = {
            date: "medium"
        }
          , H = {
            ca: "gregory",
            time: "yMMMdhm",
            date: "yMMMd"
        };
        function Ee(e) {
            var t = (0,
            u.useCallback)(function(c) {
                var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B
                  , o = w(c);
                return e.Calendars.formatDate(o, l)
            }, [e])
              , r = (0,
            u.useCallback)(function(c, l, o) {
                var v = w(c)
                  , g = w(l);
                return e.Calendars.formatDateInterval(v, g, F(F({}, H), o))
            }, [e])
              , n = (0,
            u.useCallback)(function(c, l, o) {
                var v = w(c)
                  , g = w(l)
                  , m = e.Calendars.toGregorianDate(v)
                  , d = e.Calendars.toGregorianDate(g)
                  , f = m.differenceSigned(d);
                if ([f.week, f.month, f.year].some(function(P) {
                    return P
                }))
                    return t(l, F(F({}, B), {}, {
                        context: o == null ? void 0 : o.context
                    }));
                if (f.day <= -2) {
                    var h = -1
                      , y = e.Calendars.formatRelativeTimeField(h, p(d), {
                        context: o == null ? void 0 : o.context
                    });
                    return b(e, d, y)
                }
                if (f.day >= 2) {
                    var j = t(g, {
                        skeleton: "EEEE",
                        context: o == null ? void 0 : o.context
                    });
                    return b(e, d, j)
                }
                var L = e.Calendars.formatRelativeTime(v, g, {
                    field: "day",
                    context: o == null ? void 0 : o.context
                });
                return b(e, d, L)
            }, [e, t])
              , a = (0,
            u.useCallback)(function(c) {
                return e.Calendars.timeZoneInfo(c)
            }, [e])
              , s = (0,
            u.useCallback)(function(c, l) {
                return e.Calendars.timeZoneFromUTC(c, l)
            }, [e]);
            return {
                formatDate: t,
                formatDateInterval: r,
                formatRelativeTime: n,
                getTimeZoneInfo: a,
                getTimeZoneInfoFromUTC: s
            }
        }
        var De = Ee
          , Ae = i(829107)
          , Fe = i(625392)
          , _ = i.n(Fe)
          , Ie = i(17794)
          , we = function(t) {
            var r = t.loader;
            return new Ae.CLDRFramework({
                loader: r,
                config: Ie.config
            })
        }
          , ne = _()(we, function(e) {
            var t = e.loader;
            return t
        })
          , M = "Missing I18nContext value. <I18nContext.Provider /> Must be present higher up the component tree for your React root"
          , Me = "useTranslate() requires a translations dictionary"
          , ke = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]
          , Ge = ["CU", "IR", "KP", "SD", "SY"]
          , Re = {
            ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
            be: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F",
            bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438",
            ca: "Catal\xE0",
            cs: "\u010Ce\u0161tina",
            da: "Dansk",
            de: "Deutsch",
            el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
            en: "English",
            es: "Espa\xF1ol",
            et: "Eesti",
            fi: "Suomi",
            fr: "Fran\xE7ais",
            hi: "\u0939\u093F\u0928\u094D\u0926\u0940",
            hr: "Hrvatski",
            hu: "Magyar",
            is: "\xCDslenska",
            it: "Italiano",
            iw: "\u05E2\u05D1\u05E8\u05D9\u05EA",
            ja: "\u65E5\u672C\u8A9E",
            ko: "\uD55C\uAD6D\uC5B4",
            lt: "Lietuvi\u0173",
            lv: "Latvie\u0161u",
            mk: "\u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438",
            nl: "Nederlands",
            no: "Norsk",
            pl: "Polski",
            pt: "Portugu\xEAs (Brasil)",
            ro: "Rom\xE2n\u0103",
            ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
            sh: "Srpskohrvatski",
            sr: "\u0421\u0440\u043F\u0441\u043A\u0438",
            sk: "Sloven\u010Dina",
            sl: "Sloven\u0161\u010Dina",
            sq: "Shqip",
            sv: "Svenska",
            th: "\u0E44\u0E17\u0E22",
            tr: "T\xFCrk\xE7e",
            uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
            zh: "\u4E2D\u6587"
        };
        function xe() {
            var e = (0,
            u.useContext)(T);
            if (e === null)
                throw new Error(M);
            var t = e.cldrLoader
              , r = e.formattingLocale
              , n = ne({
                loader: t
            });
            return (0,
            u.useMemo)(function() {
                return n.get(r)
            }, [n, r])
        }
        var Ue = xe;
        function He(e) {
            var t = (0,
            u.useCallback)(function(r, n) {
                return e.General.formatList(r, n)
            }, [e]);
            return {
                formatList: t
            }
        }
        var Ke = He;
        function ae(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function oe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? ae(Object(r), !0).forEach(function(n) {
                    S()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ae(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var We = {
            group: !0,
            round: "half-up",
            errors: ["nan"]
        };
        function Ve(e) {
            var t = (0,
            u.useCallback)(function(n, a) {
                return e.Numbers.formatDecimal(n, oe(oe({}, We), a))
            }, [e])
              , r = (0,
            u.useCallback)(function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "latn"
                  , a = e.General.bundle()
                  , s = e.Schema.Numbers.numberSystem.get(n);
                if (!s)
                    throw new Error("[@sqs/i18n-react]: missing number system: ".concat(n));
                return {
                    symbols: s.symbols.mapping(a),
                    pattern: s.decimalFormats.standard.get(a)
                }
            }, [e]);
            return {
                formatDecimal: t,
                getNumberSystemMetadata: r
            }
        }
        var Be = Ve;
        function ue(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function se(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? ue(Object(r), !0).forEach(function(n) {
                    S()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var ze = {
            group: !0,
            round: "half-up",
            length: "long"
        };
        function Ze(e) {
            var t = (0,
            u.useCallback)(function(n, a) {
                return e.Units.formatQuantity(n, se(se({}, ze), a))
            }, [e])
              , r = (0,
            u.useCallback)(function() {
                return e.Units.availableUnits()
            }, [e]);
            return {
                formatQuantity: t,
                getAvailableUnits: r
            }
        }
        var Ye = Ze;
        function ie(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function K(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? ie(Object(r), !0).forEach(function(n) {
                    S()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        function Qe() {
            var e = Ue()
              , t = $(e)
              , r = De(e)
              , n = Ke(e)
              , a = Ye(e)
              , s = Be(e);
            return K(K(K(K(K({}, t), r), n), a), s)
        }
        var le = Qe
          , Je = function() {
            var t = (0,
            u.useContext)(T);
            if (t === null)
                throw new Error(M);
            return t.formattingLocale
        }
          , Xe = Je
          , $e = i(375798)
          , z = i.n($e)
          , _e = i(306312);
        function qe() {
            var e = (0,
            u.useContext)(T);
            if (e === null)
                throw new Error(M);
            var t = e.cldrLoader
              , r = e.translationLocale
              , n = ne({
                loader: t
            });
            return (0,
            u.useMemo)(function() {
                return n.get(r)
            }, [n, r])
        }
        var ce = qe
          , er = function() {
            var t = (0,
            u.useContext)(T);
            if (t === null)
                throw new Error(M);
            return t.translationLocale
        }
          , ve = er
          , rr = {
            context: "standalone"
        }
          , tr = {
            context: "standalone"
        }
          , fe = {
            context: "ui-list-or-menu"
        };
        function nr() {
            var e = ce()
              , t = ve()
              , r = (0,
            u.useCallback)(function(o) {
                var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : rr;
                return e.General.getRegionDisplayName(o, v)
            }, [e])
              , n = (0,
            u.useCallback)(function(o) {
                var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : tr;
                return e.General.getLanguageDisplayName(o, v)
            }, [e])
              , a = (0,
            u.useCallback)(function(o) {
                var v, g = _e.LocaleResolver.parseLocale(o).language();
                return (v = Re[g]) !== null && v !== void 0 ? v : n(o)
            }, [n])
              , s = (0,
            u.useCallback)(function(o, v) {
                var g = o.map(function(m) {
                    return [m, r(m, v)]
                });
                return g.sort(function(m, d) {
                    var f = z()(m, 2)
                      , h = f[1]
                      , y = z()(d, 2)
                      , j = y[1];
                    return h.localeCompare(j, t)
                }).reduce(function(m, d) {
                    var f = z()(d, 2)
                      , h = f[0]
                      , y = f[1];
                    return m[h] = y,
                    m
                }, {})
            }, [r, t])
              , c = (0,
            u.useCallback)(function() {
                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fe;
                return s(ke, o)
            }, [s])
              , l = (0,
            u.useCallback)(function() {
                var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fe;
                return s(Ge, o)
            }, [s]);
            return {
                getCountryName: r,
                getLanguageName: n,
                getNativeLanguageName: a,
                getCountries: c,
                getOfacCountries: l
            }
        }
        var me = nr;
        function ar(e) {
            var t = (0,
            u.useContext)(T);
            if (t === null)
                throw new Error(M);
            if (!e.translationsLoader)
                throw new Error("useLoadTranslations() requires a passed translationsLoader function");
            var r = e.translationsLoader;
            return (0,
            u.useMemo)(function() {
                return r(t.translationLocale)
            }, [t.translationLocale, r])
        }
        var q = ar
          , or = i(432405)
          , de = i.n(or)
          , ur = i(291341)
          , ge = i.n(ur)
          , be = i(395426)
          , sr = i(485774)
          , ir = i.n(sr)
          , lr = /\{([^}]+)\}/g;
        function cr(e, t) {
            var r = t.map(function(n) {
                return {
                    key: n,
                    index: e.indexOf(n)
                }
            }).filter(function(n) {
                var a = n.index;
                return a !== -1
            }).sort(function(n, a) {
                return n.index - a.index
            });
            return r[0] || null
        }
        function pe(e, t) {
            return Object.entries(e).reduce(function(r, n) {
                var a = z()(n, 2)
                  , s = a[0]
                  , c = a[1];
                return (!Object.values(t).includes(c) || !Object.keys(t).includes(s)) && (r[s] = c),
                r
            }, {})
        }
        function ee(e) {
            if (!e)
                return [];
            var t = e.match(lr);
            if (t === null)
                return [e];
            for (var r = []; e.length; ) {
                var n = cr(e, t);
                if (n === null)
                    break;
                r.push(e.slice(0, n.index)),
                r.push(n.key),
                e = e.slice(n.index + (n.key ? n.key.length : 0))
            }
            return r.push(e),
            r
        }
        function ye(e, t) {
            var r = ee(e)
              , n = [];
            return t && (r = r.map(function(a) {
                var s = ir()(t, function(c, l) {
                    return "{".concat(l, "}") === a
                });
                return s ? u.isValidElement(t[s]) && t[s].key === null ? (n = n.concat(s),
                u.cloneElement(t[s], {
                    key: s
                })) : t[s] : a
            })),
            {
                children: r,
                replaced: n
            }
        }
        function Oe(e, t) {
            var r = {
                project: e
            };
            return t && Object.assign(r, {
                notes: t
            }),
            r
        }
        var he = function(t, r, n) {
            return n != null ? n : {}
        };
        function vr(e) {
            return e.displayName || e.name || "Component"
        }
        function k(e) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "span";
            if (typeof r != "string")
                throw new Error("The wrapper element must use a standard HTML tag");
            return u.createElement(r, t, e)
        }
        var fr = /({[^}]+})/g
          , mr = /{([^}]+)}/
          , dr = _()(function(e) {
            return e.split(fr)
        })
          , gr = function(t, r) {
            return "".concat(t.join(""), "-").concat(JSON.stringify(r))
        }
          , br = _()(function(e, t) {
            return e.map(function(r) {
                var n = r.match(mr);
                return n && t[n[1]] ? t[n[1]] : r
            }).join("")
        }, gr)
          , Te = function(t, r) {
            var n = dr(t);
            return br(n, r)
        }
          , pr = i(570004)
          , yr = new pr.VisualContext({
            source: "@sqs/i18n-react"
        })
          , Z = yr
          , Or = ["forms", "n", "project", "notes"];
        function Ce(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? Ce(Object(r), !0).forEach(function(n) {
                    S()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ce(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        function hr(e) {
            var t = (0,
            u.useContext)(T);
            if (t === null)
                throw new Error(M);
            if (!e || !e.translations)
                throw new Error("usePlural() requires a translations dictionary");
            var r = t.htmlAttributesTransform
              , n = r === void 0 ? he : r
              , a = e.translations
              , s = ce()
              , c = (0,
            u.useCallback)(function(o, v, g, m) {
                var d, f = (0,
                be.Ju)(o, m), h = s.Numbers.getPluralCardinal(v), y = (d = a[f]) !== null && d !== void 0 ? d : o, j = y[h], L = je(je({}, g), {}, {
                    "%n": s.Numbers.formatDecimal(v, {
                        group: !0,
                        round: "half-up",
                        errors: ["nan"]
                    })
                }), P = Te(j, L);
                return Z.isExtensionEnabled && Z.updateStringMap(f, P),
                P
            }, [s, a])
              , l = (0,
            u.useCallback)(function(o) {
                var v = o.forms
                  , g = o.n
                  , m = o.project
                  , d = o.notes
                  , f = de()(o, Or)
                  , h = {}
                  , y = {}
                  , j = v && v.other ? v.other : null;
                if (typeof g != "number" || !j)
                    return null;
                if (typeof j != "string")
                    return k(j);
                Object.keys(f).forEach(function(N) {
                    var V = f[N];
                    u.isValidElement(V) ? h[N] = V : y[N] = V
                });
                var L = Oe(m, d)
                  , P = c(v, g, y, L)
                  , D = ee(Object.values(v).join(","))
                  , A = ge()(y, function(N, V) {
                    return !D.includes("{".concat(V, "}"))
                })
                  , W = pe(y, A)
                  , G = {
                    strings: Object.keys(W)
                };
                if (Object.keys(h).length > 0) {
                    var Y = ye(P, h)
                      , re = Y.children
                      , R = Y.replaced;
                    return G.components = R,
                    A = n(P, G, A),
                    k(re, A)
                }
                return A = n(P, G, A),
                k(P, A)
            }, [c, n]);
            return l.displayName = "PluralWrapper",
            {
                pluralize: c,
                Plural: l
            }
        }
        var Tr = hr
          , Cr = function(t) {
            var r = q({
                translationsLoader: t
            })
              , n = Tr({
                translations: r
            });
            return n
        }
          , Pe = Cr
          , jr = ["children", "project", "notes", "as"];
        function Pr(e) {
            var t = (0,
            u.useContext)(T);
            if (t === null)
                throw new Error(M);
            if (!e || !e.translations)
                throw new Error(Me);
            var r = t.htmlAttributesTransform
              , n = r === void 0 ? he : r
              , a = e.translations
              , s = (0,
            u.useCallback)(function(l, o, v) {
                var g = (0,
                be.H5)(l, v)
                  , m = a[g]
                  , d = m != null ? m : l
                  , f = o ? Te(d, o) : d;
                return Z.isExtensionEnabled && Z.updateStringMap(g, f),
                f
            }, [a])
              , c = (0,
            u.useCallback)(function(l) {
                var o = l.children
                  , v = l.project
                  , g = l.notes
                  , m = l.as
                  , d = de()(l, jr)
                  , f = {}
                  , h = {}
                  , y = o;
                if (!y)
                    return null;
                if (typeof y != "string")
                    return k(y, {}, m);
                Object.keys(d).forEach(function(R) {
                    var N = d[R];
                    u.isValidElement(N) ? f[R] = N : h[R] = N
                });
                var j = Oe(v, g)
                  , L = s(y, h, j)
                  , P = ee(y)
                  , D = ge()(h, function(R, N) {
                    return !P.includes("{".concat(N, "}"))
                })
                  , A = pe(h, D)
                  , W = {
                    strings: Object.keys(A)
                };
                if (Object.keys(f).length > 0) {
                    var G = ye(L, f)
                      , Y = G.children
                      , re = G.replaced;
                    return W.components = re,
                    D = n(L, W, D),
                    k(Y, D, m)
                }
                return D = n(L, W, D),
                k(L, D, m)
            }, [s, n]);
            return c.displayName = "TWrapper",
            {
                t: s,
                T: c
            }
        }
        var Sr = Pr
          , Lr = function(t) {
            var r = q({
                translationsLoader: t
            })
              , n = Sr({
                translations: r
            });
            return n
        }
          , Se = Lr
          , Nr = i(987195)
          , Er = i.n(Nr)
          , Dr = i(192628)
          , Ar = i.n(Dr);
        function Le(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(a) {
                    return Object.getOwnPropertyDescriptor(e, a).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function Ne(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? Le(Object(r), !0).forEach(function(n) {
                    S()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Le(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var Fr = function(t, r) {
            var n = r.translationsLoader
              , a = function(c) {
                var l = Se(n)
                  , o = l.t
                  , v = l.T
                  , g = Pe(n)
                  , m = g.pluralize
                  , d = g.Plural
                  , f = Ne(Ne({
                    t: o,
                    T: v,
                    pluralize: m,
                    Plural: d
                }, le()), me());
                return u.createElement(t, Er()({}, c, {
                    i18n: f
                }))
            };
            return a.displayName = "withI18n(".concat(vr(t), ")"),
            Ar()(a, t)
        }
          , Ir = Fr
    }
}]);

/*//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/d9881251014bb8da246b6c37dc93e2a8/10771-f5afd94d0416c1eccc93-min.en-US.js.map*/
