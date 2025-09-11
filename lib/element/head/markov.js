"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return MarkovHead;
    }
});
var _head = /*#__PURE__*/ _interop_require_default(require("../head"));
var _weights = /*#__PURE__*/ _interop_require_default(require("../weights"));
var _json = require("../../utilities/json");
var _types = require("../../types");
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
var MarkovHead = /*#__PURE__*/ function(Head) {
    _inherits(MarkovHead, Head);
    function MarkovHead(weights) {
        _class_call_check(this, MarkovHead);
        var _this;
        _this = _call_super(this, MarkovHead);
        _this.weights = weights;
        return _this;
    }
    _create_class(MarkovHead, [
        {
            key: "getWeights",
            value: function getWeights() {
                return this.weights;
            }
        },
        {
            key: "train",
            value: function train(transition) {
                return this.weights.train(transition);
            }
        },
        {
            key: "forward",
            value: function forward(token, vocabulary) {
                var index = vocabulary.indexOfToken(token), row = index, frequencyVector = this.weights.getFrequencyVectorAtRow(row), column = frequencyVector.predict();
                if (column === null) {
                    token = null;
                } else {
                    var index1 = column; ///
                    token = vocabulary.getTokenAt(index1);
                }
                return token;
            }
        },
        {
            key: "initialise",
            value: function initialise(vocabulary) {
                var size = vocabulary.getSize();
                this.weights.initialise(size);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var weightsJSON = this.weights.toJSON(), type = _types.MARKOV_HEAD_TYPE, weights = weightsJSON, json = {
                    type: type,
                    weights: weights
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var markovHead = null;
                var type = json.type;
                if (type === _types.MARKOV_HEAD_TYPE) {
                    var weights = (0, _json.weightsFromJSON)(json);
                    markovHead = new MarkovHead(weights);
                }
                return markovHead;
            }
        },
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _Head;
                var weights = _weights.default.fromNothing(), markovHead = (_Head = _head.default).fromProperties.apply(_Head, [
                    MarkovHead,
                    properties,
                    weights
                ].concat(_to_consumable_array(remainingArguments)));
                return markovHead;
            }
        }
    ]);
    return MarkovHead;
}(_head.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2hlYWQvbWFya292LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vaGVhZFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL3dlaWdodHNcIjtcblxuaW1wb3J0IHsgd2VpZ2h0c0Zyb21KU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBNQVJLT1ZfSEVBRF9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtvdkhlYWQgZXh0ZW5kcyBIZWFkIHtcbiAgY29uc3RydWN0b3Iod2VpZ2h0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgZ2V0V2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHRzO1xuICB9XG5cbiAgdHJhaW4odHJhbnNpdGlvbikgeyByZXR1cm4gdGhpcy53ZWlnaHRzLnRyYWluKHRyYW5zaXRpb24pOyB9XG5cbiAgZm9yd2FyZCh0b2tlbiwgdm9jYWJ1bGFyeSkge1xuICAgIGNvbnN0IGluZGV4ID0gdm9jYWJ1bGFyeS5pbmRleE9mVG9rZW4odG9rZW4pLFxuICAgICAgICAgIHJvdyA9IGluZGV4LCAgLy8vXG4gICAgICAgICAgZnJlcXVlbmN5VmVjdG9yID0gdGhpcy53ZWlnaHRzLmdldEZyZXF1ZW5jeVZlY3RvckF0Um93KHJvdyksXG4gICAgICAgICAgY29sdW1uID0gZnJlcXVlbmN5VmVjdG9yLnByZWRpY3QoKTtcblxuICAgIGlmIChjb2x1bW4gPT09IG51bGwpIHtcbiAgICAgIHRva2VuID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5kZXggPSBjb2x1bW47IC8vL1xuXG4gICAgICB0b2tlbiA9IHZvY2FidWxhcnkuZ2V0VG9rZW5BdChpbmRleCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgaW5pdGlhbGlzZSh2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3Qgc2l6ZSA9IHZvY2FidWxhcnkuZ2V0U2l6ZSgpO1xuXG4gICAgdGhpcy53ZWlnaHRzLmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgd2VpZ2h0c0pTT04gPSB0aGlzLndlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdHlwZSA9IE1BUktPVl9IRUFEX1RZUEUsXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIHdlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBtYXJrb3ZIZWFkID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGlmICh0eXBlID09PSBNQVJLT1ZfSEVBRF9UWVBFKSB7XG4gICAgICBjb25zdCB3ZWlnaHRzID0gd2VpZ2h0c0Zyb21KU09OKGpzb24pO1xuXG4gICAgICBtYXJrb3ZIZWFkID0gbmV3IE1hcmtvdkhlYWQod2VpZ2h0cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtvdkhlYWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3Qgd2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBtYXJrb3ZIZWFkID0gSGVhZC5mcm9tUHJvcGVydGllcyhNYXJrb3ZIZWFkLCBwcm9wZXJ0aWVzLCB3ZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIG1hcmtvdkhlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNYXJrb3ZIZWFkIiwid2VpZ2h0cyIsImdldFdlaWdodHMiLCJ0cmFpbiIsInRyYW5zaXRpb24iLCJmb3J3YXJkIiwidG9rZW4iLCJ2b2NhYnVsYXJ5IiwiaW5kZXgiLCJpbmRleE9mVG9rZW4iLCJyb3ciLCJmcmVxdWVuY3lWZWN0b3IiLCJnZXRGcmVxdWVuY3lWZWN0b3JBdFJvdyIsImNvbHVtbiIsInByZWRpY3QiLCJnZXRUb2tlbkF0IiwiaW5pdGlhbGlzZSIsInNpemUiLCJnZXRTaXplIiwidG9KU09OIiwid2VpZ2h0c0pTT04iLCJ0eXBlIiwiTUFSS09WX0hFQURfVFlQRSIsImpzb24iLCJmcm9tSlNPTiIsIm1hcmtvdkhlYWQiLCJ3ZWlnaHRzRnJvbUpTT04iLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJIZWFkIiwiV2VpZ2h0cyIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7OzsyREFOSjs4REFDRztvQkFFWTtxQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNQSwyQkFBTjtjQUFNQTthQUFBQSxXQUNQQyxPQUFPO2dDQURBRDs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0MsT0FBTyxHQUFHQTs7O2tCQUpFRDs7WUFPbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsT0FBTztZQUNyQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxVQUFVO2dCQUFJLE9BQU8sSUFBSSxDQUFDSCxPQUFPLENBQUNFLEtBQUssQ0FBQ0M7WUFBYTs7O1lBRTNEQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsS0FBSyxFQUFFQyxVQUFVO2dCQUN2QixJQUFNQyxRQUFRRCxXQUFXRSxZQUFZLENBQUNILFFBQ2hDSSxNQUFNRixPQUNORyxrQkFBa0IsSUFBSSxDQUFDVixPQUFPLENBQUNXLHVCQUF1QixDQUFDRixNQUN2REcsU0FBU0YsZ0JBQWdCRyxPQUFPO2dCQUV0QyxJQUFJRCxXQUFXLE1BQU07b0JBQ25CUCxRQUFRO2dCQUNWLE9BQU87b0JBQ0wsSUFBTUUsU0FBUUssUUFBUSxHQUFHO29CQUV6QlAsUUFBUUMsV0FBV1EsVUFBVSxDQUFDUDtnQkFDaEM7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXVCxVQUFVO2dCQUNuQixJQUFNVSxPQUFPVixXQUFXVyxPQUFPO2dCQUUvQixJQUFJLENBQUNqQixPQUFPLENBQUNlLFVBQVUsQ0FBQ0M7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsY0FBYyxJQUFJLENBQUNuQixPQUFPLENBQUNrQixNQUFNLElBQ2pDRSxPQUFPQyx1QkFBZ0IsRUFDdkJyQixVQUFVbUIsYUFDVkcsT0FBTztvQkFDTEYsTUFBQUE7b0JBQ0FwQixTQUFBQTtnQkFDRjtnQkFFTixPQUFPc0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJO2dCQUNsQixJQUFJRSxhQUFhO2dCQUVqQixJQUFNLEFBQUVKLE9BQVNFLEtBQVRGO2dCQUVSLElBQUlBLFNBQVNDLHVCQUFnQixFQUFFO29CQUM3QixJQUFNckIsVUFBVXlCLElBQUFBLHFCQUFlLEVBQUNIO29CQUVoQ0UsYUFBYSxJQXhERXpCLFdBd0RhQztnQkFDOUI7Z0JBRUEsT0FBT3dCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBRWxDQztnQkFEbkIsSUFBTTdCLFVBQVU4QixnQkFBTyxDQUFDQyxXQUFXLElBQzdCUCxhQUFhSyxDQUFBQSxRQUFBQSxhQUFJLEVBQUNILGNBQWMsT0FBbkJHLE9BQUFBO29CQWhFRjlCO29CQWdFa0M0QjtvQkFBWTNCO2lCQUErQixDQUEzRTZCLE9BQXFELHFCQUFHRDtnQkFFM0UsT0FBT0o7WUFDVDs7O1dBbkVtQnpCO0VBQW1COEIsYUFBSSJ9