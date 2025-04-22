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
            value: function train(pair, vocabulary) {
                var inputOneHotVector = pair.inputOneHotVector(vocabulary), outputOneHotVector = pair.outputOneHotVector(vocabulary), index = inputOneHotVector.getIndex(), row = index; ///
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
                var index = oneHotVector.getIndex(), row = index, vector = this.matrix.getVectorAtRow(_vector.default, row), probabilitiesVector = _probabilities.default.fromVector(vector);
                return probabilitiesVector;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL3ZlY3RvclwiO1xuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFByb2JhYmlsaXRpZXNWZWN0b3IgZnJvbSBcIi4uL3ZlY3Rvci9wcm9iYWJpbGl0aWVzXCI7XG5cbmltcG9ydCB7IG1hdHJpeEZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRFbGVtZW50cywgdmVjdG9yLCBtYXRyaXgpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZEVsZW1lbnRzKTtcblxuICAgIHRoaXMudmVjdG9yID0gdmVjdG9yO1xuICAgIHRoaXMubWF0cml4ID0gbWF0cml4O1xuICB9XG5cbiAgZ2V0VmVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLnZlY3RvcjtcbiAgfVxuXG4gIGdldE1hdHJpeCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXRyaXg7XG4gIH1cblxuICB0cmFpbihwYWlyLCB2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3QgaW5wdXRPbmVIb3RWZWN0b3IgPSBwYWlyLmlucHV0T25lSG90VmVjdG9yKHZvY2FidWxhcnkpLFxuICAgICAgICAgIG91dHB1dE9uZUhvdFZlY3RvciA9IHBhaXIub3V0cHV0T25lSG90VmVjdG9yKHZvY2FidWxhcnkpLFxuICAgICAgICAgIGluZGV4ID0gaW5wdXRPbmVIb3RWZWN0b3IuZ2V0SW5kZXgoKSxcbiAgICAgICAgICByb3cgPSBpbmRleDsgLy8vXG5cbiAgICBsZXQgY291bnQsXG4gICAgICAgIHZlY3RvcjtcblxuICAgIGNvdW50ID0gdGhpcy5nZXRDb3VudEF0Um93KHJvdyk7XG5cbiAgICB2ZWN0b3IgPSB0aGlzLm1hdHJpeC5nZXRWZWN0b3JBdFJvdyhWZWN0b3IsIHJvdyk7XG5cbiAgICBjb25zdCB3ZWlnaHRlZFZlY3RvciA9IHZlY3Rvci5tdWx0aXBseUJ5U2NhbGFyKGNvdW50KSxcbiAgICAgICAgICBhdWdtZW50ZWRXZWlnaHRzVmVjdG9yID0gd2VpZ2h0ZWRWZWN0b3IuYWRkVmVjdG9yKG91dHB1dE9uZUhvdFZlY3Rvcik7XG5cbiAgICBjb3VudCsrO1xuXG4gICAgdmVjdG9yID0gYXVnbWVudGVkV2VpZ2h0c1ZlY3Rvci5kaXZpZGVCeVNjYWxhcihjb3VudCk7XG5cbiAgICB0aGlzLnNldENvdW50QXRSb3cocm93LCBjb3VudCk7XG5cbiAgICB0aGlzLm1hdHJpeC5zZXRWZWN0b3JBdFJvdyhyb3csIHZlY3Rvcik7XG4gIH1cblxuICBmb3J3YXJkKG9uZUhvdFZlY3Rvcikge1xuICAgIGNvbnN0IGluZGV4ID0gb25lSG90VmVjdG9yLmdldEluZGV4KCksXG4gICAgICAgICAgcm93ID0gaW5kZXgsIC8vL1xuICAgICAgICAgIHZlY3RvciA9IHRoaXMubWF0cml4LmdldFZlY3RvckF0Um93KFZlY3Rvciwgcm93KSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gUHJvYmFiaWxpdGllc1ZlY3Rvci5mcm9tVmVjdG9yKHZlY3Rvcik7XG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdGllc1ZlY3RvcjtcbiAgfVxuXG4gIGdldENvdW50QXRSb3cocm93KSB7XG4gICAgY29uc3QgaW5kZXggPSByb3csICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gdGhpcy52ZWN0b3IuZ2V0RWxlbWVudEF0KGluZGV4KSxcbiAgICAgICAgICBjb3VudCA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHNldENvdW50QXRSb3cocm93LCBjb3VudCkge1xuICAgIGNvbnN0IGluZGV4ID0gcm93LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGNvdW50OyAgLy8vXG5cbiAgICB0aGlzLnZlY3Rvci5zZXRFbGVtZW50QXQoaW5kZXgsIGVsZW1lbnQpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy52ZWN0b3IuaW5pdGlhbGlzZShzaXplKTtcbiAgICB0aGlzLm1hdHJpeC5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IG1hdHJpeEpTT04gPSB0aGlzLm1hdHJpeC50b0pTT04oKSxcbiAgICAgICAgICBtYXRyaXggPSBtYXRyaXhKU09OLCAgLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbWF0cml4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KSlNPTihqc29uKSB7XG4gICAgY29uc3QgbWF0cml4ID0gbWF0cml4RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IG5ldyBXZWlnaHRzKG1hdHJpeCk7XG5cbiAgICByZXR1cm4gd2VpZ2h0cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSBWZWN0b3IuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtYXRyaXggPSBNYXRyaXguZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB3ZWlnaHRzID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhXZWlnaHRzLCBwcm9wZXJ0aWVzLCB2ZWN0b3IsIG1hdHJpeCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2VpZ2h0cyIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwidmVjdG9yIiwibWF0cml4IiwiZ2V0VmVjdG9yIiwiZ2V0TWF0cml4IiwidHJhaW4iLCJwYWlyIiwidm9jYWJ1bGFyeSIsImlucHV0T25lSG90VmVjdG9yIiwib3V0cHV0T25lSG90VmVjdG9yIiwiaW5kZXgiLCJnZXRJbmRleCIsInJvdyIsImNvdW50IiwiZ2V0Q291bnRBdFJvdyIsImdldFZlY3RvckF0Um93IiwiVmVjdG9yIiwid2VpZ2h0ZWRWZWN0b3IiLCJtdWx0aXBseUJ5U2NhbGFyIiwiYXVnbWVudGVkV2VpZ2h0c1ZlY3RvciIsImFkZFZlY3RvciIsImRpdmlkZUJ5U2NhbGFyIiwic2V0Q291bnRBdFJvdyIsInNldFZlY3RvckF0Um93IiwiZm9yd2FyZCIsIm9uZUhvdFZlY3RvciIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJQcm9iYWJpbGl0aWVzVmVjdG9yIiwiZnJvbVZlY3RvciIsImVsZW1lbnQiLCJnZXRFbGVtZW50QXQiLCJzZXRFbGVtZW50QXQiLCJpbml0aWFsaXNlIiwic2l6ZSIsInRvSlNPTiIsIm1hdHJpeEpTT04iLCJqc29uIiwiZnJvbUpKU09OIiwibWF0cml4RnJvbUpTT04iLCJ3ZWlnaHRzIiwiZnJvbVByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiZnJvbU5vdGhpbmciLCJNYXRyaXgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzZEQVBGOzZEQUNBOzhEQUNDO29FQUNZO29CQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsSUFBQSxBQUFNQSx3QkFBTjtjQUFNQTthQUFBQSxRQUNQQyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsTUFBTSxFQUFFQyxNQUFNO2dDQURsQ0o7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVlDOztRQUVsQixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUxHSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxJQUFJLEVBQUVDLFVBQVU7Z0JBQ3BCLElBQU1DLG9CQUFvQkYsS0FBS0UsaUJBQWlCLENBQUNELGFBQzNDRSxxQkFBcUJILEtBQUtHLGtCQUFrQixDQUFDRixhQUM3Q0csUUFBUUYsa0JBQWtCRyxRQUFRLElBQ2xDQyxNQUFNRixPQUFPLEdBQUc7Z0JBRXRCLElBQUlHLE9BQ0FaO2dCQUVKWSxRQUFRLElBQUksQ0FBQ0MsYUFBYSxDQUFDRjtnQkFFM0JYLFNBQVMsSUFBSSxDQUFDQyxNQUFNLENBQUNhLGNBQWMsQ0FBQ0MsZUFBTSxFQUFFSjtnQkFFNUMsSUFBTUssaUJBQWlCaEIsT0FBT2lCLGdCQUFnQixDQUFDTCxRQUN6Q00seUJBQXlCRixlQUFlRyxTQUFTLENBQUNYO2dCQUV4REk7Z0JBRUFaLFNBQVNrQix1QkFBdUJFLGNBQWMsQ0FBQ1I7Z0JBRS9DLElBQUksQ0FBQ1MsYUFBYSxDQUFDVixLQUFLQztnQkFFeEIsSUFBSSxDQUFDWCxNQUFNLENBQUNxQixjQUFjLENBQUNYLEtBQUtYO1lBQ2xDOzs7WUFFQXVCLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxZQUFZO2dCQUNsQixJQUFNZixRQUFRZSxhQUFhZCxRQUFRLElBQzdCQyxNQUFNRixPQUNOVCxTQUFTLElBQUksQ0FBQ0MsTUFBTSxDQUFDYSxjQUFjLENBQUNDLGVBQU0sRUFBRUosTUFDNUNjLHNCQUFzQkMsc0JBQW1CLENBQUNDLFVBQVUsQ0FBQzNCO2dCQUUzRCxPQUFPeUI7WUFDVDs7O1lBRUFaLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjRixHQUFHO2dCQUNmLElBQU1GLFFBQVFFLEtBQ1JpQixVQUFVLElBQUksQ0FBQzVCLE1BQU0sQ0FBQzZCLFlBQVksQ0FBQ3BCLFFBQ25DRyxRQUFRZ0IsU0FBVSxHQUFHO2dCQUUzQixPQUFPaEI7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjVixHQUFHLEVBQUVDLEtBQUs7Z0JBQ3RCLElBQU1ILFFBQVFFLEtBQ1JpQixVQUFVaEIsT0FBUSxHQUFHO2dCQUUzQixJQUFJLENBQUNaLE1BQU0sQ0FBQzhCLFlBQVksQ0FBQ3JCLE9BQU9tQjtZQUNsQzs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUNiLElBQUksQ0FBQ2hDLE1BQU0sQ0FBQytCLFVBQVUsQ0FBQ0M7Z0JBQ3ZCLElBQUksQ0FBQy9CLE1BQU0sQ0FBQzhCLFVBQVUsQ0FBQ0M7WUFDekI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYSxJQUFJLENBQUNqQyxNQUFNLENBQUNnQyxNQUFNLElBQy9CaEMsU0FBU2lDLFlBQ1RDLE9BQU87b0JBQ0xsQyxRQUFBQTtnQkFDRjtnQkFFTixPQUFPa0M7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxVQUFVRCxJQUFJO2dCQUNuQixJQUFNbEMsU0FBU29DLElBQUFBLG9CQUFjLEVBQUNGLE9BQ3hCRyxVQUFVLElBbEZDekMsUUFrRldJO2dCQUU1QixPQUFPcUM7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWV6QyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHMEMscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUdyQ0M7Z0JBRmhCLElBQU16QyxTQUFTZSxlQUFNLENBQUMyQixXQUFXLElBQzNCekMsU0FBUzBDLGVBQU0sQ0FBQ0QsV0FBVyxJQUMzQkosVUFBVUcsQ0FBQUEsV0FBQUEsZ0JBQU8sRUFBQ0YsY0FBYyxPQUF0QkUsVUFBQUE7b0JBMUZDNUM7b0JBMEYrQkM7b0JBQVlFO29CQUFRQztpQkFBOEIsQ0FBbEZ3QyxPQUE0RCxxQkFBR0Q7Z0JBRS9FLE9BQU9GO1lBQ1Q7OztXQTdGbUJ6QztxQkFBZ0I0QyxnQkFBTyJ9