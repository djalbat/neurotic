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
var _weights = /*#__PURE__*/ _interop_require_default(require("../result/weights"));
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
            key: "step",
            value: function step(oneHotVectors, learningRate) {
                var _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = logitsVectorSoftmax, gradientVector = probabilitiesVector.subtractVector(outputOneHotVector), deltasMatrix = inputOneHotVector.outerMultiplyByVector(gradientVector), scaledDeltasMatrix = deltasMatrix.multiplyByScalar(learningRate);
                this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);
                var weightsResult = _weights.default.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);
                return weightsResult;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(oneHotVectors) {
                var _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = logitsVectorSoftmax, weightsResult = _weights.default.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);
                return weightsResult;
            }
        },
        {
            key: "forward",
            value: function forward(oneHotVector) {
                var inputOneHotVector = oneHotVector, logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = logitsVectorSoftmax; ///
                return probabilitiesVector;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBNYXRyaXggZnJvbSBcIi4uL21hdHJpeFwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBXZWlnaHRzUmVzdWx0IGZyb20gXCIuLi9yZXN1bHQvd2VpZ2h0c1wiO1xuXG5pbXBvcnQgeyBtYXRyaXhGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWlnaHRzIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKG1hdHJpeCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBpbml0aWFsaXNlKHNpemUpIHtcbiAgICB0aGlzLm1hdHJpeC5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgc3RlcChvbmVIb3RWZWN0b3JzLCBsZWFybmluZ1JhdGUpIHtcbiAgICBjb25zdCBbIGlucHV0T25lSG90VmVjdG9yLCBvdXRwdXRPbmVIb3RWZWN0b3IgXSA9IG9uZUhvdFZlY3RvcnMsXG4gICAgICAgICAgbG9naXRzVmVjdG9yID0gaW5wdXRPbmVIb3RWZWN0b3IubXVsdGlwbHlCeU1hdHJpeCh0aGlzLm1hdHJpeCksXG4gICAgICAgICAgbG9naXRzVmVjdG9yU29mdG1heCA9IGxvZ2l0c1ZlY3Rvci5zb2Z0bWF4KCksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvciA9IGxvZ2l0c1ZlY3RvclNvZnRtYXgsICAvLy9cbiAgICAgICAgICBncmFkaWVudFZlY3RvciA9IHByb2JhYmlsaXRpZXNWZWN0b3Iuc3VidHJhY3RWZWN0b3Iob3V0cHV0T25lSG90VmVjdG9yKSxcbiAgICAgICAgICBkZWx0YXNNYXRyaXggPSBpbnB1dE9uZUhvdFZlY3Rvci5vdXRlck11bHRpcGx5QnlWZWN0b3IoZ3JhZGllbnRWZWN0b3IpLFxuICAgICAgICAgIHNjYWxlZERlbHRhc01hdHJpeCA9IGRlbHRhc01hdHJpeC5tdWx0aXBseUJ5U2NhbGFyKGxlYXJuaW5nUmF0ZSk7XG5cbiAgICB0aGlzLm1hdHJpeCA9IHRoaXMubWF0cml4LnN1YnRyYWN0TWF0cml4KHNjYWxlZERlbHRhc01hdHJpeCk7XG5cbiAgICBjb25zdCB3ZWlnaHRzUmVzdWx0ID0gV2VpZ2h0c1Jlc3VsdC5mcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IsIHByb2JhYmlsaXRpZXNWZWN0b3IpO1xuXG4gICAgcmV0dXJuIHdlaWdodHNSZXN1bHQ7XG4gIH1cblxuICBldmFsdWF0ZShvbmVIb3RWZWN0b3JzKSB7XG4gICAgY29uc3QgWyBpbnB1dE9uZUhvdFZlY3Rvciwgb3V0cHV0T25lSG90VmVjdG9yIF0gPSBvbmVIb3RWZWN0b3JzLFxuICAgICAgICAgIGxvZ2l0c1ZlY3RvciA9IGlucHV0T25lSG90VmVjdG9yLm11bHRpcGx5QnlNYXRyaXgodGhpcy5tYXRyaXgpLFxuICAgICAgICAgIGxvZ2l0c1ZlY3RvclNvZnRtYXggPSBsb2dpdHNWZWN0b3Iuc29mdG1heCgpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSBsb2dpdHNWZWN0b3JTb2Z0bWF4LFxuICAgICAgICAgIHdlaWdodHNSZXN1bHQgPSBXZWlnaHRzUmVzdWx0LmZyb21PdXRwdXRPbmVIb3RWZWN0b3JBbmRQcm9iYWJpbGl0aWVzVmVjdG9yKG91dHB1dE9uZUhvdFZlY3RvciwgcHJvYmFiaWxpdGllc1ZlY3Rvcik7XG5cbiAgICByZXR1cm4gd2VpZ2h0c1Jlc3VsdDtcbiAgfVxuXG4gIGZvcndhcmQob25lSG90VmVjdG9yKSB7XG4gICAgY29uc3QgaW5wdXRPbmVIb3RWZWN0b3IgPSBvbmVIb3RWZWN0b3IsIC8vL1xuICAgICAgICAgIGxvZ2l0c1ZlY3RvciA9IGlucHV0T25lSG90VmVjdG9yLm11bHRpcGx5QnlNYXRyaXgodGhpcy5tYXRyaXgpLFxuICAgICAgICAgIGxvZ2l0c1ZlY3RvclNvZnRtYXggPSBsb2dpdHNWZWN0b3Iuc29mdG1heCgpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSBsb2dpdHNWZWN0b3JTb2Z0bWF4OyAgLy8vXG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdGllc1ZlY3RvcjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtYXRyaXhKU09OID0gdGhpcy5tYXRyaXgudG9KU09OKCksXG4gICAgICAgICAgbWF0cml4ID0gbWF0cml4SlNPTiwgIC8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1hdHJpeFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSkpTT04oanNvbikge1xuICAgIGNvbnN0IG1hdHJpeCA9IG1hdHJpeEZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHdlaWdodHMgPSBuZXcgV2VpZ2h0cyhtYXRyaXgpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgbWF0cml4ID0gTWF0cml4LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgd2VpZ2h0cyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoV2VpZ2h0cywgcHJvcGVydGllcywgbWF0cml4LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJXZWlnaHRzIiwibWF0cml4IiwiZ2V0TWF0cml4IiwiaW5pdGlhbGlzZSIsInNpemUiLCJzdGVwIiwib25lSG90VmVjdG9ycyIsImxlYXJuaW5nUmF0ZSIsImlucHV0T25lSG90VmVjdG9yIiwib3V0cHV0T25lSG90VmVjdG9yIiwibG9naXRzVmVjdG9yIiwibXVsdGlwbHlCeU1hdHJpeCIsImxvZ2l0c1ZlY3RvclNvZnRtYXgiLCJzb2Z0bWF4IiwicHJvYmFiaWxpdGllc1ZlY3RvciIsImdyYWRpZW50VmVjdG9yIiwic3VidHJhY3RWZWN0b3IiLCJkZWx0YXNNYXRyaXgiLCJvdXRlck11bHRpcGx5QnlWZWN0b3IiLCJzY2FsZWREZWx0YXNNYXRyaXgiLCJtdWx0aXBseUJ5U2NhbGFyIiwic3VidHJhY3RNYXRyaXgiLCJ3ZWlnaHRzUmVzdWx0IiwiV2VpZ2h0c1Jlc3VsdCIsImZyb21PdXRwdXRPbmVIb3RWZWN0b3JBbmRQcm9iYWJpbGl0aWVzVmVjdG9yIiwiZXZhbHVhdGUiLCJmb3J3YXJkIiwib25lSG90VmVjdG9yIiwidG9KU09OIiwibWF0cml4SlNPTiIsImpzb24iLCJmcm9tSkpTT04iLCJtYXRyaXhGcm9tSlNPTiIsIndlaWdodHMiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiTWF0cml4IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzZEQU5GOzhEQUNDOzhEQUNNO29CQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQSxRQUNQQyxNQUFNO2dDQURDRDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHRDs7WUFPbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxP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