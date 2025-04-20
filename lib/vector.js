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
            key: "subtractVector",
            value: function subtractVector(vector) {
                var vectorA = vector, vectorB = this, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), resultFloat32Array = (0, _libnode.subtractVectorFromVector)(vectorAFloat32Array, vectorBFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNvZnRtYXhWZWN0b3IsIG11bHRpcGx5VmVjdG9yQnlTY2FsYXIsIG11bHRpcGx5VmVjdG9yQnlNYXRyaXgsIHN1YnRyYWN0VmVjdG9yRnJvbVZlY3Rvciwgb3V0ZXJNdWx0aXBseVZlY3RvckJ5VmVjdG9yIH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCBNYXRyaXggZnJvbSBcIi4vbWF0cml4XCI7XG5cbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuL3V0aWxpdGllcy9yYW5kb21cIjtcbmltcG9ydCB7IERFRkFVTFRfU0FNUExJTkcgfSBmcm9tIFwiLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgZWxlbWVudHNMZW5ndGggPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICB3aWR0aCA9IGVsZW1lbnRzTGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNvZnRtYXgoKSB7XG4gICAgY29uc3QgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHNvZnRtYXhWZWN0b3IodmVjdG9yRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIGFyZ21heCgpIHtcbiAgICBsZXQgbWF4aW11bUVsZW1lbnQgPSAtSW5maW5pdHlcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRFbGVtZW50cygpLFxuICAgICAgICAgIGFyZ21heCA9IGVsZW1lbnRzLnJlZHVjZSgoYXJnbWF4LCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPiBtYXhpbXVtRWxlbWVudCkge1xuICAgICAgICAgICAgICBtYXhpbXVtRWxlbWVudCA9IGVsZW1lbnQ7IC8vL1xuXG4gICAgICAgICAgICAgIGFyZ21heCA9IGluZGV4OyAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFyZ21heDtcbiAgICAgICAgICB9LCAtMSk7XG5cbiAgICByZXR1cm4gYXJnbWF4O1xuICB9XG5cbiAgc2FtcGxlKCkge1xuICAgIGxldCBpbmRleCxcbiAgICAgICAgcG9zaXRpb24gPSAwO1xuXG4gICAgY29uc3QgbnVtYmVyID0gcmFuZG9tKCksXG4gICAgICAgICAgbGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGg7XG5cbiAgICBkbyB7XG4gICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaW5kZXhdO1xuXG4gICAgICAgIHBvc2l0aW9uICs9IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKG51bWJlciA8IHBvc2l0aW9uKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHdoaWxlIChpbmRleCA9PT0gbGVuZ3RoKTtcblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGVsZW1lbnRBdChpbmRleCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2luZGV4XTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgcHJlZGljdEluZGV4KHNhbXBsaW5nID0gREVGQVVMVF9TQU1QTElORykge1xuICAgIGxldCBpbmRleDtcblxuICAgIGlmIChzYW1wbGluZykge1xuICAgICAgY29uc3Qgc2FtcGxlID0gdGhpcy5zYW1wbGUoKTtcblxuICAgICAgaW5kZXggPSBzYW1wbGU7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhcmdtYXggPSB0aGlzLmFyZ21heCgpO1xuXG4gICAgICBpbmRleCA9IGFyZ21heDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHN1YnRyYWN0VmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB2ZWN0b3IsIC8vL1xuICAgICAgICAgIHZlY3RvckIgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gc3VidHJhY3RWZWN0b3JGcm9tVmVjdG9yKHZlY3RvckFGbG9hdDMyQXJyYXksIHZlY3RvckJGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbXVsdGlwbHlWZWN0b3JCeVNjYWxhcih2ZWN0b3JGbG9hdDMyQXJyYXksIHNjYWxhciksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBtdWx0aXBseUJ5TWF0cml4KG1hdHJpeCkge1xuICAgIGNvbnN0IHJvd3MgPSBtYXRyaXguZ2V0Um93cygpLFxuICAgICAgICAgIGNvbHVtbnMgPSBtYXRyaXguZ2V0Q29sdW1ucygpLFxuICAgICAgICAgIHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhGbG9hdDMyQXJyYXkgPSBtYXRyaXgudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseVZlY3RvckJ5TWF0cml4KHZlY3RvckZsb2F0MzJBcnJheSwgbWF0cml4RmxvYXQzMkFycmF5LCByb3dzLCBjb2x1bW5zKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG91dGVyTXVsdGlwbHlCeVZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckFXaWR0aCA9IHZlY3RvckEuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB2ZWN0b3JCV2lkdGggPSB2ZWN0b3JCLmdldFdpZHRoKCksXG4gICAgICAgICAgcm93cyA9IHZlY3RvckFXaWR0aCwgIC8vL1xuICAgICAgICAgIGNvbHVtbnMgPSB2ZWN0b3JCV2lkdGgsIC8vL1xuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHJvd3MsIGNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudHMoQ2xhc3MsIGVsZW1lbnRzKSB7XG4gICAgaWYgKGVsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFZlY3RvcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdmVjdG9yID0gbmV3IENsYXNzKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsb2F0MzJBcnJheShDbGFzcywgZmxvYXQzMkFycmF5KSB7XG4gICAgaWYgKGZsb2F0MzJBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmbG9hdDMyQXJyYXkgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVmVjdG9yOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSwgIC8vL1xuICAgICAgICAgIHZlY3RvciA9IG5ldyBDbGFzcyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVjdG9yIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsImdldFdpZHRoIiwiZWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsInNvZnRtYXgiLCJ2ZWN0b3JGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsInNvZnRtYXhWZWN0b3IiLCJyZXN1bHRWZWN0b3IiLCJmcm9tRmxvYXQzMkFycmF5IiwiYXJnbWF4IiwibWF4aW11bUVsZW1lbnQiLCJJbmZpbml0eSIsInJlZHVjZSIsImVsZW1lbnQiLCJpbmRleCIsInNhbXBsZSIsInBvc2l0aW9uIiwibnVtYmVyIiwicmFuZG9tIiwiZWxlbWVudEF0IiwicHJlZGljdEluZGV4Iiwic2FtcGxpbmciLCJERUZBVUxUX1NBTVBMSU5HIiwic3VidHJhY3RWZWN0b3IiLCJ2ZWN0b3IiLCJ2ZWN0b3JBIiwidmVjdG9yQiIsInZlY3RvckFGbG9hdDMyQXJyYXkiLCJ2ZWN0b3JCRmxvYXQzMkFycmF5Iiwic3VidHJhY3RWZWN0b3JGcm9tVmVjdG9yIiwibXVsdGlwbHlCeVNjYWxhciIsInNjYWxhciIsIm11bHRpcGx5VmVjdG9yQnlTY2FsYXIiLCJtdWx0aXBseUJ5TWF0cml4IiwibWF0cml4Iiwicm93cyIsImdldFJvd3MiLCJjb2x1bW5zIiwiZ2V0Q29sdW1ucyIsIm1hdHJpeEZsb2F0MzJBcnJheSIsIm11bHRpcGx5VmVjdG9yQnlNYXRyaXgiLCJvdXRlck11bHRpcGx5QnlWZWN0b3IiLCJ2ZWN0b3JBV2lkdGgiLCJ2ZWN0b3JCV2lkdGgiLCJvdXRlck11bHRpcGx5VmVjdG9yQnlWZWN0b3IiLCJyZXN1bHRNYXRyaXgiLCJNYXRyaXgiLCJmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkiLCJ0b0pTT04iLCJqc29uIiwiZmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiZnJvbUVsZW1lbnRzIiwiQ2xh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