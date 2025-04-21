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
var _random = require("./utilities/random");
var _defaults = require("./defaults");
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
            key: "argmax",
            value: function argmax() {
                var maximumElement = -Infinity;
                var elements = this.getElements(), argmax = elements.reduce(function(argmax, element, index) {
                    if (element > maximumElement) {
                        maximumElement = element; ///
                        argmax = index; ///
                    }
                    return argmax;
                }, -1);
                return argmax;
            }
        },
        {
            key: "sample",
            value: function sample() {
                var index, position = 0;
                var number = (0, _random.random)(), length = this.elements.length;
                do {
                    for(index = 0; index < length; index++){
                        var element = this.elements[index];
                        position += element;
                        if (number < position) {
                            break;
                        }
                    }
                }while (index === length);
                return index;
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
            key: "predictIndex",
            value: function predictIndex() {
                var sampling = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_SAMPLING;
                var index;
                if (sampling) {
                    var sample = this.sample();
                    index = sample; ///
                } else {
                    var argmax = this.argmax();
                    index = argmax; ///
                }
                return index;
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
            value: function fromElements(Class, elements) {
                if (elements === undefined) {
                    elements = Class; ///
                    Class = Vector; ///
                }
                var vector = new Class(elements);
                return vector;
            }
        },
        {
            key: "fromFloat32Array",
            value: function fromFloat32Array(Class, float32Array) {
                if (float32Array === undefined) {
                    float32Array = Class; ///
                    Class = Vector; ///
                }
                var elements = Array.from(float32Array), vector = new Class(elements);
                return vector;
            }
        }
    ]);
    return Vector;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNvZnRtYXhWZWN0b3IsXG4gICAgICAgICBhZGRWZWN0b3JUb1ZlY3RvcixcbiAgICAgICAgIGRpdmlkZVZlY3RvckJ5U2NhbGFyLFxuICAgICAgICAgbXVsdGlwbHlWZWN0b3JCeVNjYWxhcixcbiAgICAgICAgIG11bHRpcGx5VmVjdG9yQnlNYXRyaXgsXG4gICAgICAgICBzdWJ0cmFjdFZlY3RvckZyb21WZWN0b3IsXG4gICAgICAgICBvdXRlck11bHRpcGx5VmVjdG9yQnlWZWN0b3IgfSBmcm9tIFwiLi4vbGliLm5vZGVcIjtcblxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi9tYXRyaXhcIjtcblxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3JhbmRvbVwiO1xuaW1wb3J0IHsgREVGQVVMVF9TQU1QTElORyB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBlbGVtZW50c0xlbmd0aCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgICAgIHdpZHRoID0gZWxlbWVudHNMZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc29mdG1heCgpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gc29mdG1heFZlY3Rvcih2ZWN0b3JGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgYXJnbWF4KCkge1xuICAgIGxldCBtYXhpbXVtRWxlbWVudCA9IC1JbmZpbml0eVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgYXJnbWF4ID0gZWxlbWVudHMucmVkdWNlKChhcmdtYXgsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA+IG1heGltdW1FbGVtZW50KSB7XG4gICAgICAgICAgICAgIG1heGltdW1FbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgYXJnbWF4ID0gaW5kZXg7IC8vL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXJnbWF4O1xuICAgICAgICAgIH0sIC0xKTtcblxuICAgIHJldHVybiBhcmdtYXg7XG4gIH1cblxuICBzYW1wbGUoKSB7XG4gICAgbGV0IGluZGV4LFxuICAgICAgICBwb3NpdGlvbiA9IDA7XG5cbiAgICBjb25zdCBudW1iZXIgPSByYW5kb20oKSxcbiAgICAgICAgICBsZW5ndGggPSB0aGlzLmVsZW1lbnRzLmxlbmd0aDtcblxuICAgIGRvIHtcbiAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpbmRleF07XG5cbiAgICAgICAgcG9zaXRpb24gKz0gZWxlbWVudDtcblxuICAgICAgICBpZiAobnVtYmVyIDwgcG9zaXRpb24pIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gd2hpbGUgKGluZGV4ID09PSBsZW5ndGgpO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgZWxlbWVudEF0KGluZGV4KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICBwcmVkaWN0SW5kZXgoc2FtcGxpbmcgPSBERUZBVUxUX1NBTVBMSU5HKSB7XG4gICAgbGV0IGluZGV4O1xuXG4gICAgaWYgKHNhbXBsaW5nKSB7XG4gICAgICBjb25zdCBzYW1wbGUgPSB0aGlzLnNhbXBsZSgpO1xuXG4gICAgICBpbmRleCA9IHNhbXBsZTsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFyZ21heCA9IHRoaXMuYXJnbWF4KCk7XG5cbiAgICAgIGluZGV4ID0gYXJnbWF4OyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgYWRkVmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB2ZWN0b3IsIC8vL1xuICAgICAgICAgIHZlY3RvckIgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gYWRkVmVjdG9yVG9WZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBzdWJ0cmFjdFZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHN1YnRyYWN0VmVjdG9yRnJvbVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIGRpdmlkZUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBkaXZpZGVWZWN0b3JCeVNjYWxhcih2ZWN0b3JGbG9hdDMyQXJyYXksIHNjYWxhciksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBtdWx0aXBseUJ5U2NhbGFyKHNjYWxhcikge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseVZlY3RvckJ5U2NhbGFyKHZlY3RvckZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG11bHRpcGx5QnlNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3Qgcm93cyA9IG1hdHJpeC5nZXRSb3dzKCksXG4gICAgICAgICAgY29sdW1ucyA9IG1hdHJpeC5nZXRDb2x1bW5zKCksXG4gICAgICAgICAgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIG1hdHJpeEZsb2F0MzJBcnJheSA9IG1hdHJpeC50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG11bHRpcGx5VmVjdG9yQnlNYXRyaXgodmVjdG9yRmxvYXQzMkFycmF5LCBtYXRyaXhGbG9hdDMyQXJyYXksIHJvd3MsIGNvbHVtbnMpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgb3V0ZXJNdWx0aXBseUJ5VmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQVdpZHRoID0gdmVjdG9yQS5nZXRXaWR0aCgpLFxuICAgICAgICAgIHZlY3RvckJXaWR0aCA9IHZlY3RvckIuZ2V0V2lkdGgoKSxcbiAgICAgICAgICByb3dzID0gdmVjdG9yQVdpZHRoLCAgLy8vXG4gICAgICAgICAgY29sdW1ucyA9IHZlY3RvckJXaWR0aCwgLy8vXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gb3V0ZXJNdWx0aXBseVZlY3RvckJ5VmVjdG9yKHZlY3RvckFGbG9hdDMyQXJyYXksIHZlY3RvckJGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkocm93cywgY29sdW1ucywgcmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRNYXRyaXg7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBlbGVtZW50c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHRvRmxvYXQzMkFycmF5KCkge1xuICAgIGNvbnN0IGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5lbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZmxvYXQzMkFycmF5O1xuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50cyhDbGFzcywgZWxlbWVudHMpIHtcbiAgICBpZiAoZWxlbWVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbWVudHMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVmVjdG9yOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgQ2xhc3MoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmxvYXQzMkFycmF5KENsYXNzLCBmbG9hdDMyQXJyYXkpIHtcbiAgICBpZiAoZmxvYXQzMkFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZsb2F0MzJBcnJheSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBWZWN0b3I7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShmbG9hdDMyQXJyYXkpLCAgLy8vXG4gICAgICAgICAgdmVjdG9yID0gbmV3IENsYXNzKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWZWN0b3IiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwiZ2V0V2lkdGgiLCJlbGVtZW50c0xlbmd0aCIsImxlbmd0aCIsIndpZHRoIiwic29mdG1heCIsInZlY3RvckZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwicmVzdWx0RmxvYXQzMkFycmF5Iiwic29mdG1heFZlY3RvciIsInJlc3VsdFZlY3RvciIsImZyb21GbG9hdDMyQXJyYXkiLCJhcmdtYXgiLCJtYXhpbXVtRWxlbWVudCIsIkluZmluaXR5IiwicmVkdWNlIiwiZWxlbWVudCIsImluZGV4Iiwic2FtcGxlIiwicG9zaXRpb24iLCJudW1iZXIiLCJyYW5kb20iLCJlbGVtZW50QXQiLCJwcmVkaWN0SW5kZXgiLCJzYW1wbGluZyIsIkRFRkFVTFRfU0FNUExJTkciLCJhZGRWZWN0b3IiLCJ2ZWN0b3IiLCJ2ZWN0b3JBIiwidmVjdG9yQiIsInZlY3RvckFGbG9hdDMyQXJyYXkiLCJ2ZWN0b3JCRmxvYXQzMkFycmF5IiwiYWRkVmVjdG9yVG9WZWN0b3IiLCJzdWJ0cmFjdFZlY3RvciIsInN1YnRyYWN0VmVjdG9yRnJvbVZlY3RvciIsImRpdmlkZUJ5U2NhbGFyIiwic2NhbGFyIiwiZGl2aWRlVmVjdG9yQnlTY2FsYXIiLCJtdWx0aXBseUJ5U2NhbGFyIiwibXVsdGlwbHlWZWN0b3JCeVNjYWxhciIsIm11bHRpcGx5QnlNYXRyaXgiLCJtYXRyaXgiLCJyb3dzIiwiZ2V0Um93cyIsImNvbHVtbnMiLCJnZXRDb2x1bW5zIiwibWF0cml4RmxvYXQzMkFycmF5IiwibXVsdGlwbHlWZWN0b3JCeU1hdHJpeCIsIm91dGVyTXVsdGlwbHlCeVZlY3RvciIsInZlY3RvckFXaWR0aCIsInZlY3RvckJXaWR0aCIsIm91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3RvciIsInJlc3VsdE1hdHJpeCIsIk1hdHJpeCIsImZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheSIsInRvSlNPTiIsImpzb24iLCJmbG9hdDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJmcm9tRWxlbWVudHMiLCJDbGFzcyIsInVuZGVmaW5lZCIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7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