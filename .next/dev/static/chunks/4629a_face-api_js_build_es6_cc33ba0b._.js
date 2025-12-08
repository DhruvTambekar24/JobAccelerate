(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawContour.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawContour",
    ()=>drawContour
]);
function drawContour(ctx, points, isClosed) {
    if (isClosed === void 0) {
        isClosed = false;
    }
    ctx.beginPath();
    points.slice(1).forEach(function(_a, prevIdx) {
        var x = _a.x, y = _a.y;
        var from = points[prevIdx];
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(x, y);
    });
    if (isClosed) {
        var from = points[points.length - 1];
        var to = points[0];
        if (!from || !to) {
            return;
        }
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
    }
    ctx.stroke();
} //# sourceMappingURL=drawContour.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Point",
    ()=>Point
]);
var Point = function() {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function() {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function() {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.add = function(pt) {
        return new Point(this.x + pt.x, this.y + pt.y);
    };
    Point.prototype.sub = function(pt) {
        return new Point(this.x - pt.x, this.y - pt.y);
    };
    Point.prototype.mul = function(pt) {
        return new Point(this.x * pt.x, this.y * pt.y);
    };
    Point.prototype.div = function(pt) {
        return new Point(this.x / pt.x, this.y / pt.y);
    };
    Point.prototype.abs = function() {
        return new Point(Math.abs(this.x), Math.abs(this.y));
    };
    Point.prototype.magnitude = function() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Point.prototype.floor = function() {
        return new Point(Math.floor(this.x), Math.floor(this.y));
    };
    return Point;
}();
;
 //# sourceMappingURL=Point.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Dimensions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dimensions",
    ()=>Dimensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
var Dimensions = function() {
    function Dimensions(width, height) {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"])(width) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"])(height)) {
            throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have " + JSON.stringify({
                width: width,
                height: height
            }));
        }
        this._width = width;
        this._height = height;
    }
    Object.defineProperty(Dimensions.prototype, "width", {
        get: function() {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "height", {
        get: function() {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Dimensions.prototype.reverse = function() {
        return new Dimensions(1 / this.width, 1 / this.height);
    };
    return Dimensions;
}();
;
 //# sourceMappingURL=Dimensions.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeReshapedDimensions",
    ()=>computeReshapedDimensions,
    "getCenterPoint",
    ()=>getCenterPoint,
    "isDimensions",
    ()=>isDimensions,
    "isEven",
    ()=>isEven,
    "isFloat",
    ()=>isFloat,
    "isTensor",
    ()=>isTensor,
    "isTensor1D",
    ()=>isTensor1D,
    "isTensor2D",
    ()=>isTensor2D,
    "isTensor3D",
    ()=>isTensor3D,
    "isTensor4D",
    ()=>isTensor4D,
    "isValidNumber",
    ()=>isValidNumber,
    "isValidProbablitiy",
    ()=>isValidProbablitiy,
    "range",
    ()=>range,
    "round",
    ()=>round
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Dimensions.js [app-client] (ecmascript)");
;
;
;
function isTensor(tensor, dim) {
    return tensor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"] && tensor.shape.length === dim;
}
function isTensor1D(tensor) {
    return isTensor(tensor, 1);
}
function isTensor2D(tensor) {
    return isTensor(tensor, 2);
}
function isTensor3D(tensor) {
    return isTensor(tensor, 3);
}
function isTensor4D(tensor) {
    return isTensor(tensor, 4);
}
function isFloat(num) {
    return num % 1 !== 0;
}
function isEven(num) {
    return num % 2 === 0;
}
function round(num, prec) {
    if (prec === void 0) {
        prec = 2;
    }
    var f = Math.pow(10, prec);
    return Math.floor(num * f) / f;
}
function isDimensions(obj) {
    return obj && obj.width && obj.height;
}
function computeReshapedDimensions(_a, inputSize) {
    var width = _a.width, height = _a.height;
    var scale = inputSize / Math.max(height, width);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimensions"](Math.round(width * scale), Math.round(height * scale));
}
function getCenterPoint(pts) {
    return pts.reduce(function(sum, pt) {
        return sum.add(pt);
    }, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](0, 0)).div(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](pts.length, pts.length));
}
function range(num, start, step) {
    return Array(num).fill(0).map(function(_, i) {
        return start + i * step;
    });
}
function isValidNumber(num) {
    return !!num && num !== Infinity && num !== -Infinity && !isNaN(num) || num === 0;
}
function isValidProbablitiy(num) {
    return isValidNumber(num) && 0 <= num && num <= 1.0;
} //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Box",
    ()=>Box
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
;
;
var Box = function() {
    function Box(_box, allowNegativeDimensions) {
        if (allowNegativeDimensions === void 0) {
            allowNegativeDimensions = true;
        }
        var box = _box || {};
        var isBbox = [
            box.left,
            box.top,
            box.right,
            box.bottom
        ].every(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"]);
        var isRect = [
            box.x,
            box.y,
            box.width,
            box.height
        ].every(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"]);
        if (!isRect && !isBbox) {
            throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have " + JSON.stringify(box));
        }
        var _a = isRect ? [
            box.x,
            box.y,
            box.width,
            box.height
        ] : [
            box.left,
            box.top,
            box.right - box.left,
            box.bottom - box.top
        ], x = _a[0], y = _a[1], width = _a[2], height = _a[3];
        Box.assertIsValidBox({
            x: x,
            y: y,
            width: width,
            height: height
        }, 'Box.constructor', allowNegativeDimensions);
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }
    Box.isRect = function(rect) {
        return !!rect && [
            rect.x,
            rect.y,
            rect.width,
            rect.height
        ].every(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"]);
    };
    Box.assertIsValidBox = function(box, callee, allowNegativeDimensions) {
        if (allowNegativeDimensions === void 0) {
            allowNegativeDimensions = false;
        }
        if (!Box.isRect(box)) {
            throw new Error(callee + " - invalid box: " + JSON.stringify(box) + ", expected object with properties x, y, width, height");
        }
        if (!allowNegativeDimensions && (box.width < 0 || box.height < 0)) {
            throw new Error(callee + " - width (" + box.width + ") and height (" + box.height + ") must be positive numbers");
        }
    };
    Object.defineProperty(Box.prototype, "x", {
        get: function() {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "y", {
        get: function() {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "width", {
        get: function() {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "height", {
        get: function() {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "left", {
        get: function() {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "top", {
        get: function() {
            return this.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "right", {
        get: function() {
            return this.x + this.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "bottom", {
        get: function() {
            return this.y + this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "area", {
        get: function() {
            return this.width * this.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "topLeft", {
        get: function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](this.left, this.top);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "topRight", {
        get: function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](this.right, this.top);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "bottomLeft", {
        get: function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](this.left, this.bottom);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "bottomRight", {
        get: function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](this.right, this.bottom);
        },
        enumerable: true,
        configurable: true
    });
    Box.prototype.round = function() {
        var _a = [
            this.x,
            this.y,
            this.width,
            this.height
        ].map(function(val) {
            return Math.round(val);
        }), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
        return new Box({
            x: x,
            y: y,
            width: width,
            height: height
        });
    };
    Box.prototype.floor = function() {
        var _a = [
            this.x,
            this.y,
            this.width,
            this.height
        ].map(function(val) {
            return Math.floor(val);
        }), x = _a[0], y = _a[1], width = _a[2], height = _a[3];
        return new Box({
            x: x,
            y: y,
            width: width,
            height: height
        });
    };
    Box.prototype.toSquare = function() {
        var _a = this, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var diff = Math.abs(width - height);
        if (width < height) {
            x -= diff / 2;
            width += diff;
        }
        if (height < width) {
            y -= diff / 2;
            height += diff;
        }
        return new Box({
            x: x,
            y: y,
            width: width,
            height: height
        });
    };
    Box.prototype.rescale = function(s) {
        var scaleX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensions"])(s) ? s.width : s;
        var scaleY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isDimensions"])(s) ? s.height : s;
        return new Box({
            x: this.x * scaleX,
            y: this.y * scaleY,
            width: this.width * scaleX,
            height: this.height * scaleY
        });
    };
    Box.prototype.pad = function(padX, padY) {
        var _a = [
            this.x - padX / 2,
            this.y - padY / 2,
            this.width + padX,
            this.height + padY
        ], x = _a[0], y = _a[1], width = _a[2], height = _a[3];
        return new Box({
            x: x,
            y: y,
            width: width,
            height: height
        });
    };
    Box.prototype.clipAtImageBorders = function(imgWidth, imgHeight) {
        var _a = this, x = _a.x, y = _a.y, right = _a.right, bottom = _a.bottom;
        var clippedX = Math.max(x, 0);
        var clippedY = Math.max(y, 0);
        var newWidth = right - clippedX;
        var newHeight = bottom - clippedY;
        var clippedWidth = Math.min(newWidth, imgWidth - clippedX);
        var clippedHeight = Math.min(newHeight, imgHeight - clippedY);
        return new Box({
            x: clippedX,
            y: clippedY,
            width: clippedWidth,
            height: clippedHeight
        }).floor();
    };
    Box.prototype.shift = function(sx, sy) {
        var _a = this, width = _a.width, height = _a.height;
        var x = this.x + sx;
        var y = this.y + sy;
        return new Box({
            x: x,
            y: y,
            width: width,
            height: height
        });
    };
    Box.prototype.padAtBorders = function(imageHeight, imageWidth) {
        var w = this.width + 1;
        var h = this.height + 1;
        var dx = 1;
        var dy = 1;
        var edx = w;
        var edy = h;
        var x = this.left;
        var y = this.top;
        var ex = this.right;
        var ey = this.bottom;
        if (ex > imageWidth) {
            edx = -ex + imageWidth + w;
            ex = imageWidth;
        }
        if (ey > imageHeight) {
            edy = -ey + imageHeight + h;
            ey = imageHeight;
        }
        if (x < 1) {
            edy = 2 - x;
            x = 1;
        }
        if (y < 1) {
            edy = 2 - y;
            y = 1;
        }
        return {
            dy: dy,
            edy: edy,
            dx: dx,
            edx: edx,
            y: y,
            ey: ey,
            x: x,
            ex: ex,
            w: w,
            h: h
        };
    };
    Box.prototype.calibrate = function(region) {
        return new Box({
            left: this.left + region.left * this.width,
            top: this.top + region.top * this.height,
            right: this.right + region.right * this.width,
            bottom: this.bottom + region.bottom * this.height
        }).toSquare().round();
    };
    return Box;
}();
;
 //# sourceMappingURL=Box.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/BoundingBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BoundingBox",
    ()=>BoundingBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
;
;
var BoundingBox = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(BoundingBox, _super);
    function BoundingBox(left, top, right, bottom, allowNegativeDimensions) {
        if (allowNegativeDimensions === void 0) {
            allowNegativeDimensions = false;
        }
        return _super.call(this, {
            left: left,
            top: top,
            right: right,
            bottom: bottom
        }, allowNegativeDimensions) || this;
    }
    return BoundingBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
;
 //# sourceMappingURL=BoundingBox.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/ObjectDetection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ObjectDetection",
    ()=>ObjectDetection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Dimensions.js [app-client] (ecmascript)");
;
;
var ObjectDetection = function() {
    function ObjectDetection(score, classScore, className, relativeBox, imageDims) {
        this._imageDims = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimensions"](imageDims.width, imageDims.height);
        this._score = score;
        this._classScore = classScore;
        this._className = className;
        this._box = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"](relativeBox).rescale(this._imageDims);
    }
    Object.defineProperty(ObjectDetection.prototype, "score", {
        get: function() {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectDetection.prototype, "classScore", {
        get: function() {
            return this._classScore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectDetection.prototype, "className", {
        get: function() {
            return this._className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectDetection.prototype, "box", {
        get: function() {
            return this._box;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectDetection.prototype, "imageDims", {
        get: function() {
            return this._imageDims;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectDetection.prototype, "imageWidth", {
        get: function() {
            return this.imageDims.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectDetection.prototype, "imageHeight", {
        get: function() {
            return this.imageDims.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjectDetection.prototype, "relativeBox", {
        get: function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"](this._box).rescale(this.imageDims.reverse());
        },
        enumerable: true,
        configurable: true
    });
    ObjectDetection.prototype.forSize = function(width, height) {
        return new ObjectDetection(this.score, this.classScore, this.className, this.relativeBox, {
            width: width,
            height: height
        });
    };
    return ObjectDetection;
}();
;
 //# sourceMappingURL=ObjectDetection.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceDetection",
    ()=>FaceDetection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$ObjectDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/ObjectDetection.js [app-client] (ecmascript)");
;
;
var FaceDetection = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceDetection, _super);
    function FaceDetection(score, relativeBox, imageDims) {
        return _super.call(this, score, score, '', relativeBox, imageDims) || this;
    }
    FaceDetection.prototype.forSize = function(width, height) {
        var _a = _super.prototype.forSize.call(this, width, height), score = _a.score, relativeBox = _a.relativeBox, imageDims = _a.imageDims;
        return new FaceDetection(score, relativeBox, imageDims);
    };
    return FaceDetection;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$ObjectDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectDetection"]);
;
 //# sourceMappingURL=FaceDetection.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/iou.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "iou",
    ()=>iou
]);
function iou(box1, box2, isIOU) {
    if (isIOU === void 0) {
        isIOU = true;
    }
    var width = Math.max(0.0, Math.min(box1.right, box2.right) - Math.max(box1.left, box2.left));
    var height = Math.max(0.0, Math.min(box1.bottom, box2.bottom) - Math.max(box1.top, box2.top));
    var interSection = width * height;
    return isIOU ? interSection / (box1.area + box2.area - interSection) : interSection / Math.min(box1.area, box2.area);
} //# sourceMappingURL=iou.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/minBbox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minBbox",
    ()=>minBbox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$BoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/BoundingBox.js [app-client] (ecmascript)");
;
function minBbox(pts) {
    var xs = pts.map(function(pt) {
        return pt.x;
    });
    var ys = pts.map(function(pt) {
        return pt.y;
    });
    var minX = xs.reduce(function(min, x) {
        return x < min ? x : min;
    }, Infinity);
    var minY = ys.reduce(function(min, y) {
        return y < min ? y : min;
    }, Infinity);
    var maxX = xs.reduce(function(max, x) {
        return max < x ? x : max;
    }, 0);
    var maxY = ys.reduce(function(max, y) {
        return max < y ? y : max;
    }, 0);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$BoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"](minX, minY, maxX, maxY);
} //# sourceMappingURL=minBbox.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/nonMaxSuppression.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonMaxSuppression",
    ()=>nonMaxSuppression
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$iou$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/iou.js [app-client] (ecmascript)");
;
function nonMaxSuppression(boxes, scores, iouThreshold, isIOU) {
    if (isIOU === void 0) {
        isIOU = true;
    }
    var indicesSortedByScore = scores.map(function(score, boxIndex) {
        return {
            score: score,
            boxIndex: boxIndex
        };
    }).sort(function(c1, c2) {
        return c1.score - c2.score;
    }).map(function(c) {
        return c.boxIndex;
    });
    var pick = [];
    var _loop_1 = function() {
        var curr = indicesSortedByScore.pop();
        pick.push(curr);
        var indices = indicesSortedByScore;
        var outputs = [];
        for(var i = 0; i < indices.length; i++){
            var idx = indices[i];
            var currBox = boxes[curr];
            var idxBox = boxes[idx];
            outputs.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$iou$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["iou"])(currBox, idxBox, isIOU));
        }
        indicesSortedByScore = indicesSortedByScore.filter(function(_, j) {
            return outputs[j] <= iouThreshold;
        });
    };
    while(indicesSortedByScore.length > 0){
        _loop_1();
    }
    return pick;
} //# sourceMappingURL=nonMaxSuppression.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/normalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
;
function normalize(x, meanRgb) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var r = meanRgb[0], g = meanRgb[1], b = meanRgb[2];
        var avg_r = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(x.shape.slice(0, 3), [
            1
        ]), r);
        var avg_g = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(x.shape.slice(0, 3), [
            1
        ]), g);
        var avg_b = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(x.shape.slice(0, 3), [
            1
        ]), b);
        var avg_rgb = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"]([
            avg_r,
            avg_g,
            avg_b
        ], 3);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](x, avg_rgb);
    });
} //# sourceMappingURL=normalize.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/padToSquare.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "padToSquare",
    ()=>padToSquare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function padToSquare(imgTensor, isCenterImage) {
    if (isCenterImage === void 0) {
        isCenterImage = false;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
        if (height === width) {
            return imgTensor;
        }
        var dimDiff = Math.abs(height - width);
        var paddingAmount = Math.round(dimDiff * (isCenterImage ? 0.5 : 1));
        var paddingAxis = height > width ? 2 : 1;
        var createPaddingTensor = function(paddingAmount) {
            var paddingTensorShape = imgTensor.shape.slice();
            paddingTensorShape[paddingAxis] = paddingAmount;
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"](paddingTensorShape, 0);
        };
        var paddingTensorAppend = createPaddingTensor(paddingAmount);
        var remainingPaddingAmount = dimDiff - paddingTensorAppend.shape[paddingAxis];
        var paddingTensorPrepend = isCenterImage && remainingPaddingAmount ? createPaddingTensor(remainingPaddingAmount) : null;
        var tensorsToStack = [
            paddingTensorPrepend,
            imgTensor,
            paddingTensorAppend
        ].filter(function(t) {
            return !!t;
        }).map(function(t) {
            return t.toFloat();
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](tensorsToStack, paddingAxis);
    });
} //# sourceMappingURL=padToSquare.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/shuffleArray.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shuffleArray",
    ()=>shuffleArray
]);
function shuffleArray(inputArray) {
    var array = inputArray.slice();
    for(var i = array.length - 1; i > 0; i--){
        var j = Math.floor(Math.random() * (i + 1));
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
} //# sourceMappingURL=shuffleArray.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inverseSigmoid",
    ()=>inverseSigmoid,
    "sigmoid",
    ()=>sigmoid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$iou$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/iou.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$minBbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/minBbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/nonMaxSuppression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$padToSquare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/padToSquare.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$shuffleArray$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/shuffleArray.js [app-client] (ecmascript)");
;
;
;
;
;
;
function sigmoid(x) {
    return 1 / (1 + Math.exp(-x));
}
function inverseSigmoid(x) {
    return Math.log(x / (1 - x));
} //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Rect.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rect",
    ()=>Rect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
;
;
var Rect = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Rect, _super);
    function Rect(x, y, width, height, allowNegativeDimensions) {
        if (allowNegativeDimensions === void 0) {
            allowNegativeDimensions = false;
        }
        return _super.call(this, {
            x: x,
            y: y,
            width: width,
            height: height
        }, allowNegativeDimensions) || this;
    }
    return Rect;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
;
 //# sourceMappingURL=Rect.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceLandmarks",
    ()=>FaceLandmarks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$minBbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/minBbox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Dimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Rect.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
// face alignment constants
var relX = 0.5;
var relY = 0.43;
var relScale = 0.45;
var FaceLandmarks = function() {
    function FaceLandmarks(relativeFaceLandmarkPositions, imgDims, shift) {
        if (shift === void 0) {
            shift = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](0, 0);
        }
        var width = imgDims.width, height = imgDims.height;
        this._imgDims = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimensions"](width, height);
        this._shift = shift;
        this._positions = relativeFaceLandmarkPositions.map(function(pt) {
            return pt.mul(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](width, height)).add(shift);
        });
    }
    Object.defineProperty(FaceLandmarks.prototype, "shift", {
        get: function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](this._shift.x, this._shift.y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceLandmarks.prototype, "imageWidth", {
        get: function() {
            return this._imgDims.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceLandmarks.prototype, "imageHeight", {
        get: function() {
            return this._imgDims.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceLandmarks.prototype, "positions", {
        get: function() {
            return this._positions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceLandmarks.prototype, "relativePositions", {
        get: function() {
            var _this = this;
            return this._positions.map(function(pt) {
                return pt.sub(_this._shift).div(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](_this.imageWidth, _this.imageHeight));
            });
        },
        enumerable: true,
        configurable: true
    });
    FaceLandmarks.prototype.forSize = function(width, height) {
        return new this.constructor(this.relativePositions, {
            width: width,
            height: height
        });
    };
    FaceLandmarks.prototype.shiftBy = function(x, y) {
        return new this.constructor(this.relativePositions, this._imgDims, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](x, y));
    };
    FaceLandmarks.prototype.shiftByPoint = function(pt) {
        return this.shiftBy(pt.x, pt.y);
    };
    /**
     * Aligns the face landmarks after face detection from the relative positions of the faces
     * bounding box, or it's current shift. This function should be used to align the face images
     * after face detection has been performed, before they are passed to the face recognition net.
     * This will make the computed face descriptor more accurate.
     *
     * @param detection (optional) The bounding box of the face or the face detection result. If
     * no argument was passed the position of the face landmarks are assumed to be relative to
     * it's current shift.
     * @returns The bounding box of the aligned face.
     */ FaceLandmarks.prototype.align = function(detection, options) {
        if (options === void 0) {
            options = {};
        }
        if (detection) {
            var box = detection instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"] ? detection.box.floor() : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"](detection);
            return this.shiftBy(box.x, box.y).align(null, options);
        }
        var _a = Object.assign({}, {
            useDlibAlignment: false,
            minBoxPadding: 0.2
        }, options), useDlibAlignment = _a.useDlibAlignment, minBoxPadding = _a.minBoxPadding;
        if (useDlibAlignment) {
            return this.alignDlib();
        }
        return this.alignMinBbox(minBoxPadding);
    };
    FaceLandmarks.prototype.alignDlib = function() {
        var centers = this.getRefPointsForAlignment();
        var leftEyeCenter = centers[0], rightEyeCenter = centers[1], mouthCenter = centers[2];
        var distToMouth = function(pt) {
            return mouthCenter.sub(pt).magnitude();
        };
        var eyeToMouthDist = (distToMouth(leftEyeCenter) + distToMouth(rightEyeCenter)) / 2;
        var size = Math.floor(eyeToMouthDist / relScale);
        var refPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenterPoint"])(centers);
        // TODO: pad in case rectangle is out of image bounds
        var x = Math.floor(Math.max(0, refPoint.x - relX * size));
        var y = Math.floor(Math.max(0, refPoint.y - relY * size));
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"](x, y, Math.min(size, this.imageWidth + x), Math.min(size, this.imageHeight + y));
    };
    FaceLandmarks.prototype.alignMinBbox = function(padding) {
        var box = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$minBbox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minBbox"])(this.positions);
        return box.pad(box.width * padding, box.height * padding);
    };
    FaceLandmarks.prototype.getRefPointsForAlignment = function() {
        throw new Error('getRefPointsForAlignment not implemented by base class');
    };
    return FaceLandmarks;
}();
;
 //# sourceMappingURL=FaceLandmarks.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks5.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceLandmarks5",
    ()=>FaceLandmarks5
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks.js [app-client] (ecmascript)");
;
;
;
var FaceLandmarks5 = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceLandmarks5, _super);
    function FaceLandmarks5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks5.prototype.getRefPointsForAlignment = function() {
        var pts = this.positions;
        return [
            pts[0],
            pts[1],
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenterPoint"])([
                pts[3],
                pts[4]
            ])
        ];
    };
    return FaceLandmarks5;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks"]);
;
 //# sourceMappingURL=FaceLandmarks5.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks68.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceLandmarks68",
    ()=>FaceLandmarks68
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks.js [app-client] (ecmascript)");
;
;
;
var FaceLandmarks68 = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceLandmarks68, _super);
    function FaceLandmarks68() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmarks68.prototype.getJawOutline = function() {
        return this.positions.slice(0, 17);
    };
    FaceLandmarks68.prototype.getLeftEyeBrow = function() {
        return this.positions.slice(17, 22);
    };
    FaceLandmarks68.prototype.getRightEyeBrow = function() {
        return this.positions.slice(22, 27);
    };
    FaceLandmarks68.prototype.getNose = function() {
        return this.positions.slice(27, 36);
    };
    FaceLandmarks68.prototype.getLeftEye = function() {
        return this.positions.slice(36, 42);
    };
    FaceLandmarks68.prototype.getRightEye = function() {
        return this.positions.slice(42, 48);
    };
    FaceLandmarks68.prototype.getMouth = function() {
        return this.positions.slice(48, 68);
    };
    FaceLandmarks68.prototype.getRefPointsForAlignment = function() {
        return [
            this.getLeftEye(),
            this.getRightEye(),
            this.getMouth()
        ].map(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCenterPoint"]);
    };
    return FaceLandmarks68;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks"]);
;
 //# sourceMappingURL=FaceLandmarks68.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceMatch.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceMatch",
    ()=>FaceMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
var FaceMatch = function() {
    function FaceMatch(label, distance) {
        this._label = label;
        this._distance = distance;
    }
    Object.defineProperty(FaceMatch.prototype, "label", {
        get: function() {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceMatch.prototype, "distance", {
        get: function() {
            return this._distance;
        },
        enumerable: true,
        configurable: true
    });
    FaceMatch.prototype.toString = function(withDistance) {
        if (withDistance === void 0) {
            withDistance = true;
        }
        return "" + this.label + (withDistance ? " (" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(this.distance) + ")" : '');
    };
    return FaceMatch;
}();
;
 //# sourceMappingURL=FaceMatch.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/LabeledBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabeledBox",
    ()=>LabeledBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
;
;
;
var LabeledBox = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(LabeledBox, _super);
    function LabeledBox(box, label) {
        var _this = _super.call(this, box) || this;
        _this._label = label;
        return _this;
    }
    LabeledBox.assertIsValidLabeledBox = function(box, callee) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"].assertIsValidBox(box, callee);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidNumber"])(box.label)) {
            throw new Error(callee + " - expected property label (" + box.label + ") to be a number");
        }
    };
    Object.defineProperty(LabeledBox.prototype, "label", {
        get: function() {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    return LabeledBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
;
 //# sourceMappingURL=LabeledBox.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/LabeledFaceDescriptors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LabeledFaceDescriptors",
    ()=>LabeledFaceDescriptors
]);
var LabeledFaceDescriptors = function() {
    function LabeledFaceDescriptors(label, descriptors) {
        if (!(typeof label === 'string')) {
            throw new Error('LabeledFaceDescriptors - constructor expected label to be a string');
        }
        if (!Array.isArray(descriptors) || descriptors.some(function(desc) {
            return !(desc instanceof Float32Array);
        })) {
            throw new Error('LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array');
        }
        this._label = label;
        this._descriptors = descriptors;
    }
    Object.defineProperty(LabeledFaceDescriptors.prototype, "label", {
        get: function() {
            return this._label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabeledFaceDescriptors.prototype, "descriptors", {
        get: function() {
            return this._descriptors;
        },
        enumerable: true,
        configurable: true
    });
    LabeledFaceDescriptors.prototype.toJSON = function() {
        return {
            label: this.label,
            descriptors: this.descriptors.map(function(d) {
                return Array.from(d);
            })
        };
    };
    LabeledFaceDescriptors.fromJSON = function(json) {
        var descriptors = json.descriptors.map(function(d) {
            return new Float32Array(d);
        });
        return new LabeledFaceDescriptors(json.label, descriptors);
    };
    return LabeledFaceDescriptors;
}();
;
 //# sourceMappingURL=LabeledFaceDescriptors.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/PredictedBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PredictedBox",
    ()=>PredictedBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/LabeledBox.js [app-client] (ecmascript)");
;
;
;
var PredictedBox = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictedBox, _super);
    function PredictedBox(box, label, score, classScore) {
        var _this = _super.call(this, box, label) || this;
        _this._score = score;
        _this._classScore = classScore;
        return _this;
    }
    PredictedBox.assertIsValidPredictedBox = function(box, callee) {
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledBox"].assertIsValidLabeledBox(box, callee);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProbablitiy"])(box.score) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProbablitiy"])(box.classScore)) {
            throw new Error(callee + " - expected properties score (" + box.score + ") and (" + box.classScore + ") to be a number between [0, 1]");
        }
    };
    Object.defineProperty(PredictedBox.prototype, "score", {
        get: function() {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PredictedBox.prototype, "classScore", {
        get: function() {
            return this._classScore;
        },
        enumerable: true,
        configurable: true
    });
    return PredictedBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledBox"]);
;
 //# sourceMappingURL=PredictedBox.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$BoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/BoundingBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Dimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks68.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceMatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceMatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/LabeledBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledFaceDescriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/LabeledFaceDescriptors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$ObjectDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/ObjectDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$PredictedBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/PredictedBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Rect.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDetection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendWithFaceDetection",
    ()=>extendWithFaceDetection,
    "isWithFaceDetection",
    ()=>isWithFaceDetection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
;
function isWithFaceDetection(obj) {
    return obj['detection'] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"];
}
function extendWithFaceDetection(sourceObj, detection) {
    var extension = {
        detection: detection
    };
    return Object.assign({}, sourceObj, extension);
} //# sourceMappingURL=WithFaceDetection.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/createBrowserEnv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBrowserEnv",
    ()=>createBrowserEnv
]);
function createBrowserEnv() {
    var fetch = window['fetch'] || function() {
        throw new Error('fetch - missing fetch implementation for browser environment');
    };
    var readFile = function() {
        throw new Error('readFile - filesystem not available for browser environment');
    };
    return {
        Canvas: HTMLCanvasElement,
        CanvasRenderingContext2D: CanvasRenderingContext2D,
        Image: HTMLImageElement,
        ImageData: ImageData,
        Video: HTMLVideoElement,
        createCanvasElement: function() {
            return document.createElement('canvas');
        },
        createImageElement: function() {
            return document.createElement('img');
        },
        fetch: fetch,
        readFile: readFile
    };
} //# sourceMappingURL=createBrowserEnv.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/createFileSystem.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFileSystem",
    ()=>createFileSystem
]);
function createFileSystem(fs) {
    var requireFsError = '';
    if (!fs) {
        try {
            fs = (()=>{
                const e = new Error("Cannot find module 'fs'");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })();
        } catch (err) {
            requireFsError = err.toString();
        }
    }
    var readFile = fs ? function(filePath) {
        return new Promise(function(res, rej) {
            fs.readFile(filePath, function(err, buffer) {
                return err ? rej(err) : res(buffer);
            });
        });
    } : function() {
        throw new Error("readFile - failed to require fs in nodejs environment with error: " + requireFsError);
    };
    return {
        readFile: readFile
    };
} //# sourceMappingURL=createFileSystem.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/createNodejsEnv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNodejsEnv",
    ()=>createNodejsEnv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createFileSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/createFileSystem.js [app-client] (ecmascript)");
;
;
function createNodejsEnv() {
    var Canvas = /*TURBOPACK member replacement*/ __turbopack_context__.g['Canvas'] || /*TURBOPACK member replacement*/ __turbopack_context__.g['HTMLCanvasElement'];
    var Image = /*TURBOPACK member replacement*/ __turbopack_context__.g['Image'] || /*TURBOPACK member replacement*/ __turbopack_context__.g['HTMLImageElement'];
    var createCanvasElement = function() {
        if (Canvas) {
            return new Canvas();
        }
        throw new Error('createCanvasElement - missing Canvas implementation for nodejs environment');
    };
    var createImageElement = function() {
        if (Image) {
            return new Image();
        }
        throw new Error('createImageElement - missing Image implementation for nodejs environment');
    };
    var fetch = /*TURBOPACK member replacement*/ __turbopack_context__.g['fetch'] || function() {
        throw new Error('fetch - missing fetch implementation for nodejs environment');
    };
    var fileSystem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createFileSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFileSystem"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
        Canvas: Canvas || function() {
            function Canvas() {}
            return Canvas;
        }(),
        CanvasRenderingContext2D: /*TURBOPACK member replacement*/ __turbopack_context__.g['CanvasRenderingContext2D'] || function() {
            function class_1() {}
            return class_1;
        }(),
        Image: Image || function() {
            function Image() {}
            return Image;
        }(),
        ImageData: /*TURBOPACK member replacement*/ __turbopack_context__.g['ImageData'] || function() {
            function class_2() {}
            return class_2;
        }(),
        Video: /*TURBOPACK member replacement*/ __turbopack_context__.g['HTMLVideoElement'] || function() {
            function class_3() {}
            return class_3;
        }(),
        createCanvasElement: createCanvasElement,
        createImageElement: createImageElement,
        fetch: fetch
    }, fileSystem);
} //# sourceMappingURL=createNodejsEnv.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/isBrowser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBrowser",
    ()=>isBrowser
]);
function isBrowser() {
    return typeof window === 'object' && typeof document !== 'undefined' && typeof HTMLImageElement !== 'undefined' && typeof HTMLCanvasElement !== 'undefined' && typeof HTMLVideoElement !== 'undefined' && typeof ImageData !== 'undefined' && typeof CanvasRenderingContext2D !== 'undefined';
} //# sourceMappingURL=isBrowser.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/isNodejs.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodejs",
    ()=>isNodejs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function isNodejs() {
    return ("TURBOPACK compile-time value", "object") === 'object' && ("TURBOPACK compile-time value", "function") === 'function' && ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && !!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].version;
} //# sourceMappingURL=isNodejs.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "env",
    ()=>env
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createBrowserEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/createBrowserEnv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createFileSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/createFileSystem.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createNodejsEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/createNodejsEnv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/isBrowser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$isNodejs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/isNodejs.js [app-client] (ecmascript)");
;
;
;
;
;
var environment;
function getEnv() {
    if (!environment) {
        throw new Error('getEnv - environment is not defined, check isNodejs() and isBrowser()');
    }
    return environment;
}
function setEnv(env) {
    environment = env;
}
function initialize() {
    // check for isBrowser() first to prevent electron renderer process
    // to be initialized with wrong environment due to isNodejs() returning true
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])()) {
        setEnv((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createBrowserEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserEnv"])());
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$isNodejs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodejs"])()) {
        setEnv((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createNodejsEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodejsEnv"])());
    }
}
function monkeyPatch(env) {
    if (!environment) {
        initialize();
    }
    if (!environment) {
        throw new Error('monkeyPatch - environment is not defined, check isNodejs() and isBrowser()');
    }
    var _a = env.Canvas, Canvas = _a === void 0 ? environment.Canvas : _a, _b = env.Image, Image = _b === void 0 ? environment.Image : _b;
    environment.Canvas = Canvas;
    environment.Image = Image;
    environment.createCanvasElement = env.createCanvasElement || function() {
        return new Canvas();
    };
    environment.createImageElement = env.createImageElement || function() {
        return new Image();
    };
    environment.ImageData = env.ImageData || environment.ImageData;
    environment.Video = env.Video || environment.Video;
    environment.fetch = env.fetch || environment.fetch;
    environment.readFile = env.readFile || environment.readFile;
}
var env = {
    getEnv: getEnv,
    setEnv: setEnv,
    initialize: initialize,
    createBrowserEnv: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createBrowserEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserEnv"],
    createFileSystem: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createFileSystem$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFileSystem"],
    createNodejsEnv: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$createNodejsEnv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodejsEnv"],
    monkeyPatch: monkeyPatch,
    isBrowser: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"],
    isNodejs: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$isNodejs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodejs"]
};
initialize(); //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/resolveInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveInput",
    ()=>resolveInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
;
function resolveInput(arg) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isNodejs() && typeof arg === 'string') {
        return document.getElementById(arg);
    }
    return arg;
} //# sourceMappingURL=resolveInput.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getContext2dOrThrow",
    ()=>getContext2dOrThrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$resolveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/resolveInput.js [app-client] (ecmascript)");
;
;
function getContext2dOrThrow(canvasArg) {
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv(), Canvas = _a.Canvas, CanvasRenderingContext2D = _a.CanvasRenderingContext2D;
    if (canvasArg instanceof CanvasRenderingContext2D) {
        return canvasArg;
    }
    var canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$resolveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveInput"])(canvasArg);
    if (!(canvas instanceof Canvas)) {
        throw new Error('resolveContext2d - expected canvas to be of instance of Canvas');
    }
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error('resolveContext2d - canvas 2d context is null');
    }
    return ctx;
} //# sourceMappingURL=getContext2dOrThrow.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawTextField.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnchorPosition",
    ()=>AnchorPosition,
    "DrawTextField",
    ()=>DrawTextField,
    "DrawTextFieldOptions",
    ()=>DrawTextFieldOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$resolveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/resolveInput.js [app-client] (ecmascript)");
;
;
var AnchorPosition;
(function(AnchorPosition) {
    AnchorPosition["TOP_LEFT"] = "TOP_LEFT";
    AnchorPosition["TOP_RIGHT"] = "TOP_RIGHT";
    AnchorPosition["BOTTOM_LEFT"] = "BOTTOM_LEFT";
    AnchorPosition["BOTTOM_RIGHT"] = "BOTTOM_RIGHT";
})(AnchorPosition || (AnchorPosition = {}));
var DrawTextFieldOptions = function() {
    function DrawTextFieldOptions(options) {
        if (options === void 0) {
            options = {};
        }
        var anchorPosition = options.anchorPosition, backgroundColor = options.backgroundColor, fontColor = options.fontColor, fontSize = options.fontSize, fontStyle = options.fontStyle, padding = options.padding;
        this.anchorPosition = anchorPosition || AnchorPosition.TOP_LEFT;
        this.backgroundColor = backgroundColor || 'rgba(0, 0, 0, 0.5)';
        this.fontColor = fontColor || 'rgba(255, 255, 255, 1)';
        this.fontSize = fontSize || 14;
        this.fontStyle = fontStyle || 'Georgia';
        this.padding = padding || 4;
    }
    return DrawTextFieldOptions;
}();
;
var DrawTextField = function() {
    function DrawTextField(text, anchor, options) {
        if (options === void 0) {
            options = {};
        }
        this.text = typeof text === 'string' ? [
            text
        ] : text instanceof DrawTextField ? text.text : text;
        this.anchor = anchor;
        this.options = new DrawTextFieldOptions(options);
    }
    DrawTextField.prototype.measureWidth = function(ctx) {
        var padding = this.options.padding;
        return this.text.map(function(l) {
            return ctx.measureText(l).width;
        }).reduce(function(w0, w1) {
            return w0 < w1 ? w1 : w0;
        }, 0) + 2 * padding;
    };
    DrawTextField.prototype.measureHeight = function() {
        var _a = this.options, fontSize = _a.fontSize, padding = _a.padding;
        return this.text.length * fontSize + 2 * padding;
    };
    DrawTextField.prototype.getUpperLeft = function(ctx, canvasDims) {
        var anchorPosition = this.options.anchorPosition;
        var isShiftLeft = anchorPosition === AnchorPosition.BOTTOM_RIGHT || anchorPosition === AnchorPosition.TOP_RIGHT;
        var isShiftTop = anchorPosition === AnchorPosition.BOTTOM_LEFT || anchorPosition === AnchorPosition.BOTTOM_RIGHT;
        var textFieldWidth = this.measureWidth(ctx);
        var textFieldHeight = this.measureHeight();
        var x = isShiftLeft ? this.anchor.x - textFieldWidth : this.anchor.x;
        var y = isShiftTop ? this.anchor.y - textFieldHeight : this.anchor.y;
        // adjust anchor if text box exceeds canvas borders
        if (canvasDims) {
            var width = canvasDims.width, height = canvasDims.height;
            var newX = Math.max(Math.min(x, width - textFieldWidth), 0);
            var newY = Math.max(Math.min(y, height - textFieldHeight), 0);
            return {
                x: newX,
                y: newY
            };
        }
        return {
            x: x,
            y: y
        };
    };
    DrawTextField.prototype.draw = function(canvasArg) {
        var canvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$resolveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveInput"])(canvasArg);
        var ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(canvas);
        var _a = this.options, backgroundColor = _a.backgroundColor, fontColor = _a.fontColor, fontSize = _a.fontSize, fontStyle = _a.fontStyle, padding = _a.padding;
        ctx.font = fontSize + "px " + fontStyle;
        var maxTextWidth = this.measureWidth(ctx);
        var textHeight = this.measureHeight();
        ctx.fillStyle = backgroundColor;
        var upperLeft = this.getUpperLeft(ctx, canvas);
        ctx.fillRect(upperLeft.x, upperLeft.y, maxTextWidth, textHeight);
        ctx.fillStyle = fontColor;
        this.text.forEach(function(textLine, i) {
            var x = padding + upperLeft.x;
            var y = padding + upperLeft.y + (i + 1) * fontSize;
            ctx.fillText(textLine, x, y);
        });
    };
    return DrawTextField;
}();
;
 //# sourceMappingURL=DrawTextField.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrawBox",
    ()=>DrawBox,
    "DrawBoxOptions",
    ()=>DrawBoxOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawTextField.js [app-client] (ecmascript)");
;
;
;
var DrawBoxOptions = function() {
    function DrawBoxOptions(options) {
        if (options === void 0) {
            options = {};
        }
        var boxColor = options.boxColor, lineWidth = options.lineWidth, label = options.label, drawLabelOptions = options.drawLabelOptions;
        this.boxColor = boxColor || 'rgba(0, 0, 255, 1)';
        this.lineWidth = lineWidth || 2;
        this.label = label;
        var defaultDrawLabelOptions = {
            anchorPosition: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnchorPosition"].BOTTOM_LEFT,
            backgroundColor: this.boxColor
        };
        this.drawLabelOptions = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawTextFieldOptions"](Object.assign({}, defaultDrawLabelOptions, drawLabelOptions));
    }
    return DrawBoxOptions;
}();
;
var DrawBox = function() {
    function DrawBox(box, options) {
        if (options === void 0) {
            options = {};
        }
        this.box = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"](box);
        this.options = new DrawBoxOptions(options);
    }
    DrawBox.prototype.draw = function(canvasArg) {
        var ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(canvasArg);
        var _a = this.options, boxColor = _a.boxColor, lineWidth = _a.lineWidth;
        var _b = this.box, x = _b.x, y = _b.y, width = _b.width, height = _b.height;
        ctx.strokeStyle = boxColor;
        ctx.lineWidth = lineWidth;
        ctx.strokeRect(x, y, width, height);
        var label = this.options.label;
        if (label) {
            new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawTextField"]([
                label
            ], {
                x: x - lineWidth / 2,
                y: y
            }, this.options.drawLabelOptions).draw(canvasArg);
        }
    };
    return DrawBox;
}();
;
 //# sourceMappingURL=DrawBox.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawDetections.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawDetections",
    ()=>drawDetections
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawBox.js [app-client] (ecmascript)");
;
;
;
;
;
function drawDetections(canvasArg, detections) {
    var detectionsArray = Array.isArray(detections) ? detections : [
        detections
    ];
    detectionsArray.forEach(function(det) {
        var score = det instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"] ? det.score : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceDetection"])(det) ? det.detection.score : undefined;
        var box = det instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"] ? det.box : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceDetection"])(det) ? det.detection.box : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"](det);
        var label = score ? "" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(score) : undefined;
        new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawBox"](box, {
            label: label
        }).draw(canvasArg);
    });
} //# sourceMappingURL=drawDetections.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/isMediaLoaded.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMediaLoaded",
    ()=>isMediaLoaded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
