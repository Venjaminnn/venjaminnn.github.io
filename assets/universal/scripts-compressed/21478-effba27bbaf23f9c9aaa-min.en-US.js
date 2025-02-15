"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([[21478], {
    793161: (ne, j, l) => {
        Object.defineProperty(j, "__esModule", {
            value: !0
        }),
        j.getPluralHash = j.getTranslateHash = void 0;
        var u = l(744485)
          , C = u.__importDefault(l(625392))
          , Z = u.__importDefault(l(412139))
          , Y = ["one", "other"]
          , N = function(p) {
            return p.replace(/\n/g, "\\n")
        }
          , x = function(p, y, O) {
            return p + "value:".concat(N(y)) + (O ? "notes:".concat(N(O)) : "")
        };
        function F(p, y, O) {
            var A = O != null ? O : "";
            return x(y, p, A)
        }
        function U(p, y, O) {
            var A = O != null ? O : ""
              , V = Object.keys(p).map(function(W) {
                return Y.includes(W) ? "".concat(W, ":").concat(p[W]) : ""
            }).join("");
            return x(y, V, A)
        }
        var Q = (0,
        C.default)(function(p, y, O) {
            return (0,
            Z.default)(F(p, y, O))
        }, F)
          , J = (0,
        C.default)(function(p, y, O) {
            return (0,
            Z.default)(U(p, y, O))
        }, U)
          , E = function(p, y) {
            return Q(p, y.project, y.notes)
        };
        j.getTranslateHash = E;
        var I = function(p, y) {
            return J(p, y.project, y.notes)
        };
        j.getPluralHash = I
    }
    ,
    395426: (ne, j, l) => {
        var u;
        u = {
            value: !0
        },
        j.Ju = j.H5 = void 0;
        var C = l(793161);
        Object.defineProperty(j, "H5", {
            enumerable: !0,
            get: function() {
                return C.getTranslateHash
            }
        }),
        Object.defineProperty(j, "Ju", {
            enumerable: !0,
            get: function() {
                return C.getPluralHash
            }
        })
    }
    ,
    421478: (ne, j, l) => {
        l.r(j),
        l.d(j, {
            I18nContext: () => C,
            useFormatters: () => ce,
            useFormattingLocale: () => _e,
            useI18nHelpers: () => me,
            useLoadTranslations: () => _,
            usePluralWithL10nLoader: () => Pr,
            usePluralWithTranslationLoader: () => Pe,
            useTranslateWithL10nLoader: () => Ar,
            useTranslateWithTranslationLoader: () => Ne,
            useTranslatedImage: () => Wr,
            useTranslationLocale: () => $,
            withI18n: () => Rr
        });
        var u = l(174161)
          , C = (0,
        u.createContext)(null)
          , Z = l(392338)
          , Y = l(346797)
          , N = l.n(Y);
        function x(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function F(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? x(Object(r), !0).forEach(function(n) {
                    N()(e, n, r[n])
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
        function Q(e) {
            var t = (0,
            u.useCallback)(function(s, i, f) {
                var a = F(F({}, U), f);
                return isNaN(s) ? String(NaN) : e.Numbers.formatCurrency(s, i, a)
            }, [e])
              , r = (0,
            u.useCallback)(function(s, i, f) {
                var a = F(F({}, U), f);
                return e.Numbers.formatCurrencyToParts(s, i, a)
            }, [e])
              , n = (0,
            u.useCallback)(function(s) {
                return e.Numbers.getCurrencyFractions(s)
            }, [e])
              , o = (0,
            u.useCallback)(function(s, i) {
                return e.Numbers.getCurrencySymbol(s, i)
            }, [e]);
            return {
                formatCurrency: t,
                formatCurrencyToParts: r,
                getCurrencySymbol: o,
                getCurrencyFractions: n
            }
        }
        var J = Q
          , E = l(677769)
          , I = function(t) {
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
          , y = function(t, r, n) {
            var o = t.Calendars.formatDate(r, {
                time: "short"
            });
            return t.Calendars.formatDateWrapper(n, o, {
                atTime: !1,
                width: "full"
            })
        };
        function O(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function A(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? O(Object(r), !0).forEach(function(n) {
                    N()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : O(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var V = {
            date: "medium"
        }
          , W = {
            ca: "gregory",
            time: "yMMMdhm",
            date: "yMMMd"
        };
        function Ae(e) {
            var t = (0,
            u.useCallback)(function(i) {
                var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : V
                  , a = I(i);
                return e.Calendars.formatDate(a, f)
            }, [e])
              , r = (0,
            u.useCallback)(function(i, f, a) {
                var c = I(i)
                  , g = I(f);
                return e.Calendars.formatDateInterval(c, g, A(A({}, W), a))
            }, [e])
              , n = (0,
            u.useCallback)(function(i, f, a) {
                var c = I(i)
                  , g = I(f)
                  , m = e.Calendars.toGregorianDate(c)
                  , v = e.Calendars.toGregorianDate(g)
                  , d = m.differenceSigned(v);
                if ([d.week, d.month, d.year].some(function(P) {
                    return P
                }))
                    return t(f, A(A({}, V), {}, {
                        context: a == null ? void 0 : a.context
                    }));
                if (d.day <= -2) {
                    var b = -1
                      , h = e.Calendars.formatRelativeTimeField(b, p(v), {
                        context: a == null ? void 0 : a.context
                    });
                    return y(e, v, h)
                }
                if (d.day >= 2) {
                    var T = t(g, {
                        skeleton: "EEEE",
                        context: a == null ? void 0 : a.context
                    });
                    return y(e, v, T)
                }
                var w = e.Calendars.formatRelativeTime(c, g, {
                    field: "day",
                    context: a == null ? void 0 : a.context
                });
                return y(e, v, w)
            }, [e, t])
              , o = (0,
            u.useCallback)(function(i) {
                return e.Calendars.timeZoneInfo(i)
            }, [e])
              , s = (0,
            u.useCallback)(function(i, f) {
                return e.Calendars.timeZoneFromUTC(i, f)
            }, [e]);
            return {
                formatDate: t,
                formatDateInterval: r,
                formatRelativeTime: n,
                getTimeZoneInfo: o,
                getTimeZoneInfoFromUTC: s
            }
        }
        var Fe = Ae
          , Ie = l(829107)
          , Me = l(625392)
          , X = l.n(Me)
          , we = l(17794)
          , ke = function(t) {
            var r = t.loader;
            return new Ie.CLDRFramework({
                loader: r,
                config: we.config
            })
        }
          , ae = X()(ke, function(e) {
            var t = e.loader;
            return t
        })
          , M = "Missing I18nContext value. <I18nContext.Provider /> Must be present higher up the component tree for your React root"
          , Ge = "useTranslate() requires a translations dictionary"
          , Re = ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]
          , xe = ["CU", "IR", "KP", "SD", "SY"]
          , Ue = {
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
        function We() {
            var e = (0,
            u.useContext)(C);
            if (e === null)
                throw new Error(M);
            var t = e.cldrLoader
              , r = e.formattingLocale
              , n = ae({
                loader: t
            });
            return (0,
            u.useMemo)(function() {
                return n.get(r)
            }, [n, r])
        }
        var He = We;
        function Ke(e) {
            var t = (0,
            u.useCallback)(function(r, n) {
                return e.General.formatList(r, n)
            }, [e]);
            return {
                formatList: t
            }
        }
        var Ve = Ke;
        function oe(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? oe(Object(r), !0).forEach(function(n) {
                    N()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : oe(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var Be = {
            group: !0,
            round: "half-up",
            errors: ["nan"]
        };
        function ze(e) {
            var t = (0,
            u.useCallback)(function(n, o) {
                return e.Numbers.formatDecimal(n, ue(ue({}, Be), o))
            }, [e])
              , r = (0,
            u.useCallback)(function() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "latn"
                  , o = e.General.bundle()
                  , s = e.Schema.Numbers.numberSystem.get(n);
                if (!s)
                    throw new Error("[@sqs/i18n-react]: missing number system: ".concat(n));
                return {
                    symbols: s.symbols.mapping(o),
                    pattern: s.decimalFormats.standard.get(o)
                }
            }, [e]);
            return {
                formatDecimal: t,
                getNumberSystemMetadata: r
            }
        }
        var Ze = ze;
        function se(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function le(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? se(Object(r), !0).forEach(function(n) {
                    N()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : se(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var Ye = {
            group: !0,
            round: "half-up",
            length: "long"
        };
        function Qe(e) {
            var t = (0,
            u.useCallback)(function(n, o) {
                return e.Units.formatQuantity(n, le(le({}, Ye), o))
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
        var Je = Qe;
        function ie(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function H(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? ie(Object(r), !0).forEach(function(n) {
                    N()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ie(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        function Xe() {
            var e = He()
              , t = J(e)
              , r = Fe(e)
              , n = Ve(e)
              , o = Je(e)
              , s = Ze(e);
            return H(H(H(H(H({}, t), r), n), o), s)
        }
        var ce = Xe
          , $e = function() {
            var t = (0,
            u.useContext)(C);
            if (t === null)
                throw new Error(M);
            return t.formattingLocale
        }
          , _e = $e
          , qe = l(375798)
          , B = l.n(qe)
          , er = l(306312);
        function rr() {
            var e = (0,
            u.useContext)(C);
            if (e === null)
                throw new Error(M);
            var t = e.cldrLoader
              , r = e.translationLocale
              , n = ae({
                loader: t
            });
            return (0,
            u.useMemo)(function() {
                return n.get(r)
            }, [n, r])
        }
        var ve = rr
          , tr = function() {
            var t = (0,
            u.useContext)(C);
            if (t === null)
                throw new Error(M);
            return t.translationLocale
        }
          , $ = tr
          , nr = {
            context: "standalone"
        }
          , ar = {
            context: "standalone"
        }
          , fe = {
            context: "ui-list-or-menu"
        };
        function or() {
            var e = ve()
              , t = $()
              , r = (0,
            u.useCallback)(function(a) {
                var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : nr;
                return e.General.getRegionDisplayName(a, c)
            }, [e])
              , n = (0,
            u.useCallback)(function(a) {
                var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ar;
                return e.General.getLanguageDisplayName(a, c)
            }, [e])
              , o = (0,
            u.useCallback)(function(a) {
                var c, g = er.LocaleResolver.parseLocale(a).language();
                return (c = Ue[g]) !== null && c !== void 0 ? c : n(a)
            }, [n])
              , s = (0,
            u.useCallback)(function(a, c) {
                var g = a.map(function(m) {
                    return [m, r(m, c)]
                });
                return g.sort(function(m, v) {
                    var d = B()(m, 2)
                      , b = d[1]
                      , h = B()(v, 2)
                      , T = h[1];
                    return b.localeCompare(T, t)
                }).reduce(function(m, v) {
                    var d = B()(v, 2)
                      , b = d[0]
                      , h = d[1];
                    return m[b] = h,
                    m
                }, {})
            }, [r, t])
              , i = (0,
            u.useCallback)(function() {
                var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fe;
                return s(Re, a)
            }, [s])
              , f = (0,
            u.useCallback)(function() {
                var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fe;
                return s(xe, a)
            }, [s]);
            return {
                getCountryName: r,
                getLanguageName: n,
                getNativeLanguageName: o,
                getCountries: i,
                getOfacCountries: f
            }
        }
        var me = or;
        function ur(e) {
            var t = (0,
            u.useContext)(C);
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
        var _ = ur
          , sr = l(432405)
          , de = l.n(sr)
          , lr = l(291341)
          , ge = l.n(lr)
          , be = l(395426)
          , ir = l(485774)
          , cr = l.n(ir)
          , vr = /\{([^}]+)\}/g;
        function fr(e, t) {
            var r = t.map(function(n) {
                return {
                    key: n,
                    index: e.indexOf(n)
                }
            }).filter(function(n) {
                var o = n.index;
                return o !== -1
            }).sort(function(n, o) {
                return n.index - o.index
            });
            return r[0] || null
        }
        function ye(e, t) {
            return Object.entries(e).reduce(function(r, n) {
                var o = B()(n, 2)
                  , s = o[0]
                  , i = o[1];
                return (!Object.values(t).includes(i) || !Object.keys(t).includes(s)) && (r[s] = i),
                r
            }, {})
        }
        function q(e) {
            if (!e)
                return [];
            var t = e.match(vr);
            if (t === null)
                return [e];
            for (var r = []; e.length; ) {
                var n = fr(e, t);
                if (n === null)
                    break;
                r.push(e.slice(0, n.index)),
                r.push(n.key),
                e = e.slice(n.index + (n.key ? n.key.length : 0))
            }
            return r.push(e),
            r
        }
        function pe(e, t) {
            var r = q(e)
              , n = [];
            return t && (r = r.map(function(o) {
                var s = cr()(t, function(i, f) {
                    return "{".concat(f, "}") === o
                });
                return s ? u.isValidElement(t[s]) && t[s].key === null ? (n = n.concat(s),
                u.cloneElement(t[s], {
                    key: s
                })) : t[s] : o
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
        function mr(e) {
            return e.displayName || e.name || "Component"
        }
        function G(e) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "span";
            if (typeof r != "string")
                throw new Error("The wrapper element must use a standard HTML tag");
            return u.createElement(r, t, e)
        }
        var dr = /({[^}]+})/g
          , gr = /{([^}]+)}/
          , br = X()(function(e) {
            return e.split(dr)
        })
          , yr = function(t, r) {
            return "".concat(t.join(""), "-").concat(JSON.stringify(r))
        }
          , pr = X()(function(e, t) {
            return e.map(function(r) {
                var n = r.match(gr);
                return n && t[n[1]] ? t[n[1]] : r
            }).join("")
        }, yr)
          , Te = function(t, r) {
            var n = br(t);
            return pr(n, r)
        }
          , Or = l(570004)
          , hr = new Or.VisualContext({
            source: "@sqs/i18n-react"
        })
          , z = hr
          , Tr = ["forms", "n", "project", "notes"];
        function Le(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function Ce(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? Le(Object(r), !0).forEach(function(n) {
                    N()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Le(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        function Lr(e) {
            var t = (0,
            u.useContext)(C);
            if (t === null)
                throw new Error(M);
            if (!e || !e.translations)
                throw new Error("usePlural() requires a translations dictionary");
            var r = t.htmlAttributesTransform
              , n = r === void 0 ? he : r
              , o = e.translations
              , s = ve()
              , i = (0,
            u.useCallback)(function(a, c, g, m) {
                var v, d = e.l10nLoaderMode;
                d && !m && (m = {});
                var b = (0,
                be.Ju)(a, m)
                  , h = s.Numbers.getPluralCardinal(c)
                  , T = (v = o[b]) !== null && v !== void 0 ? v : a
                  , w = T[h]
                  , P = Ce(Ce({}, g), {}, {
                    "%n": s.Numbers.formatDecimal(c, {
                        group: !0,
                        round: "half-up",
                        errors: ["nan"]
                    })
                })
                  , R = Te(w, P);
                return z.isExtensionEnabled && z.updateStringMap(b, R),
                R
            }, [s, o, e])
              , f = (0,
            u.useCallback)(function(a) {
                var c = a.forms
                  , g = a.n
                  , m = a.project
                  , v = a.notes
                  , d = de()(a, Tr)
                  , b = {}
                  , h = {}
                  , T = c && c.other ? c.other : null;
                if (typeof g != "number" || !T)
                    return null;
                if (typeof T != "string")
                    return G(T);
                Object.keys(d).forEach(function(D) {
                    var S = d[D];
                    u.isValidElement(S) ? b[D] = S : h[D] = S
                });
                var w = Oe(m, v)
                  , P = i(c, g, h, w)
                  , R = q(Object.values(c).join(","))
                  , L = ge()(h, function(D, S) {
                    return !R.includes("{".concat(S, "}"))
                })
                  , ee = ye(h, L)
                  , k = {
                    strings: Object.keys(ee)
                };
                if (Object.keys(b).length > 0) {
                    var K = pe(P, b)
                      , re = K.children
                      , te = K.replaced;
                    return k.components = te,
                    L = n(P, k, L),
                    G(re, L)
                }
                return L = n(P, k, L),
                G(P, L)
            }, [i, n]);
            return f.displayName = "PluralWrapper",
            {
                pluralize: i,
                Plural: f
            }
        }
        var je = Lr
          , Cr = function(t) {
            var r = _({
                translationsLoader: t
            })
              , n = je({
                translations: r
            });
            return n
        }
          , Pe = Cr
          , jr = function() {
            return je({
                translations: {},
                l10nLoaderMode: !0
            })
        }
          , Pr = jr
          , Sr = ["children", "project", "notes", "as"];
        function Nr(e) {
            var t = (0,
            u.useContext)(C);
            if (t === null)
                throw new Error(M);
            if (!e || !e.translations)
                throw new Error(Ge);
            var r = t.htmlAttributesTransform
              , n = r === void 0 ? he : r
              , o = e.translations
              , s = e.l10nLoaderMode
              , i = (0,
            u.useCallback)(function(a, c, g) {
                s && !g && (g = {});
                var m = (0,
                be.H5)(a, g)
                  , v = o[m]
                  , d = v != null ? v : a
                  , b = c ? Te(d, c) : d;
                return z.isExtensionEnabled && z.updateStringMap(m, b),
                b
            }, [s, o])
              , f = (0,
            u.useCallback)(function(a) {
                var c = a.children
                  , g = a.project
                  , m = a.notes
                  , v = a.as
                  , d = de()(a, Sr)
                  , b = {}
                  , h = {}
                  , T = c;
                if (!T)
                    return null;
                if (typeof T != "string")
                    return G(T, {}, v);
                Object.keys(d).forEach(function(D) {
                    var S = d[D];
                    u.isValidElement(S) ? b[D] = S : h[D] = S
                });
                var w = Oe(g, m)
                  , P = i(T, h, w)
                  , R = q(T)
                  , L = ge()(h, function(D, S) {
                    return !R.includes("{".concat(S, "}"))
                })
                  , ee = ye(h, L)
                  , k = {
                    strings: Object.keys(ee)
                };
                if (Object.keys(b).length > 0) {
                    var K = pe(P, b)
                      , re = K.children
                      , te = K.replaced;
                    return k.components = te,
                    L = n(P, k, L),
                    G(re, L, v)
                }
                return L = n(P, k, L),
                G(P, L, v)
            }, [i, n]);
            return f.displayName = "TWrapper",
            {
                t: i,
                T: f
            }
        }
        var Se = Nr
          , Er = function(t) {
            var r = _({
                translationsLoader: t
            })
              , n = Se({
                translations: r
            });
            return n
        }
          , Ne = Er
          , Dr = function() {
            return Se({
                translations: {},
                l10nLoaderMode: !0
            })
        }
          , Ar = Dr
          , Fr = l(987195)
          , Ir = l.n(Fr)
          , Mr = l(192628)
          , wr = l.n(Mr);
        function Ee(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(o) {
                    return Object.getOwnPropertyDescriptor(e, o).enumerable
                })),
                r.push.apply(r, n)
            }
            return r
        }
        function De(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t] != null ? arguments[t] : {};
                t % 2 ? Ee(Object(r), !0).forEach(function(n) {
                    N()(e, n, r[n])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ee(Object(r)).forEach(function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                })
            }
            return e
        }
        var kr = function() {
            return {}
        }
          , Gr = function(t) {
            var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
              , n = r.translationsLoader
              , o = n === void 0 ? kr : n
              , s = function(f) {
                var a = Ne(o)
                  , c = a.t
                  , g = a.T
                  , m = Pe(o)
                  , v = m.pluralize
                  , d = m.Plural
                  , b = De(De({
                    t: c,
                    T: g,
                    pluralize: v,
                    Plural: d
                }, ce()), me());
                return u.createElement(t, Ir()({}, f, {
                    i18n: b
                }))
            };
            return s.displayName = "withI18n(".concat(mr(t), ")"),
            wr()(s, t)
        }
          , Rr = Gr
          , xr = l(892130);
        function Ur(e) {
            var t, r = $(), n = e[xr.locales.defaultLocale];
            if (!n)
                throw new Error("No default image provided");
            return (t = e[r]) !== null && t !== void 0 ? t : n
        }
        var Wr = Ur
    }
}]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/c6675b4446f22c141f114bc76910c2f4/21478-effba27bbaf23f9c9aaa-min.en-US.js.map
