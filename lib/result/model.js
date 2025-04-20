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
    _inherits(ModelResult, Result);
    function ModelResult() {
        _class_call_check(this, ModelResult);
        return _call_super(this, ModelResult, arguments);
    }
    _create_class(ModelResult, null, [
        {
            key: "fromCorpusAndWeightsResults",
            value: function fromCorpusAndWeightsResults(corpus, weightsResults) {
                var totalLoss = 0, totalAccuracy = 0;
                weightsResults.forEach(function(weightsResult) {
                    var loss = weightsResult.getLoss(), accuracy = weightsResult.getAccuracy();
                    totalLoss += loss;
                    totalAccuracy += accuracy;
                });
                var corpusSize = corpus.getSize(), averageLoss = totalLoss / corpusSize, averageAccuracy = totalAccuracy / corpusSize, accuracy = averageAccuracy, loss = averageLoss, modelResult = new ModelResult(accuracy, loss);
                return modelResult;
            }
        }
    ]);
    return ModelResult;
}(_result.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXN1bHQvbW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4uL3Jlc3VsdFwiO1xuXG5pbXBvcnQgeyByZWdpc3RyeUFzc2lnbmVkIH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHJlZ2lzdHJ5QXNzaWduZWQoY2xhc3MgTW9kZWxSZXN1bHQgZXh0ZW5kcyBSZXN1bHQge1xuICBzdGF0aWMgZnJvbUNvcnB1c0FuZFdlaWdodHNSZXN1bHRzKGNvcnB1cywgd2VpZ2h0c1Jlc3VsdHMpIHtcbiAgICBsZXQgdG90YWxMb3NzID0gMCxcbiAgICAgICAgdG90YWxBY2N1cmFjeSA9IDA7XG5cbiAgICB3ZWlnaHRzUmVzdWx0cy5mb3JFYWNoKCh3ZWlnaHRzUmVzdWx0KSA9PiB7XG4gICAgICBjb25zdCBsb3NzID0gd2VpZ2h0c1Jlc3VsdC5nZXRMb3NzKCksXG4gICAgICAgICAgICBhY2N1cmFjeSA9IHdlaWdodHNSZXN1bHQuZ2V0QWNjdXJhY3koKTtcblxuICAgICAgdG90YWxMb3NzICs9IGxvc3M7XG5cbiAgICAgIHRvdGFsQWNjdXJhY3kgKz0gYWNjdXJhY3k7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb3JwdXNTaXplID0gY29ycHVzLmdldFNpemUoKSxcbiAgICAgICAgICBhdmVyYWdlTG9zcyA9IHRvdGFsTG9zcyAvIGNvcnB1c1NpemUsXG4gICAgICAgICAgYXZlcmFnZUFjY3VyYWN5ID0gdG90YWxBY2N1cmFjeSAvIGNvcnB1c1NpemUsXG4gICAgICAgICAgYWNjdXJhY3kgPSBhdmVyYWdlQWNjdXJhY3ksXG4gICAgICAgICAgbG9zcyA9IGF2ZXJhZ2VMb3NzLCAvLy9cbiAgICAgICAgICBtb2RlbFJlc3VsdCA9IG5ldyBNb2RlbFJlc3VsdChhY2N1cmFjeSwgbG9zcyk7XG5cbiAgICByZXR1cm4gbW9kZWxSZXN1bHQ7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInJlZ2lzdHJ5QXNzaWduZWQiLCJNb2RlbFJlc3VsdCIsImZyb21Db3JwdXNBbmRXZWlnaHRzUmVzdWx0cyIsImNvcnB1cyIsIndlaWdodHNSZXN1bHRzIiwidG90YWxMb3NzIiwidG90YWxBY2N1cmFjeSIsImZvckVhY2giLCJ3ZWlnaHRzUmVzdWx0IiwibG9zcyIsImdldExvc3MiLCJhY2N1cmFjeSIsImdldEFjY3VyYWN5IiwiY29ycHVzU2l6ZSIsImdldFNpemUiLCJhdmVyYWdlTG9zcyIsImF2ZXJhZ2VBY2N1cmFjeSIsIm1vZGVsUmVzdWx0IiwiUmVzdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozs2REFKbUI7d0JBRWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFakMsV0FBZUEsSUFBQUEsMEJBQWdCLGdCQUFDOzthQUFNQztnQ0FBQUE7ZUFBTixrQkFBTUE7Ozs7WUFDN0JDLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsTUFBTSxFQUFFQyxjQUFjO2dCQUN2RCxJQUFJQyxZQUFZLEdBQ1pDLGdCQUFnQjtnQkFFcEJGLGVBQWVHLE9BQU8sQ0FBQyxTQUFDQztvQkFDdEIsSUFBTUMsT0FBT0QsY0FBY0UsT0FBTyxJQUM1QkMsV0FBV0gsY0FBY0ksV0FBVztvQkFFMUNQLGFBQWFJO29CQUViSCxpQkFBaUJLO2dCQUNuQjtnQkFFQSxJQUFNRSxhQUFhVixPQUFPVyxPQUFPLElBQzNCQyxjQUFjVixZQUFZUSxZQUMxQkcsa0JBQWtCVixnQkFBZ0JPLFlBQ2xDRixXQUFXSyxpQkFDWFAsT0FBT00sYUFDUEUsY0FBYyxJQUFJaEIsWUFBWVUsVUFBVUY7Z0JBRTlDLE9BQU9RO1lBQ1Q7Ozs7RUF0QndEQyxlQUFNIn0=