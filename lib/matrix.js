"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _libnode = require("../lib.node");
var _registry = /*#__PURE__*/ _interop_require_wildcard(require("./registry"));
var _random = require("./utilities/random");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function() {
    function Matrix(rows, columns, elements) {
        _class_call_check(this, Matrix);
        this.rows = rows;
        this.columns = columns;
        this.elements = elements;
    }
    _create_class(Matrix, [
        {
            key: "getRows",
            value: function getRows() {
                return this.rows;
            }
        },
        {
            key: "getColumns",
            value: function getColumns() {
                return this.columns;
            }
        },
        {
            key: "getElements",
            value: function getElements() {
                return this.elements;
            }
        },
        {
            key: "multiplyVector",
            value: function multiplyVector(vector) {
                var Vector = _registry.default.Vector, vectorFloat32Array = vector.toFloat32Array(), matrixFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.vectorMultiplyMatrix)(vectorFloat32Array, matrixFloat32Array, this.rows, this.columns), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "initialise",
            value: function initialise(size) {
                this.rows = size; ///
                this.columns = size; ///
                this.elements = [];
                var cardinality = this.rows * this.columns, lowerBound = -1, upperBound = +1;
                for(var count = 0; count < cardinality; count++){
                    var element = (0, _random.random)(lowerBound, upperBound);
                    this.elements.push(element);
                }
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var rows = this.rows, columns = this.columns, elements = this.elements, json = {
                    rows: rows,
                    columns: columns,
                    elements: elements
                };
                return json;
            }
        },
        {
            key: "toFloat32Array",
            value: function toFloat32Array() {
                var float32Array = new Float32Array(this.elements);
                return float32Array;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var rows = json.rows, columns = json.columns, elements = json.elements, matrix = new Matrix(rows, columns, elements);
                return matrix;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var rows = null, columns = null, elements = null, matrix = new Matrix(rows, columns, elements);
                return matrix;
            }
        },
        {
            key: "fromRowsColumnsAndElements",
            value: function fromRowsColumnsAndElements(Class, rows, columns, elements) {
                if (elements === undefined) {
                    elements = columns; ///
                    columns = rows; ///
                    rows = Class; ///
                    Class = Matrix; ///
                }
                var matrix = new Class(rows, columns, elements);
                return matrix;
            }
        },
        {
            key: "fromRowsColumnsAndFloat32Array",
            value: function fromRowsColumnsAndFloat32Array(Class, rows, columns, float32Array) {
                if (float32Array === undefined) {
                    float32Array = columns; ///
                    columns = rows; ///
                    rows = Class; ///
                    Class = Matrix; ///
                }
                var elements = Array.from(float32Array), matrix = new Class(rows, columns, elements);
                return matrix;
            }
        }
    ]);
    return Matrix;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlY3Rvck11bHRpcGx5TWF0cml4IH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCByZWdpc3RyeSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tIFwiLi91dGlsaXRpZXMvcmFuZG9tXCI7XG5pbXBvcnQgeyByZWdpc3RyeUFzc2lnbmVkIH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnlBc3NpZ25lZChjbGFzcyBNYXRyaXgge1xuICBjb25zdHJ1Y3Rvcihyb3dzLCBjb2x1bW5zLCBlbGVtZW50cykge1xuICAgIHRoaXMucm93cyA9IHJvd3M7XG4gICAgdGhpcy5jb2x1bW5zID0gY29sdW1ucztcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICBnZXRSb3dzKCkge1xuICAgIHJldHVybiB0aGlzLnJvd3M7XG4gIH1cblxuICBnZXRDb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnM7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG4gIG11bHRpcGx5VmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHsgVmVjdG9yIH0gPSByZWdpc3RyeSxcbiAgICAgICAgICB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB2ZWN0b3IudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gdmVjdG9yTXVsdGlwbHlNYXRyaXgodmVjdG9yRmxvYXQzMkFycmF5LCBtYXRyaXhGbG9hdDMyQXJyYXksIHRoaXMucm93cywgdGhpcy5jb2x1bW5zKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMucm93cyA9IHNpemU7ICAvLy9cbiAgICB0aGlzLmNvbHVtbnMgPSBzaXplOyAvLy9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBjYXJkaW5hbGl0eSA9IHRoaXMucm93cyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBsb3dlckJvdW5kID0gLTEsXG4gICAgICAgICAgdXBwZXJCb3VuZCA9ICsxO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGNhcmRpbmFsaXR5OyBjb3VudCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gcmFuZG9tKGxvd2VyQm91bmQsIHVwcGVyQm91bmQpO1xuXG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnJvd3MsXG4gICAgICAgICAgY29sdW1ucyA9IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyByb3dzLCBjb2x1bW5zLCBlbGVtZW50cyB9ID0ganNvbiwgIC8vXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHJvd3MgPSBudWxsLFxuICAgICAgICAgIGNvbHVtbnMgPSBudWxsLFxuICAgICAgICAgIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJvd3NDb2x1bW5zQW5kRWxlbWVudHMoQ2xhc3MsIHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgaWYgKGVsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRzID0gY29sdW1uczsgLy8vXG5cbiAgICAgIGNvbHVtbnMgPSByb3dzOyAvLy9cblxuICAgICAgcm93cyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXRyaXg7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBDbGFzcyhyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheShDbGFzcywgcm93cywgY29sdW1ucywgZmxvYXQzMkFycmF5KSB7XG4gICAgaWYgKGZsb2F0MzJBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmbG9hdDMyQXJyYXkgPSBjb2x1bW5zOyAvLy9cblxuICAgICAgY29sdW1ucyA9IHJvd3M7IC8vL1xuXG4gICAgICByb3dzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hdHJpeDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksXG4gICAgICAgICAgbWF0cml4ID0gbmV3IENsYXNzKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInJlZ2lzdHJ5QXNzaWduZWQiLCJNYXRyaXgiLCJyb3dzIiwiY29sdW1ucyIsImVsZW1lbnRzIiwiZ2V0Um93cyIsImdldENvbHVtbnMiLCJnZXRFbGVtZW50cyIsIm11bHRpcGx5VmVjdG9yIiwidmVjdG9yIiwiVmVjdG9yIiwicmVnaXN0cnkiLCJ2ZWN0b3JGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsIm1hdHJpeEZsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsInZlY3Rvck11bHRpcGx5TWF0cml4IiwicmVzdWx0VmVjdG9yIiwiZnJvbUZsb2F0MzJBcnJheSIsImluaXRpYWxpc2UiLCJzaXplIiwiY2FyZGluYWxpdHkiLCJsb3dlckJvdW5kIiwidXBwZXJCb3VuZCIsImNvdW50IiwiZWxlbWVudCIsInJhbmRvbSIsInB1c2giLCJ0b0pTT04iLCJqc29uIiwiZmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiZnJvbUpTT04iLCJtYXRyaXgiLCJmcm9tTm90aGluZyIsImZyb21Sb3dzQ29sdW1uc0FuZEVsZW1lbnRzIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkiLCJBcnJheSIsImZyb20iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O3VCQVBxQztnRUFFaEI7c0JBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHdkIsV0FBZUEsSUFBQUEsMEJBQWdCLGdCQUFDO2FBQU1DLE9BQ3hCQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQ0FEQ0g7UUFFbEMsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdB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