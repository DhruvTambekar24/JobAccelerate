module.exports = [
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/objectSpread2-284232a6.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_objectSpread2,
    "a",
    ()=>_defineProperty
]);
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_setPrototypeOf,
    "a",
    ()=>_isNativeReflectConstruct
]);
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/matrix-baa530bf.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>matrixSum3,
    "b",
    ()=>determinant2,
    "c",
    ()=>determinant4,
    "d",
    ()=>determinant3,
    "g",
    ()=>getMinor,
    "m",
    ()=>matrix
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
;
/**
 *
 * @param terms
 *
 * | a b |
 * | c d |
 *
 * @returns {number} determinant
 */ function determinant2() {
    for(var _len = arguments.length, terms = new Array(_len), _key = 0; _key < _len; _key++){
        terms[_key] = arguments[_key];
    }
    var a = terms[0], b = terms[1], c = terms[2], d = terms[3];
    return a * d - b * c;
}
/**
 *
 * @param terms
 *
 * | a b c |
 * | d e f |
 * | g h i |
 *
 * @returns {number} determinant
 */ function determinant3() {
    for(var _len2 = arguments.length, terms = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
        terms[_key2] = arguments[_key2];
    }
    var a = terms[0], b = terms[1], c = terms[2], d = terms[3], e = terms[4], f = terms[5], g = terms[6], h = terms[7], i = terms[8];
    return a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;
}
/**
 *
 * @param terms
 *
 * | a b c g |
 * | h i j k |
 * | l m n o |
 *
 * @returns {number} determinant
 */ function determinant4() {
    for(var _len3 = arguments.length, terms = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
        terms[_key3] = arguments[_key3];
    }
    terms[0];
    terms[1];
    terms[2];
    terms[3];
    terms[4];
    terms[5];
    terms[6];
    terms[7];
    terms[8];
    terms[9];
    terms[10];
    terms[11];
    terms[12];
    terms[13];
    terms[14]; // TODO
}
/**
 *
 * Get the determinant of matrix m without row r and col c
 *
 * @param {matrix} m Starter matrix
 * @param r row to remove
 * @param c col to remove
 *
 *     | a b c |
 * m = | d e f |
 *     | g h i |
 *
 * getMinor(m, 1, 1) would result in this determinant
 *
 * | a c |
 * | g i |
 *
 * @returns {number} determinant
 */ function getMinor(matrix, r, c) {
    var _matrixTranspose = matrix.clone().transpose();
    var x = [];
    var l = _matrixTranspose.elements.length;
    var n = Math.sqrt(l);
    for(var i = 0; i < l; i++){
        var element = _matrixTranspose.elements[i];
        var row = Math.floor(i / n);
        var col = i % n;
        if (row !== r - 1 && col !== c - 1) {
            x.push(element);
        }
    }
    return determinant3.apply(void 0, x);
}
/**
 *
 */ function matrixSum3(m1, m2) {
    var sum = [];
    var m1Array = m1.toArray();
    var m2Array = m2.toArray();
    for(var i = 0; i < m1Array.length; i++){
        sum[i] = m1Array[i] + m2Array[i];
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix3"]().fromArray(sum);
}
var matrix = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    determinant2: determinant2,
    determinant3: determinant3,
    determinant4: determinant4,
    getMinor: getMinor,
    matrixSum3: matrixSum3
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/triangle-b62b9067.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_slicedToArray,
    "a",
    ()=>_toConsumableArray,
    "b",
    ()=>triangleDeterminant,
    "c",
    ()=>arePointsCollinear,
    "d",
    ()=>doThreePointsMakeARight,
    "e",
    ()=>isTriangleClockwise,
    "f",
    ()=>isPointInCircumcircle,
    "g",
    ()=>getCircumcircle,
    "i",
    ()=>isPointInTriangle,
    "t",
    ()=>triangle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/matrix-baa530bf.esm.js [app-ssr] (ecmascript)");
;
;
;
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _construct(Parent, args, Class) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
/**
 *
 * @param point
 *
 * @param triangle
 *
 * @returns {boolean} true if the point is in the triangle
 *
 * TODO: Find explainer
 */ function isPointInTriangle(point, triangle) {
    var _triangle$ = _slicedToArray(triangle[0], 2), ax = _triangle$[0], ay = _triangle$[1];
    var _triangle$2 = _slicedToArray(triangle[1], 2), bx = _triangle$2[0], by = _triangle$2[1];
    var _triangle$3 = _slicedToArray(triangle[2], 2), cx = _triangle$3[0], cy = _triangle$3[1];
    var _point = _slicedToArray(point, 2), px = _point[0], py = _point[1]; // TODO Sub with static calc
    var matrix = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"](); // prettier-ignore
    matrix.set(ax, ay, ax * ax + ay * ay, 1, bx, by, bx * bx + by * by, 1, cx, cy, cx * cx + cy * cy, 1, px, py, px * px + py * py, 1);
    return matrix.determinant() <= 0;
}
function triangleDeterminant(triangle) {
    var _triangle$4 = _slicedToArray(triangle[0], 2), x1 = _triangle$4[0], y1 = _triangle$4[1];
    var _triangle$5 = _slicedToArray(triangle[1], 2), x2 = _triangle$5[0], y2 = _triangle$5[1];
    var _triangle$6 = _slicedToArray(triangle[2], 2), x3 = _triangle$6[0], y3 = _triangle$6[1]; // prettier-ignore
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(x1, y1, 1, x2, y2, 1, x3, y3, 1);
}
/**
 * Uses triangle area determinant to check if 3 points are collinear.
 * If they are, they can't make a triangle, so the determinant will be 0!
 *
 *      0     1     2
 * ─────■─────■─────■
 *
 *
 * Fun fact, you can use this same determinant to check the order of the points in the triangle
 *
 * NOTE: Should this use a buffer instead? NOTE: Should this use a buffer instead? [x0, y0, x1, y1, x2, y2]?
 *
 */ function arePointsCollinear(points) {
    return triangleDeterminant(points) === 0;
} // TODO This is the same principle as the prev function, find a way to make it have sense
function isTriangleClockwise(triangle) {
    return triangleDeterminant(triangle) < 0;
}
/**
 
The circumcircle is a circle touching all the vertices of a triangle or polygon.

             ┌───┐             
             │ B │             
             └───┘             
           .───●───.           
        ,─'   ╱ ╲   '─.        
      ,'     ╱   ╲     `.      
     ╱      ╱     ╲      ╲     
    ;      ╱       ╲      :    
    │     ╱         ╲     │    
    │    ╱           ╲    │    
    :   ╱             ╲   ;    
     ╲ ╱               ╲ ╱     
┌───┐ ●─────────────────● ┌───┐
│ A │  `.             ,'  │ C │
└───┘    '─.       ,─'    └───┘
            `─────'                         
 */ /**
 *
 * @param triangle
 *
 * @returns {number} circumcircle
 */ // https://math.stackexchange.com/a/1460096
function getCircumcircle(triangle) {
    // TS-TODO the next few lines are ignored because the types aren't current to the change in vectors (that can now be iterated)
    // @ts-ignore
    var _triangle$7 = _slicedToArray(triangle[0], 2), ax = _triangle$7[0], ay = _triangle$7[1]; // @ts-ignore
    var _triangle$8 = _slicedToArray(triangle[1], 2), bx = _triangle$8[0], by = _triangle$8[1]; // @ts-ignore
    var _triangle$9 = _slicedToArray(triangle[2], 2), cx = _triangle$9[0], cy = _triangle$9[1];
    if (arePointsCollinear(triangle)) return null; // points are collinear
    var m = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"](); // prettier-ignore
    m.set(1, 1, 1, 1, ax * ax + ay * ay, ax, ay, 1, bx * bx + by * by, bx, by, 1, cx * cx + cy * cy, cx, cy, 1);
    var m11 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(m, 1, 1);
    var m13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(m, 1, 3);
    var m12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(m, 1, 2);
    var m14 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["g"])(m, 1, 4);
    var x0 = 0.5 * (m12 / m11);
    var y0 = 0.5 * (m13 / m11);
    var r2 = x0 * x0 + y0 * y0 + m14 / m11;
    return {
        x: Math.abs(x0) === 0 ? 0 : x0,
        y: Math.abs(y0) === 0 ? 0 : -y0,
        r: Math.sqrt(r2)
    };
} // https://stackoverflow.com/questions/39984709/how-can-i-check-wether-a-point-is-inside-the-circumcircle-of-3-points
function isPointInCircumcircle(point, triangle) {
    var _ref = Array.isArray(triangle[0]) ? triangle[0] : triangle[0].toArray(), _ref2 = _slicedToArray(_ref, 2), ax = _ref2[0], ay = _ref2[1];
    var _ref3 = Array.isArray(triangle[1]) ? triangle[1] : triangle[1].toArray(), _ref4 = _slicedToArray(_ref3, 2), bx = _ref4[0], by = _ref4[1];
    var _ref5 = Array.isArray(triangle[2]) ? triangle[2] : triangle[2].toArray(), _ref6 = _slicedToArray(_ref5, 2), cx = _ref6[0], cy = _ref6[1];
    var _point2 = _slicedToArray(point, 2), px = _point2[0], py = _point2[1];
    if (arePointsCollinear(triangle)) throw new Error("Collinear points don't form a triangle");
    /**
          | ax-px, ay-py, (ax-px)² + (ay-py)² |
    det = | bx-px, by-py, (bx-px)² + (by-py)² |
          | cx-px, cy-py, (cx-px)² + (cy-py)² |
  */ var x1mpx = ax - px;
    var aympy = ay - py;
    var bxmpx = bx - px;
    var bympy = by - py;
    var cxmpx = cx - px;
    var cympy = cy - py; // prettier-ignore
    var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(x1mpx, aympy, x1mpx * x1mpx + aympy * aympy, bxmpx, bympy, bxmpx * bxmpx + bympy * bympy, cxmpx, cympy, cxmpx * cxmpx + cympy * cympy); // if d is 0, the point is on C
    if (d === 0) {
        return true;
    }
    return !isTriangleClockwise(triangle) ? d > 0 : d < 0;
} // From https://algorithmtutor.com/Computational-Geometry/Determining-if-two-consecutive-segments-turn-left-or-right/
var mv1 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
var mv2 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
/**
 
     ╱      ╲     
    ╱        ╲    
   ▕          ▏   
                  
 right      left  

 * NOTE: Should this use a buffer instead? [x0, y0, x1, y1]?
 */ function doThreePointsMakeARight(points) {
    var _points$map = points.map(function(p) {
        if (Array.isArray(p)) {
            return _construct(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"], _toConsumableArray(p));
        }
        return p;
    }), _points$map2 = _slicedToArray(_points$map, 3), p1 = _points$map2[0], p2 = _points$map2[1], p3 = _points$map2[2];
    if (arePointsCollinear(points)) return false; // @ts-ignore
    var p2p1 = mv1.subVectors(p2, p1); // @ts-ignore
    var p3p1 = mv2.subVectors(p3, p1);
    var cross = p3p1.cross(p2p1);
    return cross > 0;
}
var triangle = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    isPointInTriangle: isPointInTriangle,
    triangleDeterminant: triangleDeterminant,
    arePointsCollinear: arePointsCollinear,
    isTriangleClockwise: isTriangleClockwise,
    getCircumcircle: getCircumcircle,
    isPointInCircumcircle: isPointInCircumcircle,
    doThreePointsMakeARight: doThreePointsMakeARight
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/misc-19a3ec46.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>degToRad,
    "b",
    ()=>radToDeg,
    "c",
    ()=>clamp,
    "d",
    ()=>deltaAngle,
    "e",
    ()=>fibonacciOnSphere,
    "f",
    ()=>fade,
    "g",
    ()=>lexicographic,
    "h",
    ()=>convexHull,
    "i",
    ()=>remap,
    "j",
    ()=>inverseLerp,
    "k",
    ()=>rotateVectorOnVector,
    "l",
    ()=>lerp,
    "m",
    ()=>misc,
    "n",
    ()=>normalize,
    "o",
    ()=>pointToCoordinate,
    "p",
    ()=>pointOnCubeToPointOnSphere,
    "q",
    ()=>coordinateToPoint,
    "r",
    ()=>repeat,
    "s",
    ()=>planeSegmentIntersection,
    "t",
    ()=>pointToPlaneDistance,
    "u",
    ()=>getIndexFrom3D,
    "v",
    ()=>vectorEquals,
    "w",
    ()=>get3DFromIndex,
    "x",
    ()=>getIndexFrom2D,
    "y",
    ()=>get2DFromIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/triangle-b62b9067.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/matrix-baa530bf.esm.js [app-ssr] (ecmascript)");
;
;
;
/**
 * Clamps a value between a range.
 */ function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
} // Loops the value t, so that it is never larger than length and never smaller than 0.
function repeat(t, length) {
    return clamp(t - Math.floor(t / length) * length, 0, length);
} // Calculates the shortest difference between two given angles.
function deltaAngle(current, target) {
    var delta = repeat(target - current, Math.PI * 2);
    if (delta > Math.PI) delta -= Math.PI * 2;
    return delta;
}
/**
 * Converts degrees to radians.
 */ function degToRad(degrees) {
    return degrees / 180 * Math.PI;
}
/**
 * Converts radians to degrees.
 */ function radToDeg(radians) {
    return radians * 180 / Math.PI;
} // adapted from https://gist.github.com/stephanbogner/a5f50548a06bec723dcb0991dcbb0856 by https://twitter.com/st_phan
function fibonacciOnSphere(buffer, _ref) {
    var _ref$radius = _ref.radius, radius = _ref$radius === void 0 ? 1 : _ref$radius;
    var samples = buffer.length / 3;
    var offset = 2 / samples;
    var increment = Math.PI * (3 - 2.2360679775);
    for(var i = 0; i < buffer.length; i += 3){
        var y = i * offset - 1 + offset / 2;
        var distance = Math.sqrt(1 - Math.pow(y, 2));
        var phi = i % samples * increment;
        var x = Math.cos(phi) * distance;
        var z = Math.sin(phi) * distance;
        buffer[i] = x * radius;
        buffer[i + 1] = y * radius;
        buffer[i + 2] = z * radius;
    }
} // @ts-ignore
function vectorEquals(a, b) {
    var eps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Number.EPSILON;
    return Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps && Math.abs(a.z - b.z) < eps;
}
/**
 * Sorts vectors in lexicographic order, works with both v2 and v3
 *
 *  Use as:
 *  const sorted = arrayOfVectors.sort(lexicographicOrder)
 */ // https://en.wikipedia.org/wiki/Lexicographic_order
