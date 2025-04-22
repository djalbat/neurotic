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
        }
    ]);
    return Vector;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNvZnRtYXhWZWN0b3IsXG4gICAgICAgICBhZGRWZWN0b3JUb1ZlY3RvcixcbiAgICAgICAgIGRpdmlkZVZlY3RvckJ5U2NhbGFyLFxuICAgICAgICAgbXVsdGlwbHlWZWN0b3JCeVNjYWxhcixcbiAgICAgICAgIG11bHRpcGx5VmVjdG9yQnlNYXRyaXgsXG4gICAgICAgICBzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IsXG4gICAgICAgICBvdXRlck11bHRpcGx5VmVjdG9yQnlWZWN0b3IgfSBmcm9tIFwiLi4vbGliLm5vZGVcIjtcblxuaW1wb3J0IHsgREVDSU1BTF9QTEFDRVMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSBlbGVtZW50c0xlbmd0aDsgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzb2Z0bWF4KCkge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBzb2Z0bWF4VmVjdG9yKHZlY3RvckZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBnZXRFbGVtZW50QXQoaW5kZXgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpbmRleF07XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHNldEVsZW1lbnRBdChpbmRleCwgZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudHNbaW5kZXhdID0gZWxlbWVudDtcbiAgfVxuXG4gIGFkZFZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IGFkZFZlY3RvclRvVmVjdG9yKHZlY3RvckFGbG9hdDMyQXJyYXksIHZlY3RvckJGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgc3VidHJhY3RWZWN0b3IodmVjdG9yKSB7XG4gICAgY29uc3QgdmVjdG9yQSA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZlY3RvckFGbG9hdDMyQXJyYXkgPSB2ZWN0b3JBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQkZsb2F0MzJBcnJheSA9IHZlY3RvckIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBkaXZpZGVCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gZGl2aWRlVmVjdG9yQnlTY2FsYXIodmVjdG9yRmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbXVsdGlwbHlWZWN0b3JCeVNjYWxhcih2ZWN0b3JGbG9hdDMyQXJyYXksIHNjYWxhciksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBtdWx0aXBseUJ5TWF0cml4KG1hdHJpeCkge1xuICAgIGNvbnN0IHJvd3MgPSBtYXRyaXguZ2V0Um93cygpLFxuICAgICAgICAgIGNvbHVtbnMgPSBtYXRyaXguZ2V0Q29sdW1ucygpLFxuICAgICAgICAgIHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhGbG9hdDMyQXJyYXkgPSBtYXRyaXgudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseVZlY3RvckJ5TWF0cml4KHZlY3RvckZsb2F0MzJBcnJheSwgbWF0cml4RmxvYXQzMkFycmF5LCByb3dzLCBjb2x1bW5zKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG91dGVyTXVsdGlwbHlCeVZlY3RvcihNYXRyaXgsIHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQVdpZHRoID0gdmVjdG9yQS5nZXRXaWR0aCgpLFxuICAgICAgICAgIHZlY3RvckJXaWR0aCA9IHZlY3RvckIuZ2V0V2lkdGgoKSxcbiAgICAgICAgICByb3dzID0gdmVjdG9yQVdpZHRoLCAgLy8vXG4gICAgICAgICAgY29sdW1ucyA9IHZlY3RvckJXaWR0aCwgLy8vXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gb3V0ZXJNdWx0aXBseVZlY3RvckJ5VmVjdG9yKHZlY3RvckFGbG9hdDMyQXJyYXksIHZlY3RvckJGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkocm93cywgY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICBpbml0aWFsaXNlKHNpemUpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gW107XG5cbiAgICBjb25zdCBlbGVtZW50ID0gMSxcbiAgICAgICAgICBjYXJkaW5hbGl0eSA9IHNpemU7IC8vL1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGNhcmRpbmFsaXR5OyBjb3VudCsrKSB7XG4gICAgICB0aGlzLmVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgbGV0IHN0cmluZyA9IFwiXCI7XG5cbiAgICBzdHJpbmcgKz0gXCJbIFwiO1xuXG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgbGFzdEluZGV4ID0gd2lkdGggLSAxO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHdpZHRoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpbmRleF0sXG4gICAgICAgICAgICBudW1iZXIgPSBOdW1iZXIoZWxlbWVudCksXG4gICAgICAgICAgICByb3VuZGVkTnVtYmVyID0gbnVtYmVyLnRvRml4ZWQoREVDSU1BTF9QTEFDRVMpO1xuXG4gICAgICBpZiAocm91bmRlZE51bWJlciA+PSAwKSB7XG4gICAgICAgIHN0cmluZyArPSBcIitcIjtcbiAgICAgIH1cblxuICAgICAgc3RyaW5nICs9IHJvdW5kZWROdW1iZXI7XG5cbiAgICAgIGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICBzdHJpbmcgKz0gXCIsIFwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN0cmluZyArPSBcIiBdXCI7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgdmVjdG9yID0gbmV3IFZlY3RvcihlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50cyhlbGVtZW50cykge1xuICAgIGNvbnN0IHZlY3RvciA9IG5ldyBWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmxvYXQzMkFycmF5KGZsb2F0MzJBcnJheSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShmbG9hdDMyQXJyYXkpLCAgLy8vXG4gICAgICAgICAgdmVjdG9yID0gbmV3IFZlY3RvcihlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVjdG9yIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsImdldFdpZHRoIiwiZWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsInNvZnRtYXgiLCJ2ZWN0b3JGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsInNvZnRtYXhWZWN0b3IiLCJyZXN1bHRWZWN0b3IiLCJmcm9tRmxvYXQzMkFycmF5IiwiZ2V0RWxlbWVudEF0IiwiaW5kZXgiLCJlbGVtZW50Iiwic2V0RWxlbWVudEF0IiwiYWRkVmVjdG9yIiwidmVjdG9yIiwidmVjdG9yQSIsInZlY3RvckIiLCJ2ZWN0b3JBRmxvYXQzMkFycmF5IiwidmVjdG9yQkZsb2F0MzJBcnJheSIsImFkZFZlY3RvclRvVmVjdG9yIiwic3VidHJhY3RWZWN0b3IiLCJzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IiLCJkaXZpZGVCeVNjYWxhciIsInNjYWxhciIsImRpdmlkZVZlY3RvckJ5U2NhbGFyIiwibXVsdGlwbHlCeVNjYWxhciIsIm11bHRpcGx5VmVjdG9yQnlTY2FsYXIiLCJtdWx0aXBseUJ5TWF0cml4IiwibWF0cml4Iiwicm93cyIsImdldFJvd3MiLCJjb2x1bW5zIiwiZ2V0Q29sdW1ucyIsIm1hdHJpeEZsb2F0MzJBcnJheSIsIm11bHRpcGx5VmVjdG9yQnlNYXRyaXgiLCJvdXRlck11bHRpcGx5QnlWZWN0b3IiLCJNYXRyaXgiLCJ2ZWN0b3JBV2lkdGgiLCJ2ZWN0b3JCV2lkdGgiLCJvdXRlck11bHRpcGx5VmVjdG9yQnlWZWN0b3IiLCJyZXN1bHRNYXRyaXgiLCJmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkiLCJpbml0aWFsaXNlIiwic2l6ZSIsImNhcmRpbmFsaXR5IiwiY291bnQiLCJwdXNoIiwiYXNTdHJpbmciLCJzdHJpbmciLCJsYXN0SW5kZXgiLCJudW1iZXIiLCJOdW1iZXIiLCJyb3VuZGVkTnVtYmVyIiwidG9GaXhlZCIsIkRFQ0lNQUxfUExBQ0VTIiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21Ob3RoaW5nIiwiZnJvbUVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVlxQkE7Ozt1QkFKdUI7eUJBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEsdUJBQU47YUFBTUEsT0FDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxNQUFNLEVBQ3JDQyxRQUFRRixnQkFBZ0IsR0FBRztnQkFFakMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFD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