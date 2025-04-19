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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92ZWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICB9XG5cbiAgZ2V0RWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudHM7XG4gIH1cblxuICBnZXRXaWR0aCgpIHtcbiAgICBjb25zdCBlbGVtZW50c0xlbmd0aCA9IHRoaXMuZWxlbWVudHMubGVuZ3RoLFxuICAgICAgICAgIHdpZHRoID0gZWxlbWVudHNMZW5ndGg7IC8vL1xuXG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5lbGVtZW50cyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZWxlbWVudHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICB0b0Zsb2F0MzJBcnJheSgpIHtcbiAgICBjb25zdCBmbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZsb2F0MzJBcnJheTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRWxlbWVudHMoQ2xhc3MsIGVsZW1lbnRzKSB7XG4gICAgaWYgKGVsZW1lbnRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnRzID0gQ2xhc3M7IC8vL1xuXG4gICAgICBDbGFzcyA9IFZlY3RvcjsgLy8vXG4gICAgfVxuXG4gICAgY29uc3QgdmVjdG9yID0gbmV3IENsYXNzKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiB2ZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsb2F0MzJBcnJheShDbGFzcywgZmxvYXQzMkFycmF5KSB7XG4gICAgaWYgKGZsb2F0MzJBcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBmbG9hdDMyQXJyYXkgPSBDbGFzczsgLy8vXG5cbiAgICAgIENsYXNzID0gVmVjdG9yOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSwgIC8vL1xuICAgICAgICAgIHZlY3RvciA9IG5ldyBDbGFzcyhlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gdmVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmVjdG9yIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsImdldFdpZHRoIiwiZWxlbWVudHNMZW5ndGgiLCJsZW5ndGgiLCJ3aWR0aCIsInRvSlNPTiIsImpzb24iLCJ0b0Zsb2F0MzJBcnJheSIsImZsb2F0MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsImZyb21FbGVtZW50cyIsIkNsYXNzIiwidW5kZWZpbmVkIiwidmVjdG9yIiwiZnJvbUZsb2F0MzJBcnJheSIsIkFycmF5IiwiZnJvbSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx1QkFBTjthQUFNQSxPQUNQQyxRQUFRO2dDQURERDtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUZDRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsUUFBUTtZQUN0Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUIsSUFBSSxDQUFDSCxRQUFRLENBQUNJLE1BQU0sRUFDckNDLFFBQVFGLGdCQUFnQixHQUFHO2dCQUVqQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1OLFdBQVcsSUFBSSxDQUFDQSxRQUFRLEVBQ3hCTyxPQUFPO29CQUNMUCxVQUFBQTtnQkFDRjtnQkFFTixPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSUMsYUFBYSxJQUFJLENBQUNWLFFBQVE7Z0JBRW5ELE9BQU9TO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUMsS0FBSyxFQUFFWixRQUFRO2dCQUNqQyxJQUFJQSxhQUFhYSxXQUFXO29CQUMxQmIsV0FBV1ksT0FBTyxHQUFHO29CQUVyQkEsUUFuQ2ViLFFBbUNDLEdBQUc7Z0JBQ3JCO2dCQUVBLElBQU1lLFNBQVMsSUFBSUYsTUFBTVo7Z0JBRXpCLE9BQU9jO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJILEtBQUssRUFBRUgsWUFBWTtnQkFDekMsSUFBSUEsaUJBQWlCSSxXQUFXO29CQUM5QkosZUFBZUcsT0FBTyxHQUFHO29CQUV6QkEsUUEvQ2ViLFFBK0NDLEdBQUc7Z0JBQ3JCO2dCQUVBLElBQU1DLFdBQVdnQixNQUFNQyxJQUFJLENBQUNSLGVBQ3RCSyxTQUFTLElBQUlGLE1BQU1aO2dCQUV6QixPQUFPYztZQUNUOzs7V0F0RG1CZiJ9