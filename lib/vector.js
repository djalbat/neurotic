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
            key: "getElementAt",
            value: function getElementAt(index) {
                var element = this.elements[index];
                return element;
            }
        },
        {
            key: "setElementAt",
            value: function setElementAt(index, element) {
                this.elements[index] = element;
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
                scalar = Number(scalar); ///
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.divideVectorByScalar)(vectorFloat32Array, scalar), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "multiplyByScalar",
            value: function multiplyByScalar(scalar) {
                scalar = Number(scalar); ///
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
            value: function outerMultiplyByVector(Matrix, vector) {
                var vectorA = this, vectorB = vector, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), vectorAWidth = vectorA.getWidth(), vectorBWidth = vectorB.getWidth(), rows = vectorAWidth, columns = vectorBWidth, resultFloat32Array = (0, _libnode.outerMultiplyVectorByVector)(vectorAFloat32Array, vectorBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(rows, columns, resultFloat32Array);
                return resultMatrix;
            }
        },
        {
            key: "initialise",
            value: function initialise(size) {
                this.elements = [];
                var element = 1, cardinality = size; ///
                for(var count = 0; count < cardinality; count++){
                    this.elements.push(element);
                }
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
            key: "fromNothing",
            value: function fromNothing() {
                var elements = null, vector = new Vector(elements);
                return vector;
            }
        },
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
        },
        {
            key: "fromWidthAndElement",
            value: function fromWidthAndElement(width, element) {
                var elements = [];
                for(var count = 0; count < width; count++){
                    elements.push(element);
                }
                var vector = new Vector(elements);
                return vector;
            }
        }
    ]);
    return Vector;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNvZnRtYXhWZWN0b3IsXG4gICAgICAgICBhZGRWZWN0b3JUb1ZlY3RvcixcbiAgICAgICAgIGRpdmlkZVZlY3RvckJ5U2NhbGFyLFxuICAgICAgICAgbXVsdGlwbHlWZWN0b3JCeVNjYWxhcixcbiAgICAgICAgIG11bHRpcGx5VmVjdG9yQnlNYXRyaXgsXG4gICAgICAgICBzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IsXG4gICAgICAgICBvdXRlck11bHRpcGx5VmVjdG9yQnlWZWN0b3IgfSBmcm9tIFwiLi4vbGliLm5vZGVcIjtcblxuaW1wb3J0IHsgREVDSU1BTF9QTEFDRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSBlbGVtZW50c0xlbmd0aDsgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzb2Z0bWF4KCkge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBzb2Z0bWF4VmVjdG9yKHZlY3RvckZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBnZXRFbGVtZW50QXQoaW5kZXgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpbmRleF07XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHNldEVsZW1lbnRBdChpbmRleCwgZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudHNbaW5kZXhdID0gZWxlbWVudDtcbiAgfVxuXG4gIGFkZFZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IGFkZFZlY3RvclRvVmVjdG9yKHZlY3RvckFGbG9hdDMyQXJyYXksIHZlY3RvckJGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgc3VidHJhY3RWZWN0b3IodmVjdG9yKSB7XG4gICAgY29uc3QgdmVjdG9yQSA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZlY3RvckFGbG9hdDMyQXJyYXkgPSB2ZWN0b3JBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQkZsb2F0MzJBcnJheSA9IHZlY3RvckIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBkaXZpZGVCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBzY2FsYXIgPSBOdW1iZXIoc2NhbGFyKTsgIC8vL1xuXG4gICAgY29uc3QgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IGRpdmlkZVZlY3RvckJ5U2NhbGFyKHZlY3RvckZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG11bHRpcGx5QnlTY2FsYXIoc2NhbGFyKSB7XG4gICAgc2NhbGFyID0gTnVtYmVyKHNjYWxhcik7ICAvLy9cblxuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseVZlY3RvckJ5U2NhbGFyKHZlY3RvckZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG11bHRpcGx5QnlNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3Qgcm93cyA9IG1hdHJpeC5nZXRSb3dzKCksXG4gICAgICAgICAgY29sdW1ucyA9IG1hdHJpeC5nZXRDb2x1bW5zKCksXG4gICAgICAgICAgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIG1hdHJpeEZsb2F0MzJBcnJheSA9IG1hdHJpeC50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG11bHRpcGx5VmVjdG9yQnlNYXRyaXgodmVjdG9yRmxvYXQzMkFycmF5LCBtYXRyaXhGbG9hdDMyQXJyYXksIHJvd3MsIGNvbHVtbnMpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgb3V0ZXJNdWx0aXBseUJ5VmVjdG9yKE1hdHJpeCwgdmVjdG9yKSB7XG4gICAgY29uc3QgdmVjdG9yQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZlY3RvckIgPSB2ZWN0b3IsIC8vL1xuICAgICAgICAgIHZlY3RvckFGbG9hdDMyQXJyYXkgPSB2ZWN0b3JBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQkZsb2F0MzJBcnJheSA9IHZlY3RvckIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JBV2lkdGggPSB2ZWN0b3JBLmdldFdpZHRoKCksXG4gICAgICAgICAgdmVjdG9yQldpZHRoID0gdmVjdG9yQi5nZXRXaWR0aCgpLFxuICAgICAgICAgIHJvd3MgPSB2ZWN0b3JBV2lkdGgsICAvLy9cbiAgICAgICAgICBjb2x1bW5zID0gdmVjdG9yQldpZHRoLCAvLy9cbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBvdXRlck11bHRpcGx5VmVjdG9yQnlWZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheShyb3dzLCBjb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMuZWxlbWVudHMgPSBbXTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSAxLFxuICAgICAgICAgIGNhcmRpbmFsaXR5ID0gc2l6ZTsgLy8vXG5cbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgY2FyZGluYWxpdHk7IGNvdW50KyspIHtcbiAgICAgIHRoaXMuZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhc1N0cmluZygpIHtcbiAgICBsZXQgc3RyaW5nID0gXCJcIjtcblxuICAgIHN0cmluZyArPSBcIlsgXCI7XG5cbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKSxcbiAgICAgICAgICBsYXN0SW5kZXggPSB3aWR0aCAtIDE7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgd2lkdGg7IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2luZGV4XSxcbiAgICAgICAgICAgIG51bWJlciA9IE51bWJlcihlbGVtZW50KSxcbiAgICAgICAgICAgIHJvdW5kZWROdW1iZXIgPSBudW1iZXIudG9GaXhlZChERUNJTUFMX1BMQUNFUyk7XG5cbiAgICAgIGlmIChyb3VuZGVkTnVtYmVyID49IDApIHtcbiAgICAgICAgc3RyaW5nICs9IFwiK1wiO1xuICAgICAgfVxuXG4gICAgICBzdHJpbmcgKz0gcm91bmRlZE51bWJlcjtcblxuICAgICAgaWYgKGluZGV4IDwgbGFzdEluZGV4KSB7XG4gICAgICAgIHN0cmluZyArPSBcIiwgXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RyaW5nICs9IFwiIF1cIjtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBlbGVtZW50c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHRvRmxvYXQzMkFycmF5KCkge1xuICAgIGNvbnN0IGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5lbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZmxvYXQzMkFycmF5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICB2ZWN0b3IgPSBuZXcgVmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcihlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21GbG9hdDMyQXJyYXkoZmxvYXQzMkFycmF5KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksICAvLy9cbiAgICAgICAgICB2ZWN0b3IgPSBuZXcgVmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVdpZHRoQW5kRWxlbWVudCh3aWR0aCwgZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG5cbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgd2lkdGg7IGNvdW50KyspIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgdmVjdG9yID0gbmV3IFZlY3RvcihlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVjdG9yIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsImdldFdpZHRoIiwiZWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsInNvZnRtYXgiLCJ2ZWN0b3JGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsInNvZnRtYXhWZWN0b3IiLCJyZXN1bHRWZWN0b3IiLCJmcm9tRmxvYXQzMkFycmF5IiwiZ2V0RWxlbWVudEF0IiwiaW5kZXgiLCJlbGVtZW50Iiwic2V0RWxlbWVudEF0IiwiYWRkVmVjdG9yIiwidmVjdG9yIiwidmVjdG9yQSIsInZlY3RvckIiLCJ2ZWN0b3JBRmxvYXQzMkFycmF5IiwidmVjdG9yQkZsb2F0MzJBcnJheSIsImFkZFZlY3RvclRvVmVjdG9yIiwic3VidHJhY3RWZWN0b3IiLCJzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IiLCJkaXZpZGVCeVNjYWxhciIsInNjYWxhciIsIk51bWJlciIsImRpdmlkZVZlY3RvckJ5U2NhbGFyIiwibXVsdGlwbHlCeVNjYWxhciIsIm11bHRpcGx5VmVjdG9yQnlTY2FsYXIiLCJtdWx0aXBseUJ5TWF0cml4IiwibWF0cml4Iiwicm93cyIsImdldFJvd3MiLCJjb2x1bW5zIiwiZ2V0Q29sdW1ucyIsIm1hdHJpeEZsb2F0MzJBcnJheSIsIm11bHRpcGx5VmVjdG9yQnlNYXRyaXgiLCJvdXRlck11bHRpcGx5QnlWZWN0b3IiLCJNYXRyaXgiLCJ2ZWN0b3JBV2lkdGgiLCJ2ZWN0b3JCV2lkdGgiLCJvdXRlck11bHRpcGx5VmVjdG9yQnlWZWN0b3IiLCJyZXN1bHRNYXRyaXgiLCJmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkiLCJpbml0aWFsaXNlIiwic2l6ZSIsImNhcmRpbmFsaXR5IiwiY291bnQiLCJwdXNoIiwiYXNTdHJpbmciLCJzdHJpbmciLCJsYXN0SW5kZXgiLCJudW1iZXIiLCJyb3VuZGVkTnVtYmVyIiwidG9GaXhlZCIsIkRFQ0lNQUxfUExBQ0VTIiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21Ob3RoaW5nIiwiZnJvbUVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZnJvbVdpZHRoQW5kRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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