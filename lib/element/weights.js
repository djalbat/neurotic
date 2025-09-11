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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _frequency = /*#__PURE__*/ _interop_require_default(require("../vector/frequency"));
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
    function Weights(frequencyVectors) {
        _class_call_check(this, Weights);
        var _this;
        _this = _call_super(this, Weights);
        _this.frequencyVectors = frequencyVectors;
        return _this;
    }
    _create_class(Weights, [
        {
            key: "getFrequencyVectors",
            value: function getFrequencyVectors() {
                return this.frequencyVectors;
            }
        },
        {
            key: "getFrequencyVectorAtRow",
            value: function getFrequencyVectorAtRow(row) {
                var index = row, frequencyVector = this.frequencyVectors[index];
                return frequencyVector;
            }
        },
        {
            key: "train",
            value: function train(transition) {
                var row = transition.getRow(), column = transition.getColumn(), frequencyVector = this.getFrequencyVectorAtRow(row);
                frequencyVector.train(column);
            }
        },
        {
            key: "forward",
            value: function forward(row) {
                var frequencyVector = this.getFrequencyVectorAtRow(row), column = frequencyVector.predict();
                return column;
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
                this.frequencyVectors = [];
                for(var index = 0; index < size; index++){
                    var frequencyVector = _frequency.default.fromSize(size);
                    this.frequencyVectors.push(frequencyVector);
                }
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
                var frequencyVectors = frequencyVectorsFromJSON(json), weights = new Weights(frequencyVectors);
                return weights;
            }
        },
        {
            key: "fromNothing",
            value: function fromNothing() {
                var properties = {}, frequencyVectors = null, weights = _element.default.fromProperties(Weights, properties, frequencyVectors);
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
                var frequencyVectors = null, weights = (_Element = _element.default).fromProperties.apply(_Element, [
                    Weights,
                    properties,
                    frequencyVectors
                ].concat(_to_consumable_array(remainingArguments)));
                return weights;
            }
        }
    ]);
    return Weights;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3dlaWdodHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgRnJlcXVlbmN5VmVjdG9yIGZyb20gXCIuLi92ZWN0b3IvZnJlcXVlbmN5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHMgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZnJlcXVlbmN5VmVjdG9ycykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmZyZXF1ZW5jeVZlY3RvcnMgPSBmcmVxdWVuY3lWZWN0b3JzO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmN5VmVjdG9ycygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmVxdWVuY3lWZWN0b3JzO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmN5VmVjdG9yQXRSb3cocm93KSB7XG4gICAgY29uc3QgaW5kZXggPSByb3csICAvLy9cbiAgICAgICAgICBmcmVxdWVuY3lWZWN0b3IgPSB0aGlzLmZyZXF1ZW5jeVZlY3RvcnNbaW5kZXhdO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcjtcbiAgfVxuXG4gIHRyYWluKHRyYW5zaXRpb24pIHtcbiAgICBjb25zdCByb3cgPSB0cmFuc2l0aW9uLmdldFJvdygpLFxuICAgICAgICAgIGNvbHVtbiA9IHRyYW5zaXRpb24uZ2V0Q29sdW1uKCksXG4gICAgICAgICAgZnJlcXVlbmN5VmVjdG9yID0gdGhpcy5nZXRGcmVxdWVuY3lWZWN0b3JBdFJvdyhyb3cpO1xuXG4gICAgZnJlcXVlbmN5VmVjdG9yLnRyYWluKGNvbHVtbik7XG4gIH1cblxuICBmb3J3YXJkKHJvdykge1xuICAgIGNvbnN0IGZyZXF1ZW5jeVZlY3RvciA9IHRoaXMuZ2V0RnJlcXVlbmN5VmVjdG9yQXRSb3cocm93KSxcbiAgICAgICAgICBjb2x1bW4gPSBmcmVxdWVuY3lWZWN0b3IucHJlZGljdCgpO1xuXG4gICAgcmV0dXJuIGNvbHVtbjtcbiAgfVxuXG4gIGdldENvdW50QXRSb3cocm93KSB7XG4gICAgY29uc3QgaW5kZXggPSByb3csICAvLy9cbiAgICAgICAgICBlbGVtZW50ID0gdGhpcy52ZWN0b3IuZ2V0RWxlbWVudEF0KGluZGV4KSxcbiAgICAgICAgICBjb3VudCA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHNldENvdW50QXRSb3cocm93LCBjb3VudCkge1xuICAgIGNvbnN0IGluZGV4ID0gcm93LCAgLy8vXG4gICAgICAgICAgZWxlbWVudCA9IGNvdW50OyAgLy8vXG5cbiAgICB0aGlzLnZlY3Rvci5zZXRFbGVtZW50QXQoaW5kZXgsIGVsZW1lbnQpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShzaXplKSB7XG4gICAgdGhpcy5mcmVxdWVuY3lWZWN0b3JzID0gW107XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgc2l6ZTsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZnJlcXVlbmN5VmVjdG9yID0gRnJlcXVlbmN5VmVjdG9yLmZyb21TaXplKHNpemUpO1xuXG4gICAgICB0aGlzLmZyZXF1ZW5jeVZlY3RvcnMucHVzaChmcmVxdWVuY3lWZWN0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBtYXRyaXhKU09OID0gdGhpcy5tYXRyaXgudG9KU09OKCksXG4gICAgICAgICAgbWF0cml4ID0gbWF0cml4SlNPTiwgIC8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG1hdHJpeFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSkpTT04oanNvbikge1xuICAgIGNvbnN0IGZyZXF1ZW5jeVZlY3RvcnMgPSBmcmVxdWVuY3lWZWN0b3JzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IG5ldyBXZWlnaHRzKGZyZXF1ZW5jeVZlY3RvcnMpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9IHt9LFxuICAgICAgICAgIGZyZXF1ZW5jeVZlY3RvcnMgPSBudWxsLFxuICAgICAgICAgIHdlaWdodHMgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFdlaWdodHMsIHByb3BlcnRpZXMsIGZyZXF1ZW5jeVZlY3RvcnMpO1xuXG4gICAgcmV0dXJuIHdlaWdodHM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgZnJlcXVlbmN5VmVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgd2VpZ2h0cyA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoV2VpZ2h0cywgcHJvcGVydGllcywgZnJlcXVlbmN5VmVjdG9ycywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB3ZWlnaHRzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiV2VpZ2h0cyIsImZyZXF1ZW5jeVZlY3RvcnMiLCJnZXRGcmVxdWVuY3lWZWN0b3JzIiwiZ2V0RnJlcXVlbmN5VmVjdG9yQXRSb3ciLCJyb3ciLCJpbmRleCIsImZyZXF1ZW5jeVZlY3RvciIsInRyYWluIiwidHJhbnNpdGlvbiIsImdldFJvdyIsImNvbHVtbiIsImdldENvbHVtbiIsImZvcndhcmQiLCJwcmVkaWN0IiwiZ2V0Q291bnRBdFJvdyIsImVsZW1lbnQiLCJ2ZWN0b3IiLCJnZXRFbGVtZW50QXQiLCJjb3VudCIsInNldENvdW50QXRSb3ciLCJzZXRFbGVtZW50QXQiLCJpbml0aWFsaXNlIiwic2l6ZSIsIkZyZXF1ZW5jeVZlY3RvciIsImZyb21TaXplIiwicHVzaCIsInRvSlNPTiIsIm1hdHJpeEpTT04iLCJtYXRyaXgiLCJqc29uIiwiZnJvbUpKU09OIiwiZnJlcXVlbmN5VmVjdG9yc0Zyb21KU09OIiwid2VpZ2h0cyIsImZyb21Ob3RoaW5nIiwicHJvcGVydGllcyIsIkVsZW1lbnQiLCJmcm9tUHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7OERBSEQ7Z0VBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUViLElBQUEsQUFBTUEsd0JBQU47Y0FBTUE7YUFBQUEsUUFDUEMsZ0JBQWdCO2dDQURURDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0MsZ0JBQWdCLEdBQUdBOzs7a0JBSlBEOztZQU9uQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxnQkFBZ0I7WUFDOUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCQyxHQUFHO2dCQUN6QixJQUFNQyxRQUFRRCxLQUNSRSxrQkFBa0IsSUFBSSxDQUFDTCxnQkFBZ0IsQ0FBQ0ksTUFBTTtnQkFFcEQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxVQUFVO2dCQUNkLElBQU1KLE1BQU1JLFdBQVdDLE1BQU0sSUFDdkJDLFNBQVNGLFdBQVdHLFNBQVMsSUFDN0JMLGtCQUFrQixJQUFJLENBQUNILHVCQUF1QixDQUFDQztnQkFFckRFLGdCQUFnQkMsS0FBSyxDQUFDRztZQUN4Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRUixHQUFHO2dCQUNULElBQU1FLGtCQUFrQixJQUFJLENBQUNILHVCQUF1QixDQUFDQyxNQUMvQ00sU0FBU0osZ0JBQWdCTyxPQUFPO2dCQUV0QyxPQUFPSDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNWLEdBQUc7Z0JBQ2YsSUFBTUMsUUFBUUQsS0FDUlcsVUFBVSxJQUFJLENBQUNDLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDWixRQUNuQ2EsUUFBUUgsU0FBVSxHQUFHO2dCQUUzQixPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNmLEdBQUcsRUFBRWMsS0FBSztnQkFDdEIsSUFBTWIsUUFBUUQsS0FDUlcsVUFBVUcsT0FBUSxHQUFHO2dCQUUzQixJQUFJLENBQUNGLE1BQU0sQ0FBQ0ksWUFBWSxDQUFDZixPQUFPVTtZQUNsQzs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUNiLElBQUksQ0FBQ3JCLGdCQUFnQixHQUFHLEVBQUU7Z0JBRTFCLElBQUssSUFBSUksUUFBUSxHQUFHQSxRQUFRaUIsTUFBTWpCLFFBQVM7b0JBQ3pDLElBQU1DLGtCQUFrQmlCLGtCQUFlLENBQUNDLFFBQVEsQ0FBQ0Y7b0JBRWpELElBQUksQ0FBQ3JCLGdCQUFnQixDQUFDd0IsSUFBSSxDQUFDbkI7Z0JBQzdCO1lBQ0Y7OztZQUVBb0IsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxNQUFNLENBQUNGLE1BQU0sSUFDL0JFLFNBQVNELFlBQ1RFLE9BQU87b0JBQ0xELFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUQsSUFBSTtnQkFDbkIsSUFBTTVCLG1CQUFtQjhCLHlCQUF5QkYsT0FDNUNHLFVBQVUsSUF0RUNoQyxRQXNFV0M7Z0JBRTVCLE9BQU8rQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTUMsYUFBYSxDQUFDLEdBQ2RqQyxtQkFBbUIsTUFDbkIrQixVQUFVRyxnQkFBTyxDQUFDQyxjQUFjLENBOUVyQnBDLFNBOEUrQmtDLFlBQVlqQztnQkFFNUQsT0FBTytCO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxlQUFlRixVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHRyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBRXJDRjtnQkFEaEIsSUFBTWxDLG1CQUFtQixNQUNuQitCLFVBQVVHLENBQUFBLFdBQUFBLGdCQUFPLEVBQUNDLGNBQWMsT0FBdEJELFVBQUFBO29CQXJGQ25DO29CQXFGK0JrQztvQkFBWWpDO2lCQUF3QyxDQUFwRmtDLE9BQThELHFCQUFHRTtnQkFFakYsT0FBT0w7WUFDVDs7O1dBeEZtQmhDO3FCQUFnQm1DLGdCQUFPIn0=