;
function isMediaLoaded(media) {
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv(), Image = _a.Image, Video = _a.Video;
    return media instanceof Image && media.complete || media instanceof Video && media.readyState >= 3;
} //# sourceMappingURL=isMediaLoaded.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/awaitMediaLoaded.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "awaitMediaLoaded",
    ()=>awaitMediaLoaded
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaLoaded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/isMediaLoaded.js [app-client] (ecmascript)");
;
;
function awaitMediaLoaded(media) {
    return new Promise(function(resolve, reject) {
        if (media instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().Canvas || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaLoaded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMediaLoaded"])(media)) {
            return resolve();
        }
        function onLoad(e) {
            if (!e.currentTarget) return;
            e.currentTarget.removeEventListener('load', onLoad);
            e.currentTarget.removeEventListener('error', onError);
            resolve(e);
        }
        function onError(e) {
            if (!e.currentTarget) return;
            e.currentTarget.removeEventListener('load', onLoad);
            e.currentTarget.removeEventListener('error', onError);
            reject(e);
        }
        media.addEventListener('load', onLoad);
        media.addEventListener('error', onError);
    });
} //# sourceMappingURL=awaitMediaLoaded.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/bufferToImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bufferToImage",
    ()=>bufferToImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
;
function bufferToImage(buf) {
    return new Promise(function(resolve, reject) {
        if (!(buf instanceof Blob)) {
            return reject('bufferToImage - expected buf to be of type: Blob');
        }
        var reader = new FileReader();
        reader.onload = function() {
            if (typeof reader.result !== 'string') {
                return reject('bufferToImage - expected reader.result to be a string, in onload');
            }
            var img = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().createImageElement();
            img.onload = function() {
                return resolve(img);
            };
            img.onerror = reject;
            img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(buf);
    });
} //# sourceMappingURL=bufferToImage.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getMediaDimensions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getMediaDimensions",
    ()=>getMediaDimensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Dimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
;
;
function getMediaDimensions(input) {
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv(), Image = _a.Image, Video = _a.Video;
    if (input instanceof Image) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimensions"](input.naturalWidth, input.naturalHeight);
    }
    if (input instanceof Video) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimensions"](input.videoWidth, input.videoHeight);
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimensions"](input.width, input.height);
} //# sourceMappingURL=getMediaDimensions.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/createCanvas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCanvas",
    ()=>createCanvas,
    "createCanvasFromMedia",
    ()=>createCanvasFromMedia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getMediaDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getMediaDimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaLoaded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/isMediaLoaded.js [app-client] (ecmascript)");
;
;
;
;
function createCanvas(_a) {
    var width = _a.width, height = _a.height;
    var createCanvasElement = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().createCanvasElement;
    var canvas = createCanvasElement();
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
function createCanvasFromMedia(media, dims) {
    var ImageData = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().ImageData;
    if (!(media instanceof ImageData) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaLoaded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMediaLoaded"])(media)) {
        throw new Error('createCanvasFromMedia - media has not finished loading yet');
    }
    var _a = dims || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getMediaDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaDimensions"])(media), width = _a.width, height = _a.height;
    var canvas = createCanvas({
        width: width,
        height: height
    });
    if (media instanceof ImageData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(canvas).putImageData(media, 0, 0);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(canvas).drawImage(media, 0, 0, width, height);
    }
    return canvas;
} //# sourceMappingURL=createCanvas.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/imageTensorToCanvas.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageTensorToCanvas",
    ()=>imageTensorToCanvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
;
;
function imageTensorToCanvas(imgTensor, canvas) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var targetCanvas, _a, height, width, numChannels, imgTensor3D;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    targetCanvas = canvas || __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().createCanvasElement();
                    _a = imgTensor.shape.slice((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor4D"])(imgTensor) ? 1 : 0), height = _a[0], width = _a[1], numChannels = _a[2];
                    imgTensor3D = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
                        return imgTensor.as3D(height, width, numChannels).toInt();
                    });
                    return [
                        4 /*yield*/ ,
                        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browser"].toPixels(imgTensor3D, targetCanvas)
                    ];
                case 1:
                    _b.sent();
                    imgTensor3D.dispose();
                    return [
                        2 /*return*/ ,
                        targetCanvas
                    ];
            }
        });
    });
} //# sourceMappingURL=imageTensorToCanvas.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/isMediaElement.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMediaElement",
    ()=>isMediaElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
;
function isMediaElement(input) {
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv(), Image = _a.Image, Canvas = _a.Canvas, Video = _a.Video;
    return input instanceof Image || input instanceof Canvas || input instanceof Video;
} //# sourceMappingURL=isMediaElement.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/imageToSquare.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageToSquare",
    ()=>imageToSquare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/createCanvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getMediaDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getMediaDimensions.js [app-client] (ecmascript)");
;
;
;
;
function imageToSquare(input, inputSize, centerImage) {
    if (centerImage === void 0) {
        centerImage = false;
    }
    var _a = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv(), Image = _a.Image, Canvas = _a.Canvas;
    if (!(input instanceof Image || input instanceof Canvas)) {
        throw new Error('imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement');
    }
    var dims = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getMediaDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaDimensions"])(input);
    var scale = inputSize / Math.max(dims.height, dims.width);
    var width = scale * dims.width;
    var height = scale * dims.height;
    var targetCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCanvas"])({
        width: inputSize,
        height: inputSize
    });
    var inputCanvas = input instanceof Canvas ? input : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCanvasFromMedia"])(input);
    var offset = Math.abs(width - height) / 2;
    var dx = centerImage && width < height ? offset : 0;
    var dy = centerImage && height < width ? offset : 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(targetCanvas).drawImage(inputCanvas, dx, dy, width, height);
    return targetCanvas;
} //# sourceMappingURL=imageToSquare.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/NetInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NetInput",
    ()=>NetInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$padToSquare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/padToSquare.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/createCanvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$imageToSquare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/imageToSquare.js [app-client] (ecmascript)");
;
;
;
;
;
;
var NetInput = function() {
    function NetInput(inputs, treatAsBatchInput) {
        var _this = this;
        if (treatAsBatchInput === void 0) {
            treatAsBatchInput = false;
        }
        this._imageTensors = [];
        this._canvases = [];
        this._treatAsBatchInput = false;
        this._inputDimensions = [];
        if (!Array.isArray(inputs)) {
            throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have " + inputs);
        }
        this._treatAsBatchInput = treatAsBatchInput;
        this._batchSize = inputs.length;
        inputs.forEach(function(input, idx) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor3D"])(input)) {
                _this._imageTensors[idx] = input;
                _this._inputDimensions[idx] = input.shape;
                return;
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor4D"])(input)) {
                var batchSize = input.shape[0];
                if (batchSize !== 1) {
                    throw new Error("NetInput - tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                }
                _this._imageTensors[idx] = input;
                _this._inputDimensions[idx] = input.shape.slice(1);
                return;
            }
            var canvas = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().Canvas ? input : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCanvasFromMedia"])(input);
            _this._canvases[idx] = canvas;
            _this._inputDimensions[idx] = [
                canvas.height,
                canvas.width,
                3
            ];
        });
    }
    Object.defineProperty(NetInput.prototype, "imageTensors", {
        get: function() {
            return this._imageTensors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "canvases", {
        get: function() {
            return this._canvases;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "isBatchInput", {
        get: function() {
            return this.batchSize > 1 || this._treatAsBatchInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "batchSize", {
        get: function() {
            return this._batchSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "inputDimensions", {
        get: function() {
            return this._inputDimensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "inputSize", {
        get: function() {
            return this._inputSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NetInput.prototype, "reshapedInputDimensions", {
        get: function() {
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(this.batchSize, 0, 1).map(function(_, batchIdx) {
                return _this.getReshapedInputDimensions(batchIdx);
            });
        },
        enumerable: true,
        configurable: true
    });
    NetInput.prototype.getInput = function(batchIdx) {
        return this.canvases[batchIdx] || this.imageTensors[batchIdx];
    };
    NetInput.prototype.getInputDimensions = function(batchIdx) {
        return this._inputDimensions[batchIdx];
    };
    NetInput.prototype.getInputHeight = function(batchIdx) {
        return this._inputDimensions[batchIdx][0];
    };
    NetInput.prototype.getInputWidth = function(batchIdx) {
        return this._inputDimensions[batchIdx][1];
    };
    NetInput.prototype.getReshapedInputDimensions = function(batchIdx) {
        if (typeof this.inputSize !== 'number') {
            throw new Error('getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet');
        }
        var width = this.getInputWidth(batchIdx);
        var height = this.getInputHeight(batchIdx);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeReshapedDimensions"])({
            width: width,
            height: height
        }, this.inputSize);
    };
    /**
     * Create a batch tensor from all input canvases and tensors
     * with size [batchSize, inputSize, inputSize, 3].
     *
     * @param inputSize Height and width of the tensor.
     * @param isCenterImage (optional, default: false) If true, add an equal amount of padding on
     * both sides of the minor dimension oof the image.
     * @returns The batch tensor.
     */ NetInput.prototype.toBatchTensor = function(inputSize, isCenterInputs) {
        var _this = this;
        if (isCenterInputs === void 0) {
            isCenterInputs = true;
        }
        this._inputSize = inputSize;
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var inputTensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(_this.batchSize, 0, 1).map(function(batchIdx) {
                var input = _this.getInput(batchIdx);
                if (input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"]) {
                    var imgTensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor4D"])(input) ? input : input.expandDims();
                    imgTensor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$padToSquare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["padToSquare"])(imgTensor, isCenterInputs);
                    if (imgTensor.shape[1] !== inputSize || imgTensor.shape[2] !== inputSize) {
                        imgTensor = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["image"].resizeBilinear(imgTensor, [
                            inputSize,
                            inputSize
                        ]);
                    }
                    return imgTensor.as3D(inputSize, inputSize, 3);
                }
                if (input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().Canvas) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browser"].fromPixels((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$imageToSquare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageToSquare"])(input, inputSize, isCenterInputs));
                }
                throw new Error("toBatchTensor - at batchIdx " + batchIdx + ", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have " + input);
            });
            var batchTensor = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"](inputTensors.map(function(t) {
                return t.toFloat();
            })).as4D(_this.batchSize, inputSize, inputSize, 3);
            return batchTensor;
        });
    };
    return NetInput;
}();
;
 //# sourceMappingURL=NetInput.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toNetInput",
    ()=>toNetInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$awaitMediaLoaded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/awaitMediaLoaded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/isMediaElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$NetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/NetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$resolveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/resolveInput.js [app-client] (ecmascript)");
;
;
;
;
;
;
function toNetInput(inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var inputArgArray, getIdxHint, inputArray;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            switch(_a.label){
                case 0:
                    if (inputs instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$NetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetInput"]) {
                        return [
                            2 /*return*/ ,
                            inputs
                        ];
                    }
                    inputArgArray = Array.isArray(inputs) ? inputs : [
                        inputs
                    ];
                    if (!inputArgArray.length) {
                        throw new Error('toNetInput - empty array passed as input');
                    }
                    getIdxHint = function(idx) {
                        return Array.isArray(inputs) ? " at input index " + idx + ":" : '';
                    };
                    inputArray = inputArgArray.map(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$resolveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveInput"]);
                    inputArray.forEach(function(input, i) {
                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMediaElement"])(input) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor3D"])(input) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor4D"])(input)) {
                            if (typeof inputArgArray[i] === 'string') {
                                throw new Error("toNetInput -" + getIdxHint(i) + " string passed, but could not resolve HTMLElement for element id " + inputArgArray[i]);
                            }
                            throw new Error("toNetInput -" + getIdxHint(i) + " expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");
                        }
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor4D"])(input)) {
                            // if tf.Tensor4D is passed in the input array, the batch size has to be 1
                            var batchSize = input.shape[0];
                            if (batchSize !== 1) {
                                throw new Error("toNetInput -" + getIdxHint(i) + " tf.Tensor4D with batchSize " + batchSize + " passed, but not supported in input array");
                            }
                        }
                    });
                    // wait for all media elements being loaded
                    return [
                        4 /*yield*/ ,
                        Promise.all(inputArray.map(function(input) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMediaElement"])(input) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$awaitMediaLoaded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["awaitMediaLoaded"])(input);
                        }))
                    ];
                case 1:
                    // wait for all media elements being loaded
                    _a.sent();
                    return [
                        2 /*return*/ ,
                        new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$NetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetInput"](inputArray, Array.isArray(inputs))
                    ];
            }
        });
    });
} //# sourceMappingURL=toNetInput.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/extractFaces.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractFaces",
    ()=>extractFaces
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/createCanvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$imageTensorToCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/imageTensorToCanvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function extractFaces(input, detections) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var Canvas, canvas, netInput, tensorOrCanvas, _a, ctx, boxes;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    Canvas = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().Canvas;
                    canvas = input;
                    if (!!(input instanceof Canvas)) return [
                        3 /*break*/ ,
                        5
                    ];
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                    ];
                case 1:
                    netInput = _b.sent();
                    if (netInput.batchSize > 1) {
                        throw new Error('extractFaces - batchSize > 1 not supported');
                    }
                    tensorOrCanvas = netInput.getInput(0);
                    if (!(tensorOrCanvas instanceof Canvas)) return [
                        3 /*break*/ ,
                        2
                    ];
                    _a = tensorOrCanvas;
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 2:
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$imageTensorToCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageTensorToCanvas"])(tensorOrCanvas)
                    ];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    canvas = _a;
                    _b.label = 5;
                case 5:
                    ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(canvas);
                    boxes = detections.map(function(det) {
                        return det instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"] ? det.forSize(canvas.width, canvas.height).box.floor() : det;
                    }).map(function(box) {
                        return box.clipAtImageBorders(canvas.width, canvas.height);
                    });
                    return [
                        2 /*return*/ ,
                        boxes.map(function(_a) {
                            var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                            var faceImg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCanvas"])({
                                width: width,
                                height: height
                            });
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(faceImg).putImageData(ctx.getImageData(x, y, width, height), 0, 0);
                            return faceImg;
                        })
                    ];
            }
        });
    });
} //# sourceMappingURL=extractFaces.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/extractFaceTensors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractFaceTensors",
    ()=>extractFaceTensors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
;
;
function extractFaceTensors(imageTensor, detections) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor3D"])(imageTensor) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor4D"])(imageTensor)) {
                throw new Error('extractFaceTensors - expected image tensor to be 3D or 4D');
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor4D"])(imageTensor) && imageTensor.shape[0] > 1) {
                throw new Error('extractFaceTensors - batchSize > 1 not supported');
            }
            return [
                2 /*return*/ ,
                __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
                    var _a = imageTensor.shape.slice((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor4D"])(imageTensor) ? 1 : 0), imgHeight = _a[0], imgWidth = _a[1], numChannels = _a[2];
                    var boxes = detections.map(function(det) {
                        return det instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"] ? det.forSize(imgWidth, imgHeight).box : det;
                    }).map(function(box) {
                        return box.clipAtImageBorders(imgWidth, imgHeight);
                    });
                    var faceTensors = boxes.map(function(_a) {
                        var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
                        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice3d"](imageTensor.as3D(imgHeight, imgWidth, numChannels), [
                            y,
                            x,
                            0
                        ], [
                            height,
                            width,
                            numChannels
                        ]);
                    });
                    return faceTensors;
                })
            ];
        });
    });
} //# sourceMappingURL=extractFaceTensors.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchOrThrow.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchOrThrow",
    ()=>fetchOrThrow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
;
;
function fetchOrThrow(url, init) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var fetch, res;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            switch(_a.label){
                case 0:
                    fetch = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().fetch;
                    return [
                        4 /*yield*/ ,
                        fetch(url, init)
                    ];
                case 1:
                    res = _a.sent();
                    if (!(res.status < 400)) {
                        throw new Error("failed to fetch: (" + res.status + ") " + res.statusText + ", from url: " + res.url);
                    }
                    return [
                        2 /*return*/ ,
                        res
                    ];
            }
        });
    });
} //# sourceMappingURL=fetchOrThrow.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchImage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchImage",
    ()=>fetchImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$bufferToImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/bufferToImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchOrThrow.js [app-client] (ecmascript)");
;
;
;
function fetchImage(uri) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var res, blob;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOrThrow"])(uri)
                    ];
                case 1:
                    res = _a.sent();
                    return [
                        4 /*yield*/ ,
                        res.blob()
                    ];
                case 2:
                    blob = _a.sent();
                    if (!blob.type.startsWith('image/')) {
                        throw new Error("fetchImage - expected blob type to be of type image/*, instead have: " + blob.type + ", for url: " + res.url);
                    }
                    return [
                        2 /*return*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$bufferToImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bufferToImage"])(blob)
                    ];
            }
        });
    });
} //# sourceMappingURL=fetchImage.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchJson.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchJson",
    ()=>fetchJson
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchOrThrow.js [app-client] (ecmascript)");
;
;
function fetchJson(uri) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            switch(_a.label){
                case 0:
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOrThrow"])(uri)
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _a.sent().json()
                    ];
            }
        });
    });
} //# sourceMappingURL=fetchJson.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchNetWeights.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchNetWeights",
    ()=>fetchNetWeights
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchOrThrow.js [app-client] (ecmascript)");
;
;
function fetchNetWeights(uri) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var _a;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    _a = Float32Array.bind;
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchOrThrow"])(uri)
                    ];
                case 1:
                    return [
                        4 /*yield*/ ,
                        _b.sent().arrayBuffer()
                    ];
                case 2:
                    return [
                        2 /*return*/ ,
                        new (_a.apply(Float32Array, [
                            void 0,
                            _b.sent()
                        ]))()
                    ];
            }
        });
    });
} //# sourceMappingURL=fetchNetWeights.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/getModelUris.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getModelUris",
    ()=>getModelUris
]);
function getModelUris(uri, defaultModelName) {
    var defaultManifestFilename = defaultModelName + "-weights_manifest.json";
    if (!uri) {
        return {
            modelBaseUri: '',
            manifestUri: defaultManifestFilename
        };
    }
    if (uri === '/') {
        return {
            modelBaseUri: '/',
            manifestUri: "/" + defaultManifestFilename
        };
    }
    var protocol = uri.startsWith('http://') ? 'http://' : uri.startsWith('https://') ? 'https://' : '';
    uri = uri.replace(protocol, '');
    var parts = uri.split('/').filter(function(s) {
        return s;
    });
    var manifestFile = uri.endsWith('.json') ? parts[parts.length - 1] : defaultManifestFilename;
    var modelBaseUri = protocol + (uri.endsWith('.json') ? parts.slice(0, parts.length - 1) : parts).join('/');
    modelBaseUri = uri.startsWith('/') ? "/" + modelBaseUri : modelBaseUri;
    return {
        modelBaseUri: modelBaseUri,
        manifestUri: modelBaseUri === '/' ? "/" + manifestFile : modelBaseUri + "/" + manifestFile
    };
} //# sourceMappingURL=getModelUris.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/loadWeightMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadWeightMap",
    ()=>loadWeightMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$getModelUris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/getModelUris.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchJson$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchJson.js [app-client] (ecmascript)");
;
;
;
;
function loadWeightMap(uri, defaultModelName) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var _a, manifestUri, modelBaseUri, manifest;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$getModelUris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelUris"])(uri, defaultModelName), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchJson$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchJson"])(manifestUri)
                    ];
                case 1:
                    manifest = _b.sent();
                    return [
                        2 /*return*/ ,
                        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["io"].loadWeights(manifest, modelBaseUri)
                    ];
            }
        });
    });
} //# sourceMappingURL=loadWeightMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/matchDimensions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "matchDimensions",
    ()=>matchDimensions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getMediaDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getMediaDimensions.js [app-client] (ecmascript)");
