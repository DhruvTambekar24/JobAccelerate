(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/compose-refs/src/composeRefs.tsx
__turbopack_context__.s([
    "composeRefs",
    ()=>composeRefs,
    "useComposedRefs",
    ()=>useComposedRefs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function setRef(ref, value) {
    if (typeof ref === "function") {
        return ref(value);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"](composeRefs(...refs), refs);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/slot/src/Slot.tsx
__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Slot",
    ()=>Slot,
    "Slottable",
    ()=>Slottable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
var Slot = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    const childrenArray = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].toArray(children);
    const slottable = childrenArray.find(isSlottable);
    if (slottable) {
        const newElement = slottable.props.children;
        const newChildren = childrenArray.map((child)=>{
            if (child === slottable) {
                if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null);
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? newElement.props.children : null;
            } else {
                return child;
            }
        });
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](newElement) ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](newElement, void 0, newChildren) : null
        });
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SlotClone, {
        ...slotProps,
        ref: forwardedRef,
        children
    });
});
Slot.displayName = "Slot";
var SlotClone = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { children, ...slotProps } = props;
    if (__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](children)) {
        const childrenRef = getElementRef(children);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](children, {
            ...mergeProps(slotProps, children.props),
            // @ts-ignore
            ref: forwardedRef ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeRefs"])(forwardedRef, childrenRef) : childrenRef
        });
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children) > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(null) : null;
});
SlotClone.displayName = "SlotClone";
var Slottable = ({ children })=>{
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children
    });
};
function isSlottable(child) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"](child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    childPropValue(...args);
                    slotPropValue(...args);
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root = Slot;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ __turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
 //# sourceMappingURL=utils.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
 //# sourceMappingURL=Icon.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Menu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Menu", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }
    ]
]);
;
 //# sourceMappingURL=menu.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>X
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
 //# sourceMappingURL=x.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Zap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Zap", [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
]);
;
 //# sourceMappingURL=zap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Target
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Target", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ]
]);
;
 //# sourceMappingURL=target.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Target",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Mail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mail", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
;
 //# sourceMappingURL=mail.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChartColumn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChartColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChartColumn", [
    [
        "path",
        {
            d: "M3 3v16a2 2 0 0 0 2 2h16",
            key: "c24i48"
        }
    ],
    [
        "path",
        {
            d: "M18 17V9",
            key: "2bz60n"
        }
    ],
    [
        "path",
        {
            d: "M13 17V5",
            key: "1frdt8"
        }
    ],
    [
        "path",
        {
            d: "M8 17v-3",
            key: "17ska0"
        }
    ]
]);
;
 //# sourceMappingURL=chart-column.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarChart3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
 //# sourceMappingURL=check.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>ChevronDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDownIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Github
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Github = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Github", [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
]);
;
 //# sourceMappingURL=github.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Github",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Linkedin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Linkedin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Linkedin", [
    [
        "path",
        {
            d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
            key: "c2jq9f"
        }
    ],
    [
        "rect",
        {
            width: "4",
            height: "12",
            x: "2",
            y: "9",
            key: "mk3on5"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "4",
            r: "2",
            key: "bt5ra8"
        }
    ]
]);
;
 //# sourceMappingURL=linkedin.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Linkedin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.454.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "default",
    ()=>Twitter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Twitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Twitter", [
    [
        "path",
        {
            d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
            key: "pff0z6"
        }
    ]
]);
;
 //# sourceMappingURL=twitter.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Twitter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$454$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/lucide-react@0.454.0_react@19.2.0/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/zustand@5.0.9_@types+react@_abef80168be8267936275a0417dbfe6a/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore
]);
const createStoreImpl = (createState)=>{
    let state;
    const listeners = /* @__PURE__ */ new Set();
    const setState = (partial, replace)=>{
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach((listener)=>listener(state, previousState));
        }
    };
    const getState = ()=>state;
    const getInitialState = ()=>initialState;
    const subscribe = (listener)=>{
        listeners.add(listener);
        return ()=>listeners.delete(listener);
    };
    const api = {
        setState,
        getState,
        getInitialState,
        subscribe
    };
    const initialState = state = createState(setState, getState, api);
    return api;
};
const createStore = (createState)=>createState ? createStoreImpl(createState) : createStoreImpl;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/zustand@5.0.9_@types+react@_abef80168be8267936275a0417dbfe6a/node_modules/zustand/esm/traditional.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWithEqualityFn",
    ()=>createWithEqualityFn,
    "useStoreWithEqualityFn",
    ()=>useStoreWithEqualityFn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/use-sync-external-store@1.6.0_react@19.2.0/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$9_$40$types$2b$react$40$_abef80168be8267936275a0417dbfe6a$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/zustand@5.0.9_@types+react@_abef80168be8267936275a0417dbfe6a/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
;
;
;
const { useSyncExternalStoreWithSelector } = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$use$2d$sync$2d$external$2d$store$40$1$2e$6$2e$0_react$40$19$2e$2$2e$0$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
const identity = (arg)=>arg;
function useStoreWithEqualityFn(api, selector = identity, equalityFn) {
    const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getInitialState, selector, equalityFn);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue(slice);
    return slice;
}
const createWithEqualityFnImpl = (createState, defaultEqualityFn)=>{
    const api = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$zustand$40$5$2e$0$2e$9_$40$types$2b$react$40$_abef80168be8267936275a0417dbfe6a$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState);
    const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn)=>useStoreWithEqualityFn(api, selector, equalityFn);
    Object.assign(useBoundStoreWithEqualityFn, api);
    return useBoundStoreWithEqualityFn;
};
const createWithEqualityFn = (createState, defaultEqualityFn)=>createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/suspend-react@0.1.3_react@19.2.0/node_modules/suspend-react/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clear",
    ()=>clear,
    "peek",
    ()=>peek,
    "preload",
    ()=>preload,
    "suspend",
    ()=>suspend
]);
const isPromise = (promise)=>typeof promise === 'object' && typeof promise.then === 'function';
const globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b)=>a === b) {
    if (arrA === arrB) return true;
    if (!arrA || !arrB) return false;
    const len = arrA.length;
    if (arrB.length !== len) return false;
    for(let i = 0; i < len; i++)if (!equal(arrA[i], arrB[i])) return false;
    return true;
}
function query(fn, keys = null, preload = false, config = {}) {
    // If no keys were given, the function is the key
    if (keys === null) keys = [
        fn
    ];
    for (const entry of globalCache){
        // Find a match
        if (shallowEqualArrays(keys, entry.keys, entry.equal)) {
            // If we're pre-loading and the element is present, just return
            if (preload) return undefined; // If an error occurred, throw
            if (Object.prototype.hasOwnProperty.call(entry, 'error')) throw entry.error; // If a response was successful, return
            if (Object.prototype.hasOwnProperty.call(entry, 'response')) {
                if (config.lifespan && config.lifespan > 0) {
                    if (entry.timeout) clearTimeout(entry.timeout);
                    entry.timeout = setTimeout(entry.remove, config.lifespan);
                }
                return entry.response;
            } // If the promise is still unresolved, throw
            if (!preload) throw entry.promise;
        }
    } // The request is new or has changed.
    const entry = {
        keys,
        equal: config.equal,
        remove: ()=>{
            const index = globalCache.indexOf(entry);
            if (index !== -1) globalCache.splice(index, 1);
        },
        promise: (isPromise(fn) ? fn : fn(...keys) // When it resolves, store its value
        ).then((response)=>{
            entry.response = response; // Remove the entry in time if a lifespan was given
            if (config.lifespan && config.lifespan > 0) {
                entry.timeout = setTimeout(entry.remove, config.lifespan);
            }
        }) // Store caught errors, they will be thrown in the render-phase to bubble into an error-bound
        .catch((error)=>entry.error = error)
    }; // Register the entry
    globalCache.push(entry); // And throw the promise, this yields control back to React
    if (!preload) throw entry.promise;
    return undefined;
}
const suspend = (fn, keys, config)=>query(fn, keys, false, config);
const preload = (fn, keys, config)=>void query(fn, keys, true, config);
const peek = (keys)=>{
    var _globalCache$find;
    return (_globalCache$find = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal))) == null ? void 0 : _globalCache$find.response;
};
const clear = (keys)=>{
    if (keys === undefined || keys.length === 0) globalCache.splice(0, globalCache.length);
    else {
        const entry = globalCache.find((entry)=>shallowEqualArrays(keys, entry.keys, entry.equal));
        if (entry) entry.remove();
    }
};
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/scheduler@0.25.0/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function performWorkUntilDeadline() {
        if (isMessageLoopRunning) {
            var currentTime = exports.unstable_now();
            startTime = currentTime;
            var hasMoreWork = !0;
            try {
                a: {
                    isHostCallbackScheduled = !1;
                    isHostTimeoutScheduled && (isHostTimeoutScheduled = !1, localClearTimeout(taskTimeoutID), taskTimeoutID = -1);
                    isPerformingWork = !0;
                    var previousPriorityLevel = currentPriorityLevel;
                    try {
                        b: {
                            advanceTimers(currentTime);
                            for(currentTask = peek(taskQueue); null !== currentTask && !(currentTask.expirationTime > currentTime && shouldYieldToHost());){
                                var callback = currentTask.callback;
                                if ("function" === typeof callback) {
                                    currentTask.callback = null;
                                    currentPriorityLevel = currentTask.priorityLevel;
                                    var continuationCallback = callback(currentTask.expirationTime <= currentTime);
                                    currentTime = exports.unstable_now();
                                    if ("function" === typeof continuationCallback) {
                                        currentTask.callback = continuationCallback;
                                        advanceTimers(currentTime);
                                        hasMoreWork = !0;
                                        break b;
                                    }
                                    currentTask === peek(taskQueue) && pop(taskQueue);
                                    advanceTimers(currentTime);
                                } else pop(taskQueue);
                                currentTask = peek(taskQueue);
                            }
                            if (null !== currentTask) hasMoreWork = !0;
                            else {
                                var firstTimer = peek(timerQueue);
                                null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
                                hasMoreWork = !1;
                            }
                        }
                        break a;
                    } finally{
                        currentTask = null, currentPriorityLevel = previousPriorityLevel, isPerformingWork = !1;
                    }
                    hasMoreWork = void 0;
                }
            } finally{
                hasMoreWork ? schedulePerformWorkUntilDeadline() : isMessageLoopRunning = !1;
            }
        }
    }
    function push(heap, node) {
        var index = heap.length;
        heap.push(node);
        a: for(; 0 < index;){
            var parentIndex = index - 1 >>> 1, parent = heap[parentIndex];
            if (0 < compare(parent, node)) heap[parentIndex] = node, heap[index] = parent, index = parentIndex;
            else break a;
        }
    }
    function peek(heap) {
        return 0 === heap.length ? null : heap[0];
    }
    function pop(heap) {
        if (0 === heap.length) return null;
        var first = heap[0], last = heap.pop();
        if (last !== first) {
            heap[0] = last;
            a: for(var index = 0, length = heap.length, halfLength = length >>> 1; index < halfLength;){
                var leftIndex = 2 * (index + 1) - 1, left = heap[leftIndex], rightIndex = leftIndex + 1, right = heap[rightIndex];
                if (0 > compare(left, last)) rightIndex < length && 0 > compare(right, left) ? (heap[index] = right, heap[rightIndex] = last, index = rightIndex) : (heap[index] = left, heap[leftIndex] = last, index = leftIndex);
                else if (rightIndex < length && 0 > compare(right, last)) heap[index] = right, heap[rightIndex] = last, index = rightIndex;
                else break a;
            }
        }
        return first;
    }
    function compare(a, b) {
        var diff = a.sortIndex - b.sortIndex;
        return 0 !== diff ? diff : a.id - b.id;
    }
    function advanceTimers(currentTime) {
        for(var timer = peek(timerQueue); null !== timer;){
            if (null === timer.callback) pop(timerQueue);
            else if (timer.startTime <= currentTime) pop(timerQueue), timer.sortIndex = timer.expirationTime, push(taskQueue, timer);
            else break;
            timer = peek(timerQueue);
        }
    }
    function handleTimeout(currentTime) {
        isHostTimeoutScheduled = !1;
        advanceTimers(currentTime);
        if (!isHostCallbackScheduled) if (null !== peek(taskQueue)) isHostCallbackScheduled = !0, requestHostCallback();
        else {
            var firstTimer = peek(timerQueue);
            null !== firstTimer && requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
        }
    }
    function shouldYieldToHost() {
        return exports.unstable_now() - startTime < frameInterval ? !1 : !0;
    }
    function requestHostCallback() {
        isMessageLoopRunning || (isMessageLoopRunning = !0, schedulePerformWorkUntilDeadline());
    }
    function requestHostTimeout(callback, ms) {
        taskTimeoutID = localSetTimeout(function() {
            callback(exports.unstable_now());
        }, ms);
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    exports.unstable_now = void 0;
    if ("object" === typeof performance && "function" === typeof performance.now) {
        var localPerformance = performance;
        exports.unstable_now = function() {
            return localPerformance.now();
        };
    } else {
        var localDate = Date, initialTime = localDate.now();
        exports.unstable_now = function() {
            return localDate.now() - initialTime;
        };
    }
    var taskQueue = [], timerQueue = [], taskIdCounter = 1, currentTask = null, currentPriorityLevel = 3, isPerformingWork = !1, isHostCallbackScheduled = !1, isHostTimeoutScheduled = !1, localSetTimeout = "function" === typeof setTimeout ? setTimeout : null, localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null, localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null, isMessageLoopRunning = !1, taskTimeoutID = -1, frameInterval = 5, startTime = -1;
    if ("function" === typeof localSetImmediate) var schedulePerformWorkUntilDeadline = function() {
        localSetImmediate(performWorkUntilDeadline);
    };
    else if ("undefined" !== typeof MessageChannel) {
        var channel = new MessageChannel(), port = channel.port2;
        channel.port1.onmessage = performWorkUntilDeadline;
        schedulePerformWorkUntilDeadline = function() {
            port.postMessage(null);
        };
    } else schedulePerformWorkUntilDeadline = function() {
        localSetTimeout(performWorkUntilDeadline, 0);
    };
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function(task) {
        task.callback = null;
    };
    exports.unstable_continueExecution = function() {
        isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, requestHostCallback());
    };
    exports.unstable_forceFrameRate = function(fps) {
        0 > fps || 125 < fps ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5;
    };
    exports.unstable_getCurrentPriorityLevel = function() {
        return currentPriorityLevel;
    };
    exports.unstable_getFirstCallbackNode = function() {
        return peek(taskQueue);
    };
    exports.unstable_next = function(eventHandler) {
        switch(currentPriorityLevel){
            case 1:
            case 2:
            case 3:
                var priorityLevel = 3;
                break;
            default:
                priorityLevel = currentPriorityLevel;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_pauseExecution = function() {};
    exports.unstable_requestPaint = function() {};
    exports.unstable_runWithPriority = function(priorityLevel, eventHandler) {
        switch(priorityLevel){
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                priorityLevel = 3;
        }
        var previousPriorityLevel = currentPriorityLevel;
        currentPriorityLevel = priorityLevel;
        try {
            return eventHandler();
        } finally{
            currentPriorityLevel = previousPriorityLevel;
        }
    };
    exports.unstable_scheduleCallback = function(priorityLevel, callback, options) {
        var currentTime = exports.unstable_now();
        "object" === typeof options && null !== options ? (options = options.delay, options = "number" === typeof options && 0 < options ? currentTime + options : currentTime) : options = currentTime;
        switch(priorityLevel){
            case 1:
                var timeout = -1;
                break;
            case 2:
                timeout = 250;
                break;
            case 5:
                timeout = 1073741823;
                break;
            case 4:
                timeout = 1e4;
                break;
            default:
                timeout = 5e3;
        }
        timeout = options + timeout;
        priorityLevel = {
            id: taskIdCounter++,
            callback: callback,
            priorityLevel: priorityLevel,
            startTime: options,
            expirationTime: timeout,
            sortIndex: -1
        };
        options > currentTime ? (priorityLevel.sortIndex = options, push(timerQueue, priorityLevel), null === peek(taskQueue) && priorityLevel === peek(timerQueue) && (isHostTimeoutScheduled ? (localClearTimeout(taskTimeoutID), taskTimeoutID = -1) : isHostTimeoutScheduled = !0, requestHostTimeout(handleTimeout, options - currentTime))) : (priorityLevel.sortIndex = timeout, push(taskQueue, priorityLevel), isHostCallbackScheduled || isPerformingWork || (isHostCallbackScheduled = !0, requestHostCallback()));
        return priorityLevel;
    };
    exports.unstable_shouldYield = shouldYieldToHost;
    exports.unstable_wrapCallback = function(callback) {
        var parentPriorityLevel = currentPriorityLevel;
        return function() {
            var previousPriorityLevel = currentPriorityLevel;
            currentPriorityLevel = parentPriorityLevel;
            try {
                return callback.apply(this, arguments);
            } finally{
                currentPriorityLevel = previousPriorityLevel;
            }
        };
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/scheduler@0.25.0/node_modules/scheduler/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/scheduler@0.25.0/node_modules/scheduler/cjs/scheduler.development.js [app-client] (ecmascript)");
}
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/its-fine@2.0.0_@types+react@19.2.7_react@19.2.0/node_modules/its-fine/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FiberProvider",
    ()=>m,
    "traverseFiber",
    ()=>i,
    "useContainer",
    ()=>w,
    "useContextBridge",
    ()=>x,
    "useContextMap",
    ()=>h,
    "useFiber",
    ()=>c,
    "useNearestChild",
    ()=>v,
    "useNearestParent",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
const f = /* @__PURE__ */ (()=>{
    var e, t;
    return typeof window != "undefined" && (((e = window.document) == null ? void 0 : e.createElement) || ((t = window.navigator) == null ? void 0 : t.product) === "ReactNative");
})() ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
function i(e, t, r) {
    if (!e) return;
    if (r(e) === !0) return e;
    let n = t ? e.return : e.child;
    for(; n;){
        const u = i(n, t, r);
        if (u) return u;
        n = t ? null : n.sibling;
    }
}
function l(e) {
    try {
        return Object.defineProperties(e, {
            _currentRenderer: {
                get () {
                    return null;
                },
                set () {}
            },
            _currentRenderer2: {
                get () {
                    return null;
                },
                set () {}
            }
        });
    } catch (t) {
        return e;
    }
}
const a = /* @__PURE__ */ l(/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null));
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    render() {
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](a.Provider, {
            value: this._reactInternals
        }, this.props.children);
    }
}
function c() {
    const e = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](a);
    if (e === null) throw new Error("its-fine: useFiber must be called within a <FiberProvider />!");
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "c.useMemo": ()=>{
            for (const n of [
                e,
                e == null ? void 0 : e.alternate
            ]){
                if (!n) continue;
                const u = i(n, !1, {
                    "c.useMemo.u": (d)=>{
                        let s = d.memoizedState;
                        for(; s;){
                            if (s.memoizedState === t) return !0;
                            s = s.next;
                        }
                    }
                }["c.useMemo.u"]);
                if (u) return u;
            }
        }
    }["c.useMemo"], [
        e,
        t
    ]);
}
function w() {
    const e = c(), t = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "w.useMemo[t]": ()=>i(e, !0, {
                "w.useMemo[t]": (r)=>{
                    var n;
                    return ((n = r.stateNode) == null ? void 0 : n.containerInfo) != null;
                }
            }["w.useMemo[t]"])
    }["w.useMemo[t]"], [
        e
    ]);
    return t == null ? void 0 : t.stateNode.containerInfo;
}
function v(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !1, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
function y(e) {
    const t = c(), r = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    return f(()=>{
        var n;
        r.current = (n = i(t, !0, (u)=>typeof u.type == "string" && (e === void 0 || u.type === e))) == null ? void 0 : n.stateNode;
    }, [
        t
    ]), r;
}
const p = Symbol.for("react.context"), b = (e)=>e !== null && typeof e == "object" && "$$typeof" in e && e.$$typeof === p;
function h() {
    const e = c(), [t] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "h.useState": ()=>/* @__PURE__ */ new Map()
    }["h.useState"]);
    t.clear();
    let r = e;
    for(; r;){
        const n = r.type;
        b(n) && n !== a && !t.has(n) && t.set(n, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["use"](l(n))), r = r.return;
    }
    return t;
}
function x() {
    const e = h();
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "x.useMemo": ()=>Array.from(e.keys()).reduce({
                "x.useMemo": (t, r)=>({
                        "x.useMemo": (n)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](t, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](r.Provider, {
                                ...n,
                                value: e.get(r)
                            }))
                    })["x.useMemo"]
            }["x.useMemo"], {
                "x.useMemo": (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](m, {
                        ...t
                    })
            }["x.useMemo"])
    }["x.useMemo"], [
        e
    ]);
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/react-use-measure@2.1.7_rea_b2f4c483be7d180e36aca7072c23f1b3/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>j
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function g(n, t) {
    let o;
    return (...i)=>{
        window.clearTimeout(o), o = window.setTimeout(()=>n(...i), t);
    };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = {
    debounce: 0,
    scroll: !1,
    offsetSize: !1
}) {
    const a = o || (typeof window == "undefined" ? class {
    } : window.ResizeObserver);
    if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
    const [c, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
        bottom: 0,
        right: 0,
        x: 0,
        y: 0
    }), e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        element: null,
        scrollContainers: null,
        resizeObserver: null,
        lastBounds: c,
        orientationHandler: null
    }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(!1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>(w.current = !0, ()=>void (w.current = !1)));
    const [z, m, s] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const r = ()=>{
            if (!e.current.element) return;
            const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = {
                left: y,
                top: C,
                width: H,
                height: O,
                bottom: S,
                right: x,
                x: B,
                y: R
            };
            e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
        };
        return [
            r,
            f ? g(r, f) : r,
            d ? g(r, d) : r
        ];
    }, [
        h,
        i,
        d,
        f
    ]);
    function v() {
        e.current.scrollContainers && (e.current.scrollContainers.forEach((r)=>r.removeEventListener("scroll", s, !0)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
    }
    function b() {
        e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r)=>r.addEventListener("scroll", s, {
                capture: !0,
                passive: !0
            })), e.current.orientationHandler = ()=>{
            s();
        }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
    }
    const L = (r)=>{
        !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
    };
    return X(s, !!t), W(m), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        v(), b();
    }, [
        t,
        s,
        m
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>v, []), [
        L,
        c,
        z
    ];
}
function W(n) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const t = n;
        return window.addEventListener("resize", t), ()=>void window.removeEventListener("resize", t);
    }, [
        n
    ]);
}
function X(n, t) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (t) {
            const o = n;
            return window.addEventListener("scroll", o, {
                capture: !0,
                passive: !0
            }), ()=>void window.removeEventListener("scroll", o, !0);
        }
    }, [
        n,
        t
    ]);
}
function E(n) {
    const t = [];
    if (!n || n === document.body) return t;
    const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
    return [
        o,
        i,
        a
    ].some((c)=>c === "auto" || c === "scroll") && t.push(n), [
        ...t,
        ...E(n.parentElement)
    ];
}
const k = [
    "x",
    "y",
    "top",
    "bottom",
    "left",
    "right",
    "width",
    "height"
], D = (n, t)=>k.every((o)=>n[o] === t[o]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fbo",
    ()=>Fbo,
    "useFBO",
    ()=>useFBO
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+fiber@9.4.2_@t_0cffa43f796e363d832db8802e782ea3/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export C as useThree>");
;
;
;
;
// 👇 uncomment when TS version supports function overloads
// export function useFBO(settings?: FBOSettings)
function useFBO(/** Width in pixels, or settings (will render fullscreen by default) */ width, /** Height in pixels */ height, /**Settings */ settings) {
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useFBO.useThree[size]": (state)=>state.size
    }["useFBO.useThree[size]"]);
    const viewport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "useFBO.useThree[viewport]": (state)=>state.viewport
    }["useFBO.useThree[viewport]"]);
    const _width = typeof width === 'number' ? width : size.width * viewport.dpr;
    const _height = typeof height === 'number' ? height : size.height * viewport.dpr;
    const _settings = (typeof width === 'number' ? settings : width) || {};
    const { samples = 0, depth, ...targetSettings } = _settings;
    const depthBuffer = depth !== null && depth !== void 0 ? depth : _settings.depthBuffer; // backwards compatibility for deprecated `depth` prop
    const target = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useFBO.useMemo[target]": ()=>{
            const target = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLRenderTarget"](_width, _height, {
                minFilter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                magFilter: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"],
                type: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HalfFloatType"],
                ...targetSettings
            });
            if (depthBuffer) {
                target.depthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DepthTexture"](_width, _height, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatType"]);
            }
            target.samples = samples;
            return target;
        }
    }["useFBO.useMemo[target]"], []);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "useFBO.useLayoutEffect": ()=>{
            target.setSize(_width, _height);
            if (samples) target.samples = samples;
        }
    }["useFBO.useLayoutEffect"], [
        samples,
        target,
        _width,
        _height
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useFBO.useEffect": ()=>{
            return ({
                "useFBO.useEffect": ()=>target.dispose()
            })["useFBO.useEffect"];
        }
    }["useFBO.useEffect"], []);
    return target;
}
//
// Fbo component
//
const Fbo = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ children, width, height, ...settings }, fref)=>{
    const target = useFBO(width, height, settings);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(fref, {
        "Fbo.useImperativeHandle": ()=>target
    }["Fbo.useImperativeHandle"], [
        target
    ]); // expose target through ref
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], null, children == null ? void 0 : children(target));
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/web/ScrollControls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scroll",
    ()=>Scroll,
    "ScrollControls",
    ()=>ScrollControls,
    "useScroll",
    ()=>useScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react-dom/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+fiber@9.4.2_@t_0cffa43f796e363d832db8802e782ea3/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+fiber@9.4.2_@t_0cffa43f796e363d832db8802e782ea3/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__context$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+fiber@9.4.2_@t_0cffa43f796e363d832db8802e782ea3/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export q as context>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$maath$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/maath.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$0f4db1c0$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/easing-0f4db1c0.esm.js [app-client] (ecmascript) <export e as easing>");
