"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProbabilityVector;
    }
});
var _vector = /*#__PURE__*/ _interop_require_default(require("../vector"));
var _frequency = /*#__PURE__*/ _interop_require_default(require("../vector/frequency"));
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
var ProbabilityVector = /*#__PURE__*/ function(Vector) {
    _inherits(ProbabilityVector, Vector);
    function ProbabilityVector(elements, count) {
        _class_call_check(this, ProbabilityVector);
        var _this;
        _this = _call_super(this, ProbabilityVector, [
            elements
        ]);
        _this.count = count;
        return _this;
    }
    _create_class(ProbabilityVector, [
        {
            key: "getCount",
            value: function getCount() {
                return this.count;
            }
        },
        {
            key: "getLength",
            value: function getLength() {
                var width = this.getWidth(), length = width; ///
                return length;
            }
        },
        {
            key: "getProbabilities",
            value: function getProbabilities() {
                var elements = this.getElements(), probabilities = elements; ///
                return probabilities;
            }
        },
        {
            key: "getProbabilityAt",
            value: function getProbabilityAt(index) {
                var probabilities = this.getProbabilities(), probability = probabilities[index];
                return probability;
            }
        },
        {
            key: "argmax",
            value: function argmax() {
                var maximumProbability = -Infinity;
                var probabilities = this.getProbabilities(), argmax = probabilities.reduce(function(argmax, probability, index) {
                    if (probability > maximumProbability) {
                        maximumProbability = probability; ///
                        argmax = index; ///
                    }
                    return argmax;
                }, -1);
                return argmax;
            }
        },
        {
            key: "predictIndex",
            value: function predictIndex() {
                var probabilityVector = this, frequencyVector = _frequency.default.fromProbabilityVector(probabilityVector), index = frequencyVector.predictIndex();
                return index;
            }
        },
        {
            key: "maximumProbability",
            value: function maximumProbability() {
                var maximumProbability = -Infinity;
                var probabilities = this.getProbabilities();
                probabilities.forEach(function(probability) {
                    if (probability > maximumProbability) {
                        maximumProbability = probability; ///
                    }
                });
                return maximumProbability;
            }
        }
    ], [
        {
            key: "fromFloat32Array",
            value: function fromFloat32Array(float32Array) {
                var count = null, elements = Array.from(float32Array), probabilityVector = new ProbabilityVector(elements, count);
                return probabilityVector;
            }
        },
        {
            key: "fromVectorAndCount",
            value: function fromVectorAndCount(vector, count) {
                var elements = vector.getElements(), probabilityVector = new ProbabilityVector(elements, count);
                return probabilityVector;
            }
        }
    ]);
    return ProbabilityVector;
}(_vector.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3IvcHJvYmFiaWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWZWN0b3IgZnJvbSBcIi4uL3ZlY3RvclwiO1xuaW1wb3J0IEZyZXF1ZW5jeVZlY3RvciBmcm9tIFwiLi4vdmVjdG9yL2ZyZXF1ZW5jeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9iYWJpbGl0eVZlY3RvciBleHRlbmRzIFZlY3RvciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRzLCBjb3VudCkge1xuICAgIHN1cGVyKGVsZW1lbnRzKTtcblxuICAgIHRoaXMuY291bnQgPSBjb3VudDtcbiAgfVxuXG4gIGdldENvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGxlbmd0aCA9IHdpZHRoOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQcm9iYWJpbGl0aWVzKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRFbGVtZW50cygpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXMgPSBlbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdGllcztcbiAgfVxuXG4gIGdldFByb2JhYmlsaXR5QXQoaW5kZXgpIHtcbiAgICBjb25zdCBwcm9iYWJpbGl0aWVzID0gdGhpcy5nZXRQcm9iYWJpbGl0aWVzKCksXG4gICAgICAgICAgcHJvYmFiaWxpdHkgPSBwcm9iYWJpbGl0aWVzW2luZGV4XTtcblxuICAgIHJldHVybiBwcm9iYWJpbGl0eTtcbiAgfVxuXG4gIGFyZ21heCgpIHtcbiAgICBsZXQgbWF4aW11bVByb2JhYmlsaXR5ID0gLUluZmluaXR5XG5cbiAgICBjb25zdCBwcm9iYWJpbGl0aWVzID0gdGhpcy5nZXRQcm9iYWJpbGl0aWVzKCksXG4gICAgICAgICAgYXJnbWF4ID0gcHJvYmFiaWxpdGllcy5yZWR1Y2UoKGFyZ21heCwgcHJvYmFiaWxpdHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvYmFiaWxpdHkgPiBtYXhpbXVtUHJvYmFiaWxpdHkpIHtcbiAgICAgICAgICAgICAgbWF4aW11bVByb2JhYmlsaXR5ID0gcHJvYmFiaWxpdHk7IC8vL1xuXG4gICAgICAgICAgICAgIGFyZ21heCA9IGluZGV4OyAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFyZ21heDtcbiAgICAgICAgICB9LCAtMSk7XG5cbiAgICByZXR1cm4gYXJnbWF4O1xuICB9XG5cbiAgcHJlZGljdEluZGV4KCkge1xuICAgIGNvbnN0IHByb2JhYmlsaXR5VmVjdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgZnJlcXVlbmN5VmVjdG9yID0gRnJlcXVlbmN5VmVjdG9yLmZyb21Qcm9iYWJpbGl0eVZlY3Rvcihwcm9iYWJpbGl0eVZlY3RvciksXG4gICAgICAgICAgaW5kZXggPSBmcmVxdWVuY3lWZWN0b3IucHJlZGljdEluZGV4KCk7XG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBtYXhpbXVtUHJvYmFiaWxpdHkoKSB7XG4gICAgbGV0IG1heGltdW1Qcm9iYWJpbGl0eSA9IC1JbmZpbml0eTtcblxuICAgIGNvbnN0IHByb2JhYmlsaXRpZXMgPSB0aGlzLmdldFByb2JhYmlsaXRpZXMoKTtcblxuICAgIHByb2JhYmlsaXRpZXMuZm9yRWFjaCgocHJvYmFiaWxpdHkpID0+IHtcbiAgICAgIGlmIChwcm9iYWJpbGl0eSA+IG1heGltdW1Qcm9iYWJpbGl0eSkge1xuICAgICAgICBtYXhpbXVtUHJvYmFiaWxpdHkgPSBwcm9iYWJpbGl0eTsgLy8vXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF4aW11bVByb2JhYmlsaXR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21GbG9hdDMyQXJyYXkoZmxvYXQzMkFycmF5KSB7XG4gICAgY29uc3QgY291bnQgPSBudWxsLFxuICAgICAgICAgIGVsZW1lbnRzID0gQXJyYXkuZnJvbShmbG9hdDMyQXJyYXkpLCAgLy8vXG4gICAgICAgICAgcHJvYmFiaWxpdHlWZWN0b3IgPSBuZXcgUHJvYmFiaWxpdHlWZWN0b3IoZWxlbWVudHMsIGNvdW50KTtcblxuICAgIHJldHVybiBwcm9iYWJpbGl0eVZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVjdG9yQW5kQ291bnQodmVjdG9yLCBjb3VudCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdmVjdG9yLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgcHJvYmFiaWxpdHlWZWN0b3IgPSBuZXcgUHJvYmFiaWxpdHlWZWN0b3IoZWxlbWVudHMsIGNvdW50KTtcblxuICAgIHJldHVybiBwcm9iYWJpbGl0eVZlY3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByb2JhYmlsaXR5VmVjdG9yIiwiZWxlbWVudHMiLCJjb3VudCIsImdldENvdW50IiwiZ2V0TGVuZ3RoIiwid2lkdGgiLCJnZXRXaWR0aCIsImxlbmd0aCIsImdldFByb2JhYmlsaXRpZXMiLCJnZXRFbGVtZW50cyIsInByb2JhYmlsaXRpZXMiLCJnZXRQcm9iYWJpbGl0eUF0IiwiaW5kZXgiLCJwcm9iYWJpbGl0eSIsImFyZ21heCIsIm1heGltdW1Qcm9iYWJpbGl0eSIsIkluZmluaXR5IiwicmVkdWNlIiwicHJlZGljdEluZGV4IiwicHJvYmFiaWxpdHlWZWN0b3IiLCJmcmVxdWVuY3lWZWN0b3IiLCJGcmVxdWVuY3lWZWN0b3IiLCJmcm9tUHJvYmFiaWxpdHlWZWN0b3IiLCJmb3JFYWNoIiwiZnJvbUZsb2F0MzJBcnJheSIsImZsb2F0MzJBcnJheSIsIkFycmF5IiwiZnJvbSIsImZyb21WZWN0b3JBbmRDb3VudCIsInZlY3RvciIsIlZlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFLcUJBOzs7NkRBSEY7Z0VBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFYixJQUFBLEFBQU1BLGtDQUFOO2NBQU1BO2FBQUFBLGtCQUNQQyxRQUFRLEVBQUVDLEtBQUs7Z0NBRFJGOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxLQUFLLEdBQUdBOzs7a0JBSklGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxTQUFTRixPQUFPLEdBQUc7Z0JBRXpCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsV0FBVyxJQUFJLENBQUNRLFdBQVcsSUFDM0JDLGdCQUFnQlQsVUFBVSxHQUFHO2dCQUVuQyxPQUFPUztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQkMsS0FBSztnQkFDcEIsSUFBTUYsZ0JBQWdCLElBQUksQ0FBQ0YsZ0JBQWdCLElBQ3JDSyxjQUFjSCxhQUFhLENBQUNFLE1BQU07Z0JBRXhDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMscUJBQXFCLENBQUNDO2dCQUUxQixJQUFNTixnQkFBZ0IsSUFBSSxDQUFDRixnQkFBZ0IsSUFDckNNLFNBQVNKLGNBQWNPLE1BQU0sQ0FBQyxTQUFDSCxRQUFRRCxhQUFhRDtvQkFDbEQsSUFBSUMsY0FBY0Usb0JBQW9CO3dCQUNwQ0EscUJBQXFCRixhQUFhLEdBQUc7d0JBRXJDQyxTQUFTRixPQUFPLEdBQUc7b0JBQ3JCO29CQUVBLE9BQU9FO2dCQUNULEdBQUcsQ0FBQztnQkFFVixPQUFPQTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG9CQUFvQixJQUFJLEVBQ3hCQyxrQkFBa0JDLGtCQUFlLENBQUNDLHFCQUFxQixDQUFDSCxvQkFDeERQLFFBQVFRLGdCQUFnQkYsWUFBWTtnQkFFMUMsT0FBT047WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQSxxQkFBcUIsQ0FBQ0M7Z0JBRTFCLElBQU1OLGdCQUFnQixJQUFJLENBQUNGLGdCQUFnQjtnQkFFM0NFLGNBQWNhLE9BQU8sQ0FBQyxTQUFDVjtvQkFDckIsSUFBSUEsY0FBY0Usb0JBQW9CO3dCQUNwQ0EscUJBQXFCRixhQUFhLEdBQUc7b0JBQ3ZDO2dCQUNGO2dCQUVBLE9BQU9FO1lBQ1Q7Ozs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCQyxZQUFZO2dCQUNsQyxJQUFNdkIsUUFBUSxNQUNSRCxXQUFXeUIsTUFBTUMsSUFBSSxDQUFDRixlQUN0Qk4sb0JBQW9CLElBMUVUbkIsa0JBMEUrQkMsVUFBVUM7Z0JBRTFELE9BQU9pQjtZQUNUOzs7WUFFT1MsS0FBQUE7bUJBQVAsU0FBT0EsbUJBQW1CQyxNQUFNLEVBQUUzQixLQUFLO2dCQUNyQyxJQUFNRCxXQUFXNEIsT0FBT3BCLFdBQVcsSUFDN0JVLG9CQUFvQixJQWpGVG5CLGtCQWlGK0JDLFVBQVVDO2dCQUUxRCxPQUFPaUI7WUFDVDs7O1dBcEZtQm5CO0VBQTBCOEIsZUFBTSJ9