"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProbabilitiesVector;
    }
});
var _vector = /*#__PURE__*/ _interop_require_default(require("../vector"));
var _random = require("../utilities/random");
var _defaults = require("../defaults");
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
var ProbabilitiesVector = /*#__PURE__*/ function(Vector) {
    _inherits(ProbabilitiesVector, Vector);
    function ProbabilitiesVector() {
        _class_call_check(this, ProbabilitiesVector);
        return _call_super(this, ProbabilitiesVector, arguments);
    }
    _create_class(ProbabilitiesVector, [
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
            key: "sample",
            value: function sample() {
                var cutoff = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_CUTOFF;
                var length = this.getLength(), probabilities = this.getProbabilities(), sortedIndexes = sortIndexes(probabilities);
                var sortedIndex, accumulatedProbability = 0;
                var lowerBound = 0, upperBound = 1 - cutoff, number = (0, _random.random)(lowerBound, upperBound);
                for(var index = 0; index < length; index++){
                    sortedIndex = sortedIndexes[index];
                    var probability = probabilities[sortedIndex];
                    accumulatedProbability += probability;
                    if (number < accumulatedProbability) {
                        break;
                    }
                }
                var index1 = sortedIndex; ///
                return index1;
            }
        },
        {
            key: "entropy",
            value: function entropy() {
                var probabilities = this.getProbabilities(), entropy = probabilities.reduce(function(entropy, probability) {
                    if (probability > 0) {
                        var information = Math.log2(probability);
                        entropy = entropy - probability * information;
                    }
                    return entropy;
                }, 0);
                return entropy;
            }
        },
        {
            key: "maximumEntropy",
            value: function maximumEntropy() {
                var width = this.getWidth(), maximumEntropy = Math.log2(width);
                return maximumEntropy;
            }
        },
        {
            key: "normalisedEntropy",
            value: function normalisedEntropy() {
                var entropy = this.entropy(), maximumEntropy = this.maximumEntropy(), normalisedEEntropy = entropy / maximumEntropy;
                return normalisedEEntropy;
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
        },
        {
            key: "predictIndex",
            value: function predictIndex() {
                var cutoff = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_CUTOFF, threshold = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_THRESHOLD;
                var normalisedEntropy = this.normalisedEntropy(), index = normalisedEntropy < threshold ? this.sample(cutoff) : null;
                return index;
            }
        }
    ], [
        {
            key: "fromVector",
            value: function fromVector(vector) {
                var elements = vector.getElements(), probabilitiesVector = new ProbabilitiesVector(elements);
                return probabilitiesVector;
            }
        },
        {
            key: "fromFloat32Array",
            value: function fromFloat32Array(float32Array) {
                var elements = Array.from(float32Array), probabilitiesVector = new ProbabilitiesVector(elements);
                return probabilitiesVector;
            }
        }
    ]);
    return ProbabilitiesVector;
}(_vector.default);
function sortIndexes(probabilities) {
    var indexes = [], length = probabilities.length;
    for(var index = 0; index < length; index++){
        indexes.push(index);
    }
    indexes.sort(function(indexA, indexB) {
        var probabilityA = probabilities[indexA], probabilityB = probabilities[indexB], difference = probabilityB - probabilityA;
        return difference;
    });
    var sortedIndexes = indexes; ///
    return sortedIndexes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3IvcHJvYmFiaWxpdGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vdmVjdG9yXCI7XG5cbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmFuZG9tXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VUT0ZGLCBERUZBVUxUX1RIUkVTSE9MRCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9iYWJpbGl0aWVzVmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcbiAgZ2V0TGVuZ3RoKCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIGxlbmd0aCA9IHdpZHRoOyAvLy9cblxuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBnZXRQcm9iYWJpbGl0aWVzKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRFbGVtZW50cygpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXMgPSBlbGVtZW50czsgLy8vXG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdGllcztcbiAgfVxuXG4gIGdldFByb2JhYmlsaXR5QXQoaW5kZXgpIHtcbiAgICBjb25zdCBwcm9iYWJpbGl0aWVzID0gdGhpcy5nZXRQcm9iYWJpbGl0aWVzKCksXG4gICAgICAgICAgcHJvYmFiaWxpdHkgPSBwcm9iYWJpbGl0aWVzW2luZGV4XTtcblxuICAgIHJldHVybiBwcm9iYWJpbGl0eTtcbiAgfVxuXG4gIGFyZ21heCgpIHtcbiAgICBsZXQgbWF4aW11bVByb2JhYmlsaXR5ID0gLUluZmluaXR5XG5cbiAgICBjb25zdCBwcm9iYWJpbGl0aWVzID0gdGhpcy5nZXRQcm9iYWJpbGl0aWVzKCksXG4gICAgICAgICAgYXJnbWF4ID0gcHJvYmFiaWxpdGllcy5yZWR1Y2UoKGFyZ21heCwgcHJvYmFiaWxpdHksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvYmFiaWxpdHkgPiBtYXhpbXVtUHJvYmFiaWxpdHkpIHtcbiAgICAgICAgICAgICAgbWF4aW11bVByb2JhYmlsaXR5ID0gcHJvYmFiaWxpdHk7IC8vL1xuXG4gICAgICAgICAgICAgIGFyZ21heCA9IGluZGV4OyAvLy9cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFyZ21heDtcbiAgICAgICAgICB9LCAtMSk7XG5cbiAgICByZXR1cm4gYXJnbWF4O1xuICB9XG5cbiAgc2FtcGxlKGN1dG9mZiA9IERFRkFVTFRfQ1VUT0ZGKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgcHJvYmFiaWxpdGllcyA9IHRoaXMuZ2V0UHJvYmFiaWxpdGllcygpLFxuICAgICAgICBzb3J0ZWRJbmRleGVzID0gc29ydEluZGV4ZXMocHJvYmFiaWxpdGllcyk7XG5cbiAgICBsZXQgc29ydGVkSW5kZXgsXG4gICAgICAgIGFjY3VtdWxhdGVkUHJvYmFiaWxpdHkgPSAwO1xuXG4gICAgY29uc3QgbG93ZXJCb3VuZCAgPSAwLFxuICAgICAgICAgIHVwcGVyQm91bmQgPSAxIC0gY3V0b2ZmLFxuICAgICAgICAgIG51bWJlciA9IHJhbmRvbShsb3dlckJvdW5kLCB1cHBlckJvdW5kKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHNvcnRlZEluZGV4ID0gc29ydGVkSW5kZXhlc1tpbmRleF07XG5cbiAgICAgIGNvbnN0IHByb2JhYmlsaXR5ID0gcHJvYmFiaWxpdGllc1tzb3J0ZWRJbmRleF07XG5cbiAgICAgIGFjY3VtdWxhdGVkUHJvYmFiaWxpdHkgKz0gcHJvYmFiaWxpdHk7XG5cbiAgICAgIGlmIChudW1iZXIgPCBhY2N1bXVsYXRlZFByb2JhYmlsaXR5KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gc29ydGVkSW5kZXg7ICAvLy9cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGVudHJvcHkoKSB7XG4gICAgY29uc3QgcHJvYmFiaWxpdGllcyA9IHRoaXMuZ2V0UHJvYmFiaWxpdGllcygpLFxuICAgICAgICAgIGVudHJvcHkgPSBwcm9iYWJpbGl0aWVzLnJlZHVjZSgoZW50cm9weSwgcHJvYmFiaWxpdHkpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9iYWJpbGl0eSA+IDApIHtcbiAgICAgICAgICAgICAgY29uc3QgaW5mb3JtYXRpb24gPSBNYXRoLmxvZzIocHJvYmFiaWxpdHkpO1xuXG4gICAgICAgICAgICAgIGVudHJvcHkgPSBlbnRyb3B5IC0gKHByb2JhYmlsaXR5ICogaW5mb3JtYXRpb24pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZW50cm9weTtcbiAgICAgICAgICB9LCAwKTtcblxuICAgIHJldHVybiBlbnRyb3B5O1xuICB9XG5cbiAgbWF4aW11bUVudHJvcHkoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgbWF4aW11bUVudHJvcHkgPSBNYXRoLmxvZzIod2lkdGgpO1xuXG4gICAgcmV0dXJuIG1heGltdW1FbnRyb3B5O1xuICB9XG5cbiAgbm9ybWFsaXNlZEVudHJvcHkoKSB7XG4gICAgY29uc3QgZW50cm9weSA9IHRoaXMuZW50cm9weSgpLFxuICAgICAgICAgIG1heGltdW1FbnRyb3B5ID0gdGhpcy5tYXhpbXVtRW50cm9weSgpLFxuICAgICAgICAgIG5vcm1hbGlzZWRFRW50cm9weSA9IChlbnRyb3B5IC8gbWF4aW11bUVudHJvcHkpO1xuXG4gICAgcmV0dXJuIG5vcm1hbGlzZWRFRW50cm9weTtcbiAgfVxuXG4gIG1heGltdW1Qcm9iYWJpbGl0eSgpIHtcbiAgICBsZXQgbWF4aW11bVByb2JhYmlsaXR5ID0gLUluZmluaXR5O1xuXG4gICAgY29uc3QgcHJvYmFiaWxpdGllcyA9IHRoaXMuZ2V0UHJvYmFiaWxpdGllcygpO1xuXG4gICAgcHJvYmFiaWxpdGllcy5mb3JFYWNoKChwcm9iYWJpbGl0eSkgPT4ge1xuICAgICAgaWYgKHByb2JhYmlsaXR5ID4gbWF4aW11bVByb2JhYmlsaXR5KSB7XG4gICAgICAgIG1heGltdW1Qcm9iYWJpbGl0eSA9IHByb2JhYmlsaXR5OyAvLy9cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXhpbXVtUHJvYmFiaWxpdHk7XG4gIH1cblxuICBwcmVkaWN0SW5kZXgoY3V0b2ZmID0gREVGQVVMVF9DVVRPRkYsIHRocmVzaG9sZCA9IERFRkFVTFRfVEhSRVNIT0xEKSB7XG4gICAgY29uc3Qgbm9ybWFsaXNlZEVudHJvcHkgPSB0aGlzLm5vcm1hbGlzZWRFbnRyb3B5KCksXG4gICAgICAgICAgaW5kZXggPSAobm9ybWFsaXNlZEVudHJvcHkgPCB0aHJlc2hvbGQpID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlKGN1dG9mZikgOlxuICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgc3RhdGljIGZyb21WZWN0b3IodmVjdG9yKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB2ZWN0b3IuZ2V0RWxlbWVudHMoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gbmV3IFByb2JhYmlsaXRpZXNWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHByb2JhYmlsaXRpZXNWZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZsb2F0MzJBcnJheShmbG9hdDMyQXJyYXkpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oZmxvYXQzMkFycmF5KSwgIC8vL1xuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSBuZXcgUHJvYmFiaWxpdGllc1ZlY3RvcihlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdGllc1ZlY3RvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0SW5kZXhlcyhwcm9iYWJpbGl0aWVzKSB7XG4gIGNvbnN0IGluZGV4ZXMgPSBbXSxcbiAgICAgICAgbGVuZ3RoID0gcHJvYmFiaWxpdGllcy5sZW5ndGg7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgIGluZGV4ZXMucHVzaChpbmRleCk7XG4gIH1cblxuICBpbmRleGVzLnNvcnQoKGluZGV4QSwgaW5kZXhCKSA9PiB7XG4gICAgY29uc3QgcHJvYmFiaWxpdHlBID0gcHJvYmFiaWxpdGllc1tpbmRleEFdLFxuICAgICAgICAgIHByb2JhYmlsaXR5QiA9IHByb2JhYmlsaXRpZXNbaW5kZXhCXSxcbiAgICAgICAgICBkaWZmZXJlbmNlID0gKHByb2JhYmlsaXR5QiAtIHByb2JhYmlsaXR5QSk7XG5cbiAgICByZXR1cm4gZGlmZmVyZW5jZTtcbiAgfSk7XG5cbiAgY29uc3Qgc29ydGVkSW5kZXhlcyA9IGluZGV4ZXM7ICAvLy9cblxuICByZXR1cm4gc29ydGVkSW5kZXhlcztcbn1cbiJdLCJuYW1lcyI6WyJQcm9iYWJpbGl0aWVzVmVjdG9yIiwiZ2V0TGVuZ3RoIiwid2lkdGgiLCJnZXRXaWR0aCIsImxlbmd0aCIsImdldFByb2JhYmlsaXRpZXMiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwicHJvYmFiaWxpdGllcyIsImdldFByb2JhYmlsaXR5QXQiLCJpbmRleCIsInByb2JhYmlsaXR5IiwiYXJnbWF4IiwibWF4aW11bVByb2JhYmlsaXR5IiwiSW5maW5pdHkiLCJyZWR1Y2UiLCJzYW1wbGUiLCJjdXRvZmYiLCJERUZBVUxUX0NVVE9GRiIsInNvcnRlZEluZGV4ZXMiLCJzb3J0SW5kZXhlcyIsInNvcnRlZEluZGV4IiwiYWNjdW11bGF0ZWRQcm9iYWJpbGl0eSIsImxvd2VyQm91bmQiLCJ1cHBlckJvdW5kIiwibnVtYmVyIiwicmFuZG9tIiwiZW50cm9weSIsImluZm9ybWF0aW9uIiwiTWF0aCIsImxvZzIiLCJtYXhpbXVtRW50cm9weSIsIm5vcm1hbGlzZWRFbnRyb3B5Iiwibm9ybWFsaXNlZEVFbnRyb3B5IiwiZm9yRWFjaCIsInByZWRpY3RJbmRleCIsInRocmVzaG9sZCIsIkRFRkFVTFRfVEhSRVNIT0xEIiwiZnJvbVZlY3RvciIsInZlY3RvciIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJmcm9tRmxvYXQzMkFycmF5IiwiZmxvYXQzMkFycmF5IiwiQXJyYXkiLCJmcm9tIiwiVmVjdG9yIiwiaW5kZXhlcyIsInB1c2giLCJzb3J0IiwiaW5kZXhBIiwiaW5kZXhCIiwicHJvYmFiaWxpdHlBIiwicHJvYmFiaWxpdHlCIiwiZGlmZmVyZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NkRBTkY7c0JBRUk7d0JBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQUEsQUFBTUEsb0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFNBQVNGLE9BQU8sR0FBRztnQkFFekIsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQkMsZ0JBQWdCRixVQUFVLEdBQUc7Z0JBRW5DLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCQyxLQUFLO2dCQUNwQixJQUFNRixnQkFBZ0IsSUFBSSxDQUFDSCxnQkFBZ0IsSUFDckNNLGNBQWNILGFBQWEsQ0FBQ0UsTUFBTTtnQkFFeEMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxxQkFBcUIsQ0FBQ0M7Z0JBRTFCLElBQU1OLGdCQUFnQixJQUFJ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