;
function matchDimensions(input, reference, useMediaDimensions) {
    if (useMediaDimensions === void 0) {
        useMediaDimensions = false;
    }
    var _a = useMediaDimensions ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getMediaDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMediaDimensions"])(reference) : reference, width = _a.width, height = _a.height;
    input.width = width;
    input.height = height;
    return {
        width: width,
        height: height
    };
} //# sourceMappingURL=matchDimensions.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$awaitMediaLoaded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/awaitMediaLoaded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$bufferToImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/bufferToImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/createCanvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/extractFaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaceTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/extractFaceTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchImage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchImage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchJson$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchJson.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchNetWeights$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchNetWeights.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$fetchOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/fetchOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getMediaDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getMediaDimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$imageTensorToCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/imageTensorToCanvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$imageToSquare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/imageToSquare.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaElement$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/isMediaElement.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$isMediaLoaded$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/isMediaLoaded.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$loadWeightMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/loadWeightMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$matchDimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/matchDimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$NetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/NetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$resolveInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/resolveInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
;
;
;
;
;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NeuralNetwork",
    ()=>NeuralNetwork
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$getModelUris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/getModelUris.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$loadWeightMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/loadWeightMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
;
;
;
;
;
var NeuralNetwork = function() {
    function NeuralNetwork(_name) {
        this._name = _name;
        this._params = undefined;
        this._paramMappings = [];
    }
    Object.defineProperty(NeuralNetwork.prototype, "params", {
        get: function() {
            return this._params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NeuralNetwork.prototype, "paramMappings", {
        get: function() {
            return this._paramMappings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NeuralNetwork.prototype, "isLoaded", {
        get: function() {
            return !!this.params;
        },
        enumerable: true,
        configurable: true
    });
    NeuralNetwork.prototype.getParamFromPath = function(paramPath) {
        var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
        return obj[objProp];
    };
    NeuralNetwork.prototype.reassignParamFromPath = function(paramPath, tensor) {
        var _a = this.traversePropertyPath(paramPath), obj = _a.obj, objProp = _a.objProp;
        obj[objProp].dispose();
        obj[objProp] = tensor;
    };
    NeuralNetwork.prototype.getParamList = function() {
        var _this = this;
        return this._paramMappings.map(function(_a) {
            var paramPath = _a.paramPath;
            return {
                path: paramPath,
                tensor: _this.getParamFromPath(paramPath)
            };
        });
    };
    NeuralNetwork.prototype.getTrainableParams = function() {
        return this.getParamList().filter(function(param) {
            return param.tensor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Variable"];
        });
    };
    NeuralNetwork.prototype.getFrozenParams = function() {
        return this.getParamList().filter(function(param) {
            return !(param.tensor instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Variable"]);
        });
    };
    NeuralNetwork.prototype.variable = function() {
        var _this = this;
        this.getFrozenParams().forEach(function(_a) {
            var path = _a.path, tensor = _a.tensor;
            _this.reassignParamFromPath(path, tensor.variable());
        });
    };
    NeuralNetwork.prototype.freeze = function() {
        var _this = this;
        this.getTrainableParams().forEach(function(_a) {
            var path = _a.path, variable = _a.tensor;
            var tensor = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor"](variable.dataSync());
            variable.dispose();
            _this.reassignParamFromPath(path, tensor);
        });
    };
    NeuralNetwork.prototype.dispose = function(throwOnRedispose) {
        if (throwOnRedispose === void 0) {
            throwOnRedispose = true;
        }
        this.getParamList().forEach(function(param) {
            if (throwOnRedispose && param.tensor.isDisposed) {
                throw new Error("param tensor has already been disposed for path " + param.path);
            }
            param.tensor.dispose();
        });
        this._params = undefined;
    };
    NeuralNetwork.prototype.serializeParams = function() {
        return new Float32Array(this.getParamList().map(function(_a) {
            var tensor = _a.tensor;
            return Array.from(tensor.dataSync());
        }).reduce(function(flat, arr) {
            return flat.concat(arr);
        }));
    };
    NeuralNetwork.prototype.load = function(weightsOrUrl) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (weightsOrUrl instanceof Float32Array) {
                            this.extractWeights(weightsOrUrl);
                            return [
                                2 /*return*/ 
                            ];
                        }
                        return [
                            4 /*yield*/ ,
                            this.loadFromUri(weightsOrUrl)
                        ];
                    case 1:
                        _a.sent();
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    NeuralNetwork.prototype.loadFromUri = function(uri) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var weightMap;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        if (uri && typeof uri !== 'string') {
                            throw new Error(this._name + ".loadFromUri - expected model uri");
                        }
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$loadWeightMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadWeightMap"])(uri, this.getDefaultModelName())
                        ];
                    case 1:
                        weightMap = _a.sent();
                        this.loadFromWeightMap(weightMap);
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    NeuralNetwork.prototype.loadFromDisk = function(filePath) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var readFile, _a, manifestUri, modelBaseUri, fetchWeightsFromDisk, loadWeights, manifest, _b, _c, weightMap;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_d) {
                switch(_d.label){
                    case 0:
                        if (filePath && typeof filePath !== 'string') {
                            throw new Error(this._name + ".loadFromDisk - expected model file path");
                        }
                        readFile = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].getEnv().readFile;
                        _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$getModelUris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getModelUris"])(filePath, this.getDefaultModelName()), manifestUri = _a.manifestUri, modelBaseUri = _a.modelBaseUri;
                        fetchWeightsFromDisk = function(filePaths) {
                            return Promise.all(filePaths.map(function(filePath) {
                                return readFile(filePath).then(function(buf) {
                                    return buf.buffer;
                                });
                            }));
                        };
                        loadWeights = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["io"].weightsLoaderFactory(fetchWeightsFromDisk);
                        _c = (_b = JSON).parse;
                        return [
                            4 /*yield*/ ,
                            readFile(manifestUri)
                        ];
                    case 1:
                        manifest = _c.apply(_b, [
                            _d.sent().toString()
                        ]);
                        return [
                            4 /*yield*/ ,
                            loadWeights(manifest, modelBaseUri)
                        ];
                    case 2:
                        weightMap = _d.sent();
                        this.loadFromWeightMap(weightMap);
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    NeuralNetwork.prototype.loadFromWeightMap = function(weightMap) {
        var _a = this.extractParamsFromWeigthMap(weightMap), paramMappings = _a.paramMappings, params = _a.params;
        this._paramMappings = paramMappings;
        this._params = params;
    };
    NeuralNetwork.prototype.extractWeights = function(weights) {
        var _a = this.extractParams(weights), paramMappings = _a.paramMappings, params = _a.params;
        this._paramMappings = paramMappings;
        this._params = params;
    };
    NeuralNetwork.prototype.traversePropertyPath = function(paramPath) {
        if (!this.params) {
            throw new Error("traversePropertyPath - model has no loaded params");
        }
        var result = paramPath.split('/').reduce(function(res, objProp) {
            if (!res.nextObj.hasOwnProperty(objProp)) {
                throw new Error("traversePropertyPath - object does not have property " + objProp + ", for path " + paramPath);
            }
            return {
                obj: res.nextObj,
                objProp: objProp,
                nextObj: res.nextObj[objProp]
            };
        }, {
            nextObj: this.params
        });
        var obj = result.obj, objProp = result.objProp;
        if (!obj || !objProp || !(obj[objProp] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"])) {
            throw new Error("traversePropertyPath - parameter is not a tensor, for path " + paramPath);
        }
        return {
            obj: obj,
            objProp: objProp
        };
    };
    return NeuralNetwork;
}();
;
 //# sourceMappingURL=NeuralNetwork.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/depthwiseSeparableConv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "depthwiseSeparableConv",
    ()=>depthwiseSeparableConv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function depthwiseSeparableConv(x, params, stride) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separableConv2d"](x, params.depthwise_filter, params.pointwise_filter, stride, 'same');
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out, params.bias);
        return out;
    });
} //# sourceMappingURL=depthwiseSeparableConv.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/denseBlock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "denseBlock3",
    ()=>denseBlock3,
    "denseBlock4",
    ()=>denseBlock4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/depthwiseSeparableConv.js [app-client] (ecmascript)");
;
;
function denseBlock3(x, denseBlockParams, isFirstLayer) {
    if (isFirstLayer === void 0) {
        isFirstLayer = false;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out1 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](isFirstLayer ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](x, denseBlockParams.conv0.filters, [
            2,
            2
        ], 'same'), denseBlockParams.conv0.bias) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(x, denseBlockParams.conv0, [
            2,
            2
        ]));
        var out2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out1, denseBlockParams.conv1, [
            1,
            1
        ]);
        var in3 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out1, out2));
        var out3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(in3, denseBlockParams.conv2, [
            1,
            1
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out1, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out2, out3)));
    });
}
function denseBlock4(x, denseBlockParams, isFirstLayer, isScaleDown) {
    if (isFirstLayer === void 0) {
        isFirstLayer = false;
    }
    if (isScaleDown === void 0) {
        isScaleDown = true;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out1 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](isFirstLayer ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](x, denseBlockParams.conv0.filters, isScaleDown ? [
            2,
            2
        ] : [
            1,
            1
        ], 'same'), denseBlockParams.conv0.bias) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(x, denseBlockParams.conv0, isScaleDown ? [
            2,
            2
        ] : [
            1,
            1
        ]));
        var out2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out1, denseBlockParams.conv1, [
            1,
            1
        ]);
        var in3 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out1, out2));
        var out3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(in3, denseBlockParams.conv2, [
            1,
            1
        ]);
        var in4 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out1, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out2, out3)));
        var out4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(in4, denseBlockParams.conv3, [
            1,
            1
        ]);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out1, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out2, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out3, out4))));
    });
} //# sourceMappingURL=denseBlock.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/convLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convLayer",
    ()=>convLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function convLayer(x, params, padding, withRelu) {
    if (padding === void 0) {
        padding = 'same';
    }
    if (withRelu === void 0) {
        withRelu = false;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](x, params.filters, [
            1,
            1
        ], padding), params.bias);
        return withRelu ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](out) : out;
    });
} //# sourceMappingURL=convLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "disposeUnusedWeightTensors",
    ()=>disposeUnusedWeightTensors
]);
function disposeUnusedWeightTensors(weightMap, paramMappings) {
    Object.keys(weightMap).forEach(function(path) {
        if (!paramMappings.some(function(pm) {
            return pm.originalPath === path;
        })) {
            weightMap[path].dispose();
        }
    });
} //# sourceMappingURL=disposeUnusedWeightTensors.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractConvParamsFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractConvParamsFactory",
    ()=>extractConvParamsFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function extractConvParamsFactory(extractWeights, paramMappings) {
    return function(channelsIn, channelsOut, filterSize, mappedPrefix) {
        var filters = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor4d"](extractWeights(channelsIn * channelsOut * filterSize * filterSize), [
            filterSize,
            filterSize,
            channelsIn,
            channelsOut
        ]);
        var bias = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(channelsOut));
        paramMappings.push({
            paramPath: mappedPrefix + "/filters"
        }, {
            paramPath: mappedPrefix + "/bias"
        });
        return {
            filters: filters,
            bias: bias
        };
    };
} //# sourceMappingURL=extractConvParamsFactory.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractFCParamsFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractFCParamsFactory",
    ()=>extractFCParamsFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function extractFCParamsFactory(extractWeights, paramMappings) {
    return function(channelsIn, channelsOut, mappedPrefix) {
        var fc_weights = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor2d"](extractWeights(channelsIn * channelsOut), [
            channelsIn,
            channelsOut
        ]);
        var fc_bias = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(channelsOut));
        paramMappings.push({
            paramPath: mappedPrefix + "/weights"
        }, {
            paramPath: mappedPrefix + "/bias"
        });
        return {
            weights: fc_weights,
            bias: fc_bias
        };
    };
} //# sourceMappingURL=extractFCParamsFactory.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeparableConvParams",
    ()=>SeparableConvParams
]);
var SeparableConvParams = function() {
    function SeparableConvParams(depthwise_filter, pointwise_filter, bias) {
        this.depthwise_filter = depthwise_filter;
        this.pointwise_filter = pointwise_filter;
        this.bias = bias;
    }
    return SeparableConvParams;
}();
;
 //# sourceMappingURL=types.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractSeparableConvParamsFactory",
    ()=>extractSeparableConvParamsFactory,
    "loadSeparableConvParamsFactory",
    ()=>loadSeparableConvParamsFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/types.js [app-client] (ecmascript)");
;
;
function extractSeparableConvParamsFactory(extractWeights, paramMappings) {
    return function(channelsIn, channelsOut, mappedPrefix) {
        var depthwise_filter = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor4d"](extractWeights(3 * 3 * channelsIn), [
            3,
            3,
            channelsIn,
            1
        ]);
        var pointwise_filter = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor4d"](extractWeights(channelsIn * channelsOut), [
            1,
            1,
            channelsIn,
            channelsOut
        ]);
        var bias = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(channelsOut));
        paramMappings.push({
            paramPath: mappedPrefix + "/depthwise_filter"
        }, {
            paramPath: mappedPrefix + "/pointwise_filter"
        }, {
            paramPath: mappedPrefix + "/bias"
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeparableConvParams"](depthwise_filter, pointwise_filter, bias);
    };
}
function loadSeparableConvParamsFactory(extractWeightEntry) {
    return function(prefix) {
        var depthwise_filter = extractWeightEntry(prefix + "/depthwise_filter", 4);
        var pointwise_filter = extractWeightEntry(prefix + "/pointwise_filter", 4);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SeparableConvParams"](depthwise_filter, pointwise_filter, bias);
    };
} //# sourceMappingURL=extractSeparableConvParamsFactory.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractWeightEntryFactory",
    ()=>extractWeightEntryFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
function extractWeightEntryFactory(weightMap, paramMappings) {
    return function(originalPath, paramRank, mappedPath) {
        var tensor = weightMap[originalPath];
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor"])(tensor, paramRank)) {
            throw new Error("expected weightMap[" + originalPath + "] to be a Tensor" + paramRank + "D, instead have " + tensor);
        }
        paramMappings.push({
            originalPath: originalPath,
            paramPath: mappedPath || originalPath
        });
        return tensor;
    };
} //# sourceMappingURL=extractWeightEntryFactory.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractWeightsFactory",
    ()=>extractWeightsFactory
]);
function extractWeightsFactory(weights) {
    var remainingWeights = weights;
    function extractWeights(numWeights) {
        var ret = remainingWeights.slice(0, numWeights);
        remainingWeights = remainingWeights.slice(numWeights);
        return ret;
    }
    function getRemainingWeights() {
        return remainingWeights;
    }
    return {
        extractWeights: extractWeights,
        getRemainingWeights: getRemainingWeights
    };
} //# sourceMappingURL=extractWeightsFactory.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/convLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/depthwiseSeparableConv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractFCParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractFCParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$getModelUris$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/getModelUris.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/types.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractorsFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractorsFactory",
    ()=>extractorsFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js [app-client] (ecmascript)");
;
function extractorsFactory(extractWeights, paramMappings) {
    var extractConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractConvParamsFactory"])(extractWeights, paramMappings);
    var extractSeparableConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSeparableConvParamsFactory"])(extractWeights, paramMappings);
    function extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
        if (isFirstLayer === void 0) {
            isFirstLayer = false;
        }
        var conv0 = isFirstLayer ? extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv0") : extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/conv0");
        var conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv1");
        var conv2 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv2");
        return {
            conv0: conv0,
            conv1: conv1,
            conv2: conv2
        };
    }
    function extractDenseBlock4Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer) {
        if (isFirstLayer === void 0) {
            isFirstLayer = false;
        }
        var _a = extractDenseBlock3Params(channelsIn, channelsOut, mappedPrefix, isFirstLayer), conv0 = _a.conv0, conv1 = _a.conv1, conv2 = _a.conv2;
        var conv3 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/conv3");
        return {
            conv0: conv0,
            conv1: conv1,
            conv2: conv2,
            conv3: conv3
        };
    }
    return {
        extractDenseBlock3Params: extractDenseBlock3Params,
        extractDenseBlock4Params: extractDenseBlock4Params
    };
} //# sourceMappingURL=extractorsFactory.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParams",
    ()=>extractParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractorsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractorsFactory.js [app-client] (ecmascript)");
;
;
function extractParams(weights) {
    var paramMappings = [];
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractDenseBlock4Params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractorsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractorsFactory"])(extractWeights, paramMappings).extractDenseBlock4Params;
    var dense0 = extractDenseBlock4Params(3, 32, 'dense0', true);
    var dense1 = extractDenseBlock4Params(32, 64, 'dense1');
    var dense2 = extractDenseBlock4Params(64, 128, 'dense2');
    var dense3 = extractDenseBlock4Params(128, 256, 'dense3');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: {
            dense0: dense0,
            dense1: dense1,
            dense2: dense2,
            dense3: dense3
        }
    };
} //# sourceMappingURL=extractParams.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/loadConvParamsFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadConvParamsFactory",
    ()=>loadConvParamsFactory
]);
function loadConvParamsFactory(extractWeightEntry) {
    return function(prefix) {
        var filters = extractWeightEntry(prefix + "/filters", 4);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return {
            filters: filters,
            bias: bias
        };
    };
} //# sourceMappingURL=loadConvParamsFactory.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/loadParamsFactory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadParamsFactory",
    ()=>loadParamsFactory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$loadConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/loadConvParamsFactory.js [app-client] (ecmascript)");
;
;
function loadParamsFactory(weightMap, paramMappings) {
    var extractWeightEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightEntryFactory"])(weightMap, paramMappings);
    var extractConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$loadConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadConvParamsFactory"])(extractWeightEntry);
    var extractSeparableConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSeparableConvParamsFactory"])(extractWeightEntry);
    function extractDenseBlock3Params(prefix, isFirstLayer) {
        if (isFirstLayer === void 0) {
            isFirstLayer = false;
        }
        var conv0 = isFirstLayer ? extractConvParams(prefix + "/conv0") : extractSeparableConvParams(prefix + "/conv0");
        var conv1 = extractSeparableConvParams(prefix + "/conv1");
        var conv2 = extractSeparableConvParams(prefix + "/conv2");
        return {
            conv0: conv0,
            conv1: conv1,
            conv2: conv2
        };
    }
    function extractDenseBlock4Params(prefix, isFirstLayer) {
        if (isFirstLayer === void 0) {
            isFirstLayer = false;
        }
        var conv0 = isFirstLayer ? extractConvParams(prefix + "/conv0") : extractSeparableConvParams(prefix + "/conv0");
        var conv1 = extractSeparableConvParams(prefix + "/conv1");
        var conv2 = extractSeparableConvParams(prefix + "/conv2");
        var conv3 = extractSeparableConvParams(prefix + "/conv3");
        return {
            conv0: conv0,
            conv1: conv1,
            conv2: conv2,
            conv3: conv3
        };
    }
    return {
        extractDenseBlock3Params: extractDenseBlock3Params,
        extractDenseBlock4Params: extractDenseBlock4Params
    };
} //# sourceMappingURL=loadParamsFactory.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsFromWeigthMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMap",
    ()=>extractParamsFromWeigthMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$loadParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/loadParamsFactory.js [app-client] (ecmascript)");
;
;
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var extractDenseBlock4Params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$loadParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadParamsFactory"])(weightMap, paramMappings).extractDenseBlock4Params;
    var params = {
        dense0: extractDenseBlock4Params('dense0', true),
        dense1: extractDenseBlock4Params('dense1'),
        dense2: extractDenseBlock4Params('dense2'),
        dense3: extractDenseBlock4Params('dense3')
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/FaceFeatureExtractor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceFeatureExtractor",
    ()=>FaceFeatureExtractor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/denseBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsFromWeigthMap.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var FaceFeatureExtractor = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceFeatureExtractor, _super);
    function FaceFeatureExtractor() {
        return _super.call(this, 'FaceFeatureExtractor') || this;
    }
    FaceFeatureExtractor.prototype.forwardInput = function(input) {
        var params = this.params;
        if (!params) {
            throw new Error('FaceFeatureExtractor - load model before inference');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var batchTensor = input.toBatchTensor(112, true);
            var meanRgb = [
                122.782,
                117.001,
                104.298
            ];
            var normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(batchTensor, meanRgb).div(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](255));
            var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBlock4"])(normalized, params.dense0, true);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBlock4"])(out, params.dense1);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBlock4"])(out, params.dense2);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBlock4"])(out, params.dense3);
            out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avgPool"](out, [
                7,
                7
            ], [
                2,
                2
            ], 'valid');
            return out;
        });
    };
    FaceFeatureExtractor.prototype.forward = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    FaceFeatureExtractor.prototype.getDefaultModelName = function() {
        return 'face_feature_extractor_model';
    };
    FaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMap"])(weightMap);
    };
    FaceFeatureExtractor.prototype.extractParams = function(weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParams"])(weights);
    };
    return FaceFeatureExtractor;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=FaceFeatureExtractor.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/fullyConnectedLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fullyConnectedLayer",
    ()=>fullyConnectedLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function fullyConnectedLayer(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"](x, params.weights), params.bias);
    });
} //# sourceMappingURL=fullyConnectedLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/extractParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParams",
    ()=>extractParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractFCParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractFCParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
;
function extractParams(weights, channelsIn, channelsOut) {
    var paramMappings = [];
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractFCParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFCParamsFactory"])(extractWeights, paramMappings);
    var fc = extractFCParams(channelsIn, channelsOut, 'fc');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: {
            fc: fc
        }
    };
} //# sourceMappingURL=extractParams.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/extractParamsFromWeigthMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMap",
    ()=>extractParamsFromWeigthMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
;
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var extractWeightEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightEntryFactory"])(weightMap, paramMappings);
    function extractFcParams(prefix) {
        var weights = extractWeightEntry(prefix + "/weights", 2);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return {
            weights: weights,
            bias: bias
        };
    }
    var params = {
        fc: extractFcParams('fc')
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/util.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seperateWeightMaps",
    ()=>seperateWeightMaps
]);
function seperateWeightMaps(weightMap) {
    var featureExtractorMap = {};
    var classifierMap = {};
    Object.keys(weightMap).forEach(function(key) {
        var map = key.startsWith('fc') ? classifierMap : featureExtractorMap;
        map[key] = weightMap[key];
    });
    return {
        featureExtractorMap: featureExtractorMap,
        classifierMap: classifierMap
    };
} //# sourceMappingURL=util.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/FaceProcessor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceProcessor",
    ()=>FaceProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/fullyConnectedLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$NetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/NetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/extractParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/extractParamsFromWeigthMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/util.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var FaceProcessor = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceProcessor, _super);
    function FaceProcessor(_name, faceFeatureExtractor) {
        var _this = _super.call(this, _name) || this;
        _this._faceFeatureExtractor = faceFeatureExtractor;
        return _this;
    }
    Object.defineProperty(FaceProcessor.prototype, "faceFeatureExtractor", {
        get: function() {
            return this._faceFeatureExtractor;
        },
        enumerable: true,
        configurable: true
    });
    FaceProcessor.prototype.runNet = function(input) {
        var _this = this;
        var params = this.params;
        if (!params) {
            throw new Error(this._name + " - load model before inference");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var bottleneckFeatures = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$NetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetInput"] ? _this.faceFeatureExtractor.forwardInput(input) : input;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(bottleneckFeatures.as2D(bottleneckFeatures.shape[0], -1), params.fc);
        });
    };
    FaceProcessor.prototype.dispose = function(throwOnRedispose) {
        if (throwOnRedispose === void 0) {
            throwOnRedispose = true;
        }
        this.faceFeatureExtractor.dispose(throwOnRedispose);
        _super.prototype.dispose.call(this, throwOnRedispose);
    };
    FaceProcessor.prototype.loadClassifierParams = function(weights) {
        var _a = this.extractClassifierParams(weights), params = _a.params, paramMappings = _a.paramMappings;
        this._params = params;
        this._paramMappings = paramMappings;
    };
    FaceProcessor.prototype.extractClassifierParams = function(weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParams"])(weights, this.getClassifierChannelsIn(), this.getClassifierChannelsOut());
    };
    FaceProcessor.prototype.extractParamsFromWeigthMap = function(weightMap) {
        var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seperateWeightMaps"])(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
        this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMap"])(classifierMap);
    };
    FaceProcessor.prototype.extractParams = function(weights) {
        var cIn = this.getClassifierChannelsIn();
        var cOut = this.getClassifierChannelsOut();
        var classifierWeightSize = cOut * cIn + cOut;
        var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
        var classifierWeights = weights.slice(weights.length - classifierWeightSize);
        this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
        return this.extractClassifierParams(classifierWeights);
    };
    return FaceProcessor;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=FaceProcessor.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FACE_EXPRESSION_LABELS",
    ()=>FACE_EXPRESSION_LABELS,
    "FaceExpressions",
    ()=>FaceExpressions
]);
var FACE_EXPRESSION_LABELS = [
    'neutral',
    'happy',
    'sad',
    'angry',
    'fearful',
    'disgusted',
    'surprised'
];
var FaceExpressions = function() {
    function FaceExpressions(probabilities) {
        var _this = this;
        if (probabilities.length !== 7) {
            throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: " + probabilities.length);
        }
        FACE_EXPRESSION_LABELS.forEach(function(expression, idx) {
            _this[expression] = probabilities[idx];
        });
    }
    FaceExpressions.prototype.asSortedArray = function() {
        var _this = this;
        return FACE_EXPRESSION_LABELS.map(function(expression) {
            return {
                expression: expression,
                probability: _this[expression]
            };
        }).sort(function(e0, e1) {
            return e1.probability - e0.probability;
        });
    };
    return FaceExpressions;
}();
;
 //# sourceMappingURL=FaceExpressions.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressionNet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceExpressionNet",
    ()=>FaceExpressionNet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$FaceFeatureExtractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/FaceFeatureExtractor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$FaceProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/FaceProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressions.js [app-client] (ecmascript)");
;
;
;
;
;
;
var FaceExpressionNet = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceExpressionNet, _super);
    function FaceExpressionNet(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) {
            faceFeatureExtractor = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$FaceFeatureExtractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceFeatureExtractor"]();
        }
        return _super.call(this, 'FaceExpressionNet', faceFeatureExtractor) || this;
    }
    FaceExpressionNet.prototype.forwardInput = function(input) {
        var _this = this;
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softmax"](_this.runNet(input));
        });
    };
    FaceExpressionNet.prototype.forward = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    FaceExpressionNet.prototype.predictExpressions = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var netInput, out, probabilitesByBatch, predictionsByBatch;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        netInput = _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.forwardInput(netInput)
                        ];
                    case 2:
                        out = _a.sent();
                        return [
                            4 /*yield*/ ,
                            Promise.all(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](out).map(function(t) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                                    var data;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                                        switch(_a.label){
                                            case 0:
                                                return [
                                                    4 /*yield*/ ,
                                                    t.data()
                                                ];
                                            case 1:
                                                data = _a.sent();
                                                t.dispose();
                                                return [
                                                    2 /*return*/ ,
                                                    data
                                                ];
                                        }
                                    });
                                });
                            }))
                        ];
                    case 3:
                        probabilitesByBatch = _a.sent();
                        out.dispose();
                        predictionsByBatch = probabilitesByBatch.map(function(probabilites) {
                            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceExpressions"](probabilites);
                        });
                        return [
                            2 /*return*/ ,
                            netInput.isBatchInput ? predictionsByBatch : predictionsByBatch[0]
                        ];
                }
            });
        });
    };
    FaceExpressionNet.prototype.getDefaultModelName = function() {
        return 'face_expression_model';
    };
    FaceExpressionNet.prototype.getClassifierChannelsIn = function() {
        return 256;
    };
    FaceExpressionNet.prototype.getClassifierChannelsOut = function() {
        return 7;
    };
    return FaceExpressionNet;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$FaceProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceProcessor"]);
;
 //# sourceMappingURL=FaceExpressionNet.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressionNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressionNet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressions.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceExpressions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendWithFaceExpressions",
    ()=>extendWithFaceExpressions,
    "isWithFaceExpressions",
    ()=>isWithFaceExpressions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressions.js [app-client] (ecmascript)");
;
function isWithFaceExpressions(obj) {
    return obj['expressions'] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceExpressions"];
}
function extendWithFaceExpressions(sourceObj, expressions) {
    var extension = {
        expressions: expressions
    };
    return Object.assign({}, sourceObj, extension);
} //# sourceMappingURL=WithFaceExpressions.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawFaceExpressions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "drawFaceExpressions",
    ()=>drawFaceExpressions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceExpressions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawTextField.js [app-client] (ecmascript)");
;
;
;
;
;
;
function drawFaceExpressions(canvasArg, faceExpressions, minConfidence, textFieldAnchor) {
    if (minConfidence === void 0) {
        minConfidence = 0.1;
    }
    var faceExpressionsArray = Array.isArray(faceExpressions) ? faceExpressions : [
        faceExpressions
    ];
    faceExpressionsArray.forEach(function(e) {
        var expr = e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceExpressions"] ? e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceExpressions"])(e) ? e.expressions : undefined;
        if (!expr) {
            throw new Error('drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof');
        }
        var sorted = expr.asSortedArray();
        var resultsToDisplay = sorted.filter(function(expr) {
            return expr.probability > minConfidence;
        });
        var anchor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceDetection"])(e) ? e.detection.box.bottomLeft : textFieldAnchor || new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](0, 0);
        var drawTextField = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawTextField"](resultsToDisplay.map(function(expr) {
            return expr.expression + " (" + (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["round"])(expr.probability) + ")";
        }), anchor);
        drawTextField.draw(canvasArg);
    });
} //# sourceMappingURL=drawFaceExpressions.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceLandmarks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendWithFaceLandmarks",
    ()=>extendWithFaceLandmarks,
    "isWithFaceLandmarks",
    ()=>isWithFaceLandmarks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDetection.js [app-client] (ecmascript)");
;
;
;
function isWithFaceLandmarks(obj) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceDetection"])(obj) && obj['landmarks'] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks"] && obj['unshiftedLandmarks'] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks"] && obj['alignedRect'] instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"];
}
function extendWithFaceLandmarks(sourceObj, unshiftedLandmarks) {
    var shift = sourceObj.detection.box;
    var landmarks = unshiftedLandmarks.shiftBy(shift.x, shift.y);
    var rect = landmarks.align();
    var imageDims = sourceObj.detection.imageDims;
    var alignedRect = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"](sourceObj.detection.score, rect.rescale(imageDims.reverse()), imageDims);
    var extension = {
        landmarks: landmarks,
        unshiftedLandmarks: unshiftedLandmarks,
        alignedRect: alignedRect
    };
    return Object.assign({}, sourceObj, extension);
} //# sourceMappingURL=WithFaceLandmarks.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawFaceLandmarks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DrawFaceLandmarks",
    ()=>DrawFaceLandmarks,
    "DrawFaceLandmarksOptions",
    ()=>DrawFaceLandmarksOptions,
    "drawFaceLandmarks",
    ()=>drawFaceLandmarks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks68.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawContour.js [app-client] (ecmascript)");
;
;
;
;
;
var DrawFaceLandmarksOptions = function() {
    function DrawFaceLandmarksOptions(options) {
        if (options === void 0) {
            options = {};
        }
        var _a = options.drawLines, drawLines = _a === void 0 ? true : _a, _b = options.drawPoints, drawPoints = _b === void 0 ? true : _b, lineWidth = options.lineWidth, lineColor = options.lineColor, pointSize = options.pointSize, pointColor = options.pointColor;
        this.drawLines = drawLines;
        this.drawPoints = drawPoints;
        this.lineWidth = lineWidth || 1;
        this.pointSize = pointSize || 2;
        this.lineColor = lineColor || 'rgba(0, 255, 255, 1)';
        this.pointColor = pointColor || 'rgba(255, 0, 255, 1)';
    }
    return DrawFaceLandmarksOptions;
}();
;
var DrawFaceLandmarks = function() {
    function DrawFaceLandmarks(faceLandmarks, options) {
        if (options === void 0) {
            options = {};
        }
        this.faceLandmarks = faceLandmarks;
        this.options = new DrawFaceLandmarksOptions(options);
    }
    DrawFaceLandmarks.prototype.draw = function(canvasArg) {
        var ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(canvasArg);
        var _a = this.options, drawLines = _a.drawLines, drawPoints = _a.drawPoints, lineWidth = _a.lineWidth, lineColor = _a.lineColor, pointSize = _a.pointSize, pointColor = _a.pointColor;
        if (drawLines && this.faceLandmarks instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks68"]) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawContour"])(ctx, this.faceLandmarks.getJawOutline());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawContour"])(ctx, this.faceLandmarks.getLeftEyeBrow());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawContour"])(ctx, this.faceLandmarks.getRightEyeBrow());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawContour"])(ctx, this.faceLandmarks.getNose());
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawContour"])(ctx, this.faceLandmarks.getLeftEye(), true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawContour"])(ctx, this.faceLandmarks.getRightEye(), true);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawContour"])(ctx, this.faceLandmarks.getMouth(), true);
        }
        if (drawPoints) {
            ctx.strokeStyle = pointColor;
            ctx.fillStyle = pointColor;
            var drawPoint = function(pt) {
                ctx.beginPath();
                ctx.arc(pt.x, pt.y, pointSize, 0, 2 * Math.PI);
                ctx.fill();
            };
            this.faceLandmarks.positions.forEach(drawPoint);
        }
    };
    return DrawFaceLandmarks;
}();
;
function drawFaceLandmarks(canvasArg, faceLandmarks) {
    var faceLandmarksArray = Array.isArray(faceLandmarks) ? faceLandmarks : [
        faceLandmarks
    ];
    faceLandmarksArray.forEach(function(f) {
        var landmarks = f instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks"] ? f : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceLandmarks"])(f) ? f.landmarks : undefined;
        if (!landmarks) {
            throw new Error('drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof');
        }
        new DrawFaceLandmarks(landmarks).draw(canvasArg);
    });
} //# sourceMappingURL=DrawFaceLandmarks.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawContour.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawDetections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawDetections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawFaceExpressions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawFaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawTextField.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnchorPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnchorPosition"],
    "DrawBox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawBox"],
    "DrawBoxOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawBoxOptions"],
    "DrawFaceLandmarks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawFaceLandmarks"],
    "DrawFaceLandmarksOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawFaceLandmarksOptions"],
    "DrawTextField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawTextField"],
    "DrawTextFieldOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DrawTextFieldOptions"],
    "drawContour",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawContour"],
    "drawDetections",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawDetections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawDetections"],
    "drawFaceExpressions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawFaceExpressions"],
    "drawFaceLandmarks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawFaceLandmarks"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawContour$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawContour.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawDetections$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawDetections.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$drawFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/drawFaceExpressions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawFaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$DrawTextField$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/DrawTextField.js [app-client] (ecmascript)");
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/xception/extractParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParams",
    ()=>extractParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
function extractorsFactory(extractWeights, paramMappings) {
    var extractConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractConvParamsFactory"])(extractWeights, paramMappings);
    var extractSeparableConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSeparableConvParamsFactory"])(extractWeights, paramMappings);
    function extractReductionBlockParams(channelsIn, channelsOut, mappedPrefix) {
        var separable_conv0 = extractSeparableConvParams(channelsIn, channelsOut, mappedPrefix + "/separable_conv0");
        var separable_conv1 = extractSeparableConvParams(channelsOut, channelsOut, mappedPrefix + "/separable_conv1");
        var expansion_conv = extractConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/expansion_conv");
        return {
            separable_conv0: separable_conv0,
            separable_conv1: separable_conv1,
            expansion_conv: expansion_conv
        };
    }
    function extractMainBlockParams(channels, mappedPrefix) {
        var separable_conv0 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv0");
        var separable_conv1 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv1");
        var separable_conv2 = extractSeparableConvParams(channels, channels, mappedPrefix + "/separable_conv2");
        return {
            separable_conv0: separable_conv0,
            separable_conv1: separable_conv1,
            separable_conv2: separable_conv2
        };
    }
    return {
        extractConvParams: extractConvParams,
        extractSeparableConvParams: extractSeparableConvParams,
        extractReductionBlockParams: extractReductionBlockParams,
        extractMainBlockParams: extractMainBlockParams
    };
}
function extractParams(weights, numMainBlocks) {
    var paramMappings = [];
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var _b = extractorsFactory(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractSeparableConvParams = _b.extractSeparableConvParams, extractReductionBlockParams = _b.extractReductionBlockParams, extractMainBlockParams = _b.extractMainBlockParams;
    var entry_flow_conv_in = extractConvParams(3, 32, 3, 'entry_flow/conv_in');
    var entry_flow_reduction_block_0 = extractReductionBlockParams(32, 64, 'entry_flow/reduction_block_0');
    var entry_flow_reduction_block_1 = extractReductionBlockParams(64, 128, 'entry_flow/reduction_block_1');
    var entry_flow = {
        conv_in: entry_flow_conv_in,
        reduction_block_0: entry_flow_reduction_block_0,
        reduction_block_1: entry_flow_reduction_block_1
    };
    var middle_flow = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(numMainBlocks, 0, 1).forEach(function(idx) {
        middle_flow["main_block_" + idx] = extractMainBlockParams(128, "middle_flow/main_block_" + idx);
    });
    var exit_flow_reduction_block = extractReductionBlockParams(128, 256, 'exit_flow/reduction_block');
    var exit_flow_separable_conv = extractSeparableConvParams(256, 512, 'exit_flow/separable_conv');
    var exit_flow = {
        reduction_block: exit_flow_reduction_block,
        separable_conv: exit_flow_separable_conv
    };
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: {
            entry_flow: entry_flow,
            middle_flow: middle_flow,
            exit_flow: exit_flow
        }
    };
} //# sourceMappingURL=extractParams.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/xception/extractParamsFromWeigthMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMap",
    ()=>extractParamsFromWeigthMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$loadConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/loadConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
