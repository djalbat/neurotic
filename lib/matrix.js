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
var _constants = require("./constants");
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
                var element = 1 / size, cardinality = size * size;
                for(var count = 0; count < cardinality; count++){
                    this.elements.push(element);
                }
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = "[\n";
                var lastRow = this.rows - 1, lastColumn = this.columns - 1;
                for(var row = 0; row < this.rows; row++){
                    string += "  ";
                    for(var column = 0; column < this.columns; column++){
                        var index = row * this.columns + column, element = this.elements[index], number = Number(element), roundedNumber = number.toFixed(_constants.DECIMAL_PLACES);
                        if (roundedNumber >= 0) {
                            string += "+";
                        }
                        string += roundedNumber;
                        if (column < lastColumn) {
                            string += ", ";
                        }
                    }
                    if (row < lastRow) {
                        string += ",\n";
                    }
                }
                string += "\n]";
                return string;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZE1hdHJpeFRvTWF0cml4LCBcbiAgICAgICAgIGRpdmlkZU1hdHJpeEJ5U2NhbGFyLCBcbiAgICAgICAgIG11bHRpcGx5TWF0cml4QnlTY2FsYXIsIFxuICAgICAgICAgc3VidHJhY3RNYXRyaXhGcm9tTWF0cml4IH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCB7IERFQ0lNQUxfUExBQ0VTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGdldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgYWRkTWF0cml4KG1hdHJpeCkge1xuICAgIGNvbnN0IG1hdHJpeEEgPSBtYXRyaXgsIC8vL1xuICAgICAgICAgIG1hdHJpeEIgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtYXRyaXhBRmxvYXQzMkFycmF5ID0gbWF0cml4QS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIG1hdHJpeEJGbG9hdDMyQXJyYXkgPSBtYXRyaXhCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gYWRkTWF0cml4VG9NYXRyaXgobWF0cml4QUZsb2F0MzJBcnJheSwgbWF0cml4QkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcbiAgICBcbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgc3VidHJhY3RNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3QgbWF0cml4QSA9IG1hdHJpeCwgLy8vXG4gICAgICAgICAgbWF0cml4QiA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1hdHJpeEFGbG9hdDMyQXJyYXkgPSBtYXRyaXhBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4QkZsb2F0MzJBcnJheSA9IG1hdHJpeEIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBzdWJ0cmFjdE1hdHJpeEZyb21NYXRyaXgobWF0cml4QUZsb2F0MzJBcnJheSwgbWF0cml4QkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBkaXZpZGVCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBjb25zdCBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gZGl2aWRlTWF0cml4QnlTY2FsYXIobWF0cml4RmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBjb25zdCBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbXVsdGlwbHlNYXRyaXhCeVNjYWxhcihtYXRyaXhGbG9hdDMyQXJyYXksIHNjYWxhciksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBpbml0aWFsaXNlKHNpemUpIHtcbiAgICB0aGlzLnJvd3MgPSBzaXplOyAgLy8vXG4gICAgdGhpcy5jb2x1bW5zID0gc2l6ZTsgLy8vXG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IDEgLyBzaXplLFxuICAgICAgICAgIGNhcmRpbmFsaXR5ID0gc2l6ZSAqIHNpemU7XG5cbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgY2FyZGluYWxpdHk7IGNvdW50KyspIHtcbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nID0gXCJbXFxuXCI7XG5cbiAgICBjb25zdCBsYXN0Um93ID0gdGhpcy5yb3dzIC0xLFxuICAgICAgICAgIGxhc3RDb2x1bW4gPSB0aGlzLmNvbHVtbnMgLTE7XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnJvd3M7IHJvdysrKSB7XG4gICAgICBzdHJpbmcgKz0gXCIgIFwiO1xuXG4gICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCB0aGlzLmNvbHVtbnM7IGNvbHVtbisrKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gcm93ICogdGhpcy5jb2x1bW5zICsgY29sdW1uLFxuICAgICAgICAgICAgICBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgICAgIG51bWJlciA9IE51bWJlcihlbGVtZW50KSxcbiAgICAgICAgICAgICAgcm91bmRlZE51bWJlciA9IG51bWJlci50b0ZpeGVkKERFQ0lNQUxfUExBQ0VTKTtcblxuICAgICAgICBpZiAocm91bmRlZE51bWJlciA+PSAwKSB7XG4gICAgICAgICAgc3RyaW5nICs9IFwiK1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RyaW5nICs9IHJvdW5kZWROdW1iZXI7XG5cbiAgICAgICAgaWYgKGNvbHVtbiA8IGxhc3RDb2x1bW4pIHtcbiAgICAgICAgICBzdHJpbmcgKz0gXCIsIFwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3cgPCBsYXN0Um93KSB7XG4gICAgICAgIHN0cmluZyArPSBcIixcXG5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzdHJpbmcgKz0gXCJcXG5dXCI7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnJvd3MsXG4gICAgICAgICAgY29sdW1ucyA9IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyByb3dzLCBjb2x1bW5zLCBlbGVtZW50cyB9ID0ganNvbiwgIC8vXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHJvd3MgPSBudWxsLFxuICAgICAgICAgIGNvbHVtbnMgPSBudWxsLFxuICAgICAgICAgIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cbiAgXG4gIHN0YXRpYyBmcm9tUm93c0FuZENvbHVtbnMocm93cywgY29sdW1ucykge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW10sXG4gICAgICAgICAgY2FyZGluYWxpdHkgPSByb3dzICogY29sdW1ucztcbiAgICBcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FyZGluYWxpdHk7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSAwO1xuXG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcbiAgICBcbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheShyb3dzLCBjb2x1bW5zLCBmbG9hdDMyQXJyYXkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSxcbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXRyaXgiLCJyb3dzIiwiY29sdW1ucyIsImVsZW1lbnRzIiwiZ2V0Um93cyIsImdldENvbHVtbnMiLCJnZXRFbGVtZW50cyIsImFkZE1hdHJpeCIsIm1hdHJpeCIsIm1hdHJpeEEiLCJtYXRyaXhCIiwibWF0cml4QUZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwibWF0cml4QkZsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsImFkZE1hdHJpeFRvTWF0cml4IiwicmVzdWx0TWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5Iiwic3VidHJhY3RNYXRyaXgiLCJzdWJ0cmFjdE1hdHJpeEZyb21NYXRyaXgiLCJkaXZpZGVCeVNjYWxhciIsInNjYWxhciIsIm1hdHJpeEZsb2F0MzJBcnJheSIsImRpdmlkZU1hdHJpeEJ5U2NhbGFyIiwibXVsdGlwbHlCeVNjYWxhciIsIm11bHRpcGx5TWF0cml4QnlTY2FsYXIiLCJpbml0aWFsaXNlIiwic2l6ZSIsImVsZW1lbnQiLCJjYXJkaW5hbGl0eSIsImNvdW50IiwicHVzaCIsImFzU3RyaW5nIiwic3RyaW5nIiwibGFzdFJvdyIsImxhc3RDb2x1bW4iLCJyb3ciLCJjb2x1bW4iLCJpbmRleCIsIm51bWJlciIsIk51bWJlciIsInJvdW5kZWROdW1iZXIiLCJ0b0ZpeGVkIiwiREVDSU1BTF9QTEFDRVMiLCJ0b0pTT04iLCJqc29uIiwiZmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiZnJvbUpTT04iLCJmcm9tTm90aGluZyIsImZyb21Sb3dzQW5kQ29sdW1ucyIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7dUJBSm9CO3lCQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHVCQUFOO2FBQU1BLE9BQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRO2dDQURoQkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFD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