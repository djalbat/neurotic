"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get default () {
        return Vector;
    },
    get elementsAsElementsString () {
        return elementsAsElementsString;
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
                var elementsString = elementsAsElementsString(this.elements), string = "[ ".concat(elementsString, " ]");
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
function elementsAsElementsString(elements) {
    var elementsString = "";
    var length = elements.length, lastIndex = length - 1;
    for(var index = 0; index < length; index++){
        var element = elements[index], number = Number(element), roundedNumber = number.toFixed(_constants.DECIMAL_PLACES);
        if (roundedNumber >= 0) {
            elementsString += "+";
        }
        elementsString += roundedNumber;
        if (index < lastIndex) {
            elementsString += ", ";
        }
    }
    return elementsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZFZlY3RvclRvVmVjdG9yLFxuICAgICAgICAgZGl2aWRlVmVjdG9yQnlTY2FsYXIsXG4gICAgICAgICBtdWx0aXBseVZlY3RvckJ5U2NhbGFyLFxuICAgICAgICAgbXVsdGlwbHlWZWN0b3JCeU1hdHJpeCxcbiAgICAgICAgIHN1YnRyYWN0VmVjdG9yRnJvbVZlY3RvcixcbiAgICAgICAgIG91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3RvciB9IGZyb20gXCIuLi9saWIubm9kZVwiO1xuXG5pbXBvcnQgeyBERUNJTUFMX1BMQUNFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgZWxlbWVudHNMZW5ndGggPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICB3aWR0aCA9IGVsZW1lbnRzTGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEVsZW1lbnRBdChpbmRleCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2luZGV4XTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc2V0RWxlbWVudEF0KGluZGV4LCBlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50c1tpbmRleF0gPSBlbGVtZW50O1xuICB9XG5cbiAgYWRkVmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB2ZWN0b3IsIC8vL1xuICAgICAgICAgIHZlY3RvckIgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gYWRkVmVjdG9yVG9WZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBzdWJ0cmFjdFZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHN1YnRyYWN0VmVjdG9yRnJvbVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIGRpdmlkZUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIHNjYWxhciA9IE51bWJlcihzY2FsYXIpOyAgLy8vXG5cbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gZGl2aWRlVmVjdG9yQnlTY2FsYXIodmVjdG9yRmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBzY2FsYXIgPSBOdW1iZXIoc2NhbGFyKTsgIC8vL1xuXG4gICAgY29uc3QgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG11bHRpcGx5VmVjdG9yQnlTY2FsYXIodmVjdG9yRmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgbXVsdGlwbHlCeU1hdHJpeChtYXRyaXgpIHtcbiAgICBjb25zdCByb3dzID0gbWF0cml4LmdldFJvd3MoKSxcbiAgICAgICAgICBjb2x1bW5zID0gbWF0cml4LmdldENvbHVtbnMoKSxcbiAgICAgICAgICB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4RmxvYXQzMkFycmF5ID0gbWF0cml4LnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbXVsdGlwbHlWZWN0b3JCeU1hdHJpeCh2ZWN0b3JGbG9hdDMyQXJyYXksIG1hdHJpeEZsb2F0MzJBcnJheSwgcm93cywgY29sdW1ucyksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBvdXRlck11bHRpcGx5QnlWZWN0b3IoTWF0cml4LCB2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckFXaWR0aCA9IHZlY3RvckEuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB2ZWN0b3JCV2lkdGggPSB2ZWN0b3JCLmdldFdpZHRoKCksXG4gICAgICAgICAgcm93cyA9IHZlY3RvckFXaWR0aCwgIC8vL1xuICAgICAgICAgIGNvbHVtbnMgPSB2ZWN0b3JCV2lkdGgsIC8vL1xuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHJvd3MsIGNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IDEsXG4gICAgICAgICAgY2FyZGluYWxpdHkgPSBzaXplOyAvLy9cblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBjYXJkaW5hbGl0eTsgY291bnQrKykge1xuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzU3RyaW5nID0gZWxlbWVudHNBc0VsZW1lbnRzU3RyaW5nKHRoaXMuZWxlbWVudHMpLFxuICAgICAgICAgIHN0cmluZyA9IGBbICR7ZWxlbWVudHNTdHJpbmd9IF1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgdG9GbG9hdDMyQXJyYXkoKSB7XG4gICAgY29uc3QgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICAgIHZlY3RvciA9IG5ldyBWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudHMoZWxlbWVudHMpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsb2F0MzJBcnJheShmbG9hdDMyQXJyYXkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSwgIC8vL1xuICAgICAgICAgIHZlY3RvciA9IG5ldyBWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGhBbmRFbGVtZW50KHdpZHRoLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCB3aWR0aDsgY291bnQrKykge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzQXNFbGVtZW50c1N0cmluZyhlbGVtZW50cykge1xuICBsZXQgZWxlbWVudHNTdHJpbmcgPSBcIlwiO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XSxcbiAgICAgICAgICBudW1iZXIgPSBOdW1iZXIoZWxlbWVudCksXG4gICAgICAgICAgcm91bmRlZE51bWJlciA9IG51bWJlci50b0ZpeGVkKERFQ0lNQUxfUExBQ0VTKTtcblxuICAgIGlmIChyb3VuZGVkTnVtYmVyID49IDApIHtcbiAgICAgIGVsZW1lbnRzU3RyaW5nICs9IFwiK1wiO1xuICAgIH1cblxuICAgIGVsZW1lbnRzU3RyaW5nICs9IHJvdW5kZWROdW1iZXI7XG5cbiAgICBpZiAoaW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgIGVsZW1lbnRzU3RyaW5nICs9IFwiLCBcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHNTdHJpbmc7XG59Il0sIm5hbWVzIjpbIlZlY3RvciIsImVsZW1lbnRzQXNFbGVtZW50c1N0cmluZyIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJnZXRXaWR0aCIsImVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJnZXRFbGVtZW50QXQiLCJpbmRleCIsImVsZW1lbnQiLCJzZXRFbGVtZW50QXQiLCJhZGRWZWN0b3IiLCJ2ZWN0b3IiLCJ2ZWN0b3JBIiwidmVjdG9yQiIsInZlY3RvckFGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsInZlY3RvckJGbG9hdDMyQXJyYXkiLCJyZXN1bHRGbG9hdDMyQXJyYXkiLCJhZGRWZWN0b3JUb1ZlY3RvciIsInJlc3VsdFZlY3RvciIsImZyb21GbG9hdDMyQXJyYXkiLCJzdWJ0cmFjdFZlY3RvciIsInN1YnRyYWN0VmVjdG9yRnJvbVZlY3RvciIsImRpdmlkZUJ5U2NhbGFyIiwic2NhbGFyIiwiTnVtYmVyIiwidmVjdG9yRmxvYXQzMkFycmF5IiwiZGl2aWRlVmVjdG9yQnlTY2FsYXIiLCJtdWx0aXBseUJ5U2NhbGFyIiwibXVsdGlwbHlWZWN0b3JCeVNjYWxhciIsIm11bHRpcGx5QnlNYXRyaXgiLCJtYXRyaXgiLCJyb3dzIiwiZ2V0Um93cyIsImNvbHVtbnMiLCJnZXRDb2x1bW5zIiwibWF0cml4RmxvYXQzMkFycmF5IiwibXVsdGlwbHlWZWN0b3JCeU1hdHJpeCIsIm91dGVyTXVsdGlwbHlCeVZlY3RvciIsIk1hdHJpeCIsInZlY3RvckFXaWR0aCIsInZlY3RvckJXaWR0aCIsIm91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3RvciIsInJlc3VsdE1hdHJpeCIsImZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSIsImluaXRpYWxpc2UiLCJzaXplIiwiY2FyZGluYWxpdHkiLCJjb3VudCIsInB1c2giLCJhc1N0cmluZyIsImVsZW1lbnRzU3RyaW5nIiwic3RyaW5nIiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21Ob3RoaW5nIiwiZnJvbUVsZW1lbnRzIiwiQXJyYXkiLCJmcm9tIiwiZnJvbVdpZHRoQW5kRWxlbWVudCIsImxhc3RJbmRleCIsIm51bWJlciIsInJvdW5kZWROdW1iZXIiLCJ0b0ZpeGVkIiwiREVDSU1BTF9QTEFDRVMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFXcUJBOztRQWdLTEM7ZUFBQUE7Ozt1QkFwSzRCO3lCQUViOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1ELHVCQUFOO2FBQU1BLE9BQ1BFLFFB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