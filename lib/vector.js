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
                var vectorFloat32Array = this.toFloat32Array(), resultFloat32Array = (0, _libnode.vectorSoftmax)(vectorFloat32Array), resultVector = Vector.fromFloat32Array(resultFloat32Array);
                return resultVector;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHZlY3RvclNvZnRtYXggfSBmcm9tIFwiLi4vbGliLm5vZGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gIH1cblxuICBnZXRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50cztcbiAgfVxuXG4gIGdldFdpZHRoKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzTGVuZ3RoID0gdGhpcy5lbGVtZW50cy5sZW5ndGgsXG4gICAgICAgICAgd2lkdGggPSBlbGVtZW50c0xlbmd0aDsgLy8vXG5cbiAgICByZXR1cm4gd2lkdGg7XG4gIH1cblxuICBzb2Z0bWF4KCkge1xuICAgIGNvbnN0IHZlY3RvckZsb2F0MzJBcnJheSA9IHRoaXMudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByZXN1bHRGbG9hdDMyQXJyYXkgPSB2ZWN0b3JTb2Z0bWF4KHZlY3RvckZsb2F0MzJBcnJheSksXG4gICAgICAgICAgcmVzdWx0VmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocmVzdWx0RmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiByZXN1bHRWZWN0b3I7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnRzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBlbGVtZW50c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHRvRmxvYXQzMkFycmF5KCkge1xuICAgIGNvbnN0IGZsb2F0MzJBcnJheSA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5lbGVtZW50cyk7XG5cbiAgICByZXR1cm4gZmxvYXQzMkFycmF5O1xuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50cyhDbGFzcywgZWxlbWVudHMpIHtcbiAgICBpZiAoZWxlbWVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZWxlbWVudHMgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVmVjdG9yOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgQ2xhc3MoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmxvYXQzMkFycmF5KENsYXNzLCBmbG9hdDMyQXJyYXkpIHtcbiAgICBpZiAoZmxvYXQzMkFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZsb2F0MzJBcnJheSA9IENsYXNzOyAvLy9cblxuICAgICAgQ2xhc3MgPSBWZWN0b3I7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShmbG9hdDMyQXJyYXkpLCAgLy8vXG4gICAgICAgICAgdmVjdG9yID0gbmV3IENsYXNzKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWZWN0b3IiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwiZ2V0V2lkdGgiLCJlbGVtZW50c0xlbmd0aCIsImxlbmd0aCIsIndpZHRoIiwic29mdG1heCIsInZlY3RvckZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwicmVzdWx0RmxvYXQzMkFycmF5IiwidmVjdG9yU29mdG1heCIsInJlc3VsdFZlY3RvciIsImZyb21GbG9hdDMyQXJyYXkiLCJ0b0pTT04iLCJqc29uIiwiZmxvYXQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiZnJvbUVsZW1lbnRzIiwiQ2xhc3MiLCJ1bmRlZmluZWQiLCJ2ZWN0b3IiLCJBcnJheSIsImZyb20iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3VCQUZTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEsdUJBQU47YUFBTUEsT0FDUEMsUUFBUTtnQ0FEREQ7UUFFakIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFGQ0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFFBQVE7WUFDdEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsaUJBQWlCLElBQUksQ0FBQ0gsUUFBUSxDQUFDSSxNQUFNLEVBQ3JDQyxRQUFRRixnQkFBZ0IsR0FBRztnQkFFakMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxjQUFjLElBQ3hDQyxxQkFBcUJDLElBQUFBLHNCQUFhLEVBQUNILHFCQUNuQ0ksZUFBZVosQUFuQkpBLE9BbUJXYSxnQkFBZ0IsQ0FBQ0g7Z0JBRTdDLE9BQU9FO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWIsV0FBVyxJQUFJLENBQUNBLFFBQVEsRUFDeEJjLE9BQU87b0JBQ0xkLFVBQUFBO2dCQUNGO2dCQUVOLE9BQU9jO1lBQ1Q7OztZQUVBTixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU8sZUFBZSxJQUFJQyxhQUFhLElBQUksQ0FBQ2hCLFFBQVE7Z0JBRW5ELE9BQU9lO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsS0FBSyxFQUFFbEIsUUFBUTtnQkFDakMsSUFBSUEsYUFBYW1CLFdBQVc7b0JBQzFCbkIsV0FBV2tCLE9BQU8sR0FBRztvQkFFckJBLFFBM0NlbkIsUUEyQ0MsR0FBRztnQkFDckI7Z0JBRUEsSUFBTXFCLFNBQVMsSUFBSUYsTUFBTWxCO2dCQUV6QixPQUFPb0I7WUFDVDs7O1lBRU9SLEtBQUFBO21CQUFQLFNBQU9BLGlCQUFpQk0sS0FBSyxFQUFFSCxZQUFZO2dCQUN6QyxJQUFJQSxpQkFBaUJJLFdBQVc7b0JBQzlCSixlQUFlRyxPQUFPLEdBQUc7b0JBRXpCQSxRQXZEZW5CLFFBdURDLEdBQUc7Z0JBQ3JCO2dCQUVBLElBQU1DLFdBQVdxQixNQUFNQyxJQUFJLENBQUNQLGVBQ3RCSyxTQUFTLElBQUlGLE1BQU1sQjtnQkFFekIsT0FBT29CO1lBQ1Q7OztXQTlEbUJyQiJ9