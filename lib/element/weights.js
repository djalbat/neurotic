"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Weights;
    }
});
var _matrix = /*#__PURE__*/ _interop_require_default(require("../matrix"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _json = require("../utilities/json");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var Weights = /*#__PURE__*/ function(Element) {
    _inherits(Weights, Element);
    function Weights(matrix) {
        _class_call_check(this, Weights);
        var _this;
        _this = _call_super(this, Weights);
        _this.matrix = matrix;
        return _this;
    }
    _create_class(Weights, [
        {
            key: "getMatrix",
            value: function getMatrix() {
                return this.matrix;
            }
        },
        {
            key: "initialise",
            value: function initialise(size) {
                this.matrix.initialise(size);
            }
        },
        {
            key: "train",
            value: function train(oneHotVectors) {
                debugger;
            }
        },
        {
            key: "asJSON",
            value: function asJSON() {
                var matrixJSON = this.matrix.asJSON(), matrix = matrixJSON, json = {
                    matrix: matrix
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJJSON",
            value: function fromJJSON(json) {
                var matrix = (0, _json.matrixFromJSON)(json), weights = new Weights(matrix);
                return weights;
            }
        },
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _Element;
                var matrix = _matrix.default.fromNothing(), weights = (_Element = _element.default).fromProperties.apply(_Element, [
                    Weights,
                    properties,
                    matrix
                ].concat(_to_consumable_array(remainingArguments)));
                return weights;
            }
        }
    ]);
    return Weights;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXRyaXggZnJvbSBcIi4uL21hdHJpeFwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgbWF0cml4RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VpZ2h0cyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cblxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5tYXRyaXguaW5pdGlhbGlzZShzaXplKTtcbiAgfVxuXG4gIHRyYWluKG9uZUhvdFZlY3RvcnMpIHtcbiAgICBkZWJ1Z2dlclxuICB9XG5cbiAgYXNKU09OKCkge1xuICAgIGNvbnN0IG1hdHJpeEpTT04gPSB0aGlzLm1hdHJpeC5hc0pTT04oKSxcbiAgICAgICAgICBtYXRyaXggPSBtYXRyaXhKU09OLCAgLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWF0cml4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KSlNPTihqc29uKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbWF0cml4RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IG5ldyBXZWlnaHRzKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBtYXRyaXggPSBNYXRyaXguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB3ZWlnaHRzID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhXZWlnaHRzLCBwcm9wZXJ0aWVzLCBtYXRyaXgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIldlaWdodHMiLCJtYXRyaXgiLCJnZXRNYXRyaXgiLCJpbml0aWFsaXNlIiwic2l6ZSIsInRyYWluIiwib25lSG90VmVjdG9ycyIsImFzSlNPTiIsIm1hdHJpeEpTT04iLCJqc29uIiwiZnJvbUpKU09OIiwibWF0cml4RnJvbUpTT04iLCJ3ZWlnaHRzIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsIk1hdHJpeCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs2REFMRjs4REFDQztvQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUEsUUFDUEMsTUFBTTtnQ0FEQ0Q7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR0Q7O1lBT25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsSUFBSTtnQkFDYixJQUFJLENBQUNILE1BQU0sQ0FBQ0UsVUFBVSxDQUFDQztZQUN6Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhO2dCQUNqQixRQUFRO1lBQ1Y7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNQLE1BQU0sQ0FBQ00sTUFBTSxJQUMvQk4sU0FBU08sWUFDVEMsT0FBTztvQkFDTFIsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT1E7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVRCxJQUFJO2dCQUNuQixJQUFNUixTQUFTVSxJQUFBQSxvQkFBYyxFQUFDRixPQUN4QkcsVUFBVSxJQS9CQ1osUUErQldDO2dCQUU1QixPQUFPVztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUVyQ0M7Z0JBRGhCLElBQU1mLFNBQVNnQixlQUFNLENBQUNDLFdBQVcsSUFDM0JOLFVBQVVJLENBQUFBLFdBQUFBLGdCQUFPLEVBQUNILGNBQWMsT0FBdEJHLFVBQUFBO29CQXRDQ2hCO29CQXNDK0JjO29CQUFZYjtpQkFBOEIsQ0FBMUVlLE9BQW9ELHFCQUFHRDtnQkFFdkUsT0FBT0g7WUFDVDs7O1dBekNtQlo7cUJBQWdCZ0IsZ0JBQU8ifQ==