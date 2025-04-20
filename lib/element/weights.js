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
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
            value: function train(oneHotVectors, learningRate) {
                var _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], logitsVector = this.matrix.multiplyVector(inputOneHotVector), probabilitiesVector = logitsVector.softmax(), gradientVector = probabilitiesVector.subtractVector(outputOneHotVector), deltasMatrix = inputOneHotVector.outerMultiplyVector(gradientVector), scaledDeltasMatrix = deltasMatrix.scalarMultiply(learningRate);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var matrixJSON = this.matrix.toJSON(), matrix = matrixJSON, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXRyaXggZnJvbSBcIi4uL21hdHJpeFwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgbWF0cml4RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VpZ2h0cyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cblxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5tYXRyaXguaW5pdGlhbGlzZShzaXplKTtcbiAgfVxuXG4gIHRyYWluKG9uZUhvdFZlY3RvcnMsIGxlYXJuaW5nUmF0ZSkge1xuICAgIGNvbnN0IFsgaW5wdXRPbmVIb3RWZWN0b3IsIG91dHB1dE9uZUhvdFZlY3RvciBdID0gb25lSG90VmVjdG9ycyxcbiAgICAgICAgICBsb2dpdHNWZWN0b3IgPSB0aGlzLm1hdHJpeC5tdWx0aXBseVZlY3RvcihpbnB1dE9uZUhvdFZlY3RvciksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvciA9IGxvZ2l0c1ZlY3Rvci5zb2Z0bWF4KCksXG4gICAgICAgICAgZ3JhZGllbnRWZWN0b3IgPSBwcm9iYWJpbGl0aWVzVmVjdG9yLnN1YnRyYWN0VmVjdG9yKG91dHB1dE9uZUhvdFZlY3RvciksXG4gICAgICAgICAgZGVsdGFzTWF0cml4ID0gaW5wdXRPbmVIb3RWZWN0b3Iub3V0ZXJNdWx0aXBseVZlY3RvcihncmFkaWVudFZlY3RvciksXG4gICAgICAgICAgc2NhbGVkRGVsdGFzTWF0cml4ID0gZGVsdGFzTWF0cml4LnNjYWxhck11bHRpcGx5KGxlYXJuaW5nUmF0ZSk7XG5cblxuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1hdHJpeEpTT04gPSB0aGlzLm1hdHJpeC50b0pTT04oKSxcbiAgICAgICAgICBtYXRyaXggPSBtYXRyaXhKU09OLCAgLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWF0cml4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KSlNPTihqc29uKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbWF0cml4RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IG5ldyBXZWlnaHRzKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBtYXRyaXggPSBNYXRyaXguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB3ZWlnaHRzID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhXZWlnaHRzLCBwcm9wZXJ0aWVzLCBtYXRyaXgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIldlaWdodHMiLCJtYXRyaXgiLCJnZXRNYXRyaXgiLCJpbml0aWFsaXNlIiwic2l6ZSIsInRyYWluIiwib25lSG90VmVjdG9ycyIsImxlYXJuaW5nUmF0ZSIsImlucHV0T25lSG90VmVjdG9yIiwib3V0cHV0T25lSG90VmVjdG9yIiwibG9naXRzVmVjdG9yIiwibXVsdGlwbHlWZWN0b3IiLCJwcm9iYWJpbGl0aWVzVmVjdG9yIiwic29mdG1heCIsImdyYWRpZW50VmVjdG9yIiwic3VidHJhY3RWZWN0b3IiLCJkZWx0YXNNYXRyaXgiLCJvdXRlck11bHRpcGx5VmVjdG9yIiwic2NhbGVkRGVsdGFzTWF0cml4Iiwic2NhbGFyTXVsdGlwbHkiLCJ0b0pTT04iLCJtYXRyaXhKU09OIiwianNvbiIsImZyb21KSlNPTiIsIm1hdHJpeEZyb21KU09OIiwid2VpZ2h0cyIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJNYXRyaXgiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7NkRBTEY7OERBQ0M7b0JBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHdCQUFOO2NBQU1BO2FBQUFBLFFBQ1BDLE1BQU07Z0NBRENEOztnQkFFakIsa0JBRmlCQTtRQUlqQixNQUFLQyxNQUFNLEdBQUdBOzs7a0JBSkdEOztZQU9uQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLElBQUk7Z0JBQ2IsSUFBSSxDQUFDSCxNQUFNLENBQUNFLFVBQVUsQ0FBQ0M7WUFDekI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsYUFBYSxFQUFFQyxZQUFZO2dCQUMvQixJQUFrREQsa0NBQUFBLG1CQUExQ0Usb0JBQTBDRixtQkFBdkJHLHFCQUF1QkgsbUJBQzVDSSxlQUFlLElBQUksQ0FBQ1QsTUFBTSxDQUFDVSxjQUFjLENBQUNILG9CQUMxQ0ksc0JBQXNCRixhQUFhRyxPQUFPLElBQzFDQyxpQkFBaUJGLG9CQUFvQkcsY0FBYyxDQUFDTixxQkFDcERPLGVBQWVSLGtCQUFrQlMsbUJBQW1CLENBQUNILGlCQUNyREkscUJBQXFCRixhQUFhRyxjQUFjLENBQUNaO1lBR3pEOzs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDcEIsTUFBTSxDQUFDbUIsTUFBTSxJQUMvQm5CLFNBQVNvQixZQUNUQyxPQUFPO29CQUNMckIsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT3FCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUQsSUFBSTtnQkFDbkIsSUFBTXJCLFNBQVN1QixJQUFBQSxvQkFBYyxFQUFDRixPQUN4QkcsVUFBVSxJQXRDQ3pCLFFBc0NXQztnQkFFNUIsT0FBT3dCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBRXJDQztnQkFEaEIsSUFBTTVCLFNBQVM2QixlQUFNLENBQUNDLFdBQVcsSUFDM0JOLFVBQVVJLENBQUFBLFdBQUFBLGdCQUFPLEVBQUNILGNBQWMsT0FBdEJHLFVBQUFBO29CQTdDQzdCO29CQTZDK0IyQjtvQkFBWTFCO2lCQUE4QixDQUExRTRCLE9BQW9ELHFCQUFHRDtnQkFFdkUsT0FBT0g7WUFDVDs7O1dBaERtQnpCO3FCQUFnQjZCLGdCQUFPIn0=