"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return WeightsResult;
    }
});
var _result = /*#__PURE__*/ _interop_require_default(require("../result"));
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
var WeightsResult = /*#__PURE__*/ function(Result) {
    _inherits(WeightsResult, Result);
    function WeightsResult(loss, accuracy, deltaMatrix) {
        _class_call_check(this, WeightsResult);
        var _this;
        _this = _call_super(this, WeightsResult, [
            loss,
            accuracy
        ]);
        _this.deltaMatrix = deltaMatrix;
        return _this;
    }
    _create_class(WeightsResult, [
        {
            key: "getDeltaMatrix",
            value: function getDeltaMatrix() {
                return this.deltaMatrix;
            }
        }
    ], [
        {
            key: "fromOutputOneHotVectorAndProbabilitiesVectorAndDeltaMatrix",
            value: function fromOutputOneHotVectorAndProbabilitiesVectorAndDeltaMatrix(outputOneHotVector, probabilitiesVector, deltaMatrix) {
                var probabilitiesVectorArgmax = probabilitiesVector.argmax(), outputOneHotVectorArgmax = outputOneHotVector.argmax(), predictedIndex = probabilitiesVectorArgmax, expectedIndex = outputOneHotVectorArgmax, index = outputOneHotVectorArgmax, probability = probabilitiesVector.elementAt(index), loss = -Math.log(probability), accuracy = predictedIndex === expectedIndex ? 1 : 0, result = new WeightsResult(loss, accuracy, deltaMatrix);
                return result;
            }
        }
    ]);
    return WeightsResult;
}(_result.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXN1bHQvd2VpZ2h0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiLi4vcmVzdWx0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHNSZXN1bHQgZXh0ZW5kcyBSZXN1bHQge1xuICBjb25zdHJ1Y3Rvcihsb3NzLCBhY2N1cmFjeSwgZGVsdGFNYXRyaXgpe1xuICAgIHN1cGVyKGxvc3MsIGFjY3VyYWN5KTtcblxuICAgIHRoaXMuZGVsdGFNYXRyaXggPSBkZWx0YU1hdHJpeDtcbiAgfVxuXG4gIGdldERlbHRhTWF0cml4KCkge1xuICAgIHJldHVybiB0aGlzLmRlbHRhTWF0cml4O1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRwdXRPbmVIb3RWZWN0b3JBbmRQcm9iYWJpbGl0aWVzVmVjdG9yQW5kRGVsdGFNYXRyaXgob3V0cHV0T25lSG90VmVjdG9yLCBwcm9iYWJpbGl0aWVzVmVjdG9yLCBkZWx0YU1hdHJpeCkge1xuICAgIGNvbnN0IHByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXggPSBwcm9iYWJpbGl0aWVzVmVjdG9yLmFyZ21heCgpLFxuICAgICAgICAgIG91dHB1dE9uZUhvdFZlY3RvckFyZ21heCA9IG91dHB1dE9uZUhvdFZlY3Rvci5hcmdtYXgoKSxcbiAgICAgICAgICBwcmVkaWN0ZWRJbmRleCA9IHByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXgsIC8vL1xuICAgICAgICAgIGV4cGVjdGVkSW5kZXggPSBvdXRwdXRPbmVIb3RWZWN0b3JBcmdtYXgsIC8vL1xuICAgICAgICAgIGluZGV4ID0gb3V0cHV0T25lSG90VmVjdG9yQXJnbWF4LCAvLy9cbiAgICAgICAgICBwcm9iYWJpbGl0eSA9IHByb2JhYmlsaXRpZXNWZWN0b3IuZWxlbWVudEF0KGluZGV4KSxcbiAgICAgICAgICBsb3NzID0gLU1hdGgubG9nKHByb2JhYmlsaXR5KSxcbiAgICAgICAgICBhY2N1cmFjeSA9IChwcmVkaWN0ZWRJbmRleCA9PT0gZXhwZWN0ZWRJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgcmVzdWx0ID0gbmV3IFdlaWdodHNSZXN1bHQobG9zcywgYWNjdXJhY3ksIGRlbHRhTWF0cml4KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIldlaWdodHNSZXN1bHQiLCJsb3NzIiwiYWNjdXJhY3kiLCJkZWx0YU1hdHJpeCIsImdldERlbHRhTWF0cml4IiwiZnJvbU91dHB1dE9uZUhvdFZlY3RvckFuZFByb2JhYmlsaXRpZXNWZWN0b3JBbmREZWx0YU1hdHJpeCIsIm91dHB1dE9uZUhvdFZlY3RvciIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJwcm9iYWJpbGl0aWVzVmVjdG9yQXJnbWF4IiwiYXJnbWF4Iiwib3V0cHV0T25lSG90VmVjdG9yQXJnbWF4IiwicHJlZGljdGVkSW5kZXgiLCJleHBlY3RlZEluZGV4IiwiaW5kZXgiLCJwcm9iYWJpbGl0eSIsImVsZW1lbnRBdCIsIk1hdGgiLCJsb2ciLCJyZXN1bHQiLCJSZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzZEQUZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUosSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQSxjQUNQQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsV0FBVztnQ0FEcEJIOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFNQzs7UUFFWixNQUFLQyxXQUFXLEdBQUdBOzs7a0JBSkZIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxXQUFXO1lBQ3pCOzs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLDJEQUEyREMsa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFSixXQUFXO2dCQUNwSCxJQUFNSyw0QkFBNEJELG9CQUFvQkUsTUFBTSxJQUN0REMsMkJBQTJCSixtQkFBbUJHLE1BQU0sSUFDcERFLGlCQUFpQkgsMkJBQ2pCSSxnQkFBZ0JGLDBCQUNoQkcsUUFBUUgsMEJBQ1JJLGNBQWNQLG9CQUFvQlEsU0FBUyxDQUFDRixRQUM1Q1osT0FBTyxDQUFDZSxLQUFLQyxHQUFHLENBQUNILGNBQ2pCWixXQUFXLEFBQUNTLG1CQUFtQkMsZ0JBQ2pCLElBQ0UsR0FDaEJNLFNBQVMsSUF0QkVsQixjQXNCZ0JDLE1BQU1DLFVBQVVDO2dCQUVqRCxPQUFPZTtZQUNUOzs7V0F6Qm1CbEI7RUFBc0JtQixlQUFNIn0=