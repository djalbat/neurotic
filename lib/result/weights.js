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
}(_result.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXN1bHQvd2VpZ2h0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFJlc3VsdCBmcm9tIFwiLi4vcmVzdWx0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdlaWdodHNSZXN1bHQgZXh0ZW5kcyBSZXN1bHQge1xuICBzdGF0aWMgZnJvbU91dHB1dE9uZUhvdFZlY3RvckFuZFByb2JhYmlsaXRpZXNWZWN0b3Iob3V0cHV0T25lSG90VmVjdG9yLCBwcm9iYWJpbGl0aWVzVmVjdG9yKSB7XG4gICAgY29uc3QgcHJvYmFiaWxpdGllc1ZlY3RvckFyZ21heCA9IHByb2JhYmlsaXRpZXNWZWN0b3IuYXJnbWF4KCksXG4gICAgICAgICAgb3V0cHV0T25lSG90VmVjdG9yQXJnbWF4ID0gb3V0cHV0T25lSG90VmVjdG9yLmFyZ21heCgpLFxuICAgICAgICAgIHByZWRpY3RlZEluZGV4ID0gcHJvYmFiaWxpdGllc1ZlY3RvckFyZ21heCwgLy8vXG4gICAgICAgICAgZXhwZWN0ZWRJbmRleCA9IG91dHB1dE9uZUhvdFZlY3RvckFyZ21heCwgLy8vXG4gICAgICAgICAgaW5kZXggPSBvdXRwdXRPbmVIb3RWZWN0b3JBcmdtYXgsIC8vL1xuICAgICAgICAgIHByb2JhYmlsaXR5ID0gcHJvYmFiaWxpdGllc1ZlY3Rvci5lbGVtZW50QXQoaW5kZXgpLFxuICAgICAgICAgIGFjY3VyYWN5ID0gKHByZWRpY3RlZEluZGV4ID09PSBleHBlY3RlZEluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICBsb3NzID0gLU1hdGgubG9nKHByb2JhYmlsaXR5KSxcbiAgICAgICAgICByZXN1bHQgPSBuZXcgUmVzdWx0KGFjY3VyYWN5LCBsb3NzKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuIl0sIm5hbWVzIjpbIldlaWdodHNSZXN1bHQiLCJmcm9tT3V0cHV0T25lSG90VmVjdG9yQW5kUHJvYmFiaWxpdGllc1ZlY3RvciIsIm91dHB1dE9uZUhvdFZlY3RvciIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJwcm9iYWJpbGl0aWVzVmVjdG9yQXJnbWF4IiwiYXJnbWF4Iiwib3V0cHV0T25lSG90VmVjdG9yQXJnbWF4IiwicHJlZGljdGVkSW5kZXgiLCJleHBlY3RlZEluZGV4IiwiaW5kZXgiLCJwcm9iYWJpbGl0eSIsImVsZW1lbnRBdCIsImFjY3VyYWN5IiwibG9zcyIsIk1hdGgiLCJsb2ciLCJyZXN1bHQiLCJSZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzZEQUZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUosSUFBQSxBQUFNQSw4QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsNkNBQTZDQyxrQkFBa0IsRUFBRUMsbUJBQW1CO2dCQUN6RixJQUFNQyw0QkFBNEJELG9CQUFvQkUsTUFBTSxJQUN0REMsMkJBQTJCSixtQkFBbUJHLE1BQU0sSUFDcERFLGlCQUFpQkgsMkJBQ2pCSSxnQkFBZ0JGLDBCQUNoQkcsUUFBUUgsMEJBQ1JJLGNBQWNQLG9CQUFvQlEsU0FBUyxDQUFDRixRQUM1Q0csV0FBVyxBQUFDTCxtQkFBbUJDLGdCQUNqQixJQUNFLEdBQ2hCSyxPQUFPLENBQUNDLEtBQUtDLEdBQUcsQ0FBQ0wsY0FDakJNLFNBQVMsSUFBSUMsZUFBTSxDQUFDTCxVQUFVQztnQkFFcEMsT0FBT0c7WUFDVDs7O1dBZm1CaEI7RUFBc0JpQixlQUFNIn0=