function lexicographic(a, b) {
    if (a.x === b.x) {
        // do a check to see if points is 3D,
        // in which case add y eq check and sort by z
        if (typeof a.z !== "undefined") {
            if (a.y === b.y) {
                return a.z - b.z;
            }
        }
        return a.y - b.y;
    }
    return a.x - b.x;
}
/**
 * Convex Hull
 *
 * Returns an array of 2D Vectors representing the convex hull of a set of 2D Vectors
 */ /**
 * Calculate the convex hull of a set of points
 */ function convexHull(_points) {
    var points = _points.sort(lexicographic); // put p1 and p2 in a list lUpper with p1 as the first point
    var lUpper = [
        points[0],
        points[1]
    ]; // for i <- 3 to n
    for(var i = 2; i < points.length; i++){
        lUpper.push(points[i]); // while lUpper contains more than 2 points and the last three points in lUpper do not make a right turn
        while(lUpper.length > 2 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(lUpper.slice(-3)))){
            // delete the middle of the last three points from lUpper
            lUpper.splice(lUpper.length - 2, 1);
        }
    } // put pn and pn-1 in a list lLower with pn as the first point
    var lLower = [
        points[points.length - 1],
        points[points.length - 2]
    ]; // for (i <- n - 2 downto 1)
    for(var _i = points.length - 3; _i >= 0; _i--){
        // append pi to lLower
        lLower.push(points[_i]); // while lLower contains more than 2 points and the last three points in lLower do not make a right turn
        while(lLower.length > 2 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(lLower.slice(-3)))){
            // delete the middle of the last three points from lLower
            lLower.splice(lLower.length - 2, 1);
        }
    } // remove the first and last point from lLower to avoid duplication of the points where the upper and lower hull meet
    lLower.splice(0, 1);
    lLower.splice(lLower.length - 1, 1); // prettier-ignore
    var c = [].concat(lUpper, lLower);
    return c;
}
function remap(x, _ref2, _ref3) {
    var _ref4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(_ref2, 2), low1 = _ref4[0], high1 = _ref4[1];
    var _ref5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(_ref3, 2), low2 = _ref5[0], high2 = _ref5[1];
    return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
}
/**
 *
 * https://www.desmos.com/calculator/vsnmlaljdu
 *
 * Ease-in-out, goes to -Infinite before 0 and Infinite after 1
 *
 * @param t
 * @returns
 */ function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
}
/**
 *
 * Returns the result of linearly interpolating between input A and input B by input T.
 *
 * @param v0
 * @param v1
 * @param t
 * @returns
 */ function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}
