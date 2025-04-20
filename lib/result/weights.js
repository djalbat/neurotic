"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _result = /*#__PURE__*/ _interop_require_default(require("../result"));
var _registry = require("../registry");
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
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function(Result) {
    _inherits(WeightsResult, Result);
    function WeightsResult() {
        _class_call_check(this, WeightsResult);
        return _call_super(this, WeightsResult, arguments);
    }
    _create_class(WeightsResult, null, [
        {
            key: "fromOutputOneHotVectorAndProbabilitiesVector",
            value: function fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector) {
                var probabilitiesVectorArgmax = probabilitiesVector.argmax(), outputOneHotVectorArgmax = outputOneHotVector.argmax(), predictedIndex = probabilitiesVectorArgmax, expectedIndex = outputOneHotVectorArgmax, index = outputOneHotVectorArgmax, probability = probabilitiesVector.elementAt(index), accuracy = predictedIndex === expectedIndex ? 1 : 0, loss = -Math.log(probability), result = new _result.default(accuracy, loss);
                return result;
            }
        }
    ]);
    return WeightsResult;
}(_result.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXN1bHQvd2VpZ2h0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiLi4vcmVzdWx0XCI7XG5cbmltcG9ydCB7IHJlZ2lzdHJ5QXNzaWduZWQgfSBmcm9tIFwiLi4vcmVnaXN0cnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnlBc3NpZ25lZChjbGFzcyBXZWlnaHRzUmVzdWx0IGV4dGVuZHMgUmVzdWx0IHtcbiAgc3RhdGljIGZyb21PdXRwdXRPbmVIb3RWZWN0b3JBbmRQcm9iYWJpbGl0aWVzVmVjdG9yKG91dHB1dE9uZUhvdFZlY3RvciwgcHJvYmFiaWxpdGllc1ZlY3Rvcikge1xuICAgIGNvbnN0IHByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXggPSBwcm9iYWJpbGl0aWVzVmVjdG9yLmFyZ21heCgpLFxuICAgICAgICAgIG91dHB1dE9uZUhvdFZlY3RvckFyZ21heCA9IG91dHB1dE9uZUhvdFZlY3Rvci5hcmdtYXgoKSxcbiAgICAgICAgICBwcmVkaWN0ZWRJbmRleCA9IHByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXgsIC8vL1xuICAgICAgICAgIGV4cGVjdGVkSW5kZXggPSBvdXRwdXRPbmVIb3RWZWN0b3JBcmdtYXgsIC8vL1xuICAgICAgICAgIGluZGV4ID0gb3V0cHV0T25lSG90VmVjdG9yQXJnbWF4LCAvLy9cbiAgICAgICAgICBwcm9iYWJpbGl0eSA9IHByb2JhYmlsaXRpZXNWZWN0b3IuZWxlbWVudEF0KGluZGV4KSxcbiAgICAgICAgICBhY2N1cmFjeSA9IChwcmVkaWN0ZWRJbmRleCA9PT0gZXhwZWN0ZWRJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgbG9zcyA9IC1NYXRoLmxvZyhwcm9iYWJpbGl0eSksXG4gICAgICAgICAgcmVzdWx0ID0gbmV3IFJlc3VsdChhY2N1cmFjeSwgbG9zcyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZWdpc3RyeUFzc2lnbmVkIiwiV2VpZ2h0c1Jlc3VsdCIsImZyb21PdXRwdXRPbmVIb3RWZWN0b3JBbmRQcm9iYWJpbGl0aWVzVmVjdG9yIiwib3V0cHV0T25lSG90VmVjdG9yIiwicHJvYmFiaWxpdGllc1ZlY3RvciIsInByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXgiLCJhcmdtYXgiLCJvdXRwdXRPbmVIb3RWZWN0b3JBcmdtYXgiLCJwcmVkaWN0ZWRJbmRleCIsImV4cGVjdGVkSW5kZXgiLCJpbmRleCIsInByb2JhYmlsaXR5IiwiZWxlbWVudEF0IiwiYWNjdXJhY3kiLCJsb3NzIiwiTWF0aCIsImxvZyIsInJlc3VsdCIsIlJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7NkRBSm1CO3dCQUVjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLFdBQWVBLElBQUFBLDBCQUFnQixnQkFBQzs7YUFBTUM7Z0NBQUFBO2VBQU4sa0JBQU1BOzs7O1lBQzdCQyxLQUFBQTttQkFBUCxTQUFPQSw2Q0FBNkNDLGtCQUFrQixFQUFFQyxtQkFBbUI7Z0JBQ3pGLElBQU1DLDRCQUE0QkQsb0JBQW9CRSxNQUFNLElBQ3REQywyQkFBMkJKLG1CQUFtQkcsTUFBTSxJQUNwREUsaUJBQWlCSCwyQkFDakJJLGdCQUFnQkYsMEJBQ2hCRyxRQUFRSCwwQkFDUkksY0FBY1Asb0JBQW9CUSxTQUFTLENBQUNGLFFBQzVDRyxXQUFXLEFBQUNMLG1CQUFtQkMsZ0JBQ2pCLElBQ0UsR0FDaEJLLE9BQU8sQ0FBQ0MsS0FBS0MsR0FBRyxDQUFDTCxjQUNqQk0sU0FBUyxJQUFJQyxlQUFNLENBQUNMLFVBQVVDO2dCQUVwQyxPQUFPRztZQUNUOzs7O0VBZjBEQyxlQUFNIn0=