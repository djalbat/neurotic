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
var _vector = /*#__PURE__*/ _interop_require_default(require("../vector"));
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
                var _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector1 = _oneHotVectors[1], logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = logitsVectorSoftmax, gradientVector = probabilitiesVector.subtractVector(outputOneHotVector1), deltasMatrix = inputOneHotVector.outerMultiplyByVector(gradientVector), scaledDeltasMatrix = deltasMatrix.multiplyByScalar(learningRate);
                this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);
                var weightsResult = _weights.default.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector1, probabilitiesVector);
                return weightsResult;
            }
        },
        {
            key: "forward",
            value: function forward(oneHotVector) {
                var oneHotVectorFloat32Array = oneHotVector.toFloat32Array(), matrixFloat32Array = this.matrix.toFloat32Array(), rows = this.matrix.getRows(), columns = this.matrix.getColumns(), probabilitiesFloat32Array = (0, _libnode.forward)(oneHotVectorFloat32Array, matrixFloat32Array, rows, columns), probabilitiesVector = _vector.default.fromFloat32Array(probabilitiesFloat32Array);
                return probabilitiesVector;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(oneHotVector) {
                var oneHotVectorFloat32Array = oneHotVector.toFloat32Array(), matrixFloat32Array = this.matrix.toFloat32Array(), rows = this.matrix.getRows(), columns = this.matrix.getColumns(), probabilitiesFloat32Array = (0, _libnode.evaluate)(oneHotVectorFloat32Array, matrixFloat32Array, rows, columns), probabilitiesVector = _vector.default.fromFloat32Array(probabilitiesFloat32Array), weightsResult = _weights.default.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);
                return weightsResult;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGV2YWx1YXRlLCBmb3J3YXJkIH0gZnJvbSBcIi4uLy4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL3ZlY3RvclwiO1xuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFdlaWdodHNSZXN1bHQgZnJvbSBcIi4uL3Jlc3VsdC93ZWlnaHRzXCI7XG5cbmltcG9ydCB7IG1hdHJpeEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG5cbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMubWF0cml4LmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICBzdGVwKG9uZUhvdFZlY3RvcnMsIGxlYXJuaW5nUmF0ZSkge1xuICAgIGNvbnN0IFsgaW5wdXRPbmVIb3RWZWN0b3IsIG91dHB1dE9uZUhvdFZlY3RvciBdID0gb25lSG90VmVjdG9ycyxcbiAgICAgICAgICBsb2dpdHNWZWN0b3IgPSBpbnB1dE9uZUhvdFZlY3Rvci5tdWx0aXBseUJ5TWF0cml4KHRoaXMubWF0cml4KSxcbiAgICAgICAgICBsb2dpdHNWZWN0b3JTb2Z0bWF4ID0gbG9naXRzVmVjdG9yLnNvZnRtYXgoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gbG9naXRzVmVjdG9yU29mdG1heCwgIC8vL1xuICAgICAgICAgIGdyYWRpZW50VmVjdG9yID0gcHJvYmFiaWxpdGllc1ZlY3Rvci5zdWJ0cmFjdFZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IpLFxuICAgICAgICAgIGRlbHRhc01hdHJpeCA9IGlucHV0T25lSG90VmVjdG9yLm91dGVyTXVsdGlwbHlCeVZlY3RvcihncmFkaWVudFZlY3RvciksXG4gICAgICAgICAgc2NhbGVkRGVsdGFzTWF0cml4ID0gZGVsdGFzTWF0cml4Lm11bHRpcGx5QnlTY2FsYXIobGVhcm5pbmdSYXRlKTtcblxuICAgIHRoaXMubWF0cml4ID0gdGhpcy5tYXRyaXguc3VidHJhY3RNYXRyaXgoc2NhbGVkRGVsdGFzTWF0cml4KTtcblxuICAgIGNvbnN0IHdlaWdodHNSZXN1bHQgPSBXZWlnaHRzUmVzdWx0LmZyb21PdXRwdXRPbmVIb3RWZWN0b3JBbmRQcm9iYWJpbGl0aWVzVmVjdG9yKG91dHB1dE9uZUhvdFZlY3RvciwgcHJvYmFiaWxpdGllc1ZlY3Rvcik7XG5cbiAgICByZXR1cm4gd2VpZ2h0c1Jlc3VsdDtcbiAgfVxuXG4gIGZvcndhcmQob25lSG90VmVjdG9yKSB7XG4gICAgY29uc3Qgb25lSG90VmVjdG9yRmxvYXQzMkFycmF5ID0gb25lSG90VmVjdG9yLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4RmxvYXQzMkFycmF5ID0gdGhpcy5tYXRyaXgudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByb3dzID0gdGhpcy5tYXRyaXguZ2V0Um93cygpLFxuICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLm1hdHJpeC5nZXRDb2x1bW5zKCksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc0Zsb2F0MzJBcnJheSA9IGZvcndhcmQob25lSG90VmVjdG9yRmxvYXQzMkFycmF5LCBtYXRyaXhGbG9hdDMyQXJyYXksIHJvd3MsIGNvbHVtbnMpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShwcm9iYWJpbGl0aWVzRmxvYXQzMkFycmF5KTtcblxuICAgIHJldHVybiBwcm9iYWJpbGl0aWVzVmVjdG9yO1xuICB9XG5cbiAgZXZhbHVhdGUob25lSG90VmVjdG9yKSB7XG4gICAgY29uc3Qgb25lSG90VmVjdG9yRmxvYXQzMkFycmF5ID0gb25lSG90VmVjdG9yLnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgbWF0cml4RmxvYXQzMkFycmF5ID0gdGhpcy5tYXRyaXgudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICByb3dzID0gdGhpcy5tYXRyaXguZ2V0Um93cygpLFxuICAgICAgICAgIGNvbHVtbnMgPSB0aGlzLm1hdHJpeC5nZXRDb2x1bW5zKCksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc0Zsb2F0MzJBcnJheSA9IGV2YWx1YXRlKG9uZUhvdFZlY3RvckZsb2F0MzJBcnJheSwgbWF0cml4RmxvYXQzMkFycmF5LCByb3dzLCBjb2x1bW5zKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gVmVjdG9yLmZyb21GbG9hdDMyQXJyYXkocHJvYmFiaWxpdGllc0Zsb2F0MzJBcnJheSksXG4gICAgICAgICAgd2VpZ2h0c1Jlc3VsdCA9IFdlaWdodHNSZXN1bHQuZnJvbU91dHB1dE9uZUhvdFZlY3RvckFuZFByb2JhYmlsaXRpZXNWZWN0b3Iob3V0cHV0T25lSG90VmVjdG9yLCBwcm9iYWJpbGl0aWVzVmVjdG9yKTtcblxuICAgIHJldHVybiB3ZWlnaHRzUmVzdWx0O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1hdHJpeEpTT04gPSB0aGlzLm1hdHJpeC50b0pTT04oKSxcbiAgICAgICAgICBtYXRyaXggPSBtYXRyaXhKU09OLCAgLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWF0cml4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KSlNPTihqc29uKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbWF0cml4RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IG5ldyBXZWlnaHRzKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBtYXRyaXggPSBNYXRyaXguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB3ZWlnaHRzID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhXZWlnaHRzLCBwcm9wZXJ0aWVzLCBtYXRyaXgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIldlaWdodHMiLCJtYXRyaXgiLCJnZXRNYXRyaXgiLCJpbml0aWFsaXNlIiwic2l6ZSIsInN0ZXAiLCJvbmVIb3RWZWN0b3JzIiwibGVhcm5pbmdSYXRlIiwiaW5wdXRPbmVIb3RWZWN0b3IiLCJvdXRwdXRPbmVIb3RWZWN0b3IiLCJsb2dpdHNWZWN0b3IiLCJtdWx0aXBseUJ5TWF0cml4IiwibG9naXRzVmVjdG9yU29mdG1heCIsInNvZnRtYXgiLCJwcm9iYWJpbGl0aWVzVmVjdG9yIiwiZ3JhZGllbnRWZWN0b3IiLCJzdWJ0cmFjdFZlY3RvciIsImRlbHRhc01hdHJpeCIsIm91dGVyTXVsdGlwbHlCeVZlY3RvciIsInNjYWxlZERlbHRhc01hdHJpeCIsIm11bHRpcGx5QnlTY2FsYXIiLCJzdWJ0cmFjdE1hdHJpeCIsIndlaWdodHNSZXN1bHQiLCJXZWlnaHRzUmVzdWx0IiwiZnJvbU91dHB1dE9uZUhvdFZlY3RvckFuZFByb2JhYmlsaXRpZXNWZWN0b3IiLCJmb3J3YXJkIiwib25lSG90VmVjdG9yIiwib25lSG90VmVjdG9yRmxvYXQzMkFycmF5IiwidG9GbG9hdDMyQXJyYXkiLCJtYXRyaXhGbG9hdDMyQXJyYXkiLCJyb3dzIiwiZ2V0Um93cyIsImNvbHVtbnMiLCJnZXRDb2x1bW5zIiwicHJvYmFiaWxpdGllc0Zsb2F0MzJBcnJheSIsIlZlY3RvciIsImZyb21GbG9hdDMyQXJyYXkiLCJldmFsdWF0ZSIsInRvSlNPTiIsIm1hdHJpeEpTT04iLCJqc29uIiwiZnJvbUpKU09OIiwibWF0cml4RnJvbUpTT04iLCJ3ZWlnaHRzIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsIk1hdHJpeCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt1QkFUYTs2REFFZjs2REFDQTs4REFDQzs4REFDTTtvQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUEsUUFDUEMsTUFBTTtnQ0FEQ0Q7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR0Q7O1lBT25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsSUFBSTtnQkFDYixJQUFJLENBQUNILE1BQU0sQ0FBQ0UsVUFBVSxDQUFDQztZQUN6Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxLQUFLQyxhQUFhLEVBQUVDLFlBQVk7Z0JBQzlCLElBQWtERCxrQ0FBQUEsbUJBQTFDRSxvQkFBMENGLG1CQUF2Qkcsc0JBQXVCSCxtQkFDNUNJLGVBQWVGLGtCQUFrQkcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDVixNQUFNLEdBQzdEVyxzQkFBc0JGLGFBQWFHLE9BQU8sSUFDMUNDLHNCQUFzQkYscUJB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