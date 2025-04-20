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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _registry = /*#__PURE__*/ _interop_require_wildcard(require("../registry"));
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
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function(Element) {
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
                var _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], logitsVector = this.matrix.multiplyVector(inputOneHotVector), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = logitsVectorSoftmax, gradientVector = probabilitiesVector.subtractVector(outputOneHotVector), deltasMatrix = inputOneHotVector.outerMultiplyVector(gradientVector), scaledDeltasMatrix = deltasMatrix.scalarMultiply(learningRate);
                this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);
                var WeightsResult = _registry.default.WeightsResult, weightsResult = WeightsResult.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);
                return weightsResult;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(oneHotVectors) {
                var _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], logitsVector = this.matrix.multiplyVector(inputOneHotVector), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = logitsVectorSoftmax; ///
                var WeightsResult = _registry.default.WeightsResult, weightsResult = WeightsResult.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);
                return weightsResult;
            }
        },
        {
            key: "forward",
            value: function forward(oneHotVector) {
                var inputOneHotVector = oneHotVector, logitsVector = this.matrix.multiplyVector(inputOneHotVector), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = logitsVectorSoftmax; ///
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
                var Matrix = _registry.default.Matrix, _$Weights = _registry.default.Weights, matrix = Matrix.fromNothing(), weights = (_Element = _element.default).fromProperties.apply(_Element, [
                    _$Weights,
                    properties,
                    matrix
                ].concat(_to_consumable_array(remainingArguments)));
                return weights;
            }
        }
    ]);
    return Weights;
}(_wrap_native_super(_element.default)));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgcmVnaXN0cnkgZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5cbmltcG9ydCB7IG1hdHJpeEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyByZWdpc3RyeUFzc2lnbmVkIH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJ5QXNzaWduZWQoY2xhc3MgV2VpZ2h0cyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcihtYXRyaXgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cblxuICBnZXRNYXRyaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubWF0cml4O1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5tYXRyaXguaW5pdGlhbGlzZShzaXplKTtcbiAgfVxuXG4gIHN0ZXAob25lSG90VmVjdG9ycywgbGVhcm5pbmdSYXRlKSB7XG4gICAgY29uc3QgWyBpbnB1dE9uZUhvdFZlY3Rvciwgb3V0cHV0T25lSG90VmVjdG9yIF0gPSBvbmVIb3RWZWN0b3JzLFxuICAgICAgICAgIGxvZ2l0c1ZlY3RvciA9IHRoaXMubWF0cml4Lm11bHRpcGx5VmVjdG9yKGlucHV0T25lSG90VmVjdG9yKSxcbiAgICAgICAgICBsb2dpdHNWZWN0b3JTb2Z0bWF4ID0gbG9naXRzVmVjdG9yLnNvZnRtYXgoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gbG9naXRzVmVjdG9yU29mdG1heCwgIC8vL1xuICAgICAgICAgIGdyYWRpZW50VmVjdG9yID0gcHJvYmFiaWxpdGllc1ZlY3Rvci5zdWJ0cmFjdFZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IpLFxuICAgICAgICAgIGRlbHRhc01hdHJpeCA9IGlucHV0T25lSG90VmVjdG9yLm91dGVyTXVsdGlwbHlWZWN0b3IoZ3JhZGllbnRWZWN0b3IpLFxuICAgICAgICAgIHNjYWxlZERlbHRhc01hdHJpeCA9IGRlbHRhc01hdHJpeC5zY2FsYXJNdWx0aXBseShsZWFybmluZ1JhdGUpO1xuXG4gICAgdGhpcy5tYXRyaXggPSB0aGlzLm1hdHJpeC5zdWJ0cmFjdE1hdHJpeChzY2FsZWREZWx0YXNNYXRyaXgpO1xuXG4gICAgY29uc3QgeyBXZWlnaHRzUmVzdWx0IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICB3ZWlnaHRzUmVzdWx0ID0gV2VpZ2h0c1Jlc3VsdC5mcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IsIHByb2JhYmlsaXRpZXNWZWN0b3IpO1xuXG4gICAgcmV0dXJuIHdlaWdodHNSZXN1bHQ7XG4gIH1cblxuICBldmFsdWF0ZShvbmVIb3RWZWN0b3JzKSB7XG4gICAgY29uc3QgWyBpbnB1dE9uZUhvdFZlY3Rvciwgb3V0cHV0T25lSG90VmVjdG9yIF0gPSBvbmVIb3RWZWN0b3JzLFxuICAgICAgICAgIGxvZ2l0c1ZlY3RvciA9IHRoaXMubWF0cml4Lm11bHRpcGx5VmVjdG9yKGlucHV0T25lSG90VmVjdG9yKSxcbiAgICAgICAgICBsb2dpdHNWZWN0b3JTb2Z0bWF4ID0gbG9naXRzVmVjdG9yLnNvZnRtYXgoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gbG9naXRzVmVjdG9yU29mdG1heDsgIC8vL1xuXG4gICAgY29uc3QgeyBXZWlnaHRzUmVzdWx0IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICB3ZWlnaHRzUmVzdWx0ID0gV2VpZ2h0c1Jlc3VsdC5mcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IsIHByb2JhYmlsaXRpZXNWZWN0b3IpO1xuXG4gICAgcmV0dXJuIHdlaWdodHNSZXN1bHQ7XG4gIH1cblxuICBmb3J3YXJkKG9uZUhvdFZlY3Rvcikge1xuICAgIGNvbnN0IGlucHV0T25lSG90VmVjdG9yID0gb25lSG90VmVjdG9yLCAvLy9cbiAgICAgICAgICBsb2dpdHNWZWN0b3IgPSB0aGlzLm1hdHJpeC5tdWx0aXBseVZlY3RvcihpbnB1dE9uZUhvdFZlY3RvciksXG4gICAgICAgICAgbG9naXRzVmVjdG9yU29mdG1heCA9IGxvZ2l0c1ZlY3Rvci5zb2Z0bWF4KCksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvciA9IGxvZ2l0c1ZlY3RvclNvZnRtYXg7ICAvLy9cblxuICAgIHJldHVybiBwcm9iYWJpbGl0aWVzVmVjdG9yO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1hdHJpeEpTT04gPSB0aGlzLm1hdHJpeC50b0pTT04oKSxcbiAgICAgICAgICBtYXRyaXggPSBtYXRyaXhKU09OLCAgLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWF0cml4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KSlNPTihqc29uKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbWF0cml4RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IG5ldyBXZWlnaHRzKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IE1hdHJpeCwgV2VpZ2h0cyB9ID0gcmVnaXN0cnksXG4gICAgICAgICAgbWF0cml4ID0gTWF0cml4LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgd2VpZ2h0cyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoV2VpZ2h0cywgcHJvcGVydGllcywgbWF0cml4LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInJlZ2lzdHJ5QXNzaWduZWQiLCJXZWlnaHRzIiwibWF0cml4IiwiZ2V0TWF0cml4IiwiaW5pdGlhbGlzZSIsInNpemUiLCJzdGVwIiwib25lSG90VmVjdG9ycyIsImxlYXJuaW5nUmF0ZSIsImlucHV0T25lSG90VmVjdG9yIiwib3V0cHV0T25lSG90VmVjdG9yIiwibG9naXRzVmVjdG9yIiwibXVsdGlwbHlWZWN0b3IiLCJsb2dpdHNWZWN0b3JTb2Z0bWF4Iiwic29mdG1heCIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJncmFkaWVudFZlY3RvciIsInN1YnRyYWN0VmVjdG9yIiwiZGVsdGFzTWF0cml4Iiwib3V0ZXJNdWx0aXBseVZlY3RvciIsInNjYWxlZERlbHRhc01hdHJpeCIsInNjYWxhck11bHRpcGx5Iiwic3VidHJhY3RNYXRyaXgiLCJXZWlnaHRzUmVzdWx0IiwicmVnaXN0cnkiLCJ3ZWlnaHRzUmVzdWx0IiwiZnJvbU91dHB1dE9uZUhvdFZlY3RvckFuZFByb2JhYmlsaXRpZXNWZWN0b3IiLCJldmFsdWF0ZSIsImZvcndhcmQiLCJvbmVIb3RWZWN0b3IiLCJ0b0pTT04iLCJtYXRyaXhKU09OIiwianNvbiIsImZyb21KSlNPTiIsIm1hdHJpeEZyb21KU09OIiwid2VpZ2h0cyIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJNYXRyaXgiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7OERBTm9CO2dFQUNDO29CQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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