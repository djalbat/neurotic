"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AttentionHead;
    }
});
var _head = /*#__PURE__*/ _interop_require_default(require("../head"));
var _weights = /*#__PURE__*/ _interop_require_default(require("../weights"));
var _types = require("../../types");
var _json = require("../../utilities/json");
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
var AttentionHead = /*#__PURE__*/ function(Head) {
    _inherits(AttentionHead, Head);
    function AttentionHead(qWeights, kWeights, vWeights) {
        _class_call_check(this, AttentionHead);
        var _this;
        _this = _call_super(this, AttentionHead);
        _this.qWeights = qWeights;
        _this.kWeights = kWeights;
        _this.vWeights = vWeights;
        return _this;
    }
    _create_class(AttentionHead, [
        {
            key: "getQWeights",
            value: function getQWeights() {
                return this.qWeights;
            }
        },
        {
            key: "getKWeights",
            value: function getKWeights() {
                return this.kWeights;
            }
        },
        {
            key: "getVWeights",
            value: function getVWeights() {
                return this.vWeights;
            }
        },
        {
            key: "train",
            value: function train(transition) {
                debugger;
            }
        },
        {
            key: "forward",
            value: function forward(token, vocabulary) {
                var index = vocabulary.indexOfToken(token);
                debugger;
                return token;
            }
        },
        {
            key: "initialise",
            value: function initialise(vocabulary) {
                var size = vocabulary.getSize();
                this.qWeights.initialise(size);
                this.kWeights.initialise(size);
                this.vWeights.initialise(size);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var qWeightsJSON = this.qWeights.toJSON(), kWeightsJSON = this.kWeights.toJSON(), vWeightsJSON = this.vWeights.toJSON(), type = _types.ATTENTION_HEAD_TYPE, qWeights = qWeightsJSON, kWeights = kWeightsJSON, vWeights = vWeightsJSON, json = {
                    type: type,
                    qWeights: qWeights,
                    kWeights: kWeights,
                    vWeights: vWeights
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var attentionHead = null;
                var type = json.type;
                if (type === _types.ATTENTION_HEAD_TYPE) {
                    var qWeights = (0, _json.qWeightsFromJSON)(json), kWeights = (0, _json.kWeightsFromJSON)(json), vWeights = (0, _json.vWeightsFromJSON)(json);
                    attentionHead = new AttentionHead(qWeights, kWeights, vWeights);
                }
                return attentionHead;
            }
        },
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _Head;
                var qWeights = _weights.default.fromNothing(), kWeights = _weights.default.fromNothing(), vWeights = _weights.default.fromNothing(), attentionHead = (_Head = _head.default).fromProperties.apply(_Head, [
                    AttentionHead,
                    properties,
                    qWeights,
                    kWeights,
                    vWeights
                ].concat(_to_consumable_array(remainingArguments)));
                return attentionHead;
            }
        }
    ]);
    return AttentionHead;
}(_head.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2hlYWQvYXR0ZW50aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vaGVhZFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL3dlaWdodHNcIjtcblxuaW1wb3J0IHsgQVRURU5USU9OX0hFQURfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcVdlaWdodHNGcm9tSlNPTiwga1dlaWdodHNGcm9tSlNPTiwgdldlaWdodHNGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRlbnRpb25IZWFkIGV4dGVuZHMgSGVhZCB7XG4gIGNvbnN0cnVjdG9yKHFXZWlnaHRzLCBrV2VpZ2h0cywgdldlaWdodHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5xV2VpZ2h0cyA9IHFXZWlnaHRzO1xuICAgIHRoaXMua1dlaWdodHMgPSBrV2VpZ2h0cztcbiAgICB0aGlzLnZXZWlnaHRzID0gdldlaWdodHM7XG4gIH1cblxuICBnZXRRV2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy5xV2VpZ2h0cztcbiAgfVxuXG4gIGdldEtXZWlnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLmtXZWlnaHRzO1xuICB9XG5cbiAgZ2V0VldlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudldlaWdodHM7XG4gIH1cblxuICB0cmFpbih0cmFuc2l0aW9uKSB7XG5cbiAgICBkZWJ1Z2dlclxuXG4gIH1cblxuICBmb3J3YXJkKHRva2VuLCB2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3QgaW5kZXggPSB2b2NhYnVsYXJ5LmluZGV4T2ZUb2tlbih0b2tlbik7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgaW5pdGlhbGlzZSh2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3Qgc2l6ZSA9IHZvY2FidWxhcnkuZ2V0U2l6ZSgpO1xuXG4gICAgdGhpcy5xV2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICAgIHRoaXMua1dlaWdodHMuaW5pdGlhbGlzZShzaXplKTtcbiAgICB0aGlzLnZXZWlnaHRzLmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcVdlaWdodHNKU09OID0gdGhpcy5xV2VpZ2h0cy50b0pTT04oKSxcbiAgICAgICAgICBrV2VpZ2h0c0pTT04gPSB0aGlzLmtXZWlnaHRzLnRvSlNPTigpLFxuICAgICAgICAgIHZXZWlnaHRzSlNPTiA9IHRoaXMudldlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdHlwZSA9IEFUVEVOVElPTl9IRUFEX1RZUEUsXG4gICAgICAgICAgcVdlaWdodHMgPSBxV2VpZ2h0c0pTT04sIC8vL1xuICAgICAgICAgIGtXZWlnaHRzID0ga1dlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICB2V2VpZ2h0cyA9IHZXZWlnaHRzSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBxV2VpZ2h0cyxcbiAgICAgICAgICAgIGtXZWlnaHRzLFxuICAgICAgICAgICAgdldlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBhdHRlbnRpb25IZWFkID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGlmICh0eXBlID09PSBBVFRFTlRJT05fSEVBRF9UWVBFKSB7XG4gICAgICBjb25zdCBxV2VpZ2h0cyA9IHFXZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBrV2VpZ2h0cyA9IGtXZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICB2V2VpZ2h0cyA9IHZXZWlnaHRzRnJvbUpTT04oanNvbik7XG5cbiAgICAgIGF0dGVudGlvbkhlYWQgPSBuZXcgQXR0ZW50aW9uSGVhZChxV2VpZ2h0cywga1dlaWdodHMsIHZXZWlnaHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0ZW50aW9uSGVhZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBxV2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBrV2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB2V2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBhdHRlbnRpb25IZWFkID0gSGVhZC5mcm9tUHJvcGVydGllcyhBdHRlbnRpb25IZWFkLCBwcm9wZXJ0aWVzLCBxV2VpZ2h0cywga1dlaWdodHMsIHZXZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dGVudGlvbkhlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBdHRlbnRpb25IZWFkIiwicVdlaWdodHMiLCJrV2VpZ2h0cyIsInZXZWlnaHRzIiwiZ2V0UVdlaWdodHMiLCJnZXRLV2VpZ2h0cyIsImdldFZXZWlnaHRzIiwidHJhaW4iLCJ0cmFuc2l0aW9uIiwiZm9yd2FyZCIsInRva2VuIiwidm9jYWJ1bGFyeSIsImluZGV4IiwiaW5kZXhPZlRva2VuIiwiaW5pdGlhbGlzZSIsInNpemUiLCJnZXRTaXplIiwidG9KU09OIiwicVdlaWdodHNKU09OIiwia1dlaWdodHNKU09OIiwidldlaWdodHNKU09OIiwidHlwZSIsIkFUVEVOVElPTl9IRUFEX1RZUEUiLCJqc29uIiwiZnJvbUpTT04iLCJhdHRlbnRpb25IZWFkIiwicVdlaWdodHNGcm9tSlNPTiIsImtXZWlnaHRzRnJvbUpTT04iLCJ2V2VpZ2h0c0Zyb21KU09OIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiSGVhZCIsIldlaWdodHMiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7MkRBTko7OERBQ0c7cUJBRWdCO29CQUNpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEQsSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQSxjQUNQQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsUUFBUTtnQ0FEckJIOztnQkFFakIsa0JBRmlCQTtRQUlqQixNQUFLQyxRQUFRLEdBQUdBO1FBQ2hCLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsUUFBUSxHQUFHQTs7O2tCQU5DSDs7WUFTbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxVQUFVO2dCQUVkLFFBQVE7WUFFVjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxLQUFLLEVBQUVDLFVBQVU7Z0JBQ3ZCLElBQU1DLFFBQVFELFdBQVdFLFlBQVksQ0FBQ0g7Z0JBRXRDLFFBQVE7Z0JBRVIsT0FBT0E7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXSCxVQUFVO2dCQUNuQixJQUFNSSxPQUFPSixXQUFXSyxPQUFPO2dCQUUvQixJQUFJLENBQUNmLFFBQVEsQ0FBQ2EsVUFBVSxDQUFDQztnQkFDekIsSUFBSSxDQUFDYixRQUFRLENBQUNZLFVBQVUsQ0FBQ0M7Z0JBQ3pCLElBQUksQ0FBQ1osUUFBUSxDQUFDVyxVQUFVLENBQUNDO1lBQzNCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDakIsUUFBUSxDQUFDZ0IsTUFBTSxJQUNuQ0UsZUFBZSxJQUFJLENBQUNqQixRQUFRLENBQUNlLE1BQU0sSUFDbkNHLGVBQWUsSUFBSSxDQUFDakIsUUFBUSxDQUFDYyxNQUFNLElBQ25DSSxPQUFPQywwQkFBbUIsRUFDMUJyQixXQUFXaUIsY0FDWGhCLFdBQVdpQixjQUNYaEIsV0FBV2lCLGNBQ1hHLE9BQU87b0JBQ0xGLE1BQUFBO29CQUNBcEIsVUFBQUE7b0JBQ0FDLFVBQUFBO29CQUNBQyxVQUFBQTtnQkFDRjtnQkFFTixPQUFPb0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJO2dCQUNsQixJQUFJRSxnQkFBZ0I7Z0JBRXBCLElBQU0sQUFBRUosT0FBU0UsS0FBVEY7Z0JBRVIsSUFBSUEsU0FBU0MsMEJBQW1CLEVBQUU7b0JBQ2hDLElBQU1yQixXQUFXeUIsSUFBQUEsc0JBQWdCLEVBQUNILE9BQzVCckIsV0FBV3lCLElBQUFBLHNCQUFnQixFQUFDSixPQUM1QnBCLFdBQVd5QixJQUFBQSxzQkFBZ0IsRUFBQ0w7b0JBRWxDRSxnQkFBZ0IsSUF2RUR6QixjQXVFbUJDLFVBQVVDLFVBQVVDO2dCQUN4RDtnQkFFQSxPQUFPc0I7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFJL0JDO2dCQUh0QixJQUFNL0IsV0FBV2dDLGdCQUFPLENBQUNDLFdBQVcsSUFDOUJoQyxXQUFXK0IsZ0JBQU8sQ0FBQ0MsV0FBVyxJQUM5Qi9CLFdBQVc4QixnQkFBTyxDQUFDQyxXQUFXLElBQzlCVCxnQkFBZ0JPLENBQUFBLFFBQUFBLGFBQUksRUFBQ0gsY0FBYyxPQUFuQkcsT0FBQUE7b0JBakZMaEM7b0JBaUZ3QzhCO29CQUFZN0I7b0JBQVVDO29CQUFVQztpQkFBZ0MsQ0FBbkc2QixPQUE2RSxxQkFBR0Q7Z0JBRXRHLE9BQU9OO1lBQ1Q7OztXQXBGbUJ6QjtFQUFzQmdDLGFBQUkifQ==