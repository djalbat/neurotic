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
            key: "initialise",
            value: function initialise(size) {
                this.matrix.initialise(size);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZvcndhcmQgfSBmcm9tIFwiLi4vLi4vbGliLm5vZGVcIjtcblxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFByb2JhYmlsaXRpZXNWZWN0b3IgZnJvbSBcIi4uL3ZlY3Rvci9wcm9iYWJpbGl0aWVzXCI7XG5cbmltcG9ydCB7IG1hdHJpeEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRFbGVtZW50cywgbWF0cml4KSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRFbGVtZW50cyk7XG5cbiAgICB0aGlzLm1hdHJpeCA9IG1hdHJpeDtcbiAgfVxuXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICBpbml0aWFsaXNlKHNpemUpIHtcbiAgICB0aGlzLm1hdHJpeC5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgcHJlcGFyZShpbnB1dE9uZUhvdFZlY3Rvciwgb3V0cHV0T25lSG90VmVjdG9yKSB7XG4gICAgY29uc3QgbG9naXRzVmVjdG9yID0gaW5wdXRPbmVIb3RWZWN0b3IubXVsdGlwbHlCeU1hdHJpeCh0aGlzLm1hdHJpeCksXG4gICAgICAgICAgbG9naXRzVmVjdG9yU29mdG1heCA9IGxvZ2l0c1ZlY3Rvci5zb2Z0bWF4KCksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvciA9IFByb2JhYmlsaXRpZXNWZWN0b3IuZnJvbVZlY3Rvcihsb2dpdHNWZWN0b3JTb2Z0bWF4KSwgIC8vL1xuICAgICAgICAgIGdyYWRpZW50VmVjdG9yID0gcHJvYmFiaWxpdGllc1ZlY3Rvci5zdWJ0cmFjdFZlY3RvcihvdXRwdXRPbmVIb3RWZWN0b3IpLFxuICAgICAgICAgIGRlbHRhTWF0cml4ID0gaW5wdXRPbmVIb3RWZWN0b3Iub3V0ZXJNdWx0aXBseUJ5VmVjdG9yKGdyYWRpZW50VmVjdG9yKTtcblxuICAgIHJldHVybiBkZWx0YU1hdHJpeDtcbiAgfVxuXG4gIHVwZGF0ZShzY2FsZWREZWx0YXNNYXRyaXgpIHtcbiAgICB0aGlzLm1hdHJpeCA9IHRoaXMubWF0cml4LnN1YnRyYWN0TWF0cml4KHNjYWxlZERlbHRhc01hdHJpeCk7XG4gIH1cblxuICBmb3J3YXJkKG9uZUhvdFZlY3Rvcikge1xuICAgIGNvbnN0IG9uZUhvdFZlY3RvckZsb2F0MzJBcnJheSA9IG9uZUhvdFZlY3Rvci50b0Zsb2F0MzJBcnJheSgpLFxuICAgICAgICAgIG1hdHJpeEZsb2F0MzJBcnJheSA9IHRoaXMubWF0cml4LnRvRmxvYXQzMkFycmF5KCksXG4gICAgICAgICAgcm93cyA9IHRoaXMubWF0cml4LmdldFJvd3MoKSxcbiAgICAgICAgICBjb2x1bW5zID0gdGhpcy5tYXRyaXguZ2V0Q29sdW1ucygpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNGbG9hdDMyQXJyYXkgPSBmb3J3YXJkKG9uZUhvdFZlY3RvckZsb2F0MzJBcnJheSwgbWF0cml4RmxvYXQzMkFycmF5LCByb3dzLCBjb2x1bW5zKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gUHJvYmFiaWxpdGllc1ZlY3Rvci5mcm9tRmxvYXQzMkFycmF5KHByb2JhYmlsaXRpZXNGbG9hdDMyQXJyYXkpO1xuXG4gICAgcmV0dXJuIHByb2JhYmlsaXRpZXNWZWN0b3I7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbWF0cml4SlNPTiA9IHRoaXMubWF0cml4LnRvSlNPTigpLFxuICAgICAgICAgIG1hdHJpeCA9IG1hdHJpeEpTT04sICAvL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBtYXRyaXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpKU09OKGpzb24pIHtcbiAgICBjb25zdCBtYXRyaXggPSBtYXRyaXhGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICB3ZWlnaHRzID0gbmV3IFdlaWdodHMobWF0cml4KTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IG1hdHJpeCA9IE1hdHJpeC5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHdlaWdodHMgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFdlaWdodHMsIHByb3BlcnRpZXMsIG1hdHJpeCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2VpZ2h0cyIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwibWF0cml4IiwiZ2V0TWF0cml4IiwiaW5pdGlhbGlzZSIsInNpemUiLCJwcmVwYXJlIiwiaW5wdXRPbmVIb3RWZWN0b3IiLCJvdXRwdXRPbmVIb3RWZWN0b3IiLCJsb2dpdHNWZWN0b3IiLCJtdWx0aXBseUJ5TWF0cml4IiwibG9naXRzVmVjdG9yU29mdG1heCIsInNvZnRtYXgiLCJwcm9iYWJpbGl0aWVzVmVjdG9yIiwiUHJvYmFiaWxpdGllc1ZlY3RvciIsImZyb21WZWN0b3IiLCJncmFkaWVudFZlY3RvciIsInN1YnRyYWN0VmVjdG9yIiwiZGVsdGFNYXRyaXgiLCJvdXRlck11bHRpcGx5QnlWZWN0b3IiLCJ1cGRhdGUiLCJzY2FsZWREZWx0YXNNYXRyaXgiLCJzdWJ0cmFjdE1hdHJpeCIsImZvcndhcmQiLCJvbmVIb3RWZWN0b3IiLCJvbmVIb3RWZWN0b3JGbG9hdDMyQXJyYXkiLCJ0b0Zsb2F0MzJBcnJheSIsIm1hdHJpeEZsb2F0MzJBcnJheSIsInJvd3MiLCJnZXRSb3dzIiwiY29sdW1ucyIsImdldENvbHVtbnMiLCJwcm9iYWJpbGl0aWVzRmxvYXQzMkFycmF5IiwiZnJvbUZsb2F0MzJBcnJheSIsInRvSlNPTiIsIm1hdHJpeEpTT04iLCJqc29uIiwiZnJvbUpKU09OIiwibWF0cml4RnJvbUpTT04iLCJ3ZWlnaHRzIiwiZnJvbVByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiTWF0cml4IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7O3VCQVJHOzZEQUVMOzhEQUNDO29FQUNZO29CQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQSxRQUNQQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsTUFBTTtnQ0FEMUJIOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFZQzs7UUFFbEIsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUpHSDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUNiLElBQUksQ0FBQ0gsTUFBTSxDQUFDRSxVQUFVLENBQUNDO1lBQ3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLGlCQUFpQixFQUFFQyxrQkFBa0I7Z0JBQzNDLElBQU1DLGVBQWVGLGtCQUFrQkcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDUixNQUFNLEdBQzdEUyxzQkFBc0JGLGFBQWFHLE9BQU8sSUFDMUNDLHNCQUFzQkMsc0JBQW1CLENBQUNDLFVBQVUsQ0FBQ0osc0JBQ3JESyxpQkFBaUJILG9CQUFvQkksY0FBYyxDQUFDVCxxQkFDcERVLGNBQWNYLGtCQUFrQlkscUJBQXFCLENBQUNIO2dCQUU1RCxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLGtCQUFrQjtnQkFDdkIsSUFBSSxDQUFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQ0EsTUFBTSxDQUFDb0IsY0FBYyxDQUFDRDtZQUMzQzs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxZQUFZO2dCQUNsQixJQUFNQywyQkFBMkJELGFBQWFFLGNBQWMsSUFDdERDLHFCQUFxQixJQUFJLENBQUN6QixNQUFNLENBQUN3QixjQUFjLElBQy9DRSxPQUFPLElBQUksQ0FBQzFCLE1BQU0sQ0FBQzJCLE9BQU8sSUFDMUJDLFVBQVUsSUFBSSxDQUFDNUIsTUFBTSxDQUFDNkIsVUFBVSxJQUNoQ0MsNEJBQTRCVCxJQUFBQSxnQkFBTyxFQUFDRSwwQkFBMEJFLG9CQUFvQkMsTUFBTUUsVUFDeEZqQixzQkFBc0JDLHNCQUFtQixDQUFDbUIsZ0JBQWdCLENBQUNEO2dCQUVqRSxPQUFPbkI7WUFDVDs7O1lBRUFxQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNqQyxNQUFNLENBQUNnQyxNQUFNLElBQy9CaEMsU0FBU2lDLFlBQ1RDLE9BQU87b0JBQ0xsQyxRQUFBQTtnQkFDRjtnQkFFTixPQUFPa0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVRCxJQUFJO2dCQUNuQixJQUFNbEMsU0FBU29DLElBQUFBLG9CQUFjLEVBQUNGLE9BQ3hCRyxVQUFVLElBcERDeEMsUUFvRFdHO2dCQUU1QixPQUFPcUM7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWV4QyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHeUMscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUVyQ0M7Z0JBRGhCLElBQU14QyxTQUFTeUMsZUFBTSxDQUFDQyxXQUFXLElBQzNCTCxVQUFVRyxDQUFBQSxXQUFBQSxnQkFBTyxFQUFDRixjQUFjLE9BQXRCRSxVQUFBQTtvQkEzREMzQztvQkEyRCtCQztvQkFBWUU7aUJBQThCLENBQTFFd0MsT0FBb0QscUJBQUdEO2dCQUV2RSxPQUFPRjtZQUNUOzs7V0E5RG1CeEM7cUJBQWdCMkMsZ0JBQU8ifQ==