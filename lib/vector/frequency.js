"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FrequencyVector;
    }
});
var _vector = /*#__PURE__*/ _interop_require_default(require("../vector"));
var _random = require("../utilities/random");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var FrequencyVector = /*#__PURE__*/ function(Vector) {
    _inherits(FrequencyVector, Vector);
    function FrequencyVector() {
        _class_call_check(this, FrequencyVector);
        return _call_super(this, FrequencyVector, arguments);
    }
    _create_class(FrequencyVector, [
        {
            key: "isEmpty",
            value: function isEmpty() {
                var frequencies = this.getFrequencies(), empty = frequencies.every(function(frequency) {
                    if (frequency === 0) {
                        return true;
                    }
                });
                return empty;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var width = this.getWidth(), length = width;
                return length;
            }
        },
        {
            key: "getFrequencies",
            value: function getFrequencies() {
                var elements = this.getElements(), frequencies = elements; ///
                return frequencies;
            }
        },
        {
            key: "getTotalFrequency",
            value: function getTotalFrequency() {
                var frequencies = this.getFrequencies(), totalFrequency = frequencies.reduce(function(totalFrequency, frequency) {
                    totalFrequency += frequency;
                    return totalFrequency;
                }, 0);
                return totalFrequency;
            }
        },
        {
            key: "sample",
            value: function sample() {
                var length = this.getLength(), frequencies = this.getFrequencies(), totalFrequency = this.getTotalFrequency(), lowerBound = 0, upperBound = totalFrequency, randomAccumulatedFrequency = (0, _random.random)(lowerBound, upperBound);
                var index, accumulatedFrequency = 0;
                for(index = 0; index < length; index++){
                    var frequency = frequencies[index];
                    accumulatedFrequency += frequency;
                    if (randomAccumulatedFrequency < accumulatedFrequency) {
                        break;
                    }
                }
                return index;
            }
        },
        {
            key: "predictIndex",
            value: function predictIndex() {
                var index = null;
                var empty = this.isEmpty();
                if (!empty) {
                    index = this.sample();
                }
                return index;
            }
        }
    ], [
        {
            key: "fromProbabilityVector",
            value: function fromProbabilityVector(probabilityVector) {
                var count = probabilityVector.getCount(), length = probabilityVector.getLength(), intermediateVector = probabilityVector.multiplyByScalar(count), element = 1 / length, width = length, initialVector = _vector.default.fromWidthAndElement(width, element), vector = intermediateVector.subtractVector(initialVector);
                var elements;
                elements = vector.getElements();
                elements = roundElements(elements); ///
                var frequencyVector = new FrequencyVector(elements);
                return frequencyVector;
            }
        }
    ]);
    return FrequencyVector;
}(_vector.default);
function roundElements(elements) {
    elements = elements.map(function(element) {
        element = Math.round(element);
        return element;
    });
    return elements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3IvZnJlcXVlbmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi92ZWN0b3JcIjtcblxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yYW5kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlcXVlbmN5VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBmcmVxdWVuY2llcyA9IHRoaXMuZ2V0RnJlcXVlbmNpZXMoKSxcbiAgICAgICAgICBlbXB0eSA9IGZyZXF1ZW5jaWVzLmV2ZXJ5KChmcmVxdWVuY3kpID0+IHtcbiAgICAgICAgICAgIGlmIChmcmVxdWVuY3kgPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZW1wdHk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgbGVuZ3RoID0gd2lkdGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmNpZXMoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgZnJlcXVlbmNpZXMgPSBlbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jaWVzO1xuICB9XG5cbiAgZ2V0VG90YWxGcmVxdWVuY3koKSB7XG4gICAgY29uc3QgZnJlcXVlbmNpZXMgPSB0aGlzLmdldEZyZXF1ZW5jaWVzKCksXG4gICAgICAgICAgdG90YWxGcmVxdWVuY3kgPSBmcmVxdWVuY2llcy5yZWR1Y2UoKHRvdGFsRnJlcXVlbmN5LCBmcmVxdWVuY3kpID0+IHtcbiAgICAgICAgICAgIHRvdGFsRnJlcXVlbmN5ICs9IGZyZXF1ZW5jeTtcblxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsRnJlcXVlbmN5O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIHRvdGFsRnJlcXVlbmN5O1xuICB9XG5cbiAgc2FtcGxlKCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCksXG4gICAgICAgICAgZnJlcXVlbmNpZXMgPSB0aGlzLmdldEZyZXF1ZW5jaWVzKCksXG4gICAgICAgICAgdG90YWxGcmVxdWVuY3kgPSB0aGlzLmdldFRvdGFsRnJlcXVlbmN5KCksXG4gICAgICAgICAgbG93ZXJCb3VuZCA9IDAsXG4gICAgICAgICAgdXBwZXJCb3VuZCA9IHRvdGFsRnJlcXVlbmN5LCAgLy8vXG4gICAgICAgICAgcmFuZG9tQWNjdW11bGF0ZWRGcmVxdWVuY3kgPSByYW5kb20obG93ZXJCb3VuZCwgdXBwZXJCb3VuZCk7XG5cbiAgICBsZXQgaW5kZXgsXG4gICAgICAgIGFjY3VtdWxhdGVkRnJlcXVlbmN5ID0gMDtcblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3QgZnJlcXVlbmN5ID0gZnJlcXVlbmNpZXNbaW5kZXhdO1xuXG4gICAgICBhY2N1bXVsYXRlZEZyZXF1ZW5jeSArPSBmcmVxdWVuY3k7XG5cbiAgICAgIGlmIChyYW5kb21BY2N1bXVsYXRlZEZyZXF1ZW5jeSA8IGFjY3VtdWxhdGVkRnJlcXVlbmN5KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHByZWRpY3RJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSBudWxsO1xuXG4gICAgY29uc3QgZW1wdHkgPSB0aGlzLmlzRW1wdHkoKTtcblxuICAgIGlmICghZW1wdHkpIHtcbiAgICAgIGluZGV4ID0gdGhpcy5zYW1wbGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb2JhYmlsaXR5VmVjdG9yKHByb2JhYmlsaXR5VmVjdG9yKSB7XG4gICAgY29uc3QgY291bnQgPSBwcm9iYWJpbGl0eVZlY3Rvci5nZXRDb3VudCgpLFxuICAgICAgICAgIGxlbmd0aCA9IHByb2JhYmlsaXR5VmVjdG9yLmdldExlbmd0aCgpLFxuICAgICAgICAgIGludGVybWVkaWF0ZVZlY3RvciA9IHByb2JhYmlsaXR5VmVjdG9yLm11bHRpcGx5QnlTY2FsYXIoY291bnQpLFxuICAgICAgICAgIGVsZW1lbnQgPSAxIC8gbGVuZ3RoLFxuICAgICAgICAgIHdpZHRoID0gbGVuZ3RoLCAvLy9cbiAgICAgICAgICBpbml0aWFsVmVjdG9yID0gVmVjdG9yLmZyb21XaWR0aEFuZEVsZW1lbnQod2lkdGgsIGVsZW1lbnQpLFxuICAgICAgICAgIHZlY3RvciA9IGludGVybWVkaWF0ZVZlY3Rvci5zdWJ0cmFjdFZlY3Rvcihpbml0aWFsVmVjdG9yKTtcblxuICAgIGxldCBlbGVtZW50cztcblxuICAgIGVsZW1lbnRzID0gdmVjdG9yLmdldEVsZW1lbnRzKCk7XG5cbiAgICBlbGVtZW50cyA9IHJvdW5kRWxlbWVudHMoZWxlbWVudHMpOyAvLy9cblxuICAgIGNvbnN0IGZyZXF1ZW5jeVZlY3RvciA9IG5ldyBGcmVxdWVuY3lWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByb3VuZEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gIGVsZW1lbnRzID0gZWxlbWVudHMubWFwKChlbGVtZW50KSA9PiB7ICAvLy9cbiAgICBlbGVtZW50ID0gTWF0aC5yb3VuZChlbGVtZW50KTtcblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9KTtcblxuICByZXR1cm4gZWxlbWVudHM7XG59Il0sIm5hbWVzIjpbIkZyZXF1ZW5jeVZlY3RvciIsImlzRW1wdHkiLCJmcmVxdWVuY2llcyIsImdldEZyZXF1ZW5jaWVzIiwiZW1wdHkiLCJldmVyeSIsImZyZXF1ZW5jeSIsImdldExlbmd0aCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJsZW5ndGgiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwiZ2V0VG90YWxGcmVxdWVuY3kiLCJ0b3RhbEZyZXF1ZW5jeSIsInJlZHVjZSIsInNhbXBsZSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwicmFuZG9tQWNjdW11bGF0ZWRGcmVxdWVuY3kiLCJyYW5kb20iLCJpbmRleCIsImFjY3VtdWxhdGVkRnJlcXVlbmN5IiwicHJlZGljdEluZGV4IiwiZnJvbVByb2JhYmlsaXR5VmVjdG9yIiwicHJvYmFiaWxpdHlWZWN0b3IiLCJjb3VudCIsImdldENvdW50IiwiaW50ZXJtZWRpYXRlVmVjdG9yIiwibXVsdGlwbHlCeVNjYWxhciIsImVsZW1lbnQiLCJpbml0aWFsVmVjdG9yIiwiVmVjdG9yIiwiZnJvbVdpZHRoQW5kRWxlbWVudCIsInZlY3RvciIsInN1YnRyYWN0VmVjdG9yIiwicm91bmRFbGVtZW50cyIsImZyZXF1ZW5jeVZlY3RvciIsIm1hcCIsIk1hdGgiLCJyb3VuZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7NkRBSkY7c0JBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFUixJQUFBLEFBQU1BLGdDQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDQyxRQUFRRixZQUFZRyxLQUFLLENBQUMsU0FBQ0M7b0JBQ3pCLElBQUlBLGNBQWMsR0FBRzt3QkFDbkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxTQUFTRjtnQkFFZixPQUFPRTtZQUNUOzs7WUFFQVAsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1RLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCVixjQUFjUyxVQUFXLEdBQUc7Z0JBRWxDLE9BQU9UO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVgsY0FBYyxJQUFJLENBQUNDLGNBQWMsSUFDakNXLGlCQUFpQlosWUFBWWEsTUFBTSxDQUFDLFNBQUNELGdCQUFnQlI7b0JBQ25EUSxrQkFBa0JSO29CQUVsQixPQUFPUTtnQkFDVCxHQUFHO2dCQUVULE9BQU9BO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sU0FBUyxJQUFJLENBQUNILFNBQVMsSUFDdkJMLGNBQWMsSUFBSSxDQUFDQyxjQUFjLElBQ2pDVyxpQkFBaUIsSUFBSSxDQUFDRCxpQkFBaUIsSUFDdkNJLGFBQWEsR0FDYkMsYUFBYUosZ0JBQ2JLLDZCQUE2QkMsSUFBQUEsY0FBTSxFQUFDSCxZQUFZQztnQkFFdEQsSUFBSUcsT0FDQUMsdUJBQXVCO2dCQUUzQixJQUFLRCxRQUFRLEdBQUdBLFFBQVFYLFFBQVFXLFFBQVM7b0JBQ3ZDLElBQU1mLFlBQVlKLFdBQVcsQ0FBQ21CLE1BQU07b0JBRXBDQyx3QkFBd0JoQjtvQkFFeEIsSUFBSWEsNkJBQTZCRyxzQkFBc0I7d0JBQ3JEO29CQUNGO2dCQUNGO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUYsUUFBUTtnQkFFWixJQUFNakIsUUFBUSxJQUFJLENBQUNILE9BQU87Z0JBRTFCLElBQUksQ0FBQ0csT0FBTztvQkFDVmlCLFFBQVEsSUFBSSxDQUFDTCxNQUFNO2dCQUNyQjtnQkFFQSxPQUFPSztZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BLHNCQUFzQkMsaUJBQWlCO2dCQUM1QyxJQUFNQyxRQUFRRCxrQkFBa0JFLFFBQVEsSUFDbENqQixTQUFTZSxrQkFBa0JsQixTQUFTLElBQ3BDcUIscUJBQXFCSCxrQkFBa0JJLGdCQUFnQixDQUFDSCxRQUN4REksVUFBVSxJQUFJcEIsUUFDZEYsUUFBUUUsUUFDUnFCLGdCQUFnQkMsZUFBTSxDQUFDQyxtQkFBbUIsQ0FBQ3pCLE9BQU9zQixVQUNsREksU0FBU04sbUJBQW1CTyxjQUFjLENBQUNKO2dCQUVqRCxJQUFJcEI7Z0JBRUpBLFdBQVd1QixPQUFPdEIsV0FBVztnQkFFN0JELFdBQVd5QixjQUFjekIsV0FBVyxHQUFHO2dCQUV2QyxJQUFNMEIsa0JBQWtCLElBeEZQckMsZ0JBd0YyQlc7Z0JBRTVDLE9BQU8wQjtZQUNUOzs7V0EzRm1CckM7RUFBd0JnQyxlQUFNO0FBOEZuRCxTQUFTSSxjQUFjekIsUUFBUTtJQUM3QkEsV0FBV0EsU0FBUzJCLEdBQUcsQ0FBQyxTQUFDUjtRQUN2QkEsVUFBVVMsS0FBS0MsS0FBSyxDQUFDVjtRQUVyQixPQUFPQTtJQUNUO0lBRUEsT0FBT25CO0FBQ1QifQ==