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
            key: "addMatrix",
            value: function addMatrix(matrix) {
                var matrixA = matrix, matrixB = this, matrixAFloat32Array = matrixA.toFloat32Array(), matrixBFloat32Array = matrixB.toFloat32Array(), resultFloat32Array = (0, _libnode.addMatrixToMatrix)(matrixAFloat32Array, matrixBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
                return resultMatrix;
            }
        },
        {
            key: "subtractMatrix",
            value: function subtractMatrix(matrix) {
                var matrixA = matrix, matrixB = this, matrixAFloat32Array = matrixA.toFloat32Array(), matrixBFloat32Array = matrixB.toFloat32Array(), resultFloat32Array = (0, _libnode.subtractMatrixFromMatrix)(matrixAFloat32Array, matrixBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
                return resultMatrix;
            }
        },
        {
            key: "divideByScalar",
            value: function divideByScalar(scalar) {
                var matrixFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.divideMatrixByScalar)(matrixFloat32Array, scalar), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
                return resultMatrix;
            }
        },
        {
            key: "multiplyByScalar",
            value: function multiplyByScalar(scalar) {
                var matrixFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.multiplyMatrixByScalar)(matrixFloat32Array, scalar), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
                return resultMatrix;
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
            key: "fromRowsAndColumns",
            value: function fromRowsAndColumns(rows, columns) {
                var elements = [], cardinality = rows * columns;
                for(var index = 0; index < cardinality; index++){
                    var element = 0;
                    elements.push(element);
                }
                var matrix = new Matrix(rows, columns, elements);
                return matrix;
            }
        },
        {
            key: "fromRowsColumnsAndFloat32Array",
            value: function fromRowsColumnsAndFloat32Array(rows, columns, float32Array) {
                var elements = Array.from(float32Array), matrix = new Matrix(rows, columns, elements);
                return matrix;
            }
        }
    ]);
    return Matrix;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZE1hdHJpeFRvTWF0cml4LCBcbiAgICAgICAgIGRpdmlkZU1hdHJpeEJ5U2NhbGFyLCBcbiAgICAgICAgIG11bHRpcGx5TWF0cml4QnlTY2FsYXIsIFxuICAgICAgICAgc3VidHJhY3RNYXRyaXhGcm9tTWF0cml4IH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuL3V0aWxpdGllcy9yYW5kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0cml4IHtcbiAgY29uc3RydWN0b3Iocm93cywgY29sdW1ucywgZWxlbWVudHMpIHtcbiAgICB0aGlzLnJvd3MgPSByb3dzO1xuICAgIHRoaXMuY29sdW1ucyA9IGNvbHVtbnM7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0Um93cygpIHtcbiAgICByZXR1cm4gdGhpcy5yb3dzO1xuICB9XG5cbiAgZ2V0Q29sdW1ucygpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zO1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gIH1cblxuICBhZGRNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3QgbWF0cml4QSA9IG1hdHJpeCwgLy8vXG4gICAgICAgICAgbWF0cml4QiA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1hdHJpeEFGbG9hdDMyQXJyYXkgPSBtYXRyaXhBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4QkZsb2F0MzJBcnJheSA9IG1hdHJpeEIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBhZGRNYXRyaXhUb01hdHJpeChtYXRyaXhBRmxvYXQzMkFycmF5LCBtYXRyaXhCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuICAgIFxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBzdWJ0cmFjdE1hdHJpeChtYXRyaXgpIHtcbiAgICBjb25zdCBtYXRyaXhBID0gbWF0cml4LCAvLy9cbiAgICAgICAgICBtYXRyaXhCID0gdGhpcywgLy8vXG4gICAgICAgICAgbWF0cml4QUZsb2F0MzJBcnJheSA9IG1hdHJpeEEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhCRmxvYXQzMkFycmF5ID0gbWF0cml4Qi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHN1YnRyYWN0TWF0cml4RnJvbU1hdHJpeChtYXRyaXhBRmxvYXQzMkFycmF5LCBtYXRyaXhCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIGRpdmlkZUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIGNvbnN0IG1hdHJpeEZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBkaXZpZGVNYXRyaXhCeVNjYWxhcihtYXRyaXhGbG9hdDMyQXJyYXksIHNjYWxhciksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBtdWx0aXBseUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIGNvbnN0IG1hdHJpeEZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseU1hdHJpeEJ5U2NhbGFyKG1hdHJpeEZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMucm93cyA9IHNpemU7ICAvLy9cbiAgICB0aGlzLmNvbHVtbnMgPSBzaXplOyAvLy9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBjYXJkaW5hbGl0eSA9IHRoaXMucm93cyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBsb3dlckJvdW5kID0gLTEsXG4gICAgICAgICAgdXBwZXJCb3VuZCA9ICsxO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGNhcmRpbmFsaXR5OyBjb3VudCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gcmFuZG9tKGxvd2VyQm91bmQsIHVwcGVyQm91bmQpO1xuXG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnJvd3MsXG4gICAgICAgICAgY29sdW1ucyA9IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyByb3dzLCBjb2x1bW5zLCBlbGVtZW50cyB9ID0ganNvbiwgIC8vXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHJvd3MgPSBudWxsLFxuICAgICAgICAgIGNvbHVtbnMgPSBudWxsLFxuICAgICAgICAgIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUm93c0FuZENvbHVtbnMocm93cywgY29sdW1ucykge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW10sXG4gICAgICAgICAgY2FyZGluYWxpdHkgPSByb3dzICogY29sdW1ucztcbiAgICBcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FyZGluYWxpdHk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSAwO1xuICAgICAgXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheShyb3dzLCBjb2x1bW5zLCBmbG9hdDMyQXJyYXkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSxcbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXRyaXgiLCJyb3dzIiwiY29sdW1ucyIsImVsZW1lbnRzIiwiZ2V0Um93cyIsImdldENvbHVtbnMiLCJnZXRFbGVtZW50cyIsImFkZE1hdHJpeCIsIm1hdHJpeCIsIm1hdHJpeEEiLCJtYXRyaXhCIiwibWF0cml4QUZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwibWF0cml4QkZsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsImFkZE1hdHJpeFRvTWF0cml4IiwicmVzdWx0TWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5Iiwic3VidHJhY3RNYXRyaXgiLCJzdWJ0cmFjdE1hdHJpeEZyb21NYXRyaXgiLCJkaXZpZGVCeVNjYWxhciIsInNjYWxhciIsIm1hdHJpeEZsb2F0MzJBcnJheSIsImRpdmlkZU1hdHJpeEJ5U2NhbGFyIiwibXVsdGlwbHlCeVNjYWxhciIsIm11bHRpcGx5TWF0cml4QnlTY2FsYXIiLCJpbml0aWFsaXNlIiwic2l6ZSIsImNhcmRpbmFsaXR5IiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJjb3VudCIsImVsZW1lbnQiLCJyYW5kb20iLCJwdXNoIiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21KU09OIiwiZnJvbU5vdGhpbmciLCJmcm9tUm93c0FuZENvbHVtbnMiLCJpbmRleCIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7dUJBSm9CO3NCQUVsQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLHVC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