;
function loadParamsFactory(weightMap, paramMappings) {
    var extractWeightEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightEntryFactory"])(weightMap, paramMappings);
    var extractConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$loadConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadConvParamsFactory"])(extractWeightEntry);
    var extractSeparableConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSeparableConvParamsFactory"])(extractWeightEntry);
    function extractReductionBlockParams(mappedPrefix) {
        var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
        var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
        var expansion_conv = extractConvParams(mappedPrefix + "/expansion_conv");
        return {
            separable_conv0: separable_conv0,
            separable_conv1: separable_conv1,
            expansion_conv: expansion_conv
        };
    }
    function extractMainBlockParams(mappedPrefix) {
        var separable_conv0 = extractSeparableConvParams(mappedPrefix + "/separable_conv0");
        var separable_conv1 = extractSeparableConvParams(mappedPrefix + "/separable_conv1");
        var separable_conv2 = extractSeparableConvParams(mappedPrefix + "/separable_conv2");
        return {
            separable_conv0: separable_conv0,
            separable_conv1: separable_conv1,
            separable_conv2: separable_conv2
        };
    }
    return {
        extractConvParams: extractConvParams,
        extractSeparableConvParams: extractSeparableConvParams,
        extractReductionBlockParams: extractReductionBlockParams,
        extractMainBlockParams: extractMainBlockParams
    };
}
function extractParamsFromWeigthMap(weightMap, numMainBlocks) {
    var paramMappings = [];
    var _a = loadParamsFactory(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractSeparableConvParams = _a.extractSeparableConvParams, extractReductionBlockParams = _a.extractReductionBlockParams, extractMainBlockParams = _a.extractMainBlockParams;
    var entry_flow_conv_in = extractConvParams('entry_flow/conv_in');
    var entry_flow_reduction_block_0 = extractReductionBlockParams('entry_flow/reduction_block_0');
    var entry_flow_reduction_block_1 = extractReductionBlockParams('entry_flow/reduction_block_1');
    var entry_flow = {
        conv_in: entry_flow_conv_in,
        reduction_block_0: entry_flow_reduction_block_0,
        reduction_block_1: entry_flow_reduction_block_1
    };
    var middle_flow = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(numMainBlocks, 0, 1).forEach(function(idx) {
        middle_flow["main_block_" + idx] = extractMainBlockParams("middle_flow/main_block_" + idx);
    });
    var exit_flow_reduction_block = extractReductionBlockParams('exit_flow/reduction_block');
    var exit_flow_separable_conv = extractSeparableConvParams('exit_flow/separable_conv');
    var exit_flow = {
        reduction_block: exit_flow_reduction_block,
        separable_conv: exit_flow_separable_conv
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: {
            entry_flow: entry_flow,
            middle_flow: middle_flow,
            exit_flow: exit_flow
        },
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/xception/TinyXception.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TinyXception",
    ()=>TinyXception
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/depthwiseSeparableConv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$xception$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/xception/extractParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$xception$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/xception/extractParamsFromWeigthMap.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function conv(x, params, stride) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](x, params.filters, stride, 'same'), params.bias);
}
function reductionBlock(x, params, isActivateInput) {
    if (isActivateInput === void 0) {
        isActivateInput = true;
    }
    var out = isActivateInput ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](x) : x;
    out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.separable_conv0, [
        1,
        1
    ]);
    out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](out), params.separable_conv1, [
        1,
        1
    ]);
    out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
        3,
        3
    ], [
        2,
        2
    ], 'same');
    out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out, conv(x, params.expansion_conv, [
        2,
        2
    ]));
    return out;
}
function mainBlock(x, params) {
    var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](x), params.separable_conv0, [
        1,
        1
    ]);
    out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](out), params.separable_conv1, [
        1,
        1
    ]);
    out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](out), params.separable_conv2, [
        1,
        1
    ]);
    out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out, x);
    return out;
}
var TinyXception = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TinyXception, _super);
    function TinyXception(numMainBlocks) {
        var _this = _super.call(this, 'TinyXception') || this;
        _this._numMainBlocks = numMainBlocks;
        return _this;
    }
    TinyXception.prototype.forwardInput = function(input) {
        var _this = this;
        var params = this.params;
        if (!params) {
            throw new Error('TinyXception - load model before inference');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var batchTensor = input.toBatchTensor(112, true);
            var meanRgb = [
                122.782,
                117.001,
                104.298
            ];
            var normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(batchTensor, meanRgb).div(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](256));
            var out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](conv(normalized, params.entry_flow.conv_in, [
                2,
                2
            ]));
            out = reductionBlock(out, params.entry_flow.reduction_block_0, false);
            out = reductionBlock(out, params.entry_flow.reduction_block_1);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["range"])(_this._numMainBlocks, 0, 1).forEach(function(idx) {
                out = mainBlock(out, params.middle_flow["main_block_" + idx]);
            });
            out = reductionBlock(out, params.exit_flow.reduction_block);
            out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.exit_flow.separable_conv, [
                1,
                1
            ]));
            return out;
        });
    };
    TinyXception.prototype.forward = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    TinyXception.prototype.getDefaultModelName = function() {
        return 'tiny_xception_model';
    };
    TinyXception.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$xception$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMap"])(weightMap, this._numMainBlocks);
    };
    TinyXception.prototype.extractParams = function(weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$xception$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParams"])(weights, this._numMainBlocks);
    };
    return TinyXception;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=TinyXception.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/extractParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParams",
    ()=>extractParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractFCParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractFCParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
;
function extractParams(weights) {
    var paramMappings = [];
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractFCParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractFCParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFCParamsFactory"])(extractWeights, paramMappings);
    var age = extractFCParams(512, 1, 'fc/age');
    var gender = extractFCParams(512, 2, 'fc/gender');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: {
            fc: {
                age: age,
                gender: gender
            }
        }
    };
} //# sourceMappingURL=extractParams.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/extractParamsFromWeigthMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMap",
    ()=>extractParamsFromWeigthMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
;
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var extractWeightEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightEntryFactory"])(weightMap, paramMappings);
    function extractFcParams(prefix) {
        var weights = extractWeightEntry(prefix + "/weights", 2);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return {
            weights: weights,
            bias: bias
        };
    }
    var params = {
        fc: {
            age: extractFcParams('fc/age'),
            gender: extractFcParams('fc/gender')
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/types.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gender",
    ()=>Gender
]);
var Gender;
(function(Gender) {
    Gender["FEMALE"] = "female";
    Gender["MALE"] = "male";
})(Gender || (Gender = {})); //# sourceMappingURL=types.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/AgeGenderNet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgeGenderNet",
    ()=>AgeGenderNet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/fullyConnectedLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/util.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$xception$2f$TinyXception$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/xception/TinyXception.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/extractParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/extractParamsFromWeigthMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$NetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/NetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
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
var AgeGenderNet = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(AgeGenderNet, _super);
    function AgeGenderNet(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) {
            faceFeatureExtractor = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$xception$2f$TinyXception$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyXception"](2);
        }
        var _this = _super.call(this, 'AgeGenderNet') || this;
        _this._faceFeatureExtractor = faceFeatureExtractor;
        return _this;
    }
    Object.defineProperty(AgeGenderNet.prototype, "faceFeatureExtractor", {
        get: function() {
            return this._faceFeatureExtractor;
        },
        enumerable: true,
        configurable: true
    });
    AgeGenderNet.prototype.runNet = function(input) {
        var _this = this;
        var params = this.params;
        if (!params) {
            throw new Error(this._name + " - load model before inference");
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var bottleneckFeatures = input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$NetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NetInput"] ? _this.faceFeatureExtractor.forwardInput(input) : input;
            var pooled = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avgPool"](bottleneckFeatures, [
                7,
                7
            ], [
                2,
                2
            ], 'valid').as2D(bottleneckFeatures.shape[0], -1);
            var age = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(pooled, params.fc.age).as1D();
            var gender = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(pooled, params.fc.gender);
            return {
                age: age,
                gender: gender
            };
        });
    };
    AgeGenderNet.prototype.forwardInput = function(input) {
        var _this = this;
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var _a = _this.runNet(input), age = _a.age, gender = _a.gender;
            return {
                age: age,
                gender: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softmax"](gender)
            };
        });
    };
    AgeGenderNet.prototype.forward = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    AgeGenderNet.prototype.predictAgeAndGender = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var netInput, out, ages, genders, ageAndGenderTensors, predictionsByBatch;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        netInput = _a.sent();
                        return [
                            4 /*yield*/ ,
                            this.forwardInput(netInput)
                        ];
                    case 2:
                        out = _a.sent();
                        ages = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](out.age);
                        genders = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](out.gender);
                        ageAndGenderTensors = ages.map(function(ageTensor, i) {
                            return {
                                ageTensor: ageTensor,
                                genderTensor: genders[i]
                            };
                        });
                        return [
                            4 /*yield*/ ,
                            Promise.all(ageAndGenderTensors.map(function(_a) {
                                var ageTensor = _a.ageTensor, genderTensor = _a.genderTensor;
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                                    var age, probMale, isMale, gender, genderProbability;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                                        switch(_b.label){
                                            case 0:
                                                return [
                                                    4 /*yield*/ ,
                                                    ageTensor.data()
                                                ];
                                            case 1:
                                                age = _b.sent()[0];
                                                return [
                                                    4 /*yield*/ ,
                                                    genderTensor.data()
                                                ];
                                            case 2:
                                                probMale = _b.sent()[0];
                                                isMale = probMale > 0.5;
                                                gender = isMale ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gender"].MALE : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gender"].FEMALE;
                                                genderProbability = isMale ? probMale : 1 - probMale;
                                                ageTensor.dispose();
                                                genderTensor.dispose();
                                                return [
                                                    2 /*return*/ ,
                                                    {
                                                        age: age,
                                                        gender: gender,
                                                        genderProbability: genderProbability
                                                    }
                                                ];
                                        }
                                    });
                                });
                            }))
                        ];
                    case 3:
                        predictionsByBatch = _a.sent();
                        out.age.dispose();
                        out.gender.dispose();
                        return [
                            2 /*return*/ ,
                            netInput.isBatchInput ? predictionsByBatch : predictionsByBatch[0]
                        ];
                }
            });
        });
    };
    AgeGenderNet.prototype.getDefaultModelName = function() {
        return 'age_gender_model';
    };
    AgeGenderNet.prototype.dispose = function(throwOnRedispose) {
        if (throwOnRedispose === void 0) {
            throwOnRedispose = true;
        }
        this.faceFeatureExtractor.dispose(throwOnRedispose);
        _super.prototype.dispose.call(this, throwOnRedispose);
    };
    AgeGenderNet.prototype.loadClassifierParams = function(weights) {
        var _a = this.extractClassifierParams(weights), params = _a.params, paramMappings = _a.paramMappings;
        this._params = params;
        this._paramMappings = paramMappings;
    };
    AgeGenderNet.prototype.extractClassifierParams = function(weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParams"])(weights);
    };
    AgeGenderNet.prototype.extractParamsFromWeigthMap = function(weightMap) {
        var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$util$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seperateWeightMaps"])(weightMap), featureExtractorMap = _a.featureExtractorMap, classifierMap = _a.classifierMap;
        this.faceFeatureExtractor.loadFromWeightMap(featureExtractorMap);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMap"])(classifierMap);
    };
    AgeGenderNet.prototype.extractParams = function(weights) {
        var classifierWeightSize = 512 * 1 + 1 + (512 * 2 + 2);
        var featureExtractorWeights = weights.slice(0, weights.length - classifierWeightSize);
        var classifierWeights = weights.slice(weights.length - classifierWeightSize);
        this.faceFeatureExtractor.extractWeights(featureExtractorWeights);
        return this.extractClassifierParams(classifierWeights);
    };
    return AgeGenderNet;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=AgeGenderNet.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$AgeGenderNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/AgeGenderNet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/types.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68NetBase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceLandmark68NetBase",
    ()=>FaceLandmark68NetBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks68.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$FaceProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceProcessor/FaceProcessor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var FaceLandmark68NetBase = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceLandmark68NetBase, _super);
    function FaceLandmark68NetBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FaceLandmark68NetBase.prototype.postProcess = function(output, inputSize, originalDimensions) {
        var inputDimensions = originalDimensions.map(function(_a) {
            var width = _a.width, height = _a.height;
            var scale = inputSize / Math.max(height, width);
            return {
                width: width * scale,
                height: height * scale
            };
        });
        var batchSize = inputDimensions.length;
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var createInterleavedTensor = function(fillX, fillY) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"]([
                    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"]([
                        68
                    ], fillX),
                    __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"]([
                        68
                    ], fillY)
                ], 1).as2D(1, 136).as1D();
            };
            var getPadding = function(batchIdx, cond) {
                var _a = inputDimensions[batchIdx], width = _a.width, height = _a.height;
                return cond(width, height) ? Math.abs(width - height) / 2 : 0;
            };
            var getPaddingX = function(batchIdx) {
                return getPadding(batchIdx, function(w, h) {
                    return w < h;
                });
            };
            var getPaddingY = function(batchIdx) {
                return getPadding(batchIdx, function(w, h) {
                    return h < w;
                });
            };
            var landmarkTensors = output.mul(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fill"]([
                batchSize,
                136
            ], inputSize)).sub(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"](Array.from(Array(batchSize), function(_, batchIdx) {
                return createInterleavedTensor(getPaddingX(batchIdx), getPaddingY(batchIdx));
            }))).div(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"](Array.from(Array(batchSize), function(_, batchIdx) {
                return createInterleavedTensor(inputDimensions[batchIdx].width, inputDimensions[batchIdx].height);
            })));
            return landmarkTensors;
        });
    };
    FaceLandmark68NetBase.prototype.forwardInput = function(input) {
        var _this = this;
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var out = _this.runNet(input);
            return _this.postProcess(out, input.inputSize, input.inputDimensions.map(function(_a) {
                var height = _a[0], width = _a[1];
                return {
                    height: height,
                    width: width
                };
            }));
        });
    };
    FaceLandmark68NetBase.prototype.forward = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    FaceLandmark68NetBase.prototype.detectLandmarks = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var netInput, landmarkTensors, landmarksForBatch;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        netInput = _a.sent();
                        landmarkTensors = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](_this.forwardInput(netInput));
                        });
                        return [
                            4 /*yield*/ ,
                            Promise.all(landmarkTensors.map(function(landmarkTensor, batchIdx) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                                    var landmarksArray, _a, _b, xCoords, yCoords;
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
                                        switch(_c.label){
                                            case 0:
                                                _b = (_a = Array).from;
                                                return [
                                                    4 /*yield*/ ,
                                                    landmarkTensor.data()
                                                ];
                                            case 1:
                                                landmarksArray = _b.apply(_a, [
                                                    _c.sent()
                                                ]);
                                                xCoords = landmarksArray.filter(function(_, i) {
                                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEven"])(i);
                                                });
                                                yCoords = landmarksArray.filter(function(_, i) {
                                                    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEven"])(i);
                                                });
                                                return [
                                                    2 /*return*/ ,
                                                    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks68$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks68"](Array(68).fill(0).map(function(_, i) {
                                                        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](xCoords[i], yCoords[i]);
                                                    }), {
                                                        height: netInput.getInputHeight(batchIdx),
                                                        width: netInput.getInputWidth(batchIdx)
                                                    })
                                                ];
                                        }
                                    });
                                });
                            }))
                        ];
                    case 2:
                        landmarksForBatch = _a.sent();
                        landmarkTensors.forEach(function(t) {
                            return t.dispose();
                        });
                        return [
                            2 /*return*/ ,
                            netInput.isBatchInput ? landmarksForBatch : landmarksForBatch[0]
                        ];
                }
            });
        });
    };
    FaceLandmark68NetBase.prototype.getClassifierChannelsOut = function() {
        return 136;
    };
    return FaceLandmark68NetBase;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceProcessor$2f$FaceProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceProcessor"]);
;
 //# sourceMappingURL=FaceLandmark68NetBase.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68Net.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceLandmark68Net",
    ()=>FaceLandmark68Net
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$FaceFeatureExtractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/FaceFeatureExtractor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68NetBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68NetBase.js [app-client] (ecmascript)");
;
;
;
var FaceLandmark68Net = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceLandmark68Net, _super);
    function FaceLandmark68Net(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) {
            faceFeatureExtractor = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$FaceFeatureExtractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceFeatureExtractor"]();
        }
        return _super.call(this, 'FaceLandmark68Net', faceFeatureExtractor) || this;
    }
    FaceLandmark68Net.prototype.getDefaultModelName = function() {
        return 'face_landmark_68_model';
    };
    FaceLandmark68Net.prototype.getClassifierChannelsIn = function() {
        return 256;
    };
    return FaceLandmark68Net;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68NetBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmark68NetBase"]);
;
 //# sourceMappingURL=FaceLandmark68Net.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsFromWeigthMapTiny.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMapTiny",
    ()=>extractParamsFromWeigthMapTiny
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$loadParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/loadParamsFactory.js [app-client] (ecmascript)");
;
;
function extractParamsFromWeigthMapTiny(weightMap) {
    var paramMappings = [];
    var extractDenseBlock3Params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$loadParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadParamsFactory"])(weightMap, paramMappings).extractDenseBlock3Params;
    var params = {
        dense0: extractDenseBlock3Params('dense0', true),
        dense1: extractDenseBlock3Params('dense1'),
        dense2: extractDenseBlock3Params('dense2')
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMapTiny.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsTiny.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsTiny",
    ()=>extractParamsTiny
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractorsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractorsFactory.js [app-client] (ecmascript)");
;
;
function extractParamsTiny(weights) {
    var paramMappings = [];
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var extractDenseBlock3Params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractorsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractorsFactory"])(extractWeights, paramMappings).extractDenseBlock3Params;
    var dense0 = extractDenseBlock3Params(3, 32, 'dense0', true);
    var dense1 = extractDenseBlock3Params(32, 64, 'dense1');
    var dense2 = extractDenseBlock3Params(64, 128, 'dense2');
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        paramMappings: paramMappings,
        params: {
            dense0: dense0,
            dense1: dense1,
            dense2: dense2
        }
    };
} //# sourceMappingURL=extractParamsTiny.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/TinyFaceFeatureExtractor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TinyFaceFeatureExtractor",
    ()=>TinyFaceFeatureExtractor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/denseBlock.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractParamsFromWeigthMapTiny$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsFromWeigthMapTiny.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractParamsTiny$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/extractParamsTiny.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var TinyFaceFeatureExtractor = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TinyFaceFeatureExtractor, _super);
    function TinyFaceFeatureExtractor() {
        return _super.call(this, 'TinyFaceFeatureExtractor') || this;
    }
    TinyFaceFeatureExtractor.prototype.forwardInput = function(input) {
        var params = this.params;
        if (!params) {
            throw new Error('TinyFaceFeatureExtractor - load model before inference');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var batchTensor = input.toBatchTensor(112, true);
            var meanRgb = [
                122.782,
                117.001,
                104.298
            ];
            var normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(batchTensor, meanRgb).div(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](255));
            var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBlock3"])(normalized, params.dense0, true);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBlock3"])(out, params.dense1);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$denseBlock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["denseBlock3"])(out, params.dense2);
            out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avgPool"](out, [
                14,
                14
            ], [
                2,
                2
            ], 'valid');
            return out;
        });
    };
    TinyFaceFeatureExtractor.prototype.forward = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    TinyFaceFeatureExtractor.prototype.getDefaultModelName = function() {
        return 'face_feature_extractor_tiny_model';
    };
    TinyFaceFeatureExtractor.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractParamsFromWeigthMapTiny$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMapTiny"])(weightMap);
    };
    TinyFaceFeatureExtractor.prototype.extractParams = function(weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$extractParamsTiny$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsTiny"])(weights);
    };
    return TinyFaceFeatureExtractor;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=TinyFaceFeatureExtractor.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68TinyNet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceLandmark68TinyNet",
    ()=>FaceLandmark68TinyNet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$TinyFaceFeatureExtractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceFeatureExtractor/TinyFaceFeatureExtractor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68NetBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68NetBase.js [app-client] (ecmascript)");
;
;
;
var FaceLandmark68TinyNet = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceLandmark68TinyNet, _super);
    function FaceLandmark68TinyNet(faceFeatureExtractor) {
        if (faceFeatureExtractor === void 0) {
            faceFeatureExtractor = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceFeatureExtractor$2f$TinyFaceFeatureExtractor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyFaceFeatureExtractor"]();
        }
        return _super.call(this, 'FaceLandmark68TinyNet', faceFeatureExtractor) || this;
    }
    FaceLandmark68TinyNet.prototype.getDefaultModelName = function() {
        return 'face_landmark_68_tiny_model';
    };
    FaceLandmark68TinyNet.prototype.getClassifierChannelsIn = function() {
        return 128;
    };
    return FaceLandmark68TinyNet;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68NetBase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmark68NetBase"]);
;
 //# sourceMappingURL=FaceLandmark68TinyNet.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceLandmarkNet",
    ()=>FaceLandmarkNet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68Net$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68Net.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68TinyNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68TinyNet.js [app-client] (ecmascript)");
;
;
;
;
var FaceLandmarkNet = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceLandmarkNet, _super);
    function FaceLandmarkNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceLandmarkNet;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68Net$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmark68Net"]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/scaleLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scale",
    ()=>scale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function scale(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](x, params.weights), params.biases);
} //# sourceMappingURL=scaleLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/convLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "conv",
    ()=>conv,
    "convDown",
    ()=>convDown,
    "convNoRelu",
    ()=>convNoRelu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$scaleLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/scaleLayer.js [app-client] (ecmascript)");
;
;
function convLayer(x, params, strides, withRelu, padding) {
    if (padding === void 0) {
        padding = 'same';
    }
    var _a = params.conv, filters = _a.filters, bias = _a.bias;
    var out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](x, filters, strides, padding);
    out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out, bias);
    out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$scaleLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scale"])(out, params.scale);
    return withRelu ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](out) : out;
}
function conv(x, params) {
    return convLayer(x, params, [
        1,
        1
    ], true);
}
function convNoRelu(x, params) {
    return convLayer(x, params, [
        1,
        1
    ], false);
}
function convDown(x, params) {
    return convLayer(x, params, [
        2,
        2
    ], true, 'valid');
} //# sourceMappingURL=convLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/extractParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParams",
    ()=>extractParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
;
function extractorsFactory(extractWeights, paramMappings) {
    function extractFilterValues(numFilterValues, numFilters, filterSize) {
        var weights = extractWeights(numFilterValues);
        var depth = weights.length / (numFilters * filterSize * filterSize);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFloat"])(depth)) {
            throw new Error("depth has to be an integer: " + depth + ", weights.length: " + weights.length + ", numFilters: " + numFilters + ", filterSize: " + filterSize);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor4d"](weights, [
                numFilters,
                depth,
                filterSize,
                filterSize
            ]), [
                2,
                3,
                1,
                0
            ]);
        });
    }
    function extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
        var filters = extractFilterValues(numFilterValues, numFilters, filterSize);
        var bias = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(numFilters));
        paramMappings.push({
            paramPath: mappedPrefix + "/filters"
        }, {
            paramPath: mappedPrefix + "/bias"
        });
        return {
            filters: filters,
            bias: bias
        };
    }
    function extractScaleLayerParams(numWeights, mappedPrefix) {
        var weights = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(numWeights));
        var biases = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(numWeights));
        paramMappings.push({
            paramPath: mappedPrefix + "/weights"
        }, {
            paramPath: mappedPrefix + "/biases"
        });
        return {
            weights: weights,
            biases: biases
        };
    }
    function extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix) {
        var conv = extractConvParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv");
        var scale = extractScaleLayerParams(numFilters, mappedPrefix + "/scale");
        return {
            conv: conv,
            scale: scale
        };
    }
    function extractResidualLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix, isDown) {
        if (isDown === void 0) {
            isDown = false;
        }
        var conv1 = extractConvLayerParams((isDown ? 0.5 : 1) * numFilterValues, numFilters, filterSize, mappedPrefix + "/conv1");
        var conv2 = extractConvLayerParams(numFilterValues, numFilters, filterSize, mappedPrefix + "/conv2");
        return {
            conv1: conv1,
            conv2: conv2
        };
    }
    return {
        extractConvLayerParams: extractConvLayerParams,
        extractResidualLayerParams: extractResidualLayerParams
    };
}
function extractParams(weights) {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var paramMappings = [];
    var _b = extractorsFactory(extractWeights, paramMappings), extractConvLayerParams = _b.extractConvLayerParams, extractResidualLayerParams = _b.extractResidualLayerParams;
    var conv32_down = extractConvLayerParams(4704, 32, 7, 'conv32_down');
    var conv32_1 = extractResidualLayerParams(9216, 32, 3, 'conv32_1');
    var conv32_2 = extractResidualLayerParams(9216, 32, 3, 'conv32_2');
    var conv32_3 = extractResidualLayerParams(9216, 32, 3, 'conv32_3');
    var conv64_down = extractResidualLayerParams(36864, 64, 3, 'conv64_down', true);
    var conv64_1 = extractResidualLayerParams(36864, 64, 3, 'conv64_1');
    var conv64_2 = extractResidualLayerParams(36864, 64, 3, 'conv64_2');
    var conv64_3 = extractResidualLayerParams(36864, 64, 3, 'conv64_3');
    var conv128_down = extractResidualLayerParams(147456, 128, 3, 'conv128_down', true);
    var conv128_1 = extractResidualLayerParams(147456, 128, 3, 'conv128_1');
    var conv128_2 = extractResidualLayerParams(147456, 128, 3, 'conv128_2');
    var conv256_down = extractResidualLayerParams(589824, 256, 3, 'conv256_down', true);
    var conv256_1 = extractResidualLayerParams(589824, 256, 3, 'conv256_1');
    var conv256_2 = extractResidualLayerParams(589824, 256, 3, 'conv256_2');
    var conv256_down_out = extractResidualLayerParams(589824, 256, 3, 'conv256_down_out');
    var fc = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor2d"](extractWeights(256 * 128), [
            128,
            256
        ]), [
            1,
            0
        ]);
    });
    paramMappings.push({
        paramPath: "fc"
    });
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    var params = {
        conv32_down: conv32_down,
        conv32_1: conv32_1,
        conv32_2: conv32_2,
        conv32_3: conv32_3,
        conv64_down: conv64_down,
        conv64_1: conv64_1,
        conv64_2: conv64_2,
        conv64_3: conv64_3,
        conv128_down: conv128_down,
        conv128_1: conv128_1,
        conv128_2: conv128_2,
        conv256_down: conv256_down,
        conv256_1: conv256_1,
        conv256_2: conv256_2,
        conv256_down_out: conv256_down_out,
        fc: fc
    };
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParams.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/extractParamsFromWeigthMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMap",
    ()=>extractParamsFromWeigthMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightEntryFactory"])(weightMap, paramMappings);
    function extractScaleLayerParams(prefix) {
        var weights = extractWeightEntry(prefix + "/scale/weights", 1);
        var biases = extractWeightEntry(prefix + "/scale/biases", 1);
        return {
            weights: weights,
            biases: biases
        };
    }
    function extractConvLayerParams(prefix) {
        var filters = extractWeightEntry(prefix + "/conv/filters", 4);
        var bias = extractWeightEntry(prefix + "/conv/bias", 1);
        var scale = extractScaleLayerParams(prefix);
        return {
            conv: {
                filters: filters,
                bias: bias
            },
            scale: scale
        };
    }
    function extractResidualLayerParams(prefix) {
        return {
            conv1: extractConvLayerParams(prefix + "/conv1"),
            conv2: extractConvLayerParams(prefix + "/conv2")
        };
    }
    return {
        extractConvLayerParams: extractConvLayerParams,
        extractResidualLayerParams: extractResidualLayerParams
    };
}
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var _a = extractorsFactory(weightMap, paramMappings), extractConvLayerParams = _a.extractConvLayerParams, extractResidualLayerParams = _a.extractResidualLayerParams;
    var conv32_down = extractConvLayerParams('conv32_down');
    var conv32_1 = extractResidualLayerParams('conv32_1');
    var conv32_2 = extractResidualLayerParams('conv32_2');
    var conv32_3 = extractResidualLayerParams('conv32_3');
    var conv64_down = extractResidualLayerParams('conv64_down');
    var conv64_1 = extractResidualLayerParams('conv64_1');
    var conv64_2 = extractResidualLayerParams('conv64_2');
    var conv64_3 = extractResidualLayerParams('conv64_3');
    var conv128_down = extractResidualLayerParams('conv128_down');
    var conv128_1 = extractResidualLayerParams('conv128_1');
    var conv128_2 = extractResidualLayerParams('conv128_2');
    var conv256_down = extractResidualLayerParams('conv256_down');
    var conv256_1 = extractResidualLayerParams('conv256_1');
    var conv256_2 = extractResidualLayerParams('conv256_2');
    var conv256_down_out = extractResidualLayerParams('conv256_down_out');
    var fc = weightMap['fc'];
    paramMappings.push({
        originalPath: 'fc',
        paramPath: 'fc'
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor2D"])(fc)) {
        throw new Error("expected weightMap[fc] to be a Tensor2D, instead have " + fc);
    }
    var params = {
        conv32_down: conv32_down,
        conv32_1: conv32_1,
        conv32_2: conv32_2,
        conv32_3: conv32_3,
        conv64_down: conv64_down,
        conv64_1: conv64_1,
        conv64_2: conv64_2,
        conv64_3: conv64_3,
        conv128_down: conv128_down,
        conv128_1: conv128_1,
        conv128_2: conv128_2,
        conv256_down: conv256_down,
        conv256_1: conv256_1,
        conv256_2: conv256_2,
        conv256_down_out: conv256_down_out,
        fc: fc
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/residualLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "residual",
    ()=>residual,
    "residualDown",
    ()=>residualDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/convLayer.js [app-client] (ecmascript)");
;
;
;
function residual(x, params) {
    var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv"])(x, params.conv1);
    out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convNoRelu"])(out, params.conv2);
    out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out, x);
    out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](out);
    return out;
}
function residualDown(x, params) {
    var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convDown"])(x, params.conv1);
    out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convNoRelu"])(out, params.conv2);
    var pooled = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["avgPool"](x, 2, 2, 'valid');
    var zeros = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"](pooled.shape);
    var isPad = pooled.shape[3] !== out.shape[3];
    var isAdjustShape = pooled.shape[1] !== out.shape[1] || pooled.shape[2] !== out.shape[2];
    if (isAdjustShape) {
        var padShapeX = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(out.shape);
        padShapeX[1] = 1;
        var zerosW = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"](padShapeX);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"]([
            out,
            zerosW
        ], 1);
        var padShapeY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__spreadArrays"])(out.shape);
        padShapeY[2] = 1;
        var zerosH = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zeros"](padShapeY);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"]([
            out,
            zerosH
        ], 2);
    }
    pooled = isPad ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"]([
        pooled,
        zeros
    ], 3) : pooled;
    out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](pooled, out);
    out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](out);
    return out;
} //# sourceMappingURL=residualLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/FaceRecognitionNet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceRecognitionNet",
    ()=>FaceRecognitionNet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/convLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/extractParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/extractParamsFromWeigthMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/residualLayer.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var FaceRecognitionNet = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceRecognitionNet, _super);
    function FaceRecognitionNet() {
        return _super.call(this, 'FaceRecognitionNet') || this;
    }
    FaceRecognitionNet.prototype.forwardInput = function(input) {
        var params = this.params;
        if (!params) {
            throw new Error('FaceRecognitionNet - load model before inference');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var batchTensor = input.toBatchTensor(150, true).toFloat();
            var meanRgb = [
                122.782,
                117.001,
                104.298
            ];
            var normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(batchTensor, meanRgb).div(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](256));
            var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convDown"])(normalized, params.conv32_down);
            out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, 3, 2, 'valid');
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv32_1);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv32_2);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv32_3);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residualDown"])(out, params.conv64_down);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv64_1);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv64_2);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv64_3);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residualDown"])(out, params.conv128_down);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv128_1);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv128_2);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residualDown"])(out, params.conv256_down);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv256_1);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residual"])(out, params.conv256_2);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$residualLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["residualDown"])(out, params.conv256_down_out);
            var globalAvg = out.mean([
                1,
                2
            ]);
            var fullyConnected = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["matMul"](globalAvg, params.fc);
            return fullyConnected;
        });
    };
    FaceRecognitionNet.prototype.forward = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    FaceRecognitionNet.prototype.computeFaceDescriptor = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var netInput, faceDescriptorTensors, faceDescriptorsForBatch;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        netInput = _a.sent();
                        faceDescriptorTensors = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](_this.forwardInput(netInput));
                        });
                        return [
                            4 /*yield*/ ,
                            Promise.all(faceDescriptorTensors.map(function(t) {
                                return t.data();
                            }))
                        ];
                    case 2:
                        faceDescriptorsForBatch = _a.sent();
                        faceDescriptorTensors.forEach(function(t) {
                            return t.dispose();
                        });
                        return [
                            2 /*return*/ ,
                            netInput.isBatchInput ? faceDescriptorsForBatch : faceDescriptorsForBatch[0]
                        ];
                }
            });
        });
    };
    FaceRecognitionNet.prototype.getDefaultModelName = function() {
        return 'face_recognition_model';
    };
    FaceRecognitionNet.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMap"])(weightMap);
    };
    FaceRecognitionNet.prototype.extractParams = function(weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParams"])(weights);
    };
    return FaceRecognitionNet;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=FaceRecognitionNet.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFaceRecognitionNet",
    ()=>createFaceRecognitionNet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$FaceRecognitionNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/FaceRecognitionNet.js [app-client] (ecmascript)");
