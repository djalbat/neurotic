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
var _libnode = require("../../lib.node");
var _matrix = /*#__PURE__*/ _interop_require_default(require("../matrix"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _probabilities = /*#__PURE__*/ _interop_require_default(require("../vector/probabilities"));
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
    function Weights(properties, childElements, matrix) {
        _class_call_check(this, Weights);
        var _this;
        _this = _call_super(this, Weights, [
            properties,
            childElements
        ]);
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
            key: "prepare",
            value: function prepare(inputOneHotVector, outputOneHotVector) {
                var logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = _probabilities.default.fromVector(logitsVectorSoftmax), gradientVector = probabilitiesVector.subtractVector(outputOneHotVector), deltaMatrix = inputOneHotVector.outerMultiplyByVector(gradientVector);
                return deltaMatrix;
            }
        },
        {
            key: "update",
            value: function update(scaledDeltasMatrix) {
                this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);
            }
        },
        {
            key: "forward",
            value: function forward(oneHotVector) {
                var oneHotVectorFloat32Array = oneHotVector.toFloat32Array(), matrixFloat32Array = this.matrix.toFloat32Array(), rows = this.matrix.getRows(), columns = this.matrix.getColumns(), probabilitiesFloat32Array = (0, _libnode.forward)(oneHotVectorFloat32Array, matrixFloat32Array, rows, columns), probabilitiesVector = _probabilities.default.fromFloat32Array(probabilitiesFloat32Array);
                return probabilitiesVector;
            }
        },
        {
            key: "initialise",
            value: function initialise(size) {
                this.matrix.initialise(size);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZvcndhcmQgfSBmcm9tIFwiLi4vLi4vbGliLm5vZGVcIjtcblxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFByb2JhYmlsaXRpZXNWZWN0b3IgZnJvbSBcIi4uL3ZlY3Rvci9wcm9iYWJpbGl0aWVzXCI7XG5cbmltcG9ydCB7IG1hdHJpeEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRFbGVtZW50cywgbWF0cml4KSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRFbGVtZW50cyk7XG5cbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBwcmVwYXJlKGlucHV0T25lSG90VmVjdG9yLCBvdXRwdXRPbmVIb3RWZWN0b3IpIHtcbiAgICBjb25zdCBsb2dpdHNWZWN0b3IgPSBpbnB1dE9uZUhvdFZlY3Rvci5tdWx0aXBseUJ5TWF0cml4KHRoaXMubWF0cml4KSxcbiAgICAgICAgICBsb2dpdHNWZWN0b3JTb2Z0bWF4ID0gbG9naXRzVmVjdG9yLnNvZnRtYXgoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gUHJvYmFiaWxpdGllc1ZlY3Rvci5mcm9tVmVjdG9yKGxvZ2l0c1ZlY3RvclNvZnRtYXgpLCAgLy8vXG4gICAgICAgICAgZ3JhZGllbnRWZWN0b3IgPSBwcm9iYWJpbGl0aWVzVmVjdG9yLnN1YnRyYWN0VmVjdG9yKG91dHB1dE9uZUhvdFZlY3RvciksXG4gICAgICAgICAgZGVsdGFNYXRyaXggPSBpbnB1dE9uZUhvdFZlY3Rvci5vdXRlck11bHRpcGx5QnlWZWN0b3IoZ3JhZGllbnRWZWN0b3IpO1xuXG4gICAgcmV0dXJuIGRlbHRhTWF0cml4O1xuICB9XG5cbiAgdXBkYXRlKHNjYWxlZERlbHRhc01hdHJpeCkge1xuICAgIHRoaXMubWF0cml4ID0gdGhpcy5tYXRyaXguc3VidHJhY3RNYXRyaXgoc2NhbGVkRGVsdGFzTWF0cml4KTtcbiAgfVxuXG4gIGZvcndhcmQob25lSG90VmVjdG9yKSB7XG4gICAgY29uc3Qgb25lSG90VmVjdG9yRmxvYXQzMkFycmF5ID0gb25lSG90VmVjdG9yLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4RmxvYXQzMkFycmF5ID0gdGhpcy5tYXRyaXgudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByb3dzID0gdGhpcy5tYXRyaXguZ2V0Um93cygpLFxuICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLm1hdHJpeC5nZXRDb2x1bW5zKCksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc0Zsb2F0MzJBcnJheSA9IGZvcndhcmQob25lSG90VmVjdG9yRmxvYXQzMkFycmF5LCBtYXRyaXhGbG9hdDMyQXJyYXksIHJvd3MsIGNvbHVtbnMpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSBQcm9iYWJpbGl0aWVzVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocHJvYmFiaWxpdGllc0Zsb2F0MzJBcnJheSk7XG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdGllc1ZlY3RvcjtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMubWF0cml4LmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWF0cml4SlNPTiA9IHRoaXMubWF0cml4LnRvSlNPTigpLFxuICAgICAgICAgIG1hdHJpeCA9IG1hdHJpeEpTT04sICAvL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtYXRyaXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpKU09OKGpzb24pIHtcbiAgICBjb25zdCBtYXRyaXggPSBtYXRyaXhGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICB3ZWlnaHRzID0gbmV3IFdlaWdodHMobWF0cml4KTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHdlaWdodHMgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFdlaWdodHMsIHByb3BlcnRpZXMsIG1hdHJpeCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2VpZ2h0cyIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwibWF0cml4IiwiZ2V0TWF0cml4IiwicHJlcGFyZSIsImlucHV0T25lSG90VmVjdG9yIiwib3V0cHV0T25lSG90VmVjdG9yIiwibG9naXRzVmVjdG9yIiwibXVsdGlwbHlCeU1hdHJpeCIsImxvZ2l0c1ZlY3RvclNvZnRtYXgiLCJzb2Z0bWF4IiwicHJvYmFiaWxpdGllc1ZlY3RvciIsIlByb2JhYmlsaXRpZXNWZWN0b3IiLCJmcm9tVmVjdG9yIiwiZ3JhZGllbnRWZWN0b3IiLCJzdWJ0cmFjdFZlY3RvciIsImRlbHRhTWF0cml4Iiwib3V0ZXJNdWx0aXBseUJ5VmVjdG9yIiwidXBkYXRlIiwic2NhbGVkRGVsdGFzTWF0cml4Iiwic3VidHJhY3RNYXRyaXgiLCJmb3J3YXJkIiwib25lSG90VmVjdG9yIiwib25lSG90VmVjdG9yRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJtYXRyaXhGbG9hdDMyQXJyYXkiLCJyb3dzIiwiZ2V0Um93cyIsImNvbHVtbnMiLCJnZXRDb2x1bW5zIiwicHJvYmFiaWxpdGllc0Zsb2F0MzJBcnJheSIsImZyb21GbG9hdDMyQXJyYXkiLCJpbml0aWFsaXNlIiwic2l6ZSIsInRvSlNPTiIsIm1hdHJpeEpTT04iLCJqc29uIiwiZnJvbUpKU09OIiwibWF0cml4RnJvbUpTT04iLCJ3ZWlnaHRzIiwiZnJvbVByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiTWF0cml4IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3VCQVJHOzZEQUVMOzhEQUNDO29FQUNZO29CQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQSxRQUNQQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsTUFBTTtnQ0FEMUJIOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFZQzs7UUFFbEIsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxpQkFBaUIsRUFBRUMsa0JBQWtCO2dCQUMzQyxJQUFNQyxlQUFlRixrQkFBa0JHLGdCQUFnQixDQUFDLElBQUksQ0FBQ04sTUFBTSxHQUM3RE8sc0JBQXNCRixhQUFhRyxPQUFPLElBQzFDQyxzQkFBc0JDLHNCQUFtQixDQUFDQyxVQUFVLENBQUNKLHNCQUNyREssaUJBQWlCSCxvQkFBb0JJLGNBQWMsQ0FBQ1QscUJBQ3BEVSxjQUFjWCxrQkFBa0JZLHFCQUFxQixDQUFDSDtnQkFFNUQsT0FBT0U7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxrQkFBa0I7Z0JBQ3ZCLElBQUksQ0FBQ2pCLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ2tCLGNBQWMsQ0FBQ0Q7WUFDM0M7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsWUFBWTtnQkFDbEIsSUFBTUMsMkJBQTJCRCxhQUFhRSxjQUFjLElBQ3REQyxxQkFBcUIsSUFBSSxDQUFDdkIsTUFBTSxDQUFDc0IsY0FBYyxJQUMvQ0UsT0FBTyxJQUFJLENBQUN4QixNQUFNLENBQUN5QixPQUFPLElBQzFCQyxVQUFVLElBQUksQ0FBQzFCLE1BQU0sQ0FBQzJCLFVBQVUsSUFDaENDLDRCQUE0QlQsSUFBQUEsZ0JBQU8sRUFBQ0UsMEJBQTBCRSxvQkFBb0JDLE1BQU1FLFVBQ3hGakIsc0JBQXNCQyxzQkFBbUIsQ0FBQ21CLGdCQUFnQixDQUFDRDtnQkFFakUsT0FBT25CO1lBQ1Q7OztZQUVBcUIsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdDLElBQUk7Z0JBQ2IsSUFBSSxDQUFDL0IsTUFBTSxDQUFDOEIsVUFBVSxDQUFDQztZQUN6Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhLElBQUksQ0FBQ2pDLE1BQU0sQ0FBQ2dDLE1BQU0sSUFDL0JoQyxTQUFTaUMsWUFDVEMsT0FBTztvQkFDTGxDLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9rQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVELElBQUk7Z0JBQ25CLElBQU1sQyxTQUFTb0MsSUFBQUEsb0JBQWMsRUFBQ0YsT0FDeEJHLFVBQVUsSUFwREN4QyxRQW9EV0c7Z0JBRTVCLE9BQU9xQztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZXhDLFVBQVU7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUd5QyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBRXJDQztnQkFEaEIsSUFBTXhDLFNBQVN5QyxlQUFNLENBQUNDLFdBQVcsSUFDM0JMLFVBQVVHLENBQUFBLFdBQUFBLGdCQUFPLEVBQUNGLGNBQWMsT0FBdEJFLFVBQUFBO29CQTNEQzNDO29CQTJEK0JDO29CQUFZRTtpQkFBOEIsQ0FBMUV3QyxPQUFvRCxxQkFBR0Q7Z0JBRXZFLE9BQU9GO1lBQ1Q7OztXQTlEbUJ4QztxQkFBZ0IyQyxnQkFBTyJ9