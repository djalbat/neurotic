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
var _vector = /*#__PURE__*/ _interop_require_wildcard(require("../vector"));
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
    function FrequencyVector(elements, count) {
        _class_call_check(this, FrequencyVector);
        var _this;
        _this = _call_super(this, FrequencyVector, [
            elements
        ]);
        _this.count = count;
        return _this;
    }
    _create_class(FrequencyVector, [
        {
            key: "getCount",
            value: function getCount() {
                return this.count;
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
            key: "getFrequencyAt",
            value: function getFrequencyAt(index) {
                var element = this.getElementAt(index), frequency = element; ///
                return frequency;
            }
        },
        {
            key: "setFrequencyAt",
            value: function setFrequencyAt(index, frequency) {
                var element = frequency; ///
                this.setElementAt(index, element);
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
            key: "isEmpty",
            value: function isEmpty() {
                var empty = this.count === 1;
                return empty;
            }
        },
        {
            key: "train",
            value: function train(row) {
                var index = row; ///
                var frequency = this.getFrequencyAt(index);
                frequency++;
                this.count++;
                this.setFrequencyAt(index, frequency);
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
            key: "predict",
            value: function predict() {
                var column = null;
                var empty = this.isEmpty();
                if (!empty) {
                    var index = this.sample();
                    column = index; ///
                }
                return column;
            }
        },
        {
            key: "asString",
            value: function asString() {
                var elements = this.getElements(), elementsString = (0, _vector.elementsAsElementsString)(elements), string = "[ ".concat(this.count, ": ").concat(elementsString, " ]");
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var elements = this.getElements(), count = this.count, json = {
                    elements: elements,
                    count: count
                };
                return json;
            }
        }
    ], [
        {
            key: "fromSize",
            value: function fromSize(size) {
                var count = 1, element = 0, elements = [];
                for(var index = 0; index < size; index++){
                    elements.push(element);
                }
                var frequencyVector = new FrequencyVector(elements, count);
                return frequencyVector;
            }
        },
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var elements = json.elements, count = json.count, frequencyVector = new FrequencyVector(elements, count);
                return frequencyVector;
            }
        }
    ]);
    return FrequencyVector;
}(_vector.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3IvZnJlcXVlbmN5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi92ZWN0b3JcIjtcblxuaW1wb3J0IHsgcmFuZG9tIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9yYW5kb21cIjtcbmltcG9ydCB7IGVsZW1lbnRzQXNFbGVtZW50c1N0cmluZyB9IGZyb20gXCIuLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnJlcXVlbmN5VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMsIGNvdW50KSB7XG4gICAgc3VwZXIoZWxlbWVudHMpO1xuXG4gICAgdGhpcy5jb3VudCA9IGNvdW50O1xuICB9XG5cbiAgZ2V0Q291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgY29uc3Qgd2lkdGggPSB0aGlzLmdldFdpZHRoKCksXG4gICAgICAgICAgbGVuZ3RoID0gd2lkdGg7XG5cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmNpZXMoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgZnJlcXVlbmNpZXMgPSBlbGVtZW50czsgIC8vL1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jaWVzO1xuICB9XG5cbiAgZ2V0RnJlcXVlbmN5QXQoaW5kZXgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5nZXRFbGVtZW50QXQoaW5kZXgpLFxuICAgICAgICAgIGZyZXF1ZW5jeSA9IGVsZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBmcmVxdWVuY3k7XG4gIH1cblxuICBzZXRGcmVxdWVuY3lBdChpbmRleCwgZnJlcXVlbmN5KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZyZXF1ZW5jeTsgIC8vL1xuXG4gICAgdGhpcy5zZXRFbGVtZW50QXQoaW5kZXgsIGVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0VG90YWxGcmVxdWVuY3koKSB7XG4gICAgY29uc3QgZnJlcXVlbmNpZXMgPSB0aGlzLmdldEZyZXF1ZW5jaWVzKCksXG4gICAgICAgICAgdG90YWxGcmVxdWVuY3kgPSBmcmVxdWVuY2llcy5yZWR1Y2UoKHRvdGFsRnJlcXVlbmN5LCBmcmVxdWVuY3kpID0+IHtcbiAgICAgICAgICAgIHRvdGFsRnJlcXVlbmN5ICs9IGZyZXF1ZW5jeTtcblxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsRnJlcXVlbmN5O1xuICAgICAgICAgIH0sIDApO1xuXG4gICAgcmV0dXJuIHRvdGFsRnJlcXVlbmN5O1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICBjb25zdCBlbXB0eSA9ICh0aGlzLmNvdW50ID09PSAxKTtcblxuICAgIHJldHVybiBlbXB0eTtcbiAgfVxuXG4gIHRyYWluKHJvdykge1xuICAgIGNvbnN0IGluZGV4ID0gcm93OyAgLy8vXG5cbiAgICBsZXQgZnJlcXVlbmN5ID0gdGhpcy5nZXRGcmVxdWVuY3lBdChpbmRleCk7XG5cbiAgICBmcmVxdWVuY3krKztcblxuICAgIHRoaXMuY291bnQrKztcblxuICAgIHRoaXMuc2V0RnJlcXVlbmN5QXQoaW5kZXgsIGZyZXF1ZW5jeSk7XG4gIH1cblxuICBzYW1wbGUoKSB7XG4gICAgY29uc3QgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKSxcbiAgICAgICAgICBmcmVxdWVuY2llcyA9IHRoaXMuZ2V0RnJlcXVlbmNpZXMoKSxcbiAgICAgICAgICB0b3RhbEZyZXF1ZW5jeSA9IHRoaXMuZ2V0VG90YWxGcmVxdWVuY3koKSxcbiAgICAgICAgICBsb3dlckJvdW5kID0gMCxcbiAgICAgICAgICB1cHBlckJvdW5kID0gdG90YWxGcmVxdWVuY3ksICAvLy9cbiAgICAgICAgICByYW5kb21BY2N1bXVsYXRlZEZyZXF1ZW5jeSA9IHJhbmRvbShsb3dlckJvdW5kLCB1cHBlckJvdW5kKTtcblxuICAgIGxldCBpbmRleCxcbiAgICAgICAgYWNjdW11bGF0ZWRGcmVxdWVuY3kgPSAwO1xuXG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBmcmVxdWVuY3kgPSBmcmVxdWVuY2llc1tpbmRleF07XG5cbiAgICAgIGFjY3VtdWxhdGVkRnJlcXVlbmN5ICs9IGZyZXF1ZW5jeTtcblxuICAgICAgaWYgKHJhbmRvbUFjY3VtdWxhdGVkRnJlcXVlbmN5IDwgYWNjdW11bGF0ZWRGcmVxdWVuY3kpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgcHJlZGljdCgpIHtcbiAgICBsZXQgY29sdW1uID0gbnVsbDtcblxuICAgIGNvbnN0IGVtcHR5ID0gdGhpcy5pc0VtcHR5KCk7XG5cbiAgICBpZiAoIWVtcHR5KSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2FtcGxlKCk7XG5cbiAgICAgIGNvbHVtbiA9IGluZGV4OyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1uO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCksXG4gICAgICAgICAgZWxlbWVudHNTdHJpbmcgPSBlbGVtZW50c0FzRWxlbWVudHNTdHJpbmcoZWxlbWVudHMpLFxuICAgICAgICAgIHN0cmluZyA9IGBbICR7dGhpcy5jb3VudH06ICR7ZWxlbWVudHNTdHJpbmd9IF1gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHMoKSxcbiAgICAgICAgICBjb3VudCA9IHRoaXMuY291bnQsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGVsZW1lbnRzLFxuICAgICAgICAgICAgY291bnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVNpemUoc2l6ZSkge1xuICAgIGNvbnN0IGNvdW50ID0gMSxcbiAgICAgICAgICBlbGVtZW50ID0gMCxcbiAgICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHNpemU7IGluZGV4KyspIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3QgZnJlcXVlbmN5VmVjdG9yID0gbmV3IEZyZXF1ZW5jeVZlY3RvcihlbGVtZW50cywgY291bnQpO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyBlbGVtZW50cywgY291bnQgfSA9IGpzb24sXG4gICAgICAgICAgZnJlcXVlbmN5VmVjdG9yID0gbmV3IEZyZXF1ZW5jeVZlY3RvcihlbGVtZW50cywgY291bnQpO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZyZXF1ZW5jeVZlY3RvciIsImVsZW1lbnRzIiwiY291bnQiLCJnZXRDb3VudCIsImdldExlbmd0aCIsIndpZHRoIiwiZ2V0V2lkdGgiLCJsZW5ndGgiLCJnZXRGcmVxdWVuY2llcyIsImdldEVsZW1lbnRzIiwiZnJlcXVlbmNpZXMiLCJnZXRGcmVxdWVuY3lBdCIsImluZGV4IiwiZWxlbWVudCIsImdldEVsZW1lbnRBdCIsImZyZXF1ZW5jeSIsInNldEZyZXF1ZW5jeUF0Iiwic2V0RWxlbWVudEF0IiwiZ2V0VG90YWxGcmVxdWVuY3kiLCJ0b3RhbEZyZXF1ZW5jeSIsInJlZHVjZSIsImlzRW1wdHkiLCJlbXB0eSIsInRyYWluIiwicm93Iiwic2FtcGxlIiwibG93ZXJCb3VuZCIsInVwcGVyQm91bmQiLCJyYW5kb21BY2N1bXVsYXRlZEZyZXF1ZW5jeSIsInJhbmRvbSIsImFjY3VtdWxhdGVkRnJlcXVlbmN5IiwicHJlZGljdCIsImNvbHVtbiIsImFzU3RyaW5nIiwiZWxlbWVudHNTdHJpbmciLCJlbGVtZW50c0FzRWxlbWVudHNTdHJpbmciLCJzdHJpbmciLCJ0b0pTT04iLCJqc29uIiwiZnJvbVNpemUiLCJzaXplIiwicHVzaCIsImZyZXF1ZW5jeVZlY3RvciIsImZyb21KU09OIiwiVmVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7Ozs4REFMRjtzQkFFSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdSLElBQUEsQUFBTUEsZ0NBQU47Y0FBTUE7YUFBQUEsZ0JBQ1BDLFFBQVEsRUFBRUMsS0FBSztnQ0FEUkY7O2dCQUVqQixrQkFGaUJBO1lBRVhDOztRQUVOLE1BQUtDLEtBQUssR0FBR0E7OztrQkFKSUY7O1lBT25CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELEtBQUs7WUFDbkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsUUFBUSxJQUFJLENBQUNDLFFBQVEsSUFDckJDLFNBQVNGO2dCQUVmLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVAsV0FBVyxJQUFJLENBQUNRLFdBQVcsSUFDM0JDLGNBQWNULFVBQVcsR0FBRztnQkFFbEMsT0FBT1M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxLQUFLO2dCQUNsQixJQUFNQyxVQUFVLElBQUksQ0FBQ0MsWUFBWSxDQUFDRixRQUM1QkcsWUFBWUYsU0FBVSxHQUFHO2dCQUUvQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVKLEtBQUssRUFBRUcsU0FBUztnQkFDN0IsSUFBTUYsVUFBVUUsV0FBWSxHQUFHO2dCQUUvQixJQUFJ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