;
;
function createFaceRecognitionNet(weights) {
    var net = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$FaceRecognitionNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceRecognitionNet"]();
    net.extractWeights(weights);
    return net;
} //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDescriptor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendWithFaceDescriptor",
    ()=>extendWithFaceDescriptor
]);
function extendWithFaceDescriptor(sourceObj, descriptor) {
    var extension = {
        descriptor: descriptor
    };
    return Object.assign({}, sourceObj, extension);
} //# sourceMappingURL=WithFaceDescriptor.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithAge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendWithAge",
    ()=>extendWithAge,
    "isWithAge",
    ()=>isWithAge
]);
function isWithAge(obj) {
    return typeof obj['age'] === 'number';
}
function extendWithAge(sourceObj, age) {
    var extension = {
        age: age
    };
    return Object.assign({}, sourceObj, extension);
} //# sourceMappingURL=WithAge.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithGender.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extendWithGender",
    ()=>extendWithGender,
    "isWithGender",
    ()=>isWithGender
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
function isWithGender(obj) {
    return (obj['gender'] === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gender"].MALE || obj['gender'] === __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gender"].FEMALE) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidProbablitiy"])(obj['genderProbability']);
}
function extendWithGender(sourceObj, gender, genderProbability) {
    var extension = {
        gender: gender,
        genderProbability: genderProbability
    };
    return Object.assign({}, sourceObj, extension);
} //# sourceMappingURL=WithGender.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDescriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDescriptor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceExpressions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithAge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithAge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithGender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithGender.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MtcnnOptions",
    ()=>MtcnnOptions
]);
var MtcnnOptions = function() {
    function MtcnnOptions(_a) {
        var _b = _a === void 0 ? {} : _a, minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
        this._name = 'MtcnnOptions';
        this._minFaceSize = minFaceSize || 20;
        this._scaleFactor = scaleFactor || 0.709;
        this._maxNumScales = maxNumScales || 10;
        this._scoreThresholds = scoreThresholds || [
            0.6,
            0.7,
            0.7
        ];
        this._scaleSteps = scaleSteps;
        if (typeof this._minFaceSize !== 'number' || this._minFaceSize < 0) {
            throw new Error(this._name + " - expected minFaceSize to be a number > 0");
        }
        if (typeof this._scaleFactor !== 'number' || this._scaleFactor <= 0 || this._scaleFactor >= 1) {
            throw new Error(this._name + " - expected scaleFactor to be a number between 0 and 1");
        }
        if (typeof this._maxNumScales !== 'number' || this._maxNumScales < 0) {
            throw new Error(this._name + " - expected maxNumScales to be a number > 0");
        }
        if (!Array.isArray(this._scoreThresholds) || this._scoreThresholds.length !== 3 || this._scoreThresholds.some(function(th) {
            return typeof th !== 'number';
        })) {
            throw new Error(this._name + " - expected scoreThresholds to be an array of numbers of length 3");
        }
        if (this._scaleSteps && (!Array.isArray(this._scaleSteps) || this._scaleSteps.some(function(th) {
            return typeof th !== 'number';
        }))) {
            throw new Error(this._name + " - expected scaleSteps to be an array of numbers");
        }
    }
    Object.defineProperty(MtcnnOptions.prototype, "minFaceSize", {
        get: function() {
            return this._minFaceSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtcnnOptions.prototype, "scaleFactor", {
        get: function() {
            return this._scaleFactor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtcnnOptions.prototype, "maxNumScales", {
        get: function() {
            return this._maxNumScales;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtcnnOptions.prototype, "scoreThresholds", {
        get: function() {
            return this._scoreThresholds;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MtcnnOptions.prototype, "scaleSteps", {
        get: function() {
            return this._scaleSteps;
        },
        enumerable: true,
        configurable: true
    });
    return MtcnnOptions;
}();
;
 //# sourceMappingURL=MtcnnOptions.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/extractParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParams",
    ()=>extractParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
;
;
function extractorsFactory(extractWeights, paramMappings) {
    function extractDepthwiseConvParams(numChannels, mappedPrefix) {
        var filters = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor4d"](extractWeights(3 * 3 * numChannels), [
            3,
            3,
            numChannels,
            1
        ]);
        var batch_norm_scale = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(numChannels));
        var batch_norm_offset = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(numChannels));
        var batch_norm_mean = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(numChannels));
        var batch_norm_variance = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(numChannels));
        paramMappings.push({
            paramPath: mappedPrefix + "/filters"
        }, {
            paramPath: mappedPrefix + "/batch_norm_scale"
        }, {
            paramPath: mappedPrefix + "/batch_norm_offset"
        }, {
            paramPath: mappedPrefix + "/batch_norm_mean"
        }, {
            paramPath: mappedPrefix + "/batch_norm_variance"
        });
        return {
            filters: filters,
            batch_norm_scale: batch_norm_scale,
            batch_norm_offset: batch_norm_offset,
            batch_norm_mean: batch_norm_mean,
            batch_norm_variance: batch_norm_variance
        };
    }
    function extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, isPointwiseConv) {
        var filters = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor4d"](extractWeights(channelsIn * channelsOut * filterSize * filterSize), [
            filterSize,
            filterSize,
            channelsIn,
            channelsOut
        ]);
        var bias = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(channelsOut));
        paramMappings.push({
            paramPath: mappedPrefix + "/filters"
        }, {
            paramPath: mappedPrefix + "/" + (isPointwiseConv ? 'batch_norm_offset' : 'bias')
        });
        return {
            filters: filters,
            bias: bias
        };
    }
    function extractPointwiseConvParams(channelsIn, channelsOut, filterSize, mappedPrefix) {
        var _a = extractConvParams(channelsIn, channelsOut, filterSize, mappedPrefix, true), filters = _a.filters, bias = _a.bias;
        return {
            filters: filters,
            batch_norm_offset: bias
        };
    }
    function extractConvPairParams(channelsIn, channelsOut, mappedPrefix) {
        var depthwise_conv = extractDepthwiseConvParams(channelsIn, mappedPrefix + "/depthwise_conv");
        var pointwise_conv = extractPointwiseConvParams(channelsIn, channelsOut, 1, mappedPrefix + "/pointwise_conv");
        return {
            depthwise_conv: depthwise_conv,
            pointwise_conv: pointwise_conv
        };
    }
    function extractMobilenetV1Params() {
        var conv_0 = extractPointwiseConvParams(3, 32, 3, 'mobilenetv1/conv_0');
        var conv_1 = extractConvPairParams(32, 64, 'mobilenetv1/conv_1');
        var conv_2 = extractConvPairParams(64, 128, 'mobilenetv1/conv_2');
        var conv_3 = extractConvPairParams(128, 128, 'mobilenetv1/conv_3');
        var conv_4 = extractConvPairParams(128, 256, 'mobilenetv1/conv_4');
        var conv_5 = extractConvPairParams(256, 256, 'mobilenetv1/conv_5');
        var conv_6 = extractConvPairParams(256, 512, 'mobilenetv1/conv_6');
        var conv_7 = extractConvPairParams(512, 512, 'mobilenetv1/conv_7');
        var conv_8 = extractConvPairParams(512, 512, 'mobilenetv1/conv_8');
        var conv_9 = extractConvPairParams(512, 512, 'mobilenetv1/conv_9');
        var conv_10 = extractConvPairParams(512, 512, 'mobilenetv1/conv_10');
        var conv_11 = extractConvPairParams(512, 512, 'mobilenetv1/conv_11');
        var conv_12 = extractConvPairParams(512, 1024, 'mobilenetv1/conv_12');
        var conv_13 = extractConvPairParams(1024, 1024, 'mobilenetv1/conv_13');
        return {
            conv_0: conv_0,
            conv_1: conv_1,
            conv_2: conv_2,
            conv_3: conv_3,
            conv_4: conv_4,
            conv_5: conv_5,
            conv_6: conv_6,
            conv_7: conv_7,
            conv_8: conv_8,
            conv_9: conv_9,
            conv_10: conv_10,
            conv_11: conv_11,
            conv_12: conv_12,
            conv_13: conv_13
        };
    }
    function extractPredictionLayerParams() {
        var conv_0 = extractPointwiseConvParams(1024, 256, 1, 'prediction_layer/conv_0');
        var conv_1 = extractPointwiseConvParams(256, 512, 3, 'prediction_layer/conv_1');
        var conv_2 = extractPointwiseConvParams(512, 128, 1, 'prediction_layer/conv_2');
        var conv_3 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_3');
        var conv_4 = extractPointwiseConvParams(256, 128, 1, 'prediction_layer/conv_4');
        var conv_5 = extractPointwiseConvParams(128, 256, 3, 'prediction_layer/conv_5');
        var conv_6 = extractPointwiseConvParams(256, 64, 1, 'prediction_layer/conv_6');
        var conv_7 = extractPointwiseConvParams(64, 128, 3, 'prediction_layer/conv_7');
        var box_encoding_0_predictor = extractConvParams(512, 12, 1, 'prediction_layer/box_predictor_0/box_encoding_predictor');
        var class_predictor_0 = extractConvParams(512, 9, 1, 'prediction_layer/box_predictor_0/class_predictor');
        var box_encoding_1_predictor = extractConvParams(1024, 24, 1, 'prediction_layer/box_predictor_1/box_encoding_predictor');
        var class_predictor_1 = extractConvParams(1024, 18, 1, 'prediction_layer/box_predictor_1/class_predictor');
        var box_encoding_2_predictor = extractConvParams(512, 24, 1, 'prediction_layer/box_predictor_2/box_encoding_predictor');
        var class_predictor_2 = extractConvParams(512, 18, 1, 'prediction_layer/box_predictor_2/class_predictor');
        var box_encoding_3_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_3/box_encoding_predictor');
        var class_predictor_3 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_3/class_predictor');
        var box_encoding_4_predictor = extractConvParams(256, 24, 1, 'prediction_layer/box_predictor_4/box_encoding_predictor');
        var class_predictor_4 = extractConvParams(256, 18, 1, 'prediction_layer/box_predictor_4/class_predictor');
        var box_encoding_5_predictor = extractConvParams(128, 24, 1, 'prediction_layer/box_predictor_5/box_encoding_predictor');
        var class_predictor_5 = extractConvParams(128, 18, 1, 'prediction_layer/box_predictor_5/class_predictor');
        var box_predictor_0 = {
            box_encoding_predictor: box_encoding_0_predictor,
            class_predictor: class_predictor_0
        };
        var box_predictor_1 = {
            box_encoding_predictor: box_encoding_1_predictor,
            class_predictor: class_predictor_1
        };
        var box_predictor_2 = {
            box_encoding_predictor: box_encoding_2_predictor,
            class_predictor: class_predictor_2
        };
        var box_predictor_3 = {
            box_encoding_predictor: box_encoding_3_predictor,
            class_predictor: class_predictor_3
        };
        var box_predictor_4 = {
            box_encoding_predictor: box_encoding_4_predictor,
            class_predictor: class_predictor_4
        };
        var box_predictor_5 = {
            box_encoding_predictor: box_encoding_5_predictor,
            class_predictor: class_predictor_5
        };
        return {
            conv_0: conv_0,
            conv_1: conv_1,
            conv_2: conv_2,
            conv_3: conv_3,
            conv_4: conv_4,
            conv_5: conv_5,
            conv_6: conv_6,
            conv_7: conv_7,
            box_predictor_0: box_predictor_0,
            box_predictor_1: box_predictor_1,
            box_predictor_2: box_predictor_2,
            box_predictor_3: box_predictor_3,
            box_predictor_4: box_predictor_4,
            box_predictor_5: box_predictor_5
        };
    }
    return {
        extractMobilenetV1Params: extractMobilenetV1Params,
        extractPredictionLayerParams: extractPredictionLayerParams
    };
}
function extractParams(weights) {
    var paramMappings = [];
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var _b = extractorsFactory(extractWeights, paramMappings), extractMobilenetV1Params = _b.extractMobilenetV1Params, extractPredictionLayerParams = _b.extractPredictionLayerParams;
    var mobilenetv1 = extractMobilenetV1Params();
    var prediction_layer = extractPredictionLayerParams();
    var extra_dim = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor3d"](extractWeights(5118 * 4), [
        1,
        5118,
        4
    ]);
    var output_layer = {
        extra_dim: extra_dim
    };
    paramMappings.push({
        paramPath: 'output_layer/extra_dim'
    });
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        params: {
            mobilenetv1: mobilenetv1,
            prediction_layer: prediction_layer,
            output_layer: output_layer
        },
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParams.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/extractParamsFromWeigthMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMap",
    ()=>extractParamsFromWeigthMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
;
;
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightEntryFactory"])(weightMap, paramMappings);
    function extractPointwiseConvParams(prefix, idx, mappedPrefix) {
        var filters = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/weights", 4, mappedPrefix + "/filters");
        var batch_norm_offset = extractWeightEntry(prefix + "/Conv2d_" + idx + "_pointwise/convolution_bn_offset", 1, mappedPrefix + "/batch_norm_offset");
        return {
            filters: filters,
            batch_norm_offset: batch_norm_offset
        };
    }
    function extractConvPairParams(idx) {
        var mappedPrefix = "mobilenetv1/conv_" + idx;
        var prefixDepthwiseConv = "MobilenetV1/Conv2d_" + idx + "_depthwise";
        var mappedPrefixDepthwiseConv = mappedPrefix + "/depthwise_conv";
        var mappedPrefixPointwiseConv = mappedPrefix + "/pointwise_conv";
        var filters = extractWeightEntry(prefixDepthwiseConv + "/depthwise_weights", 4, mappedPrefixDepthwiseConv + "/filters");
        var batch_norm_scale = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/gamma", 1, mappedPrefixDepthwiseConv + "/batch_norm_scale");
        var batch_norm_offset = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/beta", 1, mappedPrefixDepthwiseConv + "/batch_norm_offset");
        var batch_norm_mean = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_mean", 1, mappedPrefixDepthwiseConv + "/batch_norm_mean");
        var batch_norm_variance = extractWeightEntry(prefixDepthwiseConv + "/BatchNorm/moving_variance", 1, mappedPrefixDepthwiseConv + "/batch_norm_variance");
        return {
            depthwise_conv: {
                filters: filters,
                batch_norm_scale: batch_norm_scale,
                batch_norm_offset: batch_norm_offset,
                batch_norm_mean: batch_norm_mean,
                batch_norm_variance: batch_norm_variance
            },
            pointwise_conv: extractPointwiseConvParams('MobilenetV1', idx, mappedPrefixPointwiseConv)
        };
    }
    function extractMobilenetV1Params() {
        return {
            conv_0: extractPointwiseConvParams('MobilenetV1', 0, 'mobilenetv1/conv_0'),
            conv_1: extractConvPairParams(1),
            conv_2: extractConvPairParams(2),
            conv_3: extractConvPairParams(3),
            conv_4: extractConvPairParams(4),
            conv_5: extractConvPairParams(5),
            conv_6: extractConvPairParams(6),
            conv_7: extractConvPairParams(7),
            conv_8: extractConvPairParams(8),
            conv_9: extractConvPairParams(9),
            conv_10: extractConvPairParams(10),
            conv_11: extractConvPairParams(11),
            conv_12: extractConvPairParams(12),
            conv_13: extractConvPairParams(13)
        };
    }
    function extractConvParams(prefix, mappedPrefix) {
        var filters = extractWeightEntry(prefix + "/weights", 4, mappedPrefix + "/filters");
        var bias = extractWeightEntry(prefix + "/biases", 1, mappedPrefix + "/bias");
        return {
            filters: filters,
            bias: bias
        };
    }
    function extractBoxPredictorParams(idx) {
        var box_encoding_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/BoxEncodingPredictor", "prediction_layer/box_predictor_" + idx + "/box_encoding_predictor");
        var class_predictor = extractConvParams("Prediction/BoxPredictor_" + idx + "/ClassPredictor", "prediction_layer/box_predictor_" + idx + "/class_predictor");
        return {
            box_encoding_predictor: box_encoding_predictor,
            class_predictor: class_predictor
        };
    }
    function extractPredictionLayerParams() {
        return {
            conv_0: extractPointwiseConvParams('Prediction', 0, 'prediction_layer/conv_0'),
            conv_1: extractPointwiseConvParams('Prediction', 1, 'prediction_layer/conv_1'),
            conv_2: extractPointwiseConvParams('Prediction', 2, 'prediction_layer/conv_2'),
            conv_3: extractPointwiseConvParams('Prediction', 3, 'prediction_layer/conv_3'),
            conv_4: extractPointwiseConvParams('Prediction', 4, 'prediction_layer/conv_4'),
            conv_5: extractPointwiseConvParams('Prediction', 5, 'prediction_layer/conv_5'),
            conv_6: extractPointwiseConvParams('Prediction', 6, 'prediction_layer/conv_6'),
            conv_7: extractPointwiseConvParams('Prediction', 7, 'prediction_layer/conv_7'),
            box_predictor_0: extractBoxPredictorParams(0),
            box_predictor_1: extractBoxPredictorParams(1),
            box_predictor_2: extractBoxPredictorParams(2),
            box_predictor_3: extractBoxPredictorParams(3),
            box_predictor_4: extractBoxPredictorParams(4),
            box_predictor_5: extractBoxPredictorParams(5)
        };
    }
    return {
        extractMobilenetV1Params: extractMobilenetV1Params,
        extractPredictionLayerParams: extractPredictionLayerParams
    };
}
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var _a = extractorsFactory(weightMap, paramMappings), extractMobilenetV1Params = _a.extractMobilenetV1Params, extractPredictionLayerParams = _a.extractPredictionLayerParams;
    var extra_dim = weightMap['Output/extra_dim'];
    paramMappings.push({
        originalPath: 'Output/extra_dim',
        paramPath: 'output_layer/extra_dim'
    });
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTensor3D"])(extra_dim)) {
        throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have " + extra_dim);
    }
    var params = {
        mobilenetv1: extractMobilenetV1Params(),
        prediction_layer: extractPredictionLayerParams(),
        output_layer: {
            extra_dim: extra_dim
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/pointwiseConvLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pointwiseConvLayer",
    ()=>pointwiseConvLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function pointwiseConvLayer(x, params, strides) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](x, params.filters, strides, 'same');
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out, params.batch_norm_offset);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipByValue"](out, 0, 6);
    });
} //# sourceMappingURL=pointwiseConvLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/mobileNetV1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mobileNetV1",
    ()=>mobileNetV1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/pointwiseConvLayer.js [app-client] (ecmascript)");
;
;
var epsilon = 0.0010000000474974513;
function depthwiseConvLayer(x, params, strides) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseConv2d"](x, params.filters, strides, 'same');
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["batchNorm"](out, params.batch_norm_mean, params.batch_norm_variance, params.batch_norm_offset, params.batch_norm_scale, epsilon);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clipByValue"](out, 0, 6);
    });
}
function getStridesForLayerIdx(layerIdx) {
    return [
        2,
        4,
        6,
        12
    ].some(function(idx) {
        return idx === layerIdx;
    }) ? [
        2,
        2
    ] : [
        1,
        1
    ];
}
function mobileNetV1(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var conv11 = null;
        var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(x, params.conv_0, [
            2,
            2
        ]);
        var convPairParams = [
            params.conv_1,
            params.conv_2,
            params.conv_3,
            params.conv_4,
            params.conv_5,
            params.conv_6,
            params.conv_7,
            params.conv_8,
            params.conv_9,
            params.conv_10,
            params.conv_11,
            params.conv_12,
            params.conv_13
        ];
        convPairParams.forEach(function(param, i) {
            var layerIdx = i + 1;
            var depthwiseConvStrides = getStridesForLayerIdx(layerIdx);
            out = depthwiseConvLayer(out, param.depthwise_conv, depthwiseConvStrides);
            out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(out, param.pointwise_conv, [
                1,
                1
            ]);
            if (layerIdx === 11) {
                conv11 = out;
            }
        });
        if (conv11 === null) {
            throw new Error('mobileNetV1 - output of conv layer 11 is null');
        }
        return {
            out: out,
            conv11: conv11
        };
    });
} //# sourceMappingURL=mobileNetV1.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/nonMaxSuppression.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "nonMaxSuppression",
    ()=>nonMaxSuppression
]);
function nonMaxSuppression(boxes, scores, maxOutputSize, iouThreshold, scoreThreshold) {
    var numBoxes = boxes.shape[0];
    var outputSize = Math.min(maxOutputSize, numBoxes);
    var candidates = scores.map(function(score, boxIndex) {
        return {
            score: score,
            boxIndex: boxIndex
        };
    }).filter(function(c) {
        return c.score > scoreThreshold;
    }).sort(function(c1, c2) {
        return c2.score - c1.score;
    });
    var suppressFunc = function(x) {
        return x <= iouThreshold ? 1 : 0;
    };
    var selected = [];
    candidates.forEach(function(c) {
        if (selected.length >= outputSize) {
            return;
        }
        var originalScore = c.score;
        for(var j = selected.length - 1; j >= 0; --j){
            var iou = IOU(boxes, c.boxIndex, selected[j]);
            if (iou === 0.0) {
                continue;
            }
            c.score *= suppressFunc(iou);
            if (c.score <= scoreThreshold) {
                break;
            }
        }
        if (originalScore === c.score) {
            selected.push(c.boxIndex);
        }
    });
    return selected;
}
function IOU(boxes, i, j) {
    var boxesData = boxes.arraySync();
    var yminI = Math.min(boxesData[i][0], boxesData[i][2]);
    var xminI = Math.min(boxesData[i][1], boxesData[i][3]);
    var ymaxI = Math.max(boxesData[i][0], boxesData[i][2]);
    var xmaxI = Math.max(boxesData[i][1], boxesData[i][3]);
    var yminJ = Math.min(boxesData[j][0], boxesData[j][2]);
    var xminJ = Math.min(boxesData[j][1], boxesData[j][3]);
    var ymaxJ = Math.max(boxesData[j][0], boxesData[j][2]);
    var xmaxJ = Math.max(boxesData[j][1], boxesData[j][3]);
    var areaI = (ymaxI - yminI) * (xmaxI - xminI);
    var areaJ = (ymaxJ - yminJ) * (xmaxJ - xminJ);
    if (areaI <= 0 || areaJ <= 0) {
        return 0.0;
    }
    var intersectionYmin = Math.max(yminI, yminJ);
    var intersectionXmin = Math.max(xminI, xminJ);
    var intersectionYmax = Math.min(ymaxI, ymaxJ);
    var intersectionXmax = Math.min(xmaxI, xmaxJ);
    var intersectionArea = Math.max(intersectionYmax - intersectionYmin, 0.0) * Math.max(intersectionXmax - intersectionXmin, 0.0);
    return intersectionArea / (areaI + areaJ - intersectionArea);
} //# sourceMappingURL=nonMaxSuppression.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/outputLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "outputLayer",
    ()=>outputLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function getCenterCoordinatesAndSizesLayer(x) {
    var vec = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](x, [
        1,
        0
    ]));
    var sizes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](vec[2], vec[0]),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](vec[3], vec[1])
    ];
    var centers = [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](vec[0], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"](sizes[0], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](2))),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](vec[1], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"](sizes[1], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](2)))
    ];
    return {
        sizes: sizes,
        centers: centers
    };
}
function decodeBoxesLayer(x0, x1) {
    var _a = getCenterCoordinatesAndSizesLayer(x0), sizes = _a.sizes, centers = _a.centers;
    var vec = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](x1, [
        1,
        0
    ]));
    var div0_out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exp"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"](vec[2], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](5))), sizes[0]), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](2));
    var add0_out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"](vec[0], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](10)), sizes[0]), centers[0]);
    var div1_out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exp"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"](vec[3], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](5))), sizes[1]), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](2));
    var add1_out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["div"](vec[1], __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](10)), sizes[1]), centers[1]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"]([
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](add0_out, div0_out),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](add1_out, div1_out),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](add0_out, div0_out),
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](add1_out, div1_out)
    ]), [
        1,
        0
    ]);
}
function outputLayer(boxPredictions, classPredictions, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var batchSize = boxPredictions.shape[0];
        var boxes = decodeBoxesLayer(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tile"](params.extra_dim, [
            batchSize,
            1,
            1
        ]), [
            -1,
            4
        ]), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](boxPredictions, [
            -1,
            4
        ]));
        boxes = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](boxes, [
            batchSize,
            boxes.shape[0] / batchSize,
            4
        ]);
        var scoresAndClasses = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sigmoid"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](classPredictions, [
            0,
            0,
            1
        ], [
            -1,
            -1,
            -1
        ]));
        var scores = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slice"](scoresAndClasses, [
            0,
            0,
            0
        ], [
            -1,
            -1,
            1
        ]);
        scores = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](scores, [
            batchSize,
            scores.shape[1]
        ]);
        var boxesByBatch = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](boxes);
        var scoresByBatch = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](scores);
        return {
            boxes: boxesByBatch,
            scores: scoresByBatch
        };
    });
} //# sourceMappingURL=outputLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/boxPredictionLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "boxPredictionLayer",
    ()=>boxPredictionLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/convLayer.js [app-client] (ecmascript)");
;
;
function boxPredictionLayer(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var batchSize = x.shape[0];
        var boxPredictionEncoding = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(x, params.box_encoding_predictor), [
            batchSize,
            -1,
            1,
            4
        ]);
        var classPrediction = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(x, params.class_predictor), [
            batchSize,
            -1,
            3
        ]);
        return {
            boxPredictionEncoding: boxPredictionEncoding,
            classPrediction: classPrediction
        };
    });
} //# sourceMappingURL=boxPredictionLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/predictionLayer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "predictionLayer",
    ()=>predictionLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$boxPredictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/boxPredictionLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/pointwiseConvLayer.js [app-client] (ecmascript)");
;
;
;
function predictionLayer(x, conv11, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var conv0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(x, params.conv_0, [
            1,
            1
        ]);
        var conv1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(conv0, params.conv_1, [
            2,
            2
        ]);
        var conv2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(conv1, params.conv_2, [
            1,
            1
        ]);
        var conv3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(conv2, params.conv_3, [
            2,
            2
        ]);
        var conv4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(conv3, params.conv_4, [
            1,
            1
        ]);
        var conv5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(conv4, params.conv_5, [
            2,
            2
        ]);
        var conv6 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(conv5, params.conv_6, [
            1,
            1
        ]);
        var conv7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$pointwiseConvLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pointwiseConvLayer"])(conv6, params.conv_7, [
            2,
            2
        ]);
        var boxPrediction0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$boxPredictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxPredictionLayer"])(conv11, params.box_predictor_0);
        var boxPrediction1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$boxPredictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxPredictionLayer"])(x, params.box_predictor_1);
        var boxPrediction2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$boxPredictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxPredictionLayer"])(conv1, params.box_predictor_2);
        var boxPrediction3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$boxPredictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxPredictionLayer"])(conv3, params.box_predictor_3);
        var boxPrediction4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$boxPredictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxPredictionLayer"])(conv5, params.box_predictor_4);
        var boxPrediction5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$boxPredictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boxPredictionLayer"])(conv7, params.box_predictor_5);
        var boxPredictions = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"]([
            boxPrediction0.boxPredictionEncoding,
            boxPrediction1.boxPredictionEncoding,
            boxPrediction2.boxPredictionEncoding,
            boxPrediction3.boxPredictionEncoding,
            boxPrediction4.boxPredictionEncoding,
            boxPrediction5.boxPredictionEncoding
        ], 1);
        var classPredictions = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"]([
            boxPrediction0.classPrediction,
            boxPrediction1.classPrediction,
            boxPrediction2.classPrediction,
            boxPrediction3.classPrediction,
            boxPrediction4.classPrediction,
            boxPrediction5.classPrediction
        ], 1);
        return {
            boxPredictions: boxPredictions,
            classPredictions: classPredictions
        };
    });
} //# sourceMappingURL=predictionLayer.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1Options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SsdMobilenetv1Options",
    ()=>SsdMobilenetv1Options
]);
var SsdMobilenetv1Options = function() {
    function SsdMobilenetv1Options(_a) {
        var _b = _a === void 0 ? {} : _a, minConfidence = _b.minConfidence, maxResults = _b.maxResults;
        this._name = 'SsdMobilenetv1Options';
        this._minConfidence = minConfidence || 0.5;
        this._maxResults = maxResults || 100;
        if (typeof this._minConfidence !== 'number' || this._minConfidence <= 0 || this._minConfidence >= 1) {
            throw new Error(this._name + " - expected minConfidence to be a number between 0 and 1");
        }
        if (typeof this._maxResults !== 'number') {
            throw new Error(this._name + " - expected maxResults to be a number");
        }
    }
    Object.defineProperty(SsdMobilenetv1Options.prototype, "minConfidence", {
        get: function() {
            return this._minConfidence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SsdMobilenetv1Options.prototype, "maxResults", {
        get: function() {
            return this._maxResults;
        },
        enumerable: true,
        configurable: true
    });
    return SsdMobilenetv1Options;
}();
;
 //# sourceMappingURL=SsdMobilenetv1Options.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SsdMobilenetv1",
    ()=>SsdMobilenetv1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Rect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/extractParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/extractParamsFromWeigthMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$mobileNetV1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/mobileNetV1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/nonMaxSuppression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$outputLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/outputLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$predictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/predictionLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1Options.js [app-client] (ecmascript)");
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
var SsdMobilenetv1 = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(SsdMobilenetv1, _super);
    function SsdMobilenetv1() {
        return _super.call(this, 'SsdMobilenetv1') || this;
    }
    SsdMobilenetv1.prototype.forwardInput = function(input) {
        var params = this.params;
        if (!params) {
            throw new Error('SsdMobilenetv1 - load model before inference');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var batchTensor = input.toBatchTensor(512, false).toFloat();
            var x = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](batchTensor, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](0.007843137718737125)), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](1));
            var features = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$mobileNetV1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileNetV1"])(x, params.mobilenetv1);
            var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$predictionLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["predictionLayer"])(features.out, features.conv11, params.prediction_layer), boxPredictions = _a.boxPredictions, classPredictions = _a.classPredictions;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$outputLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["outputLayer"])(boxPredictions, classPredictions, params.output_layer);
        });
    };
    SsdMobilenetv1.prototype.forward = function(input) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    SsdMobilenetv1.prototype.locateFaces = function(input, options) {
        if (options === void 0) {
            options = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, maxResults, minConfidence, netInput, _b, _boxes, _scores, boxes, scores, i, scoresData, _c, _d, iouThreshold, indices, reshapedDims, inputSize, padX, padY, boxesData, results;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_e) {
                switch(_e.label){
                    case 0:
                        _a = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1Options"](options), maxResults = _a.maxResults, minConfidence = _a.minConfidence;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        netInput = _e.sent();
                        _b = this.forwardInput(netInput), _boxes = _b.boxes, _scores = _b.scores;
                        boxes = _boxes[0];
                        scores = _scores[0];
                        for(i = 1; i < _boxes.length; i++){
                            _boxes[i].dispose();
                            _scores[i].dispose();
                        }
                        _d = (_c = Array).from;
                        return [
                            4 /*yield*/ ,
                            scores.data()
                        ];
                    case 2:
                        scoresData = _d.apply(_c, [
                            _e.sent()
                        ]);
                        iouThreshold = 0.5;
                        indices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppression"])(boxes, scoresData, maxResults, iouThreshold, minConfidence);
                        reshapedDims = netInput.getReshapedInputDimensions(0);
                        inputSize = netInput.inputSize;
                        padX = inputSize / reshapedDims.width;
                        padY = inputSize / reshapedDims.height;
                        boxesData = boxes.arraySync();
                        results = indices.map(function(idx) {
                            var _a = [
                                Math.max(0, boxesData[idx][0]),
                                Math.min(1.0, boxesData[idx][2])
                            ].map(function(val) {
                                return val * padY;
                            }), top = _a[0], bottom = _a[1];
                            var _b = [
                                Math.max(0, boxesData[idx][1]),
                                Math.min(1.0, boxesData[idx][3])
                            ].map(function(val) {
                                return val * padX;
                            }), left = _b[0], right = _b[1];
                            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"](scoresData[idx], new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"](left, top, right - left, bottom - top), {
                                height: netInput.getInputHeight(0),
                                width: netInput.getInputWidth(0)
                            });
                        });
                        boxes.dispose();
                        scores.dispose();
                        return [
                            2 /*return*/ ,
                            results
                        ];
                }
            });
        });
    };
    SsdMobilenetv1.prototype.getDefaultModelName = function() {
        return 'ssd_mobilenetv1_model';
    };
    SsdMobilenetv1.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMap"])(weightMap);
    };
    SsdMobilenetv1.prototype.extractParams = function(weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParams"])(weights);
    };
    return SsdMobilenetv1;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=SsdMobilenetv1.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceDetectionNet",
    ()=>FaceDetectionNet,
    "createFaceDetectionNet",
    ()=>createFaceDetectionNet,
    "createSsdMobilenetv1",
    ()=>createSsdMobilenetv1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1Options.js [app-client] (ecmascript)");
;
;
;
;
function createSsdMobilenetv1(weights) {
    var net = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1"]();
    net.extractWeights(weights);
    return net;
}
function createFaceDetectionNet(weights) {
    return createSsdMobilenetv1(weights);
}
// alias for backward compatibily
var FaceDetectionNet = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(FaceDetectionNet, _super);
    function FaceDetectionNet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FaceDetectionNet;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1"]);
;
 //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/const.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOX_ANCHORS",
    ()=>BOX_ANCHORS,
    "BOX_ANCHORS_SEPARABLE",
    ()=>BOX_ANCHORS_SEPARABLE,
    "DEFAULT_MODEL_NAME",
    ()=>DEFAULT_MODEL_NAME,
    "DEFAULT_MODEL_NAME_SEPARABLE_CONV",
    ()=>DEFAULT_MODEL_NAME_SEPARABLE_CONV,
    "IOU_THRESHOLD",
    ()=>IOU_THRESHOLD,
    "MEAN_RGB_SEPARABLE",
    ()=>MEAN_RGB_SEPARABLE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
