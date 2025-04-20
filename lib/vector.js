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
            key: "elementAt",
            value: function elementAt(index) {
                var element = this.elements[index];
                return element;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHNvZnRtYXhWZWN0b3IsIG11bHRpcGx5VmVjdG9yQnlTY2FsYXIsIG11bHRpcGx5VmVjdG9yQnlNYXRyaXgsIHN1YnRyYWN0VmVjdG9yRnJvbVZlY3Rvciwgb3V0ZXJNdWx0aXBseVZlY3RvckJ5VmVjdG9yIH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCBNYXRyaXggZnJvbSBcIi4vbWF0cml4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBlbGVtZW50c0xlbmd0aCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgICAgIHdpZHRoID0gZWxlbWVudHNMZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgc29mdG1heCgpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gc29mdG1heFZlY3Rvcih2ZWN0b3JGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgYXJnbWF4KCkge1xuICAgIGxldCBtYXhpbXVtRWxlbWVudCA9IC1JbmZpbml0eVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgYXJnbWF4ID0gZWxlbWVudHMucmVkdWNlKChhcmdtYXgsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCA+IG1heGltdW1FbGVtZW50KSB7XG4gICAgICAgICAgICAgIG1heGltdW1FbGVtZW50ID0gZWxlbWVudDsgLy8vXG5cbiAgICAgICAgICAgICAgYXJnbWF4ID0gaW5kZXg7IC8vL1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXJnbWF4O1xuICAgICAgICAgIH0sIC0xKTtcblxuICAgIHJldHVybiBhcmdtYXg7XG4gIH1cblxuICBlbGVtZW50QXQoaW5kZXgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpbmRleF07XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHN1YnRyYWN0VmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB2ZWN0b3IsIC8vL1xuICAgICAgICAgIHZlY3RvckIgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gc3VidHJhY3RWZWN0b3JGcm9tVmVjdG9yKHZlY3RvckFGbG9hdDMyQXJyYXksIHZlY3RvckJGbG9hdDMyQXJyYXkpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgbXVsdGlwbHlCeVNjYWxhcihzY2FsYXIpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gbXVsdGlwbHlWZWN0b3JCeVNjYWxhcih2ZWN0b3JGbG9hdDMyQXJyYXksIHNjYWxhciksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBtdWx0aXBseUJ5TWF0cml4KG1hdHJpeCkge1xuICAgIGNvbnN0IHJvd3MgPSBtYXRyaXguZ2V0Um93cygpLFxuICAgICAgICAgIGNvbHVtbnMgPSBtYXRyaXguZ2V0Q29sdW1ucygpLFxuICAgICAgICAgIHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhGbG9hdDMyQXJyYXkgPSBtYXRyaXgudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSBtdWx0aXBseVZlY3RvckJ5TWF0cml4KHZlY3RvckZsb2F0MzJBcnJheSwgbWF0cml4RmxvYXQzMkFycmF5LCByb3dzLCBjb2x1bW5zKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG91dGVyTXVsdGlwbHlCeVZlY3Rvcih2ZWN0b3IpIHtcbiAgICBjb25zdCB2ZWN0b3JBID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckFXaWR0aCA9IHZlY3RvckEuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB2ZWN0b3JCV2lkdGggPSB2ZWN0b3JCLmdldFdpZHRoKCksXG4gICAgICAgICAgcm93cyA9IHZlY3RvckFXaWR0aCwgIC8vL1xuICAgICAgICAgIGNvbHVtbnMgPSB2ZWN0b3JCV2lkdGgsIC8vL1xuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IG91dGVyTXVsdGlwbHlWZWN0b3JCeVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHJvd3MsIGNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudHMoQ2xhc3MsIGVsZW1lbnRzKSB7XG4gICAgaWYgKGVsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFZlY3RvcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdmVjdG9yID0gbmV3IENsYXNzKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsb2F0MzJBcnJheShDbGFzcywgZmxvYXQzMkFycmF5KSB7XG4gICAgaWYgKGZsb2F0MzJBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmbG9hdDMyQXJyYXkgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVmVjdG9yOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSwgIC8vL1xuICAgICAgICAgIHZlY3RvciA9IG5ldyBDbGFzcyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVjdG9yIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsImdldFdpZHRoIiwiZWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsInNvZnRtYXgiLCJ2ZWN0b3JGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsInNvZnRtYXhWZWN0b3IiLCJyZXN1bHRWZWN0b3IiLCJmcm9tRmxvYXQzMkFycmF5IiwiYXJnbWF4IiwibWF4aW11bUVsZW1lbnQiLCJJbmZpbml0eSIsInJlZHVjZSIsImVsZW1lbnQiLCJpbmRleCIsImVsZW1lbnRBdCIsInN1YnRyYWN0VmVjdG9yIiwidmVjdG9yIiwidmVjdG9yQSIsInZlY3RvckIiLCJ2ZWN0b3JBRmxvYXQzMkFycmF5IiwidmVjdG9yQkZsb2F0MzJBcnJheSIsInN1YnRyYWN0VmVjdG9yRnJvbVZlY3RvciIsIm11bHRpcGx5QnlTY2FsYXIiLCJzY2FsYXIiLCJtdWx0aXBseVZlY3RvckJ5U2NhbGFyIiwibXVsdGlwbHlCeU1hdHJpeCIsIm1hdHJpeCIsInJvd3MiLCJnZXRSb3dzIiwiY29sdW1ucyIsImdldENvbHVtbnMiLCJtYXRyaXhGbG9hdDMyQXJyYXkiLCJtdWx0aXBseVZlY3RvckJ5TWF0cml4Iiwib3V0ZXJNdWx0aXBseUJ5VmVjdG9yIiwidmVjdG9yQVdpZHRoIiwidmVjdG9yQldpZHRoIiwib3V0ZXJNdWx0aXBseVZlY3RvckJ5VmVjdG9yIiwicmVzdWx0TWF0cml4IiwiTWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5IiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21FbGVtZW50cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozt1QkFKZ0g7NkRBRWxIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUosSUFBQSxBQUFNQSx1QkFBTjthQUFNQSxPQUNQQyxRQUFRO2dDQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDSCxRQUFRLENBQUNJLE1BQU0sRUFDckNDLFFBQVFGLGdCQUFnQixHQUFHO2dCQUVqQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQixJQUFJLENBQUNDLGNBQWMsSUFDeENDLHFCQUFxQkMsSUFBQUEsc0JBQWEsRUFBQ0gscUJBQ25DSSxlQUFlWixBQW5CSkEsT0FtQldhLGdCQUFnQixDQUFDSDtnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxpQkFBaUIsQ0FBQ0M7Z0JBRXRCLElBQU1mLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCWSxTQUFTYixTQUFTZ0IsTUFBTSxDQUFDLFNBQUNILFFBQVFJLFNBQVNDO29CQUN6QyxJQUFJRCxVQUFVSCxnQkFBZ0I7d0JBQzVCQSxpQkFBaUJHLFNBQVMsR0FBRzt3QkFFN0JKLFNBQVNLLE9BQU8sR0FBRztvQkFDckI7b0JBRUEsT0FBT0w7Z0JBQ1QsR0FBRyxDQUFDO2dCQUVWLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUQsS0FBSztnQkFDYixJQUFNRCxVQUFVLElBQUksQ0FBQ2pCLFFBQVEsQ0FBQ2tC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