/**
 *
 * Returns the linear parameter that produces the interpolant specified by input T within the range of input A to input B.
 *
 * @param v0
 * @param v1
 * @param t
 * @returns
 */ function inverseLerp(v0, v1, t) {
    return (t - v0) / (v1 - v0);
}
/**
 *
 */ function normalize(x, y, z) {
    var m = Math.sqrt(x * x + y * y + z * z);
    return [
        x / m,
        y / m,
        z / m
    ];
}
/**
 *
 */ function pointOnCubeToPointOnSphere(x, y, z) {
    var x2 = x * x;
    var y2 = y * y;
    var z2 = z * z;
    var nx = x * Math.sqrt(1 - (y2 + z2) / 2 + y2 * z2 / 3);
    var ny = y * Math.sqrt(1 - (z2 + x2) / 2 + z2 * x2 / 3);
    var nz = z * Math.sqrt(1 - (x2 + y2) / 2 + x2 * y2 / 3);
    return [
        nx,
        ny,
        nz
    ];
} // https://math.stackexchange.com/questions/180418/calculate-rotation-matrix-to-align-vector-a-to-vector-b-in-3d
/**
 * Give two unit vectors a and b, returns the transformation matrix that rotates a onto b.
 *
 * */ function rotateVectorOnVector(a, b) {
    var v = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]().crossVectors(a, b);
    var c = a.dot(b);
    var i = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix3"]().identity(); //  skew-symmetric cross-product matrix of 𝑣 https://en.wikipedia.org/wiki/Skew-symmetric_matrix
    // prettier-ignore
    var vx = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix3"]().set(0, -v.z, v.y, v.z, 0, -v.x, -v.y, v.x, 0);
    var vxsquared = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix3"]().multiplyMatrices(vx, vx).multiplyScalar(1 / (1 + c));
    var _final = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(i, vx), vxsquared);
    return _final;
} // calculate latitude and longitude (in radians) from point on unit sphere
function pointToCoordinate(x, y, z) {
    var lat = Math.asin(y);
    var lon = Math.atan2(x, -z);
    return [
        lat,
        lon
    ];
} // calculate point on unit sphere given latitude and logitude in radians
function coordinateToPoint(lat, lon) {
    var y = Math.sin(lat);
    var r = Math.cos(lat);
    var x = Math.sin(lon) * r;
    var z = -Math.cos(lon) * r;
    return [
        x,
        y,
        z
    ];
}
/**
 * Given a plane and a segment, return the intersection point if it exists or null it doesn't.
 */ function planeSegmentIntersection(plane, segment) {
    var _segment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(segment, 2), a = _segment[0], b = _segment[1];
    var matrix = rotateVectorOnVector(plane.normal, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](0, 1, 0));
    var t = inverseLerp(a.clone().applyMatrix3(matrix).y, b.clone().applyMatrix3(matrix).y, 0);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]().lerpVectors(a, b, t);
}
/**
 * Given a plane and a point, return the distance.
 */ function pointToPlaneDistance(p, plane) {
    var d = plane.normal.dot(p); // TODO
    return d;
}
function getIndexFrom3D(coords, sides) {
    var _coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(coords, 3), ix = _coords[0], iy = _coords[1], iz = _coords[2];
    var _sides = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(sides, 2), rx = _sides[0], ry = _sides[1];
    return iz * rx * ry + iy * rx + ix;
}
function get3DFromIndex(index, size) {
    var _size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(size, 2), rx = _size[0], ry = _size[1];
    var a = rx * ry;
    var z = index / a;
    var b = index - a * z;
    var y = b / rx;
    var x = b % rx;
    return [
        x,
        y,
        z
    ];
}
function getIndexFrom2D(coords, size) {
    return coords[0] + size[0] * coords[1];
}
function get2DFromIndex(index, columns) {
    var x = index % columns;
    var y = Math.floor(index / columns);
    return [
        x,
        y
    ];
}
var misc = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    clamp: clamp,
    repeat: repeat,
    deltaAngle: deltaAngle,
    degToRad: degToRad,
    radToDeg: radToDeg,
    fibonacciOnSphere: fibonacciOnSphere,
    vectorEquals: vectorEquals,
    lexicographic: lexicographic,
    convexHull: convexHull,
    remap: remap,
    fade: fade,
    lerp: lerp,
    inverseLerp: inverseLerp,
    normalize: normalize,
    pointOnCubeToPointOnSphere: pointOnCubeToPointOnSphere,
    rotateVectorOnVector: rotateVectorOnVector,
    pointToCoordinate: pointToCoordinate,
    coordinateToPoint: coordinateToPoint,
    planeSegmentIntersection: planeSegmentIntersection,
    pointToPlaneDistance: pointToPlaneDistance,
    getIndexFrom3D: getIndexFrom3D,
    get3DFromIndex: get3DFromIndex,
    getIndexFrom2D: getIndexFrom2D,
    get2DFromIndex: get2DFromIndex
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/vector2-d2bf51f1.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *
 */ __turbopack_context__.s([
    "a",
    ()=>add,
    "b",
    ()=>addValue,
    "c",
    ()=>subValue,
    "d",
    ()=>scale,
    "e",
    ()=>dot,
    "f",
    ()=>length,
    "g",
    ()=>distance,
    "l",
    ()=>lengthSqr,
    "o",
    ()=>one,
    "s",
    ()=>sub,
    "v",
    ()=>vector2,
    "z",
    ()=>zero
]);
function zero() {
    return [
        0,
        0
    ];
}
function one() {
    return [
        1,
        1
    ];
}
function add(a, b) {
    return [
        a[0] + b[0],
        a[1] + b[1]
    ];
}
function addValue(a, n) {
    return [
        a[0] + n,
        a[1] + n
    ];
}
function sub(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1]
    ];
}
function subValue(a, n) {
    return [
        a[0] - n,
        a[1] - n
    ];
}
function scale(a, n) {
    return [
        a[0] * n,
        a[1] * n
    ];
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
/**
 * Calculate the squared length of a vector.
 * Use this when comparing two vectors instead of length, as it's more efficient (no sqrt)
 */ function lengthSqr(a) {
    return a[0] * a[0] + a[1] * a[1];
}
/**
 * Calculate the length of a vector.
 * If you only need to compare lenghts, consider using the more efficient lengthSqr
 */ function length(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}
function distance(a, b) {
    return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
}
var vector2 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    zero: zero,
    one: one,
    add: add,
    addValue: addValue,
    sub: sub,
    subValue: subValue,
    scale: scale,
    dot: dot,
    lengthSqr: lengthSqr,
    length: length,
    distance: distance
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/vector3-0a088b7f.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 *
 */ __turbopack_context__.s([
    "a",
    ()=>add,
    "b",
    ()=>addValue,
    "c",
    ()=>subValue,
    "d",
    ()=>scale,
    "e",
    ()=>dot,
    "f",
    ()=>cross,
    "g",
    ()=>length,
    "h",
    ()=>distance,
    "l",
    ()=>lengthSqr,
    "o",
    ()=>one,
    "s",
    ()=>sub,
    "v",
    ()=>vector3,
    "z",
    ()=>zero
]);
function zero() {
    return [
        0,
        0,
        0
    ];
}
function one() {
    return [
        1,
        1,
        1
    ];
}
function add(a, b) {
    return [
        a[0] + b[0],
        a[1] + b[1],
        a[2] + b[2]
    ];
}
function addValue(a, n) {
    return [
        a[0] + n,
        a[1] + n,
        a[2] + n
    ];
}
function sub(a, b) {
    return [
        a[0] - b[0],
        a[1] - b[1],
        a[2] - b[2]
    ];
}
function subValue(a, n) {
    return [
        a[0] - n,
        a[1] - n,
        a[2] - n
    ];
}
function scale(a, n) {
    return [
        a[0] * n,
        a[1] * n,
        a[2] * n
    ];
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(a, b) {
    var x = a[1] * b[2] - a[2] * b[1];
    var y = a[2] * b[0] - a[0] * b[2];
    var z = a[0] * b[1] - a[1] * b[0];
    return [
        x,
        y,
        z
    ];
}
/**
 * Calculate the squared length of a vector.
 * Use this when comparing two vectors instead of length, as it's more efficient (no sqrt)
 */ function lengthSqr(a) {
    return a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
}
/**
 * Calculate the length of a vector.
 * If you only need to compare lenghts, consider using the more efficient lengthSqr
 */ function length(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
}
function distance(a, b) {
    return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]) + (a[2] - b[2]) * (a[2] - b[2]));
}
var vector3 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    zero: zero,
    one: one,
    add: add,
    addValue: addValue,
    sub: sub,
    subValue: subValue,
    scale: scale,
    dot: dot,
    cross: cross,
    lengthSqr: lengthSqr,
    length: length,
    distance: distance
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/buffer-59a95d05.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>addAxis,
    "b",
    ()=>buffer,
    "c",
    ()=>reduce,
    "d",
    ()=>center,
    "e",
    ()=>expand,
    "f",
    ()=>sort,
    "l",
    ()=>lerp,
    "m",
    ()=>map,
    "r",
    ()=>rotate,
    "s",
    ()=>swizzle,
    "t",
    ()=>translate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/objectSpread2-284232a6.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/triangle-b62b9067.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/misc-19a3ec46.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$vector2$2d$d2bf51f1$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/vector2-d2bf51f1.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$vector3$2d$0a088b7f$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/vector3-0a088b7f.esm.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function swizzle(buffer) {
    var stride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var swizzle = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "xyz";
    var o = {
        x: 0,
        y: 0,
        z: 0
    };
    for(var _i = 0; _i < buffer.length; _i += stride){
        o.x = buffer[_i];
        o.y = buffer[_i + 1];
        o.z = buffer[_i + 2];
        var _swizzle$split = swizzle.split(""), _swizzle$split2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(_swizzle$split, 3), x = _swizzle$split2[0], y = _swizzle$split2[1], z = _swizzle$split2[2]; // TODO Fix this ugly type
        buffer[_i] = o[x];
        buffer[_i + 1] = o[y];
        if (stride === 3) {
            buffer[_i + 2] = o[z];
        }
    }
    return buffer;
}
/**
 * @param buffer A stride 2 points buffer
 * @param valueGenerator A function that returns the value of the z axis at index i
 * @returns
 */ function addAxis(buffer, size) {
    var valueGenerator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function() {
        return Math.random();
    };
    var newSize = size + 1;
    var newBuffer = new Float32Array(buffer.length / size * newSize);
    for(var _i2 = 0; _i2 < buffer.length; _i2 += size){
        var _j = _i2 / size * newSize;
        newBuffer[_j] = buffer[_i2];
        newBuffer[_j + 1] = buffer[_i2 + 1];
        if (size === 2) {
            newBuffer[_j + 2] = valueGenerator(_j);
        }
        if (size === 3) {
            newBuffer[_j + 2] = buffer[_i2 + 2];
            newBuffer[_j + 3] = valueGenerator(_j);
        }
    }
    return newBuffer;
}
/**
 * Lerps bufferA and bufferB into final
 *
 * @param bufferA
 * @param bufferB
 * @param final
 * @param t
 */ function lerp(bufferA, bufferB, _final, t) {
    for(var _i3 = 0; _i3 < bufferA.length; _i3++){
        _final[_i3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(bufferA[_i3], bufferB[_i3], t);
    }
} // TODO add stride
// TODO Fix types & vectors
/**
 *
 * Translate all points in the passed buffer by the passed translactionVector.
 *
 * @param buffer
 * @param translationVector
 * @returns
 */ function translate(buffer, translationVector) {
    var stride = translationVector.length;
    for(var _i4 = 0; _i4 < buffer.length; _i4 += stride){
        buffer[_i4] += translationVector[0];
        buffer[_i4 + 1] += translationVector[1];
        buffer[_i4 + 2] += translationVector[2];
    }
    return buffer;
} // TODO add stride
// TODO remove quaternion & vector3 dependencies
function rotate(buffer, rotation) {
    var defaultRotation = {
        center: [
            0,
            0,
            0
        ],
        q: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]().identity()
    };
    var v = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
    var _defaultRotation$rota = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultRotation), rotation), q = _defaultRotation$rota.q, center = _defaultRotation$rota.center;
    for(var _i5 = 0; _i5 < buffer.length; _i5 += 3){
        v.set(buffer[_i5] - center[0], buffer[_i5 + 1] - center[1], buffer[_i5 + 2] - center[2]);
        v.applyQuaternion(q);
        buffer[_i5] = v.x + center[0];
        buffer[_i5 + 1] = v.y + center[1];
        buffer[_i5 + 2] = v.z + center[1];
    }
    return buffer;
}
function map(buffer, stride, callback) {
    for(var _i6 = 0, _j2 = 0; _i6 < buffer.length; _i6 += stride, _j2++){
        if (stride === 3) {
            var res = callback([
                buffer[_i6],
                buffer[_i6 + 1],
                buffer[_i6 + 2]
            ], _j2);
            buffer.set(res, _i6);
        } else {
            buffer.set(callback([
                buffer[_i6],
                buffer[_i6 + 1]
            ], _j2), _i6);
        }
    }
    return buffer;
}
/**
 * Reduces passed buffer
 */ function reduce(b, stride, callback, acc) {
    for(var _i7 = 0, _j3 = 0; _i7 < b.length; _i7 += stride, _j3++){
        if (stride === 2) {
            acc = callback(acc, [
                b[_i7],
                b[_i7 + 1]
            ], _j3);
        } else {
            acc = callback(acc, [
                b[_i7],
                b[_i7 + 1],
                b[_i7 + 2]
            ], _j3);
        }
    }
    return acc;
}
function expand(b, stride, opts) {
    var defaultExpandOptions = {
        center: [
            0,
            0,
            0
        ]
    };
    var _defaultExpandOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultExpandOptions), opts), center = _defaultExpandOptions.center, distance = _defaultExpandOptions.distance;
    for(var _i8 = 0; _i8 < b.length; _i8 += stride){
        /**
     * 1. translate to origin (subtract the scaling center)
     * 2. scale by the correct amount (multiply by a constant)
     * 2. translate from origin (add the scaling center)
     */ b[_i8] = (b[_i8] - center[0]) * (1 + distance) + center[0];
        b[_i8 + 1] = (b[_i8 + 1] - center[1]) * (1 + distance) + center[1];
        if (stride === 3) {
            b[_i8 + 2] = (b[_i8 + 2] - center[1]) * (1 + distance) + center[2];
        }
    }
    return b;
}
function center(myBuffer, stride) {
    return reduce(myBuffer, stride, function(acc, point) {
        if (stride === 3) {
            // some type hacking is necessary to avoid type errors going from [n, n] => [n, n, n]
            // but it's not an actual problem, as this path would always get a v3
            acc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$vector3$2d$0a088b7f$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(acc, point);
        } else {
            acc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$vector2$2d$d2bf51f1$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(acc, point);
        }
        return acc;
    }, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$vector2$2d$d2bf51f1$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["z"])());
}
function sort(myBuffer, stride, callback) {
    // 1. make an array of the correct size
    var indices = Int16Array.from({
        length: myBuffer.length / stride
    }, function(_, i) {
        return i;
    }); // 2. sort the indices array
    indices.sort(function(a, b) {
        var pa = myBuffer.slice(a * stride, a * stride + stride);
        var pb = myBuffer.slice(b * stride, b * stride + stride);
        return callback(pa, pb);
    }); // 3. make a copy of the original array to fetch indices from
    var prevBuffer = myBuffer.slice(0); // 4. mutate the passed array
    for(var _i9 = 0; _i9 < indices.length; _i9++){
        var _j4 = indices[_i9];
        myBuffer.set(prevBuffer.slice(_j4 * stride, _j4 * stride + stride), _i9 * 3);
    }
    return myBuffer;
}
var buffer = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    swizzle: swizzle,
    addAxis: addAxis,
    lerp: lerp,
    translate: translate,
    rotate: rotate,
    map: map,
    reduce: reduce,
    expand: expand,
    center: center,
    sort: sort
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/classCallCheck-9098b006.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_classCallCheck
]);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/index-0332b2ed.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "F",
    ()=>FlashGen,
    "G",
    ()=>Generator,
    "a",
    ()=>inSphere,
    "b",
    ()=>inCircle,
    "c",
    ()=>onCircle,
    "d",
    ()=>inRect,
    "e",
    ()=>onRect,
    "f",
    ()=>inBox,
    "g",
    ()=>onBox,
    "i",
    ()=>index,
    "n",
    ()=>noise,
    "o",
    ()=>onSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/objectSpread2-284232a6.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/classCallCheck-9098b006.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/misc-19a3ec46.esm.js [app-ssr] (ecmascript)");