;
var IOU_THRESHOLD = 0.4;
var BOX_ANCHORS = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](0.738768, 0.874946),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](2.42204, 2.65704),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](4.30971, 7.04493),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](10.246, 4.59428),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](12.6868, 11.8741)
];
var BOX_ANCHORS_SEPARABLE = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](1.603231, 2.094468),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](6.041143, 7.080126),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](2.882459, 3.518061),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](4.266906, 5.178857),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](9.041765, 10.66308)
];
var MEAN_RGB_SEPARABLE = [
    117.001,
    114.697,
    97.404
];
var DEFAULT_MODEL_NAME = 'tiny_yolov2_model';
var DEFAULT_MODEL_NAME_SEPARABLE_CONV = 'tiny_yolov2_separable_conv_model'; //# sourceMappingURL=const.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "validateConfig",
    ()=>validateConfig
]);
var isNumber = function(arg) {
    return typeof arg === 'number';
};
function validateConfig(config) {
    if (!config) {
        throw new Error("invalid config: " + config);
    }
    if (typeof config.withSeparableConvs !== 'boolean') {
        throw new Error("config.withSeparableConvs has to be a boolean, have: " + config.withSeparableConvs);
    }
    if (!isNumber(config.iouThreshold) || config.iouThreshold < 0 || config.iouThreshold > 1.0) {
        throw new Error("config.iouThreshold has to be a number between [0, 1], have: " + config.iouThreshold);
    }
    if (!Array.isArray(config.classes) || !config.classes.length || !config.classes.every(function(c) {
        return typeof c === 'string';
    })) {
        throw new Error("config.classes has to be an array class names: string[], have: " + JSON.stringify(config.classes));
    }
    if (!Array.isArray(config.anchors) || !config.anchors.length || !config.anchors.map(function(a) {
        return a || {};
    }).every(function(a) {
        return isNumber(a.x) && isNumber(a.y);
    })) {
        throw new Error("config.anchors has to be an array of { x: number, y: number }, have: " + JSON.stringify(config.anchors));
    }
    if (config.meanRgb && (!Array.isArray(config.meanRgb) || config.meanRgb.length !== 3 || !config.meanRgb.every(isNumber))) {
        throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: " + JSON.stringify(config.meanRgb));
    }
} //# sourceMappingURL=config.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/leaky.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "leaky",
    ()=>leaky
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function leaky(x) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var min = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](x, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](0.10000000149011612));
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](x, min)), min);
    //return tf.maximum(x, min)
    });
} //# sourceMappingURL=leaky.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/convWithBatchNorm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "convWithBatchNorm",
    ()=>convWithBatchNorm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$leaky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/leaky.js [app-client] (ecmascript)");
;
;
function convWithBatchNorm(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"](x, [
            [
                0,
                0
            ],
            [
                1,
                1
            ],
            [
                1,
                1
            ],
            [
                0,
                0
            ]
        ]);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["conv2d"](out, params.conv.filters, [
            1,
            1
        ], 'valid');
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](out, params.bn.sub);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](out, params.bn.truediv);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out, params.conv.bias);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$leaky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaky"])(out);
    });
} //# sourceMappingURL=convWithBatchNorm.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/depthwiseSeparableConv.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "depthwiseSeparableConv",
    ()=>depthwiseSeparableConv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$leaky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/leaky.js [app-client] (ecmascript)");
;
;
function depthwiseSeparableConv(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pad"](x, [
            [
                0,
                0
            ],
            [
                1,
                1
            ],
            [
                1,
                1
            ],
            [
                0,
                0
            ]
        ]);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["separableConv2d"](out, params.depthwise_filter, params.pointwise_filter, [
            1,
            1
        ], 'valid');
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](out, params.bias);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$leaky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaky"])(out);
    });
} //# sourceMappingURL=depthwiseSeparableConv.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/extractParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParams",
    ()=>extractParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
;
;
;
;
function extractorsFactory(extractWeights, paramMappings) {
    var extractConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractConvParamsFactory"])(extractWeights, paramMappings);
    function extractBatchNormParams(size, mappedPrefix) {
        var sub = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(size));
        var truediv = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(size));
        paramMappings.push({
            paramPath: mappedPrefix + "/sub"
        }, {
            paramPath: mappedPrefix + "/truediv"
        });
        return {
            sub: sub,
            truediv: truediv
        };
    }
    function extractConvWithBatchNormParams(channelsIn, channelsOut, mappedPrefix) {
        var conv = extractConvParams(channelsIn, channelsOut, 3, mappedPrefix + "/conv");
        var bn = extractBatchNormParams(channelsOut, mappedPrefix + "/bn");
        return {
            conv: conv,
            bn: bn
        };
    }
    var extractSeparableConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSeparableConvParamsFactory"])(extractWeights, paramMappings);
    return {
        extractConvParams: extractConvParams,
        extractConvWithBatchNormParams: extractConvWithBatchNormParams,
        extractSeparableConvParams: extractSeparableConvParams
    };
}
function extractParams(weights, config, boxEncodingSize, filterSizes) {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var paramMappings = [];
    var _b = extractorsFactory(extractWeights, paramMappings), extractConvParams = _b.extractConvParams, extractConvWithBatchNormParams = _b.extractConvWithBatchNormParams, extractSeparableConvParams = _b.extractSeparableConvParams;
    var params;
    if (config.withSeparableConvs) {
        var s0 = filterSizes[0], s1 = filterSizes[1], s2 = filterSizes[2], s3 = filterSizes[3], s4 = filterSizes[4], s5 = filterSizes[5], s6 = filterSizes[6], s7 = filterSizes[7], s8 = filterSizes[8];
        var conv0 = config.isFirstLayerConv2d ? extractConvParams(s0, s1, 3, 'conv0') : extractSeparableConvParams(s0, s1, 'conv0');
        var conv1 = extractSeparableConvParams(s1, s2, 'conv1');
        var conv2 = extractSeparableConvParams(s2, s3, 'conv2');
        var conv3 = extractSeparableConvParams(s3, s4, 'conv3');
        var conv4 = extractSeparableConvParams(s4, s5, 'conv4');
        var conv5 = extractSeparableConvParams(s5, s6, 'conv5');
        var conv6 = s7 ? extractSeparableConvParams(s6, s7, 'conv6') : undefined;
        var conv7 = s8 ? extractSeparableConvParams(s7, s8, 'conv7') : undefined;
        var conv8 = extractConvParams(s8 || s7 || s6, 5 * boxEncodingSize, 1, 'conv8');
        params = {
            conv0: conv0,
            conv1: conv1,
            conv2: conv2,
            conv3: conv3,
            conv4: conv4,
            conv5: conv5,
            conv6: conv6,
            conv7: conv7,
            conv8: conv8
        };
    } else {
        var s0 = filterSizes[0], s1 = filterSizes[1], s2 = filterSizes[2], s3 = filterSizes[3], s4 = filterSizes[4], s5 = filterSizes[5], s6 = filterSizes[6], s7 = filterSizes[7], s8 = filterSizes[8];
        var conv0 = extractConvWithBatchNormParams(s0, s1, 'conv0');
        var conv1 = extractConvWithBatchNormParams(s1, s2, 'conv1');
        var conv2 = extractConvWithBatchNormParams(s2, s3, 'conv2');
        var conv3 = extractConvWithBatchNormParams(s3, s4, 'conv3');
        var conv4 = extractConvWithBatchNormParams(s4, s5, 'conv4');
        var conv5 = extractConvWithBatchNormParams(s5, s6, 'conv5');
        var conv6 = extractConvWithBatchNormParams(s6, s7, 'conv6');
        var conv7 = extractConvWithBatchNormParams(s7, s8, 'conv7');
        var conv8 = extractConvParams(s8, 5 * boxEncodingSize, 1, 'conv8');
        params = {
            conv0: conv0,
            conv1: conv1,
            conv2: conv2,
            conv3: conv3,
            conv4: conv4,
            conv5: conv5,
            conv6: conv6,
            conv7: conv7,
            conv8: conv8
        };
    }
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParams.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/extractParamsFromWeigthMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMap",
    ()=>extractParamsFromWeigthMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractSeparableConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
;
;
;
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightEntryFactory"])(weightMap, paramMappings);
    function extractBatchNormParams(prefix) {
        var sub = extractWeightEntry(prefix + "/sub", 1);
        var truediv = extractWeightEntry(prefix + "/truediv", 1);
        return {
            sub: sub,
            truediv: truediv
        };
    }
    function extractConvParams(prefix) {
        var filters = extractWeightEntry(prefix + "/filters", 4);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return {
            filters: filters,
            bias: bias
        };
    }
    function extractConvWithBatchNormParams(prefix) {
        var conv = extractConvParams(prefix + "/conv");
        var bn = extractBatchNormParams(prefix + "/bn");
        return {
            conv: conv,
            bn: bn
        };
    }
    var extractSeparableConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractSeparableConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSeparableConvParamsFactory"])(extractWeightEntry);
    return {
        extractConvParams: extractConvParams,
        extractConvWithBatchNormParams: extractConvWithBatchNormParams,
        extractSeparableConvParams: extractSeparableConvParams
    };
}
function extractParamsFromWeigthMap(weightMap, config) {
    var paramMappings = [];
    var _a = extractorsFactory(weightMap, paramMappings), extractConvParams = _a.extractConvParams, extractConvWithBatchNormParams = _a.extractConvWithBatchNormParams, extractSeparableConvParams = _a.extractSeparableConvParams;
    var params;
    if (config.withSeparableConvs) {
        var numFilters = config.filterSizes && config.filterSizes.length || 9;
        params = {
            conv0: config.isFirstLayerConv2d ? extractConvParams('conv0') : extractSeparableConvParams('conv0'),
            conv1: extractSeparableConvParams('conv1'),
            conv2: extractSeparableConvParams('conv2'),
            conv3: extractSeparableConvParams('conv3'),
            conv4: extractSeparableConvParams('conv4'),
            conv5: extractSeparableConvParams('conv5'),
            conv6: numFilters > 7 ? extractSeparableConvParams('conv6') : undefined,
            conv7: numFilters > 8 ? extractSeparableConvParams('conv7') : undefined,
            conv8: extractConvParams('conv8')
        };
    } else {
        params = {
            conv0: extractConvWithBatchNormParams('conv0'),
            conv1: extractConvWithBatchNormParams('conv1'),
            conv2: extractConvWithBatchNormParams('conv2'),
            conv3: extractConvWithBatchNormParams('conv3'),
            conv4: extractConvWithBatchNormParams('conv4'),
            conv5: extractConvWithBatchNormParams('conv5'),
            conv6: extractConvWithBatchNormParams('conv6'),
            conv7: extractConvWithBatchNormParams('conv7'),
            conv8: extractConvParams('conv8')
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: params,
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Options.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TinyYolov2Options",
    ()=>TinyYolov2Options,
    "TinyYolov2SizeType",
    ()=>TinyYolov2SizeType
]);
var TinyYolov2SizeType;
(function(TinyYolov2SizeType) {
    TinyYolov2SizeType[TinyYolov2SizeType["XS"] = 224] = "XS";
    TinyYolov2SizeType[TinyYolov2SizeType["SM"] = 320] = "SM";
    TinyYolov2SizeType[TinyYolov2SizeType["MD"] = 416] = "MD";
    TinyYolov2SizeType[TinyYolov2SizeType["LG"] = 608] = "LG";
})(TinyYolov2SizeType || (TinyYolov2SizeType = {}));
var TinyYolov2Options = function() {
    function TinyYolov2Options(_a) {
        var _b = _a === void 0 ? {} : _a, inputSize = _b.inputSize, scoreThreshold = _b.scoreThreshold;
        this._name = 'TinyYolov2Options';
        this._inputSize = inputSize || 416;
        this._scoreThreshold = scoreThreshold || 0.5;
        if (typeof this._inputSize !== 'number' || this._inputSize % 32 !== 0) {
            throw new Error(this._name + " - expected inputSize to be a number divisible by 32");
        }
        if (typeof this._scoreThreshold !== 'number' || this._scoreThreshold <= 0 || this._scoreThreshold >= 1) {
            throw new Error(this._name + " - expected scoreThreshold to be a number between 0 and 1");
        }
    }
    Object.defineProperty(TinyYolov2Options.prototype, "inputSize", {
        get: function() {
            return this._inputSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyYolov2Options.prototype, "scoreThreshold", {
        get: function() {
            return this._scoreThreshold;
        },
        enumerable: true,
        configurable: true
    });
    return TinyYolov2Options;
}();
;
 //# sourceMappingURL=TinyYolov2Options.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Base.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TinyYolov2Base",
    ()=>TinyYolov2Base
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$BoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/BoundingBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$ObjectDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/ObjectDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/convLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/nonMaxSuppression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/convWithBatchNorm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/depthwiseSeparableConv.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/extractParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/extractParamsFromWeigthMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$leaky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/leaky.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Options.js [app-client] (ecmascript)");
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
;
;
;
var TinyYolov2Base = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TinyYolov2Base, _super);
    function TinyYolov2Base(config) {
        var _this = _super.call(this, 'TinyYolov2') || this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateConfig"])(config);
        _this._config = config;
        return _this;
    }
    Object.defineProperty(TinyYolov2Base.prototype, "config", {
        get: function() {
            return this._config;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyYolov2Base.prototype, "withClassScores", {
        get: function() {
            return this.config.withClassScores || this.config.classes.length > 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyYolov2Base.prototype, "boxEncodingSize", {
        get: function() {
            return 5 + (this.withClassScores ? this.config.classes.length : 0);
        },
        enumerable: true,
        configurable: true
    });
    TinyYolov2Base.prototype.runTinyYolov2 = function(x, params) {
        var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convWithBatchNorm"])(x, params.conv0);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convWithBatchNorm"])(out, params.conv1);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convWithBatchNorm"])(out, params.conv2);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convWithBatchNorm"])(out, params.conv3);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convWithBatchNorm"])(out, params.conv4);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convWithBatchNorm"])(out, params.conv5);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            1,
            1
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convWithBatchNorm"])(out, params.conv6);
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$convWithBatchNorm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convWithBatchNorm"])(out, params.conv7);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(out, params.conv8, 'valid', false);
    };
    TinyYolov2Base.prototype.runMobilenet = function(x, params) {
        var out = this.config.isFirstLayerConv2d ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$leaky$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leaky"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(x, params.conv0, 'valid', false)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(x, params.conv0);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.conv1);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.conv2);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.conv3);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.conv4);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.conv5);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            1,
            1
        ], 'same');
        out = params.conv6 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.conv6) : out;
        out = params.conv7 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$depthwiseSeparableConv$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["depthwiseSeparableConv"])(out, params.conv7) : out;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(out, params.conv8, 'valid', false);
    };
    TinyYolov2Base.prototype.forwardInput = function(input, inputSize) {
        var _this = this;
        var params = this.params;
        if (!params) {
            throw new Error('TinyYolov2 - load model before inference');
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var batchTensor = input.toBatchTensor(inputSize, false).toFloat();
            batchTensor = _this.config.meanRgb ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(batchTensor, _this.config.meanRgb) : batchTensor;
            batchTensor = batchTensor.div(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](256));
            return _this.config.withSeparableConvs ? _this.runMobilenet(batchTensor, params) : _this.runTinyYolov2(batchTensor, params);
        });
    };
    TinyYolov2Base.prototype.forward = function(input, inputSize) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            4 /*yield*/ ,
                            _a.apply(this, [
                                _b.sent(),
                                inputSize
                            ])
                        ];
                    case 2:
                        return [
                            2 /*return*/ ,
                            _b.sent()
                        ];
                }
            });
        });
    };
    TinyYolov2Base.prototype.detect = function(input, forwardParams) {
        if (forwardParams === void 0) {
            forwardParams = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, inputSize, scoreThreshold, netInput, out, out0, inputDimensions, results, boxes, scores, classScores, classNames, indices, detections;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyYolov2Options"](forwardParams), inputSize = _a.inputSize, scoreThreshold = _a.scoreThreshold;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        netInput = _b.sent();
                        return [
                            4 /*yield*/ ,
                            this.forwardInput(netInput, inputSize)
                        ];
                    case 2:
                        out = _b.sent();
                        out0 = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](out)[0].expandDims();
                        });
                        inputDimensions = {
                            width: netInput.getInputWidth(0),
                            height: netInput.getInputHeight(0)
                        };
                        return [
                            4 /*yield*/ ,
                            this.extractBoxes(out0, netInput.getReshapedInputDimensions(0), scoreThreshold)
                        ];
                    case 3:
                        results = _b.sent();
                        out.dispose();
                        out0.dispose();
                        boxes = results.map(function(res) {
                            return res.box;
                        });
                        scores = results.map(function(res) {
                            return res.score;
                        });
                        classScores = results.map(function(res) {
                            return res.classScore;
                        });
                        classNames = results.map(function(res) {
                            return _this.config.classes[res.label];
                        });
                        indices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppression"])(boxes.map(function(box) {
                            return box.rescale(inputSize);
                        }), scores, this.config.iouThreshold, true);
                        detections = indices.map(function(idx) {
                            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$ObjectDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ObjectDetection"](scores[idx], classScores[idx], classNames[idx], boxes[idx], inputDimensions);
                        });
                        return [
                            2 /*return*/ ,
                            detections
                        ];
                }
            });
        });
    };
    TinyYolov2Base.prototype.getDefaultModelName = function() {
        return '';
    };
    TinyYolov2Base.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMap"])(weightMap, this.config);
    };
    TinyYolov2Base.prototype.extractParams = function(weights) {
        var filterSizes = this.config.filterSizes || TinyYolov2Base.DEFAULT_FILTER_SIZES;
        var numFilters = filterSizes ? filterSizes.length : undefined;
        if (numFilters !== 7 && numFilters !== 8 && numFilters !== 9) {
            throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found " + numFilters + " filterSizes in config");
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParams"])(weights, this.config, this.boxEncodingSize, filterSizes);
    };
    TinyYolov2Base.prototype.extractBoxes = function(outputTensor, inputBlobDimensions, scoreThreshold) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var width, height, inputSize, correctionFactorX, correctionFactorY, numCells, numBoxes, _a, boxesTensor, scoresTensor, classScoresTensor, results, scoresData, boxesData, row, col, anchor, score, ctX, ctY, width_1, height_1, x, y, pos, _b, classScore, label, _c;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_d) {
                switch(_d.label){
                    case 0:
                        width = inputBlobDimensions.width, height = inputBlobDimensions.height;
                        inputSize = Math.max(width, height);
                        correctionFactorX = inputSize / width;
                        correctionFactorY = inputSize / height;
                        numCells = outputTensor.shape[1];
                        numBoxes = this.config.anchors.length;
                        _a = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
                            var reshaped = outputTensor.reshape([
                                numCells,
                                numCells,
                                numBoxes,
                                _this.boxEncodingSize
                            ]);
                            var boxes = reshaped.slice([
                                0,
                                0,
                                0,
                                0
                            ], [
                                numCells,
                                numCells,
                                numBoxes,
                                4
                            ]);
                            var scores = reshaped.slice([
                                0,
                                0,
                                0,
                                4
                            ], [
                                numCells,
                                numCells,
                                numBoxes,
                                1
                            ]);
                            var classScores = _this.withClassScores ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softmax"](reshaped.slice([
                                0,
                                0,
                                0,
                                5
                            ], [
                                numCells,
                                numCells,
                                numBoxes,
                                _this.config.classes.length
                            ]), 3) : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](0);
                            return [
                                boxes,
                                scores,
                                classScores
                            ];
                        }), boxesTensor = _a[0], scoresTensor = _a[1], classScoresTensor = _a[2];
                        results = [];
                        return [
                            4 /*yield*/ ,
                            scoresTensor.array()
                        ];
                    case 1:
                        scoresData = _d.sent();
                        return [
                            4 /*yield*/ ,
                            boxesTensor.array()
                        ];
                    case 2:
                        boxesData = _d.sent();
                        row = 0;
                        _d.label = 3;
                    case 3:
                        if (!(row < numCells)) return [
                            3 /*break*/ ,
                            12
                        ];
                        col = 0;
                        _d.label = 4;
                    case 4:
                        if (!(col < numCells)) return [
                            3 /*break*/ ,
                            11
                        ];
                        anchor = 0;
                        _d.label = 5;
                    case 5:
                        if (!(anchor < numBoxes)) return [
                            3 /*break*/ ,
                            10
                        ];
                        score = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sigmoid"])(scoresData[row][col][anchor][0]);
                        if (!(!scoreThreshold || score > scoreThreshold)) return [
                            3 /*break*/ ,
                            9
                        ];
                        ctX = (col + (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sigmoid"])(boxesData[row][col][anchor][0])) / numCells * correctionFactorX;
                        ctY = (row + (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["sigmoid"])(boxesData[row][col][anchor][1])) / numCells * correctionFactorY;
                        width_1 = Math.exp(boxesData[row][col][anchor][2]) * this.config.anchors[anchor].x / numCells * correctionFactorX;
                        height_1 = Math.exp(boxesData[row][col][anchor][3]) * this.config.anchors[anchor].y / numCells * correctionFactorY;
                        x = ctX - width_1 / 2;
                        y = ctY - height_1 / 2;
                        pos = {
                            row: row,
                            col: col,
                            anchor: anchor
                        };
                        if (!this.withClassScores) return [
                            3 /*break*/ ,
                            7
                        ];
                        return [
                            4 /*yield*/ ,
                            this.extractPredictedClass(classScoresTensor, pos)
                        ];
                    case 6:
                        _c = _d.sent();
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 7:
                        _c = {
                            classScore: 1,
                            label: 0
                        };
                        _d.label = 8;
                    case 8:
                        _b = _c, classScore = _b.classScore, label = _b.label;
                        results.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({
                            box: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$BoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"](x, y, x + width_1, y + height_1),
                            score: score,
                            classScore: score * classScore,
                            label: label
                        }, pos));
                        _d.label = 9;
                    case 9:
                        anchor++;
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 10:
                        col++;
                        return [
                            3 /*break*/ ,
                            4
                        ];
                    case 11:
                        row++;
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 12:
                        boxesTensor.dispose();
                        scoresTensor.dispose();
                        classScoresTensor.dispose();
                        return [
                            2 /*return*/ ,
                            results
                        ];
                }
            });
        });
    };
    TinyYolov2Base.prototype.extractPredictedClass = function(classesTensor, pos) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var row, col, anchor, classesData;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        row = pos.row, col = pos.col, anchor = pos.anchor;
                        return [
                            4 /*yield*/ ,
                            classesTensor.array()
                        ];
                    case 1:
                        classesData = _a.sent();
                        return [
                            2 /*return*/ ,
                            Array(this.config.classes.length).fill(0).map(function(_, i) {
                                return classesData[row][col][anchor][i];
                            }).map(function(classScore, label) {
                                return {
                                    classScore: classScore,
                                    label: label
                                };
                            }).reduce(function(max, curr) {
                                return max.classScore > curr.classScore ? max : curr;
                            })
                        ];
                }
            });
        });
    };
    TinyYolov2Base.DEFAULT_FILTER_SIZES = [
        3,
        16,
        32,
        64,
        128,
        256,
        512,
        1024,
        1024
    ];
    return TinyYolov2Base;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=TinyYolov2Base.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TinyYolov2",
    ()=>TinyYolov2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/const.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Base.js [app-client] (ecmascript)");
;
;
;
;
var TinyYolov2 = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TinyYolov2, _super);
    function TinyYolov2(withSeparableConvs) {
        if (withSeparableConvs === void 0) {
            withSeparableConvs = true;
        }
        var _this = this;
        var config = Object.assign({}, {
            withSeparableConvs: withSeparableConvs,
            iouThreshold: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOU_THRESHOLD"],
            classes: [
                'face'
            ]
        }, withSeparableConvs ? {
            anchors: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOX_ANCHORS_SEPARABLE"],
            meanRgb: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEAN_RGB_SEPARABLE"]
        } : {
            anchors: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOX_ANCHORS"],
            withClassScores: true
        });
        _this = _super.call(this, config) || this;
        return _this;
    }
    Object.defineProperty(TinyYolov2.prototype, "withSeparableConvs", {
        get: function() {
            return this.config.withSeparableConvs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TinyYolov2.prototype, "anchors", {
        get: function() {
            return this.config.anchors;
        },
        enumerable: true,
        configurable: true
    });
    TinyYolov2.prototype.locateFaces = function(input, forwardParams) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var objectDetections;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.detect(input, forwardParams)
                        ];
                    case 1:
                        objectDetections = _a.sent();
                        return [
                            2 /*return*/ ,
                            objectDetections.map(function(det) {
                                return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"](det.score, det.relativeBox, {
                                    width: det.imageWidth,
                                    height: det.imageHeight
                                });
                            })
                        ];
                }
            });
        });
    };
    TinyYolov2.prototype.getDefaultModelName = function() {
        return this.withSeparableConvs ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MODEL_NAME_SEPARABLE_CONV"] : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_MODEL_NAME"];
    };
    TinyYolov2.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
    };
    return TinyYolov2;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyYolov2Base"]);
;
 //# sourceMappingURL=TinyYolov2.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTinyYolov2",
    ()=>createTinyYolov2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/config.js [app-client] (ecmascript)");
;
;
;
;
function createTinyYolov2(weights, withSeparableConvs) {
    if (withSeparableConvs === void 0) {
        withSeparableConvs = true;
    }
    var net = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyYolov2"](withSeparableConvs);
    net.extractWeights(weights);
    return net;
} //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetectorOptions.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TinyFaceDetectorOptions",
    ()=>TinyFaceDetectorOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Options.js [app-client] (ecmascript)");
;
;
var TinyFaceDetectorOptions = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TinyFaceDetectorOptions, _super);
    function TinyFaceDetectorOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._name = 'TinyFaceDetectorOptions';
        return _this;
    }
    return TinyFaceDetectorOptions;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyYolov2Options"]);
;
 //# sourceMappingURL=TinyFaceDetectorOptions.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComposableTask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComposableTask",
    ()=>ComposableTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
;
var ComposableTask = function() {
    function ComposableTask() {}
    ComposableTask.prototype.then = function(onfulfilled) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = onfulfilled;
                        return [
                            4 /*yield*/ ,
                            this.run()
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(void 0, [
                                _b.sent()
                            ])
                        ];
                }
            });
        });
    };
    ComposableTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                throw new Error('ComposableTask - run is not implemented');
            });
        });
    };
    return ComposableTask;
}();
;
 //# sourceMappingURL=ComposableTask.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/extractFacesAndComputeResults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractAllFacesAndComputeResults",
    ()=>extractAllFacesAndComputeResults,
    "extractSingleFaceAndComputeResult",
    ()=>extractSingleFaceAndComputeResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/extractFaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaceTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/extractFaceTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceLandmarks.js [app-client] (ecmascript)");
;
;
;
;
function extractAllFacesAndComputeResults(parentResults, input, computeResults, extractedFaces, getRectForAlignment) {
    if (getRectForAlignment === void 0) {
        getRectForAlignment = function(_a) {
            var alignedRect = _a.alignedRect;
            return alignedRect;
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var faceBoxes, faces, _a, _b, results;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
            switch(_c.label){
                case 0:
                    faceBoxes = parentResults.map(function(parentResult) {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceLandmarks"])(parentResult) ? getRectForAlignment(parentResult) : parentResult.detection;
                    });
                    _a = extractedFaces;
                    if (_a) return [
                        3 /*break*/ ,
                        5
                    ];
                    if (!(input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"])) return [
                        3 /*break*/ ,
                        2
                    ];
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaceTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaceTensors"])(input, faceBoxes)
                    ];
                case 1:
                    _b = _c.sent();
                    return [
                        3 /*break*/ ,
                        4
                    ];
                case 2:
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaces"])(input, faceBoxes)
                    ];
                case 3:
                    _b = _c.sent();
                    _c.label = 4;
                case 4:
                    _a = _b;
                    _c.label = 5;
                case 5:
                    faces = _a;
                    return [
                        4 /*yield*/ ,
                        computeResults(faces)
                    ];
                case 6:
                    results = _c.sent();
                    faces.forEach(function(f) {
                        return f instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"] && f.dispose();
                    });
                    return [
                        2 /*return*/ ,
                        results
                    ];
            }
        });
    });
}
function extractSingleFaceAndComputeResult(parentResult, input, computeResult, extractedFaces, getRectForAlignment) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var _this = this;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            return [
                2 /*return*/ ,
                extractAllFacesAndComputeResults([
                    parentResult
                ], input, function(faces) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                            return [
                                2 /*return*/ ,
                                computeResult(faces[0])
                            ];
                        });
                    });
                }, extractedFaces, getRectForAlignment)
            ];
        });
    });
} //# sourceMappingURL=extractFacesAndComputeResults.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/bgrToRgbTensor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bgrToRgbTensor",
    ()=>bgrToRgbTensor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function bgrToRgbTensor(tensor) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stack"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](tensor, 3).reverse(), 3);
    });
} //# sourceMappingURL=bgrToRgbTensor.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CELL_SIZE",
    ()=>CELL_SIZE,
    "CELL_STRIDE",
    ()=>CELL_STRIDE
]);
var CELL_STRIDE = 2;
var CELL_SIZE = 12; //# sourceMappingURL=config.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/extractParams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParams",
    ()=>extractParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractConvParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractFCParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractFCParamsFactory.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightsFactory.js [app-client] (ecmascript)");
;
;
;
function extractorsFactory(extractWeights, paramMappings) {
    var extractConvParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractConvParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractConvParamsFactory"])(extractWeights, paramMappings);
    var extractFCParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractFCParamsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFCParamsFactory"])(extractWeights, paramMappings);
    function extractPReluParams(size, paramPath) {
        var alpha = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor1d"](extractWeights(size));
        paramMappings.push({
            paramPath: paramPath
        });
        return alpha;
    }
    function extractSharedParams(numFilters, mappedPrefix, isRnet) {
        if (isRnet === void 0) {
            isRnet = false;
        }
        var conv1 = extractConvParams(numFilters[0], numFilters[1], 3, mappedPrefix + "/conv1");
        var prelu1_alpha = extractPReluParams(numFilters[1], mappedPrefix + "/prelu1_alpha");
        var conv2 = extractConvParams(numFilters[1], numFilters[2], 3, mappedPrefix + "/conv2");
        var prelu2_alpha = extractPReluParams(numFilters[2], mappedPrefix + "/prelu2_alpha");
        var conv3 = extractConvParams(numFilters[2], numFilters[3], isRnet ? 2 : 3, mappedPrefix + "/conv3");
        var prelu3_alpha = extractPReluParams(numFilters[3], mappedPrefix + "/prelu3_alpha");
        return {
            conv1: conv1,
            prelu1_alpha: prelu1_alpha,
            conv2: conv2,
            prelu2_alpha: prelu2_alpha,
            conv3: conv3,
            prelu3_alpha: prelu3_alpha
        };
    }
    function extractPNetParams() {
        var sharedParams = extractSharedParams([
            3,
            10,
            16,
            32
        ], 'pnet');
        var conv4_1 = extractConvParams(32, 2, 1, 'pnet/conv4_1');
        var conv4_2 = extractConvParams(32, 4, 1, 'pnet/conv4_2');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, sharedParams), {
            conv4_1: conv4_1,
            conv4_2: conv4_2
        });
    }
    function extractRNetParams() {
        var sharedParams = extractSharedParams([
            3,
            28,
            48,
            64
        ], 'rnet', true);
        var fc1 = extractFCParams(576, 128, 'rnet/fc1');
        var prelu4_alpha = extractPReluParams(128, 'rnet/prelu4_alpha');
        var fc2_1 = extractFCParams(128, 2, 'rnet/fc2_1');
        var fc2_2 = extractFCParams(128, 4, 'rnet/fc2_2');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, sharedParams), {
            fc1: fc1,
            prelu4_alpha: prelu4_alpha,
            fc2_1: fc2_1,
            fc2_2: fc2_2
        });
    }
    function extractONetParams() {
        var sharedParams = extractSharedParams([
            3,
            32,
            64,
            64
        ], 'onet');
        var conv4 = extractConvParams(64, 128, 2, 'onet/conv4');
        var prelu4_alpha = extractPReluParams(128, 'onet/prelu4_alpha');
        var fc1 = extractFCParams(1152, 256, 'onet/fc1');
        var prelu5_alpha = extractPReluParams(256, 'onet/prelu5_alpha');
        var fc2_1 = extractFCParams(256, 2, 'onet/fc2_1');
        var fc2_2 = extractFCParams(256, 4, 'onet/fc2_2');
        var fc2_3 = extractFCParams(256, 10, 'onet/fc2_3');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, sharedParams), {
            conv4: conv4,
            prelu4_alpha: prelu4_alpha,
            fc1: fc1,
            prelu5_alpha: prelu5_alpha,
            fc2_1: fc2_1,
            fc2_2: fc2_2,
            fc2_3: fc2_3
        });
    }
    return {
        extractPNetParams: extractPNetParams,
        extractRNetParams: extractRNetParams,
        extractONetParams: extractONetParams
    };
}
function extractParams(weights) {
    var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightsFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightsFactory"])(weights), extractWeights = _a.extractWeights, getRemainingWeights = _a.getRemainingWeights;
    var paramMappings = [];
    var _b = extractorsFactory(extractWeights, paramMappings), extractPNetParams = _b.extractPNetParams, extractRNetParams = _b.extractRNetParams, extractONetParams = _b.extractONetParams;
    var pnet = extractPNetParams();
    var rnet = extractRNetParams();
    var onet = extractONetParams();
    if (getRemainingWeights().length !== 0) {
        throw new Error("weights remaing after extract: " + getRemainingWeights().length);
    }
    return {
        params: {
            pnet: pnet,
            rnet: rnet,
            onet: onet
        },
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParams.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/extractParamsFromWeigthMap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractParamsFromWeigthMap",
    ()=>extractParamsFromWeigthMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/disposeUnusedWeightTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/extractWeightEntryFactory.js [app-client] (ecmascript)");
;
;
function extractorsFactory(weightMap, paramMappings) {
    var extractWeightEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$extractWeightEntryFactory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractWeightEntryFactory"])(weightMap, paramMappings);
    function extractConvParams(prefix) {
        var filters = extractWeightEntry(prefix + "/weights", 4, prefix + "/filters");
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return {
            filters: filters,
            bias: bias
        };
    }
    function extractFCParams(prefix) {
        var weights = extractWeightEntry(prefix + "/weights", 2);
        var bias = extractWeightEntry(prefix + "/bias", 1);
        return {
            weights: weights,
            bias: bias
        };
    }
    function extractPReluParams(paramPath) {
        return extractWeightEntry(paramPath, 1);
    }
    function extractSharedParams(prefix) {
        var conv1 = extractConvParams(prefix + "/conv1");
        var prelu1_alpha = extractPReluParams(prefix + "/prelu1_alpha");
        var conv2 = extractConvParams(prefix + "/conv2");
        var prelu2_alpha = extractPReluParams(prefix + "/prelu2_alpha");
        var conv3 = extractConvParams(prefix + "/conv3");
        var prelu3_alpha = extractPReluParams(prefix + "/prelu3_alpha");
        return {
            conv1: conv1,
            prelu1_alpha: prelu1_alpha,
            conv2: conv2,
            prelu2_alpha: prelu2_alpha,
            conv3: conv3,
            prelu3_alpha: prelu3_alpha
        };
    }
    function extractPNetParams() {
        var sharedParams = extractSharedParams('pnet');
        var conv4_1 = extractConvParams('pnet/conv4_1');
        var conv4_2 = extractConvParams('pnet/conv4_2');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, sharedParams), {
            conv4_1: conv4_1,
            conv4_2: conv4_2
        });
    }
    function extractRNetParams() {
        var sharedParams = extractSharedParams('rnet');
        var fc1 = extractFCParams('rnet/fc1');
        var prelu4_alpha = extractPReluParams('rnet/prelu4_alpha');
        var fc2_1 = extractFCParams('rnet/fc2_1');
        var fc2_2 = extractFCParams('rnet/fc2_2');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, sharedParams), {
            fc1: fc1,
            prelu4_alpha: prelu4_alpha,
            fc2_1: fc2_1,
            fc2_2: fc2_2
        });
    }
    function extractONetParams() {
        var sharedParams = extractSharedParams('onet');
        var conv4 = extractConvParams('onet/conv4');
        var prelu4_alpha = extractPReluParams('onet/prelu4_alpha');
        var fc1 = extractFCParams('onet/fc1');
        var prelu5_alpha = extractPReluParams('onet/prelu5_alpha');
        var fc2_1 = extractFCParams('onet/fc2_1');
        var fc2_2 = extractFCParams('onet/fc2_2');
        var fc2_3 = extractFCParams('onet/fc2_3');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__assign"])({}, sharedParams), {
            conv4: conv4,
            prelu4_alpha: prelu4_alpha,
            fc1: fc1,
            prelu5_alpha: prelu5_alpha,
            fc2_1: fc2_1,
            fc2_2: fc2_2,
            fc2_3: fc2_3
        });
    }
    return {
        extractPNetParams: extractPNetParams,
        extractRNetParams: extractRNetParams,
        extractONetParams: extractONetParams
    };
}
function extractParamsFromWeigthMap(weightMap) {
    var paramMappings = [];
    var _a = extractorsFactory(weightMap, paramMappings), extractPNetParams = _a.extractPNetParams, extractRNetParams = _a.extractRNetParams, extractONetParams = _a.extractONetParams;
    var pnet = extractPNetParams();
    var rnet = extractRNetParams();
    var onet = extractONetParams();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$disposeUnusedWeightTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["disposeUnusedWeightTensors"])(weightMap, paramMappings);
    return {
        params: {
            pnet: pnet,
            rnet: rnet,
            onet: onet
        },
        paramMappings: paramMappings
    };
} //# sourceMappingURL=extractParamsFromWeigthMap.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/getSizesForScale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSizesForScale",
    ()=>getSizesForScale
]);
function getSizesForScale(scale, _a) {
    var height = _a[0], width = _a[1];
    return {
        height: Math.floor(height * scale),
        width: Math.floor(width * scale)
    };
} //# sourceMappingURL=getSizesForScale.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/pyramidDown.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "pyramidDown",
    ()=>pyramidDown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/config.js [app-client] (ecmascript)");
