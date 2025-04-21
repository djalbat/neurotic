"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Vector;
    }
});
var _libnode = require("../lib.node");
var _matrix = /*#__PURE__*/ _interop_require_default(require("./matrix"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Vector = /*#__PURE__*/ function() {
    function Vector(elements) {
        _class_call_check(this, Vector);
        this.elements = elements;
    }
    _create_class(Vector, [
        {
            key: "getElements",
            value: function getElements() {
                return this.elements;
            }
        },
        {
            key: "getWidth",
            value: function getWidth() {
                var elementsLength = this.elements.length, width = elementsLength; ///
                return width;
            }
        },
        {
            key: "softmax",
            value: function softmax() {
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.softmaxVector)(vectorFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "elementAt",
            value: function elementAt(index) {
                var element = this.elements[index];
                return element;
            }
        },
        {
            key: "addVector",
            value: function addVector(vector) {
                var vectorA = vector, vectorB = this, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), resultFloat32Array = (0, _libnode.addVectorToVector)(vectorAFloat32Array, vectorBFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "subtractVector",
            value: function subtractVector(vector) {
                var vectorA = vector, vectorB = this, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), resultFloat32Array = (0, _libnode.subtractVectorFromVector)(vectorAFloat32Array, vectorBFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "divideByScalar",
            value: function divideByScalar(scalar) {
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.divideVectorByScalar)(vectorFloat32Array, scalar), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "multiplyByScalar",
            value: function multiplyByScalar(scalar) {
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.multiplyVectorByScalar)(vectorFloat32Array, scalar), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "multiplyByMatrix",
            value: function multiplyByMatrix(matrix) {
                var rows = matrix.getRows(), columns = matrix.getColumns(), vectorFloat32Array = this.toFloat32Array(), matrixFloat32Array = matrix.toFloat32Array(), resultFloat32Array = (0, _libnode.multiplyVectorByMatrix)(vectorFloat32Array, matrixFloat32Array, rows, columns), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "outerMultiplyByVector",
            value: function outerMultiplyByVector(vector) {
                var vectorA = this, vectorB = vector, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), vectorAWidth = vectorA.getWidth(), vectorBWidth = vectorB.getWidth(), rows = vectorAWidth, columns = vectorBWidth, resultFloat32Array = (0, _libnode.outerMultiplyVectorByVector)(vectorAFloat32Array, vectorBFloat32Array), resultMatrix = _matrix.default.fromRowsColumnsAndFloat32Array(rows, columns, resultFloat32Array);
                return resultMatrix;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var string = "";
                string += "[ ";
                var width = this.getWidth(), lastIndex = width - 1;
                for(var index = 0; index < width; index++){
                    var element = this.elements[index], number = Number(element), roundedNumber = number.toFixed(_constants.DECIMAL_PLACES);
                    if (roundedNumber >= 0) {
                        string += "+";
                    }
                    string += roundedNumber;
                    if (index < lastIndex) {
                        string += ", ";
                    }
                }
                string += " ]";
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var elements = this.elements, json = {
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
            key: "fromElements",
            value: function fromElements(elements) {
                var vector = new Vector(elements);
                return vector;
            }
        },
        {
            key: "fromFloat32Array",
            value: function fromFloat32Array(float32Array) {
                var elements = Array.from(float32Array), vector = new Vector(elements);
                return vector;
            }
        }
    ]);
    return Vector;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNvZnRtYXhWZWN0b3IsXG4gICAgICAgICBhZGRWZWN0b3JUb1ZlY3RvcixcbiAgICAgICAgIGRpdmlkZVZlY3RvckJ5U2NhbGFyLFxuICAgICAgICAgbXVsdGlwbHlWZWN0b3JCeVNjYWxhcixcbiAgICAgICAgIG11bHRpcGx5VmVjdG9yQnlNYXRyaXgsXG4gICAgICAgICBzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IsXG4gICAgICAgICBvdXRlck11bHRpcGx5VmVjdG9yQnlWZWN0b3IgfSBmcm9tIFwiLi4vbGliLm5vZGVcIjtcblxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi9tYXRyaXhcIjtcblxuaW1wb3J0IHsgREVDSU1BTF9QTEFDRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSBlbGVtZW50c0xlbmd0aDsgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzb2Z0bWF4KCkge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBzb2Z0bWF4VmVjdG9yKHZlY3RvckZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBlbGVtZW50QXQoaW5kZXgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpbmRleF07XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGFkZFZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IGFkZFZlY3RvclRvVmVjdG9yKHZlY3RvckFGbG9hdDMyQXJyYXksIHZlY3RvckJGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgc3VidHJhY3RWZWN0b3IodmVjdG9yKSB7XG4gICAgY29uc3QgdmVjdG9yQSA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZlY3RvckFGbG9hdDMyQXJyYXkgPSB2ZWN0b3JBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQkZsb2F0MzJBcnJheSA9IHZlY3RvckIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBkaXZpZGVCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gZGl2aWRlVmVjdG9yQnlTY2FsYXIodmVjdG9yRmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbXVsdGlwbHlWZWN0b3JCeVNjYWxhcih2ZWN0b3JGbG9hdDMyQXJyYXksIHNjYWxhciksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBtdWx0aXBseUJ5TWF0cml4KG1hdHJpeCkge1xuICAgIGNvbnN0IHJvd3MgPSBtYXRyaXguZ2V0Um93cygpLFxuICAgICAgICAgIGNvbHVtbnMgPSBtYXRyaXguZ2V0Q29sdW1ucygpLFxuICAgICAgICAgIHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhGbG9hdDMyQXJyYXkgPSBtYXRyaXgudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseVZlY3RvckJ5TWF0cml4KHZlY3RvckZsb2F0MzJBcnJheSwgbWF0cml4RmxvYXQzMkFycmF5LCByb3dzLCBjb2x1bW5zKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG91dGVyTXVsdGlwbHlCeVZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckFXaWR0aCA9IHZlY3RvckEuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB2ZWN0b3JCV2lkdGggPSB2ZWN0b3JCLmdldFdpZHRoKCksXG4gICAgICAgICAgcm93cyA9IHZlY3RvckFXaWR0aCwgIC8vL1xuICAgICAgICAgIGNvbHVtbnMgPSB2ZWN0b3JCV2lkdGgsIC8vL1xuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHJvd3MsIGNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9IFwiXCI7XG5cbiAgICBzdHJpbmcgKz0gXCJbIFwiO1xuXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgbGFzdEluZGV4ID0gd2lkdGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHdpZHRoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgICBudW1iZXIgPSBOdW1iZXIoZWxlbWVudCksXG4gICAgICAgICAgICByb3VuZGVkTnVtYmVyID0gbnVtYmVyLnRvRml4ZWQoREVDSU1BTF9QTEFDRVMpO1xuXG4gICAgICBpZiAocm91bmRlZE51bWJlciA+PSAwKSB7XG4gICAgICAgIHN0cmluZyArPSBcIitcIjtcbiAgICAgIH1cblxuICAgICAgc3RyaW5nICs9IHJvdW5kZWROdW1iZXI7XG5cbiAgICAgIGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICBzdHJpbmcgKz0gXCIsIFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0cmluZyArPSBcIiBdXCI7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudHMoZWxlbWVudHMpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsb2F0MzJBcnJheShmbG9hdDMyQXJyYXkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSwgIC8vL1xuICAgICAgICAgIHZlY3RvciA9IG5ldyBWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZlY3RvciIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJnZXRXaWR0aCIsImVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJzb2Z0bWF4IiwidmVjdG9yRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJyZXN1bHRGbG9hdDMyQXJyYXkiLCJzb2Z0bWF4VmVjdG9yIiwicmVzdWx0VmVjdG9yIiwiZnJvbUZsb2F0MzJBcnJheSIsImVsZW1lbnRBdCIsImluZGV4IiwiZWxlbWVudCIsImFkZFZlY3RvciIsInZlY3RvciIsInZlY3RvckEiLCJ2ZWN0b3JCIiwidmVjdG9yQUZsb2F0MzJBcnJheSIsInZlY3RvckJGbG9hdDMyQXJyYXkiLCJhZGRWZWN0b3JUb1ZlY3RvciIsInN1YnRyYWN0VmVjdG9yIiwic3VidHJhY3RWZWN0b3JGcm9tVmVjdG9yIiwiZGl2aWRlQnlTY2FsYXIiLCJzY2FsYXIiLCJkaXZpZGVWZWN0b3JCeVNjYWxhciIsIm11bHRpcGx5QnlTY2FsYXIiLCJtdWx0aXBseVZlY3RvckJ5U2NhbGFyIiwibXVsdGlwbHlCeU1hdHJpeCIsIm1hdHJpeCIsInJvd3MiLCJnZXRSb3dzIiwiY29sdW1ucyIsImdldENvbHVtbnMiLCJtYXRyaXhGbG9hdDMyQXJyYXkiLCJtdWx0aXBseVZlY3RvckJ5TWF0cml4Iiwib3V0ZXJNdWx0aXBseUJ5VmVjdG9yIiwidmVjdG9yQVdpZHRoIiwidmVjdG9yQldpZHRoIiwib3V0ZXJNdWx0aXBseVZlY3RvckJ5VmVjdG9yIiwicmVzdWx0TWF0cml4IiwiTWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5IiwiYXNTdHJpbmciLCJzdHJpbmciLCJsYXN0SW5kZXgiLCJudW1iZXIiLCJOdW1iZXIiLCJyb3VuZGVkTnVtYmVyIiwidG9GaXhlZCIsIkRFQ0lNQUxfUExBQ0VTIiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21FbGVtZW50cyIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFjcUJBOzs7dUJBTnVCOzZEQUV6Qjt5QkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHVCQUFOO2FBQU1BLE9BQ1BDLFFBQVE7Z0NBREREO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBRkNEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNILFFBQVEsQ0FBQ0ksTUFBTSxFQUNyQ0MsUUFBUUYsZ0JBQWdCLEdBQUc7Z0JBRWpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MsY0FBYyxJQUN4Q0MscUJBQXFCQyxJQUFBQSxzQkFBYSxFQUFDSCxxQkFDbkNJLGVBQWVaLEFBbkJKQSxPQW1CV2EsZ0JBQWdCLENBQUNIO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLEtBQUs7Z0JBQ2IsSUFBTUMsVUFBVSxJQUFJLENBQUNmLFFBQVEsQ0FBQ2MsTUFBTTtnQkFFcEMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxNQUFNO2dCQUNkLElBQU1DLFVBQVVELFFBQ1ZFLFVBQVUsSUFBSSxFQUNkQyxzQkFBc0JGLFFBQVFWLGNBQWMsSUFDNUNhLHNCQUFzQkYsUUFBUVgsY0FBYyxJQUM1Q0MscUJBQXFCYSxJQUFBQSwwQkFBaUIsRUFBQ0YscUJBQXFCQyxzQkFDNURWLGVBQWVaLEFBcENKQSxPQW9DV2EsZ0JBQWdCLENBQUNIO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQVksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVOLE1BQU07Z0JBQ25CLElBQU1DLFVBQVVELFFBQ1ZFLFVBQVUsSUFBSSxFQUNkQyxzQkFBc0JGLFFBQVFWLGNBQWMsSUFDNUNhLHNCQUFzQkYsUUFBUVgsY0FBYyxJQUM1Q0MscUJBQXFCZSxJQUFBQSxpQ0FBd0IsRUFBQ0oscUJBQXFCQyxzQkFDbkVWLGVBQWVaLEFBL0NKQSxPQStDV2EsZ0JBQWdCLENBQUNIO2dCQUU3QyxPQUFPRTtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLE1BQU07Z0JBQ25CLElBQU1uQixxQkFBcUIsSUFBSSxDQUFDQyxjQUFjLElBQ3hDQyxxQkFBcUJrQixJQUFBQSw2QkFBb0IsRUFBQ3BCLG9CQUFvQm1CLFNBQzlEZixlQUFlWixBQXZESkEsT0F1RFdhLGdCQUFnQixDQUFDSDtnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCRixNQUFNO2dCQUNyQixJQUFNbkIscUJBQXFCLElBQUksQ0FBQ0MsY0FBYyxJQUN4Q0MscUJBQXFCb0IsSUFBQUEsK0JBQXNCLEVBQUN0QixvQkFBb0JtQixTQUNoRWYsZUFBZVosQUEvREpBLE9BK0RXYSxnQkFBZ0IsQ0FBQ0g7Z0JBRTdDLE9BQU9FO1lBQ1Q7OztZQUVBbUIsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsTUFBTTtnQkFDckIsSUFBTUMsT0FBT0QsT0FBT0UsT0FBTyxJQUNyQkMsVUFBVUgsT0FBT0ksVUFBVSxJQUMzQjVCLHFCQUFxQixJQUFJLENBQUNDLGNBQWMsSUFDeEM0QixxQkFBcUJMLE9BQU92QixjQUFjLElBQzFDQyxxQkFBcUI0QixJQUFBQSwrQkFBc0IsRUFBQzlCLG9CQUFvQjZCLG9CQUFvQkosTUFBTUUsVUFDMUZ2QixlQUFlWixBQTFFSkEsT0EwRVdhLGdCQUFnQixDQUFDSDtnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUEyQixLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCckIsTUFBTTtnQkFDMUIsSUFBTUMsVUFBVSxJQUFJLEVBQ2RDLFVBQVVGLFFBQ1ZHLHNCQUFzQkYsUUFBUVYsY0FBYyxJQUM1Q2Esc0JBQXNCRixRQUFRWCxjQUFjLElBQzVDK0IsZUFBZXJCLFFBQVFoQixRQUFRLElBQy9Cc0MsZUFBZXJCLFFBQVFqQixRQUFRLElBQy9COEIsT0FBT08sY0FDUEwsVUFBVU0sY0FDVi9CLHFCQUFxQmdDLElBQUFBLG9DQUEyQixFQUFDckIscUJBQXFCQyxzQkFDdEVxQixlQUFlQyxlQUFNLENBQUNDLDhCQUE4QixDQUFDWixNQUFNRSxTQUFTekI7Z0JBRTFFLE9BQU9pQztZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFNBQVM7Z0JBRWJBLFVBQVU7Z0JBRVYsSUFBTXpDLFFBQVEsSUFBSSxDQUFDSCxRQUFRLElBQ3JCNkMsWUFBWTFDLFFBQVE7Z0JBRTFCLElBQUssSUFBSVMsUUFBUSxHQUFHQSxRQUFRVCxPQUFPUyxRQUFTO29CQUMxQyxJQUFNQyxVQUFVLElBQUksQ0FBQ2YsUUFBUSxDQUFDYyxNQUFNLEVBQzlCa0MsU0FBU0MsT0FBT2xDLFVBQ2hCbUMsZ0JBQWdCRixPQUFPRyxPQUFPLENBQUNDLHlCQUFjO29CQUVuRCxJQUFJRixpQkFBaUIsR0FBRzt3QkFDdEJKLFVBQVU7b0JBQ1o7b0JBRUFBLFVBQVVJO29CQUVWLElBQUlwQyxRQUFRaUMsV0FBVzt3QkFDckJELFVBQVU7b0JBQ1o7Z0JBQ0Y7Z0JBRUFBLFVBQVU7Z0JBRVYsT0FBT0E7WUFDVDs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNckQsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEJzRCxPQUFPO29CQUNMdEQsVUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT3NEO1lBQ1Q7OztZQUVBOUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU0rQyxlQUFlLElBQUlDLGFBQWEsSUFBSSxDQUFDeEQsUUFBUTtnQkFFbkQsT0FBT3VEO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYXpELFFBQVE7Z0JBQzFCLElBQU1pQixTQUFTLElBM0lFbEIsT0EySVNDO2dCQUUxQixPQUFPaUI7WUFDVDs7O1lBRU9MLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQjJDLFlBQVk7Z0JBQ2xDLElBQU12RCxXQUFXMEQsTUFBTUMsSUFBSSxDQUFDSixlQUN0QnRDLFNBQVMsSUFsSkVsQixPQWtKU0M7Z0JBRTFCLE9BQU9pQjtZQUNUOzs7V0FySm1CbEIifQ==