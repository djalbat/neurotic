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
                scalar = Number(scalar); ///
                var matrixFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.divideMatrixByScalar)(matrixFloat32Array, scalar), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
                return resultMatrix;
            }
        },
        {
            key: "multiplyByScalar",
            value: function multiplyByScalar(scalar) {
                scalar = Number(scalar); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZE1hdHJpeFRvTWF0cml4LCBcbiAgICAgICAgIGRpdmlkZU1hdHJpeEJ5U2NhbGFyLCBcbiAgICAgICAgIG11bHRpcGx5TWF0cml4QnlTY2FsYXIsIFxuICAgICAgICAgc3VidHJhY3RNYXRyaXhGcm9tTWF0cml4IH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCB7IERFQ0lNQUxfUExBQ0VTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGdldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0VmVjdG9yQXRSb3coVmVjdG9yLCByb3cpIHtcbiAgICBjb25zdCBzdGFydCA9IHJvdyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbmQgPSBzdGFydCArIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgdmVjdG9yID0gVmVjdG9yLmZyb21FbGVtZW50cyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc2V0VmVjdG9yQXRSb3cocm93LCB2ZWN0b3IpIHtcbiAgICBjb25zdCBzdGFydCA9IHJvdyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBkZWxldGVDb3VudCA9IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHZlY3Rvci5nZXRFbGVtZW50cygpO1xuXG4gICAgdGhpcy5lbGVtZW50cy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5lbGVtZW50cyk7XG4gIH1cblxuICBhZGRNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3QgbWF0cml4QSA9IG1hdHJpeCwgLy8vXG4gICAgICAgICAgbWF0cml4QiA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1hdHJpeEFGbG9hdDMyQXJyYXkgPSBtYXRyaXhBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4QkZsb2F0MzJBcnJheSA9IG1hdHJpeEIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBhZGRNYXRyaXhUb01hdHJpeChtYXRyaXhBRmxvYXQzMkFycmF5LCBtYXRyaXhCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuICAgIFxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBzdWJ0cmFjdE1hdHJpeChtYXRyaXgpIHtcbiAgICBjb25zdCBtYXRyaXhBID0gbWF0cml4LCAvLy9cbiAgICAgICAgICBtYXRyaXhCID0gdGhpcywgLy8vXG4gICAgICAgICAgbWF0cml4QUZsb2F0MzJBcnJheSA9IG1hdHJpeEEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhCRmxvYXQzMkFycmF5ID0gbWF0cml4Qi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHN1YnRyYWN0TWF0cml4RnJvbU1hdHJpeChtYXRyaXhBRmxvYXQzMkFycmF5LCBtYXRyaXhCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIGRpdmlkZUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIHNjYWxhciA9IE51bWJlcihzY2FsYXIpOyAgLy8vXG5cbiAgICBjb25zdCBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gZGl2aWRlTWF0cml4QnlTY2FsYXIobWF0cml4RmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBzY2FsYXIgPSBOdW1iZXIoc2NhbGFyKTsgIC8vL1xuXG4gICAgY29uc3QgbWF0cml4RmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG11bHRpcGx5TWF0cml4QnlTY2FsYXIobWF0cml4RmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkodGhpcy5yb3dzLCB0aGlzLmNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5yb3dzID0gc2l6ZTsgIC8vL1xuICAgIHRoaXMuY29sdW1ucyA9IHNpemU7IC8vL1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSAxIC8gc2l6ZSxcbiAgICAgICAgICBjYXJkaW5hbGl0eSA9IHNpemUgKiBzaXplO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGNhcmRpbmFsaXR5OyBjb3VudCsrKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9IFwiW1xcblwiO1xuXG4gICAgY29uc3QgbGFzdFJvdyA9IHRoaXMucm93cyAtMSxcbiAgICAgICAgICBsYXN0Q29sdW1uID0gdGhpcy5jb2x1bW5zIC0xO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5yb3dzOyByb3crKykge1xuICAgICAgc3RyaW5nICs9IFwiICBcIjtcblxuICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy5jb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICBjb25zdCBpbmRleCA9IHJvdyAqIHRoaXMuY29sdW1ucyArIGNvbHVtbixcbiAgICAgICAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaW5kZXhdLFxuICAgICAgICAgICAgICBudW1iZXIgPSBOdW1iZXIoZWxlbWVudCksXG4gICAgICAgICAgICAgIHJvdW5kZWROdW1iZXIgPSBudW1iZXIudG9GaXhlZChERUNJTUFMX1BMQUNFUyk7XG5cbiAgICAgICAgaWYgKHJvdW5kZWROdW1iZXIgPj0gMCkge1xuICAgICAgICAgIHN0cmluZyArPSBcIitcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmluZyArPSByb3VuZGVkTnVtYmVyO1xuXG4gICAgICAgIGlmIChjb2x1bW4gPCBsYXN0Q29sdW1uKSB7XG4gICAgICAgICAgc3RyaW5nICs9IFwiLCBcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocm93IDwgbGFzdFJvdykge1xuICAgICAgICBzdHJpbmcgKz0gXCIsXFxuXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RyaW5nICs9IFwiXFxuXVwiO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCByb3dzID0gdGhpcy5yb3dzLFxuICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLmNvbHVtbnMsXG4gICAgICAgICAgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICByb3dzLFxuICAgICAgICAgICAgY29sdW1ucyxcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgdG9GbG9hdDMyQXJyYXkoKSB7XG4gICAgY29uc3QgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgcm93cywgY29sdW1ucywgZWxlbWVudHMgfSA9IGpzb24sICAvL1xuICAgICAgICAgIG1hdHJpeCA9IG5ldyBNYXRyaXgocm93cywgY29sdW1ucywgZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCByb3dzID0gbnVsbCxcbiAgICAgICAgICBjb2x1bW5zID0gbnVsbCxcbiAgICAgICAgICBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG4gIFxuICBzdGF0aWMgZnJvbVJvd3NBbmRDb2x1bW5zKHJvd3MsIGNvbHVtbnMpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IFtdLFxuICAgICAgICAgIGNhcmRpbmFsaXR5ID0gcm93cyAqIGNvbHVtbnM7XG4gICAgXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhcmRpbmFsaXR5OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gMDtcblxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG4gICAgXG4gICAgcmV0dXJuIG1hdHJpeDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkocm93cywgY29sdW1ucywgZmxvYXQzMkFycmF5KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTWF0cml4Iiwicm93cyIsImNvbHVtbnMiLCJlbGVtZW50cyIsImdldFJvd3MiLCJnZXRDb2x1bW5zIiwiZ2V0RWxlbWVudHMiLCJnZXRWZWN0b3JBdFJvdyIsIlZlY3RvciIsInJvdyIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ2ZWN0b3IiLCJmcm9tRWxlbWVudHMiLCJzZXRWZWN0b3JBdFJvdyIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwiYWRkTWF0cml4IiwibWF0cml4IiwibWF0cml4QSIsIm1hdHJpeEIiLCJtYXRyaXhBRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJtYXRyaXhCRmxvYXQzMkFycmF5IiwicmVzdWx0RmxvYXQzMkFycmF5IiwiYWRkTWF0cml4VG9NYXRyaXgiLCJyZXN1bHRNYXRyaXgiLCJmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkiLCJzdWJ0cmFjdE1hdHJpeCIsInN1YnRyYWN0TWF0cml4RnJvbU1hdHJpeCIsImRpdmlkZUJ5U2NhbGFyIiwic2NhbGFyIiwiTnVtYmVyIiwibWF0cml4RmxvYXQzMkFycmF5IiwiZGl2aWRlTWF0cml4QnlTY2FsYXIiLCJtdWx0aXBseUJ5U2NhbGFyIiwibXVsdGlwbHlNYXRyaXhCeVNjYWxhciIsImluaXRpYWxpc2UiLCJzaXplIiwiZWxlbWVudCIsImNhcmRpbmFsaXR5IiwiY291bnQiLCJwdXNoIiwiYXNTdHJpbmciLCJzdHJpbmciLCJsYXN0Um93IiwibGFzdENvbHVtbiIsImNvbHVtbiIsImluZGV4IiwibnVtYmVyIiwicm91bmRlZE51bWJlciIsInRvRml4ZWQiLCJERUNJTUFMX1BMQUNFUyIsInRvSlNPTiIsImpzb24iLCJmbG9hdDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJmcm9tSlNPTiIsImZyb21Ob3RoaW5nIiwiZnJvbVJvd3NBbmRDb2x1bW5zIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt1QkFKb0I7eUJBRVY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHVCQUFOO2FBQU1BLE9BQ1BDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRO2dDQURoQkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFKQ0g7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE9BQU87WUFDckI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFB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