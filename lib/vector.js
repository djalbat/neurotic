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
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.vectorSoftmax)(vectorFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
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
            key: "elementAt",
            value: function elementAt(index) {
                var element = this.elements[index];
                return element;
            }
        },
        {
            key: "subtractVector",
            value: function subtractVector(vector) {
                var vectorA = this, vectorB = vector, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), resultFloat32Array = (0, _libnode.vectorSubtractVector)(vectorAFloat32Array, vectorBFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "multiplyByScalar",
            value: function multiplyByScalar(scalar) {
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.vectorScalarMultiply)(vectorFloat32Array, scalar), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "multiplyByMatrix",
            value: function multiplyByMatrix(matrix) {
                var rows = matrix.getRows(), columns = matrix.getColumns(), vectorFloat32Array = this.toFloat32Array(), matrixFloat32Array = matrix.toFloat32Array(), resultFloat32Array = (0, _libnode.vectorMultiplyMatrix)(vectorFloat32Array, matrixFloat32Array, rows, columns), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
            }
        },
        {
            key: "outerMultiplyByVector",
            value: function outerMultiplyByVector(vector) {
                var vectorA = this, vectorB = vector, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), vectorAWidth = vectorA.getWidth(), vectorBWidth = vectorB.getWidth(), rows = vectorAWidth, columns = vectorBWidth, resultFloat32Array = (0, _libnode.vectorOuterMultiplyVector)(vectorAFloat32Array, vectorBFloat32Array), resultMatrix = _matrix.default.fromRowsColumnsAndFloat32Array(rows, columns, resultFloat32Array);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlY3RvclNvZnRtYXgsIHZlY3RvclNjYWxhck11bHRpcGx5LCB2ZWN0b3JNdWx0aXBseU1hdHJpeCwgdmVjdG9yU3VidHJhY3RWZWN0b3IsIHZlY3Rvck91dGVyTXVsdGlwbHlWZWN0b3IgfSBmcm9tIFwiLi4vbGliLm5vZGVcIjtcblxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi9tYXRyaXhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSBlbGVtZW50c0xlbmd0aDsgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzb2Z0bWF4KCkge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSB2ZWN0b3JTb2Z0bWF4KHZlY3RvckZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBhcmdtYXgoKSB7XG4gICAgbGV0IG1heGltdW1FbGVtZW50ID0gLUluZmluaXR5XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHMoKSxcbiAgICAgICAgICBhcmdtYXggPSBlbGVtZW50cy5yZWR1Y2UoKGFyZ21heCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID4gbWF4aW11bUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgbWF4aW11bUVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICAgICAgICAgICAgICBhcmdtYXggPSBpbmRleDsgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhcmdtYXg7XG4gICAgICAgICAgfSwgLTEpO1xuXG4gICAgcmV0dXJuIGFyZ21heDtcbiAgfVxuXG4gIGVsZW1lbnRBdChpbmRleCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2luZGV4XTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc3VidHJhY3RWZWN0b3IodmVjdG9yKSB7XG4gICAgY29uc3QgdmVjdG9yQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZlY3RvckIgPSB2ZWN0b3IsIC8vL1xuICAgICAgICAgIHZlY3RvckFGbG9hdDMyQXJyYXkgPSB2ZWN0b3JBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQkZsb2F0MzJBcnJheSA9IHZlY3RvckIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSB2ZWN0b3JTdWJ0cmFjdFZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG11bHRpcGx5QnlTY2FsYXIoc2NhbGFyKSB7XG4gICAgY29uc3QgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHZlY3RvclNjYWxhck11bHRpcGx5KHZlY3RvckZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG11bHRpcGx5QnlNYXRyaXgobWF0cml4KSB7XG4gICAgY29uc3Qgcm93cyA9IG1hdHJpeC5nZXRSb3dzKCksXG4gICAgICAgICAgY29sdW1ucyA9IG1hdHJpeC5nZXRDb2x1bW5zKCksXG4gICAgICAgICAgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIG1hdHJpeEZsb2F0MzJBcnJheSA9IG1hdHJpeC50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHZlY3Rvck11bHRpcGx5TWF0cml4KHZlY3RvckZsb2F0MzJBcnJheSwgbWF0cml4RmxvYXQzMkFycmF5LCByb3dzLCBjb2x1bW5zKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG91dGVyTXVsdGlwbHlCeVZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckFXaWR0aCA9IHZlY3RvckEuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB2ZWN0b3JCV2lkdGggPSB2ZWN0b3JCLmdldFdpZHRoKCksXG4gICAgICAgICAgcm93cyA9IHZlY3RvckFXaWR0aCwgIC8vL1xuICAgICAgICAgIGNvbHVtbnMgPSB2ZWN0b3JCV2lkdGgsIC8vL1xuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHZlY3Rvck91dGVyTXVsdGlwbHlWZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheShyb3dzLCBjb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgdG9GbG9hdDMyQXJyYXkoKSB7XG4gICAgY29uc3QgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnRzKENsYXNzLCBlbGVtZW50cykge1xuICAgIGlmIChlbGVtZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtZW50cyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBWZWN0b3I7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHZlY3RvciA9IG5ldyBDbGFzcyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21GbG9hdDMyQXJyYXkoQ2xhc3MsIGZsb2F0MzJBcnJheSkge1xuICAgIGlmIChmbG9hdDMyQXJyYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZmxvYXQzMkFycmF5ID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFZlY3RvcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksICAvLy9cbiAgICAgICAgICB2ZWN0b3IgPSBuZXcgQ2xhc3MoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZlY3RvciIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJnZXRXaWR0aCIsImVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJzb2Z0bWF4IiwidmVjdG9yRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJyZXN1bHRGbG9hdDMyQXJyYXkiLCJ2ZWN0b3JTb2Z0bWF4IiwicmVzdWx0VmVjdG9yIiwiZnJvbUZsb2F0MzJBcnJheSIsImFyZ21heCIsIm1heGltdW1FbGVtZW50IiwiSW5maW5pdHkiLCJyZWR1Y2UiLCJlbGVtZW50IiwiaW5kZXgiLCJlbGVtZW50QXQiLCJzdWJ0cmFjdFZlY3RvciIsInZlY3RvciIsInZlY3RvckEiLCJ2ZWN0b3JCIiwidmVjdG9yQUZsb2F0MzJBcnJheSIsInZlY3RvckJGbG9hdDMyQXJyYXkiLCJ2ZWN0b3JTdWJ0cmFjdFZlY3RvciIsIm11bHRpcGx5QnlTY2FsYXIiLCJzY2FsYXIiLCJ2ZWN0b3JTY2FsYXJNdWx0aXBseSIsIm11bHRpcGx5QnlNYXRyaXgiLCJtYXRyaXgiLCJyb3dzIiwiZ2V0Um93cyIsImNvbHVtbnMiLCJnZXRDb2x1bW5zIiwibWF0cml4RmxvYXQzMkFycmF5IiwidmVjdG9yTXVsdGlwbHlNYXRyaXgiLCJvdXRlck11bHRpcGx5QnlWZWN0b3IiLCJ2ZWN0b3JBV2lkdGgiLCJ2ZWN0b3JCV2lkdGgiLCJ2ZWN0b3JPdXRlck11bHRpcGx5VmVjdG9yIiwicmVzdWx0TWF0cml4IiwiTWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5IiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZy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