;
function pyramidDown(minFaceSize, scaleFactor, dims) {
    var height = dims[0], width = dims[1];
    var m = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SIZE"] / minFaceSize;
    var scales = [];
    var minLayer = Math.min(height, width) * m;
    var exp = 0;
    while(minLayer >= 12){
        scales.push(m * Math.pow(scaleFactor, exp));
        minLayer = minLayer * scaleFactor;
        exp += 1;
    }
    return scales;
} //# sourceMappingURL=pyramidDown.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnBox.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MtcnnBox",
    ()=>MtcnnBox
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Box.js [app-client] (ecmascript)");
;
;
var MtcnnBox = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(MtcnnBox, _super);
    function MtcnnBox(left, top, right, bottom) {
        return _super.call(this, {
            left: left,
            top: top,
            right: right,
            bottom: bottom
        }, true) || this;
    }
    return MtcnnBox;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"]);
;
 //# sourceMappingURL=MtcnnBox.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/normalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function normalize(x) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](x, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](127.5)), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scalar"](0.0078125));
    });
} //# sourceMappingURL=normalize.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/prelu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prelu",
    ()=>prelu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
;
function prelu(x, alpha) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["add"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](x), __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mul"](alpha, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neg"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["relu"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["neg"](x)))));
    });
} //# sourceMappingURL=prelu.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/sharedLayers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sharedLayer",
    ()=>sharedLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/convLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/prelu.js [app-client] (ecmascript)");
;
;
;
function sharedLayer(x, params, isPnet) {
    if (isPnet === void 0) {
        isPnet = false;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(x, params.conv1, 'valid');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prelu"])(out, params.prelu1_alpha);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, isPnet ? [
            2,
            2
        ] : [
            3,
            3
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(out, params.conv2, 'valid');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prelu"])(out, params.prelu2_alpha);
        out = isPnet ? out : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            3,
            3
        ], [
            2,
            2
        ], 'valid');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(out, params.conv3, 'valid');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prelu"])(out, params.prelu3_alpha);
        return out;
    });
} //# sourceMappingURL=sharedLayers.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/PNet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PNet",
    ()=>PNet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/convLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$sharedLayers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/sharedLayers.js [app-client] (ecmascript)");
;
;
;
function PNet(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$sharedLayers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sharedLayer"])(x, params, true);
        var conv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(out, params.conv4_1, 'valid');
        var max = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](conv, 3), 3);
        var prob = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softmax"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](conv, max), 3);
        var regions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(out, params.conv4_2, 'valid');
        return {
            prob: prob,
            regions: regions
        };
    });
} //# sourceMappingURL=PNet.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/stage1.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stage1",
    ()=>stage1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$BoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/BoundingBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/nonMaxSuppression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$getSizesForScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/getSizesForScale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$PNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/PNet.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
function rescaleAndNormalize(x, scale) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$getSizesForScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizesForScale"])(scale, x.shape.slice(1)), height = _a.height, width = _a.width;
        var resized = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["image"].resizeBilinear(x, [
            height,
            width
        ]);
        var normalized = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(resized);
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](normalized, [
            0,
            2,
            1,
            3
        ]);
    });
}
function extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold) {
    // TODO: fix this!, maybe better to use tf.gather here
    var indices = [];
    var scoresData = scoresTensor.arraySync();
    for(var y = 0; y < scoresTensor.shape[0]; y++){
        for(var x = 0; x < scoresTensor.shape[1]; x++){
            if (scoresData[y][x] >= scoreThreshold) {
                indices.push(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](x, y));
            }
        }
    }
    var boundingBoxes = indices.map(function(idx) {
        var cell = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$BoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"](Math.round((idx.y * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_STRIDE"] + 1) / scale), Math.round((idx.x * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_STRIDE"] + 1) / scale), Math.round((idx.y * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_STRIDE"] + __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SIZE"]) / scale), Math.round((idx.x * __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_STRIDE"] + __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SIZE"]) / scale));
        var score = scoresData[idx.y][idx.x];
        var regionsData = regionsTensor.arraySync();
        var region = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MtcnnBox"](regionsData[idx.y][idx.x][0], regionsData[idx.y][idx.x][1], regionsData[idx.y][idx.x][2], regionsData[idx.y][idx.x][3]);
        return {
            cell: cell,
            score: score,
            region: region
        };
    });
    return boundingBoxes;
}
function stage1(imgTensor, scales, scoreThreshold, params, stats) {
    stats.stage1 = [];
    var pnetOutputs = scales.map(function(scale) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
            var statsForScale = {
                scale: scale
            };
            var resized = rescaleAndNormalize(imgTensor, scale);
            var ts = Date.now();
            var _a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$PNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PNet"])(resized, params), prob = _a.prob, regions = _a.regions;
            statsForScale.pnet = Date.now() - ts;
            var scoresTensor = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](prob, 3)[1])[0];
            var regionsTensor = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](regions)[0];
            return {
                scoresTensor: scoresTensor,
                regionsTensor: regionsTensor,
                scale: scale,
                statsForScale: statsForScale
            };
        });
    });
    var boxesForScale = pnetOutputs.map(function(_a) {
        var scoresTensor = _a.scoresTensor, regionsTensor = _a.regionsTensor, scale = _a.scale, statsForScale = _a.statsForScale;
        var boundingBoxes = extractBoundingBoxes(scoresTensor, regionsTensor, scale, scoreThreshold);
        scoresTensor.dispose();
        regionsTensor.dispose();
        if (!boundingBoxes.length) {
            stats.stage1.push(statsForScale);
            return [];
        }
        var ts = Date.now();
        var indices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppression"])(boundingBoxes.map(function(bbox) {
            return bbox.cell;
        }), boundingBoxes.map(function(bbox) {
            return bbox.score;
        }), 0.5);
        statsForScale.nms = Date.now() - ts;
        statsForScale.numBoxes = indices.length;
        stats.stage1.push(statsForScale);
        return indices.map(function(boxIdx) {
            return boundingBoxes[boxIdx];
        });
    });
    var allBoxes = boxesForScale.reduce(function(all, boxes) {
        return all.concat(boxes);
    }, []);
    var finalBoxes = [];
    var finalScores = [];
    if (allBoxes.length > 0) {
        var ts = Date.now();
        var indices = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppression"])(allBoxes.map(function(bbox) {
            return bbox.cell;
        }), allBoxes.map(function(bbox) {
            return bbox.score;
        }), 0.7);
        stats.stage1_nms = Date.now() - ts;
        finalScores = indices.map(function(idx) {
            return allBoxes[idx].score;
        });
        finalBoxes = indices.map(function(idx) {
            return allBoxes[idx];
        }).map(function(_a) {
            var cell = _a.cell, region = _a.region;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$BoundingBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoundingBox"](cell.left + region.left * cell.width, cell.top + region.top * cell.height, cell.right + region.right * cell.width, cell.bottom + region.bottom * cell.height).toSquare().round();
        });
    }
    return {
        boxes: finalBoxes,
        scores: finalScores
    };
} //# sourceMappingURL=stage1.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/extractImagePatches.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractImagePatches",
    ()=>extractImagePatches
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/createCanvas.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/getContext2dOrThrow.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/normalize.js [app-client] (ecmascript)");
;
;
;
;
;
function extractImagePatches(img, boxes, _a) {
    var width = _a.width, height = _a.height;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var imgCtx, bitmaps, imagePatchesDatas;
        var _this = this;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
            switch(_b.label){
                case 0:
                    imgCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(img);
                    return [
                        4 /*yield*/ ,
                        Promise.all(boxes.map(function(box) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                                var _a, y, ey, x, ex, fromX, fromY, imgData;
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                                    _a = box.padAtBorders(img.height, img.width), y = _a.y, ey = _a.ey, x = _a.x, ex = _a.ex;
                                    fromX = x - 1;
                                    fromY = y - 1;
                                    imgData = imgCtx.getImageData(fromX, fromY, ex - fromX, ey - fromY);
                                    return [
                                        2 /*return*/ ,
                                        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["env"].isNodejs() ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCanvasFromMedia"])(imgData) : createImageBitmap(imgData)
                                    ];
                                });
                            });
                        }))
                    ];
                case 1:
                    bitmaps = _b.sent();
                    imagePatchesDatas = [];
                    bitmaps.forEach(function(bmp) {
                        var patch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$createCanvas$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCanvas"])({
                            width: width,
                            height: height
                        });
                        var patchCtx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$getContext2dOrThrow$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContext2dOrThrow"])(patch);
                        patchCtx.drawImage(bmp, 0, 0, width, height);
                        var data = patchCtx.getImageData(0, 0, width, height).data;
                        var currData = [];
                        // RGBA -> BGR
                        for(var i = 0; i < data.length; i += 4){
                            currData.push(data[i + 2]);
                            currData.push(data[i + 1]);
                            currData.push(data[i]);
                        }
                        imagePatchesDatas.push(currData);
                    });
                    return [
                        2 /*return*/ ,
                        imagePatchesDatas.map(function(data) {
                            var t = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
                                var imagePatchTensor = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transpose"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tensor4d"](data, [
                                    1,
                                    width,
                                    height,
                                    3
                                ]), [
                                    0,
                                    2,
                                    1,
                                    3
                                ]).toFloat();
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(imagePatchTensor);
                            });
                            return t;
                        })
                    ];
            }
        });
    });
} //# sourceMappingURL=extractImagePatches.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/RNet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RNet",
    ()=>RNet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/fullyConnectedLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/prelu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$sharedLayers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/sharedLayers.js [app-client] (ecmascript)");
;
;
;
;
function RNet(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var convOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$sharedLayers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sharedLayer"])(x, params);
        var vectorized = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](convOut, [
            convOut.shape[0],
            params.fc1.weights.shape[0]
        ]);
        var fc1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(vectorized, params.fc1);
        var prelu4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prelu"])(fc1, params.prelu4_alpha);
        var fc2_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(prelu4, params.fc2_1);
        var max = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](fc2_1, 1), 1);
        var prob = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softmax"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](fc2_1, max), 1);
        var regions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(prelu4, params.fc2_2);
        var scores = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](prob, 1)[1];
        return {
            scores: scores,
            regions: regions
        };
    });
} //# sourceMappingURL=RNet.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/stage2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stage2",
    ()=>stage2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/nonMaxSuppression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$extractImagePatches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/extractImagePatches.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$RNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/RNet.js [app-client] (ecmascript)");
;
;
;
;
;
;
function stage2(img, inputBoxes, scoreThreshold, params, stats) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var ts, rnetInputs, rnetOuts, scoresTensor, scores, _a, _b, indices, filteredBoxes, filteredScores, finalBoxes, finalScores, indicesNms, regions_1;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
            switch(_c.label){
                case 0:
                    ts = Date.now();
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$extractImagePatches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractImagePatches"])(img, inputBoxes, {
                            width: 24,
                            height: 24
                        })
                    ];
                case 1:
                    rnetInputs = _c.sent();
                    stats.stage2_extractImagePatches = Date.now() - ts;
                    ts = Date.now();
                    rnetOuts = rnetInputs.map(function(rnetInput) {
                        var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$RNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RNet"])(rnetInput, params);
                        rnetInput.dispose();
                        return out;
                    });
                    stats.stage2_rnet = Date.now() - ts;
                    scoresTensor = rnetOuts.length > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](rnetOuts.map(function(out) {
                        return out.scores;
                    })) : rnetOuts[0].scores;
                    _b = (_a = Array).from;
                    return [
                        4 /*yield*/ ,
                        scoresTensor.data()
                    ];
                case 2:
                    scores = _b.apply(_a, [
                        _c.sent()
                    ]);
                    scoresTensor.dispose();
                    indices = scores.map(function(score, idx) {
                        return {
                            score: score,
                            idx: idx
                        };
                    }).filter(function(c) {
                        return c.score > scoreThreshold;
                    }).map(function(_a) {
                        var idx = _a.idx;
                        return idx;
                    });
                    filteredBoxes = indices.map(function(idx) {
                        return inputBoxes[idx];
                    });
                    filteredScores = indices.map(function(idx) {
                        return scores[idx];
                    });
                    finalBoxes = [];
                    finalScores = [];
                    if (filteredBoxes.length > 0) {
                        ts = Date.now();
                        indicesNms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppression"])(filteredBoxes, filteredScores, 0.7);
                        stats.stage2_nms = Date.now() - ts;
                        regions_1 = indicesNms.map(function(idx) {
                            var regionsData = rnetOuts[indices[idx]].regions.arraySync();
                            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MtcnnBox"](regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
                        });
                        finalScores = indicesNms.map(function(idx) {
                            return filteredScores[idx];
                        });
                        finalBoxes = indicesNms.map(function(idx, i) {
                            return filteredBoxes[idx].calibrate(regions_1[i]);
                        });
                    }
                    rnetOuts.forEach(function(t) {
                        t.regions.dispose();
                        t.scores.dispose();
                    });
                    return [
                        2 /*return*/ ,
                        {
                            boxes: finalBoxes,
                            scores: finalScores
                        }
                    ];
            }
        });
    });
} //# sourceMappingURL=stage2.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/ONet.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ONet",
    ()=>ONet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/convLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/common/fullyConnectedLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/prelu.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$sharedLayers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/sharedLayers.js [app-client] (ecmascript)");
;
;
;
;
;
function ONet(x, params) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
        var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$sharedLayers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sharedLayer"])(x, params);
        out = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxPool"](out, [
            2,
            2
        ], [
            2,
            2
        ], 'same');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$convLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convLayer"])(out, params.conv4, 'valid');
        out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prelu"])(out, params.prelu4_alpha);
        var vectorized = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reshape"](out, [
            out.shape[0],
            params.fc1.weights.shape[0]
        ]);
        var fc1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(vectorized, params.fc1);
        var prelu5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$prelu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["prelu"])(fc1, params.prelu5_alpha);
        var fc2_1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(prelu5, params.fc2_1);
        var max = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["max"](fc2_1, 1), 1);
        var prob = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["softmax"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sub"](fc2_1, max), 1);
        var regions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(prelu5, params.fc2_2);
        var points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$common$2f$fullyConnectedLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fullyConnectedLayer"])(prelu5, params.fc2_3);
        var scores = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstack"](prob, 1)[1];
        return {
            scores: scores,
            regions: regions,
            points: points
        };
    });
} //# sourceMappingURL=ONet.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/stage3.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stage3",
    ()=>stage3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/nonMaxSuppression.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$extractImagePatches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/extractImagePatches.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnBox.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$ONet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/ONet.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function stage3(img, inputBoxes, scoreThreshold, params, stats) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        var ts, onetInputs, onetOuts, scoresTensor, scores, _a, _b, indices, filteredRegions, filteredBoxes, filteredScores, finalBoxes, finalScores, points, indicesNms;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
            switch(_c.label){
                case 0:
                    ts = Date.now();
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$extractImagePatches$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractImagePatches"])(img, inputBoxes, {
                            width: 48,
                            height: 48
                        })
                    ];
                case 1:
                    onetInputs = _c.sent();
                    stats.stage3_extractImagePatches = Date.now() - ts;
                    ts = Date.now();
                    onetOuts = onetInputs.map(function(onetInput) {
                        var out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$ONet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ONet"])(onetInput, params);
                        onetInput.dispose();
                        return out;
                    });
                    stats.stage3_onet = Date.now() - ts;
                    scoresTensor = onetOuts.length > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"](onetOuts.map(function(out) {
                        return out.scores;
                    })) : onetOuts[0].scores;
                    _b = (_a = Array).from;
                    return [
                        4 /*yield*/ ,
                        scoresTensor.data()
                    ];
                case 2:
                    scores = _b.apply(_a, [
                        _c.sent()
                    ]);
                    scoresTensor.dispose();
                    indices = scores.map(function(score, idx) {
                        return {
                            score: score,
                            idx: idx
                        };
                    }).filter(function(c) {
                        return c.score > scoreThreshold;
                    }).map(function(_a) {
                        var idx = _a.idx;
                        return idx;
                    });
                    filteredRegions = indices.map(function(idx) {
                        var regionsData = onetOuts[idx].regions.arraySync();
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnBox$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MtcnnBox"](regionsData[0][0], regionsData[0][1], regionsData[0][2], regionsData[0][3]);
                    });
                    filteredBoxes = indices.map(function(idx, i) {
                        return inputBoxes[idx].calibrate(filteredRegions[i]);
                    });
                    filteredScores = indices.map(function(idx) {
                        return scores[idx];
                    });
                    finalBoxes = [];
                    finalScores = [];
                    points = [];
                    if (filteredBoxes.length > 0) {
                        ts = Date.now();
                        indicesNms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$nonMaxSuppression$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nonMaxSuppression"])(filteredBoxes, filteredScores, 0.7, false);
                        stats.stage3_nms = Date.now() - ts;
                        finalBoxes = indicesNms.map(function(idx) {
                            return filteredBoxes[idx];
                        });
                        finalScores = indicesNms.map(function(idx) {
                            return filteredScores[idx];
                        });
                        points = indicesNms.map(function(idx, i) {
                            return Array(5).fill(0).map(function(_, ptIdx) {
                                var pointsData = onetOuts[idx].points.arraySync();
                                return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](pointsData[0][ptIdx] * (finalBoxes[i].width + 1) + finalBoxes[i].left, pointsData[0][ptIdx + 5] * (finalBoxes[i].height + 1) + finalBoxes[i].top);
                            });
                        });
                    }
                    onetOuts.forEach(function(t) {
                        t.regions.dispose();
                        t.scores.dispose();
                        t.points.dispose();
                    });
                    return [
                        2 /*return*/ ,
                        {
                            boxes: finalBoxes,
                            scores: finalScores,
                            points: points
                        }
                    ];
            }
        });
    });
} //# sourceMappingURL=stage3.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/Mtcnn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mtcnn",
    ()=>Mtcnn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Rect.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks5.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/toNetInput.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$bgrToRgbTensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/bgrToRgbTensor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/extractParams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/extractParamsFromWeigthMap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$getSizesForScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/getSizesForScale.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$pyramidDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/pyramidDown.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$stage1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/stage1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$stage2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/stage2.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$stage3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/stage3.js [app-client] (ecmascript)");
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
;
;
;
;
var Mtcnn = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(Mtcnn, _super);
    function Mtcnn() {
        return _super.call(this, 'Mtcnn') || this;
    }
    Mtcnn.prototype.load = function(weightsOrUrl) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                console.warn('mtcnn is deprecated and will be removed soon');
                return [
                    2 /*return*/ ,
                    _super.prototype.load.call(this, weightsOrUrl)
                ];
            });
        });
    };
    Mtcnn.prototype.loadFromDisk = function(filePath) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                console.warn('mtcnn is deprecated and will be removed soon');
                return [
                    2 /*return*/ ,
                    _super.prototype.loadFromDisk.call(this, filePath)
                ];
            });
        });
    };
    Mtcnn.prototype.forwardInput = function(input, forwardParams) {
        if (forwardParams === void 0) {
            forwardParams = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var params, inputCanvas, stats, tsTotal, imgTensor, onReturn, _a, height, width, _b, minFaceSize, scaleFactor, maxNumScales, scoreThresholds, scaleSteps, scales, ts, out1, out2, out3, results;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_c) {
                switch(_c.label){
                    case 0:
                        params = this.params;
                        if (!params) {
                            throw new Error('Mtcnn - load model before inference');
                        }
                        inputCanvas = input.canvases[0];
                        if (!inputCanvas) {
                            throw new Error('Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.');
                        }
                        stats = {};
                        tsTotal = Date.now();
                        imgTensor = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tidy"](function() {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$bgrToRgbTensor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bgrToRgbTensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["expandDims"](__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["browser"].fromPixels(inputCanvas)).toFloat());
                        });
                        onReturn = function(results) {
                            // dispose tensors on return
                            imgTensor.dispose();
                            stats.total = Date.now() - tsTotal;
                            return results;
                        };
                        _a = imgTensor.shape.slice(1), height = _a[0], width = _a[1];
                        _b = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MtcnnOptions"](forwardParams), minFaceSize = _b.minFaceSize, scaleFactor = _b.scaleFactor, maxNumScales = _b.maxNumScales, scoreThresholds = _b.scoreThresholds, scaleSteps = _b.scaleSteps;
                        scales = (scaleSteps || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$pyramidDown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pyramidDown"])(minFaceSize, scaleFactor, [
                            height,
                            width
                        ])).filter(function(scale) {
                            var sizes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$getSizesForScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizesForScale"])(scale, [
                                height,
                                width
                            ]);
                            return Math.min(sizes.width, sizes.height) > __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CELL_SIZE"];
                        }).slice(0, maxNumScales);
                        stats.scales = scales;
                        stats.pyramid = scales.map(function(scale) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$getSizesForScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSizesForScale"])(scale, [
                                height,
                                width
                            ]);
                        });
                        ts = Date.now();
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$stage1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage1"])(imgTensor, scales, scoreThresholds[0], params.pnet, stats)
                        ];
                    case 1:
                        out1 = _c.sent();
                        stats.total_stage1 = Date.now() - ts;
                        if (!out1.boxes.length) {
                            return [
                                2 /*return*/ ,
                                onReturn({
                                    results: [],
                                    stats: stats
                                })
                            ];
                        }
                        stats.stage2_numInputBoxes = out1.boxes.length;
                        // using the inputCanvas to extract and resize the image patches, since it is faster
                        // than doing this on the gpu
                        ts = Date.now();
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$stage2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage2"])(inputCanvas, out1.boxes, scoreThresholds[1], params.rnet, stats)
                        ];
                    case 2:
                        out2 = _c.sent();
                        stats.total_stage2 = Date.now() - ts;
                        if (!out2.boxes.length) {
                            return [
                                2 /*return*/ ,
                                onReturn({
                                    results: [],
                                    stats: stats
                                })
                            ];
                        }
                        stats.stage3_numInputBoxes = out2.boxes.length;
                        ts = Date.now();
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$stage3$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stage3"])(inputCanvas, out2.boxes, scoreThresholds[2], params.onet, stats)
                        ];
                    case 3:
                        out3 = _c.sent();
                        stats.total_stage3 = Date.now() - ts;
                        results = out3.boxes.map(function(box, idx) {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceLandmarks"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceDetection"])({}, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"](out3.scores[idx], new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Rect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"](box.left / width, box.top / height, box.width / width, box.height / height), {
                                height: height,
                                width: width
                            })), new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks5$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks5"](out3.points[idx].map(function(pt) {
                                return pt.sub(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](box.left, box.top)).div(new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](box.width, box.height));
                            }), {
                                width: box.width,
                                height: box.height
                            }));
                        });
                        return [
                            2 /*return*/ ,
                            onReturn({
                                results: results,
                                stats: stats
                            })
                        ];
                }
            });
        });
    };
    Mtcnn.prototype.forward = function(input, forwardParams) {
        if (forwardParams === void 0) {
            forwardParams = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            4 /*yield*/ ,
                            _a.apply(this, [
                                _b.sent(),
                                forwardParams
                            ])
                        ];
                    case 2:
                        return [
                            2 /*return*/ ,
                            _b.sent().results
                        ];
                }
            });
        });
    };
    Mtcnn.prototype.forwardWithStats = function(input, forwardParams) {
        if (forwardParams === void 0) {
            forwardParams = {};
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this.forwardInput;
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$toNetInput$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toNetInput"])(input)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _a.apply(this, [
                                _b.sent(),
                                forwardParams
                            ])
                        ];
                }
            });
        });
    };
    Mtcnn.prototype.getDefaultModelName = function() {
        return 'mtcnn_model';
    };
    Mtcnn.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$extractParamsFromWeigthMap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParamsFromWeigthMap"])(weightMap);
    };
    Mtcnn.prototype.extractParams = function(weights) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$extractParams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractParams"])(weights);
    };
    return Mtcnn;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NeuralNetwork"]);
;
 //# sourceMappingURL=Mtcnn.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/const.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOX_ANCHORS",
    ()=>BOX_ANCHORS,
    "IOU_THRESHOLD",
    ()=>IOU_THRESHOLD,
    "MEAN_RGB",
    ()=>MEAN_RGB
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Point.js [app-client] (ecmascript)");
;
var IOU_THRESHOLD = 0.4;
var BOX_ANCHORS = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](1.603231, 2.094468),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](6.041143, 7.080126),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](2.882459, 3.518061),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](4.266906, 5.178857),
    new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Point"](9.041765, 10.66308)
];
var MEAN_RGB = [
    117.001,
    114.697,
    97.404
]; //# sourceMappingURL=const.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetector.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TinyFaceDetector",
    ()=>TinyFaceDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/const.js [app-client] (ecmascript)");
;
;
;
;
var TinyFaceDetector = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(TinyFaceDetector, _super);
    function TinyFaceDetector() {
        var _this = this;
        var config = {
            withSeparableConvs: true,
            iouThreshold: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IOU_THRESHOLD"],
            classes: [
                'face'
            ],
            anchors: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOX_ANCHORS"],
            meanRgb: __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$const$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MEAN_RGB"],
            isFirstLayerConv2d: true,
            filterSizes: [
                3,
                16,
                32,
                64,
                128,
                256,
                512
            ]
        };
        _this = _super.call(this, config) || this;
        return _this;
    }
    Object.defineProperty(TinyFaceDetector.prototype, "anchors", {
        get: function() {
            return this.config.anchors;
        },
        enumerable: true,
        configurable: true
    });
    TinyFaceDetector.prototype.locateFaces = function(input, forwardParams) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var objectDetections;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.detect(input, forwardParams)
                        ];
                    case 1:
                        objectDetections = _a.sent();
                        return [
                            2 /*return*/ ,
                            objectDetections.map(function(det) {
                                return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"](det.score, det.relativeBox, {
                                    width: det.imageWidth,
                                    height: det.imageHeight
                                });
                            })
                        ];
                }
            });
        });
    };
    TinyFaceDetector.prototype.getDefaultModelName = function() {
        return 'tiny_face_detector_model';
    };
    TinyFaceDetector.prototype.extractParamsFromWeigthMap = function(weightMap) {
        return _super.prototype.extractParamsFromWeigthMap.call(this, weightMap);
    };
    return TinyFaceDetector;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyYolov2Base"]);
;
 //# sourceMappingURL=TinyFaceDetector.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/nets.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeFaceDescriptor",
    ()=>computeFaceDescriptor,
    "detectFaceLandmarks",
    ()=>detectFaceLandmarks,
    "detectFaceLandmarksTiny",
    ()=>detectFaceLandmarksTiny,
    "detectLandmarks",
    ()=>detectLandmarks,
    "loadAgeGenderModel",
    ()=>loadAgeGenderModel,
    "loadFaceDetectionModel",
    ()=>loadFaceDetectionModel,
    "loadFaceExpressionModel",
    ()=>loadFaceExpressionModel,
    "loadFaceLandmarkModel",
    ()=>loadFaceLandmarkModel,
    "loadFaceLandmarkTinyModel",
    ()=>loadFaceLandmarkTinyModel,
    "loadFaceRecognitionModel",
    ()=>loadFaceRecognitionModel,
    "loadMtcnnModel",
    ()=>loadMtcnnModel,
    "loadSsdMobilenetv1Model",
    ()=>loadSsdMobilenetv1Model,
    "loadTinyFaceDetectorModel",
    ()=>loadTinyFaceDetectorModel,
    "loadTinyYolov2Model",
    ()=>loadTinyYolov2Model,
    "locateFaces",
    ()=>locateFaces,
    "mtcnn",
    ()=>mtcnn,
    "nets",
    ()=>nets,
    "predictAgeAndGender",
    ()=>predictAgeAndGender,
    "recognizeFaceExpressions",
    ()=>recognizeFaceExpressions,
    "ssdMobilenetv1",
    ()=>ssdMobilenetv1,
    "tinyFaceDetector",
    ()=>tinyFaceDetector,
    "tinyYolov2",
    ()=>tinyYolov2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$AgeGenderNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/AgeGenderNet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressionNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/FaceExpressionNet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68Net$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68Net.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68TinyNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/FaceLandmark68TinyNet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$FaceRecognitionNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/FaceRecognitionNet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$Mtcnn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/Mtcnn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var nets = {
    ssdMobilenetv1: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1"](),
    tinyFaceDetector: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyFaceDetector"](),
    tinyYolov2: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyYolov2"](),
    mtcnn: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$Mtcnn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mtcnn"](),
    faceLandmark68Net: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68Net$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmark68Net"](),
    faceLandmark68TinyNet: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$FaceLandmark68TinyNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmark68TinyNet"](),
    faceRecognitionNet: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$FaceRecognitionNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceRecognitionNet"](),
    faceExpressionNet: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$FaceExpressionNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceExpressionNet"](),
    ageGenderNet: new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$AgeGenderNet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AgeGenderNet"]()
};
var ssdMobilenetv1 = function(input, options) {
    return nets.ssdMobilenetv1.locateFaces(input, options);
};
var tinyFaceDetector = function(input, options) {
    return nets.tinyFaceDetector.locateFaces(input, options);
};
var tinyYolov2 = function(input, options) {
    return nets.tinyYolov2.locateFaces(input, options);
};
var mtcnn = function(input, options) {
    return nets.mtcnn.forward(input, options);
};
var detectFaceLandmarks = function(input) {
    return nets.faceLandmark68Net.detectLandmarks(input);
};
var detectFaceLandmarksTiny = function(input) {
    return nets.faceLandmark68TinyNet.detectLandmarks(input);
};
var computeFaceDescriptor = function(input) {
    return nets.faceRecognitionNet.computeFaceDescriptor(input);
};
var recognizeFaceExpressions = function(input) {
    return nets.faceExpressionNet.predictExpressions(input);
};
var predictAgeAndGender = function(input) {
    return nets.ageGenderNet.predictAgeAndGender(input);
};
var loadSsdMobilenetv1Model = function(url) {
    return nets.ssdMobilenetv1.load(url);
};
var loadTinyFaceDetectorModel = function(url) {
    return nets.tinyFaceDetector.load(url);
};
var loadMtcnnModel = function(url) {
    return nets.mtcnn.load(url);
};
var loadTinyYolov2Model = function(url) {
    return nets.tinyYolov2.load(url);
};
var loadFaceLandmarkModel = function(url) {
    return nets.faceLandmark68Net.load(url);
};
var loadFaceLandmarkTinyModel = function(url) {
    return nets.faceLandmark68TinyNet.load(url);
};
var loadFaceRecognitionModel = function(url) {
    return nets.faceRecognitionNet.load(url);
};
var loadFaceExpressionModel = function(url) {
    return nets.faceExpressionNet.load(url);
};
var loadAgeGenderModel = function(url) {
    return nets.ageGenderNet.load(url);
};
var loadFaceDetectionModel = loadSsdMobilenetv1Model;
var locateFaces = ssdMobilenetv1;
var detectLandmarks = detectFaceLandmarks; //# sourceMappingURL=nets.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictFaceExpressionsTask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PredictAllFaceExpressionsTask",
    ()=>PredictAllFaceExpressionsTask,
    "PredictAllFaceExpressionsWithFaceAlignmentTask",
    ()=>PredictAllFaceExpressionsWithFaceAlignmentTask,
    "PredictFaceExpressionsTaskBase",
    ()=>PredictFaceExpressionsTaskBase,
    "PredictSingleFaceExpressionsTask",
    ()=>PredictSingleFaceExpressionsTask,
    "PredictSingleFaceExpressionsWithFaceAlignmentTask",
    ()=>PredictSingleFaceExpressionsWithFaceAlignmentTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceExpressions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComposableTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComputeFaceDescriptorsTasks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/extractFacesAndComputeResults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/nets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictAgeAndGenderTask.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var PredictFaceExpressionsTaskBase = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictFaceExpressionsTaskBase, _super);
    function PredictFaceExpressionsTaskBase(parentTask, input, extractedFaces) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        _this.extractedFaces = extractedFaces;
        return _this;
    }
    return PredictFaceExpressionsTaskBase;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableTask"]);
