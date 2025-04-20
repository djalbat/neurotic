"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _libnode = require("../lib.node");
var _registry = /*#__PURE__*/ _interop_require_wildcard(require("./registry"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function() {
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
            key: "scalarMultiply",
            value: function scalarMultiply(scalar) {
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.vectorScalarMultiply)(vectorFloat32Array, scalar), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
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
            key: "outerMultiplyVector",
            value: function outerMultiplyVector(vector) {
                var Matrix = _registry.default.Matrix, vectorA = this, vectorB = vector, vectorAFloat32Array = vectorA.toFloat32Array(), vectorBFloat32Array = vectorB.toFloat32Array(), vectorAWidth = vectorA.getWidth(), vectorBWidth = vectorB.getWidth(), rows = vectorAWidth, columns = vectorBWidth, resultFloat32Array = (0, _libnode.vectorOuterMultiplyVector)(vectorAFloat32Array, vectorBFloat32Array), resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(rows, columns, resultFloat32Array);
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
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlY3RvclNvZnRtYXgsIHZlY3RvclNjYWxhck11bHRpcGx5LCB2ZWN0b3JTdWJ0cmFjdFZlY3RvciwgdmVjdG9yT3V0ZXJNdWx0aXBseVZlY3RvciB9IGZyb20gXCIuLi9saWIubm9kZVwiO1xuXG5pbXBvcnQgcmVnaXN0cnkgZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuaW1wb3J0IHsgcmVnaXN0cnlBc3NpZ25lZCB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJ5QXNzaWduZWQoY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSBlbGVtZW50c0xlbmd0aDsgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzb2Z0bWF4KCkge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSB2ZWN0b3JTb2Z0bWF4KHZlY3RvckZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBhcmdtYXgoKSB7XG4gICAgbGV0IG1heGltdW1FbGVtZW50ID0gLUluZmluaXR5XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHMoKSxcbiAgICAgICAgICBhcmdtYXggPSBlbGVtZW50cy5yZWR1Y2UoKGFyZ21heCwgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID4gbWF4aW11bUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgbWF4aW11bUVsZW1lbnQgPSBlbGVtZW50OyAvLy9cblxuICAgICAgICAgICAgICBhcmdtYXggPSBpbmRleDsgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhcmdtYXg7XG4gICAgICAgICAgfSwgLTEpO1xuXG4gICAgcmV0dXJuIGFyZ21heDtcbiAgfVxuXG4gIGVsZW1lbnRBdChpbmRleCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2luZGV4XTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgc2NhbGFyTXVsdGlwbHkoc2NhbGFyKSB7XG4gICAgY29uc3QgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHZlY3RvclNjYWxhck11bHRpcGx5KHZlY3RvckZsb2F0MzJBcnJheSwgc2NhbGFyKSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIHN1YnRyYWN0VmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gdmVjdG9yU3VidHJhY3RWZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBvdXRlck11bHRpcGx5VmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHsgTWF0cml4IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICB2ZWN0b3JBID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckFXaWR0aCA9IHZlY3RvckEuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB2ZWN0b3JCV2lkdGggPSB2ZWN0b3JCLmdldFdpZHRoKCksXG4gICAgICAgICAgcm93cyA9IHZlY3RvckFXaWR0aCwgIC8vL1xuICAgICAgICAgIGNvbHVtbnMgPSB2ZWN0b3JCV2lkdGgsIC8vL1xuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHZlY3Rvck91dGVyTXVsdGlwbHlWZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheShyb3dzLCBjb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgdG9GbG9hdDMyQXJyYXkoKSB7XG4gICAgY29uc3QgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnRzKENsYXNzLCBlbGVtZW50cykge1xuICAgIGlmIChlbGVtZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtZW50cyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBWZWN0b3I7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHZlY3RvciA9IG5ldyBDbGFzcyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21GbG9hdDMyQXJyYXkoQ2xhc3MsIGZsb2F0MzJBcnJheSkge1xuICAgIGlmIChmbG9hdDMyQXJyYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZmxvYXQzMkFycmF5ID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFZlY3RvcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksICAvLy9cbiAgICAgICAgICB2ZWN0b3IgPSBuZXcgQ2xhc3MoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmVnaXN0cnlBc3NpZ25lZCIsIlZlY3RvciIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJnZXRXaWR0aCIsImVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJzb2Z0bWF4IiwidmVjdG9yRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJyZXN1bHRGbG9hdDMyQXJyYXkiLCJ2ZWN0b3JTb2Z0bWF4IiwicmVzdWx0VmVjdG9yIiwiZnJvbUZsb2F0MzJBcnJheSIsImFyZ21heCIsIm1heGltdW1FbGVtZW50IiwiSW5maW5pdHkiLCJyZWR1Y2UiLCJlbGVtZW50IiwiaW5kZXgiLCJlbGVtZW50QXQiLCJzY2FsYXJNdWx0aXBseSIsInNjYWxhciIsInZlY3RvclNjYWxhck11bHRpcGx5Iiwic3VidHJhY3RWZWN0b3IiLCJ2ZWN0b3IiLCJ2ZWN0b3JBIiwidmVjdG9yQiIsInZlY3RvckFGbG9hdDMyQXJyYXkiLCJ2ZWN0b3JCRmxvYXQzMkFycmF5IiwidmVjdG9yU3VidHJhY3RWZWN0b3IiLCJvdXRlck11bHRpcGx5VmVjdG9yIiwiTWF0cml4IiwicmVnaXN0cnkiLCJ2ZWN0b3JBV2lkdGgiLCJ2ZWN0b3JCV2lkdGgiLCJyb3dzIiwiY29sdW1ucyIsInZlY3Rvck91dGVyTXVsdGlwbHlWZWN0b3IiLCJyZXN1bHRNYXRyaXgiLCJmcm9tUm93c0NvbHVtbnNBbmRGbG9hdDMyQXJyYXkiLCJ0b0pTT04iLCJqc29uIiwiZmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiZnJvbUVsZW1lbnRzIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJBcnJheSIsImZyb20iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O3VCQU5xRztnRUFFaEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJckIsV0FBZUEsSUFBQUEsMEJBQWdCLGdCQUFDO2FBQU1DLE9BQ3hCQyxRQUFRO2dDQURnQkQ7UUFFbEMsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOzs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxNQUFNLEVBQ3JDQyxRQUFRRixnQkFBZ0IsR0FBRztnQkFFakMsT0FBT0U7WUFDVDs7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