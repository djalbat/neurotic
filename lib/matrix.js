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
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
            key: "getVectorAtRow",
            value: function getVectorAtRow(Vector, row) {
                var start = row * this.columns, end = start + this.columns, elements = this.elements.slice(start, end), vector = Vector.fromElements(elements);
                return vector;
            }
        },
        {
            key: "setVectorAtRow",
            value: function setVectorAtRow(row, vector) {
                var _this_elements;
                var start = row * this.columns, deleteCount = this.columns, elements = vector.getElements();
                (_this_elements = this.elements).splice.apply(_this_elements, [
                    start,
                    deleteCount
                ].concat(_to_consumable_array(elements)));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZE1hdHJpeFRvTWF0cml4LCBcbiAgICAgICAgIGRpdmlkZU1hdHJpeEJ5U2NhbGFyLCBcbiAgICAgICAgIG11bHRpcGx5TWF0cml4QnlTY2FsYXIsIFxuICAgICAgICAgc3VidHJhY3RNYXRyaXhGcm9tTWF0cml4IH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCB7IERFQ0lNQUxfUExBQ0VTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGdldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0VmVjdG9yQXRSb3coVmVjdG9yLCByb3cpIHtcbiAgICBjb25zdCBzdGFydCA9IHJvdyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbmQgPSBzdGFydCArIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgdmVjdG9yID0gVmVjdG9yLmZyb21FbGVtZW50cyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc2V0VmVjdG9yQXRSb3cocm93LCB2ZWN0b3IpIHtcbiAgICBjb25zdCBzdGFydCA9IHJvdyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHZlY3Rvci5nZXRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5lbGVtZW50cy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5lbGVtZW50cyk7XG4gIH1cblxuICBhZGRNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3QgbWF0cml4QSA9IG1hdHJpeCwgLy8vXG4gICAgICAgICAgbWF0cml4QiA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1hdHJpeEFGbG9hdDMyQXJyYXkgPSBtYXRyaXhBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4QkZsb2F0MzJBcnJheSA9IG1hdHJpeEIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBhZGRNYXRyaXhUb01hdHJpeChtYXRyaXhBRmxvYXQzMkFycmF5LCBtYXRyaXhCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuICAgIFxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBzdWJ0cmFjdE1hdHJpeChtYXRyaXgpIHtcbiAgICBjb25zdCBtYXRyaXhBID0gbWF0cml4LCAvLy9cbiAgICAgICAgICBtYXRyaXhCID0gdGhpcywgLy8vXG4gICAgICAgICAgbWF0cml4QUZsb2F0MzJBcnJheSA9IG1hdHJpeEEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhCRmxvYXQzMkFycmF5ID0gbWF0cml4Qi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHN1YnRyYWN0TWF0cml4RnJvbU1hdHJpeChtYXRyaXhBRmxvYXQzMkFycmF5LCBtYXRyaXhCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIGRpdmlkZUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIGNvbnN0IG1hdHJpeEZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBkaXZpZGVNYXRyaXhCeVNjYWxhcihtYXRyaXhGbG9hdDMyQXJyYXksIHNjYWxhciksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBtdWx0aXBseUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIGNvbnN0IG1hdHJpeEZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseU1hdHJpeEJ5U2NhbGFyKG1hdHJpeEZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMucm93cyA9IHNpemU7ICAvLy9cbiAgICB0aGlzLmNvbHVtbnMgPSBzaXplOyAvLy9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBlbGVtZW50ID0gMSAvIHNpemUsXG4gICAgICAgICAgY2FyZGluYWxpdHkgPSBzaXplICogc2l6ZTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBjYXJkaW5hbGl0eTsgY291bnQrKykge1xuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGxldCBzdHJpbmcgPSBcIltcXG5cIjtcblxuICAgIGNvbnN0IGxhc3RSb3cgPSB0aGlzLnJvd3MgLTEsXG4gICAgICAgICAgbGFzdENvbHVtbiA9IHRoaXMuY29sdW1ucyAtMTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMucm93czsgcm93KyspIHtcbiAgICAgIHN0cmluZyArPSBcIiAgXCI7XG5cbiAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMuY29sdW1uczsgY29sdW1uKyspIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSByb3cgKiB0aGlzLmNvbHVtbnMgKyBjb2x1bW4sXG4gICAgICAgICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2luZGV4XSxcbiAgICAgICAgICAgICAgbnVtYmVyID0gTnVtYmVyKGVsZW1lbnQpLFxuICAgICAgICAgICAgICByb3VuZGVkTnVtYmVyID0gbnVtYmVyLnRvRml4ZWQoREVDSU1BTF9QTEFDRVMpO1xuXG4gICAgICAgIGlmIChyb3VuZGVkTnVtYmVyID49IDApIHtcbiAgICAgICAgICBzdHJpbmcgKz0gXCIrXCI7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJpbmcgKz0gcm91bmRlZE51bWJlcjtcblxuICAgICAgICBpZiAoY29sdW1uIDwgbGFzdENvbHVtbikge1xuICAgICAgICAgIHN0cmluZyArPSBcIiwgXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHJvdyA8IGxhc3RSb3cpIHtcbiAgICAgICAgc3RyaW5nICs9IFwiLFxcblwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0cmluZyArPSBcIlxcbl1cIjtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgcm93cyA9IHRoaXMucm93cyxcbiAgICAgICAgICBjb2x1bW5zID0gdGhpcy5jb2x1bW5zLFxuICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgcm93cyxcbiAgICAgICAgICAgIGNvbHVtbnMsXG4gICAgICAgICAgICBlbGVtZW50c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHRvRmxvYXQzMkFycmF5KCkge1xuICAgIGNvbnN0IGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5lbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZmxvYXQzMkFycmF5O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB7IHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzIH0gPSBqc29uLCAgLy9cbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3Qgcm93cyA9IG51bGwsXG4gICAgICAgICAgY29sdW1ucyA9IG51bGwsXG4gICAgICAgICAgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICAgIG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuICBcbiAgc3RhdGljIGZyb21Sb3dzQW5kQ29sdW1ucyhyb3dzLCBjb2x1bW5zKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXSxcbiAgICAgICAgICBjYXJkaW5hbGl0eSA9IHJvd3MgKiBjb2x1bW5zO1xuICAgIFxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYXJkaW5hbGl0eTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZWxlbWVudCA9IDA7XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuICAgIFxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHJvd3MsIGNvbHVtbnMsIGZsb2F0MzJBcnJheSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShmbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1hdHJpeCIsInJvd3MiLCJjb2x1bW5zIiwiZWxlbWVudHMiLCJnZXRSb3dzIiwiZ2V0Q29sdW1ucyIsImdldEVsZW1lbnRzIiwiZ2V0VmVjdG9yQXRSb3ciLCJWZWN0b3IiLCJyb3ciLCJzdGFydCIsImVuZCIsInNsaWNlIiwidmVjdG9yIiwiZnJvbUVsZW1lbnRzIiwic2V0VmVjdG9yQXRSb3ciLCJkZWxldGVDb3VudCIsInNwbGljZSIsImFkZE1hdHJpeCIsIm1hdHJpeCIsIm1hdHJpeEEiLCJtYXRyaXhCIiwibWF0cml4QUZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwibWF0cml4QkZsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsImFkZE1hdHJpeFRvTWF0cml4IiwicmVzdWx0TWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5Iiwic3VidHJhY3RNYXRyaXgiLCJzdWJ0cmFjdE1hdHJpeEZyb21NYXRyaXgiLCJkaXZpZGVCeVNjYWxhciIsInNjYWxhciIsIm1hdHJpeEZsb2F0MzJBcnJheSIsImRpdmlkZU1hdHJpeEJ5U2NhbGFyIiwibXVsdGlwbHlCeVNjYWxhciIsIm11bHRpcGx5TWF0cml4QnlTY2FsYXIiLCJpbml0aWFsaXNlIiwic2l6ZSIsImVsZW1lbnQiLCJjYXJkaW5hbGl0eSIsImNvdW50IiwicHVzaCIsImFzU3RyaW5nIiwic3RyaW5nIiwibGFzdFJvdyIsImxhc3RDb2x1bW4iLCJjb2x1bW4iLCJpbmRleCIsIm51bWJlciIsIk51bWJlciIsInJvdW5kZWROdW1iZXIiLCJ0b0ZpeGVkIiwiREVDSU1BTF9QTEFDRVMiLCJ0b0pTT04iLCJqc29uIiwiZmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiZnJvbUpTT04iLCJmcm9tTm90aGluZyIsImZyb21Sb3dzQW5kQ29sdW1ucyIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7dUJBSm9CO3lCQUVWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSx1QkFBTjthQUFNQSxPQUNQQyxJQUFJLEVBQUVDLE9BQU8sRUFBRUMsUUFBUTtnQ0FEaEJIO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBSkNIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxPQUFPO1lBQ3JCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLE1BQU0sRUFBRUMsR0FBRztnQkFDeEIsSUFBTUMsUUFBUUQsTUFBTSxJQUFJLENBQUNQLE9BQU8sRUFD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