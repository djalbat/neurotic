"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Matrix;
    }
});
var _libnode = require("../lib.node");
var _random = require("./utilities/random");
var _vector = /*#__PURE__*/ _interop_require_default(require("./vector"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Matrix = /*#__PURE__*/ function() {
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
                var vectorFloat32Array = vector.toFloat32Array(), matrixFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.vectorMatrixMultiply)(vectorFloat32Array, matrixFloat32Array, this.rows, this.columns), resultVector = _vector.default.fromFloat32Array(resultFloat32Array);
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
        }
    ]);
    return Matrix;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlY3Rvck1hdHJpeE11bHRpcGx5IH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuL3V0aWxpdGllcy9yYW5kb21cIjtcblxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IHtcbiAgY29uc3RydWN0b3Iocm93cywgY29sdW1ucywgZWxlbWVudHMpIHtcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Um93cygpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xuICB9XG5cbiAgZ2V0Q29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zO1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gIH1cblxuICBtdWx0aXBseVZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB2ZWN0b3IudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gdmVjdG9yTWF0cml4TXVsdGlwbHkodmVjdG9yRmxvYXQzMkFycmF5LCBtYXRyaXhGbG9hdDMyQXJyYXksIHRoaXMucm93cywgdGhpcy5jb2x1bW5zKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMucm93cyA9IHNpemU7ICAvLy9cbiAgICB0aGlzLmNvbHVtbnMgPSBzaXplOyAvLy9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBjYXJkaW5hbGl0eSA9IHRoaXMucm93cyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBsb3dlckJvdW5kID0gLTEsXG4gICAgICAgICAgdXBwZXJCb3VuZCA9ICsxO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGNhcmRpbmFsaXR5OyBjb3VudCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gcmFuZG9tKGxvd2VyQm91bmQsIHVwcGVyQm91bmQpO1xuXG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnJvd3MsXG4gICAgICAgICAgY29sdW1ucyA9IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyByb3dzLCBjb2x1bW5zLCBlbGVtZW50cyB9ID0ganNvbiwgIC8vXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHJvd3MgPSBudWxsLFxuICAgICAgICAgIGNvbHVtbnMgPSBudWxsLFxuICAgICAgICAgIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJvd3NDb2x1bW5zQW5kRWxlbWVudHMoQ2xhc3MsIHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgaWYgKGVsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRzID0gY29sdW1uczsgLy8vXG5cbiAgICAgIGNvbHVtbnMgPSByb3dzOyAvLy9cblxuICAgICAgcm93cyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXRyaXg7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBDbGFzcyhyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWF0cml4Iiwicm93cyIsImNvbHVtbnMiLCJlbGVtZW50cyIsImdldFJvd3MiLCJnZXRDb2x1bW5zIiwiZ2V0RWxlbWVudHMiLCJtdWx0aXBseVZlY3RvciIsInZlY3RvciIsInZlY3RvckZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwibWF0cml4RmxvYXQzMkFycmF5IiwicmVzdWx0RmxvYXQzMkFycmF5IiwidmVjdG9yTWF0cml4TXVsdGlwbHkiLCJyZXN1bHRWZWN0b3IiLCJWZWN0b3IiLCJmcm9tRmxvYXQzMkFycmF5IiwiaW5pdGlhbGlzZSIsInNpemUiLCJjYXJkaW5hbGl0eSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwiY291bnQiLCJlbGVtZW50IiwicmFuZG9tIiwicHVzaCIsInRvSlNPTiIsImpzb24iLCJmbG9hdDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJmcm9tSlNPTiIsIm1hdHJpeCIsImZyb21Ob3RoaW5nIiwiZnJvbVJvd3NDb2x1bW5zQW5kRWxlbWVudHMiLCJDbGFzcyIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7dUJBTmdCO3NCQUVkOzZEQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUosSUFBQSxBQUFNQSx1QkFBTjthQUFNQSxPQUNQQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQ0FEaEJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBSkNIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLE1BQU07Z0JBQ25CLElBQU1DLHFCQUFxQkQsT0FBT0UsY0FBYyxJQUMxQ0MscUJBQXFCLElBQUksQ0FBQ0QsY0FBYyxJQUN4Q0UscUJBQXFCQyxJQUFBQSw2QkFBb0IsRUFBQ0osb0JBQW9CRSxvQkFBb0IsSUFBSSxDQUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDQyxPQUFPLEdBQ3pHWSxlQUFlQyxlQUFNLENBQUNDLGdCQUFnQixDQUFDSjtnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUNiLElBQUksQ0FBQ2pCLElBQUksR0FBR2lCLE1BQU8sR0FBRztnQkFDdEIsSUFBSSxDQUFDaEIsT0FBTyxHQUFHZ0IsTUFBTSxHQUFHO2dCQUN4QixJQUFJLENBQUNmLFFBQVEsR0FBRyxFQUFFO2dCQUVsQixJQUFNZ0IsY0FBYyxJQUFJLENBQUNsQixJQUFJLEdBQUcsSUFBSSxDQUFDQyxPQUFPLEVBQ3RDa0IsYUFBYSxDQUFDLEdBQ2RDLGFBQWEsQ0FBQztnQkFFcEIsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFILGFBQWFHLFFBQVM7b0JBQ2hELElBQU1DLFVBQVVDLElBQUFBLGNBQU0sRUFBQ0osWUFBWUM7b0JBRW5DLElBQUksQ0FBQ2xCLFFBQVEsQ0FBQ3NCLElBQUksQ0FBQ0Y7Z0JBQ3JCO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTXpCLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxVQUFVLElBQUksQ0FBQ0EsT0FBTyxFQUN0QkMsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEJ3QixPQUFPO29CQUNMMUIsTUFBQUE7b0JBQ0FDLFNBQUFBO29CQUNBQyxVQUFBQTtnQkFDRjtnQkFFTixPQUFPd0I7WUFDVDs7O1lBRUFqQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWtCLGVBQWUsSUFBSUMsYUFBYSxJQUFJLENBQUMxQixRQUFRO2dCQUVuRCxPQUFPeUI7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTSCxJQUFJO2dCQUNsQixJQUFRMUIsT0FBNEIwQixLQUE1QjFCLE1BQU1DLFVBQXNCeUIsS0FBdEJ6QixTQUFTQyxXQUFhd0IsS0FBYnhCLFVBQ2pCNEIsU0FBUyxJQWpFRS9CLE9BaUVTQyxNQUFNQyxTQUFTQztnQkFFekMsT0FBTzRCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtnQkFDTCxJQUFNL0IsT0FBTyxNQUNQQyxVQUFVLE1BQ1ZDLFdBQVcsTUFDWDRCLFNBQVMsSUExRUUvQixPQTBFU0MsTUFBTUMsU0FBU0M7Z0JBRXpDLE9BQU80QjtZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsMkJBQTJCQyxLQUFLLEVBQUVqQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQkFDOUQsSUFBSUEsYUFBYWdDLFdBQVc7b0JBQzFCaEMsV0FBV0QsU0FBUyxHQUFHO29CQUV2QkEsVUFBVUQsTUFBTSxHQUFHO29CQUVuQkEsT0FBT2lDLE9BQU8sR0FBRztvQkFFakJBLFFBdkZlbEMsUUF1RkMsR0FBRztnQkFDckI7Z0JBRUEsSUFBTStCLFNBQVMsSUFBSUcsTUFBTWpDLE1BQU1DLFNBQVNDO2dCQUV4QyxPQUFPNEI7WUFDVDs7O1dBN0ZtQi9CIn0=