;
var PredictAllFaceExpressionsTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictAllFaceExpressionsTask, _super);
    function PredictAllFaceExpressionsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllFaceExpressionsTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var parentResults, faceExpressionsByFace;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parentTask
                        ];
                    case 1:
                        parentResults = _a.sent();
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAllFacesAndComputeResults"])(parentResults, this.input, function(faces) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                                        switch(_a.label){
                                            case 0:
                                                return [
                                                    4 /*yield*/ ,
                                                    Promise.all(faces.map(function(face) {
                                                        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].faceExpressionNet.predictExpressions(face);
                                                    }))
                                                ];
                                            case 1:
                                                return [
                                                    2 /*return*/ ,
                                                    _a.sent()
                                                ];
                                        }
                                    });
                                });
                            }, this.extractedFaces)
                        ];
                    case 2:
                        faceExpressionsByFace = _a.sent();
                        return [
                            2 /*return*/ ,
                            parentResults.map(function(parentResult, i) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceExpressions"])(parentResult, faceExpressionsByFace[i]);
                            })
                        ];
                }
            });
        });
    };
    PredictAllFaceExpressionsTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllAgeAndGenderTask"](this, this.input);
    };
    return PredictAllFaceExpressionsTask;
}(PredictFaceExpressionsTaskBase);
;
var PredictSingleFaceExpressionsTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictSingleFaceExpressionsTask, _super);
    function PredictSingleFaceExpressionsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionsTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var parentResult, faceExpressions;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parentTask
                        ];
                    case 1:
                        parentResult = _a.sent();
                        if (!parentResult) {
                            return [
                                2 /*return*/ 
                            ];
                        }
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSingleFaceAndComputeResult"])(parentResult, this.input, function(face) {
                                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].faceExpressionNet.predictExpressions(face);
                            }, this.extractedFaces)
                        ];
                    case 2:
                        faceExpressions = _a.sent();
                        return [
                            2 /*return*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceExpressions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceExpressions"])(parentResult, faceExpressions)
                        ];
                }
            });
        });
    };
    PredictSingleFaceExpressionsTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleAgeAndGenderTask"](this, this.input);
    };
    return PredictSingleFaceExpressionsTask;
}(PredictFaceExpressionsTaskBase);
;
var PredictAllFaceExpressionsWithFaceAlignmentTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictAllFaceExpressionsWithFaceAlignmentTask, _super);
    function PredictAllFaceExpressionsWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllAgeAndGenderWithFaceAlignmentTask"](this, this.input);
    };
    PredictAllFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptors = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeAllFaceDescriptorsTask"](this, this.input);
    };
    return PredictAllFaceExpressionsWithFaceAlignmentTask;
}(PredictAllFaceExpressionsTask);
;
var PredictSingleFaceExpressionsWithFaceAlignmentTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictSingleFaceExpressionsWithFaceAlignmentTask, _super);
    function PredictSingleFaceExpressionsWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleAgeAndGenderWithFaceAlignmentTask"](this, this.input);
    };
    PredictSingleFaceExpressionsWithFaceAlignmentTask.prototype.withFaceDescriptor = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeSingleFaceDescriptorTask"](this, this.input);
    };
    return PredictSingleFaceExpressionsWithFaceAlignmentTask;
}(PredictSingleFaceExpressionsTask);
;
 //# sourceMappingURL=PredictFaceExpressionsTask.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictAgeAndGenderTask.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PredictAgeAndGenderTaskBase",
    ()=>PredictAgeAndGenderTaskBase,
    "PredictAllAgeAndGenderTask",
    ()=>PredictAllAgeAndGenderTask,
    "PredictAllAgeAndGenderWithFaceAlignmentTask",
    ()=>PredictAllAgeAndGenderWithFaceAlignmentTask,
    "PredictSingleAgeAndGenderTask",
    ()=>PredictSingleAgeAndGenderTask,
    "PredictSingleAgeAndGenderWithFaceAlignmentTask",
    ()=>PredictSingleAgeAndGenderWithFaceAlignmentTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithAge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithAge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithGender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithGender.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComposableTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComputeFaceDescriptorsTasks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/extractFacesAndComputeResults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/nets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictFaceExpressionsTask.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
var PredictAgeAndGenderTaskBase = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictAgeAndGenderTaskBase, _super);
    function PredictAgeAndGenderTaskBase(parentTask, input, extractedFaces) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        _this.extractedFaces = extractedFaces;
        return _this;
    }
    return PredictAgeAndGenderTaskBase;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableTask"]);
;
var PredictAllAgeAndGenderTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictAllAgeAndGenderTask, _super);
    function PredictAllAgeAndGenderTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllAgeAndGenderTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var parentResults, ageAndGenderByFace;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parentTask
                        ];
                    case 1:
                        parentResults = _a.sent();
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAllFacesAndComputeResults"])(parentResults, this.input, function(faces) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                                        switch(_a.label){
                                            case 0:
                                                return [
                                                    4 /*yield*/ ,
                                                    Promise.all(faces.map(function(face) {
                                                        return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].ageGenderNet.predictAgeAndGender(face);
                                                    }))
                                                ];
                                            case 1:
                                                return [
                                                    2 /*return*/ ,
                                                    _a.sent()
                                                ];
                                        }
                                    });
                                });
                            }, this.extractedFaces)
                        ];
                    case 2:
                        ageAndGenderByFace = _a.sent();
                        return [
                            2 /*return*/ ,
                            parentResults.map(function(parentResult, i) {
                                var _a = ageAndGenderByFace[i], age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithAge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithAge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithGender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithGender"])(parentResult, gender, genderProbability), age);
                            })
                        ];
                }
            });
        });
    };
    PredictAllAgeAndGenderTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllFaceExpressionsTask"](this, this.input);
    };
    return PredictAllAgeAndGenderTask;
}(PredictAgeAndGenderTaskBase);
;
var PredictSingleAgeAndGenderTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictSingleAgeAndGenderTask, _super);
    function PredictSingleAgeAndGenderTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleAgeAndGenderTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var parentResult, _a, age, gender, genderProbability;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parentTask
                        ];
                    case 1:
                        parentResult = _b.sent();
                        if (!parentResult) {
                            return [
                                2 /*return*/ 
                            ];
                        }
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSingleFaceAndComputeResult"])(parentResult, this.input, function(face) {
                                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].ageGenderNet.predictAgeAndGender(face);
                            }, this.extractedFaces)
                        ];
                    case 2:
                        _a = _b.sent(), age = _a.age, gender = _a.gender, genderProbability = _a.genderProbability;
                        return [
                            2 /*return*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithAge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithAge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithGender$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithGender"])(parentResult, gender, genderProbability), age)
                        ];
                }
            });
        });
    };
    PredictSingleAgeAndGenderTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleFaceExpressionsTask"](this, this.input);
    };
    return PredictSingleAgeAndGenderTask;
}(PredictAgeAndGenderTaskBase);
;
var PredictAllAgeAndGenderWithFaceAlignmentTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictAllAgeAndGenderWithFaceAlignmentTask, _super);
    function PredictAllAgeAndGenderWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllFaceExpressionsWithFaceAlignmentTask"](this, this.input);
    };
    PredictAllAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptors = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeAllFaceDescriptorsTask"](this, this.input);
    };
    return PredictAllAgeAndGenderWithFaceAlignmentTask;
}(PredictAllAgeAndGenderTask);
;
var PredictSingleAgeAndGenderWithFaceAlignmentTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(PredictSingleAgeAndGenderWithFaceAlignmentTask, _super);
    function PredictSingleAgeAndGenderWithFaceAlignmentTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleFaceExpressionsWithFaceAlignmentTask"](this, this.input);
    };
    PredictSingleAgeAndGenderWithFaceAlignmentTask.prototype.withFaceDescriptor = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeSingleFaceDescriptorTask"](this, this.input);
    };
    return PredictSingleAgeAndGenderWithFaceAlignmentTask;
}(PredictSingleAgeAndGenderTask);
;
 //# sourceMappingURL=PredictAgeAndGenderTask.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComputeFaceDescriptorsTasks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComputeAllFaceDescriptorsTask",
    ()=>ComputeAllFaceDescriptorsTask,
    "ComputeFaceDescriptorsTaskBase",
    ()=>ComputeFaceDescriptorsTaskBase,
    "ComputeSingleFaceDescriptorTask",
    ()=>ComputeSingleFaceDescriptorTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDescriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDescriptor.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComposableTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/extractFacesAndComputeResults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/nets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictAgeAndGenderTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictFaceExpressionsTask.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
var ComputeFaceDescriptorsTaskBase = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ComputeFaceDescriptorsTaskBase, _super);
    function ComputeFaceDescriptorsTaskBase(parentTask, input) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        return _this;
    }
    return ComputeFaceDescriptorsTaskBase;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableTask"]);
;
var ComputeAllFaceDescriptorsTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ComputeAllFaceDescriptorsTask, _super);
    function ComputeAllFaceDescriptorsTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeAllFaceDescriptorsTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var parentResults, descriptors;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parentTask
                        ];
                    case 1:
                        parentResults = _a.sent();
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractAllFacesAndComputeResults"])(parentResults, this.input, function(faces) {
                                return Promise.all(faces.map(function(face) {
                                    return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].faceRecognitionNet.computeFaceDescriptor(face);
                                }));
                            }, null, function(parentResult) {
                                return parentResult.landmarks.align(null, {
                                    useDlibAlignment: true
                                });
                            })
                        ];
                    case 2:
                        descriptors = _a.sent();
                        return [
                            2 /*return*/ ,
                            descriptors.map(function(descriptor, i) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDescriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceDescriptor"])(parentResults[i], descriptor);
                            })
                        ];
                }
            });
        });
    };
    ComputeAllFaceDescriptorsTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllFaceExpressionsWithFaceAlignmentTask"](this, this.input);
    };
    ComputeAllFaceDescriptorsTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllAgeAndGenderWithFaceAlignmentTask"](this, this.input);
    };
    return ComputeAllFaceDescriptorsTask;
}(ComputeFaceDescriptorsTaskBase);
;
var ComputeSingleFaceDescriptorTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(ComputeSingleFaceDescriptorTask, _super);
    function ComputeSingleFaceDescriptorTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComputeSingleFaceDescriptorTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var parentResult, descriptor;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parentTask
                        ];
                    case 1:
                        parentResult = _a.sent();
                        if (!parentResult) {
                            return [
                                2 /*return*/ 
                            ];
                        }
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$extractFacesAndComputeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractSingleFaceAndComputeResult"])(parentResult, this.input, function(face) {
                                return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].faceRecognitionNet.computeFaceDescriptor(face);
                            }, null, function(parentResult) {
                                return parentResult.landmarks.align(null, {
                                    useDlibAlignment: true
                                });
                            })
                        ];
                    case 2:
                        descriptor = _a.sent();
                        return [
                            2 /*return*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDescriptor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceDescriptor"])(parentResult, descriptor)
                        ];
                }
            });
        });
    };
    ComputeSingleFaceDescriptorTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleFaceExpressionsWithFaceAlignmentTask"](this, this.input);
    };
    ComputeSingleFaceDescriptorTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleAgeAndGenderWithFaceAlignmentTask"](this, this.input);
    };
    return ComputeSingleFaceDescriptorTask;
}(ComputeFaceDescriptorsTaskBase);
;
 //# sourceMappingURL=ComputeFaceDescriptorsTasks.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/DetectFaceLandmarksTasks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetectAllFaceLandmarksTask",
    ()=>DetectAllFaceLandmarksTask,
    "DetectFaceLandmarksTaskBase",
    ()=>DetectFaceLandmarksTaskBase,
    "DetectSingleFaceLandmarksTask",
    ()=>DetectSingleFaceLandmarksTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/extractFaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaceTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/extractFaceTensors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComposableTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComputeFaceDescriptorsTasks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/nets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictAgeAndGenderTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictFaceExpressionsTask.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
var DetectFaceLandmarksTaskBase = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DetectFaceLandmarksTaskBase, _super);
    function DetectFaceLandmarksTaskBase(parentTask, input, useTinyLandmarkNet) {
        var _this = _super.call(this) || this;
        _this.parentTask = parentTask;
        _this.input = input;
        _this.useTinyLandmarkNet = useTinyLandmarkNet;
        return _this;
    }
    Object.defineProperty(DetectFaceLandmarksTaskBase.prototype, "landmarkNet", {
        get: function() {
            return this.useTinyLandmarkNet ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].faceLandmark68TinyNet : __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].faceLandmark68Net;
        },
        enumerable: true,
        configurable: true
    });
    return DetectFaceLandmarksTaskBase;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableTask"]);
;
var DetectAllFaceLandmarksTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DetectAllFaceLandmarksTask, _super);
    function DetectAllFaceLandmarksTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectAllFaceLandmarksTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var parentResults, detections, faces, _a, faceLandmarksByFace;
            var _this = this;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parentTask
                        ];
                    case 1:
                        parentResults = _b.sent();
                        detections = parentResults.map(function(res) {
                            return res.detection;
                        });
                        if (!(this.input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"])) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaceTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaceTensors"])(this.input, detections)
                        ];
                    case 2:
                        _a = _b.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaces"])(this.input, detections)
                        ];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        faces = _a;
                        return [
                            4 /*yield*/ ,
                            Promise.all(faces.map(function(face) {
                                return _this.landmarkNet.detectLandmarks(face);
                            }))
                        ];
                    case 6:
                        faceLandmarksByFace = _b.sent();
                        faces.forEach(function(f) {
                            return f instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"] && f.dispose();
                        });
                        return [
                            2 /*return*/ ,
                            parentResults.map(function(parentResult, i) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceLandmarks"])(parentResult, faceLandmarksByFace[i]);
                            })
                        ];
                }
            });
        });
    };
    DetectAllFaceLandmarksTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllFaceExpressionsWithFaceAlignmentTask"](this, this.input);
    };
    DetectAllFaceLandmarksTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllAgeAndGenderWithFaceAlignmentTask"](this, this.input);
    };
    DetectAllFaceLandmarksTask.prototype.withFaceDescriptors = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeAllFaceDescriptorsTask"](this, this.input);
    };
    return DetectAllFaceLandmarksTask;
}(DetectFaceLandmarksTaskBase);
;
var DetectSingleFaceLandmarksTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DetectSingleFaceLandmarksTask, _super);
    function DetectSingleFaceLandmarksTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectSingleFaceLandmarksTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var parentResult, detection, faces, _a, landmarks;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.parentTask
                        ];
                    case 1:
                        parentResult = _b.sent();
                        if (!parentResult) {
                            return [
                                2 /*return*/ 
                            ];
                        }
                        detection = parentResult.detection;
                        if (!(this.input instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"])) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaceTensors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaceTensors"])(this.input, [
                                detection
                            ])
                        ];
                    case 2:
                        _a = _b.sent();
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 3:
                        return [
                            4 /*yield*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$extractFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractFaces"])(this.input, [
                                detection
                            ])
                        ];
                    case 4:
                        _a = _b.sent();
                        _b.label = 5;
                    case 5:
                        faces = _a;
                        return [
                            4 /*yield*/ ,
                            this.landmarkNet.detectLandmarks(faces[0])
                        ];
                    case 6:
                        landmarks = _b.sent();
                        faces.forEach(function(f) {
                            return f instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tensor"] && f.dispose();
                        });
                        return [
                            2 /*return*/ ,
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceLandmarks"])(parentResult, landmarks)
                        ];
                }
            });
        });
    };
    DetectSingleFaceLandmarksTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleFaceExpressionsWithFaceAlignmentTask"](this, this.input);
    };
    DetectSingleFaceLandmarksTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleAgeAndGenderWithFaceAlignmentTask"](this, this.input);
    };
    DetectSingleFaceLandmarksTask.prototype.withFaceDescriptor = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComputeSingleFaceDescriptorTask"](this, this.input);
    };
    return DetectSingleFaceLandmarksTask;
}(DetectFaceLandmarksTaskBase);
;
 //# sourceMappingURL=DetectFaceLandmarksTasks.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/DetectFacesTasks.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetectAllFacesTask",
    ()=>DetectAllFacesTask,
    "DetectFacesTaskBase",
    ()=>DetectFacesTaskBase,
    "DetectSingleFaceTask",
    ()=>DetectSingleFaceTask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetectorOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComposableTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$DetectFaceLandmarksTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/DetectFaceLandmarksTasks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/nets.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictAgeAndGenderTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/PredictFaceExpressionsTask.js [app-client] (ecmascript)");
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
var DetectFacesTaskBase = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DetectFacesTaskBase, _super);
    function DetectFacesTaskBase(input, options) {
        if (options === void 0) {
            options = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1Options"]();
        }
        var _this = _super.call(this) || this;
        _this.input = input;
        _this.options = options;
        return _this;
    }
    return DetectFacesTaskBase;
}(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ComposableTask"]);
;
var DetectAllFacesTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DetectAllFacesTask, _super);
    function DetectAllFacesTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectAllFacesTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var _a, input, options, faceDetectionFunction;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_b) {
                switch(_b.label){
                    case 0:
                        _a = this, input = _a.input, options = _a.options;
                        if (!(options instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MtcnnOptions"])) return [
                            3 /*break*/ ,
                            2
                        ];
                        return [
                            4 /*yield*/ ,
                            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].mtcnn.forward(input, options)
                        ];
                    case 1:
                        return [
                            2 /*return*/ ,
                            _b.sent().map(function(result) {
                                return result.detection;
                            })
                        ];
                    case 2:
                        faceDetectionFunction = options instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyFaceDetectorOptions"] ? function(input) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].tinyFaceDetector.locateFaces(input, options);
                        } : options instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1Options"] ? function(input) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].ssdMobilenetv1.locateFaces(input, options);
                        } : options instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyYolov2Options"] ? function(input) {
                            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nets"].tinyYolov2.locateFaces(input, options);
                        } : null;
                        if (!faceDetectionFunction) {
                            throw new Error('detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options');
                        }
                        return [
                            2 /*return*/ ,
                            faceDetectionFunction(input)
                        ];
                }
            });
        });
    };
    DetectAllFacesTask.prototype.runAndExtendWithFaceDetections = function() {
        var _this = this;
        return new Promise(function(res) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                var detections;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.run()
                            ];
                        case 1:
                            detections = _a.sent();
                            return [
                                2 /*return*/ ,
                                res(detections.map(function(detection) {
                                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceDetection"])({}, detection);
                                }))
                            ];
                    }
                });
            });
        });
    };
    DetectAllFacesTask.prototype.withFaceLandmarks = function(useTinyLandmarkNet) {
        if (useTinyLandmarkNet === void 0) {
            useTinyLandmarkNet = false;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$DetectFaceLandmarksTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetectAllFaceLandmarksTask"](this.runAndExtendWithFaceDetections(), this.input, useTinyLandmarkNet);
    };
    DetectAllFacesTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllFaceExpressionsTask"](this.runAndExtendWithFaceDetections(), this.input);
    };
    DetectAllFacesTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictAllAgeAndGenderTask"](this.runAndExtendWithFaceDetections(), this.input);
    };
    return DetectAllFacesTask;
}(DetectFacesTaskBase);
;
var DetectSingleFaceTask = function(_super) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__extends"])(DetectSingleFaceTask, _super);
    function DetectSingleFaceTask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DetectSingleFaceTask.prototype.run = function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
            var faceDetections, faceDetectionWithHighestScore;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                switch(_a.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            new DetectAllFacesTask(this.input, this.options)
                        ];
                    case 1:
                        faceDetections = _a.sent();
                        faceDetectionWithHighestScore = faceDetections[0];
                        faceDetections.forEach(function(faceDetection) {
                            if (faceDetection.score > faceDetectionWithHighestScore.score) {
                                faceDetectionWithHighestScore = faceDetection;
                            }
                        });
                        return [
                            2 /*return*/ ,
                            faceDetectionWithHighestScore
                        ];
                }
            });
        });
    };
    DetectSingleFaceTask.prototype.runAndExtendWithFaceDetection = function() {
        var _this = this;
        return new Promise(function(res) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(_this, void 0, void 0, function() {
                var detection;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4 /*yield*/ ,
                                this.run()
                            ];
                        case 1:
                            detection = _a.sent();
                            return [
                                2 /*return*/ ,
                                res(detection ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceDetection"])({}, detection) : undefined)
                            ];
                    }
                });
            });
        });
    };
    DetectSingleFaceTask.prototype.withFaceLandmarks = function(useTinyLandmarkNet) {
        if (useTinyLandmarkNet === void 0) {
            useTinyLandmarkNet = false;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$DetectFaceLandmarksTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetectSingleFaceLandmarksTask"](this.runAndExtendWithFaceDetection(), this.input, useTinyLandmarkNet);
    };
    DetectSingleFaceTask.prototype.withFaceExpressions = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictFaceExpressionsTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleFaceExpressionsTask"](this.runAndExtendWithFaceDetection(), this.input);
    };
    DetectSingleFaceTask.prototype.withAgeAndGender = function() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$PredictAgeAndGenderTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PredictSingleAgeAndGenderTask"](this.runAndExtendWithFaceDetection(), this.input);
    };
    return DetectSingleFaceTask;
}(DetectFacesTaskBase);
;
 //# sourceMappingURL=DetectFacesTasks.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/detectFaces.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectAllFaces",
    ()=>detectAllFaces,
    "detectSingleFace",
    ()=>detectSingleFace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$DetectFacesTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/DetectFacesTasks.js [app-client] (ecmascript)");
;
;
function detectSingleFace(input, options) {
    if (options === void 0) {
        options = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1Options"]();
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$DetectFacesTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetectSingleFaceTask"](input, options);
}
function detectAllFaces(input, options) {
    if (options === void 0) {
        options = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1Options"]();
    }
    return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$DetectFacesTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DetectAllFacesTask"](input, options);
} //# sourceMappingURL=detectFaces.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/allFaces.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allFaces",
    ()=>allFaces,
    "allFacesMtcnn",
    ()=>allFacesMtcnn,
    "allFacesSsdMobilenetv1",
    ()=>allFacesSsdMobilenetv1,
    "allFacesTinyYolov2",
    ()=>allFacesTinyYolov2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/node_modules/tslib/tslib.es6.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnOptions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/SsdMobilenetv1Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/TinyYolov2Options.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$detectFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/detectFaces.js [app-client] (ecmascript)");
;
;
;
;
;
function allFacesSsdMobilenetv1(input, minConfidence) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            switch(_a.label){
                case 0:
                    console.warn('allFacesSsdMobilenetv1 is deprecated and will be removed soon, use the high level api instead');
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$detectFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectAllFaces"])(input, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$SsdMobilenetv1Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SsdMobilenetv1Options"](minConfidence ? {
                            minConfidence: minConfidence
                        } : {})).withFaceLandmarks().withFaceDescriptors()
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _a.sent()
                    ];
            }
        });
    });
}
function allFacesTinyYolov2(input, forwardParams) {
    if (forwardParams === void 0) {
        forwardParams = {};
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            switch(_a.label){
                case 0:
                    console.warn('allFacesTinyYolov2 is deprecated and will be removed soon, use the high level api instead');
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$detectFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectAllFaces"])(input, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$TinyYolov2Options$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyYolov2Options"](forwardParams)).withFaceLandmarks().withFaceDescriptors()
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _a.sent()
                    ];
            }
        });
    });
}
function allFacesMtcnn(input, forwardParams) {
    if (forwardParams === void 0) {
        forwardParams = {};
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__awaiter"])(this, void 0, void 0, function() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["__generator"])(this, function(_a) {
            switch(_a.label){
                case 0:
                    console.warn('allFacesMtcnn is deprecated and will be removed soon, use the high level api instead');
                    return [
                        4 /*yield*/ ,
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$detectFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["detectAllFaces"])(input, new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MtcnnOptions"](forwardParams)).withFaceLandmarks().withFaceDescriptors()
                    ];
                case 1:
                    return [
                        2 /*return*/ ,
                        _a.sent()
                    ];
            }
        });
    });
}
var allFaces = allFacesSsdMobilenetv1; //# sourceMappingURL=allFaces.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/euclideanDistance.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "euclideanDistance",
    ()=>euclideanDistance
]);
function euclideanDistance(arr1, arr2) {
    if (arr1.length !== arr2.length) throw new Error('euclideanDistance: arr1.length !== arr2.length');
    var desc1 = Array.from(arr1);
    var desc2 = Array.from(arr2);
    return Math.sqrt(desc1.map(function(val, i) {
        return val - desc2[i];
    }).reduce(function(res, diff) {
        return res + Math.pow(diff, 2);
    }, 0));
} //# sourceMappingURL=euclideanDistance.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/FaceMatcher.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaceMatcher",
    ()=>FaceMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceMatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceMatch.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledFaceDescriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/LabeledFaceDescriptors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$euclideanDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/euclideanDistance.js [app-client] (ecmascript)");
;
;
;
var FaceMatcher = function() {
    function FaceMatcher(inputs, distanceThreshold) {
        if (distanceThreshold === void 0) {
            distanceThreshold = 0.6;
        }
        this._distanceThreshold = distanceThreshold;
        var inputArray = Array.isArray(inputs) ? inputs : [
            inputs
        ];
        if (!inputArray.length) {
            throw new Error("FaceRecognizer.constructor - expected atleast one input");
        }
        var count = 1;
        var createUniqueLabel = function() {
            return "person " + count++;
        };
        this._labeledDescriptors = inputArray.map(function(desc) {
            if (desc instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledFaceDescriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledFaceDescriptors"]) {
                return desc;
            }
            if (desc instanceof Float32Array) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledFaceDescriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledFaceDescriptors"](createUniqueLabel(), [
                    desc
                ]);
            }
            if (desc.descriptor && desc.descriptor instanceof Float32Array) {
                return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledFaceDescriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledFaceDescriptors"](createUniqueLabel(), [
                    desc.descriptor
                ]);
            }
            throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>");
        });
    }
    Object.defineProperty(FaceMatcher.prototype, "labeledDescriptors", {
        get: function() {
            return this._labeledDescriptors;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FaceMatcher.prototype, "distanceThreshold", {
        get: function() {
            return this._distanceThreshold;
        },
        enumerable: true,
        configurable: true
    });
    FaceMatcher.prototype.computeMeanDistance = function(queryDescriptor, descriptors) {
        return descriptors.map(function(d) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$euclideanDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["euclideanDistance"])(d, queryDescriptor);
        }).reduce(function(d1, d2) {
            return d1 + d2;
        }, 0) / (descriptors.length || 1);
    };
    FaceMatcher.prototype.matchDescriptor = function(queryDescriptor) {
        var _this = this;
        return this.labeledDescriptors.map(function(_a) {
            var descriptors = _a.descriptors, label = _a.label;
            return new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceMatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceMatch"](label, _this.computeMeanDistance(queryDescriptor, descriptors));
        }).reduce(function(best, curr) {
            return best.distance < curr.distance ? best : curr;
        });
    };
    FaceMatcher.prototype.findBestMatch = function(queryDescriptor) {
        var bestMatch = this.matchDescriptor(queryDescriptor);
        return bestMatch.distance < this.distanceThreshold ? bestMatch : new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceMatch$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceMatch"]('unknown', bestMatch.distance);
    };
    FaceMatcher.prototype.toJSON = function() {
        return {
            distanceThreshold: this.distanceThreshold,
            labeledDescriptors: this.labeledDescriptors.map(function(ld) {
                return ld.toJSON();
            })
        };
    };
    FaceMatcher.fromJSON = function(json) {
        var labeledDescriptors = json.labeledDescriptors.map(function(ld) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$LabeledFaceDescriptors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LabeledFaceDescriptors"].fromJSON(ld);
        });
        return new FaceMatcher(labeledDescriptors, json.distanceThreshold);
    };
    return FaceMatcher;
}();
;
 //# sourceMappingURL=FaceMatcher.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$allFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/allFaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComposableTask$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComposableTask.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$ComputeFaceDescriptorsTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/ComputeFaceDescriptorsTasks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$detectFaces$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/detectFaces.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$DetectFacesTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/DetectFacesTasks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$DetectFaceLandmarksTasks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/DetectFaceLandmarksTasks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$FaceMatcher$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/FaceMatcher.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$nets$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/nets.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
;
;
;
;
;
;
;
;
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMtcnn",
    ()=>createMtcnn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$Mtcnn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/Mtcnn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$MtcnnOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/MtcnnOptions.js [app-client] (ecmascript)");
;
;
;
function createMtcnn(weights) {
    var net = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$Mtcnn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mtcnn"]();
    net.extractWeights(weights);
    return net;
} //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTinyFaceDetector",
    ()=>createTinyFaceDetector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetectorOptions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/TinyFaceDetectorOptions.js [app-client] (ecmascript)");
;
;
;
function createTinyFaceDetector(weights) {
    var net = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$TinyFaceDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TinyFaceDetector"]();
    net.extractWeights(weights);
    return net;
} //# sourceMappingURL=index.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/resizeResults.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resizeResults",
    ()=>resizeResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/Dimensions.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/FaceLandmarks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/WithFaceLandmarks.js [app-client] (ecmascript)");
;
;
;
;
;
function resizeResults(results, dimensions) {
    var _a = new __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$Dimensions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dimensions"](dimensions.width, dimensions.height), width = _a.width, height = _a.height;
    if (width <= 0 || height <= 0) {
        throw new Error("resizeResults - invalid dimensions: " + JSON.stringify({
            width: width,
            height: height
        }));
    }
    if (Array.isArray(results)) {
        return results.map(function(obj) {
            return resizeResults(obj, {
                width: width,
                height: height
            });
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceLandmarks"])(results)) {
        var resizedDetection = results.detection.forSize(width, height);
        var resizedLandmarks = results.unshiftedLandmarks.forSize(resizedDetection.box.width, resizedDetection.box.height);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceLandmarks"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceDetection"])(results, resizedDetection), resizedLandmarks);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isWithFaceDetection"])(results)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$WithFaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extendWithFaceDetection"])(results, results.detection.forSize(width, height));
    }
    if (results instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceLandmarks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceLandmarks"] || results instanceof __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$FaceDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaceDetection"]) {
        return results.forSize(width, height);
    }
    return results;
} //# sourceMappingURL=resizeResults.js.map
}),
"[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f40$tensorflow$2f$tfjs$2d$core$2f$dist$2f$tf$2d$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$draw$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/draw/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$utils$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/utils/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ageGenderNet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ageGenderNet/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$classes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/classes/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/dom/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$env$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/env/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceExpressionNet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceExpressionNet/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceLandmarkNet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceLandmarkNet/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$faceRecognitionNet$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/faceRecognitionNet/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$factories$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/factories/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$globalApi$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/globalApi/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$mtcnn$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/mtcnn/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ops$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ops/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$ssdMobilenetv1$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/ssdMobilenetv1/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyFaceDetector$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyFaceDetector/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$tinyYolov2$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/tinyYolov2/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$euclideanDistance$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/euclideanDistance.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$NeuralNetwork$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/NeuralNetwork.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$JobAccelerateAi$2f$node_modules$2f$face$2d$api$2e$js$2f$build$2f$es6$2f$resizeResults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/JobAccelerateAi/node_modules/face-api.js/build/es6/resizeResults.js [app-client] (ecmascript)"); //# sourceMappingURL=index.js.map
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
;
;
;
;
;
;
;
}),
]);

//# sourceMappingURL=4629a_face-api_js_build_es6_cc33ba0b._.js.map