;
;
;
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */ var Grad = function Grad(x, y, z) {
    var _this = this;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(this, Grad);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "dot2", function(x, y) {
        return _this.x * x + _this.y * y;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "dot3", function(x, y, z) {
        return _this.x * x + _this.y * y + _this.z * z;
    });
    this.x = x;
    this.y = y;
    this.z = z;
};
var grad3 = [
    new Grad(1, 1, 0),
    new Grad(-1, 1, 0),
    new Grad(1, -1, 0),
    new Grad(-1, -1, 0),
    new Grad(1, 0, 1),
    new Grad(-1, 0, 1),
    new Grad(1, 0, -1),
    new Grad(-1, 0, -1),
    new Grad(0, 1, 1),
    new Grad(0, -1, 1),
    new Grad(0, 1, -1),
    new Grad(0, -1, -1)
];
var p = [
    151,
    160,
    137,
    91,
    90,
    15,
    131,
    13,
    201,
    95,
    96,
    53,
    194,
    233,
    7,
    225,
    140,
    36,
    103,
    30,
    69,
    142,
    8,
    99,
    37,
    240,
    21,
    10,
    23,
    190,
    6,
    148,
    247,
    120,
    234,
    75,
    0,
    26,
    197,
    62,
    94,
    252,
    219,
    203,
    117,
    35,
    11,
    32,
    57,
    177,
    33,
    88,
    237,
    149,
    56,
    87,
    174,
    20,
    125,
    136,
    171,
    168,
    68,
    175,
    74,
    165,
    71,
    134,
    139,
    48,
    27,
    166,
    77,
    146,
    158,
    231,
    83,
    111,
    229,
    122,
    60,
    211,
    133,
    230,
    220,
    105,
    92,
    41,
    55,
    46,
    245,
    40,
    244,
    102,
    143,
    54,
    65,
    25,
    63,
    161,
    1,
    216,
    80,
    73,
    209,
    76,
    132,
    187,
    208,
    89,
    18,
    169,
    200,
    196,
    135,
    130,
    116,
    188,
    159,
    86,
    164,
    100,
    109,
    198,
    173,
    186,
    3,
    64,
    52,
    217,
    226,
    250,
    124,
    123,
    5,
    202,
    38,
    147,
    118,
    126,
    255,
    82,
    85,
    212,
    207,
    206,
    59,
    227,
    47,
    16,
    58,
    17,
    182,
    189,
    28,
    42,
    223,
    183,
    170,
    213,
    119,
    248,
    152,
    2,
    44,
    154,
    163,
    70,
    221,
    153,
    101,
    155,
    167,
    43,
    172,
    9,
    129,
    22,
    39,
    253,
    19,
    98,
    108,
    110,
    79,
    113,
    224,
    232,
    178,
    185,
    112,
    104,
    218,
    246,
    97,
    228,
    251,
    34,
    242,
    193,
    238,
    210,
    144,
    12,
    191,
    179,
    162,
    241,
    81,
    51,
    145,
    235,
    249,
    14,
    239,
    107,
    49,
    192,
    214,
    31,
    181,
    199,
    106,
    157,
    184,
    84,
    204,
    176,
    115,
    121,
    50,
    45,
    127,
    4,
    150,
    254,
    138,
    236,
    205,
    93,
    222,
    114,
    67,
    29,
    24,
    72,
    243,
    141,
    128,
    195,
    78,
    66,
    215,
    61,
    156,
    180
]; // To remove the need for index wrapping, double the permutation table length
var perm = new Array(512);
var gradP = new Array(512); // This isn't a very good seeding function, but it works ok. It supports 2^16
// different seed values. Write something better if you need more seeds.
var seed = function seed(_seed) {
    if (_seed > 0 && _seed < 1) {
        // Scale the seed out
        _seed *= 65536;
    }
    _seed = Math.floor(_seed);
    if (_seed < 256) {
        _seed |= _seed << 8;
    }
    for(var i = 0; i < 256; i++){
        var v;
        if (i & 1) {
            v = p[i] ^ _seed & 255;
        } else {
            v = p[i] ^ _seed >> 8 & 255;
        }
        perm[i] = perm[i + 256] = v;
        gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
};
seed(0);
/*
  for(var i=0; i<256; i++) {
    perm[i] = perm[i + 256] = p[i];
    gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
  }*/ // Skewing and unskewing factors for 2, 3, and 4 dimensions
var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6; // 2D simplex noise
var simplex2 = function simplex2(xin, yin) {
    var n0, n1, n2; // Noise contributions from the three corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin + yin) * F2; // Hairy factor for 2D
    var i = Math.floor(xin + s);
    var j = Math.floor(yin + s);
    var t = (i + j) * G2;
    var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin - j + t; // For the 2D case, the simplex shape is an equilateral triangle.
    // Determine which simplex we are in.
    var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
    if (x0 > y0) {
        // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        i1 = 1;
        j1 = 0;
    } else {
        // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        i1 = 0;
        j1 = 1;
    } // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
    // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
    // c = (3-sqrt(3))/6
    var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
    var y1 = y0 - j1 + G2;
    var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
    var y2 = y0 - 1 + 2 * G2; // Work out the hashed gradient indices of the three simplex corners
    i &= 255;
    j &= 255;
    var gi0 = gradP[i + perm[j]];
    var gi1 = gradP[i + i1 + perm[j + j1]];
    var gi2 = gradP[i + 1 + perm[j + 1]]; // Calculate the contribution from the three corners
    var t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 < 0) {
        n0 = 0;
    } else {
        t0 *= t0;
        n0 = t0 * t0 * gi0.dot2(x0, y0); // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 < 0) {
        n1 = 0;
    } else {
        t1 *= t1;
        n1 = t1 * t1 * gi1.dot2(x1, y1);
    }
    var t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 < 0) {
        n2 = 0;
    } else {
        t2 *= t2;
        n2 = t2 * t2 * gi2.dot2(x2, y2);
    } // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 70 * (n0 + n1 + n2);
}; // 3D simplex noise
var simplex3 = function simplex3(xin, yin, zin) {
    var n0, n1, n2, n3; // Noise contributions from the four corners
    // Skew the input space to determine which simplex cell we're in
    var s = (xin + yin + zin) * F3; // Hairy factor for 2D
    var i = Math.floor(xin + s);
    var j = Math.floor(yin + s);
    var k = Math.floor(zin + s);
    var t = (i + j + k) * G3;
    var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
    var y0 = yin - j + t;
    var z0 = zin - k + t; // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
    // Determine which simplex we are in.
    var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
    var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
    if (x0 >= y0) {
        if (y0 >= z0) {
            i1 = 1;
            j1 = 0;
            k1 = 0;
            i2 = 1;
            j2 = 1;
            k2 = 0;
        } else if (x0 >= z0) {
            i1 = 1;
            j1 = 0;
            k1 = 0;
            i2 = 1;
            j2 = 0;
            k2 = 1;
        } else {
            i1 = 0;
            j1 = 0;
            k1 = 1;
            i2 = 1;
            j2 = 0;
            k2 = 1;
        }
    } else {
        if (y0 < z0) {
            i1 = 0;
            j1 = 0;
            k1 = 1;
            i2 = 0;
            j2 = 1;
            k2 = 1;
        } else if (x0 < z0) {
            i1 = 0;
            j1 = 1;
            k1 = 0;
            i2 = 0;
            j2 = 1;
            k2 = 1;
        } else {
            i1 = 0;
            j1 = 1;
            k1 = 0;
            i2 = 1;
            j2 = 1;
            k2 = 0;
        }
    } // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
    // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
    // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
    // c = 1/6.
    var x1 = x0 - i1 + G3; // Offsets for second corner
    var y1 = y0 - j1 + G3;
    var z1 = z0 - k1 + G3;
    var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
    var y2 = y0 - j2 + 2 * G3;
    var z2 = z0 - k2 + 2 * G3;
    var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
    var y3 = y0 - 1 + 3 * G3;
    var z3 = z0 - 1 + 3 * G3; // Work out the hashed gradient indices of the four simplex corners
    i &= 255;
    j &= 255;
    k &= 255;
    var gi0 = gradP[i + perm[j + perm[k]]];
    var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
    var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
    var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]]; // Calculate the contribution from the four corners
    var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
    if (t0 < 0) {
        n0 = 0;
    } else {
        t0 *= t0;
        n0 = t0 * t0 * gi0.dot3(x0, y0, z0); // (x,y) of grad3 used for 2D gradient
    }
    var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
    if (t1 < 0) {
        n1 = 0;
    } else {
        t1 *= t1;
        n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
    }
    var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
    if (t2 < 0) {
        n2 = 0;
    } else {
        t2 *= t2;
        n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
    }
    var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
    if (t3 < 0) {
        n3 = 0;
    } else {
        t3 *= t3;
        n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
    } // Add contributions from each corner to get the final noise value.
    // The result is scaled to return values in the interval [-1,1].
    return 32 * (n0 + n1 + n2 + n3);
}; // ##### Perlin noise stuff
// 2D Perlin Noise
var perlin2 = function perlin2(x, y) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y); // Get relative xy coordinates of point within that cell
    x = x - X;
    y = y - Y; // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255;
    Y = Y & 255; // Calculate noise contributions from each of the four corners
    var n00 = gradP[X + perm[Y]].dot2(x, y);
    var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
    var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
    var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1); // Compute the fade curve value for x
    var u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(x); // Interpolate the four results
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(n00, n10, u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(n01, n11, u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(y));
}; // 3D Perlin Noise
var perlin3 = function perlin3(x, y, z) {
    // Find unit grid cell containing point
    var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z); // Get relative xyz coordinates of point within that cell
    x = x - X;
    y = y - Y;
    z = z - Z; // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255;
    Y = Y & 255;
    Z = Z & 255; // Calculate noise contributions from each of the eight corners
    var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
    var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
    var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
    var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
    var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
    var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
    var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
    var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1); // Compute the fade curve value for x, y, z
    var u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(x);
    var v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(y);
    var w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["f"])(z); // Interpolate
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(n000, n100, u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(n001, n101, u), w), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(n010, n110, u), (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["l"])(n011, n111, u), w), v);
};
var noise = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    seed: seed,
    simplex2: simplex2,
    simplex3: simplex3,
    perlin2: perlin2,
    perlin3: perlin3
});
var TAU = Math.PI * 2;
var FlashGen = /*#__PURE__*/ function() {
    function FlashGen(props) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(this, FlashGen);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "nextBurstTime", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "nextFlashEndTime", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "flashesDone", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "isFlashing", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "currentCount", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "flashIntensity", 0);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "isDecaying", false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "autoBurst", true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "decaySpeed", 40);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "minInterval", 5000);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "maxInterval", 10000);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "minDuration", 50);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "maxDuration", 300);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "count", 5);
        Object.assign(this, props);
    }
    _createClass(FlashGen, [
        {
            key: "scheduleNextBurst",
            value: function scheduleNextBurst(currentTime) {
                var burstInterval = Math.random() * (this.maxInterval - this.minInterval) + this.minInterval;
                this.nextBurstTime = currentTime + burstInterval / 1000;
                this.flashesDone = 0;
                this.isFlashing = false;
            }
        },
        {
            key: "burst",
            value: function burst() {
                this.nextBurstTime = 0;
                this.flashesDone = 0;
                this.isFlashing = false;
            }
        },
        {
            key: "update",
            value: function update(currentTime, delta) {
                if (currentTime > this.nextBurstTime && this.currentCount === 0) {
                    this.currentCount = Math.floor(Math.random() * this.count) + 1;
                }
                if (this.flashesDone < this.currentCount && currentTime > this.nextBurstTime) {
                    if (!this.isFlashing) {
                        this.isFlashing = true;
                        this.flashIntensity = 1;
                        var flashDuration = Math.random() * (this.maxDuration - this.minDuration) + this.minDuration;
                        this.nextFlashEndTime = currentTime + flashDuration / 1000;
                    } else if (this.isFlashing && currentTime > this.nextFlashEndTime) {
                        this.isFlashing = false;
                        this.isDecaying = true;
                        this.flashesDone++;
                        if (this.flashesDone >= this.currentCount) {
                            this.currentCount = 0;
                            if (this.autoBurst) this.scheduleNextBurst(currentTime);
                        }
                    }
                }
                if (this.isDecaying) {
                    this.flashIntensity -= delta * this.decaySpeed;
                    this.flashIntensity = Math.max(0, Math.min(1, this.flashIntensity));
                    if (this.flashIntensity <= 0) {
                        this.isDecaying = false;
                        this.flashIntensity = 0;
                    }
                }
                return this.flashIntensity;
            }
        }
    ]);
    return FlashGen;
}(); // Credits @kchapelier https://github.com/kchapelier/wavefunctioncollapse/blob/master/example/lcg.js#L22-L30
function normalizeSeed(seed) {
    if (typeof seed === "number") {
        seed = Math.abs(seed);
    } else if (typeof seed === "string") {
        var string = seed;
        seed = 0;
        for(var i = 0; i < string.length; i++){
            seed = (seed + (i + 1) * (string.charCodeAt(i) % 96)) % 2147483647;
        }
    }
    if (seed === 0) {
        seed = 311;
    }
    return seed;
}
function lcgRandom(seed) {
    var state = normalizeSeed(seed);
    return function() {
        var result = state * 48271 % 2147483647;
        state = result;
        return result / 2147483647;
    };
}
var Generator = function Generator(_seed) {
    var _this = this;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(this, Generator);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "seed", 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "init", function(seed) {
        _this.seed = seed;
        _this.value = lcgRandom(seed);
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(this, "value", lcgRandom(this.seed));
    this.init(_seed);
};
var defaultGen = new Generator(Math.random());
/***
 * [3D] Sphere
 */ var defaultSphere = {
    radius: 1,
    center: [
        0,
        0,
        0
    ]
}; // random on surface of sphere
// - https://twitter.com/fermatslibrary/status/1430932503578226688
// - https://mathworld.wolfram.com/SpherePointPicking.html
function onSphere(buffer, sphere) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultSphere$sphere = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultSphere), sphere), radius = _defaultSphere$sphere.radius, center = _defaultSphere$sphere.center;
    for(var i = 0; i < buffer.length; i += 3){
        var u = rng.value();
        var v = rng.value();
        var theta = Math.acos(2 * v - 1);
        var phi = TAU * u;
        buffer[i] = Math.sin(theta) * Math.cos(phi) * radius + center[0];
        buffer[i + 1] = Math.sin(theta) * Math.sin(phi) * radius + center[1];
        buffer[i + 2] = Math.cos(theta) * radius + center[2];
    }
    return buffer;
} // from "Another Method" https://datagenetics.com/blog/january32020/index.html
function inSphere(buffer, sphere) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultSphere$sphere2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultSphere), sphere), radius = _defaultSphere$sphere2.radius, center = _defaultSphere$sphere2.center;
    for(var i = 0; i < buffer.length; i += 3){
        var u = Math.pow(rng.value(), 1 / 3);
        var x = rng.value() * 2 - 1;
        var y = rng.value() * 2 - 1;
        var z = rng.value() * 2 - 1;
        var mag = Math.sqrt(x * x + y * y + z * z);
        x = u * x / mag;
        y = u * y / mag;
        z = u * z / mag;
        buffer[i] = x * radius + center[0];
        buffer[i + 1] = y * radius + center[1];
        buffer[i + 2] = z * radius + center[2];
    }
    return buffer;
}
/***
 * [2D] Circle
 */ var defaultCircle = {
    radius: 1,
    center: [
        0,
        0
    ]
}; // random circle https://stackoverflow.com/a/50746409
function inCircle(buffer, circle) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultCircle$circle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultCircle), circle), radius = _defaultCircle$circle.radius, center = _defaultCircle$circle.center;
    for(var i = 0; i < buffer.length; i += 2){
        var r = radius * Math.sqrt(rng.value());
        var theta = rng.value() * TAU;
        buffer[i] = Math.sin(theta) * r + center[0];
        buffer[i + 1] = Math.cos(theta) * r + center[1];
    }
    return buffer;
}
function onCircle(buffer, circle) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultCircle$circle2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultCircle), circle), radius = _defaultCircle$circle2.radius, center = _defaultCircle$circle2.center;
    for(var i = 0; i < buffer.length; i += 2){
        var theta = rng.value() * TAU;
        buffer[i] = Math.sin(theta) * radius + center[0];
        buffer[i + 1] = Math.cos(theta) * radius + center[1];
    }
    return buffer;
}
/**
 * [2D] Plane
 */ var defaultRect = {
    sides: 1,
    center: [
        0,
        0
    ]
};
function inRect(buffer, rect) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultRect$rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultRect), rect), sides = _defaultRect$rect.sides, center = _defaultRect$rect.center;
    var sideX = typeof sides === "number" ? sides : sides[0];
    var sideY = typeof sides === "number" ? sides : sides[1];
    for(var i = 0; i < buffer.length; i += 2){
        buffer[i] = (rng.value() - 0.5) * sideX + center[0];
        buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
    }
    return buffer;
}
function onRect(buffer, rect) {
    return buffer;
}
/***
 * [3D] Box
 */ function inBox(buffer, box) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultBox$box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultBox), box), sides = _defaultBox$box.sides, center = _defaultBox$box.center;
    var sideX = typeof sides === "number" ? sides : sides[0];
    var sideY = typeof sides === "number" ? sides : sides[1];
    var sideZ = typeof sides === "number" ? sides : sides[2];
    for(var i = 0; i < buffer.length; i += 3){
        buffer[i] = (rng.value() - 0.5) * sideX + center[0];
        buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
        buffer[i + 2] = (rng.value() - 0.5) * sideZ + center[2];
    }
    return buffer;
}
var defaultBox = {
    sides: 1,
    center: [
        0,
        0,
        0
    ]
};
function onBox(buffer, box) {
    var rng = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGen;
    var _defaultBox$box2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])({}, defaultBox), box), sides = _defaultBox$box2.sides, center = _defaultBox$box2.center;
    var sideX = typeof sides === "number" ? sides : sides[0];
    var sideY = typeof sides === "number" ? sides : sides[1];
    var sideZ = typeof sides === "number" ? sides : sides[2];
    for(var i = 0; i < buffer.length; i += 3){
        buffer[i] = (rng.value() - 0.5) * sideX + center[0];
        buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
        buffer[i + 2] = (rng.value() - 0.5) * sideZ + center[2];
    }
    return buffer;
}
var index = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    FlashGen: FlashGen,
    Generator: Generator,
    onSphere: onSphere,
    inSphere: inSphere,
    inCircle: inCircle,
    onCircle: onCircle,
    inRect: inRect,
    onRect: onRect,
    inBox: inBox,
    onBox: onBox,
    noise: noise
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/easing-0f4db1c0.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "a",
    ()=>exp,
    "b",
    ()=>circ,
    "c",
    ()=>cubic,
    "d",
    ()=>quart,
    "e",
    ()=>easing,
    "f",
    ()=>expo,
    "g",
    ()=>damp,
    "h",
    ()=>dampLookAt,
    "i",
    ()=>dampAngle,
    "j",
    ()=>damp2,
    "k",
    ()=>damp3,
    "l",
    ()=>linear,
    "m",
    ()=>damp4,
    "n",
    ()=>dampE,
    "o",
    ()=>dampC,
    "p",
    ()=>dampQ,
    "q",
    ()=>quint,
    "r",
    ()=>rsqw,
    "s",
    ()=>sine,
    "t",
    ()=>dampS,
    "u",
    ()=>dampM
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/triangle-b62b9067.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/misc-19a3ec46.esm.js [app-ssr] (ecmascript)");
;
;
;
var rsqw = function rsqw(t) {
    var delta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.01;
    var a = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var f = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1 / (2 * Math.PI);
    return a / Math.atan(1 / delta) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta);
};
var exp = function exp(t) {
    return 1 / (1 + t + 0.48 * t * t + 0.235 * t * t * t);
};
var linear = function linear(t) {
    return t;
};
var sine = {
    "in": function _in(x) {
        return 1 - Math.cos(x * Math.PI / 2);
    },
    out: function out(x) {
        return Math.sin(x * Math.PI / 2);
    },
    inOut: function inOut(x) {
        return -(Math.cos(Math.PI * x) - 1) / 2;
    }
};
var cubic = {
    "in": function _in(x) {
        return x * x * x;
    },
    out: function out(x) {
        return 1 - Math.pow(1 - x, 3);
    },
    inOut: function inOut(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
};
var quint = {
    "in": function _in(x) {
        return x * x * x * x * x;
    },
    out: function out(x) {
        return 1 - Math.pow(1 - x, 5);
    },
    inOut: function inOut(x) {
        return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
    }
};
var circ = {
    "in": function _in(x) {
        return 1 - Math.sqrt(1 - Math.pow(x, 2));
    },
    out: function out(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2));
    },
    inOut: function inOut(x) {
        return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
    }
};
var quart = {
    "in": function _in(t) {
        return t * t * t * t;
    },
    out: function out(t) {
        return 1 - --t * t * t * t;
    },
    inOut: function inOut(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    }
};
var expo = {
    "in": function _in(x) {
        return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
    },
    out: function out(x) {
        return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    },
    inOut: function inOut(x) {
        return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
    }
};
/**
 * Damp, based on Game Programming Gems 4 Chapter 1.10
 *   Return value indicates whether the animation is still running.
 */ function damp(/** The object */ current, /** The key to animate */ prop, /** To goal value */ target) {
    var smoothTime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.25;
    var delta = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.01;
    var maxSpeed = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Infinity;
    var easing = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : exp;
    var eps = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0.001;
    var vel = "velocity_" + prop;
    if (current.__damp === undefined) current.__damp = {};
    if (current.__damp[vel] === undefined) current.__damp[vel] = 0;
    if (Math.abs(current[prop] - target) <= eps) {
        current[prop] = target;
        return false;
    }
    smoothTime = Math.max(0.0001, smoothTime);
    var omega = 2 / smoothTime;
    var t = easing(omega * delta);
    var change = current[prop] - target;
    var originalTo = target; // Clamp maximum maxSpeed
    var maxChange = maxSpeed * smoothTime;
    change = Math.min(Math.max(change, -maxChange), maxChange);
    target = current[prop] - change;
    var temp = (current.__damp[vel] + omega * change) * delta;
    current.__damp[vel] = (current.__damp[vel] - omega * temp) * t;
    var output = target + (change + temp) * t; // Prevent overshooting
    if (originalTo - current[prop] > 0.0 === output > originalTo) {
        output = originalTo;
        current.__damp[vel] = (output - originalTo) / delta;
    }
    current[prop] = output;
    return true;
}
/**
 * DampLookAt
 */ var isCamera = function isCamera(v) {
    return v && v.isCamera;
};
var isLight = function isLight(v) {
    return v && v.isLight;
};
var vl3d = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
var _q1 = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
var _q2 = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
var _m1 = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]();
var _position = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
function dampLookAt(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    // This method does not support objects having non-uniformly-scaled parent(s)
    if (typeof target === "number") vl3d.setScalar(target);
    else if (Array.isArray(target)) vl3d.set(target[0], target[1], target[2]);
    else vl3d.copy(target);
    var parent = current.parent;
    current.updateWorldMatrix(true, false);
    _position.setFromMatrixPosition(current.matrixWorld);
    if (isCamera(current) || isLight(current)) _m1.lookAt(_position, vl3d, current.up);
    else _m1.lookAt(vl3d, _position, current.up);
    dampQ(current.quaternion, _q2.setFromRotationMatrix(_m1), smoothTime, delta, maxSpeed, easing, eps);
    if (parent) {
        _m1.extractRotation(parent.matrixWorld);
        _q1.setFromRotationMatrix(_m1);
        dampQ(current.quaternion, _q2.copy(current.quaternion).premultiply(_q1.invert()), smoothTime, delta, maxSpeed, easing, eps);
    }
}
/**
 * DampAngle, with a shortest-path
 */ function dampAngle(current, prop, target, smoothTime, delta, maxSpeed, easing, eps) {
    return damp(current, prop, current[prop] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["d"])(current[prop], target), smoothTime, delta, maxSpeed, easing, eps);
}
/**
 * Vector2D Damp
 */ var v2d = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
