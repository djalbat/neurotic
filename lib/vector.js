"use strict";
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
import { addVectorToVector, divideVectorByScalar, multiplyVectorByScalar, multiplyVectorByMatrix, subtractVectorFromVector, outerMultiplyVectorByVector } from "../lib.node";
import { DECIMAL_PLACES } from "./constants";
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
                var vectorA = vector, vectorB = this, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), resultFloat32Array = addVectorToVector(vectorAFloat32Array, vectorBFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "subtractVector",
            value: function subtractVector(vector) {
                var vectorA = vector, vectorB = this, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), resultFloat32Array = subtractVectorFromVector(vectorAFloat32Array, vectorBFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "divideByScalar",
            value: function divideByScalar(scalar) {
                scalar = Number(scalar); ///
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = divideVectorByScalar(vectorFloat32Array, scalar), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "multiplyByScalar",
            value: function multiplyByScalar(scalar) {
                scalar = Number(scalar); ///
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = multiplyVectorByScalar(vectorFloat32Array, scalar), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "multiplyByMatrix",
            value: function multiplyByMatrix(matrix) {
                var rows = matrix.getRows(), columns = matrix.getColumns(), vectorFloat32Array = this.toFloat32Array(), matrixFloat32Array = matrix.toFloat32Array(), resultFloat32Array = multiplyVectorByMatrix(vectorFloat32Array, matrixFloat32Array, rows, columns), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "outerMultiplyByVector",
            value: function outerMultiplyByVector(Matrix, vector) {
                var vectorA = this, vectorB = vector, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), vectorAWidth = vectorA.getWidth(), vectorBWidth = vectorB.getWidth(), rows = vectorAWidth, columns = vectorBWidth, resultFloat32Array = outerMultiplyVectorByVector(vectorAFloat32Array, vectorBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(rows, columns, resultFloat32Array);
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
export { Vector as default };
export function elementsAsElementsString(elements) {
    var elementsString = "";
    var length = elements.length, lastIndex = length - 1;
    for(var index = 0; index < length; index++){
        var element = elements[index], number = Number(element), roundedNumber = number.toFixed(DECIMAL_PLACES);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFkZFZlY3RvclRvVmVjdG9yLFxuICAgICAgICAgZGl2aWRlVmVjdG9yQnlTY2FsYXIsXG4gICAgICAgICBtdWx0aXBseVZlY3RvckJ5U2NhbGFyLFxuICAgICAgICAgbXVsdGlwbHlWZWN0b3JCeU1hdHJpeCxcbiAgICAgICAgIHN1YnRyYWN0VmVjdG9yRnJvbVZlY3RvcixcbiAgICAgICAgIG91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3RvciB9IGZyb20gXCIuLi9saWIubm9kZVwiO1xuXG5pbXBvcnQgeyBERUNJTUFMX1BMQUNFUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgZWxlbWVudHNMZW5ndGggPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICB3aWR0aCA9IGVsZW1lbnRzTGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIGdldEVsZW1lbnRBdChpbmRleCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2luZGV4XTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc2V0RWxlbWVudEF0KGluZGV4LCBlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50c1tpbmRleF0gPSBlbGVtZW50O1xuICB9XG5cbiAgYWRkVmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB2ZWN0b3IsIC8vL1xuICAgICAgICAgIHZlY3RvckIgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gYWRkVmVjdG9yVG9WZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBzdWJ0cmFjdFZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHN1YnRyYWN0VmVjdG9yRnJvbVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIGRpdmlkZUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIHNjYWxhciA9IE51bWJlcihzY2FsYXIpOyAgLy8vXG5cbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gZGl2aWRlVmVjdG9yQnlTY2FsYXIodmVjdG9yRmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBzY2FsYXIgPSBOdW1iZXIoc2NhbGFyKTsgIC8vL1xuXG4gICAgY29uc3QgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG11bHRpcGx5VmVjdG9yQnlTY2FsYXIodmVjdG9yRmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgbXVsdGlwbHlCeU1hdHJpeChtYXRyaXgpIHtcbiAgICBjb25zdCByb3dzID0gbWF0cml4LmdldFJvd3MoKSxcbiAgICAgICAgICBjb2x1bW5zID0gbWF0cml4LmdldENvbHVtbnMoKSxcbiAgICAgICAgICB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4RmxvYXQzMkFycmF5ID0gbWF0cml4LnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbXVsdGlwbHlWZWN0b3JCeU1hdHJpeCh2ZWN0b3JGbG9hdDMyQXJyYXksIG1hdHJpeEZsb2F0MzJBcnJheSwgcm93cywgY29sdW1ucyksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBvdXRlck11bHRpcGx5QnlWZWN0b3IoTWF0cml4LCB2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckFXaWR0aCA9IHZlY3RvckEuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB2ZWN0b3JCV2lkdGggPSB2ZWN0b3JCLmdldFdpZHRoKCksXG4gICAgICAgICAgcm93cyA9IHZlY3RvckFXaWR0aCwgIC8vL1xuICAgICAgICAgIGNvbHVtbnMgPSB2ZWN0b3JCV2lkdGgsIC8vL1xuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHJvd3MsIGNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IFtdO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IDEsXG4gICAgICAgICAgY2FyZGluYWxpdHkgPSBzaXplOyAvLy9cblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBjYXJkaW5hbGl0eTsgY291bnQrKykge1xuICAgICAgdGhpcy5lbGVtZW50cy5wdXNoKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzU3RyaW5nID0gZWxlbWVudHNBc0VsZW1lbnRzU3RyaW5nKHRoaXMuZWxlbWVudHMpLFxuICAgICAgICAgIHN0cmluZyA9IGBbICR7ZWxlbWVudHNTdHJpbmd9IF1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgdG9GbG9hdDMyQXJyYXkoKSB7XG4gICAgY29uc3QgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBudWxsLFxuICAgICAgICAgIHZlY3RvciA9IG5ldyBWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudHMoZWxlbWVudHMpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsb2F0MzJBcnJheShmbG9hdDMyQXJyYXkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSwgIC8vL1xuICAgICAgICAgIHZlY3RvciA9IG5ldyBWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2lkdGhBbmRFbGVtZW50KHdpZHRoLCBlbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCB3aWR0aDsgY291bnQrKykge1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRzQXNFbGVtZW50c1N0cmluZyhlbGVtZW50cykge1xuICBsZXQgZWxlbWVudHNTdHJpbmcgPSBcIlwiO1xuXG4gIGNvbnN0IGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcblxuICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2luZGV4XSxcbiAgICAgICAgICBudW1iZXIgPSBOdW1iZXIoZWxlbWVudCksXG4gICAgICAgICAgcm91bmRlZE51bWJlciA9IG51bWJlci50b0ZpeGVkKERFQ0lNQUxfUExBQ0VTKTtcblxuICAgIGlmIChyb3VuZGVkTnVtYmVyID49IDApIHtcbiAgICAgIGVsZW1lbnRzU3RyaW5nICs9IFwiK1wiO1xuICAgIH1cblxuICAgIGVsZW1lbnRzU3RyaW5nICs9IHJvdW5kZWROdW1iZXI7XG5cbiAgICBpZiAoaW5kZXggPCBsYXN0SW5kZXgpIHtcbiAgICAgIGVsZW1lbnRzU3RyaW5nICs9IFwiLCBcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudHNTdHJpbmc7XG59Il0sIm5hbWVzIjpbImFkZFZlY3RvclRvVmVjdG9yIiwiZGl2aWRlVmVjdG9yQnlTY2FsYXIiLCJtdWx0aXBseVZlY3RvckJ5U2NhbGFyIiwibXVsdGlwbHlWZWN0b3JCeU1hdHJpeCIsInN1YnRyYWN0VmVjdG9yRnJvbVZlY3RvciIsIm91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3RvciIsIkRFQ0lNQUxfUExBQ0VTIiwiVmVjdG9yIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsImdldFdpZHRoIiwiZWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsImdldEVsZW1lbnRBdCIsImluZGV4IiwiZWxlbWVudCIsInNldEVsZW1lbnRBdCIsImFkZFZlY3RvciIsInZlY3RvciIsInZlY3RvckEiLCJ2ZWN0b3JCIiwidmVjdG9yQUZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwidmVjdG9yQkZsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsInJlc3VsdFZlY3RvciIsImZyb21GbG9hdDMyQXJyYXkiLCJzdWJ0cmFjdFZlY3RvciIsImRpdmlkZUJ5U2NhbGFyIiwic2NhbGFyIiwiTnVtYmVyIiwidmVjdG9yRmxvYXQzMkFycmF5IiwibXVsdGlwbHlCeVNjYWxhciIsIm11bHRpcGx5QnlNYXRyaXgiLCJtYXRyaXgiLCJyb3dzIiwiZ2V0Um93cyIsImNvbHVtbnMiLCJnZXRDb2x1bW5zIiwibWF0cml4RmxvYXQzMkFycmF5Iiwib3V0ZXJNdWx0aXBseUJ5VmVjdG9yIiwiTWF0cml4IiwidmVjdG9yQVdpZHRoIiwidmVjdG9yQldpZHRoIiwicmVzdWx0TWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5IiwiaW5pdGlhbGlzZSIsInNpemUiLCJjYXJkaW5hbGl0eSIsImNvdW50IiwicHVzaCIsImFzU3RyaW5nIiwiZWxlbWVudHNTdHJpbmciLCJlbGVtZW50c0FzRWxlbWVudHNTdHJpbmciLCJzdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiZnJvbU5vdGhpbmciLCJmcm9tRWxlbWVudHMiLCJBcnJheSIsImZyb20iLCJmcm9tV2lkdGhBbmRFbGVtZW50IiwibGFzdEluZGV4IiwibnVtYmVyIiwicm91bmRlZE51bWJlciIsInRvRml4ZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGlCQUFpQixFQUNqQkMsb0JBQW9CLEVBQ3BCQyxzQkFBc0IsRUFDdEJDLHNCQUFzQixFQUN0QkMsd0JBQXdCLEVBQ3hCQywyQkFB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