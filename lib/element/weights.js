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
var _vector = /*#__PURE__*/ _interop_require_default(require("../vector"));
var _matrix = /*#__PURE__*/ _interop_require_default(require("../matrix"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _probability = /*#__PURE__*/ _interop_require_default(require("../vector/probability"));
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
    function Weights(properties, childElements, vector, matrix) {
        _class_call_check(this, Weights);
        var _this;
        _this = _call_super(this, Weights, [
            properties,
            childElements
        ]);
        _this.vector = vector;
        _this.matrix = matrix;
        return _this;
    }
    _create_class(Weights, [
        {
            key: "getVector",
            value: function getVector() {
                return this.vector;
            }
        },
        {
            key: "getMatrix",
            value: function getMatrix() {
                return this.matrix;
            }
        },
        {
            key: "train",
            value: function train(transition, vocabulary) {
                var inputOneHotVector = transition.inputOneHotVector(vocabulary), outputOneHotVector = transition.outputOneHotVector(vocabulary), index = inputOneHotVector.getIndex(), row = index; ///
                var count, vector;
                count = this.getCountAtRow(row);
                vector = this.matrix.getVectorAtRow(_vector.default, row);
                var weightedVector = vector.multiplyByScalar(count), augmentedWeightsVector = weightedVector.addVector(outputOneHotVector);
                count++;
                vector = augmentedWeightsVector.divideByScalar(count);
                this.setCountAtRow(row, count);
                this.matrix.setVectorAtRow(row, vector);
            }
        },
        {
            key: "forward",
            value: function forward(oneHotVector) {
                var index = oneHotVector.getIndex(), row = index, count = this.getCountAtRow(row), vector = this.matrix.getVectorAtRow(_vector.default, row), probabilityVector = _probability.default.fromVectorAndCount(vector, count);
                return probabilityVector;
            }
        },
        {
            key: "getCountAtRow",
            value: function getCountAtRow(row) {
                var index = row, element = this.vector.getElementAt(index), count = element; ///
                return count;
            }
        },
        {
            key: "setCountAtRow",
            value: function setCountAtRow(row, count) {
                var index = row, element = count; ///
                this.vector.setElementAt(index, element);
            }
        },
        {
            key: "initialise",
            value: function initialise(size) {
                this.vector.initialise(size);
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
                var vector = _vector.default.fromNothing(), matrix = _matrix.default.fromNothing(), weights = (_Element = _element.default).fromProperties.apply(_Element, [
                    Weights,
                    properties,
                    vector,
                    matrix
                ].concat(_to_consumable_array(remainingArguments)));
                return weights;
            }
        }
    ]);
    return Weights;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL3ZlY3RvclwiO1xuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFByb2JhYmlsaXR5VmVjdG9yIGZyb20gXCIuLi92ZWN0b3IvcHJvYmFiaWxpdHlcIjtcblxuaW1wb3J0IHsgbWF0cml4RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VpZ2h0cyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzLCBjaGlsZEVsZW1lbnRzLCB2ZWN0b3IsIG1hdHJpeCkge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkRWxlbWVudHMpO1xuXG4gICAgdGhpcy52ZWN0b3IgPSB2ZWN0b3I7XG4gICAgdGhpcy5tYXRyaXggPSBtYXRyaXg7XG4gIH1cblxuICBnZXRWZWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMudmVjdG9yO1xuICB9XG5cbiAgZ2V0TWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLm1hdHJpeDtcbiAgfVxuXG4gIHRyYWluKHRyYW5zaXRpb24sIHZvY2FidWxhcnkpIHtcbiAgICBjb25zdCBpbnB1dE9uZUhvdFZlY3RvciA9IHRyYW5zaXRpb24uaW5wdXRPbmVIb3RWZWN0b3Iodm9jYWJ1bGFyeSksXG4gICAgICAgICAgb3V0cHV0T25lSG90VmVjdG9yID0gdHJhbnNpdGlvbi5vdXRwdXRPbmVIb3RWZWN0b3Iodm9jYWJ1bGFyeSksXG4gICAgICAgICAgaW5kZXggPSBpbnB1dE9uZUhvdFZlY3Rvci5nZXRJbmRleCgpLFxuICAgICAgICAgIHJvdyA9IGluZGV4OyAvLy9cblxuICAgIGxldCBjb3VudCxcbiAgICAgICAgdmVjdG9yO1xuXG4gICAgY291bnQgPSB0aGlzLmdldENvdW50QXRSb3cocm93KTtcblxuICAgIHZlY3RvciA9IHRoaXMubWF0cml4LmdldFZlY3RvckF0Um93KFZlY3Rvciwgcm93KTtcblxuICAgIGNvbnN0IHdlaWdodGVkVmVjdG9yID0gdmVjdG9yLm11bHRpcGx5QnlTY2FsYXIoY291bnQpLFxuICAgICAgICAgIGF1Z21lbnRlZFdlaWdodHNWZWN0b3IgPSB3ZWlnaHRlZFZlY3Rvci5hZGRWZWN0b3Iob3V0cHV0T25lSG90VmVjdG9yKTtcblxuICAgIGNvdW50Kys7XG5cbiAgICB2ZWN0b3IgPSBhdWdtZW50ZWRXZWlnaHRzVmVjdG9yLmRpdmlkZUJ5U2NhbGFyKGNvdW50KTtcblxuICAgIHRoaXMuc2V0Q291bnRBdFJvdyhyb3csIGNvdW50KTtcblxuICAgIHRoaXMubWF0cml4LnNldFZlY3RvckF0Um93KHJvdywgdmVjdG9yKTtcbiAgfVxuXG4gIGZvcndhcmQob25lSG90VmVjdG9yKSB7XG4gICAgY29uc3QgaW5kZXggPSBvbmVIb3RWZWN0b3IuZ2V0SW5kZXgoKSxcbiAgICAgICAgICByb3cgPSBpbmRleCwgLy8vXG4gICAgICAgICAgY291bnQgPSB0aGlzLmdldENvdW50QXRSb3cocm93KSxcbiAgICAgICAgICB2ZWN0b3IgPSB0aGlzLm1hdHJpeC5nZXRWZWN0b3JBdFJvdyhWZWN0b3IsIHJvdyksXG4gICAgICAgICAgcHJvYmFiaWxpdHlWZWN0b3IgPSBQcm9iYWJpbGl0eVZlY3Rvci5mcm9tVmVjdG9yQW5kQ291bnQodmVjdG9yLCBjb3VudCk7XG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdHlWZWN0b3I7XG4gIH1cblxuICBnZXRDb3VudEF0Um93KHJvdykge1xuICAgIGNvbnN0IGluZGV4ID0gcm93LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXMudmVjdG9yLmdldEVsZW1lbnRBdChpbmRleCksXG4gICAgICAgICAgY291bnQgPSBlbGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBzZXRDb3VudEF0Um93KHJvdywgY291bnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHJvdywgIC8vL1xuICAgICAgICAgIGVsZW1lbnQgPSBjb3VudDsgIC8vL1xuXG4gICAgdGhpcy52ZWN0b3Iuc2V0RWxlbWVudEF0KGluZGV4LCBlbGVtZW50KTtcbiAgfVxuXG4gIGluaXRpYWxpc2Uoc2l6ZSkge1xuICAgIHRoaXMudmVjdG9yLmluaXRpYWxpc2Uoc2l6ZSk7XG4gICAgdGhpcy5tYXRyaXguaW5pdGlhbGlzZShzaXplKTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtYXRyaXhKU09OID0gdGhpcy5tYXRyaXgudG9KU09OKCksXG4gICAgICAgICAgbWF0cml4ID0gbWF0cml4SlNPTiwgIC8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1hdHJpeFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSkpTT04oanNvbikge1xuICAgIGNvbnN0IG1hdHJpeCA9IG1hdHJpeEZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHdlaWdodHMgPSBuZXcgV2VpZ2h0cyhtYXRyaXgpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgdmVjdG9yID0gVmVjdG9yLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgbWF0cml4ID0gTWF0cml4LmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgd2VpZ2h0cyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoV2VpZ2h0cywgcHJvcGVydGllcywgdmVjdG9yLCBtYXRyaXgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIldlaWdodHMiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInZlY3RvciIsIm1hdHJpeCIsImdldFZlY3RvciIsImdldE1hdHJpeCIsInRyYWluIiwidHJhbnNpdGlvbiIsInZvY2FidWxhcnkiLCJpbnB1dE9uZUhvdFZlY3RvciIsIm91dHB1dE9uZUhvdFZlY3RvciIsImluZGV4IiwiZ2V0SW5kZXgiLCJyb3ciLCJjb3VudCIsImdldENvdW50QXRSb3ciLCJnZXRWZWN0b3JBdFJvdyIsIlZlY3RvciIsIndlaWdodGVkVmVjdG9yIiwibXVsdGlwbHlCeVNjYWxhciIsImF1Z21lbnRlZFdlaWdodHNWZWN0b3IiLCJhZGRWZWN0b3IiLCJkaXZpZGVCeVNjYWxhciIsInNldENvdW50QXRSb3ciLCJzZXRWZWN0b3JBdFJvdyIsImZvcndhcmQiLCJvbmVIb3RWZWN0b3IiLCJwcm9iYWJpbGl0eVZlY3RvciIsIlByb2JhYmlsaXR5VmVjdG9yIiwiZnJvbVZlY3RvckFuZENvdW50IiwiZWxlbWVudCIsImdldEVsZW1lbnRBdCIsInNldEVsZW1lbnRBdCIsImluaXRpYWxpc2UiLCJzaXplIiwidG9KU09OIiwibWF0cml4SlNPTiIsImpzb24iLCJmcm9tSkpTT04iLCJtYXRyaXhGcm9tSlNPTiIsIndlaWdodHMiLCJmcm9tUHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJmcm9tTm90aGluZyIsIk1hdHJpeCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NkRBUEY7NkRBQ0E7OERBQ0M7a0VBQ1U7b0JBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixJQUFBLEFBQU1BLHdCQUFOO2NBQU1BO2FBQUFBLFFBQ1BDLFVBQVUsRUFBRUMsYUFBYSxF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