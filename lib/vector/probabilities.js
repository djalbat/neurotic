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
            key: "getProbabilities",
            value: function getProbabilities() {
                var elements = this.getElements(), probabilities = elements; ///
                return probabilities;
            }
        },
        {
            key: "probabilityAt",
            value: function probabilityAt(index) {
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
                var cutoff = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_CUTOFF, temperature = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_TEMPERATURE;
                var lowerBound = 0, upperBound = 1 - cutoff, number = (0, _random.random)(lowerBound, upperBound);
                var probabilities;
                probabilities = this.getProbabilities();
                probabilities = sharpenProbabilities(probabilities, temperature);
                var length = probabilities.length, sortedIndexes = sortIndexes(probabilities);
                var sortedIndex, accumulatedProbability = 0;
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
                var cutoff = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_CUTOFF, threshold = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_THRESHOLD, temperature = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_TEMPERATURE;
                var normalisedEntropy = this.normalisedEntropy(), index = normalisedEntropy < threshold ? this.sample(cutoff, temperature) : null;
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
function sortProbabilities(probabilities) {
    probabilities = _to_consumable_array(probabilities);
    probabilities.sort();
    probabilities.reverse();
    return probabilities;
}
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
function sharpenProbabilities(probabilities, temperature) {
    var power = 1 / temperature, transformedProbabilities = probabilities.map(function(probability) {
        var transformedProbability = Math.pow(probability, power);
        return transformedProbability;
    }), totalTransformedProbabilities = transformedProbabilities.reduce(function(totalTransformedProbabilities, probability) {
        totalTransformedProbabilities = totalTransformedProbabilities + probability;
        return totalTransformedProbabilities;
    }, 0);
    probabilities = transformedProbabilities.map(function(transformedProbability) {
        var probability = transformedProbability / totalTransformedProbabilities;
        return probability;
    });
    return probabilities;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3IvcHJvYmFiaWxpdGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZlY3RvciBmcm9tIFwiLi4vdmVjdG9yXCI7XG5cbmltcG9ydCB7IHJhbmRvbSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcmFuZG9tXCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ1VUT0ZGLCBERUZBVUxUX1RIUkVTSE9MRCwgREVGQVVMVF9URU1QRVJBVFVSRSB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9iYWJpbGl0aWVzVmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcbiAgZ2V0UHJvYmFiaWxpdGllcygpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHMoKSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzID0gZWxlbWVudHM7IC8vL1xuXG4gICAgcmV0dXJuIHByb2JhYmlsaXRpZXM7XG4gIH1cblxuICBwcm9iYWJpbGl0eUF0KGluZGV4KSB7XG4gICAgY29uc3QgcHJvYmFiaWxpdGllcyA9IHRoaXMuZ2V0UHJvYmFiaWxpdGllcygpLFxuICAgICAgICAgIHByb2JhYmlsaXR5ID0gcHJvYmFiaWxpdGllc1tpbmRleF07XG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdHk7XG4gIH1cblxuICBhcmdtYXgoKSB7XG4gICAgbGV0IG1heGltdW1Qcm9iYWJpbGl0eSA9IC1JbmZpbml0eVxuXG4gICAgY29uc3QgcHJvYmFiaWxpdGllcyA9IHRoaXMuZ2V0UHJvYmFiaWxpdGllcygpLFxuICAgICAgICAgIGFyZ21heCA9IHByb2JhYmlsaXRpZXMucmVkdWNlKChhcmdtYXgsIHByb2JhYmlsaXR5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2JhYmlsaXR5ID4gbWF4aW11bVByb2JhYmlsaXR5KSB7XG4gICAgICAgICAgICAgIG1heGltdW1Qcm9iYWJpbGl0eSA9IHByb2JhYmlsaXR5OyAvLy9cblxuICAgICAgICAgICAgICBhcmdtYXggPSBpbmRleDsgLy8vXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBhcmdtYXg7XG4gICAgICAgICAgfSwgLTEpO1xuXG4gICAgcmV0dXJuIGFyZ21heDtcbiAgfVxuXG4gIHNhbXBsZShjdXRvZmYgPSBERUZBVUxUX0NVVE9GRiwgdGVtcGVyYXR1cmUgPSBERUZBVUxUX1RFTVBFUkFUVVJFKSB7XG4gICAgY29uc3QgbG93ZXJCb3VuZCAgPSAwLFxuICAgICAgICAgIHVwcGVyQm91bmQgPSAxIC0gY3V0b2ZmLFxuICAgICAgICAgIG51bWJlciA9IHJhbmRvbShsb3dlckJvdW5kLCB1cHBlckJvdW5kKTtcblxuICAgIGxldCBwcm9iYWJpbGl0aWVzO1xuXG4gICAgcHJvYmFiaWxpdGllcyA9IHRoaXMuZ2V0UHJvYmFiaWxpdGllcygpO1xuXG4gICAgcHJvYmFiaWxpdGllcyA9IHNoYXJwZW5Qcm9iYWJpbGl0aWVzKHByb2JhYmlsaXRpZXMsIHRlbXBlcmF0dXJlKTtcblxuICAgIGNvbnN0IGxlbmd0aCA9IHByb2JhYmlsaXRpZXMubGVuZ3RoLFxuICAgICAgICAgIHNvcnRlZEluZGV4ZXMgPSBzb3J0SW5kZXhlcyhwcm9iYWJpbGl0aWVzKTtcblxuICAgIGxldCBzb3J0ZWRJbmRleCxcbiAgICAgICAgYWNjdW11bGF0ZWRQcm9iYWJpbGl0eSA9IDA7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBzb3J0ZWRJbmRleCA9IHNvcnRlZEluZGV4ZXNbaW5kZXhdO1xuXG4gICAgICBjb25zdCBwcm9iYWJpbGl0eSA9IHByb2JhYmlsaXRpZXNbc29ydGVkSW5kZXhdO1xuXG4gICAgICBhY2N1bXVsYXRlZFByb2JhYmlsaXR5ICs9IHByb2JhYmlsaXR5O1xuXG4gICAgICBpZiAobnVtYmVyIDwgYWNjdW11bGF0ZWRQcm9iYWJpbGl0eSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBpbmRleCA9IHNvcnRlZEluZGV4OyAgLy8vXG5cbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBlbnRyb3B5KCkge1xuICAgIGNvbnN0IHByb2JhYmlsaXRpZXMgPSB0aGlzLmdldFByb2JhYmlsaXRpZXMoKSxcbiAgICAgICAgICBlbnRyb3B5ID0gcHJvYmFiaWxpdGllcy5yZWR1Y2UoKGVudHJvcHksIHByb2JhYmlsaXR5KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvYmFiaWxpdHkgPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGluZm9ybWF0aW9uID0gTWF0aC5sb2cyKHByb2JhYmlsaXR5KTtcblxuICAgICAgICAgICAgICBlbnRyb3B5ID0gZW50cm9weSAtIChwcm9iYWJpbGl0eSAqIGluZm9ybWF0aW9uKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJvcHk7XG4gICAgICAgICAgfSwgMCk7XG5cbiAgICByZXR1cm4gZW50cm9weTtcbiAgfVxuXG4gIG1heGltdW1FbnRyb3B5KCkge1xuICAgIGNvbnN0IHdpZHRoID0gdGhpcy5nZXRXaWR0aCgpLFxuICAgICAgICAgIG1heGltdW1FbnRyb3B5ID0gTWF0aC5sb2cyKHdpZHRoKTtcblxuICAgIHJldHVybiBtYXhpbXVtRW50cm9weTtcbiAgfVxuXG4gIG5vcm1hbGlzZWRFbnRyb3B5KCkge1xuICAgIGNvbnN0IGVudHJvcHkgPSB0aGlzLmVudHJvcHkoKSxcbiAgICAgICAgICBtYXhpbXVtRW50cm9weSA9IHRoaXMubWF4aW11bUVudHJvcHkoKSxcbiAgICAgICAgICBub3JtYWxpc2VkRUVudHJvcHkgPSAoZW50cm9weSAvIG1heGltdW1FbnRyb3B5KTtcblxuICAgIHJldHVybiBub3JtYWxpc2VkRUVudHJvcHk7XG4gIH1cblxuICBtYXhpbXVtUHJvYmFiaWxpdHkoKSB7XG4gICAgbGV0IG1heGltdW1Qcm9iYWJpbGl0eSA9IC1JbmZpbml0eTtcblxuICAgIGNvbnN0IHByb2JhYmlsaXRpZXMgPSB0aGlzLmdldFByb2JhYmlsaXRpZXMoKTtcblxuICAgIHByb2JhYmlsaXRpZXMuZm9yRWFjaCgocHJvYmFiaWxpdHkpID0+IHtcbiAgICAgIGlmIChwcm9iYWJpbGl0eSA+IG1heGltdW1Qcm9iYWJpbGl0eSkge1xuICAgICAgICBtYXhpbXVtUHJvYmFiaWxpdHkgPSBwcm9iYWJpbGl0eTsgLy8vXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF4aW11bVByb2JhYmlsaXR5O1xuICB9XG5cbiAgcHJlZGljdEluZGV4KGN1dG9mZiA9IERFRkFVTFRfQ1VUT0ZGLCB0aHJlc2hvbGQgPSBERUZBVUxUX1RIUkVTSE9MRCwgdGVtcGVyYXR1cmUgPSBERUZBVUxUX1RFTVBFUkFUVVJFKSB7XG4gICAgY29uc3Qgbm9ybWFsaXNlZEVudHJvcHkgPSB0aGlzLm5vcm1hbGlzZWRFbnRyb3B5KCksXG4gICAgICAgICAgaW5kZXggPSAobm9ybWFsaXNlZEVudHJvcHkgPCB0aHJlc2hvbGQpID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2FtcGxlKGN1dG9mZiwgdGVtcGVyYXR1cmUpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmVjdG9yKHZlY3Rvcikge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdmVjdG9yLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvciA9IG5ldyBQcm9iYWJpbGl0aWVzVmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBwcm9iYWJpbGl0aWVzVmVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21GbG9hdDMyQXJyYXkoZmxvYXQzMkFycmF5KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKGZsb2F0MzJBcnJheSksICAvLy9cbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gbmV3IFByb2JhYmlsaXRpZXNWZWN0b3IoZWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIHByb2JhYmlsaXRpZXNWZWN0b3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydFByb2JhYmlsaXRpZXMocHJvYmFiaWxpdGllcykge1xuICBwcm9iYWJpbGl0aWVzID0gW1xuICAgIC4uLnByb2JhYmlsaXRpZXNcbiAgXTtcblxuICBwcm9iYWJpbGl0aWVzLnNvcnQoKTtcblxuICBwcm9iYWJpbGl0aWVzLnJldmVyc2UoKTtcblxuICByZXR1cm4gcHJvYmFiaWxpdGllcztcbn1cblxuZnVuY3Rpb24gc29ydEluZGV4ZXMocHJvYmFiaWxpdGllcykge1xuICBjb25zdCBpbmRleGVzID0gW10sXG4gICAgICAgIGxlbmd0aCA9IHByb2JhYmlsaXRpZXMubGVuZ3RoO1xuXG4gIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICBpbmRleGVzLnB1c2goaW5kZXgpO1xuICB9XG5cbiAgaW5kZXhlcy5zb3J0KChpbmRleEEsIGluZGV4QikgPT4ge1xuICAgIGNvbnN0IHByb2JhYmlsaXR5QSA9IHByb2JhYmlsaXRpZXNbaW5kZXhBXSxcbiAgICAgICAgICBwcm9iYWJpbGl0eUIgPSBwcm9iYWJpbGl0aWVzW2luZGV4Ql0sXG4gICAgICAgICAgZGlmZmVyZW5jZSA9IChwcm9iYWJpbGl0eUIgLSBwcm9iYWJpbGl0eUEpO1xuXG4gICAgcmV0dXJuIGRpZmZlcmVuY2U7XG4gIH0pO1xuXG4gIGNvbnN0IHNvcnRlZEluZGV4ZXMgPSBpbmRleGVzOyAgLy8vXG5cbiAgcmV0dXJuIHNvcnRlZEluZGV4ZXM7XG59XG5cbmZ1bmN0aW9uIHNoYXJwZW5Qcm9iYWJpbGl0aWVzKHByb2JhYmlsaXRpZXMsIHRlbXBlcmF0dXJlKSB7XG4gIGNvbnN0IHBvd2VyID0gMSAvIHRlbXBlcmF0dXJlLFxuICAgICAgICB0cmFuc2Zvcm1lZFByb2JhYmlsaXRpZXMgPSBwcm9iYWJpbGl0aWVzLm1hcCgocHJvYmFiaWxpdHkpID0+IHtcbiAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFByb2JhYmlsaXR5ID0gTWF0aC5wb3cocHJvYmFiaWxpdHksIHBvd2VyKTtcblxuICAgICAgICAgIHJldHVybiB0cmFuc2Zvcm1lZFByb2JhYmlsaXR5O1xuICAgICAgICB9KSxcbiAgICAgICAgdG90YWxUcmFuc2Zvcm1lZFByb2JhYmlsaXRpZXMgPSB0cmFuc2Zvcm1lZFByb2JhYmlsaXRpZXMucmVkdWNlKCh0b3RhbFRyYW5zZm9ybWVkUHJvYmFiaWxpdGllcywgcHJvYmFiaWxpdHkpID0+IHtcbiAgICAgICAgICB0b3RhbFRyYW5zZm9ybWVkUHJvYmFiaWxpdGllcyA9IHRvdGFsVHJhbnNmb3JtZWRQcm9iYWJpbGl0aWVzICsgcHJvYmFiaWxpdHk7XG5cbiAgICAgICAgICByZXR1cm4gdG90YWxUcmFuc2Zvcm1lZFByb2JhYmlsaXRpZXM7XG4gICAgICAgIH0sIDApO1xuXG4gIHByb2JhYmlsaXRpZXMgPSB0cmFuc2Zvcm1lZFByb2JhYmlsaXRpZXMubWFwKHRyYW5zZm9ybWVkUHJvYmFiaWxpdHkgPT4ge1xuICAgIGNvbnN0IHByb2JhYmlsaXR5ID0gKHRyYW5zZm9ybWVkUHJvYmFiaWxpdHkgLyB0b3RhbFRyYW5zZm9ybWVkUHJvYmFiaWxpdGllcyk7XG5cbiAgICByZXR1cm4gcHJvYmFiaWxpdHk7XG4gIH0pO1xuXG4gIHJldHVybiBwcm9iYWJpbGl0aWVzO1xufSJdLCJuYW1lcyI6WyJQcm9iYWJpbGl0aWVzVmVjdG9yIiwiZ2V0UHJvYmFiaWxpdGllcyIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJwcm9iYWJpbGl0aWVzIiwicHJvYmFiaWxpdHlBdCIsImluZGV4IiwicHJvYmFiaWxpdHkiLCJhcmdtYXgiLCJtYXhpbXVtUHJvYmFiaWxpdHkiLCJJbmZpbml0eSIsInJlZHVjZSIsInNhbXBsZSIsImN1dG9mZiIsIkRFRkFVTFRfQ1VUT0ZGIiwidGVtcGVyYXR1cmUiLCJERUZBVUxUX1RFTVBFUkFUVVJFIiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJudW1iZXIiLCJyYW5kb20iLCJzaGFycGVuUHJvYmFiaWxpdGllcyIsImxlbmd0aCIsInNvcnRlZEluZGV4ZXMiLCJzb3J0SW5kZXhlcyIsInNvcnRlZEluZGV4IiwiYWNjdW11bGF0ZWRQcm9iYWJpbGl0eSIsImVudHJvcHkiLCJpbmZvcm1hdGlvbiIsIk1hdGgiLCJsb2cyIiwibWF4aW11bUVudHJvcHkiLCJ3aWR0aCIsImdldFdpZHRoIiwibm9ybWFsaXNlZEVudHJvcHkiLCJub3JtYWxpc2VkRUVudHJvcHkiLCJmb3JFYWNoIiwicHJlZGljdEluZGV4IiwidGhyZXNob2xkIiwiREVGQVVMVF9USFJFU0hPTEQiLCJmcm9tVmVjdG9yIiwidmVjdG9yIiwicHJvYmFiaWxpdGllc1ZlY3RvciIsImZyb21GbG9hdDMyQXJyYXkiLCJmbG9hdDMyQXJyYXkiLCJBcnJheSIsImZyb20iLCJWZWN0b3IiLCJzb3J0UHJvYmFiaWxpdGllcyIsInNvcnQiLCJyZXZlcnNlIiwiaW5kZXhlcyIsInB1c2giLCJpbmRleEEiLCJpbmRleEIiLCJwcm9iYWJpbGl0eUEiLCJwcm9iYWJpbGl0eUIiLCJkaWZmZXJlbmNlIiwicG93ZXIiLCJ0cmFuc2Zvcm1lZFByb2JhYmlsaXRpZXMiLCJtYXAiLCJ0cmFuc2Zvcm1lZFByb2JhYmlsaXR5IiwicG93IiwidG90YWxUcmFuc2Zvcm1lZFByb2JhYmlsaXRpZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzZEQU5GO3NCQUVJO3dCQUVnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEQsSUFBQSxBQUFNQSxvQ0FBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtn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