;
;
;
;
;
const context = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
function useScroll() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context);
}
function ScrollControls({ eps = 0.00001, enabled = true, infinite, horizontal, pages = 1, distance = 1, damping = 0.25, maxSpeed = Infinity, prepend = false, style = {}, children }) {
    const { get, setEvents, gl, size, invalidate, events } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    const [el] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "ScrollControls.useState": ()=>document.createElement('div')
    }["ScrollControls.useState"]);
    const [fill] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "ScrollControls.useState": ()=>document.createElement('div')
    }["ScrollControls.useState"]);
    const [fixed] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "ScrollControls.useState": ()=>document.createElement('div')
    }["ScrollControls.useState"]);
    const target = gl.domElement.parentNode;
    const scroll = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ScrollControls.useMemo[state]": ()=>{
            const state = {
                el,
                eps,
                fill,
                fixed,
                horizontal,
                damping,
                offset: 0,
                delta: 0,
                scroll,
                pages,
                // 0-1 for a range between from -> from + distance
                range (from, distance, margin = 0) {
                    const start = from - margin;
                    const end = start + distance + margin * 2;
                    return this.offset < start ? 0 : this.offset > end ? 1 : (this.offset - start) / (end - start);
                },
                // 0-1-0 for a range between from -> from + distance
                curve (from, distance, margin = 0) {
                    return Math.sin(this.range(from, distance, margin) * Math.PI);
                },
                // true/false for a range between from -> from + distance
                visible (from, distance, margin = 0) {
                    const start = from - margin;
                    const end = start + distance + margin * 2;
                    return this.offset >= start && this.offset <= end;
                }
            };
            return state;
        }
    }["ScrollControls.useMemo[state]"], [
        eps,
        damping,
        horizontal,
        pages
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollControls.useEffect": ()=>{
            el.style.position = 'absolute';
            el.style.width = '100%';
            el.style.height = '100%';
            el.style[horizontal ? 'overflowX' : 'overflowY'] = 'auto';
            el.style[horizontal ? 'overflowY' : 'overflowX'] = 'hidden';
            el.style.top = '0px';
            el.style.left = '0px';
            for(const key in style){
                el.style[key] = style[key];
            }
            fixed.style.position = 'sticky';
            fixed.style.top = '0px';
            fixed.style.left = '0px';
            fixed.style.width = '100%';
            fixed.style.height = '100%';
            fixed.style.overflow = 'hidden';
            el.appendChild(fixed);
            fill.style.height = horizontal ? '100%' : `${pages * distance * 100}%`;
            fill.style.width = horizontal ? `${pages * distance * 100}%` : '100%';
            fill.style.pointerEvents = 'none';
            el.appendChild(fill);
            if (prepend) target.prepend(el);
            else target.appendChild(el);
            // Init scroll one pixel in to allow upward/leftward scroll
            el[horizontal ? 'scrollLeft' : 'scrollTop'] = 1;
            const oldTarget = events.connected || gl.domElement;
            requestAnimationFrame({
                "ScrollControls.useEffect": ()=>events.connect == null ? void 0 : events.connect(el)
            }["ScrollControls.useEffect"]);
            const oldCompute = get().events.compute;
            setEvents({
                compute (event, state) {
                    // we are using boundingClientRect because we could not rely on target.offsetTop as canvas could be positioned anywhere in dom
                    const { left, top } = target.getBoundingClientRect();
                    const offsetX = event.clientX - left;
                    const offsetY = event.clientY - top;
                    state.pointer.set(offsetX / state.size.width * 2 - 1, -(offsetY / state.size.height) * 2 + 1);
                    state.raycaster.setFromCamera(state.pointer, state.camera);
                }
            });
            return ({
                "ScrollControls.useEffect": ()=>{
                    target.removeChild(el);
                    setEvents({
                        compute: oldCompute
                    });
                    events.connect == null || events.connect(oldTarget);
                }
            })["ScrollControls.useEffect"];
        }
    }["ScrollControls.useEffect"], [
        pages,
        distance,
        horizontal,
        el,
        fill,
        fixed,
        target
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ScrollControls.useEffect": ()=>{
            if (events.connected === el) {
                const containerLength = size[horizontal ? 'width' : 'height'];
                const scrollLength = el[horizontal ? 'scrollWidth' : 'scrollHeight'];
                const scrollThreshold = scrollLength - containerLength;
                let current = 0;
                let disableScroll = true;
                let firstRun = true;
                const onScroll = {
                    "ScrollControls.useEffect.onScroll": ()=>{
                        // Prevent first scroll because it is indirectly caused by the one pixel offset
                        if (!enabled || firstRun) return;
                        invalidate();
                        current = el[horizontal ? 'scrollLeft' : 'scrollTop'];
                        scroll.current = current / scrollThreshold;
                        if (infinite) {
                            if (!disableScroll) {
                                if (current >= scrollThreshold) {
                                    const damp = 1 - state.offset;
                                    el[horizontal ? 'scrollLeft' : 'scrollTop'] = 1;
                                    scroll.current = state.offset = -damp;
                                    disableScroll = true;
                                } else if (current <= 0) {
                                    const damp = 1 + state.offset;
                                    el[horizontal ? 'scrollLeft' : 'scrollTop'] = scrollLength;
                                    scroll.current = state.offset = damp;
                                    disableScroll = true;
                                }
                            }
                            if (disableScroll) setTimeout({
                                "ScrollControls.useEffect.onScroll": ()=>disableScroll = false
                            }["ScrollControls.useEffect.onScroll"], 40);
                        }
                    }
                }["ScrollControls.useEffect.onScroll"];
                el.addEventListener('scroll', onScroll, {
                    passive: true
                });
                requestAnimationFrame({
                    "ScrollControls.useEffect": ()=>firstRun = false
                }["ScrollControls.useEffect"]);
                const onWheel = {
                    "ScrollControls.useEffect.onWheel": (e)=>el.scrollLeft += e.deltaY / 2
                }["ScrollControls.useEffect.onWheel"];
                if (horizontal) el.addEventListener('wheel', onWheel, {
                    passive: true
                });
                return ({
                    "ScrollControls.useEffect": ()=>{
                        el.removeEventListener('scroll', onScroll);
                        if (horizontal) el.removeEventListener('wheel', onWheel);
                    }
                })["ScrollControls.useEffect"];
            }
        }
    }["ScrollControls.useEffect"], [
        el,
        events,
        size,
        infinite,
        state,
        invalidate,
        horizontal,
        enabled
    ]);
    let last = 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ScrollControls.useFrame": (_, delta)=>{
            last = state.offset;
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$0f4db1c0$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__["easing"].damp(state, 'offset', scroll.current, damping, delta, maxSpeed, undefined, eps);
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$0f4db1c0$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__easing$3e$__["easing"].damp(state, 'delta', Math.abs(last - state.offset), damping, delta, maxSpeed, undefined, eps);
            if (state.delta > eps) invalidate();
        }
    }["ScrollControls.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: state
    }, children);
}
const ScrollCanvas = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children }, ref)=>{
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "ScrollCanvas.useImperativeHandle": ()=>group.current
    }["ScrollCanvas.useImperativeHandle"], []);
    const state = useScroll();
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "ScrollCanvas.useThree": (state)=>state.viewport
    }["ScrollCanvas.useThree"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ScrollCanvas.useFrame": ()=>{
            group.current.position.x = state.horizontal ? -width * (state.pages - 1) * state.offset : 0;
            group.current.position.y = state.horizontal ? 0 : height * (state.pages - 1) * state.offset;
        }
    }["ScrollCanvas.useFrame"]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("group", {
        ref: group
    }, children);
});
const ScrollHtml = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ children, style, ...props }, ref)=>{
    const state = useScroll();
    const group = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "ScrollHtml.useImperativeHandle": ()=>group.current
    }["ScrollHtml.useImperativeHandle"], []);
    const { width, height } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "ScrollHtml.useThree": (state)=>state.size
    }["ScrollHtml.useThree"]);
    const fiberState = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__context$3e$__["context"]);
    const root = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "ScrollHtml.useMemo[root]": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRoot"](state.fixed)
    }["ScrollHtml.useMemo[root]"], [
        state.fixed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ScrollHtml.useFrame": ()=>{
            if (state.delta > state.eps) {
                group.current.style.transform = `translate3d(${state.horizontal ? -width * (state.pages - 1) * state.offset : 0}px,${state.horizontal ? 0 : height * (state.pages - 1) * -state.offset}px,0)`;
            }
        }
    }["ScrollHtml.useFrame"]);
    root.render(/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: group,
        style: {
            ...style,
            position: 'absolute',
            top: 0,
            left: 0,
            willChange: 'transform'
        }
    }, props), /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](context.Provider, {
        value: state
    }, /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__q__as__context$3e$__["context"].Provider, {
        value: fiberState
    }, children))));
    return null;
});
const Scroll = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ html, ...props }, ref)=>{
    const El = html ? ScrollHtml : ScrollCanvas;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](El, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        ref: ref
    }, props));
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/core/Preload.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preload",
    ()=>Preload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+fiber@9.4.2_@t_0cffa43f796e363d832db8802e782ea3/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export C as useThree>");
;
;
;
function Preload({ all, scene, camera }) {
    const gl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Preload.useThree[gl]": ({ gl })=>gl
    }["Preload.useThree[gl]"]);
    const dCamera = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Preload.useThree[dCamera]": ({ camera })=>camera
    }["Preload.useThree[dCamera]"]);
    const dScene = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Preload.useThree[dScene]": ({ scene })=>scene
    }["Preload.useThree[dScene]"]);
    // Layout effect because it must run before React commits
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Preload.useLayoutEffect": ()=>{
            const invisible = [];
            if (all) {
                (scene || dScene).traverse({
                    "Preload.useLayoutEffect": (object)=>{
                        if (object.visible === false) {
                            invisible.push(object);
                            object.visible = true;
                        }
                    }
                }["Preload.useLayoutEffect"]);
            }
            // Now compile the scene
            gl.compile(scene || dScene, camera || dCamera);
            // And for good measure, hit it with a cube camera
            const cubeRenderTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebGLCubeRenderTarget"](128);
            const cubeCamera = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CubeCamera"](0.01, 100000, cubeRenderTarget);
            cubeCamera.update(gl, scene || dScene);
            cubeRenderTarget.dispose();
            // Flips these objects back
            invisible.forEach({
                "Preload.useLayoutEffect": (object)=>object.visible = false
            }["Preload.useLayoutEffect"]);
        }
    }["Preload.useLayoutEffect"], []);
    return null;
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/core/shaderMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shaderMaterial",
    ()=>shaderMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
function shaderMaterial(uniforms, vertexShader, fragmentShader, onInit) {
    var _Class;
    return _Class = class extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"] {
        constructor(parameters){
            super({
                vertexShader,
                fragmentShader,
                ...parameters
            });
            for(const key in uniforms){
                this.uniforms[key] = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Uniform"](uniforms[key]);
                Object.defineProperty(this, key, {
                    get () {
                        return this.uniforms[key].value;
                    },
                    set (value) {
                        this.uniforms[key].value = value;
                    }
                });
            }
            this.uniforms = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniformsUtils"].clone(this.uniforms);
            onInit == null || onInit(this);
        }
    }, _Class.key = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MathUtils"].generateUUID(), _Class;
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/materials/DiscardMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscardMaterial",
    ()=>DiscardMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$r_995369240e39cc8d505a526c3bce637b$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/core/shaderMaterial.js [app-client] (ecmascript)");
