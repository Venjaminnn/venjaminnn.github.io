( () => {
    "use strict";
    var e = {
        48885: (e, E) => {
            Object.defineProperty(E, "__esModule", {
                value: !0
            }),
            E.debounce = E.DEFAULT_DEBOUNCE_TIME = void 0,
            E.DEFAULT_DEBOUNCE_TIME = 150;
            E.debounce = (e, t=E.DEFAULT_DEBOUNCE_TIME) => {
                let o = 0;
                return (...E) => {
                    clearTimeout(o),
                    o = setTimeout(( () => e(...E)), t)
                }
            }
        }
        ,
        35263: (e, E) => {
            Object.defineProperty(E, "__esModule", {
                value: !0
            }),
            E.MessageScriptType = E.MessageContentType = void 0,
            function(e) {
                e.ECOMMERCE_INIT = "ECOMMERCE_INIT",
                e.ECOMMERCE_RE_INIT = "ECOMMERCE_RE_INIT",
                e.ECOMMERCE_TRACK = "ECOMMERCE_TRACK",
                e.ECOMMERCE_STORAGE_SAVE = "ECOMMERCE_STORAGE_SAVE",
                e.ECOMMERCE_STORAGE_REMOVE = "ECOMMERCE_STORAGE_REMOVE",
                e.ERROR_TRACE = "ERROR_TRACE",
                e.ECOMMERCE_INIT_SHOPIFY = "ECOMMERCE_INIT_SHOPIFY"
            }(E.MessageContentType || (E.MessageContentType = {})),
            function(e) {
                e.INIT_HTTP_CONFIG = "INIT_HTTP_CONFIG",
                e.HTTP_CONFIG_INJECTED = "HTTP_CONFIG_INJECTED",
                e.SAVE_HTTP_DATA = "SAVE_HTTP_DATA",
                e.CUSTOM_ON_URL_CHANGED = "CUSTOM_ON_URL_CHANGED",
                e.SHOPIFY_DETECTED = "SHOPIFY_DETECTED"
            }(E.MessageScriptType || (E.MessageScriptType = {}))
        }
    }
      , E = {};
    function t(o) {
        var _ = E[o];
        if (void 0 !== _)
            return _.exports;
        var s = E[o] = {
            exports: {}
        };
        return e[o](s, s.exports, t),
        s.exports
    }
    ( () => {
        const e = t(35263)
          , E = t(48885);
        ( () => {
            const E = history.pushState
              , t = history.replaceState
              , o = history.back
              , _ = history.forward;
            function s() {
                window.postMessage({
                    _custom_type_: e.MessageScriptType.CUSTOM_ON_URL_CHANGED
                })
            }
            history.pushState = function(...e) {
                E.apply(history, e),
                s()
            }
            ,
            history.replaceState = function(...e) {
                t.apply(history, e),
                s()
            }
            ,
            history.back = function(...e) {
                o.apply(history, e),
                s()
            }
            ,
            history.forward = function(...e) {
                _.apply(history, e),
                s()
            }
            ,
            window.addEventListener("hashchange", s)
        }
        )(),
        ( () => {
            const t = (0,
            E.debounce)((function(E) {
                const t = {
                    _custom_type_: e.MessageScriptType.SHOPIFY_DETECTED,
                    payload: {
                        $shopify: JSON.parse(JSON.stringify(E))
                    }
                };
                window.postMessage(t)
            }
            ), 4e3);
            try {
                if (globalThis.Shopify)
                    return void t(globalThis.Shopify);
                Object.defineProperty(globalThis, "Shopify", {
                    set(e) {
                        this.__Shopify = e,
                        t(e)
                    },
                    get() {
                        return this.__Shopify
                    }
                })
            } catch (e) {
                t(globalThis.Shopify)
            }
        }
        )()
    }
    )()
}
)();