var a2, b2;
function damp2(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    if (typeof target === "number") v2d.setScalar(target);
    else if (Array.isArray(target)) v2d.set(target[0], target[1]);
    else v2d.copy(target);
    a2 = damp(current, "x", v2d.x, smoothTime, delta, maxSpeed, easing, eps);
    b2 = damp(current, "y", v2d.y, smoothTime, delta, maxSpeed, easing, eps);
    return a2 || b2;
}
/**
 * Vector3D Damp
 */ var v3d = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
var a3, b3, c3;
function damp3(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    if (typeof target === "number") v3d.setScalar(target);
    else if (Array.isArray(target)) v3d.set(target[0], target[1], target[2]);
    else v3d.copy(target);
    a3 = damp(current, "x", v3d.x, smoothTime, delta, maxSpeed, easing, eps);
    b3 = damp(current, "y", v3d.y, smoothTime, delta, maxSpeed, easing, eps);
    c3 = damp(current, "z", v3d.z, smoothTime, delta, maxSpeed, easing, eps);
    return a3 || b3 || c3;
}
/**
 * Vector4D Damp
 */ var v4d = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"]();
var a4, b4, c4, d4;
function damp4(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    if (typeof target === "number") v4d.setScalar(target);
    else if (Array.isArray(target)) v4d.set(target[0], target[1], target[2], target[3]);
    else v4d.copy(target);
    a4 = damp(current, "x", v4d.x, smoothTime, delta, maxSpeed, easing, eps);
    b4 = damp(current, "y", v4d.y, smoothTime, delta, maxSpeed, easing, eps);
    c4 = damp(current, "z", v4d.z, smoothTime, delta, maxSpeed, easing, eps);
    d4 = damp(current, "w", v4d.w, smoothTime, delta, maxSpeed, easing, eps);
    return a4 || b4 || c4 || d4;
}
/**
 * Euler Damp
 */ var rot = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Euler"]();
