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
var _result = /*#__PURE__*/ _interop_require_default(require("../result"));
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
                this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);
                var result = _result.default.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);
                return result;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4uL3Jlc3VsdFwiO1xuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBtYXRyaXhGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWlnaHRzIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBpbml0aWFsaXNlKHNpemUpIHtcbiAgICB0aGlzLm1hdHJpeC5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgdHJhaW4ob25lSG90VmVjdG9ycywgbGVhcm5pbmdSYXRlKSB7XG4gICAgY29uc3QgWyBpbnB1dE9uZUhvdFZlY3Rvciwgb3V0cHV0T25lSG90VmVjdG9yIF0gPSBvbmVIb3RWZWN0b3JzLFxuICAgICAgICAgIGxvZ2l0c1ZlY3RvciA9IHRoaXMubWF0cml4Lm11bHRpcGx5VmVjdG9yKGlucHV0T25lSG90VmVjdG9yKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gbG9naXRzVmVjdG9yLnNvZnRtYXgoKSxcbiAgICAgICAgICBncmFkaWVudFZlY3RvciA9IHByb2JhYmlsaXRpZXNWZWN0b3Iuc3VidHJhY3RWZWN0b3Iob3V0cHV0T25lSG90VmVjdG9yKSxcbiAgICAgICAgICBkZWx0YXNNYXRyaXggPSBpbnB1dE9uZUhvdFZlY3Rvci5vdXRlck11bHRpcGx5VmVjdG9yKGdyYWRpZW50VmVjdG9yKSxcbiAgICAgICAgICBzY2FsZWREZWx0YXNNYXRyaXggPSBkZWx0YXNNYXRyaXguc2NhbGFyTXVsdGlwbHkobGVhcm5pbmdSYXRlKTtcblxuICAgIHRoaXMubWF0cml4ID0gdGhpcy5tYXRyaXguc3VidHJhY3RNYXRyaXgoc2NhbGVkRGVsdGFzTWF0cml4KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IFJlc3VsdC5mcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IsIHByb2JhYmlsaXRpZXNWZWN0b3IpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtYXRyaXhKU09OID0gdGhpcy5tYXRyaXgudG9KU09OKCksXG4gICAgICAgICAgbWF0cml4ID0gbWF0cml4SlNPTiwgIC8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1hdHJpeFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSkpTT04oanNvbikge1xuICAgIGNvbnN0IG1hdHJpeCA9IG1hdHJpeEZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHdlaWdodHMgPSBuZXcgV2VpZ2h0cyhtYXRyaXgpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgbWF0cml4ID0gTWF0cml4LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgd2VpZ2h0cyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoV2VpZ2h0cywgcHJvcGVydGllcywgbWF0cml4LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJXZWlnaHRzIiwibWF0cml4IiwiZ2V0TWF0cml4IiwiaW5pdGlhbGlzZSIsInNpemUiLCJ0cmFpbiIsIm9uZUhvdFZlY3RvcnMiLCJsZWFybmluZ1JhdGUiLCJpbnB1dE9uZUhvdFZlY3RvciIsIm91dHB1dE9uZUhvdFZlY3RvciIsImxvZ2l0c1ZlY3RvciIsIm11bHRpcGx5VmVjdG9yIiwicHJvYmFiaWxpdGllc1ZlY3RvciIsInNvZnRtYXgiLCJncmFkaWVudFZlY3RvciIsInN1YnRyYWN0VmVjdG9yIiwiZGVsdGFzTWF0cml4Iiwib3V0ZXJNdWx0aXBseVZlY3RvciIsInNjYWxlZERlbHRhc01hdHJpeCIsInNjYWxhck11bHRpcGx5Iiwic3VidHJhY3RNYXRyaXgiLCJyZXN1bHQiLCJSZXN1bHQiLCJmcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvciIsInRvSlNPTiIsIm1hdHJpeEpTT04iLCJqc29uIiwiZnJvbUpKU09OIiwibWF0cml4RnJvbUpTT04iLCJ3ZWlnaHRzIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsIk1hdHJpeCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozs2REFORjs2REFDQTs4REFDQztvQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUEsUUFDUEMsTUFBTTtnQ0FEQ0Q7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR0Q7O1lBT25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsSUFBSTtnQkFDYixJQUFJLENBQUNILE1BQU0sQ0FBQ0UsVUFBVSxDQUFDQztZQUN6Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQy9CLElBQWtERCxrQ0FBQUEsbUJBQTFDRSxvQkFBMENGLG1CQUF2QkcscUJBQXVCSCxtQkFDNUNJLGVBQWUsSUFBSSxDQUFDVCxNQUFNLENBQUNVLGNBQWMsQ0FBQ0gsb0JBQzFDSSxzQkFBc0JGLGFBQWFHLE9BQU8sSUFDMUNDLGlCQUFpQkYsb0JBQW9CRyxjQUFjLENBQUNOLHFCQUNwRE8sZUFBZVIsa0JBQWtCUyxtQkFBbUIsQ0FBQ0gsaUJBQ3JESSxxQkFBcUJGLGFBQWFHLGNBQWMsQ0FBQ1o7Z0JBRXZELElBQUksQ0FBQ04sTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDbUIsY0FBYyxDQUFDRjtnQkFFekMsSUFBTUcsU0FBU0MsZUFBTSxDQUFDQyw0Q0FBNEMsQ0FBQ2Qsb0JBQW9CRztnQkFFdkYsT0FBT1M7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ3hCLE1BQU0sQ0FBQ3VCLE1BQU0sSUFDL0J2QixTQUFTd0IsWUFDVEMsT0FBTztvQkFDTHpCLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU95QjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVELElBQUk7Z0JBQ25CLElBQU16QixTQUFTMkIsSUFBQUEsb0JBQWMsRUFBQ0YsT0FDeEJHLFVBQVUsSUExQ0M3QixRQTBDV0M7Z0JBRTVCLE9BQU80QjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUVyQ0M7Z0JBRGhCLElBQU1oQyxTQUFTaUMsZUFBTSxDQUFDQyxXQUFXLElBQzNCTixVQUFVSSxDQUFBQSxXQUFBQSxnQkFBTyxFQUFDSCxjQUFjLE9BQXRCRyxVQUFBQTtvQkFqRENqQztvQkFpRCtCK0I7b0JBQVk5QjtpQkFBOEIsQ0FBMUVnQyxPQUFvRCxxQkFBR0Q7Z0JBRXZFLE9BQU9IO1lBQ1Q7OztXQXBEbUI3QjtxQkFBZ0JpQyxnQkFBTyJ9