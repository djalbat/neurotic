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
            key: "subtractMatrix",
            value: function subtractMatrix(matrix) {
                var matrixA = this, matrixB = matrix, matrixAFloat32Array = matrixA.toFloat32Array(), matrixBFloat32Array = matrixB.toFloat32Array(), resultFloat32Array = (0, _libnode.matrixSubtractMatrix)(matrixAFloat32Array, matrixBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG1hdHJpeFNjYWxhck11bHRpcGx5LCBtYXRyaXhTdWJ0cmFjdE1hdHJpeCwgdmVjdG9yTXVsdGlwbHlNYXRyaXggfSBmcm9tIFwiLi4vbGliLm5vZGVcIjtcblxuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuL3V0aWxpdGllcy9yYW5kb21cIjtcbmltcG9ydCB7IHJlZ2lzdHJ5QXNzaWduZWQgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyeUFzc2lnbmVkKGNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGdldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgc2NhbGFyTXVsdGlwbHkoc2NhbGFyKSB7XG4gICAgY29uc3QgbWF0cml4RmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG1hdHJpeFNjYWxhck11bHRpcGx5KG1hdHJpeEZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIHN1YnRyYWN0TWF0cml4KG1hdHJpeCkge1xuICAgIGNvbnN0IG1hdHJpeEEgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtYXRyaXhCID0gbWF0cml4LCAvLy9cbiAgICAgICAgICBtYXRyaXhBRmxvYXQzMkFycmF5ID0gbWF0cml4QS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIG1hdHJpeEJGbG9hdDMyQXJyYXkgPSBtYXRyaXhCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbWF0cml4U3VidHJhY3RNYXRyaXgobWF0cml4QUZsb2F0MzJBcnJheSwgbWF0cml4QkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBtdWx0aXBseVZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB7IFZlY3RvciB9ID0gcmVnaXN0cnksXG4gICAgICAgICAgdmVjdG9yRmxvYXQzMkFycmF5ID0gdmVjdG9yLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4RmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHZlY3Rvck11bHRpcGx5TWF0cml4KHZlY3RvckZsb2F0MzJBcnJheSwgbWF0cml4RmxvYXQzMkFycmF5LCB0aGlzLnJvd3MsIHRoaXMuY29sdW1ucyksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBpbml0aWFsaXNlKHNpemUpIHtcbiAgICB0aGlzLnJvd3MgPSBzaXplOyAgLy8vXG4gICAgdGhpcy5jb2x1bW5zID0gc2l6ZTsgLy8vXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuXG4gICAgY29uc3QgY2FyZGluYWxpdHkgPSB0aGlzLnJvd3MgKiB0aGlzLmNvbHVtbnMsXG4gICAgICAgICAgbG93ZXJCb3VuZCA9IC0xLFxuICAgICAgICAgIHVwcGVyQm91bmQgPSArMTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBjYXJkaW5hbGl0eTsgY291bnQrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHJhbmRvbShsb3dlckJvdW5kLCB1cHBlckJvdW5kKTtcblxuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCByb3dzID0gdGhpcy5yb3dzLFxuICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLmNvbHVtbnMsXG4gICAgICAgICAgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgdG9GbG9hdDMyQXJyYXkoKSB7XG4gICAgY29uc3QgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgcm93cywgY29sdW1ucywgZWxlbWVudHMgfSA9IGpzb24sICAvL1xuICAgICAgICAgIG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCByb3dzID0gbnVsbCxcbiAgICAgICAgICBjb2x1bW5zID0gbnVsbCxcbiAgICAgICAgICBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb3dzQ29sdW1uc0FuZEVsZW1lbnRzKENsYXNzLCByb3dzLCBjb2x1bW5zLCBlbGVtZW50cykge1xuICAgIGlmIChlbGVtZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtZW50cyA9IGNvbHVtbnM7IC8vL1xuXG4gICAgICBjb2x1bW5zID0gcm93czsgLy8vXG5cbiAgICAgIHJvd3MgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gTWF0cml4OyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBtYXRyaXggPSBuZXcgQ2xhc3Mocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkoQ2xhc3MsIHJvd3MsIGNvbHVtbnMsIGZsb2F0MzJBcnJheSkge1xuICAgIGlmIChmbG9hdDMyQXJyYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZmxvYXQzMkFycmF5ID0gY29sdW1uczsgLy8vXG5cbiAgICAgIGNvbHVtbnMgPSByb3dzOyAvLy9cblxuICAgICAgcm93cyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXRyaXg7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShmbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIG1hdHJpeCA9IG5ldyBDbGFzcyhyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZWdpc3RyeUFzc2lnbmVkIiwiTWF0cml4Iiwicm93cyIsImNvbHVtbnMiLCJlbGVtZW50cyIsImdldFJvd3MiLCJnZXRDb2x1bW5zIiwiZ2V0RWxlbWVudHMiLCJzY2FsYXJNdWx0aXBseSIsInNjYWxhciIsIm1hdHJpeEZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwicmVzdWx0RmxvYXQzMkFycmF5IiwibWF0cml4U2NhbGFyTXVsdGlwbHkiLCJyZXN1bHRNYXRyaXgiLCJmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkiLCJzdWJ0cmFjdE1hdHJpeCIsIm1hdHJpeCIsIm1hdHJpeEEiLCJtYXRyaXhCIiwibWF0cml4QUZsb2F0MzJBcnJheSIsIm1hdHJpeEJGbG9hdDMyQXJyYXkiLCJtYXRyaXhTdWJ0cmFjdE1hdHJpeCIsIm11bHRpcGx5VmVjdG9yIiwidmVjdG9yIiwiVmVjdG9yIiwicmVnaXN0cnkiLCJ2ZWN0b3JGbG9hdDMyQXJyYXkiLCJ2ZWN0b3JNdWx0aXBseU1hdHJpeCIsInJlc3VsdFZlY3RvciIsImZyb21GbG9hdDMyQXJyYXkiLCJpbml0aWFsaXNlIiwic2l6ZSIsImNhcmRpbmFsaXR5IiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJjb3VudCIsImVsZW1lbnQiLCJyYW5kb20iLCJwdXNoIiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21KU09OIiwiZnJvbU5vdGhpbmciLCJmcm9tUm93c0NvbHVtbnNBbmRFbGVtZW50cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozt1QkFQaUY7Z0VBRTVEO3NCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR3ZCLFdBQWVBLElBQUFBLDBCQUFnQixnQkFBQzthQUFNQyxPQUN4QkMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7Z0NBRENIO1FBRWxDLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLE1BQU07Z0JBQ25CLElBQU1DLHFCQUFxQixJQUFJLENBQUNDLGNBQWMsSUFDeENDLHFCQUFxQkMsSUFBQUEsNkJBQW9CLEVBQUNILG9CQUFvQkQsU0FDOURLLGVBQWViLE9BQU9jLDhCQUE4QixDQUFDLElBQUksQ0FBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxFQUFFUztnQkFFcEYsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxNQUFNO2dCQUNuQixJQUFNQyxVQUFVLElBQUksRUFDZEMsVUFBVUYsUUFDVkcsc0JBQXNCRixRQUFRUCxjQUFjLElBQzVDVSxzQkFBc0JGLFFBQVFSLGNBQWMsSUFDNUNDLHFCQUFxQlUsSUFBQUEsNkJBQW9CLEVBQUNGLHFCQUFxQkMsc0JBQy9EUCxlQUFlYixPQUFPYyw4QkFBOEIsQ0FBQyxJQUFJLENBQUNiLElBQUksRUFBRSxJQUFJLENBQUNDLE9BQU8sRUFBRVM7Z0JBRXBGLE9BQU9FO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsTUFBTTtnQkFDbkIsSUFBTSxBQUFFQyxTQUFXQyxpQkFBUSxDQUFuQkQsUUFDRkUscUJBQXFCSCxPQUFPYixjQUFjLElBQzFDRCxxQkFBcUIsSUFBSSxDQUFDQyxjQUFjLElBQ3hDQyxxQkFBcUJnQixJQUFBQSw2QkFBb0IsRUFBQ0Qsb0JBQW9CakIsb0JBQW9CLElBQUksQ0FBQ1IsSUFBSSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxHQUN6RzBCLGVBQWVKLE9BQU9LLGdCQUFnQixDQUFDbEI7Z0JBRTdDLE9BQU9pQjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLElBQUk7Z0JBQ2IsSUFBSSxDQUFDOUIsSUFBSSxHQUFHOEIsTUFBTyxHQUFHO2dCQUN0QixJQUFJLENBQUM3QixPQUFPLEdBQUc2QixNQUFNLEdBQUc7Z0JBQ3hCLElBQUksQ0FBQzVCLFFBQVEsR0FBRyxFQUFFO2dCQUVsQixJQUFNNkIsY0FBYyxJQUFJLENBQUMvQixJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQ3RDK0IsYUFBYSxDQUFDLEdBQ2RDLGFBQWEsQ0FBQztnQkFFcEIsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFILGFBQWFHLFFBQVM7b0JBQ2hELElBQU1DLFVBQVVDLElBQUFBLGNBQU0sRUFBQ0osWUFBWUM7b0JBRW5DLElBQUksQ0FBQy9CLFFBQVEsQ0FBQ21DLElBQUksQ0FBQ0Y7Z0JBQ3JCO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXRDLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVLElBQUksQ0FBQ0EsT0FBTyxFQUN0QkMsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEJxQyxPQUFPO29CQUNMdkMsTUFBQUE7b0JBQ0FDLFNBQUFBO29CQUNBQyxVQUFBQTtnQkFDRjtnQkFFTixPQUFPcUM7WUFDVDs7O1lBRUE5QixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTStCLGVBQWUsSUFBSUMsYUFBYSxJQUFJLENBQUN2QyxRQUFRO2dCQUVuRCxPQUFPc0M7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTSCxJQUFJO2dCQUNsQixJQUFRdkMsT0FBNEJ1QyxLQUE1QnZDLE1BQU1DLFVBQXNCc0MsS0FBdEJ0QyxTQUFTQyxXQUFhcUMsS0FBYnJDLFVBQ2pCYSxTQUFTLElBQUloQixPQUFPQyxNQUFNQyxTQUFTQztnQkFFekMsT0FBT2E7WUFDVDs7O1lBRU80QixLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNM0MsT0FBTyxNQUNQQyxVQUFVLE1BQ1ZDLFdBQVcsTUFDWGEsU0FBUyxJQUFJaEIsT0FBT0MsTUFBTUMsU0FBU0M7Z0JBRXpDLE9BQU9hO1lBQ1Q7OztZQUVPNkIsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCQyxLQUFLLEVBQUU3QyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQkFDOUQsSUFBSUEsYUFBYTRDLFdBQVc7b0JBQzFCNUMsV0FBV0QsU0FBUyxHQUFHO29CQUV2QkEsVUFBVUQsTUFBTSxHQUFHO29CQUVuQkEsT0FBTzZDLE9BQU8sR0FBRztvQkFFakJBLFFBQVE5QyxRQUFRLEdBQUc7Z0JBQ3JCO2dCQUVBLElBQU1nQixTQUFTLElBQUk4QixNQUFNN0MsTUFBTUMsU0FBU0M7Z0JBRXhDLE9BQU9hO1lBQ1Q7OztZQUVPRixLQUFBQTttQkFBUCxTQUFPQSwrQkFBK0JnQyxLQUFLLEVBQUU3QyxJQUFJLEVBQUVDLE9BQU8sRUFBRXVDLFlBQVk7Z0JBQ3RFLElBQUlBLGlCQUFpQk0sV0FBVztvQkFDOUJOLGVBQWV2QyxTQUFTLEdBQUc7b0JBRTNCQSxVQUFVRCxNQUFNLEdBQUc7b0JBRW5CQSxPQUFPNkMsT0FBTyxHQUFHO29CQUVqQkEsUUFBUTlDLFFBQVEsR0FBRztnQkFDckI7Z0JBRUEsSUFBTUcsV0FBVzZDLE1BQU1DLElBQUksQ0FBQ1IsZUFDdEJ6QixTQUFTLElBQUk4QixNQUFNN0MsTUFBTUMsU0FBU0M7Z0JBRXhDLE9BQU9hO1lBQ1QifQ==