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
            key: "prepare",
            value: function prepare(inputOneHotVector, outputOneHotVector1) {
                var logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix), logitsVectorSoftmax = logitsVector.softmax(), probabilitiesVector = logitsVectorSoftmax, gradientVector = probabilitiesVector.subtractVector(outputOneHotVector1), deltaMatrix = inputOneHotVector.outerMultiplyByVector(gradientVector), weightsResult = _weights.default.fromOutputOneHotVectorAndProbabilitiesVectorAndDeltaMatrix(outputOneHotVector1, probabilitiesVector, deltaMatrix);
                return weightsResult;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGV2YWx1YXRlLCBmb3J3YXJkIH0gZnJvbSBcIi4uLy4uL2xpYi5ub2RlXCI7XG5cbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL3ZlY3RvclwiO1xuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFdlaWdodHNSZXN1bHQgZnJvbSBcIi4uL3Jlc3VsdC93ZWlnaHRzXCI7XG5cbmltcG9ydCB7IG1hdHJpeEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IobWF0cml4KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG5cbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMubWF0cml4LmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICBwcmVwYXJlKGlucHV0T25lSG90VmVjdG9yLCBvdXRwdXRPbmVIb3RWZWN0b3IpIHtcbiAgICBjb25zdCBsb2dpdHNWZWN0b3IgPSBpbnB1dE9uZUhvdFZlY3Rvci5tdWx0aXBseUJ5TWF0cml4KHRoaXMubWF0cml4KSxcbiAgICAgICAgICBsb2dpdHNWZWN0b3JTb2Z0bWF4ID0gbG9naXRzVmVjdG9yLnNvZnRtYXgoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gbG9naXRzVmVjdG9yU29mdG1heCwgIC8vL1xuICAgICAgICAgIGdyYWRpZW50VmVjdG9yID0gcHJvYmFiaWxpdGllc1ZlY3Rvci5zdWJ0cmFjdFZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IpLFxuICAgICAgICAgIGRlbHRhTWF0cml4ID0gaW5wdXRPbmVIb3RWZWN0b3Iub3V0ZXJNdWx0aXBseUJ5VmVjdG9yKGdyYWRpZW50VmVjdG9yKSxcbiAgICAgICAgICB3ZWlnaHRzUmVzdWx0ID0gV2VpZ2h0c1Jlc3VsdC5mcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvckFuZERlbHRhTWF0cml4KG91dHB1dE9uZUhvdFZlY3RvciwgcHJvYmFiaWxpdGllc1ZlY3RvciwgZGVsdGFNYXRyaXgpO1xuXG4gICAgcmV0dXJuIHdlaWdodHNSZXN1bHQ7XG4gIH1cblxuICB1cGRhdGUoc2NhbGVkRGVsdGFzTWF0cml4KSB7XG4gICAgdGhpcy5tYXRyaXggPSB0aGlzLm1hdHJpeC5zdWJ0cmFjdE1hdHJpeChzY2FsZWREZWx0YXNNYXRyaXgpO1xuICB9XG5cbiAgZm9yd2FyZChvbmVIb3RWZWN0b3IpIHtcbiAgICBjb25zdCBvbmVIb3RWZWN0b3JGbG9hdDMyQXJyYXkgPSBvbmVIb3RWZWN0b3IudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLm1hdHJpeC50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJvd3MgPSB0aGlzLm1hdHJpeC5nZXRSb3dzKCksXG4gICAgICAgICAgY29sdW1ucyA9IHRoaXMubWF0cml4LmdldENvbHVtbnMoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzRmxvYXQzMkFycmF5ID0gZm9yd2FyZChvbmVIb3RWZWN0b3JGbG9hdDMyQXJyYXksIG1hdHJpeEZsb2F0MzJBcnJheSwgcm93cywgY29sdW1ucyksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvciA9IFZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHByb2JhYmlsaXRpZXNGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2JhYmlsaXRpZXNWZWN0b3I7XG4gIH1cblxuICBldmFsdWF0ZShvbmVIb3RWZWN0b3IpIHtcbiAgICBjb25zdCBvbmVIb3RWZWN0b3JGbG9hdDMyQXJyYXkgPSBvbmVIb3RWZWN0b3IudG9GbG9hdDMyQXJyYXkoKSxcbiAgICAgICAgICBtYXRyaXhGbG9hdDMyQXJyYXkgPSB0aGlzLm1hdHJpeC50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIHJvd3MgPSB0aGlzLm1hdHJpeC5nZXRSb3dzKCksXG4gICAgICAgICAgY29sdW1ucyA9IHRoaXMubWF0cml4LmdldENvbHVtbnMoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzRmxvYXQzMkFycmF5ID0gZXZhbHVhdGUob25lSG90VmVjdG9yRmxvYXQzMkFycmF5LCBtYXRyaXhGbG9hdDMyQXJyYXksIHJvd3MsIGNvbHVtbnMpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSBWZWN0b3IuZnJvbUZsb2F0MzJBcnJheShwcm9iYWJpbGl0aWVzRmxvYXQzMkFycmF5KSxcbiAgICAgICAgICB3ZWlnaHRzUmVzdWx0ID0gV2VpZ2h0c1Jlc3VsdC5mcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IsIHByb2JhYmlsaXRpZXNWZWN0b3IpO1xuXG4gICAgcmV0dXJuIHdlaWdodHNSZXN1bHQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWF0cml4SlNPTiA9IHRoaXMubWF0cml4LnRvSlNPTigpLFxuICAgICAgICAgIG1hdHJpeCA9IG1hdHJpeEpTT04sICAvL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtYXRyaXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpKU09OKGpzb24pIHtcbiAgICBjb25zdCBtYXRyaXggPSBtYXRyaXhGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICB3ZWlnaHRzID0gbmV3IFdlaWdodHMobWF0cml4KTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHdlaWdodHMgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFdlaWdodHMsIHByb3BlcnRpZXMsIG1hdHJpeCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2VpZ2h0cyIsIm1hdHJpeCIsImdldE1hdHJpeCIsImluaXRpYWxpc2UiLCJzaXplIiwicHJlcGFyZSIsImlucHV0T25lSG90VmVjdG9yIiwib3V0cHV0T25lSG90VmVjdG9yIiwibG9naXRzVmVjdG9yIiwibXVsdGlwbHlCeU1hdHJpeCIsImxvZ2l0c1ZlY3RvclNvZnRtYXgiLCJzb2Z0bWF4IiwicHJvYmFiaWxpdGllc1ZlY3RvciIsImdyYWRpZW50VmVjdG9yIiwic3VidHJhY3RWZWN0b3IiLCJkZWx0YU1hdHJpeCIsIm91dGVyTXVsdGlwbHlCeVZlY3RvciIsIndlaWdodHNSZXN1bHQiLCJXZWlnaHRzUmVzdWx0IiwiZnJvbU91dHB1dE9uZUhvdFZlY3RvckFuZFByb2JhYmlsaXRpZXNWZWN0b3JBbmREZWx0YU1hdHJpeCIsInVwZGF0ZSIsInNjYWxlZERlbHRhc01hdHJpeCIsInN1YnRyYWN0TWF0cml4IiwiZm9yd2FyZCIsIm9uZUhvdFZlY3RvciIsIm9uZUhvdFZlY3RvckZsb2F0MzJBcnJheSIsInRvRmxvYXQzMkFycmF5IiwibWF0cml4RmxvYXQzMkFycmF5Iiwicm93cyIsImdldFJvd3MiLCJjb2x1bW5zIiwiZ2V0Q29sdW1ucyIsInByb2JhYmlsaXRpZXNGbG9hdDMyQXJyYXkiLCJWZWN0b3IiLCJmcm9tRmxvYXQzMkFycmF5IiwiZXZhbHVhdGUiLCJmcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvciIsInRvSlNPTiIsIm1hdHJpeEpTT04iLCJqc29uIiwiZnJvbUpKU09OIiwibWF0cml4RnJvbUpTT04iLCJ3ZWlnaHRzIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsIk1hdHJpeCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7Ozt1QkFUYTs2REFFZjs2REFDQTs4REFDQzs4REFDTTtvQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUEsUUFDUEMsTUFBTTtnQ0FEQ0Q7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR0Q7O1lBT25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsSUFBSTtnQkFDYixJQUFJLENBQUNILE1BQU0sQ0FBQ0UsVUFBVSxDQUFDQztZQUN6Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxpQkFBaUIsRUFBRUMsbUJBQWtCO2dCQUMzQyxJQUFNQyxlQUFlRixrQkFBa0JHLGdCQUFnQixDQUFDLElBQUksQ0FBQ1IsTUFBTSxHQUM3RFMsc0JBQXNCRixhQUFhRyxPQUFPLElBQzFDQyxzQkFBc0JGLHFCQUN0QkcsaUJBQWlCRCxvQkFBb0JFLGNBQWMsQ0FBQ1Asc0JBQ3BEUSxjQUFjVCxrQkFBa0JVLHFCQUFxQixDQUFDSCxpQkFDdERJLGdCQUFnQkMsZ0JBQWEsQ0FBQ0MsMERBQTBELENBQUNaLHFCQUFvQksscUJBQXFCRztnQkFFeEksT0FBT0U7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxrQkFBa0I7Z0JBQ3ZCLElBQUksQ0FBQ3BCLE1BQU0sR0FBRyxJQUFJLENBQUNBLE1BQU0sQ0FBQ3FCLGNBQWMsQ0FBQ0Q7WUFDM0M7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsWUFBWTtnQkFDbEIsSUFBTUMsMkJBQTJCRCxhQUFhRSxjQUFjLElBQ3REQyxxQkFBcUIsSUFBSSxDQUFDMUIsTUFBTSxDQUFDeUIsY0FBYyxJQUMvQ0UsT0FBTyxJQUFJLENBQUMzQixNQUFNLENBQUM0QixPQUFPLElBQzFCQyxVQUFVLElBQUksQ0FBQzdCLE1BQU0sQ0FBQzhCLFVBQVUsSUFDaENDLDRCQUE0QlQsSUFBQUEsZ0JBQU8sRUFBQ0UsMEJBQTBCRSxvQkFBb0JDLE1BQU1FLFVBQ3hGbEIsc0JBQXNCcUIsZUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ0Y7Z0JBRXBELE9BQU9wQjtZQUNUOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTWCxZQUFZO2dCQUNuQixJQUFNQywyQkFBMkJELGFBQWFFLGNBQWMsSUFDdERDLHFCQUFxQixJQUFJLENBQUMxQixNQUFNLENBQUN5QixjQUFjLElBQy9DRSxPQUFPLElBQUksQ0FBQzNCLE1BQU0sQ0FBQzRCLE9BQU8sSUFDMUJDLFVBQVUsSUFBSSxDQUFDN0IsTUFBTSxDQUFDOEIsVUFBVSxJQUNoQ0MsNEJBQTRCRyxJQUFBQSxpQkFBUSxFQUFDViwwQkFBMEJFLG9CQUFvQkMsTUFBTUUsVUFDekZsQixzQkFBc0JxQixlQUFNLENBQUNDLGdCQUFnQixDQUFDRiw0QkFDOUNmLGdCQUFnQkMsZ0JBQWEsQ0FBQ2tCLDRDQUE0QyxDQUFDN0Isb0JBQW9CSztnQkFFckcsT0FBT0s7WUFDVDs7O1lBRUFvQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNyQyxNQUFNLENBQUNvQyxNQUFNLElBQy9CcEMsU0FBU3FDLFlBQ1RDLE9BQU87b0JBQ0x0QyxRQUFBQTtnQkFDRjtnQkFFTixPQUFPc0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVRCxJQUFJO2dCQUNuQixJQUFNdEMsU0FBU3dDLElBQUFBLG9CQUFjLEVBQUNGLE9BQ3hCRyxVQUFVLElBakVDMUMsUUFpRVdDO2dCQUU1QixPQUFPeUM7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFFckNDO2dCQURoQixJQUFNN0MsU0FBUzhDLGVBQU0sQ0FBQ0MsV0FBVyxJQUMzQk4sVUFBVUksQ0FBQUEsV0FBQUEsZ0JBQU8sRUFBQ0gsY0FBYyxPQUF0QkcsVUFBQUE7b0JBeEVDOUM7b0JBd0UrQjRDO29CQUFZM0M7aUJBQThCLENBQTFFNkMsT0FBb0QscUJBQUdEO2dCQUV2RSxPQUFPSDtZQUNUOzs7V0EzRW1CMUM7cUJBQWdCOEMsZ0JBQU8ifQ==