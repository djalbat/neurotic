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
                this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXRyaXggZnJvbSBcIi4uL21hdHJpeFwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcblxuaW1wb3J0IHsgbWF0cml4RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VpZ2h0cyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cblxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5tYXRyaXguaW5pdGlhbGlzZShzaXplKTtcbiAgfVxuXG4gIHRyYWluKG9uZUhvdFZlY3RvcnMsIGxlYXJuaW5nUmF0ZSkge1xuICAgIGNvbnN0IFsgaW5wdXRPbmVIb3RWZWN0b3IsIG91dHB1dE9uZUhvdFZlY3RvciBdID0gb25lSG90VmVjdG9ycyxcbiAgICAgICAgICBsb2dpdHNWZWN0b3IgPSB0aGlzLm1hdHJpeC5tdWx0aXBseVZlY3RvcihpbnB1dE9uZUhvdFZlY3RvciksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvciA9IGxvZ2l0c1ZlY3Rvci5zb2Z0bWF4KCksXG4gICAgICAgICAgZ3JhZGllbnRWZWN0b3IgPSBwcm9iYWJpbGl0aWVzVmVjdG9yLnN1YnRyYWN0VmVjdG9yKG91dHB1dE9uZUhvdFZlY3RvciksXG4gICAgICAgICAgZGVsdGFzTWF0cml4ID0gaW5wdXRPbmVIb3RWZWN0b3Iub3V0ZXJNdWx0aXBseVZlY3RvcihncmFkaWVudFZlY3RvciksXG4gICAgICAgICAgc2NhbGVkRGVsdGFzTWF0cml4ID0gZGVsdGFzTWF0cml4LnNjYWxhck11bHRpcGx5KGxlYXJuaW5nUmF0ZSk7XG5cbiAgICB0aGlzLm1hdHJpeCA9IHRoaXMubWF0cml4LnN1YnRyYWN0TWF0cml4KHNjYWxlZERlbHRhc01hdHJpeCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWF0cml4SlNPTiA9IHRoaXMubWF0cml4LnRvSlNPTigpLFxuICAgICAgICAgIG1hdHJpeCA9IG1hdHJpeEpTT04sICAvL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtYXRyaXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpKU09OKGpzb24pIHtcbiAgICBjb25zdCBtYXRyaXggPSBtYXRyaXhGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICB3ZWlnaHRzID0gbmV3IFdlaWdodHMobWF0cml4KTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHdlaWdodHMgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFdlaWdodHMsIHByb3BlcnRpZXMsIG1hdHJpeCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2VpZ2h0cyIsIm1hdHJpeCIsImdldE1hdHJpeCIsImluaXRpYWxpc2UiLCJzaXplIiwidHJhaW4iLCJvbmVIb3RWZWN0b3JzIiwibGVhcm5pbmdSYXRlIiwiaW5wdXRPbmVIb3RWZWN0b3IiLCJvdXRwdXRPbmVIb3RWZWN0b3IiLCJsb2dpdHNWZWN0b3IiLCJtdWx0aXBseVZlY3RvciIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJzb2Z0bWF4IiwiZ3JhZGllbnRWZWN0b3IiLCJzdWJ0cmFjdFZlY3RvciIsImRlbHRhc01hdHJpeCIsIm91dGVyTXVsdGlwbHlWZWN0b3IiLCJzY2FsZWREZWx0YXNNYXRyaXgiLCJzY2FsYXJNdWx0aXBseSIsInN1YnRyYWN0TWF0cml4IiwidG9KU09OIiwibWF0cml4SlNPTiIsImpzb24iLCJmcm9tSkpTT04iLCJtYXRyaXhGcm9tSlNPTiIsIndlaWdodHMiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiTWF0cml4IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7OzZEQUxGOzhEQUNDO29CQUVXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQSxRQUNQQyxNQUFNO2dDQURDRDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHRDs7WUFPbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUNiLElBQUksQ0FBQ0gsTUFBTSxDQUFDRSxVQUFVLENBQUNDO1lBQ3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLGFBQWEsRUFBRUMsWUFBWTtnQkFDL0IsSUFBa0RELGtDQUFBQSxtQkFBMUNFLG9CQUEwQ0YsbUJBQXZCRyxxQkFBdUJILG1CQUM1Q0ksZUFBZSxJQUFJLENBQUNULE1BQU0sQ0FBQ1UsY0FBYyxDQUFDSCxvQkFDMUNJLHNCQUFzQkYsYUFBYUcsT0FBTyxJQUMxQ0MsaUJBQWlCRixvQkFBb0JHLGNBQWMsQ0FBQ04scUJBQ3BETyxlQUFlUixrQkFBa0JTLG1CQUFtQixDQUFDSCxpQkFDckRJLHFCQUFxQkYsYUFBYUcsY0FBYyxDQUFDWjtnQkFFdkQsSUFBSSxDQUFDTixNQUFNLEdBQUcsSUFBSSxDQUFDQSxNQUFNLENBQUNtQixjQUFjLENBQUNGO1lBQzNDOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDckIsTUFBTSxDQUFDb0IsTUFBTSxJQUMvQnBCLFNBQVNxQixZQUNUQyxPQUFPO29CQUNMdEIsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT3NCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUQsSUFBSTtnQkFDbkIsSUFBTXRCLFNBQVN3QixJQUFBQSxvQkFBYyxFQUFDRixPQUN4QkcsVUFBVSxJQXRDQzFCLFFBc0NXQztnQkFFNUIsT0FBT3lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBRXJDQztnQkFEaEIsSUFBTTdCLFNBQVM4QixlQUFNLENBQUNDLFdBQVcsSUFDM0JOLFVBQVVJLENBQUFBLFdBQUFBLGdCQUFPLEVBQUNILGNBQWMsT0FBdEJHLFVBQUFBO29CQTdDQzlCO29CQTZDK0I0QjtvQkFBWTNCO2lCQUE4QixDQUExRTZCLE9BQW9ELHFCQUFHRDtnQkFFdkUsT0FBT0g7WUFDVDs7O1dBaERtQjFCO3FCQUFnQjhCLGdCQUFPIn0=