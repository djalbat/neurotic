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
            key: "scalarMultiply",
            value: function scalarMultiply(scalar) {
                var matrixFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.matrixScalarMultiply)(matrixFloat32Array, scalar), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
                return resultMatrix;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hdHJpeFNjYWxhck11bHRpcGx5LCB2ZWN0b3JNdWx0aXBseU1hdHJpeCB9IGZyb20gXCIuLi9saWIubm9kZVwiO1xuXG5pbXBvcnQgcmVnaXN0cnkgZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3JhbmRvbVwiO1xuaW1wb3J0IHsgcmVnaXN0cnlBc3NpZ25lZCB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJ5QXNzaWduZWQoY2xhc3MgTWF0cml4IHtcbiAgY29uc3RydWN0b3Iocm93cywgY29sdW1ucywgZWxlbWVudHMpIHtcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Um93cygpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xuICB9XG5cbiAgZ2V0Q29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zO1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gIH1cblxuICBzY2FsYXJNdWx0aXBseShzY2FsYXIpIHtcbiAgICBjb25zdCBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbWF0cml4U2NhbGFyTXVsdGlwbHkobWF0cml4RmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgbXVsdGlwbHlWZWN0b3IodmVjdG9yKSB7XG4gICAgY29uc3QgeyBWZWN0b3IgfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgIHZlY3RvckZsb2F0MzJBcnJheSA9IHZlY3Rvci50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIG1hdHJpeEZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSB2ZWN0b3JNdWx0aXBseU1hdHJpeCh2ZWN0b3JGbG9hdDMyQXJyYXksIG1hdHJpeEZsb2F0MzJBcnJheSwgdGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5yb3dzID0gc2l6ZTsgIC8vL1xuICAgIHRoaXMuY29sdW1ucyA9IHNpemU7IC8vL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcblxuICAgIGNvbnN0IGNhcmRpbmFsaXR5ID0gdGhpcy5yb3dzICogdGhpcy5jb2x1bW5zLFxuICAgICAgICAgIGxvd2VyQm91bmQgPSAtMSxcbiAgICAgICAgICB1cHBlckJvdW5kID0gKzE7XG5cbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgY2FyZGluYWxpdHk7IGNvdW50KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSByYW5kb20obG93ZXJCb3VuZCwgdXBwZXJCb3VuZCk7XG5cbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgcm93cyA9IHRoaXMucm93cyxcbiAgICAgICAgICBjb2x1bW5zID0gdGhpcy5jb2x1bW5zLFxuICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgICBlbGVtZW50c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHRvRmxvYXQzMkFycmF5KCkge1xuICAgIGNvbnN0IGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5lbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZmxvYXQzMkFycmF5O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzIH0gPSBqc29uLCAgLy9cbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgcm93cyA9IG51bGwsXG4gICAgICAgICAgY29sdW1ucyA9IG51bGwsXG4gICAgICAgICAgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICAgIG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm93c0NvbHVtbnNBbmRFbGVtZW50cyhDbGFzcywgcm93cywgY29sdW1ucywgZWxlbWVudHMpIHtcbiAgICBpZiAoZWxlbWVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbWVudHMgPSBjb2x1bW5zOyAvLy9cblxuICAgICAgY29sdW1ucyA9IHJvd3M7IC8vL1xuXG4gICAgICByb3dzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hdHJpeDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgbWF0cml4ID0gbmV3IENsYXNzKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KENsYXNzLCByb3dzLCBjb2x1bW5zLCBmbG9hdDMyQXJyYXkpIHtcbiAgICBpZiAoZmxvYXQzMkFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZsb2F0MzJBcnJheSA9IGNvbHVtbnM7IC8vL1xuXG4gICAgICBjb2x1bW5zID0gcm93czsgLy8vXG5cbiAgICAgIHJvd3MgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTWF0cml4OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSxcbiAgICAgICAgICBtYXRyaXggPSBuZXcgQ2xhc3Mocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmVnaXN0cnlBc3NpZ25lZCIsIk1hdHJpeCIsInJvd3MiLCJjb2x1bW5zIiwiZWxlbWVudHMiLCJnZXRSb3dzIiwiZ2V0Q29sdW1ucyIsImdldEVsZW1lbnRzIiwic2NhbGFyTXVsdGlwbHkiLCJzY2FsYXIiLCJtYXRyaXhGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsIm1hdHJpeFNjYWxhck11bHRpcGx5IiwicmVzdWx0TWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5IiwibXVsdGlwbHlWZWN0b3IiLCJ2ZWN0b3IiLCJWZWN0b3IiLCJyZWdpc3RyeSIsInZlY3RvckZsb2F0MzJBcnJheSIsInZlY3Rvck11bHRpcGx5TWF0cml4IiwicmVzdWx0VmVjdG9yIiwiZnJvbUZsb2F0MzJBcnJheSIsImluaXRpYWxpc2UiLCJzaXplIiwiY2FyZGluYWxpdHkiLCJsb3dlckJvdW5kIiwidXBwZXJCb3VuZCIsImNvdW50IiwiZWxlbWVudCIsInJhbmRvbSIsInB1c2giLCJ0b0pTT04iLCJqc29uIiwiZmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiZnJvbUpTT04iLCJtYXRyaXgiLCJmcm9tTm90aGluZyIsImZyb21Sb3dzQ29sdW1uc0FuZEVsZW1lbnRzIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJBcnJheSIsImZyb20iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O3VCQVAyRDtnRUFFdEM7c0JBRUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHdkIsV0FBZUEsSUFBQUEsMEJBQWdCLGdCQUFDO2FBQU1DLE9BQ3hCQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQ0FEQ0g7UUFFbEMsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOzs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsTUFBTTtnQkFDbkIsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MsY0FBYyxJQUN4Q0MscUJBQXFCQyxJQUFBQSw2QkFBb0IsRUFBQ0gsb0JBQW9CRCxTQUM5REssZUFBZWIsT0FBT2MsOEJBQThCLENBQUMsSUFBSSxDQUFDYixJQUFJLEVBQUUsSUFBSSxDQUFDQyxPQUFPLEVBQUVTO2dCQUVwRixPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLE1BQU07Z0JBQ25CLElBQU0sQUFBRUMsU0FBV0MsaUJBQVEsQ0FBbkJELFFBQ0ZFLHFC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