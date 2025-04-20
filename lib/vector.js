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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlY3RvclNvZnRtYXgsIHZlY3RvclN1YnRyYWN0VmVjdG9yLCB2ZWN0b3JPdXRlck11bHRpcGx5VmVjdG9yIH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCByZWdpc3RyeSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyByZWdpc3RyeUFzc2lnbmVkIH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnlBc3NpZ25lZChjbGFzcyBWZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgfVxuXG4gIGdldEVsZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0V2lkdGgoKSB7XG4gICAgY29uc3QgZWxlbWVudHNMZW5ndGggPSB0aGlzLmVsZW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICB3aWR0aCA9IGVsZW1lbnRzTGVuZ3RoOyAvLy9cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfVxuXG4gIHNvZnRtYXgoKSB7XG4gICAgY29uc3QgdmVjdG9yRmxvYXQzMkFycmF5ID0gdGhpcy50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHZlY3RvclNvZnRtYXgodmVjdG9yRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICByZXN1bHRWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShyZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdFZlY3RvcjtcbiAgfVxuXG4gIHN1YnRyYWN0VmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHZlY3RvckEgPSB0aGlzLCAvLy9cbiAgICAgICAgICB2ZWN0b3JCID0gdmVjdG9yLCAvLy9cbiAgICAgICAgICB2ZWN0b3JBRmxvYXQzMkFycmF5ID0gdmVjdG9yQS50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckJGbG9hdDMyQXJyYXkgPSB2ZWN0b3JCLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcmVzdWx0RmxvYXQzMkFycmF5ID0gdmVjdG9yU3VidHJhY3RWZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICBvdXRlck11bHRpcGx5VmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IHsgTWF0cml4IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICB2ZWN0b3JBID0gdGhpcywgLy8vXG4gICAgICAgICAgdmVjdG9yQiA9IHZlY3RvciwgLy8vXG4gICAgICAgICAgdmVjdG9yQUZsb2F0MzJBcnJheSA9IHZlY3RvckEudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICB2ZWN0b3JCRmxvYXQzMkFycmF5ID0gdmVjdG9yQi50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHZlY3RvckFXaWR0aCA9IHZlY3RvckEuZ2V0V2lkdGgoKSxcbiAgICAgICAgICB2ZWN0b3JCV2lkdGggPSB2ZWN0b3JCLmdldFdpZHRoKCksXG4gICAgICAgICAgcm93cyA9IHZlY3RvckFXaWR0aCwgIC8vL1xuICAgICAgICAgIGNvbHVtbnMgPSB2ZWN0b3JCV2lkdGgsIC8vL1xuICAgICAgICAgIHJlc3VsdEZsb2F0MzJBcnJheSA9IHZlY3Rvck91dGVyTXVsdGlwbHlWZWN0b3IodmVjdG9yQUZsb2F0MzJBcnJheSwgdmVjdG9yQkZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0TWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQ29sdW1uc0FuZEZsb2F0MzJBcnJheShyb3dzLCBjb2x1bW5zLCByZXN1bHRGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHJlc3VsdE1hdHJpeDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZWxlbWVudHMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgdG9GbG9hdDMyQXJyYXkoKSB7XG4gICAgY29uc3QgZmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmVsZW1lbnRzKTtcblxuICAgIHJldHVybiBmbG9hdDMyQXJyYXk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnRzKENsYXNzLCBlbGVtZW50cykge1xuICAgIGlmIChlbGVtZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtZW50cyA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBWZWN0b3I7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHZlY3RvciA9IG5ldyBDbGFzcyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21GbG9hdDMyQXJyYXkoQ2xhc3MsIGZsb2F0MzJBcnJheSkge1xuICAgIGlmIChmbG9hdDMyQXJyYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZmxvYXQzMkFycmF5ID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFZlY3RvcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksICAvLy9cbiAgICAgICAgICB2ZWN0b3IgPSBuZXcgQ2xhc3MoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmVnaXN0cnlBc3NpZ25lZCIsIlZlY3RvciIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJnZXRXaWR0aCIsImVsZW1lbnRzTGVuZ3RoIiwibGVuZ3RoIiwid2lkdGgiLCJzb2Z0bWF4IiwidmVjdG9yRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJyZXN1bHRGbG9hdDMyQXJyYXkiLCJ2ZWN0b3JTb2Z0bWF4IiwicmVzdWx0VmVjdG9yIiwiZnJvbUZsb2F0MzJBcnJheSIsInN1YnRyYWN0VmVjdG9yIiwidmVjdG9yIiwidmVjdG9yQSIsInZlY3RvckIiLCJ2ZWN0b3JBRmxvYXQzMkFycmF5IiwidmVjdG9yQkZsb2F0MzJBcnJheSIsInZlY3RvclN1YnRyYWN0VmVjdG9yIiwib3V0ZXJNdWx0aXBseVZlY3RvciIsIk1hdHJpeCIsInJlZ2lzdHJ5IiwidmVjdG9yQVdpZHRoIiwidmVjdG9yQldpZHRoIiwicm93cyIsImNvbHVtbnMiLCJ2ZWN0b3JPdXRlck11bHRpcGx5VmVjdG9yIiwicmVzdWx0TWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRmxvYXQzMkFycmF5IiwidG9KU09OIiwianNvbiIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21FbGVtZW50cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJmcm9tIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7Ozt1QkFOK0U7Z0VBRTFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXJCLFdBQWVBLElBQUFBLDBCQUFnQixnQkFBQzthQUFNQyxPQUN4QkMsUUFBUTtnQ0FEZ0JEO1FBRWxDLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGlCQUFpQixJQUFJLENBQUNILFFBQVEsQ0FBQ0ksTUFBTSxFQUNyQ0MsUUFBUUYsZ0JBQWdCLEdBQUc7Z0JBRWpDLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMscUJBQXFCLElBQUksQ0FBQ0MsY0FBYyxJQUN4Q0MscUJBQXFCQyxJQUFBQSxzQkFBYSxFQUFDSCxxQkFDbkNJLGVBQWVaLE9BQU9hLGdCQUFnQixDQUFDSDtnQkFFN0MsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxNQUFNO2dCQUNuQixJQUFNQyxVQUFVLElBQUksRUFDZEMsVUFBVUYsUUFDVkcsc0JBQXNCRixRQUFRUCxjQUFjLElBQzVDVSxzQkFBc0JGLFFBQVFSLGNBQWMsSUFDNUNDLHFCQUFxQlUsSUFBQUEsNkJBQW9CLEVBQUNGLHFCQUFxQkMsc0JBQy9EUCxlQUFlWixPQUFPYSxnQkFBZ0IsQ0FBQ0g7Z0JBRTdDLE9BQU9FO1lBQ1Q7OztZQUVBUyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CTixNQUFNO2dCQUN4QixJQUFNLEFBQUVPLFNBQVdDLGlCQUFRLENBQW5CRCxRQUNGTixVQUFVLElBQUksRUFDZEMsVUFBVUYsUUFDVkcsc0JBQXNCRixRQUFRUCxjQUFjLElBQzVDVSxzQkFBc0JGLFFBQVFSLGNBQWMsSUFDNUNlLGVBQWVSLFFBQVFiLFFBQVEsSUFDL0JzQixlQUFlUixRQUFRZCxRQUFRLElBQy9CdUIsT0FBT0YsY0FDUEcsVUFBVUYsY0FDVmYscUJBQXFCa0IsSUFBQUEsa0NBQXlCLEVBQUNWLHFCQUFxQkMsc0JBQ3BFVSxlQUFlUCxPQUFPUSw4QkFBOEIsQ0FBQ0osTUFBTUMsU0FBU2pCO2dCQUUxRSxPQUFPbUI7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNOUIsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEIrQixPQUFPO29CQUNML0IsVUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBTytCO1lBQ1Q7OztZQUVBdkIsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU13QixlQUFlLElBQUlDLGFBQWEsSUFBSSxDQUFDakMsUUFBUTtnQkFFbkQsT0FBT2dDO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsS0FBSyxFQUFFbkMsUUFBUTtnQkFDakMsSUFBSUEsYUFBYW9DLFdBQVc7b0JBQzFCcEMsV0FBV21DLE9BQU8sR0FBRztvQkFFckJBLFFBQVFwQyxRQUFRLEdBQUc7Z0JBQ3JCO2dCQUVBLElBQU1lLFNBQVMsSUFBSXFCLE1BQU1uQztnQkFFekIsT0FBT2M7WUFDVDs7O1lBRU9GLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQnVCLEtBQUssRUFBRUgsWUFBWTtnQkFDekMsSUFBSUEsaUJBQWlCSSxXQUFXO29CQUM5QkosZUFBZUcsT0FBTyxHQUFHO29CQUV6QkEsUUFBUXBDLFFBQVEsR0FBRztnQkFDckI7Z0JBRUEsSUFBTUMsV0FBV3FDLE1BQU1DLElBQUksQ0FBQ04sZUFDdEJsQixTQUFTLElBQUlxQixNQUFNbkM7Z0JBRXpCLE9BQU9jO1lBQ1QifQ==