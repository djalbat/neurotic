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
            key: "subtractMatrix",
            value: function subtractMatrix(matrix) {
                var matrixA = matrix, matrixB = this, matrixAFloat32Array = matrixA.toFloat32Array(), matrixBFloat32Array = matrixB.toFloat32Array(), resultFloat32Array = (0, _libnode.subtractMatrixFromMatrix)(matrixAFloat32Array, matrixBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
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
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYXRyaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG11bHRpcGx5TWF0cml4QnlTY2FsYXIsIHN1YnRyYWN0TWF0cml4RnJvbU1hdHJpeCB9IGZyb20gXCIuLi9saWIubm9kZVwiO1xuXG5pbXBvcnQgeyByYW5kb20gfSBmcm9tIFwiLi91dGlsaXRpZXMvcmFuZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdHJpeCB7XG4gIGNvbnN0cnVjdG9yKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5zO1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldFJvd3MoKSB7XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGdldENvbHVtbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1ucztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgc3VidHJhY3RNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3QgbWF0cml4QSA9IG1hdHJpeCwgLy8vXG4gICAgICAgICAgbWF0cml4QiA9IHRoaXMsIC8vL1xuICAgICAgICAgIG1hdHJpeEFGbG9hdDMyQXJyYXkgPSBtYXRyaXhBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4QkZsb2F0MzJBcnJheSA9IG1hdHJpeEIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBzdWJ0cmFjdE1hdHJpeEZyb21NYXRyaXgobWF0cml4QUZsb2F0MzJBcnJheSwgbWF0cml4QkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSh0aGlzLnJvd3MsIHRoaXMuY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBtdWx0aXBseUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIGNvbnN0IG1hdHJpeEZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseU1hdHJpeEJ5U2NhbGFyKG1hdHJpeEZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHRoaXMucm93cywgdGhpcy5jb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMucm93cyA9IHNpemU7ICAvLy9cbiAgICB0aGlzLmNvbHVtbnMgPSBzaXplOyAvLy9cbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBjYXJkaW5hbGl0eSA9IHRoaXMucm93cyAqIHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBsb3dlckJvdW5kID0gLTEsXG4gICAgICAgICAgdXBwZXJCb3VuZCA9ICsxO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGNhcmRpbmFsaXR5OyBjb3VudCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gcmFuZG9tKGxvd2VyQm91bmQsIHVwcGVyQm91bmQpO1xuXG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHJvd3MgPSB0aGlzLnJvd3MsXG4gICAgICAgICAgY29sdW1ucyA9IHRoaXMuY29sdW1ucyxcbiAgICAgICAgICBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHJvd3MsXG4gICAgICAgICAgICBjb2x1bW5zLFxuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyByb3dzLCBjb2x1bW5zLCBlbGVtZW50cyB9ID0ganNvbiwgIC8vXG4gICAgICAgICAgbWF0cml4ID0gbmV3IE1hdHJpeChyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IHJvd3MgPSBudWxsLFxuICAgICAgICAgIGNvbHVtbnMgPSBudWxsLFxuICAgICAgICAgIGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBtYXRyaXggPSBuZXcgTWF0cml4KHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJvd3NDb2x1bW5zQW5kRWxlbWVudHMoQ2xhc3MsIHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKSB7XG4gICAgaWYgKGVsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRzID0gY29sdW1uczsgLy8vXG5cbiAgICAgIGNvbHVtbnMgPSByb3dzOyAvLy9cblxuICAgICAgcm93cyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBNYXRyaXg7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IG1hdHJpeCA9IG5ldyBDbGFzcyhyb3dzLCBjb2x1bW5zLCBlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gbWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheShDbGFzcywgcm93cywgY29sdW1ucywgZmxvYXQzMkFycmF5KSB7XG4gICAgaWYgKGZsb2F0MzJBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmbG9hdDMyQXJyYXkgPSBjb2x1bW5zOyAvLy9cblxuICAgICAgY29sdW1ucyA9IHJvd3M7IC8vL1xuXG4gICAgICByb3dzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IE1hdHJpeDsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksXG4gICAgICAgICAgbWF0cml4ID0gbmV3IENsYXNzKHJvd3MsIGNvbHVtbnMsIGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBtYXRyaXg7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXRyaXgiLCJyb3dzIiwiY29sdW1ucyIsImVsZW1lbnRzIiwiZ2V0Um93cyIsImdldENvbHVtbnMiLCJnZXRFbGVtZW50cyIsInN1YnRyYWN0TWF0cml4IiwibWF0cml4IiwibWF0cml4QSIsIm1hdHJpeEIiLCJtYXRyaXhBRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJtYXRyaXhCRmxvYXQzMkFycmF5IiwicmVzdWx0RmxvYXQzMkFycmF5Iiwic3VidHJhY3RNYXRyaXhGcm9tTWF0cml4IiwicmVzdWx0TWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5IiwibXVsdGlwbHlCeVNjYWxhciIsInNjYWxhciIsIm1hdHJpeEZsb2F0MzJBcnJheSIsIm11bHRpcGx5TWF0cml4QnlTY2FsYXIiLCJpbml0aWFsaXNlIiwic2l6ZSIsImNhcmRpbmFsaXR5IiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJjb3VudCIsImVsZW1lbnQiLCJyYW5kb20iLCJwdXNoIiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21KU09OIiwiZnJvbU5vdGhpbmciLCJmcm9tUm93c0NvbHVtbnNBbmRFbGVtZW50cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt1QkFKNEM7c0JBRTFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVSLElBQUEsQUFBTUEsdUJBQU47YUFBTUEsT0FDUEMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFFBQVE7Z0NBRGhCSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUpDSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUNyQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxNQUFNO2dCQUNuQixJQUFNQyxVQUFVRCxRQUNWRSxVQUFVLElBQUksRUFDZEMsc0JBQXNCRixRQUFRRyxjQUFjLElBQzVDQyxzQkFBc0JILFFBQVFFLGNBQWMsSUFDNUNFLHFCQUFxQkMsSUFBQUEsaUNBQXdCLEVBQUNKLHFCQUFxQkUsc0JBQ25FRyxlQUFlaEIsQUF6QkpBLE9BeUJXaUIsOEJBQThCLENBQUMsSUFBSSxDQUFDaEIsSUFBSSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxFQUFFWTtnQkFFcEYsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLE1BQU07Z0JBQ3JCLElBQU1DLHFCQUFxQixJQUFJLENBQUNSLGNBQWMsSUFDeENFLHFCQUFxQk8sSUFBQUEsK0JBQXNCLEVBQUNELG9CQUFvQkQsU0FDaEVILGVBQWVoQixBQWpDSkEsT0FpQ1dpQiw4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