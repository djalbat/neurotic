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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlY3RvclNvZnRtYXgsIHZlY3RvclNjYWxhck11bHRpcGx5LCB2ZWN0b3JTdWJ0cmFjdFZlY3RvciwgdmVjdG9yT3V0ZXJNdWx0aXBseVZlY3RvciB9IGZyb20gXCIuLi9saWIubm9kZVwiO1xuXG5pbXBvcnQgcmVnaXN0cnkgZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuaW1wb3J0IHsgcmVnaXN0cnlBc3NpZ25lZCB9IGZyb20gXCIuL3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJ5QXNzaWduZWQoY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSBlbGVtZW50c0xlbmd0aDsgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzb2Z0bWF4KCkge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSB2ZWN0b3JTb2Z0bWF4KHZlY3RvckZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBzY2FsYXJNdWx0aXBseShzY2FsYXIpIHtcbiAgICBjb25zdCB2ZWN0b3JGbG9hdDMyQXJyYXkgPSB0aGlzLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gdmVjdG9yU2NhbGFyTXVsdGlwbHkodmVjdG9yRmxvYXQzMkFycmF5LCBzY2FsYXIpLFxuICAgICAgICAgIHJlc3VsdFZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0VmVjdG9yO1xuICB9XG5cbiAgc3VidHJhY3RWZWN0b3IodmVjdG9yKSB7XG4gICAgY29uc3QgdmVjdG9yQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZlY3RvckIgPSB2ZWN0b3IsIC8vL1xuICAgICAgICAgIHZlY3RvckFGbG9hdDMyQXJyYXkgPSB2ZWN0b3JBLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQkZsb2F0MzJBcnJheSA9IHZlY3RvckIudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSB2ZWN0b3JTdWJ0cmFjdFZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIG91dGVyTXVsdGlwbHlWZWN0b3IodmVjdG9yKSB7XG4gICAgY29uc3QgeyBNYXRyaXggfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgIHZlY3RvckEgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgdmVjdG9yQVdpZHRoID0gdmVjdG9yQS5nZXRXaWR0aCgpLFxuICAgICAgICAgIHZlY3RvckJXaWR0aCA9IHZlY3RvckIuZ2V0V2lkdGgoKSxcbiAgICAgICAgICByb3dzID0gdmVjdG9yQVdpZHRoLCAgLy8vXG4gICAgICAgICAgY29sdW1ucyA9IHZlY3RvckJXaWR0aCwgLy8vXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gdmVjdG9yT3V0ZXJNdWx0aXBseVZlY3Rvcih2ZWN0b3JBRmxvYXQzMkFycmF5LCB2ZWN0b3JCRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRNYXRyaXggPSBNYXRyaXguZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5KHJvd3MsIGNvbHVtbnMsIHJlc3VsdEZsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcmVzdWx0TWF0cml4O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudHMoQ2xhc3MsIGVsZW1lbnRzKSB7XG4gICAgaWYgKGVsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFZlY3RvcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdmVjdG9yID0gbmV3IENsYXNzKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsb2F0MzJBcnJheShDbGFzcywgZmxvYXQzMkFycmF5KSB7XG4gICAgaWYgKGZsb2F0MzJBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmbG9hdDMyQXJyYXkgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVmVjdG9yOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSwgIC8vL1xuICAgICAgICAgIHZlY3RvciA9IG5ldyBDbGFzcyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZWdpc3RyeUFzc2lnbmVkIiwiVmVjdG9yIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsImdldFdpZHRoIiwiZWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsInNvZnRtYXgiLCJ2ZWN0b3JGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsInJlc3VsdEZsb2F0MzJBcnJheSIsInZlY3RvclNvZnRtYXgiLCJyZXN1bHRWZWN0b3IiLCJmcm9tRmxvYXQzMkFycmF5Iiwic2NhbGFyTXVsdGlwbHkiLCJzY2FsYXIiLCJ2ZWN0b3JTY2FsYXJNdWx0aXBseSIsInN1YnRyYWN0VmVjdG9yIiwidmVjdG9yIiwidmVjdG9yQSIsInZlY3RvckIiLCJ2ZWN0b3JBRmxvYXQzMkFycmF5IiwidmVjdG9yQkZsb2F0MzJBcnJheSIsInZlY3RvclN1YnRyYWN0VmVjdG9yIiwib3V0ZXJNdWx0aXBseVZlY3RvciIsIk1hdHJpeCIsInJlZ2lzdHJ5IiwidmVjdG9yQVdpZHRoIiwidmVjdG9yQldpZHRoIiwicm93cyIsImNvbHVtbnMiLCJ2ZWN0b3JPdXRlck11bHRpcGx5VmVjdG9yIiwicmVzdWx0TWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5IiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21FbGVtZW50cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFR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