;
const DiscardMaterial = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$r_995369240e39cc8d505a526c3bce637b$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$shaderMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shaderMaterial"])({}, 'void main() { }', 'void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }');
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/core/MeshTransmissionMaterial.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MeshTransmissionMaterial",
    ()=>MeshTransmissionMaterial
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+fiber@9.4.2_@t_0cffa43f796e363d832db8802e782ea3/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export e as extend>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+fiber@9.4.2_@t_0cffa43f796e363d832db8802e782ea3/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$r_995369240e39cc8d505a526c3bce637b$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/core/Fbo.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$r_995369240e39cc8d505a526c3bce637b$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$DiscardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/materials/DiscardMaterial.js [app-client] (ecmascript)");
;
;
;
;
;
;
class MeshTransmissionMaterialImpl extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhysicalMaterial"] {
    constructor(samples = 6, transmissionSampler = false){
        super();
        this.uniforms = {
            chromaticAberration: {
                value: 0.05
            },
            // Transmission must always be 0, unless transmissionSampler is being used
            transmission: {
                value: 0
            },
            // Instead a workaround is used, see below for reasons why
            _transmission: {
                value: 1
            },
            transmissionMap: {
                value: null
            },
            // Roughness is 1 in THREE.MeshPhysicalMaterial but it makes little sense in a transmission material
            roughness: {
                value: 0
            },
            thickness: {
                value: 0
            },
            thicknessMap: {
                value: null
            },
            attenuationDistance: {
                value: Infinity
            },
            attenuationColor: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('white')
            },
            anisotropicBlur: {
                value: 0.1
            },
            time: {
                value: 0
            },
            distortion: {
                value: 0.0
            },
            distortionScale: {
                value: 0.5
            },
            temporalDistortion: {
                value: 0.0
            },
            buffer: {
                value: null
            }
        };
        this.onBeforeCompile = (shader)=>{
            shader.uniforms = {
                ...shader.uniforms,
                ...this.uniforms
            };
            // Fix for r153-r156 anisotropy chunks
            // https://github.com/mrdoob/three.js/pull/26716
            if (this.anisotropy > 0) shader.defines.USE_ANISOTROPY = '';
            // If the transmission sampler is active inject a flag
            if (transmissionSampler) shader.defines.USE_SAMPLER = '';
            else shader.defines.USE_TRANSMISSION = '';
            // Head
            shader.fragmentShader = /*glsl*/ `
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }\n` + shader.fragmentShader;
            // Remove transmission
            shader.fragmentShader = shader.fragmentShader.replace('#include <transmission_pars_fragment>', /*glsl*/ `
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif\n`);
            // Add refraction
            shader.fragmentShader = shader.fragmentShader.replace('#include <transmission_fragment>', /*glsl*/ `  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${samples}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${samples})) , material.thickness + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${samples})), material.thickness + thickness_smear * (i + randomCoords) / float(${samples}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${samples}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );\n`);
        };
        Object.keys(this.uniforms).forEach((name)=>Object.defineProperty(this, name, {
                get: ()=>this.uniforms[name].value,
                set: (v)=>this.uniforms[name].value = v
            }));
    }
}
const MeshTransmissionMaterial = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ buffer, transmissionSampler = false, backside = false, side = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FrontSide"], transmission = 1, thickness = 0, backsideThickness = 0, backsideEnvMapIntensity = 1, samples = 10, resolution, backsideResolution, background, anisotropy, anisotropicBlur, ...props }, fref)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__e__as__extend$3e$__["extend"])({
        MeshTransmissionMaterial: MeshTransmissionMaterialImpl
    });
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const [discardMaterial] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "MeshTransmissionMaterial.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$r_995369240e39cc8d505a526c3bce637b$2f$node_modules$2f40$react$2d$three$2f$drei$2f$materials$2f$DiscardMaterial$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscardMaterial"]()
    }["MeshTransmissionMaterial.useState"]);
    const fboBack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$r_995369240e39cc8d505a526c3bce637b$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFBO"])(backsideResolution || resolution);
    const fboMain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$drei$40$10$2e$7$2e$7_$40$r_995369240e39cc8d505a526c3bce637b$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Fbo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFBO"])(resolution);
    let oldBg;
    let oldEnvMapIntensity;
    let oldTone;
    let parent;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "MeshTransmissionMaterial.useFrame": (state)=>{
            ref.current.time = state.clock.elapsedTime;
            // Render only if the buffer matches the built-in and no transmission sampler is set
            if (ref.current.buffer === fboMain.texture && !transmissionSampler) {
                var _r3f$parent;
                parent = (_r3f$parent = ref.current.__r3f.parent) == null ? void 0 : _r3f$parent.object;
                if (parent) {
                    // Save defaults
                    oldTone = state.gl.toneMapping;
                    oldBg = state.scene.background;
                    oldEnvMapIntensity = ref.current.envMapIntensity;
                    // Switch off tonemapping lest it double tone maps
                    // Save the current background and set the HDR as the new BG
                    // Use discardmaterial, the parent will be invisible, but it's shadows will still be cast
                    state.gl.toneMapping = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoToneMapping"];
                    if (background) state.scene.background = background;
                    parent.material = discardMaterial;
                    if (backside) {
                        // Render into the backside buffer
                        state.gl.setRenderTarget(fboBack);
                        state.gl.render(state.scene, state.camera);
                        // And now prepare the material for the main render using the backside buffer
                        parent.material = ref.current;
                        parent.material.buffer = fboBack.texture;
                        parent.material.thickness = backsideThickness;
                        parent.material.side = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackSide"];
                        parent.material.envMapIntensity = backsideEnvMapIntensity;
                    }
                    // Render into the main buffer
                    state.gl.setRenderTarget(fboMain);
                    state.gl.render(state.scene, state.camera);
                    parent.material = ref.current;
                    parent.material.thickness = thickness;
                    parent.material.side = side;
                    parent.material.buffer = fboMain.texture;
                    parent.material.envMapIntensity = oldEnvMapIntensity;
                    // Set old state back
                    state.scene.background = oldBg;
                    state.gl.setRenderTarget(null);
                    state.gl.toneMapping = oldTone;
                }
            }
        }
    }["MeshTransmissionMaterial.useFrame"]);
    // Forward ref
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](fref, {
        "MeshTransmissionMaterial.useImperativeHandle": ()=>ref.current
    }["MeshTransmissionMaterial.useImperativeHandle"], []);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("meshTransmissionMaterial", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        // Samples must re-compile the shader so we memoize it
        args: [
            samples,
            transmissionSampler
        ],
        ref: ref
    }, props, {
        buffer: buffer || fboMain.texture,
        _transmission: transmission,
        anisotropicBlur: anisotropicBlur !== null && anisotropicBlur !== void 0 ? anisotropicBlur : anisotropy,
        transmission: transmissionSampler ? transmission : 0,
        thickness: thickness,
        side: side
    }));
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+drei@10.7.7_@r_995369240e39cc8d505a526c3bce637b/node_modules/@react-three/drei/core/Text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$troika$2d$three$2d$text$40$0$2e$52$2e$4_three$40$0$2e$167$2e$1$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/troika-three-text@0.52.4_three@0.167.1/node_modules/troika-three-text/dist/troika-three-text.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@react-three+fiber@9.4.2_@t_0cffa43f796e363d832db8802e782ea3/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$suspend$2d$react$40$0$2e$1$2e$3_react$40$19$2e$2$2e$0$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/suspend-react@0.1.3_react@19.2.0/node_modules/suspend-react/index.js [app-client] (ecmascript)");
;
;
;
;
;
const Text = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](({ sdfGlyphSize = 64, anchorX = 'center', anchorY = 'middle', font, fontSize = 1, children, characters, onSync, ...props }, ref)=>{
    const invalidate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$react$2d$three$2b$fiber$40$9$2e$4$2e$2_$40$t_0cffa43f796e363d832db8802e782ea3$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])({
        "Text.useThree[invalidate]": ({ invalidate })=>invalidate
    }["Text.useThree[invalidate]"]);
    const [troikaMesh] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]({
        "Text.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$troika$2d$three$2d$text$40$0$2e$52$2e$4_three$40$0$2e$167$2e$1$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"]()
    }["Text.useState"]);
    const [nodes, text] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Text.useMemo": ()=>{
            const n = [];
            let t = '';
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].forEach(children, {
                "Text.useMemo": (child)=>{
                    if (typeof child === 'string' || typeof child === 'number') {
                        t += child;
                    } else {
                        n.push(child);
                    }
                }
            }["Text.useMemo"]);
            return [
                n,
                t
            ];
        }
    }["Text.useMemo"], [
        children
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$suspend$2d$react$40$0$2e$1$2e$3_react$40$19$2e$2$2e$0$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspend"])(()=>new Promise((res)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$troika$2d$three$2d$text$40$0$2e$52$2e$4_three$40$0$2e$167$2e$1$2f$node_modules$2f$troika$2d$three$2d$text$2f$dist$2f$troika$2d$three$2d$text$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preloadFont"])({
                font,
                characters
            }, res)), [
        'troika-text',
        font,
        characters
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"]({
        "Text.useLayoutEffect": ()=>void troikaMesh.sync({
                "Text.useLayoutEffect": ()=>{
                    invalidate();
                    if (onSync) onSync(troikaMesh);
                }
            }["Text.useLayoutEffect"])
    }["Text.useLayoutEffect"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "Text.useEffect": ()=>{
            return ({
                "Text.useEffect": ()=>troikaMesh.dispose()
            })["Text.useEffect"];
        }
    }["Text.useEffect"], [
        troikaMesh
    ]);
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"]("primitive", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$28$2e$4$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        object: troikaMesh,
        ref: ref,
        font: font,
        text: text,
        anchorX: anchorX,
        anchorY: anchorY,
        fontSize: fontSize,
        sdfGlyphSize: sdfGlyphSize
    }, props), nodes);
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@babel+runtime@7.28.4/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>_extends
]);
function _extends() {
    return _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", _extends.apply(null, arguments);
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/troika-worker-utils@0.52.0/node_modules/troika-worker-utils/dist/troika-worker-utils.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Main content for the worker that handles the loading and execution of
 * modules within it.
 */ __turbopack_context__.s([
    "defineWorkerModule",
    ()=>defineWorkerModule,
    "stringifyFunction",
    ()=>stringifyFunction,
    "terminateWorker",
    ()=>terminateWorker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function workerBootstrap() {
    var modules = Object.create(null);
    // Handle messages for registering a module
    function registerModule(ref, callback) {
        var id = ref.id;
        var name = ref.name;
        var dependencies = ref.dependencies;
        if (dependencies === void 0) dependencies = [];
        var init = ref.init;
        if (init === void 0) init = function() {};
        var getTransferables = ref.getTransferables;
        if (getTransferables === void 0) getTransferables = null;
        // Only register once
        if (modules[id]) {
            return;
        }
        try {
            // If any dependencies are modules, ensure they're registered and grab their value
            dependencies = dependencies.map(function(dep) {
                if (dep && dep.isWorkerModule) {
                    registerModule(dep, function(depResult) {
                        if (depResult instanceof Error) {
                            throw depResult;
                        }
                    });
                    dep = modules[dep.id].value;
                }
                return dep;
            });
            // Rehydrate functions
            init = rehydrate("<" + name + ">.init", init);
            if (getTransferables) {
                getTransferables = rehydrate("<" + name + ">.getTransferables", getTransferables);
            }
            // Initialize the module and store its value
            var value = null;
            if (typeof init === 'function') {
                value = init.apply(void 0, dependencies);
            } else {
                console.error('worker module init function failed to rehydrate');
            }
            modules[id] = {
                id: id,
                value: value,
                getTransferables: getTransferables
            };
            callback(value);
        } catch (err) {
            if (!(err && err.noLog)) {
                console.error(err);
            }
            callback(err);
        }
    }
    // Handle messages for calling a registered module's result function
    function callModule(ref, callback) {
        var ref$1;
        var id = ref.id;
        var args = ref.args;
        if (!modules[id] || typeof modules[id].value !== 'function') {
            callback(new Error("Worker module " + id + ": not found or its 'init' did not return a function"));
        }
        try {
            var result = (ref$1 = modules[id]).value.apply(ref$1, args);
            if (result && typeof result.then === 'function') {
                result.then(handleResult, function(rej) {
                    return callback(rej instanceof Error ? rej : new Error('' + rej));
                });
            } else {
                handleResult(result);
            }
        } catch (err) {
            callback(err);
        }
        function handleResult(result) {
            try {
                var tx = modules[id].getTransferables && modules[id].getTransferables(result);
                if (!tx || !Array.isArray(tx) || !tx.length) {
                    tx = undefined; //postMessage is very picky about not passing null or empty transferables
                }
                callback(result, tx);
            } catch (err) {
                console.error(err);
                callback(err);
            }
        }
    }
    function rehydrate(name, str) {
        var result = void 0;
        self.troikaDefine = function(r) {
            return result = r;
        };
        var url = URL.createObjectURL(new Blob([
            "/** " + name.replace(/\*/g, '') + " **/\n\ntroikaDefine(\n" + str + "\n)"
        ], {
            type: 'application/javascript'
        }));
        try {
            importScripts(url);
        } catch (err) {
            console.error(err);
        }
        URL.revokeObjectURL(url);
        delete self.troikaDefine;
        return result;
    }
    // Handler for all messages within the worker
    self.addEventListener('message', function(e) {
        var ref = e.data;
        var messageId = ref.messageId;
        var action = ref.action;
        var data = ref.data;
        try {
            // Module registration
            if (action === 'registerModule') {
                registerModule(data, function(result) {
                    if (result instanceof Error) {
                        postMessage({
                            messageId: messageId,
                            success: false,
                            error: result.message
                        });
                    } else {
                        postMessage({
                            messageId: messageId,
                            success: true,
                            result: {
                                isCallable: typeof result === 'function'
                            }
                        });
                    }
                });
            }
            // Invocation
            if (action === 'callModule') {
                callModule(data, function(result, transferables) {
                    if (result instanceof Error) {
                        postMessage({
                            messageId: messageId,
                            success: false,
                            error: result.message
                        });
                    } else {
                        postMessage({
                            messageId: messageId,
                            success: true,
                            result: result
                        }, transferables || undefined);
                    }
                });
            }
        } catch (err) {
            postMessage({
                messageId: messageId,
                success: false,
                error: err.stack
            });
        }
    });
}
/**
 * Fallback for `defineWorkerModule` that behaves identically but runs in the main
 * thread, for when the execution environment doesn't support web workers or they
 * are disallowed due to e.g. CSP security restrictions.
 */ function defineMainThreadModule(options) {
    var moduleFunc = function() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        return moduleFunc._getInitResult().then(function(initResult) {
            if (typeof initResult === 'function') {
                return initResult.apply(void 0, args);
            } else {
                throw new Error('Worker module function was called but `init` did not return a callable function');
            }
        });
    };
    moduleFunc._getInitResult = function() {
        // We can ignore getTransferables in main thread. TODO workerId?
        var dependencies = options.dependencies;
        var init = options.init;
        // Resolve dependencies
        dependencies = Array.isArray(dependencies) ? dependencies.map(function(dep) {
            if (dep) {
                // If it's a worker module, use its main thread impl
                dep = dep.onMainThread || dep;
                // If it's a main thread worker module, use its init return value
                if (dep._getInitResult) {
                    dep = dep._getInitResult();
                }
            }
            return dep;
        }) : [];
        // Invoke init with the resolved dependencies
        var initPromise = Promise.all(dependencies).then(function(deps) {
            return init.apply(null, deps);
        });
        // Cache the resolved promise for subsequent calls
        moduleFunc._getInitResult = function() {
            return initPromise;
        };
        return initPromise;
    };
    return moduleFunc;
}
var supportsWorkers = function() {
    var supported = false;
    // Only attempt worker initialization in browsers; elsewhere it would just be
    // noise e.g. loading into a Node environment for SSR.
    if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
        try {
            // TODO additional checks for things like importScripts within the worker?
            //  Would need to be an async check.
            var worker = new Worker(URL.createObjectURL(new Blob([
                ''
            ], {
                type: 'application/javascript'
            })));
            worker.terminate();
            supported = true;
        } catch (err) {
            if ("TURBOPACK compile-time falsy", 0) ;
            else {
                console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: [" + err.message + "]");
            }
        }
    }
    // Cached result
    supportsWorkers = function() {
        return supported;
    };
    return supported;
};
var _workerModuleId = 0;
var _messageId = 0;
var _allowInitAsString = false;
var workers = Object.create(null);
var registeredModules = Object.create(null); //workerId -> Set<unregisterFn>
var openRequests = Object.create(null);
/**
 * Define a module of code that will be executed with a web worker. This provides a simple
 * interface for moving chunks of logic off the main thread, and managing their dependencies
 * among one another.
 *
 * @param {object} options
 * @param {function} options.init
 * @param {array} [options.dependencies]
 * @param {function} [options.getTransferables]
 * @param {string} [options.name]
 * @param {string} [options.workerId]
 * @return {function(...[*]): {then}}
 */ function defineWorkerModule(options) {
    if ((!options || typeof options.init !== 'function') && !_allowInitAsString) {
        throw new Error('requires `options.init` function');
    }
    var dependencies = options.dependencies;
    var init = options.init;
    var getTransferables = options.getTransferables;
    var workerId = options.workerId;
    var onMainThread = defineMainThreadModule(options);
    if (workerId == null) {
        workerId = '#default';
    }
    var id = "workerModule" + ++_workerModuleId;
    var name = options.name || id;
    var registrationPromise = null;
    dependencies = dependencies && dependencies.map(function(dep) {
        // Wrap raw functions as worker modules with no dependencies
        if (typeof dep === 'function' && !dep.workerModuleData) {
            _allowInitAsString = true;
            dep = defineWorkerModule({
                workerId: workerId,
                name: "<" + name + "> function dependency: " + dep.name,
                init: "function(){return (\n" + stringifyFunction(dep) + "\n)}"
            });
            _allowInitAsString = false;
        }
        // Grab postable data for worker modules
        if (dep && dep.workerModuleData) {
            dep = dep.workerModuleData;
        }
        return dep;
    });
    function moduleFunc() {
        var args = [], len = arguments.length;
        while(len--)args[len] = arguments[len];
        if (!supportsWorkers()) {
            return onMainThread.apply(void 0, args);
        }
        // Register this module if needed
        if (!registrationPromise) {
            registrationPromise = callWorker(workerId, 'registerModule', moduleFunc.workerModuleData);
            var unregister = function() {
                registrationPromise = null;
                registeredModules[workerId].delete(unregister);
            };
            (registeredModules[workerId] || (registeredModules[workerId] = new Set())).add(unregister);
        }
        // Invoke the module, returning a promise
        return registrationPromise.then(function(ref) {
            var isCallable = ref.isCallable;
            if (isCallable) {
                return callWorker(workerId, 'callModule', {
                    id: id,
                    args: args
                });
            } else {
                throw new Error('Worker module function was called but `init` did not return a callable function');
            }
        });
    }
    moduleFunc.workerModuleData = {
        isWorkerModule: true,
        id: id,
        name: name,
        dependencies: dependencies,
        init: stringifyFunction(init),
        getTransferables: getTransferables && stringifyFunction(getTransferables)
    };
    moduleFunc.onMainThread = onMainThread;
    return moduleFunc;
}
/**
 * Terminate an active Worker by a workerId that was passed to defineWorkerModule.
 * This only terminates the Worker itself; the worker module will remain available
 * and if you call it again its Worker will be respawned.
 * @param {string} workerId
 */ function terminateWorker(workerId) {
    // Unregister all modules that were registered in that worker
    if (registeredModules[workerId]) {
        registeredModules[workerId].forEach(function(unregister) {
            unregister();
        });
    }
    // Terminate the Worker object
    if (workers[workerId]) {
        workers[workerId].terminate();
        delete workers[workerId];
    }
}
/**
 * Stringifies a function into a form that can be deserialized in the worker
 * @param fn
 */ function stringifyFunction(fn) {
    var str = fn.toString();
    // If it was defined in object method/property format, it needs to be modified
    if (!/^function/.test(str) && /^\w+\s*\(/.test(str)) {
        str = 'function ' + str;
    }
    return str;
}
function getWorker(workerId) {
    var worker = workers[workerId];
    if (!worker) {
        // Bootstrap the worker's content
        var bootstrap = stringifyFunction(workerBootstrap);
        // Create the worker from the bootstrap function content
        worker = workers[workerId] = new Worker(URL.createObjectURL(new Blob([
            "/** Worker Module Bootstrap: " + workerId.replace(/\*/g, '') + " **/\n\n;(" + bootstrap + ")()"
        ], {
            type: 'application/javascript'
        })));
        // Single handler for response messages from the worker
        worker.onmessage = function(e) {
            var response = e.data;
            var msgId = response.messageId;
            var callback = openRequests[msgId];
            if (!callback) {
                throw new Error('WorkerModule response with empty or unknown messageId');
            }
            delete openRequests[msgId];
            callback(response);
        };
    }
    return worker;
}
// Issue a call to the worker with a callback to handle the response
function callWorker(workerId, action, data) {
    return new Promise(function(resolve, reject) {
        var messageId = ++_messageId;
        openRequests[messageId] = function(response) {
            if (response.success) {
                resolve(response.result);
            } else {
                reject(new Error("Error in worker " + action + " call: " + response.error));
            }
        };
        getWorker(workerId).postMessage({
            messageId: messageId,
            action: action,
            data: data
        });
    });
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/webgl-sdf-generator@1.1.1/node_modules/webgl-sdf-generator/dist/webgl-sdf-generator.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SDFGenerator
]);
function SDFGenerator() {
    var exports = function(exports) {
        /**
   * Find the point on a quadratic bezier curve at t where t is in the range [0, 1]
   */ function pointOnQuadraticBezier(x0, y0, x1, y1, x2, y2, t, pointOut) {
            var t2 = 1 - t;
            pointOut.x = t2 * t2 * x0 + 2 * t2 * t * x1 + t * t * x2;
            pointOut.y = t2 * t2 * y0 + 2 * t2 * t * y1 + t * t * y2;
        }
        /**
   * Find the point on a cubic bezier curve at t where t is in the range [0, 1]
   */ function pointOnCubicBezier(x0, y0, x1, y1, x2, y2, x3, y3, t, pointOut) {
            var t2 = 1 - t;
            pointOut.x = t2 * t2 * t2 * x0 + 3 * t2 * t2 * t * x1 + 3 * t2 * t * t * x2 + t * t * t * x3;
            pointOut.y = t2 * t2 * t2 * y0 + 3 * t2 * t2 * t * y1 + 3 * t2 * t * t * y2 + t * t * t * y3;
        }
        /**
   * Parse a path string into its constituent line/curve commands, invoking a callback for each.
   * @param {string} pathString - An SVG-like path string to parse; should only contain commands: M/L/Q/C/Z
   * @param {function(
   *   command: 'L'|'Q'|'C',
   *   startX: number,
   *   startY: number,
   *   endX: number,
   *   endY: number,
   *   ctrl1X?: number,
   *   ctrl1Y?: number,
   *   ctrl2X?: number,
   *   ctrl2Y?: number
   * )} commandCallback - A callback function that will be called once for each parsed path command, passing the
   *                      command identifier (only L/Q/C commands) and its numeric arguments.
   */ function forEachPathCommand(pathString, commandCallback) {
            var segmentRE = /([MLQCZ])([^MLQCZ]*)/g;
            var match, firstX, firstY, prevX, prevY;
            while(match = segmentRE.exec(pathString)){
                var args = match[2].replace(/^\s*|\s*$/g, '').split(/[,\s]+/).map(function(v) {
                    return parseFloat(v);
                });
                switch(match[1]){
                    case 'M':
                        prevX = firstX = args[0];
                        prevY = firstY = args[1];
                        break;
                    case 'L':
                        if (args[0] !== prevX || args[1] !== prevY) {
                            commandCallback('L', prevX, prevY, prevX = args[0], prevY = args[1]);
                        }
                        break;
                    case 'Q':
                        {
                            commandCallback('Q', prevX, prevY, prevX = args[2], prevY = args[3], args[0], args[1]);
                            break;
                        }
                    case 'C':
                        {
                            commandCallback('C', prevX, prevY, prevX = args[4], prevY = args[5], args[0], args[1], args[2], args[3]);
                            break;
                        }
                    case 'Z':
                        if (prevX !== firstX || prevY !== firstY) {
                            commandCallback('L', prevX, prevY, firstX, firstY);
                        }
                        break;
                }
            }
        }
        /**
   * Convert a path string to a series of straight line segments
   * @param {string} pathString - An SVG-like path string to parse; should only contain commands: M/L/Q/C/Z
   * @param {function(x1:number, y1:number, x2:number, y2:number)} segmentCallback - A callback
   *        function that will be called once for every line segment
   * @param {number} [curvePoints] - How many straight line segments to use when approximating a
   *        bezier curve in the path. Defaults to 16.
   */ function pathToLineSegments(pathString, segmentCallback, curvePoints) {
            if (curvePoints === void 0) curvePoints = 16;
            var tempPoint = {
                x: 0,
                y: 0
            };
            forEachPathCommand(pathString, function(command, startX, startY, endX, endY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y) {
                switch(command){
                    case 'L':
                        segmentCallback(startX, startY, endX, endY);
                        break;
                    case 'Q':
                        {
                            var prevCurveX = startX;
                            var prevCurveY = startY;
                            for(var i = 1; i < curvePoints; i++){
                                pointOnQuadraticBezier(startX, startY, ctrl1X, ctrl1Y, endX, endY, i / (curvePoints - 1), tempPoint);
                                segmentCallback(prevCurveX, prevCurveY, tempPoint.x, tempPoint.y);
                                prevCurveX = tempPoint.x;
                                prevCurveY = tempPoint.y;
                            }
                            break;
                        }
                    case 'C':
                        {
                            var prevCurveX$1 = startX;
                            var prevCurveY$1 = startY;
                            for(var i$1 = 1; i$1 < curvePoints; i$1++){
                                pointOnCubicBezier(startX, startY, ctrl1X, ctrl1Y, ctrl2X, ctrl2Y, endX, endY, i$1 / (curvePoints - 1), tempPoint);
                                segmentCallback(prevCurveX$1, prevCurveY$1, tempPoint.x, tempPoint.y);
                                prevCurveX$1 = tempPoint.x;
                                prevCurveY$1 = tempPoint.y;
                            }
                            break;
                        }
                }
            });
        }
        var viewportQuadVertex = "precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
        var copyTexFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}";
        var cache = new WeakMap();
        var glContextParams = {
            premultipliedAlpha: false,
            preserveDrawingBuffer: true,
            antialias: false,
            depth: false
        };
        /**
   * This is a little helper library for WebGL. It assists with state management for a GL context.
   * It's pretty tightly wrapped to the needs of this package, not very general-purpose.
   *
   * @param { WebGLRenderingContext | HTMLCanvasElement | OffscreenCanvas } glOrCanvas - the GL context to wrap
   * @param { ({gl, getExtension, withProgram, withTexture, withTextureFramebuffer, handleContextLoss}) => void } callback
   */ function withWebGLContext(glOrCanvas, callback) {
            var gl = glOrCanvas.getContext ? glOrCanvas.getContext('webgl', glContextParams) : glOrCanvas;
            var wrapper = cache.get(gl);
            if (!wrapper) {
                var isWebGL2 = typeof WebGL2RenderingContext !== 'undefined' && gl instanceof WebGL2RenderingContext;
                var extensions = {};
                var programs = {};
                var textures = {};
                var textureUnit = -1;
                var framebufferStack = [];
                gl.canvas.addEventListener('webglcontextlost', function(e) {
                    handleContextLoss();
                    e.preventDefault();
                }, false);
                function getExtension(name) {
                    var ext = extensions[name];
                    if (!ext) {
                        ext = extensions[name] = gl.getExtension(name);
                        if (!ext) {
                            throw new Error(name + " not supported");
                        }
                    }
                    return ext;
                }
                function compileShader(src, type) {
                    var shader = gl.createShader(type);
                    gl.shaderSource(shader, src);
                    gl.compileShader(shader);
                    // const status = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
                    // if (!status && !gl.isContextLost()) {
                    //   throw new Error(gl.getShaderInfoLog(shader).trim())
                    // }
                    return shader;
                }
                function withProgram(name, vert, frag, func) {
                    if (!programs[name]) {
                        var attributes = {};
                        var uniforms = {};
                        var program = gl.createProgram();
                        gl.attachShader(program, compileShader(vert, gl.VERTEX_SHADER));
                        gl.attachShader(program, compileShader(frag, gl.FRAGMENT_SHADER));
                        gl.linkProgram(program);
                        programs[name] = {
                            program: program,
                            transaction: function transaction(func) {
                                gl.useProgram(program);
                                func({
                                    setUniform: function setUniform(type, name) {
                                        var values = [], len = arguments.length - 2;
                                        while(len-- > 0)values[len] = arguments[len + 2];
                                        var uniformLoc = uniforms[name] || (uniforms[name] = gl.getUniformLocation(program, name));
                                        gl["uniform" + type].apply(gl, [
                                            uniformLoc
                                        ].concat(values));
                                    },
                                    setAttribute: function setAttribute(name, size, usage, instancingDivisor, data) {
                                        var attr = attributes[name];
                                        if (!attr) {
                                            attr = attributes[name] = {
                                                buf: gl.createBuffer(),
                                                loc: gl.getAttribLocation(program, name),
                                                data: null
                                            };
                                        }
                                        gl.bindBuffer(gl.ARRAY_BUFFER, attr.buf);
                                        gl.vertexAttribPointer(attr.loc, size, gl.FLOAT, false, 0, 0);
                                        gl.enableVertexAttribArray(attr.loc);
                                        if (isWebGL2) {
                                            gl.vertexAttribDivisor(attr.loc, instancingDivisor);
                                        } else {
                                            getExtension('ANGLE_instanced_arrays').vertexAttribDivisorANGLE(attr.loc, instancingDivisor);
                                        }
                                        if (data !== attr.data) {
                                            gl.bufferData(gl.ARRAY_BUFFER, data, usage);
                                            attr.data = data;
                                        }
                                    }
                                });
                            }
                        };
                    }
                    programs[name].transaction(func);
                }
                function withTexture(name, func) {
                    textureUnit++;
                    try {
                        gl.activeTexture(gl.TEXTURE0 + textureUnit);
                        var texture = textures[name];
                        if (!texture) {
                            texture = textures[name] = gl.createTexture();
                            gl.bindTexture(gl.TEXTURE_2D, texture);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
                            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
                        }
                        gl.bindTexture(gl.TEXTURE_2D, texture);
                        func(texture, textureUnit);
                    } finally{
                        textureUnit--;
                    }
                }
                function withTextureFramebuffer(texture, textureUnit, func) {
                    var framebuffer = gl.createFramebuffer();
                    framebufferStack.push(framebuffer);
                    gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
                    gl.activeTexture(gl.TEXTURE0 + textureUnit);
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
                    try {
                        func(framebuffer);
                    } finally{
                        gl.deleteFramebuffer(framebuffer);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebufferStack[--framebufferStack.length - 1] || null);
                    }
                }
                function handleContextLoss() {
                    extensions = {};
                    programs = {};
                    textures = {};
                    textureUnit = -1;
                    framebufferStack.length = 0;
                }
                cache.set(gl, wrapper = {
                    gl: gl,
                    isWebGL2: isWebGL2,
                    getExtension: getExtension,
                    withProgram: withProgram,
                    withTexture: withTexture,
                    withTextureFramebuffer: withTextureFramebuffer,
                    handleContextLoss: handleContextLoss
                });
            }
            callback(wrapper);
        }
        function renderImageData(glOrCanvas, imageData, x, y, width, height, channels, framebuffer) {
            if (channels === void 0) channels = 15;
            if (framebuffer === void 0) framebuffer = null;
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var withProgram = ref.withProgram;
                var withTexture = ref.withTexture;
                withTexture('copy', function(tex, texUnit) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imageData);
                    withProgram('copy', viewportQuadVertex, copyTexFragment, function(ref) {
                        var setUniform = ref.setUniform;
                        var setAttribute = ref.setAttribute;
                        setAttribute('aUV', 2, gl.STATIC_DRAW, 0, new Float32Array([
                            0,
                            0,
                            2,
                            0,
                            0,
                            2
                        ]));
                        setUniform('1i', 'image', texUnit);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer || null);
                        gl.disable(gl.BLEND);
                        gl.colorMask(channels & 8, channels & 4, channels & 2, channels & 1);
                        gl.viewport(x, y, width, height);
                        gl.scissor(x, y, width, height);
                        gl.drawArrays(gl.TRIANGLES, 0, 3);
                    });
                });
            });
        }
        /**
   * Resizing a canvas clears its contents; this utility copies the previous contents over.
   * @param canvas
   * @param newWidth
   * @param newHeight
   */ function resizeWebGLCanvasWithoutClearing(canvas, newWidth, newHeight) {
            var width = canvas.width;
            var height = canvas.height;
            withWebGLContext(canvas, function(ref) {
                var gl = ref.gl;
                var data = new Uint8Array(width * height * 4);
                gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
                canvas.width = newWidth;
                canvas.height = newHeight;
                renderImageData(gl, data, 0, 0, width, height);
            });
        }
        var webglUtils = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            withWebGLContext: withWebGLContext,
            renderImageData: renderImageData,
            resizeWebGLCanvasWithoutClearing: resizeWebGLCanvasWithoutClearing
        });
        function generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
            if (sdfExponent === void 0) sdfExponent = 1;
            var textureData = new Uint8Array(sdfWidth * sdfHeight);
            var viewBoxWidth = viewBox[2] - viewBox[0];
            var viewBoxHeight = viewBox[3] - viewBox[1];
            // Decompose all paths into straight line segments and add them to an index
            var segments = [];
            pathToLineSegments(path, function(x1, y1, x2, y2) {
                segments.push({
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                    minX: Math.min(x1, x2),
                    minY: Math.min(y1, y2),
                    maxX: Math.max(x1, x2),
                    maxY: Math.max(y1, y2)
                });
            });
            // Sort segments by maxX, this will let us short-circuit some loops below
            segments.sort(function(a, b) {
                return a.maxX - b.maxX;
            });
            // For each target SDF texel, find the distance from its center to its nearest line segment,
            // map that distance to an alpha value, and write that alpha to the texel
            for(var sdfX = 0; sdfX < sdfWidth; sdfX++){
                for(var sdfY = 0; sdfY < sdfHeight; sdfY++){
                    var signedDist = findNearestSignedDistance(viewBox[0] + viewBoxWidth * (sdfX + 0.5) / sdfWidth, viewBox[1] + viewBoxHeight * (sdfY + 0.5) / sdfHeight);
                    // Use an exponential scale to ensure the texels very near the glyph path have adequate
                    // precision, while allowing the distance field to cover the entire texture, given that
                    // there are only 8 bits available. Formula visualized: https://www.desmos.com/calculator/uiaq5aqiam
                    var alpha = Math.pow(1 - Math.abs(signedDist) / maxDistance, sdfExponent) / 2;
                    if (signedDist < 0) {
                        alpha = 1 - alpha;
                    }
                    alpha = Math.max(0, Math.min(255, Math.round(alpha * 255))); //clamp
                    textureData[sdfY * sdfWidth + sdfX] = alpha;
                }
            }
            return textureData;
            //TURBOPACK unreachable
            ;
            /**
     * For a given x/y, search the index for the closest line segment and return
     * its signed distance. Negative = inside, positive = outside, zero = on edge
     * @param x
     * @param y
     * @returns {number}
     */ function findNearestSignedDistance(x, y) {
                var closestDistSq = Infinity;
                var closestDist = Infinity;
                for(var i = segments.length; i--;){
                    var seg = segments[i];
                    if (seg.maxX + closestDist <= x) {
                        break;
                    } //sorting by maxX means no more can be closer, so we can short-circuit
                    if (x + closestDist > seg.minX && y - closestDist < seg.maxY && y + closestDist > seg.minY) {
                        var distSq = absSquareDistanceToLineSegment(x, y, seg.x1, seg.y1, seg.x2, seg.y2);
                        if (distSq < closestDistSq) {
                            closestDistSq = distSq;
                            closestDist = Math.sqrt(closestDistSq);
                        }
                    }
                }
                // Flip to negative distance if inside the poly
                if (isPointInPoly(x, y)) {
                    closestDist = -closestDist;
                }
                return closestDist;
            }
            /**
     * Determine whether the given point lies inside or outside the glyph. Uses a simple
     * winding-number ray casting algorithm using a ray pointing east from the point.
     */ function isPointInPoly(x, y) {
                var winding = 0;
                for(var i = segments.length; i--;){
                    var seg = segments[i];
                    if (seg.maxX <= x) {
                        break;
                    } //sorting by maxX means no more can cross, so we can short-circuit
                    var intersects = seg.y1 > y !== seg.y2 > y && x < (seg.x2 - seg.x1) * (y - seg.y1) / (seg.y2 - seg.y1) + seg.x1;
                    if (intersects) {
                        winding += seg.y1 < seg.y2 ? 1 : -1;
                    }
                }
                return winding !== 0;
            }
        }
        function generateIntoCanvas$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
        }
        function generateIntoFramebuffer$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            var data = generate$2(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent);
            // Expand single-channel data to rbga
            var rgbaData = new Uint8Array(data.length * 4);
            for(var i = 0; i < data.length; i++){
                rgbaData[i * 4 + channel] = data[i];
            }
            renderImageData(glOrCanvas, rgbaData, x, y, sdfWidth, sdfHeight, 1 << 3 - channel, framebuffer);
        }
        /**
   * Find the absolute distance from a point to a line segment at closest approach
   */ function absSquareDistanceToLineSegment(x, y, lineX0, lineY0, lineX1, lineY1) {
            var ldx = lineX1 - lineX0;
            var ldy = lineY1 - lineY0;
            var lengthSq = ldx * ldx + ldy * ldy;
            var t = lengthSq ? Math.max(0, Math.min(1, ((x - lineX0) * ldx + (y - lineY0) * ldy) / lengthSq)) : 0;
            var dx = x - (lineX0 + t * ldx);
            var dy = y - (lineY0 + t * ldy);
            return dx * dx + dy * dy;
        }
        var javascript = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            generate: generate$2,
            generateIntoCanvas: generateIntoCanvas$2,
            generateIntoFramebuffer: generateIntoFramebuffer$1
        });
        var mainVertex = "precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}";
        var mainFragment = "precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}";
        var postFragment = "precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}";
        // Single triangle covering viewport
        var viewportUVs = new Float32Array([
            0,
            0,
            2,
            0,
            0,
            2
        ]);
        var implicitContext = null;
        var isTestingSupport = false;
        var NULL_OBJECT = {};
        var supportByCanvas = new WeakMap(); // canvas -> bool
        function validateSupport(glOrCanvas) {
            if (!isTestingSupport && !isSupported(glOrCanvas)) {
                throw new Error('WebGL generation not supported');
            }
        }
        function generate$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (glOrCanvas === void 0) glOrCanvas = null;
            if (!glOrCanvas) {
                glOrCanvas = implicitContext;
                if (!glOrCanvas) {
                    var canvas = typeof OffscreenCanvas === 'function' ? new OffscreenCanvas(1, 1) : typeof document !== 'undefined' ? document.createElement('canvas') : null;
                    if (!canvas) {
                        throw new Error('OffscreenCanvas or DOM canvas not supported');
                    }
                    glOrCanvas = implicitContext = canvas.getContext('webgl', {
                        depth: false
                    });
                }
            }
            validateSupport(glOrCanvas);
            var rgbaData = new Uint8Array(sdfWidth * sdfHeight * 4); //not Uint8ClampedArray, cuz Safari
            // Render into a background texture framebuffer
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var withTexture = ref.withTexture;
                var withTextureFramebuffer = ref.withTextureFramebuffer;
                withTexture('readable', function(texture, textureUnit) {
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, sdfWidth, sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                    withTextureFramebuffer(texture, textureUnit, function(framebuffer) {
                        generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, gl, framebuffer, 0, 0, 0 // red channel
                        );
                        gl.readPixels(0, 0, sdfWidth, sdfHeight, gl.RGBA, gl.UNSIGNED_BYTE, rgbaData);
                    });
                });
            });
            // Throw away all but the red channel
            var data = new Uint8Array(sdfWidth * sdfHeight);
            for(var i = 0, j = 0; i < rgbaData.length; i += 4){
                data[j++] = rgbaData[i];
            }
            return data;
        }
        function generateIntoCanvas$1(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, null, x, y, channel);
        }
        function generateIntoFramebuffer(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, glOrCanvas, framebuffer, x, y, channel) {
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            // Verify support
            validateSupport(glOrCanvas);
            // Compute path segments
            var lineSegmentCoords = [];
            pathToLineSegments(path, function(x1, y1, x2, y2) {
                lineSegmentCoords.push(x1, y1, x2, y2);
            });
            lineSegmentCoords = new Float32Array(lineSegmentCoords);
            withWebGLContext(glOrCanvas, function(ref) {
                var gl = ref.gl;
                var isWebGL2 = ref.isWebGL2;
                var getExtension = ref.getExtension;
                var withProgram = ref.withProgram;
                var withTexture = ref.withTexture;
                var withTextureFramebuffer = ref.withTextureFramebuffer;
                var handleContextLoss = ref.handleContextLoss;
                withTexture('rawDistances', function(intermediateTexture, intermediateTextureUnit) {
                    if (sdfWidth !== intermediateTexture._lastWidth || sdfHeight !== intermediateTexture._lastHeight) {
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, intermediateTexture._lastWidth = sdfWidth, intermediateTexture._lastHeight = sdfHeight, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
                    }
                    // Unsigned distance pass
                    withProgram('main', mainVertex, mainFragment, function(ref) {
                        var setAttribute = ref.setAttribute;
                        var setUniform = ref.setUniform;
                        // Init extensions
                        var instancingExtension = !isWebGL2 && getExtension('ANGLE_instanced_arrays');
                        var blendMinMaxExtension = !isWebGL2 && getExtension('EXT_blend_minmax');
                        // Init/update attributes
                        setAttribute('aUV', 2, gl.STATIC_DRAW, 0, viewportUVs);
                        setAttribute('aLineSegment', 4, gl.DYNAMIC_DRAW, 1, lineSegmentCoords);
                        // Init/update uniforms
                        setUniform.apply(void 0, [
                            '4f',
                            'uGlyphBounds'
                        ].concat(viewBox));
                        setUniform('1f', 'uMaxDistance', maxDistance);
                        setUniform('1f', 'uExponent', sdfExponent);
                        // Render initial unsigned distance / winding number info to a texture
                        withTextureFramebuffer(intermediateTexture, intermediateTextureUnit, function(framebuffer) {
                            gl.enable(gl.BLEND);
                            gl.colorMask(true, true, true, true);
                            gl.viewport(0, 0, sdfWidth, sdfHeight);
                            gl.scissor(0, 0, sdfWidth, sdfHeight);
                            gl.blendFunc(gl.ONE, gl.ONE);
                            // Red+Green channels are incremented (FUNC_ADD) for segment-ray crossings to give a "winding number".
                            // Alpha holds the closest (MAX) unsigned distance.
                            gl.blendEquationSeparate(gl.FUNC_ADD, isWebGL2 ? gl.MAX : blendMinMaxExtension.MAX_EXT);
                            gl.clear(gl.COLOR_BUFFER_BIT);
                            if (isWebGL2) {
                                gl.drawArraysInstanced(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
                            } else {
                                instancingExtension.drawArraysInstancedANGLE(gl.TRIANGLES, 0, 3, lineSegmentCoords.length / 4);
                            }
                        // Debug
                        // const debug = new Uint8Array(sdfWidth * sdfHeight * 4)
                        // gl.readPixels(0, 0, sdfWidth, sdfHeight, gl.RGBA, gl.UNSIGNED_BYTE, debug)
                        // console.log('intermediate texture data: ', debug)
                        });
                    });
                    // Use the data stored in the texture to apply inside/outside and write to the output framebuffer rect+channel.
                    withProgram('post', viewportQuadVertex, postFragment, function(program) {
                        program.setAttribute('aUV', 2, gl.STATIC_DRAW, 0, viewportUVs);
                        program.setUniform('1i', 'tex', intermediateTextureUnit);
                        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
                        gl.disable(gl.BLEND);
                        gl.colorMask(channel === 0, channel === 1, channel === 2, channel === 3);
                        gl.viewport(x, y, sdfWidth, sdfHeight);
                        gl.scissor(x, y, sdfWidth, sdfHeight);
                        gl.drawArrays(gl.TRIANGLES, 0, 3);
                    });
                });
                // Handle context loss occurring during any of the above calls
                if (gl.isContextLost()) {
                    handleContextLoss();
                    throw new Error('webgl context lost');
                }
            });
        }
        function isSupported(glOrCanvas) {
            var key = !glOrCanvas || glOrCanvas === implicitContext ? NULL_OBJECT : glOrCanvas.canvas || glOrCanvas;
            var supported = supportByCanvas.get(key);
            if (supported === undefined) {
                isTestingSupport = true;
                var failReason = null;
                try {
                    // Since we can't detect all failure modes up front, let's just do a trial run of a
                    // simple path and compare what we get back to the correct expected result. This will
                    // also serve to prime the shader compilation.
                    var expectedResult = [
                        97,
                        106,
                        97,
                        61,
                        99,
                        137,
                        118,
                        80,
                        80,
                        118,
                        137,
                        99,
                        61,
                        97,
                        106,
                        97
                    ];
                    var testResult = generate$1(4, 4, 'M8,8L16,8L24,24L16,24Z', [
                        0,
                        0,
                        32,
                        32
                    ], 24, 1, glOrCanvas);
                    supported = testResult && expectedResult.length === testResult.length && testResult.every(function(val, i) {
                        return val === expectedResult[i];
                    });
                    if (!supported) {
                        failReason = 'bad trial run results';
                        console.info(expectedResult, testResult);
                    }
                } catch (err) {
                    // TODO if it threw due to webgl context loss, should we maybe leave isSupported as null and try again later?
                    supported = false;
                    failReason = err.message;
                }
                if (failReason) {
                    console.warn('WebGL SDF generation not supported:', failReason);
                }
                isTestingSupport = false;
                supportByCanvas.set(key, supported);
            }
            return supported;
        }
        var webgl = /*#__PURE__*/ Object.freeze({
            __proto__: null,
            generate: generate$1,
            generateIntoCanvas: generateIntoCanvas$1,
            generateIntoFramebuffer: generateIntoFramebuffer,
            isSupported: isSupported
        });
        /**
   * Generate an SDF texture image for a 2D path.
   *
   * @param {number} sdfWidth - width of the SDF output image in pixels.
   * @param {number} sdfHeight - height of the SDF output image in pixels.
   * @param {string} path - an SVG-like path string describing the glyph; should only contain commands: M/L/Q/C/Z.
   * @param {number[]} viewBox - [minX, minY, maxX, maxY] in font units aligning with the texture's edges.
   * @param {number} maxDistance - the maximum distance from the glyph path in font units that will be encoded; defaults
   *        to half the maximum viewBox dimension.
   * @param {number} [sdfExponent] - specifies an exponent for encoding the SDF's distance values; higher exponents
   *        will give greater precision nearer the glyph's path.
   * @return {Uint8Array}
   */ function generate(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent) {
            if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
            if (sdfExponent === void 0) sdfExponent = 1;
            try {
                return generate$1.apply(webgl, arguments);
            } catch (e) {
                console.info('WebGL SDF generation failed, falling back to JS', e);
                return generate$2.apply(javascript, arguments);
            }
        }
        /**
   * Generate an SDF texture image for a 2D path, inserting the result into a WebGL `canvas` at a given x/y position
   * and color channel. This is generally much faster than calling `generate` because it does not require reading pixels
   * back from the GPU->CPU -- the `canvas` can be used directly as a WebGL texture image, so it all stays on the GPU.
   *
   * @param {number} sdfWidth - width of the SDF output image in pixels.
   * @param {number} sdfHeight - height of the SDF output image in pixels.
   * @param {string} path - an SVG-like path string describing the glyph; should only contain commands: M/L/Q/C/Z.
   * @param {number[]} viewBox - [minX, minY, maxX, maxY] in font units aligning with the texture's edges.
   * @param {number} maxDistance - the maximum distance from the glyph path in font units that will be encoded; defaults
   *        to half the maximum viewBox dimension.
   * @param {number} [sdfExponent] - specifies an exponent for encoding the SDF's distance values; higher exponents
   *        will give greater precision nearer the glyph's path.
   * @param {HTMLCanvasElement|OffscreenCanvas} canvas - a WebGL-enabled canvas into which the SDF will be rendered.
   *        Only the relevant rect/channel will be modified, the rest will be preserved. To avoid unpredictable results
   *        due to shared GL context state, this canvas should be dedicated to use by this library alone.
   * @param {number} x - the x position at which to render the SDF.
   * @param {number} y - the y position at which to render the SDF.
   * @param {number} channel - the color channel index (0-4) into which the SDF will be rendered.
   * @return {Uint8Array}
   */ function generateIntoCanvas(sdfWidth, sdfHeight, path, viewBox, maxDistance, sdfExponent, canvas, x, y, channel) {
            if (maxDistance === void 0) maxDistance = Math.max(viewBox[2] - viewBox[0], viewBox[3] - viewBox[1]) / 2;
            if (sdfExponent === void 0) sdfExponent = 1;
            if (x === void 0) x = 0;
            if (y === void 0) y = 0;
            if (channel === void 0) channel = 0;
            try {
                return generateIntoCanvas$1.apply(webgl, arguments);
            } catch (e) {
                console.info('WebGL SDF generation failed, falling back to JS', e);
                return generateIntoCanvas$2.apply(javascript, arguments);
            }
        }
        exports.forEachPathCommand = forEachPathCommand;
        exports.generate = generate;
        exports.generateIntoCanvas = generateIntoCanvas;
        exports.javascript = javascript;
        exports.pathToLineSegments = pathToLineSegments;
        exports.webgl = webgl;
        exports.webglUtils = webglUtils;
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        return exports;
    }({});
    return exports;
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/bidi-js@1.0.3/node_modules/bidi-js/dist/bidi.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function bidiFactory() {
    var bidi = function(exports) {
        // Bidi character types data, auto generated
        var DATA = {
            "R": "13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",
            "EN": "1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",
            "ES": "17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",
            "ET": "z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",
            "AN": "16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",
            "CS": "18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",
            "B": "a,3,f+2,2v,690",
            "S": "9,2,k",
            "WS": "c,k,4f4,1vk+a,u,1j,335",
            "ON": "x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",
            "BN": "0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",
            "NSM": "lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",
            "AL": "16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",
            "LRO": "6ct",
            "RLO": "6cu",
            "LRE": "6cq",
            "RLE": "6cr",
            "PDF": "6cs",
            "LRI": "6ee",
            "RLI": "6ef",
            "FSI": "6eg",
            "PDI": "6eh"
        };
        var TYPES = {};
        var TYPES_TO_NAMES = {};
        TYPES.L = 1; //L is the default
        TYPES_TO_NAMES[1] = 'L';
        Object.keys(DATA).forEach(function(type, i) {
            TYPES[type] = 1 << i + 1;
            TYPES_TO_NAMES[TYPES[type]] = type;
        });
        Object.freeze(TYPES);
        var ISOLATE_INIT_TYPES = TYPES.LRI | TYPES.RLI | TYPES.FSI;
        var STRONG_TYPES = TYPES.L | TYPES.R | TYPES.AL;
        var NEUTRAL_ISOLATE_TYPES = TYPES.B | TYPES.S | TYPES.WS | TYPES.ON | TYPES.FSI | TYPES.LRI | TYPES.RLI | TYPES.PDI;
        var BN_LIKE_TYPES = TYPES.BN | TYPES.RLE | TYPES.LRE | TYPES.RLO | TYPES.LRO | TYPES.PDF;
        var TRAILING_TYPES = TYPES.S | TYPES.WS | TYPES.B | ISOLATE_INIT_TYPES | TYPES.PDI | BN_LIKE_TYPES;
        var map = null;
        function parseData() {
            if (!map) {
                //const start = performance.now()
                map = new Map();
                var loop = function(type) {
                    if (DATA.hasOwnProperty(type)) {
                        var lastCode = 0;
                        DATA[type].split(',').forEach(function(range) {
                            var ref = range.split('+');
                            var skip = ref[0];
                            var step = ref[1];
                            skip = parseInt(skip, 36);
                            step = step ? parseInt(step, 36) : 0;
                            map.set(lastCode += skip, TYPES[type]);
                            for(var i = 0; i < step; i++){
                                map.set(++lastCode, TYPES[type]);
                            }
                        });
                    }
                };
                for(var type in DATA)loop(type);
            //console.log(`char types parsed in ${performance.now() - start}ms`)
            }
        }
        /**
   * @param {string} char
   * @return {number}
   */ function getBidiCharType(char) {
            parseData();
            return map.get(char.codePointAt(0)) || TYPES.L;
        }
        function getBidiCharTypeName(char) {
            return TYPES_TO_NAMES[getBidiCharType(char)];
        }
        // Bidi bracket pairs data, auto generated
        var data$1 = {
            "pairs": "14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",
            "canonical": "6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"
        };
        /**
   * Parses an string that holds encoded codepoint mappings, e.g. for bracket pairs or
   * mirroring characters, as encoded by scripts/generateBidiData.js. Returns an object
   * holding the `map`, and optionally a `reverseMap` if `includeReverse:true`.
   * @param {string} encodedString
   * @param {boolean} includeReverse - true if you want reverseMap in the output
   * @return {{map: Map<number, number>, reverseMap?: Map<number, number>}}
   */ function parseCharacterMap(encodedString, includeReverse) {
            var radix = 36;
            var lastCode = 0;
            var map = new Map();
            var reverseMap = includeReverse && new Map();
            var prevPair;
            encodedString.split(',').forEach(function visit(entry) {
                if (entry.indexOf('+') !== -1) {
                    for(var i = +entry; i--;){
                        visit(prevPair);
                    }
                } else {
                    prevPair = entry;
                    var ref = entry.split('>');
                    var a = ref[0];
                    var b = ref[1];
                    a = String.fromCodePoint(lastCode += parseInt(a, radix));
                    b = String.fromCodePoint(lastCode += parseInt(b, radix));
                    map.set(a, b);
                    includeReverse && reverseMap.set(b, a);
                }
            });
            return {
                map: map,
                reverseMap: reverseMap
            };
        }
        var openToClose, closeToOpen, canonical;
        function parse$1() {
            if (!openToClose) {
                //const start = performance.now()
                var ref = parseCharacterMap(data$1.pairs, true);
                var map = ref.map;
                var reverseMap = ref.reverseMap;
                openToClose = map;
                closeToOpen = reverseMap;
                canonical = parseCharacterMap(data$1.canonical, false).map;
            //console.log(`brackets parsed in ${performance.now() - start}ms`)
            }
        }
        function openingToClosingBracket(char) {
            parse$1();
            return openToClose.get(char) || null;
        }
        function closingToOpeningBracket(char) {
            parse$1();
            return closeToOpen.get(char) || null;
        }
        function getCanonicalBracket(char) {
            parse$1();
            return canonical.get(char) || null;
        }
        // Local type aliases
        var TYPE_L = TYPES.L;
        var TYPE_R = TYPES.R;
        var TYPE_EN = TYPES.EN;
        var TYPE_ES = TYPES.ES;
        var TYPE_ET = TYPES.ET;
        var TYPE_AN = TYPES.AN;
        var TYPE_CS = TYPES.CS;
        var TYPE_B = TYPES.B;
        var TYPE_S = TYPES.S;
        var TYPE_ON = TYPES.ON;
        var TYPE_BN = TYPES.BN;
        var TYPE_NSM = TYPES.NSM;
        var TYPE_AL = TYPES.AL;
        var TYPE_LRO = TYPES.LRO;
        var TYPE_RLO = TYPES.RLO;
        var TYPE_LRE = TYPES.LRE;
        var TYPE_RLE = TYPES.RLE;
        var TYPE_PDF = TYPES.PDF;
        var TYPE_LRI = TYPES.LRI;
        var TYPE_RLI = TYPES.RLI;
        var TYPE_FSI = TYPES.FSI;
        var TYPE_PDI = TYPES.PDI;
        /**
   * @typedef {object} GetEmbeddingLevelsResult
   * @property {{start, end, level}[]} paragraphs
   * @property {Uint8Array} levels
   */ /**
   * This function applies the Bidirectional Algorithm to a string, returning the resolved embedding levels
   * in a single Uint8Array plus a list of objects holding each paragraph's start and end indices and resolved
   * base embedding level.
   *
   * @param {string} string - The input string
   * @param {"ltr"|"rtl"|"auto"} [baseDirection] - Use "ltr" or "rtl" to force a base paragraph direction,
   *        otherwise a direction will be chosen automatically from each paragraph's contents.
   * @return {GetEmbeddingLevelsResult}
   */ function getEmbeddingLevels(string, baseDirection) {
            var MAX_DEPTH = 125;
            // Start by mapping all characters to their unicode type, as a bitmask integer
            var charTypes = new Uint32Array(string.length);
            for(var i = 0; i < string.length; i++){
                charTypes[i] = getBidiCharType(string[i]);
            }
            var charTypeCounts = new Map(); //will be cleared at start of each paragraph
            function changeCharType(i, type) {
                var oldType = charTypes[i];
                charTypes[i] = type;
                charTypeCounts.set(oldType, charTypeCounts.get(oldType) - 1);
                if (oldType & NEUTRAL_ISOLATE_TYPES) {
                    charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) - 1);
                }
                charTypeCounts.set(type, (charTypeCounts.get(type) || 0) + 1);
                if (type & NEUTRAL_ISOLATE_TYPES) {
                    charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
                }
            }
            var embedLevels = new Uint8Array(string.length);
            var isolationPairs = new Map(); //init->pdi and pdi->init
            // === 3.3.1 The Paragraph Level ===
            // 3.3.1 P1: Split the text into paragraphs
            var paragraphs = []; // [{start, end, level}, ...]
            var paragraph = null;
            for(var i$1 = 0; i$1 < string.length; i$1++){
                if (!paragraph) {
                    paragraphs.push(paragraph = {
                        start: i$1,
                        end: string.length - 1,
                        // 3.3.1 P2-P3: Determine the paragraph level
                        level: baseDirection === 'rtl' ? 1 : baseDirection === 'ltr' ? 0 : determineAutoEmbedLevel(i$1, false)
                    });
                }
                if (charTypes[i$1] & TYPE_B) {
                    paragraph.end = i$1;
                    paragraph = null;
                }
            }
            var FORMATTING_TYPES = TYPE_RLE | TYPE_LRE | TYPE_RLO | TYPE_LRO | ISOLATE_INIT_TYPES | TYPE_PDI | TYPE_PDF | TYPE_B;
            var nextEven = function(n) {
                return n + (n & 1 ? 1 : 2);
            };
            var nextOdd = function(n) {
                return n + (n & 1 ? 2 : 1);
            };
            // Everything from here on will operate per paragraph.
            for(var paraIdx = 0; paraIdx < paragraphs.length; paraIdx++){
                paragraph = paragraphs[paraIdx];
                var statusStack = [
                    {
                        _level: paragraph.level,
                        _override: 0,
                        _isolate: 0 //bool
                    }
                ];
                var stackTop = void 0;
                var overflowIsolateCount = 0;
                var overflowEmbeddingCount = 0;
                var validIsolateCount = 0;
                charTypeCounts.clear();
                // === 3.3.2 Explicit Levels and Directions ===
                for(var i$2 = paragraph.start; i$2 <= paragraph.end; i$2++){
                    var charType = charTypes[i$2];
                    stackTop = statusStack[statusStack.length - 1];
                    // Set initial counts
                    charTypeCounts.set(charType, (charTypeCounts.get(charType) || 0) + 1);
                    if (charType & NEUTRAL_ISOLATE_TYPES) {
                        charTypeCounts.set(NEUTRAL_ISOLATE_TYPES, (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES) || 0) + 1);
                    }
                    // Explicit Embeddings: 3.3.2 X2 - X3
                    if (charType & FORMATTING_TYPES) {
                        if (charType & (TYPE_RLE | TYPE_LRE)) {
                            embedLevels[i$2] = stackTop._level; // 5.2
                            var level = (charType === TYPE_RLE ? nextOdd : nextEven)(stackTop._level);
                            if (level <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) {
                                statusStack.push({
                                    _level: level,
                                    _override: 0,
                                    _isolate: 0
                                });
                            } else if (!overflowIsolateCount) {
                                overflowEmbeddingCount++;
                            }
                        } else if (charType & (TYPE_RLO | TYPE_LRO)) {
                            embedLevels[i$2] = stackTop._level; // 5.2
                            var level$1 = (charType === TYPE_RLO ? nextOdd : nextEven)(stackTop._level);
                            if (level$1 <= MAX_DEPTH && !overflowIsolateCount && !overflowEmbeddingCount) {
                                statusStack.push({
                                    _level: level$1,
                                    _override: charType & TYPE_RLO ? TYPE_R : TYPE_L,
                                    _isolate: 0
                                });
                            } else if (!overflowIsolateCount) {
                                overflowEmbeddingCount++;
                            }
                        } else if (charType & ISOLATE_INIT_TYPES) {
                            // X5c - FSI becomes either RLI or LRI
                            if (charType & TYPE_FSI) {
                                charType = determineAutoEmbedLevel(i$2 + 1, true) === 1 ? TYPE_RLI : TYPE_LRI;
                            }
                            embedLevels[i$2] = stackTop._level;
                            if (stackTop._override) {
                                changeCharType(i$2, stackTop._override);
                            }
                            var level$2 = (charType === TYPE_RLI ? nextOdd : nextEven)(stackTop._level);
                            if (level$2 <= MAX_DEPTH && overflowIsolateCount === 0 && overflowEmbeddingCount === 0) {
                                validIsolateCount++;
                                statusStack.push({
                                    _level: level$2,
                                    _override: 0,
                                    _isolate: 1,
                                    _isolInitIndex: i$2
                                });
                            } else {
                                overflowIsolateCount++;
                            }
                        } else if (charType & TYPE_PDI) {
                            if (overflowIsolateCount > 0) {
                                overflowIsolateCount--;
                            } else if (validIsolateCount > 0) {
                                overflowEmbeddingCount = 0;
                                while(!statusStack[statusStack.length - 1]._isolate){
                                    statusStack.pop();
                                }
                                // Add to isolation pairs bidirectional mapping:
                                var isolInitIndex = statusStack[statusStack.length - 1]._isolInitIndex;
                                if (isolInitIndex != null) {
                                    isolationPairs.set(isolInitIndex, i$2);
                                    isolationPairs.set(i$2, isolInitIndex);
                                }
                                statusStack.pop();
                                validIsolateCount--;
                            }
                            stackTop = statusStack[statusStack.length - 1];
                            embedLevels[i$2] = stackTop._level;
                            if (stackTop._override) {
                                changeCharType(i$2, stackTop._override);
                            }
                        } else if (charType & TYPE_PDF) {
                            if (overflowIsolateCount === 0) {
                                if (overflowEmbeddingCount > 0) {
                                    overflowEmbeddingCount--;
                                } else if (!stackTop._isolate && statusStack.length > 1) {
                                    statusStack.pop();
                                    stackTop = statusStack[statusStack.length - 1];
                                }
                            }
                            embedLevels[i$2] = stackTop._level; // 5.2
                        } else if (charType & TYPE_B) {
                            embedLevels[i$2] = paragraph.level;
                        }
                    } else {
                        embedLevels[i$2] = stackTop._level;
                        // NOTE: This exclusion of BN seems to go against what section 5.2 says, but is required for test passage
                        if (stackTop._override && charType !== TYPE_BN) {
                            changeCharType(i$2, stackTop._override);
                        }
                    }
                }
                // === 3.3.3 Preparations for Implicit Processing ===
                // Remove all RLE, LRE, RLO, LRO, PDF, and BN characters: 3.3.3 X9
                // Note: Due to section 5.2, we won't remove them, but we'll use the BN_LIKE_TYPES bitset to
                // easily ignore them all from here on out.
                // 3.3.3 X10
                // Compute the set of isolating run sequences as specified by BD13
                var levelRuns = [];
                var currentRun = null;
                for(var i$3 = paragraph.start; i$3 <= paragraph.end; i$3++){
                    var charType$1 = charTypes[i$3];
                    if (!(charType$1 & BN_LIKE_TYPES)) {
                        var lvl = embedLevels[i$3];
                        var isIsolInit = charType$1 & ISOLATE_INIT_TYPES;
                        var isPDI = charType$1 === TYPE_PDI;
                        if (currentRun && lvl === currentRun._level) {
                            currentRun._end = i$3;
                            currentRun._endsWithIsolInit = isIsolInit;
                        } else {
                            levelRuns.push(currentRun = {
                                _start: i$3,
                                _end: i$3,
                                _level: lvl,
                                _startsWithPDI: isPDI,
                                _endsWithIsolInit: isIsolInit
                            });
                        }
                    }
                }
                var isolatingRunSeqs = []; // [{seqIndices: [], sosType: L|R, eosType: L|R}]
                for(var runIdx = 0; runIdx < levelRuns.length; runIdx++){
                    var run = levelRuns[runIdx];
                    if (!run._startsWithPDI || run._startsWithPDI && !isolationPairs.has(run._start)) {
                        var seqRuns = [
                            currentRun = run
                        ];
                        for(var pdiIndex = void 0; currentRun && currentRun._endsWithIsolInit && (pdiIndex = isolationPairs.get(currentRun._end)) != null;){
                            for(var i$4 = runIdx + 1; i$4 < levelRuns.length; i$4++){
                                if (levelRuns[i$4]._start === pdiIndex) {
                                    seqRuns.push(currentRun = levelRuns[i$4]);
                                    break;
                                }
                            }
                        }
                        // build flat list of indices across all runs:
                        var seqIndices = [];
                        for(var i$5 = 0; i$5 < seqRuns.length; i$5++){
                            var run$1 = seqRuns[i$5];
                            for(var j = run$1._start; j <= run$1._end; j++){
                                seqIndices.push(j);
                            }
                        }
                        // determine the sos/eos types:
                        var firstLevel = embedLevels[seqIndices[0]];
                        var prevLevel = paragraph.level;
                        for(var i$6 = seqIndices[0] - 1; i$6 >= 0; i$6--){
                            if (!(charTypes[i$6] & BN_LIKE_TYPES)) {
                                prevLevel = embedLevels[i$6];
                                break;
                            }
                        }
                        var lastIndex = seqIndices[seqIndices.length - 1];
                        var lastLevel = embedLevels[lastIndex];
                        var nextLevel = paragraph.level;
                        if (!(charTypes[lastIndex] & ISOLATE_INIT_TYPES)) {
                            for(var i$7 = lastIndex + 1; i$7 <= paragraph.end; i$7++){
                                if (!(charTypes[i$7] & BN_LIKE_TYPES)) {
                                    nextLevel = embedLevels[i$7];
                                    break;
                                }
                            }
                        }
                        isolatingRunSeqs.push({
                            _seqIndices: seqIndices,
                            _sosType: Math.max(prevLevel, firstLevel) % 2 ? TYPE_R : TYPE_L,
                            _eosType: Math.max(nextLevel, lastLevel) % 2 ? TYPE_R : TYPE_L
                        });
                    }
                }
                // The next steps are done per isolating run sequence
                for(var seqIdx = 0; seqIdx < isolatingRunSeqs.length; seqIdx++){
                    var ref = isolatingRunSeqs[seqIdx];
                    var seqIndices$1 = ref._seqIndices;
                    var sosType = ref._sosType;
                    var eosType = ref._eosType;
                    /**
         * All the level runs in an isolating run sequence have the same embedding level.
         * 
         * DO NOT change any `embedLevels[i]` within the current scope.
         */ var embedDirection = embedLevels[seqIndices$1[0]] & 1 ? TYPE_R : TYPE_L;
                    // === 3.3.4 Resolving Weak Types ===
                    // W1 + 5.2. Search backward from each NSM to the first character in the isolating run sequence whose
                    // bidirectional type is not BN, and set the NSM to ON if it is an isolate initiator or PDI, and to its
                    // type otherwise. If the NSM is the first non-BN character, change the NSM to the type of sos.
                    if (charTypeCounts.get(TYPE_NSM)) {
                        for(var si = 0; si < seqIndices$1.length; si++){
                            var i$8 = seqIndices$1[si];
                            if (charTypes[i$8] & TYPE_NSM) {
                                var prevType = sosType;
                                for(var sj = si - 1; sj >= 0; sj--){
                                    if (!(charTypes[seqIndices$1[sj]] & BN_LIKE_TYPES)) {
                                        prevType = charTypes[seqIndices$1[sj]];
                                        break;
                                    }
                                }
                                changeCharType(i$8, prevType & (ISOLATE_INIT_TYPES | TYPE_PDI) ? TYPE_ON : prevType);
                            }
                        }
                    }
                    // W2. Search backward from each instance of a European number until the first strong type (R, L, AL, or sos)
                    // is found. If an AL is found, change the type of the European number to Arabic number.
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$1 = 0; si$1 < seqIndices$1.length; si$1++){
                            var i$9 = seqIndices$1[si$1];
                            if (charTypes[i$9] & TYPE_EN) {
                                for(var sj$1 = si$1 - 1; sj$1 >= -1; sj$1--){
                                    var prevCharType = sj$1 === -1 ? sosType : charTypes[seqIndices$1[sj$1]];
                                    if (prevCharType & STRONG_TYPES) {
                                        if (prevCharType === TYPE_AL) {
                                            changeCharType(i$9, TYPE_AN);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    // W3. Change all ALs to R
                    if (charTypeCounts.get(TYPE_AL)) {
                        for(var si$2 = 0; si$2 < seqIndices$1.length; si$2++){
                            var i$10 = seqIndices$1[si$2];
                            if (charTypes[i$10] & TYPE_AL) {
                                changeCharType(i$10, TYPE_R);
                            }
                        }
                    }
                    // W4. A single European separator between two European numbers changes to a European number. A single common
                    // separator between two numbers of the same type changes to that type.
                    if (charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) {
                        for(var si$3 = 1; si$3 < seqIndices$1.length - 1; si$3++){
                            var i$11 = seqIndices$1[si$3];
                            if (charTypes[i$11] & (TYPE_ES | TYPE_CS)) {
                                var prevType$1 = 0, nextType = 0;
                                for(var sj$2 = si$3 - 1; sj$2 >= 0; sj$2--){
                                    prevType$1 = charTypes[seqIndices$1[sj$2]];
                                    if (!(prevType$1 & BN_LIKE_TYPES)) {
                                        break;
                                    }
                                }
                                for(var sj$3 = si$3 + 1; sj$3 < seqIndices$1.length; sj$3++){
                                    nextType = charTypes[seqIndices$1[sj$3]];
                                    if (!(nextType & BN_LIKE_TYPES)) {
                                        break;
                                    }
                                }
                                if (prevType$1 === nextType && (charTypes[i$11] === TYPE_ES ? prevType$1 === TYPE_EN : prevType$1 & (TYPE_EN | TYPE_AN))) {
                                    changeCharType(i$11, prevType$1);
                                }
                            }
                        }
                    }
                    // W5. A sequence of European terminators adjacent to European numbers changes to all European numbers.
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$4 = 0; si$4 < seqIndices$1.length; si$4++){
                            var i$12 = seqIndices$1[si$4];
                            if (charTypes[i$12] & TYPE_EN) {
                                for(var sj$4 = si$4 - 1; sj$4 >= 0 && charTypes[seqIndices$1[sj$4]] & (TYPE_ET | BN_LIKE_TYPES); sj$4--){
                                    changeCharType(seqIndices$1[sj$4], TYPE_EN);
                                }
                                for(si$4++; si$4 < seqIndices$1.length && charTypes[seqIndices$1[si$4]] & (TYPE_ET | BN_LIKE_TYPES | TYPE_EN); si$4++){
                                    if (charTypes[seqIndices$1[si$4]] !== TYPE_EN) {
                                        changeCharType(seqIndices$1[si$4], TYPE_EN);
                                    }
                                }
                            }
                        }
                    }
                    // W6. Otherwise, separators and terminators change to Other Neutral.
                    if (charTypeCounts.get(TYPE_ET) || charTypeCounts.get(TYPE_ES) || charTypeCounts.get(TYPE_CS)) {
                        for(var si$5 = 0; si$5 < seqIndices$1.length; si$5++){
                            var i$13 = seqIndices$1[si$5];
                            if (charTypes[i$13] & (TYPE_ET | TYPE_ES | TYPE_CS)) {
                                changeCharType(i$13, TYPE_ON);
                                // 5.2 transform adjacent BNs too:
                                for(var sj$5 = si$5 - 1; sj$5 >= 0 && charTypes[seqIndices$1[sj$5]] & BN_LIKE_TYPES; sj$5--){
                                    changeCharType(seqIndices$1[sj$5], TYPE_ON);
                                }
                                for(var sj$6 = si$5 + 1; sj$6 < seqIndices$1.length && charTypes[seqIndices$1[sj$6]] & BN_LIKE_TYPES; sj$6++){
                                    changeCharType(seqIndices$1[sj$6], TYPE_ON);
                                }
                            }
                        }
                    }
                    // W7. Search backward from each instance of a European number until the first strong type (R, L, or sos)
                    // is found. If an L is found, then change the type of the European number to L.
                    // NOTE: implemented in single forward pass for efficiency
                    if (charTypeCounts.get(TYPE_EN)) {
                        for(var si$6 = 0, prevStrongType = sosType; si$6 < seqIndices$1.length; si$6++){
                            var i$14 = seqIndices$1[si$6];
                            var type = charTypes[i$14];
                            if (type & TYPE_EN) {
                                if (prevStrongType === TYPE_L) {
                                    changeCharType(i$14, TYPE_L);
                                }
                            } else if (type & STRONG_TYPES) {
                                prevStrongType = type;
                            }
                        }
                    }
                    // === 3.3.5 Resolving Neutral and Isolate Formatting Types ===
                    if (charTypeCounts.get(NEUTRAL_ISOLATE_TYPES)) {
                        // N0. Process bracket pairs in an isolating run sequence sequentially in the logical order of the text
                        // positions of the opening paired brackets using the logic given below. Within this scope, bidirectional
                        // types EN and AN are treated as R.
                        var R_TYPES_FOR_N_STEPS = TYPE_R | TYPE_EN | TYPE_AN;
                        var STRONG_TYPES_FOR_N_STEPS = R_TYPES_FOR_N_STEPS | TYPE_L;
                        // * Identify the bracket pairs in the current isolating run sequence according to BD16.
                        var bracketPairs = [];
                        {
                            var openerStack = [];
                            for(var si$7 = 0; si$7 < seqIndices$1.length; si$7++){
                                // NOTE: for any potential bracket character we also test that it still carries a NI
                                // type, as that may have been changed earlier. This doesn't seem to be explicitly
                                // called out in the spec, but is required for passage of certain tests.
                                if (charTypes[seqIndices$1[si$7]] & NEUTRAL_ISOLATE_TYPES) {
                                    var char = string[seqIndices$1[si$7]];
                                    var oppositeBracket = void 0;
                                    // Opening bracket
                                    if (openingToClosingBracket(char) !== null) {
                                        if (openerStack.length < 63) {
                                            openerStack.push({
                                                char: char,
                                                seqIndex: si$7
                                            });
                                        } else {
                                            break;
                                        }
                                    } else if ((oppositeBracket = closingToOpeningBracket(char)) !== null) {
                                        for(var stackIdx = openerStack.length - 1; stackIdx >= 0; stackIdx--){
                                            var stackChar = openerStack[stackIdx].char;
                                            if (stackChar === oppositeBracket || stackChar === closingToOpeningBracket(getCanonicalBracket(char)) || openingToClosingBracket(getCanonicalBracket(stackChar)) === char) {
                                                bracketPairs.push([
                                                    openerStack[stackIdx].seqIndex,
                                                    si$7
                                                ]);
                                                openerStack.length = stackIdx; //pop the matching bracket and all following
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            bracketPairs.sort(function(a, b) {
                                return a[0] - b[0];
                            });
                        }
                        // * For each bracket-pair element in the list of pairs of text positions
                        for(var pairIdx = 0; pairIdx < bracketPairs.length; pairIdx++){
                            var ref$1 = bracketPairs[pairIdx];
                            var openSeqIdx = ref$1[0];
                            var closeSeqIdx = ref$1[1];
                            // a. Inspect the bidirectional types of the characters enclosed within the bracket pair.
                            // b. If any strong type (either L or R) matching the embedding direction is found, set the type for both
                            // brackets in the pair to match the embedding direction.
                            var foundStrongType = false;
                            var useStrongType = 0;
                            for(var si$8 = openSeqIdx + 1; si$8 < closeSeqIdx; si$8++){
                                var i$15 = seqIndices$1[si$8];
                                if (charTypes[i$15] & STRONG_TYPES_FOR_N_STEPS) {
                                    foundStrongType = true;
                                    var lr = charTypes[i$15] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                    if (lr === embedDirection) {
                                        useStrongType = lr;
                                        break;
                                    }
                                }
                            }
                            // c. Otherwise, if there is a strong type it must be opposite the embedding direction. Therefore, test
                            // for an established context with a preceding strong type by checking backwards before the opening paired
                            // bracket until the first strong type (L, R, or sos) is found.
                            //    1. If the preceding strong type is also opposite the embedding direction, context is established, so
                            //    set the type for both brackets in the pair to that direction.
                            //    2. Otherwise set the type for both brackets in the pair to the embedding direction.
                            if (foundStrongType && !useStrongType) {
                                useStrongType = sosType;
                                for(var si$9 = openSeqIdx - 1; si$9 >= 0; si$9--){
                                    var i$16 = seqIndices$1[si$9];
                                    if (charTypes[i$16] & STRONG_TYPES_FOR_N_STEPS) {
                                        var lr$1 = charTypes[i$16] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        if (lr$1 !== embedDirection) {
                                            useStrongType = lr$1;
                                        } else {
                                            useStrongType = embedDirection;
                                        }
                                        break;
                                    }
                                }
                            }
                            if (useStrongType) {
                                charTypes[seqIndices$1[openSeqIdx]] = charTypes[seqIndices$1[closeSeqIdx]] = useStrongType;
                                // * Any number of characters that had original bidirectional character type NSM prior to the application
                                // of W1 that immediately follow a paired bracket which changed to L or R under N0 should change to match
                                // the type of their preceding bracket.
                                if (useStrongType !== embedDirection) {
                                    for(var si$10 = openSeqIdx + 1; si$10 < seqIndices$1.length; si$10++){
                                        if (!(charTypes[seqIndices$1[si$10]] & BN_LIKE_TYPES)) {
                                            if (getBidiCharType(string[seqIndices$1[si$10]]) & TYPE_NSM) {
                                                charTypes[seqIndices$1[si$10]] = useStrongType;
                                            }
                                            break;
                                        }
                                    }
                                }
                                if (useStrongType !== embedDirection) {
                                    for(var si$11 = closeSeqIdx + 1; si$11 < seqIndices$1.length; si$11++){
                                        if (!(charTypes[seqIndices$1[si$11]] & BN_LIKE_TYPES)) {
                                            if (getBidiCharType(string[seqIndices$1[si$11]]) & TYPE_NSM) {
                                                charTypes[seqIndices$1[si$11]] = useStrongType;
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                        // N1. A sequence of NIs takes the direction of the surrounding strong text if the text on both sides has the
                        // same direction.
                        // N2. Any remaining NIs take the embedding direction.
                        for(var si$12 = 0; si$12 < seqIndices$1.length; si$12++){
                            if (charTypes[seqIndices$1[si$12]] & NEUTRAL_ISOLATE_TYPES) {
                                var niRunStart = si$12, niRunEnd = si$12;
                                var prevType$2 = sosType; //si === 0 ? sosType : (charTypes[seqIndices[si - 1]] & R_TYPES_FOR_N_STEPS) ? TYPE_R : TYPE_L
                                for(var si2 = si$12 - 1; si2 >= 0; si2--){
                                    if (charTypes[seqIndices$1[si2]] & BN_LIKE_TYPES) {
                                        niRunStart = si2; //5.2 treat BNs adjacent to NIs as NIs
                                    } else {
                                        prevType$2 = charTypes[seqIndices$1[si2]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        break;
                                    }
                                }
                                var nextType$1 = eosType;
                                for(var si2$1 = si$12 + 1; si2$1 < seqIndices$1.length; si2$1++){
                                    if (charTypes[seqIndices$1[si2$1]] & (NEUTRAL_ISOLATE_TYPES | BN_LIKE_TYPES)) {
                                        niRunEnd = si2$1;
                                    } else {
                                        nextType$1 = charTypes[seqIndices$1[si2$1]] & R_TYPES_FOR_N_STEPS ? TYPE_R : TYPE_L;
                                        break;
                                    }
                                }
                                for(var sj$7 = niRunStart; sj$7 <= niRunEnd; sj$7++){
                                    charTypes[seqIndices$1[sj$7]] = prevType$2 === nextType$1 ? prevType$2 : embedDirection;
                                }
                                si$12 = niRunEnd;
                            }
                        }
                    }
                }
                // === 3.3.6 Resolving Implicit Levels ===
                for(var i$17 = paragraph.start; i$17 <= paragraph.end; i$17++){
                    var level$3 = embedLevels[i$17];
                    var type$1 = charTypes[i$17];
                    // I2. For all characters with an odd (right-to-left) embedding level, those of type L, EN or AN go up one level.
                    if (level$3 & 1) {
                        if (type$1 & (TYPE_L | TYPE_EN | TYPE_AN)) {
                            embedLevels[i$17]++;
                        }
                    } else {
                        if (type$1 & TYPE_R) {
                            embedLevels[i$17]++;
                        } else if (type$1 & (TYPE_AN | TYPE_EN)) {
                            embedLevels[i$17] += 2;
                        }
                    }
                    // 5.2: Resolve any LRE, RLE, LRO, RLO, PDF, or BN to the level of the preceding character if there is one,
                    // and otherwise to the base level.
                    if (type$1 & BN_LIKE_TYPES) {
                        embedLevels[i$17] = i$17 === 0 ? paragraph.level : embedLevels[i$17 - 1];
                    }
                    // 3.4 L1.1-4: Reset the embedding level of segment/paragraph separators, and any sequence of whitespace or
                    // isolate formatting characters preceding them or the end of the paragraph, to the paragraph level.
                    // NOTE: this will also need to be applied to each individual line ending after line wrapping occurs.
                    if (i$17 === paragraph.end || getBidiCharType(string[i$17]) & (TYPE_S | TYPE_B)) {
                        for(var j$1 = i$17; j$1 >= 0 && getBidiCharType(string[j$1]) & TRAILING_TYPES; j$1--){
                            embedLevels[j$1] = paragraph.level;
                        }
                    }
                }
            }
            // DONE! The resolved levels can then be used, after line wrapping, to flip runs of characters
            // according to section 3.4 Reordering Resolved Levels
            return {
                levels: embedLevels,
                paragraphs: paragraphs
            };
            //TURBOPACK unreachable
            ;
            function determineAutoEmbedLevel(start, isFSI) {
                // 3.3.1 P2 - P3
                for(var i = start; i < string.length; i++){
                    var charType = charTypes[i];
                    if (charType & (TYPE_R | TYPE_AL)) {
                        return 1;
                    }
                    if (charType & (TYPE_B | TYPE_L) || isFSI && charType === TYPE_PDI) {
                        return 0;
                    }
                    if (charType & ISOLATE_INIT_TYPES) {
                        var pdi = indexOfMatchingPDI(i);
                        i = pdi === -1 ? string.length : pdi;
                    }
                }
                return 0;
            }
            function indexOfMatchingPDI(isolateStart) {
                // 3.1.2 BD9
                var isolationLevel = 1;
                for(var i = isolateStart + 1; i < string.length; i++){
                    var charType = charTypes[i];
                    if (charType & TYPE_B) {
                        break;
                    }
                    if (charType & TYPE_PDI) {
                        if (--isolationLevel === 0) {
                            return i;
                        }
                    } else if (charType & ISOLATE_INIT_TYPES) {
                        isolationLevel++;
                    }
                }
                return -1;
            }
        }
        // Bidi mirrored chars data, auto generated
        var data = "14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1";
        var mirrorMap;
        function parse() {
            if (!mirrorMap) {
                //const start = performance.now()
                var ref = parseCharacterMap(data, true);
                var map = ref.map;
                var reverseMap = ref.reverseMap;
                // Combine both maps into one
                reverseMap.forEach(function(value, key) {
                    map.set(key, value);
                });
                mirrorMap = map;
            //console.log(`mirrored chars parsed in ${performance.now() - start}ms`)
            }
        }
        function getMirroredCharacter(char) {
            parse();
            return mirrorMap.get(char) || null;
        }
        /**
   * Given a string and its resolved embedding levels, build a map of indices to replacement chars
   * for any characters in right-to-left segments that have defined mirrored characters.
   * @param string
   * @param embeddingLevels
   * @param [start]
   * @param [end]
   * @return {Map<number, string>}
   */ function getMirroredCharactersMap(string, embeddingLevels, start, end) {
            var strLen = string.length;
            start = Math.max(0, start == null ? 0 : +start);
            end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
            var map = new Map();
            for(var i = start; i <= end; i++){
                if (embeddingLevels[i] & 1) {
                    var mirror = getMirroredCharacter(string[i]);
                    if (mirror !== null) {
                        map.set(i, mirror);
                    }
                }
            }
            return map;
        }
        /**
   * Given a start and end denoting a single line within a string, and a set of precalculated
   * bidi embedding levels, produce a list of segments whose ordering should be flipped, in sequence.
   * @param {string} string - the full input string
   * @param {GetEmbeddingLevelsResult} embeddingLevelsResult - the result object from getEmbeddingLevels
   * @param {number} [start] - first character in a subset of the full string
   * @param {number} [end] - last character in a subset of the full string
   * @return {number[][]} - the list of start/end segments that should be flipped, in order.
   */ function getReorderSegments(string, embeddingLevelsResult, start, end) {
            var strLen = string.length;
            start = Math.max(0, start == null ? 0 : +start);
            end = Math.min(strLen - 1, end == null ? strLen - 1 : +end);
            var segments = [];
            embeddingLevelsResult.paragraphs.forEach(function(paragraph) {
                var lineStart = Math.max(start, paragraph.start);
                var lineEnd = Math.min(end, paragraph.end);
                if (lineStart < lineEnd) {
                    // Local slice for mutation
                    var lineLevels = embeddingLevelsResult.levels.slice(lineStart, lineEnd + 1);
                    // 3.4 L1.4: Reset any sequence of whitespace characters and/or isolate formatting characters at the
                    // end of the line to the paragraph level.
                    for(var i = lineEnd; i >= lineStart && getBidiCharType(string[i]) & TRAILING_TYPES; i--){
                        lineLevels[i] = paragraph.level;
                    }
                    // L2. From the highest level found in the text to the lowest odd level on each line, including intermediate levels
                    // not actually present in the text, reverse any contiguous sequence of characters that are at that level or higher.
                    var maxLevel = paragraph.level;
                    var minOddLevel = Infinity;
                    for(var i$1 = 0; i$1 < lineLevels.length; i$1++){
                        var level = lineLevels[i$1];
                        if (level > maxLevel) {
                            maxLevel = level;
                        }
                        if (level < minOddLevel) {
                            minOddLevel = level | 1;
                        }
                    }
                    for(var lvl = maxLevel; lvl >= minOddLevel; lvl--){
                        for(var i$2 = 0; i$2 < lineLevels.length; i$2++){
                            if (lineLevels[i$2] >= lvl) {
                                var segStart = i$2;
                                while(i$2 + 1 < lineLevels.length && lineLevels[i$2 + 1] >= lvl){
                                    i$2++;
                                }
                                if (i$2 > segStart) {
                                    segments.push([
                                        segStart + lineStart,
                                        i$2 + lineStart
                                    ]);
                                }
                            }
                        }
                    }
                }
            });
            return segments;
        }
        /**
   * @param {string} string
   * @param {GetEmbeddingLevelsResult} embedLevelsResult
   * @param {number} [start]
   * @param {number} [end]
   * @return {string} the new string with bidi segments reordered
   */ function getReorderedString(string, embedLevelsResult, start, end) {
            var indices = getReorderedIndices(string, embedLevelsResult, start, end);
            var chars = [].concat(string);
            indices.forEach(function(charIndex, i) {
                chars[i] = (embedLevelsResult.levels[charIndex] & 1 ? getMirroredCharacter(string[charIndex]) : null) || string[charIndex];
            });
            return chars.join('');
        }
        /**
   * @param {string} string
   * @param {GetEmbeddingLevelsResult} embedLevelsResult
   * @param {number} [start]
   * @param {number} [end]
   * @return {number[]} an array with character indices in their new bidi order
   */ function getReorderedIndices(string, embedLevelsResult, start, end) {
            var segments = getReorderSegments(string, embedLevelsResult, start, end);
            // Fill an array with indices
            var indices = [];
            for(var i = 0; i < string.length; i++){
                indices[i] = i;
            }
            // Reverse each segment in order
            segments.forEach(function(ref) {
                var start = ref[0];
                var end = ref[1];
                var slice = indices.slice(start, end + 1);
                for(var i = slice.length; i--;){
                    indices[end - i] = slice[i];
                }
            });
            return indices;
        }
        exports.closingToOpeningBracket = closingToOpeningBracket;
        exports.getBidiCharType = getBidiCharType;
        exports.getBidiCharTypeName = getBidiCharTypeName;
        exports.getCanonicalBracket = getCanonicalBracket;
        exports.getEmbeddingLevels = getEmbeddingLevels;
        exports.getMirroredCharacter = getMirroredCharacter;
        exports.getMirroredCharactersMap = getMirroredCharactersMap;
        exports.getReorderSegments = getReorderSegments;
        exports.getReorderedIndices = getReorderedIndices;
        exports.getReorderedString = getReorderedString;
        exports.openingToClosingBracket = openingToClosingBracket;
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        return exports;
    }({});
    return bidi;
}
const __TURBOPACK__default__export__ = bidiFactory;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/troika-three-utils@0.52.4_three@0.167.1/node_modules/troika-three-utils/dist/troika-three-utils.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BezierMesh",
    ()=>BezierMesh,
    "createDerivedMaterial",
    ()=>createDerivedMaterial,
    "expandShaderIncludes",
    ()=>expandShaderIncludes,
    "getShaderUniformTypes",
    ()=>getShaderUniformTypes,
    "getShadersForMaterial",
    ()=>getShadersForMaterial,
    "invertMatrix4",
    ()=>invertMatrix4,
    "voidMainRegExp",
    ()=>voidMainRegExp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-client] (ecmascript)");
;
/**
 * Regular expression for matching the `void main() {` opener line in GLSL.
 * @type {RegExp}
 */ const voidMainRegExp = /\bvoid\s+main\s*\(\s*\)\s*{/g;
/**
 * Recursively expands all `#include <xyz>` statements within string of shader code.
 * Copied from three's WebGLProgram#parseIncludes for external use.
 *
 * @param {string} source - The GLSL source code to evaluate
 * @return {string} The GLSL code with all includes expanded
 */ function expandShaderIncludes(source) {
    const pattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
    function replace(match, include) {
        let chunk = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderChunk"][include];
        return chunk ? expandShaderIncludes(chunk) : match;
    }
    return source.replace(pattern, replace);
}
/*
 * This is a direct copy of MathUtils.generateUUID from Three.js, to preserve compatibility with three
 * versions before 0.113.0 as it was changed from Math to MathUtils in that version.
 * https://github.com/mrdoob/three.js/blob/dd8b5aa3b270c17096b90945cd2d6d1b13aaec53/src/math/MathUtils.js#L16
 */ const _lut = [];
for(let i = 0; i < 256; i++){
    _lut[i] = (i < 16 ? '0' : '') + i.toString(16);
}
function generateUUID() {
    // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
    const d0 = Math.random() * 0xffffffff | 0;
    const d1 = Math.random() * 0xffffffff | 0;
    const d2 = Math.random() * 0xffffffff | 0;
    const d3 = Math.random() * 0xffffffff | 0;
    const uuid = _lut[d0 & 0xff] + _lut[d0 >> 8 & 0xff] + _lut[d0 >> 16 & 0xff] + _lut[d0 >> 24 & 0xff] + '-' + _lut[d1 & 0xff] + _lut[d1 >> 8 & 0xff] + '-' + _lut[d1 >> 16 & 0x0f | 0x40] + _lut[d1 >> 24 & 0xff] + '-' + _lut[d2 & 0x3f | 0x80] + _lut[d2 >> 8 & 0xff] + '-' + _lut[d2 >> 16 & 0xff] + _lut[d2 >> 24 & 0xff] + _lut[d3 & 0xff] + _lut[d3 >> 8 & 0xff] + _lut[d3 >> 16 & 0xff] + _lut[d3 >> 24 & 0xff];
    // .toUpperCase() here flattens concatenated strings to save heap memory space.
    return uuid.toUpperCase();
}
// Local assign polyfill to avoid importing troika-core
const assign = Object.assign || function() {
    let target = arguments[0];
    for(let i = 1, len = arguments.length; i < len; i++){
        let source = arguments[i];
        if (source) {
            for(let prop in source){
                if (Object.prototype.hasOwnProperty.call(source, prop)) {
                    target[prop] = source[prop];
                }
            }
        }
    }
    return target;
};
const epoch = Date.now();
const CONSTRUCTOR_CACHE = new WeakMap();
const SHADER_UPGRADE_CACHE = new Map();
// Material ids must be integers, but we can't access the increment from Three's `Material` module,
// so let's choose a sufficiently large starting value that should theoretically never collide.
let materialInstanceId = 1e10;
/**
 * A utility for creating a custom shader material derived from another material's
 * shaders. This allows you to inject custom shader logic and transforms into the
 * builtin ThreeJS materials without having to recreate them from scratch.
 *
 * @param {THREE.Material} baseMaterial - the original material to derive from
 *
 * @param {Object} options - How the base material should be modified.
 * @param {Object=} options.defines - Custom `defines` for the material
 * @param {Object=} options.extensions - Custom `extensions` for the material, e.g. `{derivatives: true}`
 * @param {Object=} options.uniforms - Custom `uniforms` for use in the modified shader. These can
 *        be accessed and manipulated via the resulting material's `uniforms` property, just like
 *        in a ShaderMaterial. You do not need to repeat the base material's own uniforms here.
 * @param {String=} options.timeUniform - If specified, a uniform of this name will be injected into
 *        both shaders, and it will automatically be updated on each render frame with a number of
 *        elapsed milliseconds. The "zero" epoch time is not significant so don't rely on this as a
 *        true calendar time.
 * @param {String=} options.vertexDefs - Custom GLSL code to inject into the vertex shader's top-level
 *        definitions, above the `void main()` function.
 * @param {String=} options.vertexMainIntro - Custom GLSL code to inject at the top of the vertex
 *        shader's `void main` function.
 * @param {String=} options.vertexMainOutro - Custom GLSL code to inject at the end of the vertex
 *        shader's `void main` function.
 * @param {String=} options.vertexTransform - Custom GLSL code to manipulate the `position`, `normal`,
 *        and/or `uv` vertex attributes. This code will be wrapped within a standalone function with
 *        those attributes exposed by their normal names as read/write values.
 * @param {String=} options.fragmentDefs - Custom GLSL code to inject into the fragment shader's top-level
 *        definitions, above the `void main()` function.
 * @param {String=} options.fragmentMainIntro - Custom GLSL code to inject at the top of the fragment
 *        shader's `void main` function.
 * @param {String=} options.fragmentMainOutro - Custom GLSL code to inject at the end of the fragment
 *        shader's `void main` function. You can manipulate `gl_FragColor` here but keep in mind it goes
 *        after any of ThreeJS's color postprocessing shader chunks (tonemapping, fog, etc.), so if you
 *        want those to apply to your changes use `fragmentColorTransform` instead.
 * @param {String=} options.fragmentColorTransform - Custom GLSL code to manipulate the `gl_FragColor`
 *        output value. Will be injected near the end of the `void main` function, but before any
 *        of ThreeJS's color postprocessing shader chunks (tonemapping, fog, etc.), and before the
 *        `fragmentMainOutro`.
 * @param {function({fragmentShader: string, vertexShader:string}):
 *        {fragmentShader: string, vertexShader:string}} options.customRewriter - A function
 *        for performing custom rewrites of the full shader code. Useful if you need to do something
 *        special that's not covered by the other builtin options. This function will be executed before
 *        any other transforms are applied.
 * @param {boolean=} options.chained - Set to `true` to prototype-chain the derived material to the base
 *        material, rather than the default behavior of copying it. This allows the derived material to
 *        automatically pick up changes made to the base material and its properties. This can be useful
 *        where the derived material is hidden from the user as an implementation detail, allowing them
 *        to work with the original material like normal. But it can result in unexpected behavior if not
 *        handled carefully.
 *
 * @return {THREE.Material}
 *
 * The returned material will also have two new methods, `getDepthMaterial()` and `getDistanceMaterial()`,
 * which can be called to get a variant of the derived material for use in shadow casting. If the
 * target mesh is expected to cast shadows, then you can assign these to the mesh's `customDepthMaterial`
 * (for directional and spot lights) and/or `customDistanceMaterial` (for point lights) properties to
 * allow the cast shadow to honor your derived shader's vertex transforms and discarded fragments. These
 * will also set a custom `#define IS_DEPTH_MATERIAL` or `#define IS_DISTANCE_MATERIAL` that you can look
 * for in your derived shaders with `#ifdef` to customize their behavior for the depth or distance
 * scenarios, e.g. skipping antialiasing or expensive shader logic.
 */ function createDerivedMaterial(baseMaterial, options) {
    // Generate a key that is unique to the content of these `options`. We'll use this
    // throughout for caching and for generating the upgraded shader code. This increases
    // the likelihood that the resulting shaders will line up across multiple calls so
    // their GL programs can be shared and cached.
    const optionsKey = getKeyForOptions(options);
    // First check to see if we've already derived from this baseMaterial using this
    // unique set of options, and if so reuse the constructor to avoid some allocations.
    let ctorsByDerivation = CONSTRUCTOR_CACHE.get(baseMaterial);
    if (!ctorsByDerivation) {
        CONSTRUCTOR_CACHE.set(baseMaterial, ctorsByDerivation = Object.create(null));
    }
    if (ctorsByDerivation[optionsKey]) {
        return new ctorsByDerivation[optionsKey]();
    }
    const privateBeforeCompileProp = `_onBeforeCompile${optionsKey}`;
    // Private onBeforeCompile handler that injects the modified shaders and uniforms when
    // the renderer switches to this material's program
    const onBeforeCompile = function(shaderInfo, renderer) {
        baseMaterial.onBeforeCompile.call(this, shaderInfo, renderer);
        // Upgrade the shaders, caching the result by incoming source code
        const cacheKey = this.customProgramCacheKey() + '|' + shaderInfo.vertexShader + '|' + shaderInfo.fragmentShader;
        let upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey];
        if (!upgradedShaders) {
            const upgraded = upgradeShaders(this, shaderInfo, options, optionsKey);
            upgradedShaders = SHADER_UPGRADE_CACHE[cacheKey] = upgraded;
        }
        // Inject upgraded shaders and uniforms into the program
        shaderInfo.vertexShader = upgradedShaders.vertexShader;
        shaderInfo.fragmentShader = upgradedShaders.fragmentShader;
        assign(shaderInfo.uniforms, this.uniforms);
        // Inject auto-updating time uniform if requested
        if (options.timeUniform) {
            shaderInfo.uniforms[options.timeUniform] = {
                get value () {
                    return Date.now() - epoch;
                }
            };
        }
        // Users can still add their own handlers on top of ours
        if (this[privateBeforeCompileProp]) {
            this[privateBeforeCompileProp](shaderInfo);
        }
    };
    const DerivedMaterial = function DerivedMaterial() {
        return derive(options.chained ? baseMaterial : baseMaterial.clone());
    };
    const derive = function(base) {
        // Prototype chain to the base material
        const derived = Object.create(base, descriptor);
        // Store the baseMaterial for reference; this is always the original even when cloning
        Object.defineProperty(derived, 'baseMaterial', {
            value: baseMaterial
        });
        // Needs its own ids
        Object.defineProperty(derived, 'id', {
            value: materialInstanceId++
        });
        derived.uuid = generateUUID();
        // Merge uniforms, defines, and extensions
        derived.uniforms = assign({}, base.uniforms, options.uniforms);
        derived.defines = assign({}, base.defines, options.defines);
        derived.defines[`TROIKA_DERIVED_MATERIAL_${optionsKey}`] = ''; //force a program change from the base material
        derived.extensions = assign({}, base.extensions, options.extensions);
        // Don't inherit EventDispatcher listeners
        derived._listeners = undefined;
        return derived;
    };
    const descriptor = {
        constructor: {
            value: DerivedMaterial
        },
        isDerivedMaterial: {
            value: true
        },
        type: {
            get: ()=>baseMaterial.type,
            set: (value)=>{
                baseMaterial.type = value;
            }
        },
        isDerivedFrom: {
            writable: true,
            configurable: true,
            value: function(testMaterial) {
                const base = this.baseMaterial;
                return testMaterial === base || base.isDerivedMaterial && base.isDerivedFrom(testMaterial) || false;
            }
        },
        customProgramCacheKey: {
            writable: true,
            configurable: true,
            value: function() {
                return baseMaterial.customProgramCacheKey() + '|' + optionsKey;
            }
        },
        onBeforeCompile: {
            get () {
                return onBeforeCompile;
            },
            set (fn) {
                this[privateBeforeCompileProp] = fn;
            }
        },
        copy: {
            writable: true,
            configurable: true,
            value: function(source) {
                baseMaterial.copy.call(this, source);
                if (!baseMaterial.isShaderMaterial && !baseMaterial.isDerivedMaterial) {
                    assign(this.extensions, source.extensions);
                    assign(this.defines, source.defines);
                    assign(this.uniforms, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UniformsUtils"].clone(source.uniforms));
                }
                return this;
            }
        },
        clone: {
            writable: true,
            configurable: true,
            value: function() {
                const newBase = new baseMaterial.constructor();
                return derive(newBase).copy(this);
            }
        },
        /**
     * Utility to get a MeshDepthMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */ getDepthMaterial: {
            writable: true,
            configurable: true,
            value: function() {
                let depthMaterial = this._depthMaterial;
                if (!depthMaterial) {
                    depthMaterial = this._depthMaterial = createDerivedMaterial(baseMaterial.isDerivedMaterial ? baseMaterial.getDepthMaterial() : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDepthMaterial"]({
                        depthPacking: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBADepthPacking"]
                    }), options);
                    depthMaterial.defines.IS_DEPTH_MATERIAL = '';
                    depthMaterial.uniforms = this.uniforms; //automatically recieve same uniform values
                }
                return depthMaterial;
            }
        },
        /**
     * Utility to get a MeshDistanceMaterial that will honor this derived material's vertex
     * transformations and discarded fragments.
     */ getDistanceMaterial: {
            writable: true,
            configurable: true,
            value: function() {
                let distanceMaterial = this._distanceMaterial;
                if (!distanceMaterial) {
                    distanceMaterial = this._distanceMaterial = createDerivedMaterial(baseMaterial.isDerivedMaterial ? baseMaterial.getDistanceMaterial() : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshDistanceMaterial"](), options);
                    distanceMaterial.defines.IS_DISTANCE_MATERIAL = '';
                    distanceMaterial.uniforms = this.uniforms; //automatically recieve same uniform values
                }
                return distanceMaterial;
            }
        },
        dispose: {
            writable: true,
            configurable: true,
            value () {
                const { _depthMaterial, _distanceMaterial } = this;
                if (_depthMaterial) _depthMaterial.dispose();
                if (_distanceMaterial) _distanceMaterial.dispose();
                baseMaterial.dispose.call(this);
            }
        }
    };
    ctorsByDerivation[optionsKey] = DerivedMaterial;
    return new DerivedMaterial();
}
function upgradeShaders(material, { vertexShader, fragmentShader }, options, key) {
    let { vertexDefs, vertexMainIntro, vertexMainOutro, vertexTransform, fragmentDefs, fragmentMainIntro, fragmentMainOutro, fragmentColorTransform, customRewriter, timeUniform } = options;
    vertexDefs = vertexDefs || '';
    vertexMainIntro = vertexMainIntro || '';
    vertexMainOutro = vertexMainOutro || '';
    fragmentDefs = fragmentDefs || '';
    fragmentMainIntro = fragmentMainIntro || '';
    fragmentMainOutro = fragmentMainOutro || '';
    // Expand includes if needed
    if (vertexTransform || customRewriter) {
        vertexShader = expandShaderIncludes(vertexShader);
    }
    if (fragmentColorTransform || customRewriter) {
        // We need to be able to find postprocessing chunks after include expansion in order to
        // put them after the fragmentColorTransform, so mark them with comments first. Even if
        // this particular derivation doesn't have a fragmentColorTransform, other derivations may,
        // so we still mark them.
        fragmentShader = fragmentShader.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm, '\n//!BEGIN_POST_CHUNK $1\n$&\n//!END_POST_CHUNK\n');
        fragmentShader = expandShaderIncludes(fragmentShader);
    }
    // Apply custom rewriter function
    if (customRewriter) {
        let res = customRewriter({
            vertexShader,
            fragmentShader
        });
        vertexShader = res.vertexShader;
        fragmentShader = res.fragmentShader;
    }
    // The fragmentColorTransform needs to go before any postprocessing chunks, so extract
    // those and re-insert them into the outro in the correct place:
    if (fragmentColorTransform) {
        let postChunks = [];
        fragmentShader = fragmentShader.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm, (match)=>{
            postChunks.push(match);
            return '';
        });
        fragmentMainOutro = `${fragmentColorTransform}\n${postChunks.join('\n')}\n${fragmentMainOutro}`;
    }
    // Inject auto-updating time uniform if requested
    if (timeUniform) {
        const code = `\nuniform float ${timeUniform};\n`;
        vertexDefs = code + vertexDefs;
        fragmentDefs = code + fragmentDefs;
    }
    // Inject a function for the vertexTransform and rename all usages of position/normal/uv
    if (vertexTransform) {
        // Hoist these defs to the very top so they work in other function defs
        vertexShader = `vec3 troika_position_${key};
vec3 troika_normal_${key};
vec2 troika_uv_${key};
${vertexShader}
`;
        vertexDefs = `${vertexDefs}
void troikaVertexTransform${key}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${vertexTransform}
}
`;
        vertexMainIntro = `
troika_position_${key} = vec3(position);
troika_normal_${key} = vec3(normal);
troika_uv_${key} = vec2(uv);
troikaVertexTransform${key}(troika_position_${key}, troika_normal_${key}, troika_uv_${key});
${vertexMainIntro}
`;
        vertexShader = vertexShader.replace(/\b(position|normal|uv)\b/g, (match, match1, index, fullStr)=>{
            return /\battribute\s+vec[23]\s+$/.test(fullStr.substr(0, index)) ? match1 : `troika_${match1}_${key}`;
        });
        // Three r152 introduced the MAP_UV token, replace it too if it's pointing to the main 'uv'
        // Perhaps the other textures too going forward?
        if (!(material.map && material.map.channel > 0)) {
            vertexShader = vertexShader.replace(/\bMAP_UV\b/g, `troika_uv_${key}`);
        }
    }
    // Inject defs and intro/outro snippets
    vertexShader = injectIntoShaderCode(vertexShader, key, vertexDefs, vertexMainIntro, vertexMainOutro);
    fragmentShader = injectIntoShaderCode(fragmentShader, key, fragmentDefs, fragmentMainIntro, fragmentMainOutro);
    return {
        vertexShader,
        fragmentShader
    };
}
function injectIntoShaderCode(shaderCode, id, defs, intro, outro) {
    if (intro || outro || defs) {
        shaderCode = shaderCode.replace(voidMainRegExp, `
${defs}
void troikaOrigMain${id}() {`);
        shaderCode += `
void main() {
  ${intro}
  troikaOrigMain${id}();
  ${outro}
}`;
    }
    return shaderCode;
}
function optionsJsonReplacer(key, value) {
    return key === 'uniforms' ? undefined : typeof value === 'function' ? value.toString() : value;
}
let _idCtr = 0;
const optionsHashesToIds = new Map();
function getKeyForOptions(options) {
    const optionsHash = JSON.stringify(options, optionsJsonReplacer);
    let id = optionsHashesToIds.get(optionsHash);
    if (id == null) {
        optionsHashesToIds.set(optionsHash, id = ++_idCtr);
    }
    return id;
}
// Copied from threejs WebGLPrograms.js so we can resolve builtin materials to their shaders
// TODO how can we keep this from getting stale?
const MATERIAL_TYPES_TO_SHADERS = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite'
};
/**
 * Given a Three.js `Material` instance, find the shaders/uniforms that will be
 * used to render that material.
 *
 * @param material - the Material instance
 * @return {object} - the material's shader info: `{uniforms:{}, fragmentShader:'', vertexShader:''}`
 */ function getShadersForMaterial(material) {
    let builtinType = MATERIAL_TYPES_TO_SHADERS[material.type];
    return builtinType ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderLib"][builtinType] : material //TODO fallback for unknown type?
    ;
}
/**
 * Find all uniforms and their types within a shader code string.
 *
 * @param {string} shader - The shader code to parse
 * @return {object} mapping of uniform names to their glsl type
 */ function getShaderUniformTypes(shader) {
    let uniformRE = /\buniform\s+(int|float|vec[234]|mat[34])\s+([A-Za-z_][\w]*)/g;
    let uniforms = Object.create(null);
    let match;
    while((match = uniformRE.exec(shader)) !== null){
        uniforms[match[2]] = match[1];
    }
    return uniforms;
}
/**
 * Helper for smoothing out the `m.getInverse(x)` --> `m.copy(x).invert()` conversion
 * that happened in ThreeJS r123.
 * @param {Matrix4} srcMatrix
 * @param {Matrix4} [tgtMatrix]
 */ function invertMatrix4(srcMatrix, tgtMatrix = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Matrix4"]()) {
    if (typeof tgtMatrix.invert === 'function') {
        tgtMatrix.copy(srcMatrix).invert();
    } else {
        tgtMatrix.getInverse(srcMatrix);
    }
    return tgtMatrix;
}
/*
Input geometry is a cylinder with r=1, height in y dimension from 0 to 1,
divided into a reasonable number of height segments.
*/ const vertexDefs = `
uniform vec3 pointA;
uniform vec3 controlA;
uniform vec3 controlB;
uniform vec3 pointB;
uniform float radius;
varying float bezierT;

vec3 cubicBezier(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  float b0 = t2 * t2 * t2;
  float b1 = 3.0 * t * t2 * t2;
  float b2 = 3.0 * t * t * t2;
  float b3 = t * t * t;
  return b0 * p1 + b1 * c1 + b2 * c2 + b3 * p2;
}

vec3 cubicBezierDerivative(vec3 p1, vec3 c1, vec3 c2, vec3 p2, float t) {
  float t2 = 1.0 - t;
  return -3.0 * p1 * t2 * t2 +
    c1 * (3.0 * t2 * t2 - 6.0 * t2 * t) +
    c2 * (6.0 * t2 * t - 3.0 * t * t) +
    3.0 * p2 * t * t;
}
`;
const vertexTransform = `
float t = position.y;
bezierT = t;
vec3 bezierCenterPos = cubicBezier(pointA, controlA, controlB, pointB, t);
vec3 bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t));

// Make "sideways" always perpendicular to the camera ray; this ensures that any twists
// in the cylinder occur where you won't see them: 
vec3 viewDirection = normalMatrix * vec3(0.0, 0.0, 1.0);
if (bezierDir == viewDirection) {
  bezierDir = normalize(cubicBezierDerivative(pointA, controlA, controlB, pointB, t == 1.0 ? t - 0.0001 : t + 0.0001));
}
vec3 sideways = normalize(cross(bezierDir, viewDirection));
vec3 upish = normalize(cross(sideways, bezierDir));

// Build a matrix for transforming this disc in the cylinder:
mat4 discTx;
discTx[0].xyz = sideways * radius;
discTx[1].xyz = bezierDir * radius;
discTx[2].xyz = upish * radius;
discTx[3].xyz = bezierCenterPos;
discTx[3][3] = 1.0;

// Apply transform, ignoring original y
position = (discTx * vec4(position.x, 0.0, position.z, 1.0)).xyz;
normal = normalize(mat3(discTx) * normal);
`;
const fragmentDefs = `
uniform vec3 dashing;
varying float bezierT;
`;
const fragmentMainIntro = `
if (dashing.x + dashing.y > 0.0) {
  float dashFrac = mod(bezierT - dashing.z, dashing.x + dashing.y);
  if (dashFrac > dashing.x) {
    discard;
  }
}
`;
// Debugging: separate color for each of the 6 sides:
// const fragmentColorTransform = `
// float sideNum = floor(vUV.x * 6.0);
// vec3 mixColor = sideNum < 1.0 ? vec3(1.0, 0.0, 0.0) :
//   sideNum < 2.0 ? vec3(0.0, 1.0, 1.0) :
//   sideNum < 3.0 ? vec3(1.0, 1.0, 0.0) :
//   sideNum < 4.0 ? vec3(0.0, 0.0, 1.0) :
//   sideNum < 5.0 ? vec3(0.0, 1.0, 0.0) :
//   vec3(1.0, 0.0, 1.0);
// gl_FragColor.xyz = mix(gl_FragColor.xyz, mixColor, 0.5);
// `
function createBezierMeshMaterial(baseMaterial) {
    return createDerivedMaterial(baseMaterial, {
        chained: true,
        uniforms: {
            pointA: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            controlA: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            controlB: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            pointB: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            },
            radius: {
                value: 0.01
            },
            dashing: {
                value: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]()
            } //on, off, offset
        },
        vertexDefs,
        vertexTransform,
        fragmentDefs,
        fragmentMainIntro
    });
}
let geometry = null;
const defaultBaseMaterial = /*#__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshStandardMaterial"]({
    color: 0xffffff,
    side: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoubleSide"]
});
/**
 * A ThreeJS `Mesh` that bends a tube shape along a 3D cubic bezier path. The bending is done
 * by deforming a straight cylindrical geometry in the vertex shader based on a set of four
 * control point uniforms. It patches the necessary GLSL into the mesh's assigned `material`
 * automatically.
 *
 * The cubiz bezier path is determined by its four `Vector3` properties:
 * - `pointA`
 * - `controlA`
 * - `controlB`
 * - `pointB`
 *
 * The tube's radius is controlled by its `radius` property, which defaults to `0.01`.
 *
 * You can also give the tube a dashed appearance with two properties:
 *
 * - `dashArray` - an array of two numbers, defining the length of "on" and "off" parts of
 *   the dash. Each is a 0-1 ratio of the entire path's length. (Actually this is the `t` length
 *   used as input to the cubic bezier function, not its visible length.)
 * - `dashOffset` - offset of where the dash starts. You can animate this to make the dashes move.
 *
 * Note that the dashes will appear like a hollow tube, not solid. This will be more apparent on
 * thicker tubes.
 *
 * TODO: proper geometry bounding sphere and raycasting
 * TODO: allow control of the geometry's segment counts
 */ class BezierMesh extends __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"] {
    static getGeometry() {
        return geometry || (geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](1, 1, 1, 6, 64).translate(0, 0.5, 0));
    }
    constructor(){
        super(BezierMesh.getGeometry(), defaultBaseMaterial);
        this.pointA = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.controlA = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.controlB = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.pointB = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        this.radius = 0.01;
        this.dashArray = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        this.dashOffset = 0;
        // TODO - disabling frustum culling until I figure out how to customize the
        //  geometry's bounding sphere that gets used
        this.frustumCulled = false;
    }
    // Handler for automatically wrapping the base material with our upgrades. We do the wrapping
    // lazily on _read_ rather than write to avoid unnecessary wrapping on transient values.
    get material() {
        let derivedMaterial = this._derivedMaterial;
        const baseMaterial = this._baseMaterial || this._defaultMaterial || (this._defaultMaterial = defaultBaseMaterial.clone());
        if (!derivedMaterial || derivedMaterial.baseMaterial !== baseMaterial) {
            derivedMaterial = this._derivedMaterial = createBezierMeshMaterial(baseMaterial);
            // dispose the derived material when its base material is disposed:
            baseMaterial.addEventListener('dispose', function onDispose() {
                baseMaterial.removeEventListener('dispose', onDispose);
                derivedMaterial.dispose();
            });
        }
        return derivedMaterial;
    }
    set material(baseMaterial) {
        this._baseMaterial = baseMaterial;
    }
    // Create and update material for shadows upon request:
    get customDepthMaterial() {
        return this.material.getDepthMaterial();
    }
    set customDepthMaterial(m) {
    // future: let the user override with their own?
    }
    get customDistanceMaterial() {
        return this.material.getDistanceMaterial();
    }
    set customDistanceMaterial(m) {
    // future: let the user override with their own?
    }
    onBeforeRender() {
        const { uniforms } = this.material;
        const { pointA, controlA, controlB, pointB, radius, dashArray, dashOffset } = this;
        uniforms.pointA.value.copy(pointA);
        uniforms.controlA.value.copy(controlA);
        uniforms.controlB.value.copy(controlB);
        uniforms.pointB.value.copy(pointB);
        uniforms.radius.value = radius;
        uniforms.dashing.value.set(dashArray.x, dashArray.y, dashOffset || 0);
    }
    raycast() {
    // TODO - just fail for now
    }
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-context@1.1_88cce187a70e5166492f1ae6ab05d36b/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/context/src/createContext.tsx
__turbopack_context__.s([
    "createContext",
    ()=>createContext2,
    "createContextScope",
    ()=>createContextScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
            "createContext2.Provider.useMemo[value]": ()=>context
        }["createContext2.Provider.useMemo[value]"], Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
            value,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createContext3.Provider.useMemo[value]": ()=>context
            }["createContextScope.createContext3.Provider.useMemo[value]"], Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Context.Provider, {
                value,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "createContextScope.createScope.useScope.useMemo": ()=>({
                        [`__scope${scopeName}`]: {
                            ...scope,
                            [scopeName]: contexts
                        }
                    })
            }["createContextScope.createScope.useScope.useMemo"], [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "composeContextScopes.createScope.useComposedScopes.useMemo": ()=>({
                        [`__scope${baseScope.scopeName}`]: nextScopes
                    })
            }["composeContextScopes.createScope.useComposedScopes.useMemo"], [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-collection@_1877836e0c774bb5579767fada183f64/node_modules/@radix-ui/react-collection/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCollection",
    ()=>createCollection
]);
// packages/react/collection/src/Collection.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-context@1.1_88cce187a70e5166492f1ae6ab05d36b/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function createCollection(name) {
    const PROVIDER_NAME = name + "CollectionProvider";
    const [createCollectionContext, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(PROVIDER_NAME);
    const [CollectionProviderImpl, useCollectionContext] = createCollectionContext(PROVIDER_NAME, {
        collectionRef: {
            current: null
        },
        itemMap: /* @__PURE__ */ new Map()
    });
    const CollectionProvider = (props)=>{
        const { scope, children } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const itemMap = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(/* @__PURE__ */ new Map()).current;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollectionProviderImpl, {
            scope,
            itemMap,
            collectionRef: ref,
            children
        });
    };
    CollectionProvider.displayName = PROVIDER_NAME;
    const COLLECTION_SLOT_NAME = name + "CollectionSlot";
    const CollectionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children } = props;
        const context = useCollectionContext(COLLECTION_SLOT_NAME, scope);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, context.collectionRef);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
            ref: composedRefs,
            children
        });
    });
    CollectionSlot.displayName = COLLECTION_SLOT_NAME;
    const ITEM_SLOT_NAME = name + "CollectionItemSlot";
    const ITEM_DATA_ATTR = "data-radix-collection-item";
    const CollectionItemSlot = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
        const { scope, children, ...itemData } = props;
        const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
        const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
        const context = useCollectionContext(ITEM_SLOT_NAME, scope);
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
            "createCollection.CollectionItemSlot.useEffect": ()=>{
                context.itemMap.set(ref, {
                    ref,
                    ...itemData
                });
                return ({
                    "createCollection.CollectionItemSlot.useEffect": ()=>void context.itemMap.delete(ref)
                })["createCollection.CollectionItemSlot.useEffect"];
            }
        }["createCollection.CollectionItemSlot.useEffect"]);
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
            ...{
                [ITEM_DATA_ATTR]: ""
            },
            ref: composedRefs,
            children
        });
    });
    CollectionItemSlot.displayName = ITEM_SLOT_NAME;
    function useCollection(scope) {
        const context = useCollectionContext(name + "CollectionConsumer", scope);
        const getItems = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
            "createCollection.useCollection.useCallback[getItems]": ()=>{
                const collectionNode = context.collectionRef.current;
                if (!collectionNode) return [];
                const orderedNodes = Array.from(collectionNode.querySelectorAll(`[${ITEM_DATA_ATTR}]`));
                const items = Array.from(context.itemMap.values());
                const orderedItems = items.sort({
                    "createCollection.useCollection.useCallback[getItems].orderedItems": (a, b)=>orderedNodes.indexOf(a.ref.current) - orderedNodes.indexOf(b.ref.current)
                }["createCollection.useCollection.useCallback[getItems].orderedItems"]);
                return orderedItems;
            }
        }["createCollection.useCollection.useCallback[getItems]"], [
            context.collectionRef,
            context.itemMap
        ]);
        return getItems;
    }
    return [
        {
            Provider: CollectionProvider,
            Slot: CollectionSlot,
            ItemSlot: CollectionItemSlot
        },
        useCollection,
        createCollectionScope
    ];
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/core/primitive/src/primitive.tsx
__turbopack_context__.s([
    "composeEventHandlers",
    ()=>composeEventHandlers
]);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-callbac_4d6c5c4efaca0d3a69705d78fa164487/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-callback-ref/src/useCallbackRef.tsx
__turbopack_context__.s([
    "useCallbackRef",
    ()=>useCallbackRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](callback);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useCallbackRef.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useCallbackRef.useEffect"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "useCallbackRef.useMemo": ()=>({
                "useCallbackRef.useMemo": (...args)=>callbackRef.current?.(...args)
            })["useCallbackRef.useMemo"]
    }["useCallbackRef.useMemo"], []);
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-control_f00bb4f5c1b5fb44e10c3440317ba2f6/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-controllable-state/src/useControllableState.tsx
__turbopack_context__.s([
    "useControllableState",
    ()=>useControllableState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_4d6c5c4efaca0d3a69705d78fa164487$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-callbac_4d6c5c4efaca0d3a69705d78fa164487/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)");
;
;
function useControllableState({ prop, defaultProp, onChange = ()=>{} }) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_4d6c5c4efaca0d3a69705d78fa164487$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    const setValue = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
        "useControllableState.useCallback[setValue]": (nextValue)=>{
            if (isControlled) {
                const setter = nextValue;
                const value2 = typeof nextValue === "function" ? setter(prop) : nextValue;
                if (value2 !== prop) handleChange(value2);
            } else {
                setUncontrolledProp(nextValue);
            }
        }
    }["useControllableState.useCallback[setValue]"], [
        isControlled,
        prop,
        setUncontrolledProp,
        handleChange
    ]);
    return [
        value,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const uncontrolledState = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](value);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$callbac_4d6c5c4efaca0d3a69705d78fa164487$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$callback$2d$ref$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallbackRef"])(onChange);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "useUncontrolledState.useEffect": ()=>{
            if (prevValueRef.current !== value) {
                handleChange(value);
                prevValueRef.current = value;
            }
        }
    }["useUncontrolledState.useEffect"], [
        value,
        prevValueRef,
        handleChange
    ]);
    return uncontrolledState;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-primitive@2_dada66e1624d5ca0fc4e85c0f13e246b/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/primitive/src/Primitive.tsx