var aE, bE, cE;
function dampE(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    if (Array.isArray(target)) rot.set(target[0], target[1], target[2], target[3]);
    else rot.copy(target);
    aE = dampAngle(current, "x", rot.x, smoothTime, delta, maxSpeed, easing, eps);
    bE = dampAngle(current, "y", rot.y, smoothTime, delta, maxSpeed, easing, eps);
    cE = dampAngle(current, "z", rot.z, smoothTime, delta, maxSpeed, easing, eps);
    return aE || bE || cE;
}
/**
 * Color Damp
 */ var col = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]();
var aC, bC, cC;
function dampC(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    if (target instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Color"]) col.copy(target);
    else if (Array.isArray(target)) col.setRGB(target[0], target[1], target[2]);
    else col.set(target);
    aC = damp(current, "r", col.r, smoothTime, delta, maxSpeed, easing, eps);
    bC = damp(current, "g", col.g, smoothTime, delta, maxSpeed, easing, eps);
    cC = damp(current, "b", col.b, smoothTime, delta, maxSpeed, easing, eps);
    return aC || bC || cC;
}
/**
 * Quaternion Damp
 * https://gist.github.com/maxattack/4c7b4de00f5c1b95a33b
 * Copyright 2016 Max Kaufmann (max.kaufmann@gmail.com)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */ var qt = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
var v4result = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"]();
var v4velocity = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"]();
var v4error = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector4"]();
var aQ, bQ, cQ, dQ;
function dampQ(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    var cur = current;
    if (Array.isArray(target)) qt.set(target[0], target[1], target[2], target[3]);
    else qt.copy(target);
    var multi = current.dot(qt) > 0 ? 1 : -1;
    qt.x *= multi;
    qt.y *= multi;
    qt.z *= multi;
    qt.w *= multi;
    aQ = damp(current, "x", qt.x, smoothTime, delta, maxSpeed, easing, eps);
    bQ = damp(current, "y", qt.y, smoothTime, delta, maxSpeed, easing, eps);
    cQ = damp(current, "z", qt.z, smoothTime, delta, maxSpeed, easing, eps);
    dQ = damp(current, "w", qt.w, smoothTime, delta, maxSpeed, easing, eps); // smooth damp (nlerp approx)
    v4result.set(current.x, current.y, current.z, current.w).normalize();
    v4velocity.set(cur.__damp.velocity_x, cur.__damp.velocity_y, cur.__damp.velocity_z, cur.__damp.velocity_w); // ensure deriv is tangent
    v4error.copy(v4result).multiplyScalar(v4velocity.dot(v4result) / v4result.dot(v4result));
    cur.__damp.velocity_x -= v4error.x;
    cur.__damp.velocity_y -= v4error.y;
    cur.__damp.velocity_z -= v4error.z;
    cur.__damp.velocity_w -= v4error.w;
    current.set(v4result.x, v4result.y, v4result.z, v4result.w);
    return aQ || bQ || cQ || dQ;
}
/**
 * Spherical Damp
 */ var spherical = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Spherical"]();
var aS, bS, cS;
function dampS(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    if (Array.isArray(target)) spherical.set(target[0], target[1], target[2]);
    else spherical.copy(target);
    aS = damp(current, "radius", spherical.radius, smoothTime, delta, maxSpeed, easing, eps);
    bS = dampAngle(current, "phi", spherical.phi, smoothTime, delta, maxSpeed, easing, eps);
    cS = dampAngle(current, "theta", spherical.theta, smoothTime, delta, maxSpeed, easing, eps);
    return aS || bS || cS;
}
/**
 * Matrix4 Damp
 */ var mat = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Matrix4"]();
var mPos = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
var mRot = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"]();
var mSca = /*@__PURE__*/ new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
var aM, bM, cM;
function dampM(current, target, smoothTime, delta, maxSpeed, easing, eps) {
    var cur = current;
    if (cur.__damp === undefined) {
        cur.__damp = {
            position: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](),
            rotation: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Quaternion"](),
            scale: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]()
        };
        current.decompose(cur.__damp.position, cur.__damp.rotation, cur.__damp.scale);
    }
    if (Array.isArray(target)) mat.set.apply(mat, (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])(target));
    else mat.copy(target);
    mat.decompose(mPos, mRot, mSca);
    aM = damp3(cur.__damp.position, mPos, smoothTime, delta, maxSpeed, easing, eps);
    bM = dampQ(cur.__damp.rotation, mRot, smoothTime, delta, maxSpeed, easing, eps);
    cM = damp3(cur.__damp.scale, mSca, smoothTime, delta, maxSpeed, easing, eps);
    current.compose(cur.__damp.position, cur.__damp.rotation, cur.__damp.scale);
    return aM || bM || cM;
}
var easing = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    rsqw: rsqw,
    exp: exp,
    linear: linear,
    sine: sine,
    cubic: cubic,
    quint: quint,
    circ: circ,
    quart: quart,
    expo: expo,
    damp: damp,
    dampLookAt: dampLookAt,
    dampAngle: dampAngle,
    damp2: damp2,
    damp3: damp3,
    damp4: damp4,
    dampE: dampE,
    dampC: dampC,
    dampQ: dampQ,
    dampS: dampS,
    dampM: dampM
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/geometry-0fb11825.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "R",
    ()=>RoundedPlaneGeometry,
    "a",
    ()=>applyCylindricalUV,
    "b",
    ()=>applySphereUV,
    "c",
    ()=>applyBoxUV,
    "g",
    ()=>geometry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/classCallCheck-9098b006.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
