"use strict";
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
import Head from "../head";
import Weights from "../weights";
import { ATTENTION_HEAD_TYPE } from "../../types";
import { qWeightsFromJSON, kWeightsFromJSON, vWeightsFromJSON } from "../../utilities/json";
var AttentionHead = /*#__PURE__*/ function(Head1) {
    _inherits(AttentionHead, Head1);
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
                var qWeightsJSON = this.qWeights.toJSON(), kWeightsJSON = this.kWeights.toJSON(), vWeightsJSON = this.vWeights.toJSON(), type = ATTENTION_HEAD_TYPE, qWeights = qWeightsJSON, kWeights = kWeightsJSON, vWeights = vWeightsJSON, json = {
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
                if (type === ATTENTION_HEAD_TYPE) {
                    var qWeights = qWeightsFromJSON(json), kWeights = kWeightsFromJSON(json), vWeights = vWeightsFromJSON(json);
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
                var qWeights = Weights.fromNothing(), kWeights = Weights.fromNothing(), vWeights = Weights.fromNothing(), attentionHead = (_Head = Head).fromProperties.apply(_Head, [
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
}(Head);
export { AttentionHead as default };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2hlYWQvYXR0ZW50aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vaGVhZFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL3dlaWdodHNcIjtcblxuaW1wb3J0IHsgQVRURU5USU9OX0hFQURfVFlQRSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgcVdlaWdodHNGcm9tSlNPTiwga1dlaWdodHNGcm9tSlNPTiwgdldlaWdodHNGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdHRlbnRpb25IZWFkIGV4dGVuZHMgSGVhZCB7XG4gIGNvbnN0cnVjdG9yKHFXZWlnaHRzLCBrV2VpZ2h0cywgdldlaWdodHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5xV2VpZ2h0cyA9IHFXZWlnaHRzO1xuICAgIHRoaXMua1dlaWdodHMgPSBrV2VpZ2h0cztcbiAgICB0aGlzLnZXZWlnaHRzID0gdldlaWdodHM7XG4gIH1cblxuICBnZXRRV2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy5xV2VpZ2h0cztcbiAgfVxuXG4gIGdldEtXZWlnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLmtXZWlnaHRzO1xuICB9XG5cbiAgZ2V0VldlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudldlaWdodHM7XG4gIH1cblxuICB0cmFpbih0cmFuc2l0aW9uKSB7XG5cbiAgICBkZWJ1Z2dlclxuXG4gIH1cblxuICBmb3J3YXJkKHRva2VuLCB2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3QgaW5kZXggPSB2b2NhYnVsYXJ5LmluZGV4T2ZUb2tlbih0b2tlbik7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgaW5pdGlhbGlzZSh2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3Qgc2l6ZSA9IHZvY2FidWxhcnkuZ2V0U2l6ZSgpO1xuXG4gICAgdGhpcy5xV2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICAgIHRoaXMua1dlaWdodHMuaW5pdGlhbGlzZShzaXplKTtcbiAgICB0aGlzLnZXZWlnaHRzLmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgcVdlaWdodHNKU09OID0gdGhpcy5xV2VpZ2h0cy50b0pTT04oKSxcbiAgICAgICAgICBrV2VpZ2h0c0pTT04gPSB0aGlzLmtXZWlnaHRzLnRvSlNPTigpLFxuICAgICAgICAgIHZXZWlnaHRzSlNPTiA9IHRoaXMudldlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdHlwZSA9IEFUVEVOVElPTl9IRUFEX1RZUEUsXG4gICAgICAgICAgcVdlaWdodHMgPSBxV2VpZ2h0c0pTT04sIC8vL1xuICAgICAgICAgIGtXZWlnaHRzID0ga1dlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICB2V2VpZ2h0cyA9IHZXZWlnaHRzSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBxV2VpZ2h0cyxcbiAgICAgICAgICAgIGtXZWlnaHRzLFxuICAgICAgICAgICAgdldlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGxldCBhdHRlbnRpb25IZWFkID0gbnVsbDtcblxuICAgIGNvbnN0IHsgdHlwZSB9ID0ganNvbjtcblxuICAgIGlmICh0eXBlID09PSBBVFRFTlRJT05fSEVBRF9UWVBFKSB7XG4gICAgICBjb25zdCBxV2VpZ2h0cyA9IHFXZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBrV2VpZ2h0cyA9IGtXZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICB2V2VpZ2h0cyA9IHZXZWlnaHRzRnJvbUpTT04oanNvbik7XG5cbiAgICAgIGF0dGVudGlvbkhlYWQgPSBuZXcgQXR0ZW50aW9uSGVhZChxV2VpZ2h0cywga1dlaWdodHMsIHZXZWlnaHRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXR0ZW50aW9uSGVhZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBxV2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBrV2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICB2V2VpZ2h0cyA9IFdlaWdodHMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBhdHRlbnRpb25IZWFkID0gSGVhZC5mcm9tUHJvcGVydGllcyhBdHRlbnRpb25IZWFkLCBwcm9wZXJ0aWVzLCBxV2VpZ2h0cywga1dlaWdodHMsIHZXZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIGF0dGVudGlvbkhlYWQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiV2VpZ2h0cyIsIkFUVEVOVElPTl9IRUFEX1RZUEUiLCJxV2VpZ2h0c0Zyb21KU09OIiwia1dlaWdodHNGcm9tSlNPTiIsInZXZWlnaHRzRnJvbUpTT04iLCJBdHRlbnRpb25IZWFkIiwicVdlaWdodHMiLCJrV2VpZ2h0cyIsInZXZWlnaHRzIiwiZ2V0UVdlaWdodHMiLCJnZXRLV2VpZ2h0cyIsImdldFZXZWlnaHRzIiwidHJhaW4iLCJ0cmFuc2l0aW9uIiwiZm9yd2FyZCIsInRva2VuIiwidm9jYWJ1bGFyeSIsImluZGV4IiwiaW5kZXhPZlRva2VuIiwiaW5pdGlhbGlzZSIsInNpemUiLCJnZXRTaXplIiwidG9KU09OIiwicVdlaWdodHNKU09OIiwia1dlaWdodHNKU09OIiwidldlaWdodHNKU09OIiwidHlwZSIsImpzb24iLCJmcm9tSlNPTiIsImF0dGVudGlvbkhlYWQiLCJmcm9tUHJvcGVydGll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