__turbopack_context__.s([
    "Primitive",
    ()=>Primitive,
    "Root",
    ()=>Root,
    "dispatchDiscreteCustomEvent",
    ()=>dispatchDiscreteCustomEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-slot@1.1.1_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Node = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$1$2e$1_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-layout-_f9810f0c41fda93e666581f7e3be4a0e/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/use-layout-effect/src/useLayoutEffect.tsx
__turbopack_context__.s([
    "useLayoutEffect",
    ()=>useLayoutEffect2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var useLayoutEffect2 = Boolean(globalThis?.document) ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : ()=>{};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-presence@1._0142c28581a9527527ce3810b4d3556e/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Presence",
    ()=>Presence
]);
// packages/react/presence/src/Presence.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-layout-_f9810f0c41fda93e666581f7e3be4a0e/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"]({
        "useStateMachine.useReducer": (state, event)=>{
            const nextState = machine[state][event];
            return nextState ?? state;
        }
    }["useStateMachine.useReducer"], initialState);
}
// packages/react/presence/src/Presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].only(children);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(presence.ref, getElementRef(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]();
    const stylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]({});
    const prevPresentRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "usePresence.useEffect": ()=>{
            const currentAnimationName = getAnimationName(stylesRef.current);
            prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
        }
    }["usePresence.useEffect"], [
        state
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            const styles = stylesRef.current;
            const wasPresent = prevPresentRef.current;
            const hasPresentChanged = wasPresent !== present;
            if (hasPresentChanged) {
                const prevAnimationName = prevAnimationNameRef.current;
                const currentAnimationName = getAnimationName(styles);
                if (present) {
                    send("MOUNT");
                } else if (currentAnimationName === "none" || styles?.display === "none") {
                    send("UNMOUNT");
                } else {
                    const isAnimating = prevAnimationName !== currentAnimationName;
                    if (wasPresent && isAnimating) {
                        send("ANIMATION_OUT");
                    } else {
                        send("UNMOUNT");
                    }
                }
                prevPresentRef.current = present;
            }
        }
    }["usePresence.useLayoutEffect"], [
        present,
        send
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "usePresence.useLayoutEffect": ()=>{
            if (node) {
                let timeoutId;
                const ownerWindow = node.ownerDocument.defaultView ?? window;
                const handleAnimationEnd = {
                    "usePresence.useLayoutEffect.handleAnimationEnd": (event)=>{
                        const currentAnimationName = getAnimationName(stylesRef.current);
                        const isCurrentAnimation = currentAnimationName.includes(event.animationName);
                        if (event.target === node && isCurrentAnimation) {
                            send("ANIMATION_END");
                            if (!prevPresentRef.current) {
                                const currentFillMode = node.style.animationFillMode;
                                node.style.animationFillMode = "forwards";
                                timeoutId = ownerWindow.setTimeout({
                                    "usePresence.useLayoutEffect.handleAnimationEnd": ()=>{
                                        if (node.style.animationFillMode === "forwards") {
                                            node.style.animationFillMode = currentFillMode;
                                        }
                                    }
                                }["usePresence.useLayoutEffect.handleAnimationEnd"]);
                            }
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationEnd"];
                const handleAnimationStart = {
                    "usePresence.useLayoutEffect.handleAnimationStart": (event)=>{
                        if (event.target === node) {
                            prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                        }
                    }
                }["usePresence.useLayoutEffect.handleAnimationStart"];
                node.addEventListener("animationstart", handleAnimationStart);
                node.addEventListener("animationcancel", handleAnimationEnd);
                node.addEventListener("animationend", handleAnimationEnd);
                return ({
                    "usePresence.useLayoutEffect": ()=>{
                        ownerWindow.clearTimeout(timeoutId);
                        node.removeEventListener("animationstart", handleAnimationStart);
                        node.removeEventListener("animationcancel", handleAnimationEnd);
                        node.removeEventListener("animationend", handleAnimationEnd);
                    }
                })["usePresence.useLayoutEffect"];
            } else {
                send("ANIMATION_END");
            }
        }
    }["usePresence.useLayoutEffect"], [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "usePresence.useCallback": (node2)=>{
                if (node2) stylesRef.current = getComputedStyle(node2);
                setNode(node2);
            }
        }["usePresence.useCallback"], [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/id/src/id.tsx
__turbopack_context__.s([
    "useId",
    ()=>useId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-layout-_f9810f0c41fda93e666581f7e3be4a0e/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
;
;
var useReactId = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId".toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState(useReactId());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useId.useLayoutEffect": ()=>{
            if (!deterministicId) setId({
                "useId.useLayoutEffect": (reactId)=>reactId ?? String(count++)
            }["useId.useLayoutEffect"]);
        }
    }["useId.useLayoutEffect"], [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-collapsible_b8c8679cc9abfe4d42f2eb6b1f670fa4/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Collapsible",
    ()=>Collapsible,
    "CollapsibleContent",
    ()=>CollapsibleContent,
    "CollapsibleTrigger",
    ()=>CollapsibleTrigger,
    "Content",
    ()=>Content,
    "Root",
    ()=>Root,
    "Trigger",
    ()=>Trigger,
    "createCollapsibleScope",
    ()=>createCollapsibleScope
]);
// packages/react/collapsible/src/Collapsible.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-context@1.1_88cce187a70e5166492f1ae6ab05d36b/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_f00bb4f5c1b5fb44e10c3440317ba2f6$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-control_f00bb4f5c1b5fb44e10c3440317ba2f6/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-layout-_f9810f0c41fda93e666581f7e3be4a0e/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-primitive@2_dada66e1624d5ca0fc4e85c0f13e246b/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_0142c28581a9527527ce3810b4d3556e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-presence@1._0142c28581a9527527ce3810b4d3556e/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$id$40$1$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, open: openProp, defaultOpen, disabled, onOpenChange, ...collapsibleProps } = props;
    const [open = false, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_f00bb4f5c1b5fb44e10c3440317ba2f6$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: openProp,
        defaultProp: defaultOpen,
        onChange: onOpenChange
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapsibleProvider, {
        scope: __scopeCollapsible,
        disabled,
        contentId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$id$40$1$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])(),
        open,
        onOpenToggle: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            "Collapsible.useCallback": ()=>setOpen({
                    "Collapsible.useCallback": (prevOpen)=>!prevOpen
                }["Collapsible.useCallback"])
        }["Collapsible.useCallback"], [
            setOpen
        ]),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
        })
    });
});
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].button, {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onClick, context.onOpenToggle)
    });
});
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$presence$40$1$2e$_0142c28581a9527527ce3810b4d3556e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$presence$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Presence"], {
        present: forceMount || context.open,
        children: ({ present })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CollapsibleContentImpl, {
                ...contentProps,
                ref: forwardedRef,
                present
            })
    });
});
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"]((props, forwardedRef)=>{
    const { __scopeCollapsible, present, children, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
    const [isPresent, setIsPresent] = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](present);
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(forwardedRef, ref);
    const heightRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const height = heightRef.current;
    const widthRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](0);
    const width = widthRef.current;
    const isOpen = context.open || isPresent;
    const isMountAnimationPreventedRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](isOpen);
    const originalStylesRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CollapsibleContentImpl.useEffect": ()=>{
            const rAF = requestAnimationFrame({
                "CollapsibleContentImpl.useEffect.rAF": ()=>isMountAnimationPreventedRef.current = false
            }["CollapsibleContentImpl.useEffect.rAF"]);
            return ({
                "CollapsibleContentImpl.useEffect": ()=>cancelAnimationFrame(rAF)
            })["CollapsibleContentImpl.useEffect"];
        }
    }["CollapsibleContentImpl.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$layout$2d$_f9810f0c41fda93e666581f7e3be4a0e$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$layout$2d$effect$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "CollapsibleContentImpl.useLayoutEffect": ()=>{
            const node = ref.current;
            if (node) {
                originalStylesRef.current = originalStylesRef.current || {
                    transitionDuration: node.style.transitionDuration,
                    animationName: node.style.animationName
                };
                node.style.transitionDuration = "0s";
                node.style.animationName = "none";
                const rect = node.getBoundingClientRect();
                heightRef.current = rect.height;
                widthRef.current = rect.width;
                if (!isMountAnimationPreventedRef.current) {
                    node.style.transitionDuration = originalStylesRef.current.transitionDuration;
                    node.style.animationName = originalStylesRef.current.animationName;
                }
                setIsPresent(present);
            }
        }
    }["CollapsibleContentImpl.useLayoutEffect"], [
        context.open,
        present
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        id: context.contentId,
        hidden: !isOpen,
        ...contentProps,
        ref: composedRefs,
        style: {
            [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
            [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
            ...props.style
        },
        children: isOpen && children
    });
});
function getState(open) {
    return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-direction@1_b0bf9efd14898f7e8c57bcd3e76f6446/node_modules/@radix-ui/react-direction/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// packages/react/direction/src/Direction.tsx
__turbopack_context__.s([
    "DirectionProvider",
    ()=>DirectionProvider,
    "Provider",
    ()=>Provider,
    "useDirection",
    ()=>useDirection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
;
;
var DirectionContext = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](void 0);
var DirectionProvider = (props)=>{
    const { dir, children } = props;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(DirectionContext.Provider, {
        value: dir,
        children
    });
};
function useDirection(localDir) {
    const globalDir = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](DirectionContext);
    return localDir || globalDir || "ltr";
}
var Provider = DirectionProvider;
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-accordion@1_9c473277950875d2edd2322cbeeebeab/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionHeader",
    ()=>AccordionHeader,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger,
    "Content",
    ()=>Content2,
    "Header",
    ()=>Header,
    "Item",
    ()=>Item,
    "Root",
    ()=>Root2,
    "Trigger",
    ()=>Trigger2,
    "createAccordionScope",
    ()=>createAccordionScope
]);
// packages/react/accordion/src/Accordion.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-context@1.1_88cce187a70e5166492f1ae6ab05d36b/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collection$40$_1877836e0c774bb5579767fada183f64$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-collection@_1877836e0c774bb5579767fada183f64/node_modules/@radix-ui/react-collection/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-compose-ref_35cf6528c895778d9fc6596d488dfd70/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+primitive@1.1.1/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_f00bb4f5c1b5fb44e10c3440317ba2f6$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-use-control_f00bb4f5c1b5fb44e10c3440317ba2f6/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-primitive@2_dada66e1624d5ca0fc4e85c0f13e246b/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible_b8c8679cc9abfe4d42f2eb6b1f670fa4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-collapsible_b8c8679cc9abfe4d42f2eb6b1f670fa4/node_modules/@radix-ui/react-collapsible/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$id$40$1$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-id@1.1.0_@types+react@19.2.7_react@19.2.0/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$direction$40$1_b0bf9efd14898f7e8c57bcd3e76f6446$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/@radix-ui+react-direction@1_b0bf9efd14898f7e8c57bcd3e76f6446/node_modules/@radix-ui/react-direction/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/next@16.0.7_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
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
;
;
;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = [
    "Home",
    "End",
    "ArrowDown",
    "ArrowUp",
    "ArrowLeft",
    "ArrowRight"
];
var [Collection, useCollection, createCollectionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collection$40$_1877836e0c774bb5579767fada183f64$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collection$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCollection"])(ACCORDION_NAME);
var [createAccordionContext, createAccordionScope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$context$40$1$2e$1_88cce187a70e5166492f1ae6ab05d36b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$context$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContextScope"])(ACCORDION_NAME, [
    createCollectionScope,
    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible_b8c8679cc9abfe4d42f2eb6b1f670fa4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCollapsibleScope"]
]);
var useCollapsibleScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible_b8c8679cc9abfe4d42f2eb6b1f670fa4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCollapsibleScope"])();
var Accordion = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Provider, {
        scope: props.__scopeAccordion,
        children: type === "multiple" ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionImplMultiple, {
            ...multipleProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionImplSingle, {
            ...singleProps,
            ref: forwardedRef
        })
    });
});
Accordion.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(ACCORDION_NAME, {
    collapsible: false
});
var AccordionImplSingle = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { value: valueProp, defaultValue, onValueChange = ()=>{}, collapsible = false, ...accordionSingleProps } = props;
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_f00bb4f5c1b5fb44e10c3440317ba2f6$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value: value ? [
            value
        ] : [],
        onItemOpen: setValue,
        onItemClose: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
            "AccordionImplSingle.useCallback": ()=>collapsible && setValue("")
        }["AccordionImplSingle.useCallback"], [
            collapsible,
            setValue
        ]),
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionCollapsibleProvider, {
            scope: props.__scopeAccordion,
            collapsible,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionImpl, {
                ...accordionSingleProps,
                ref: forwardedRef
            })
        })
    });
});
var AccordionImplMultiple = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { value: valueProp, defaultValue, onValueChange = ()=>{}, ...accordionMultipleProps } = props;
    const [value = [], setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$use$2d$control_f00bb4f5c1b5fb44e10c3440317ba2f6$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$use$2d$controllable$2d$state$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useControllableState"])({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    const handleItemOpen = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "AccordionImplMultiple.useCallback[handleItemOpen]": (itemValue)=>setValue({
                "AccordionImplMultiple.useCallback[handleItemOpen]": (prevValue = [])=>[
                        ...prevValue,
                        itemValue
                    ]
            }["AccordionImplMultiple.useCallback[handleItemOpen]"])
    }["AccordionImplMultiple.useCallback[handleItemOpen]"], [
        setValue
    ]);
    const handleItemClose = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback({
        "AccordionImplMultiple.useCallback[handleItemClose]": (itemValue)=>setValue({
                "AccordionImplMultiple.useCallback[handleItemClose]": (prevValue = [])=>prevValue.filter({
                        "AccordionImplMultiple.useCallback[handleItemClose]": (value2)=>value2 !== itemValue
                    }["AccordionImplMultiple.useCallback[handleItemClose]"])
            }["AccordionImplMultiple.useCallback[handleItemClose]"])
    }["AccordionImplMultiple.useCallback[handleItemClose]"], [
        setValue
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionValueProvider, {
        scope: props.__scopeAccordion,
        value,
        onItemOpen: handleItemOpen,
        onItemClose: handleItemClose,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionCollapsibleProvider, {
            scope: props.__scopeAccordion,
            collapsible: true,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionImpl, {
                ...accordionMultipleProps,
                ref: forwardedRef
            })
        })
    });
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const composedRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$compose$2d$ref_35cf6528c895778d9fc6596d488dfd70$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$compose$2d$refs$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useComposedRefs"])(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$direction$40$1_b0bf9efd14898f7e8c57bcd3e76f6446$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$direction$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDirection"])(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$primitive$40$1$2e$1$2e$1$2f$node_modules$2f40$radix$2d$ui$2f$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["composeEventHandlers"])(props.onKeyDown, (event)=>{
        if (!ACCORDION_KEYS.includes(event.key)) return;
        const target = event.target;
        const triggerCollection = getItems().filter((item)=>!item.ref.current?.disabled);
        const triggerIndex = triggerCollection.findIndex((item)=>item.ref.current === target);
        const triggerCount = triggerCollection.length;
        if (triggerIndex === -1) return;
        event.preventDefault();
        let nextIndex = triggerIndex;
        const homeIndex = 0;
        const endIndex = triggerCount - 1;
        const moveNext = ()=>{
            nextIndex = triggerIndex + 1;
            if (nextIndex > endIndex) {
                nextIndex = homeIndex;
            }
        };
        const movePrev = ()=>{
            nextIndex = triggerIndex - 1;
            if (nextIndex < homeIndex) {
                nextIndex = endIndex;
            }
        };
        switch(event.key){
            case "Home":
                nextIndex = homeIndex;
                break;
            case "End":
                nextIndex = endIndex;
                break;
            case "ArrowRight":
                if (orientation === "horizontal") {
                    if (isDirectionLTR) {
                        moveNext();
                    } else {
                        movePrev();
                    }
                }
                break;
            case "ArrowDown":
                if (orientation === "vertical") {
                    moveNext();
                }
                break;
            case "ArrowLeft":
                if (orientation === "horizontal") {
                    if (isDirectionLTR) {
                        movePrev();
                    } else {
                        moveNext();
                    }
                }
                break;
            case "ArrowUp":
                if (orientation === "vertical") {
                    movePrev();
                }
                break;
        }
        const clampedIndex = nextIndex % triggerCount;
        triggerCollection[clampedIndex].ref.current?.focus();
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionImplProvider, {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.Slot, {
            scope: __scopeAccordion,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].div, {
                ...accordionProps,
                "data-orientation": orientation,
                ref: composedRefs,
                onKeyDown: disabled ? void 0 : handleKeyDown
            })
        })
    });
});
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$id$40$1$2e$1$2e$0_$40$types$2b$react$40$19$2e$2$2e$7_react$40$19$2e$2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$id$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(AccordionItemProvider, {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible_b8c8679cc9abfe4d42f2eb6b1f670fa4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2)=>{
                if (open2) {
                    valueContext.onItemOpen(value);
                } else {
                    valueContext.onItemClose(value);
                }
            }
        })
    });
});
AccordionItem.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$primitive$40$2_dada66e1624d5ca0fc4e85c0f13e246b$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$primitive$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Primitive"].h3, {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
    });
});
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Collection.ItemSlot, {
        scope: __scopeAccordion,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible_b8c8679cc9abfe4d42f2eb6b1f670fa4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
            "data-orientation": accordionContext.orientation,
            id: itemContext.triggerId,
            ...collapsibleScope,
            ...triggerProps,
            ref: forwardedRef
        })
    });
});
AccordionTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, forwardedRef)=>{
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$0$2e$7_react$2d$dom$40$19$2e$2$2e$0_react$40$19$2e$2$2e$0_$5f$react$40$19$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$collapsible_b8c8679cc9abfe4d42f2eb6b1f670fa4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$collapsible$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
            ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
            ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
            ...props.style
        }
    });
});
AccordionContent.displayName = CONTENT_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var Root2 = Accordion;
var Item = AccordionItem;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger;
var Content2 = AccordionContent;
;
 //# sourceMappingURL=index.mjs.map
}),
]);

//# sourceMappingURL=4629a__pnpm_1b79f01f._.js.map