;
;
;
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
    } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["a"])();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var RoundedPlaneGeometry = /*#__PURE__*/ function(_THREE$BufferGeometry) {
    _inherits(RoundedPlaneGeometry, _THREE$BufferGeometry);
    var _super = _createSuper(RoundedPlaneGeometry);
    function RoundedPlaneGeometry() {
        var _this;
        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.2;
        var segments = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 16;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_"])(this, RoundedPlaneGeometry);
        _this = _super.call(this);
        _this.parameters = {
            width: width,
            height: height,
            radius: radius,
            segments: segments
        }; // helper const's
        var wi = width / 2 - radius; // inner width
        var hi = height / 2 - radius; // inner height
        var ul = radius / width; // u left
        var ur = (width - radius) / width; // u right
        var vl = radius / height; // v low
        var vh = (height - radius) / height; // v high
        var positions = [
            wi,
            hi,
            0,
            -wi,
            hi,
            0,
            -wi,
            -hi,
            0,
            wi,
            -hi,
            0
        ];
        var uvs = [
            ur,
            vh,
            ul,
            vh,
            ul,
            vl,
            ur,
            vl
        ];
        var n = [
            3 * (segments + 1) + 3,
            3 * (segments + 1) + 4,
            segments + 4,
            segments + 5,
            2 * (segments + 1) + 4,
            2,
            1,
            2 * (segments + 1) + 3,
            3,
            4 * (segments + 1) + 3,
            4,
            0
        ];
        var indices = [
            n[0],
            n[1],
            n[2],
            n[0],
            n[2],
            n[3],
            n[4],
            n[5],
            n[6],
            n[4],
            n[6],
            n[7],
            n[8],
            n[9],
            n[10],
            n[8],
            n[10],
            n[11]
        ];
        var phi, cos, sin, xc, yc, uc, vc, idx;
        for(var i = 0; i < 4; i++){
            xc = i < 1 || i > 2 ? wi : -wi;
            yc = i < 2 ? hi : -hi;
            uc = i < 1 || i > 2 ? ur : ul;
            vc = i < 2 ? vh : vl;
            for(var j = 0; j <= segments; j++){
                phi = Math.PI / 2 * (i + j / segments);
                cos = Math.cos(phi);
                sin = Math.sin(phi);
                positions.push(xc + radius * cos, yc + radius * sin, 0);
                uvs.push(uc + ul * cos, vc + vl * sin);
                if (j < segments) {
                    idx = (segments + 1) * i + j + 4;
                    indices.push(i, idx, idx + 1);
                }
            }
        }
        _this.setIndex(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](new Uint32Array(indices), 1));
        _this.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](new Float32Array(positions), 3));
        _this.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferAttribute"](new Float32Array(uvs), 2));
        return _this;
    }
    return RoundedPlaneGeometry;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BufferGeometry"]); // Author: https://stackoverflow.com/users/128511/gman
// https://stackoverflow.com/questions/34958072/programmatically-generate-simple-uv-mapping-for-models
function applyCylindricalUV(bufferGeometry) {
    var uvs = [];
    for(var i = 0; i < bufferGeometry.attributes.position.array.length / 3; i++){
        var x = bufferGeometry.attributes.position.array[i * 3 + 0];
        var y = bufferGeometry.attributes.position.array[i * 3 + 1];
        var z = bufferGeometry.attributes.position.array[i * 3 + 2];
        uvs.push(Math.atan2(x, z) / Math.PI * 0.5 + 0.5, y / Math.PI * 0.5 + 0.5);
    }
    if (bufferGeometry.attributes.uv) delete bufferGeometry.attributes.uv;
    bufferGeometry.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
    bufferGeometry.attributes.uv.needsUpdate = true;
    return bufferGeometry;
} // Author: https://stackoverflow.com/users/268905/knee-cola
// https://stackoverflow.com/questions/20774648/three-js-generate-uv-coordinate
function applySphereUV(bufferGeometry) {
    var uvs = [];
    var vertices = [];
    for(var i = 0; i < bufferGeometry.attributes.position.array.length / 3; i++){
        var x = bufferGeometry.attributes.position.array[i * 3 + 0];
        var y = bufferGeometry.attributes.position.array[i * 3 + 1];
        var z = bufferGeometry.attributes.position.array[i * 3 + 2];
        vertices.push(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](x, y, z));
    }
    var polarVertices = vertices.map(cartesian2polar);
    for(var _i = 0; _i < polarVertices.length / 3; _i++){
        var tri = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Triangle"](vertices[_i * 3 + 0], vertices[_i * 3 + 1], vertices[_i * 3 + 2]);
        var normal = tri.getNormal(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
        for(var f = 0; f < 3; f++){
            var vertex = polarVertices[_i * 3 + f];
            if (vertex.theta === 0 && (vertex.phi === 0 || vertex.phi === Math.PI)) {
                var alignedVertice = vertex.phi === 0 ? _i * 3 + 1 : _i * 3 + 0;
                vertex = {
                    r: vertex.r,
                    phi: vertex.phi,
                    theta: polarVertices[alignedVertice].theta
                };
            }
            if (vertex.theta === Math.PI && cartesian2polar(normal).theta < Math.PI / 2) {
                vertex.theta = -Math.PI;
            }
            var canvasPoint = polar2canvas(vertex);
            uvs.push(1 - canvasPoint.x, 1 - canvasPoint.y);
        }
    }
    if (bufferGeometry.attributes.uv) delete bufferGeometry.attributes.uv;
    bufferGeometry.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](uvs, 2));
    bufferGeometry.attributes.uv.needsUpdate = true;
    return bufferGeometry;
}
function cartesian2polar(position) {
    var r = Math.sqrt(position.x * position.x + position.z * position.z + position.y * position.y);
    return {
        r: r,
        phi: Math.acos(position.y / r),
        theta: Math.atan2(position.z, position.x)
    };
}
function polar2canvas(polarPoint) {
    return {
        y: polarPoint.phi / Math.PI,
        x: (polarPoint.theta + Math.PI) / (2 * Math.PI)
    };
} // Author: Alex Khoroshylov (https://stackoverflow.com/users/8742287/alex-khoroshylov)
// https://stackoverflow.com/questions/20774648/three-js-generate-uv-coordinate
function applyBoxUV(bufferGeometry) {
    bufferGeometry.computeBoundingBox();
    var bboxSize = bufferGeometry.boundingBox.getSize(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]());
    var boxSize = Math.min(bboxSize.x, bboxSize.y, bboxSize.z);
    var boxGeometry = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BoxGeometry"](boxSize, boxSize, boxSize);
    var cube = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](boxGeometry);
    cube.rotation.set(0, 0, 0);
    cube.updateWorldMatrix(true, false);
    var transformMatrix = cube.matrix.clone().invert();
    var uvBbox = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Box3"](new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](-boxSize / 2, -boxSize / 2, -boxSize / 2), new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](boxSize / 2, boxSize / 2, boxSize / 2));
    _applyBoxUV(bufferGeometry, transformMatrix, uvBbox, boxSize);
    bufferGeometry.attributes.uv.needsUpdate = true;
    return bufferGeometry;
}
function _applyBoxUV(geom, transformMatrix, bbox, bbox_max_size) {
    var coords = [];
    coords.length = 2 * geom.attributes.position.array.length / 3; //maps 3 verts of 1 face on the better side of the cube
    //side of the cube can be XY, XZ or YZ
    var makeUVs = function makeUVs(v0, v1, v2) {
        //pre-rotate the model so that cube sides match world axis
        v0.applyMatrix4(transformMatrix);
        v1.applyMatrix4(transformMatrix);
        v2.applyMatrix4(transformMatrix); //get normal of the face, to know into which cube side it maps better
        var n = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"]();
        n.crossVectors(v1.clone().sub(v0), v1.clone().sub(v2)).normalize();
        n.x = Math.abs(n.x);
        n.y = Math.abs(n.y);
        n.z = Math.abs(n.z);
        var uv0 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        var uv1 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"]();
        var uv2 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](); // xz mapping
        if (n.y > n.x && n.y > n.z) {
            uv0.x = (v0.x - bbox.min.x) / bbox_max_size;
            uv0.y = (bbox.max.z - v0.z) / bbox_max_size;
            uv1.x = (v1.x - bbox.min.x) / bbox_max_size;
            uv1.y = (bbox.max.z - v1.z) / bbox_max_size;
            uv2.x = (v2.x - bbox.min.x) / bbox_max_size;
            uv2.y = (bbox.max.z - v2.z) / bbox_max_size;
        } else if (n.x > n.y && n.x > n.z) {
            uv0.x = (v0.z - bbox.min.z) / bbox_max_size;
            uv0.y = (v0.y - bbox.min.y) / bbox_max_size;
            uv1.x = (v1.z - bbox.min.z) / bbox_max_size;
            uv1.y = (v1.y - bbox.min.y) / bbox_max_size;
            uv2.x = (v2.z - bbox.min.z) / bbox_max_size;
            uv2.y = (v2.y - bbox.min.y) / bbox_max_size;
        } else if (n.z > n.y && n.z > n.x) {
            uv0.x = (v0.x - bbox.min.x) / bbox_max_size;
            uv0.y = (v0.y - bbox.min.y) / bbox_max_size;
            uv1.x = (v1.x - bbox.min.x) / bbox_max_size;
            uv1.y = (v1.y - bbox.min.y) / bbox_max_size;
            uv2.x = (v2.x - bbox.min.x) / bbox_max_size;
            uv2.y = (v2.y - bbox.min.y) / bbox_max_size;
        }
        return {
            uv0: uv0,
            uv1: uv1,
            uv2: uv2
        };
    };
    if (geom.index) {
        // is it indexed buffer geometry?
        for(var vi = 0; vi < geom.index.array.length; vi += 3){
            var idx0 = geom.index.array[vi];
            var idx1 = geom.index.array[vi + 1];
            var idx2 = geom.index.array[vi + 2];
            var vx0 = geom.attributes.position.array[3 * idx0];
            var vy0 = geom.attributes.position.array[3 * idx0 + 1];
            var vz0 = geom.attributes.position.array[3 * idx0 + 2];
            var vx1 = geom.attributes.position.array[3 * idx1];
            var vy1 = geom.attributes.position.array[3 * idx1 + 1];
            var vz1 = geom.attributes.position.array[3 * idx1 + 2];
            var vx2 = geom.attributes.position.array[3 * idx2];
            var vy2 = geom.attributes.position.array[3 * idx2 + 1];
            var vz2 = geom.attributes.position.array[3 * idx2 + 2];
            var v0 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vx0, vy0, vz0);
            var v1 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vx1, vy1, vz1);
            var v2 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](vx2, vy2, vz2);
            var uvs = makeUVs(v0, v1, v2);
            coords[2 * idx0] = uvs.uv0.x;
            coords[2 * idx0 + 1] = uvs.uv0.y;
            coords[2 * idx1] = uvs.uv1.x;
            coords[2 * idx1 + 1] = uvs.uv1.y;
            coords[2 * idx2] = uvs.uv2.x;
            coords[2 * idx2 + 1] = uvs.uv2.y;
        }
    } else {
        for(var _vi = 0; _vi < geom.attributes.position.array.length; _vi += 9){
            var _vx = geom.attributes.position.array[_vi];
            var _vy = geom.attributes.position.array[_vi + 1];
            var _vz = geom.attributes.position.array[_vi + 2];
            var _vx2 = geom.attributes.position.array[_vi + 3];
            var _vy2 = geom.attributes.position.array[_vi + 4];
            var _vz2 = geom.attributes.position.array[_vi + 5];
            var _vx3 = geom.attributes.position.array[_vi + 6];
            var _vy3 = geom.attributes.position.array[_vi + 7];
            var _vz3 = geom.attributes.position.array[_vi + 8];
            var _v = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](_vx, _vy, _vz);
            var _v2 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](_vx2, _vy2, _vz2);
            var _v3 = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](_vx3, _vy3, _vz3);
            var _uvs = makeUVs(_v, _v2, _v3);
            var _idx = _vi / 3;
            var _idx2 = _idx + 1;
            var _idx3 = _idx + 2;
            coords[2 * _idx] = _uvs.uv0.x;
            coords[2 * _idx + 1] = _uvs.uv0.y;
            coords[2 * _idx2] = _uvs.uv1.x;
            coords[2 * _idx2 + 1] = _uvs.uv1.y;
            coords[2 * _idx3] = _uvs.uv2.x;
            coords[2 * _idx3 + 1] = _uvs.uv2.y;
        }
    }
    if (geom.attributes.uv) delete geom.attributes.uv;
    geom.setAttribute("uv", new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Float32BufferAttribute"](coords, 2));
}
var geometry = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    RoundedPlaneGeometry: RoundedPlaneGeometry,
    applyCylindricalUV: applyCylindricalUV,
    applySphereUV: applySphereUV,
    applyBoxUV: applyBoxUV
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/three-eb2ad8c0.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "b",
    ()=>bufferToVectors,
    "t",
    ()=>three,
    "v",
    ()=>vectorsToBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/three@0.167.1/node_modules/three/build/three.module.js [app-ssr] (ecmascript)");
;
/**
 * Helpers for converting buffers to and from Three.js objects
 */ /**
 * Convents passed buffer of passed stride to an array of vectors with the correct length.
 *
 * @param buffer
 * @param stride
 * @returns
 */ function bufferToVectors(buffer) {
    var stride = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    var p = [];
    for(var i = 0, j = 0; i < buffer.length; i += stride, j++){
        if (stride === 3) {
            p[j] = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector3"](buffer[i], buffer[i + 1], buffer[i + 2]);
        } else {
            p[j] = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$three$40$0$2e$167$2e$1$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Vector2"](buffer[i], buffer[i + 1]);
        }
    }
    return p;
}
/**
 * Transforms a passed Vector2 or Vector3 array to a points buffer
 *
 * @param vectorArray
 * @returns
 */ function vectorsToBuffer(vectorArray) {
    var l = vectorArray.length;
    var stride = vectorArray[0].hasOwnProperty("z") ? 3 : 2;
    var buffer = new Float32Array(l * stride);
    for(var i = 0; i < l; i++){
        var j = i * stride;
        buffer[j] = vectorArray[i].x;
        buffer[j + 1] = vectorArray[i].y;
        if (stride === 3) {
            buffer[j + 2] = vectorArray[i].z;
        }
    }
    return buffer;
}
var three = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    bufferToVectors: bufferToVectors,
    vectorsToBuffer: vectorsToBuffer
});
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/maath.esm.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$buffer$2d$59a95d05$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/buffer-59a95d05.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$index$2d$0332b2ed$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/index-0332b2ed.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$0f4db1c0$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/easing-0f4db1c0.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$geometry$2d$0fb11825$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/geometry-0fb11825.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$matrix$2d$baa530bf$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/matrix-baa530bf.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$misc$2d$19a3ec46$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/misc-19a3ec46.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$three$2d$eb2ad8c0$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/three-eb2ad8c0.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$triangle$2d$b62b9067$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/triangle-b62b9067.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$vector2$2d$d2bf51f1$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/vector2-d2bf51f1.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$vector3$2d$0a088b7f$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/vector3-0a088b7f.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$objectSpread2$2d$284232a6$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/objectSpread2-284232a6.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$classCallCheck$2d$9098b006$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/classCallCheck-9098b006.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$isNativeReflectConstruct$2d$5594d075$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js [app-ssr] (ecmascript)");
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
;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/easing-0f4db1c0.esm.js [app-ssr] (ecmascript) <export e as easing>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easing",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$0f4db1c0$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["e"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f2e$pnpm$2f$maath$40$0$2e$10$2e$8_$40$types$2b$three$40$0$2e$181$2e$0_three$40$0$2e$167$2e$1$2f$node_modules$2f$maath$2f$dist$2f$easing$2d$0f4db1c0$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/.pnpm/maath@0.10.8_@types+three@0.181.0_three@0.167.1/node_modules/maath/dist/easing-0f4db1c0.esm.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=85f47_maath_dist_22585a7e._.js.map