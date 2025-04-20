"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ModelResult;
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
var ModelResult = /*#__PURE__*/ function(Result) {
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
}(_result.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXN1bHQvbW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZXN1bHQgZnJvbSBcIi4uL3Jlc3VsdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbFJlc3VsdCBleHRlbmRzIFJlc3VsdCB7XG4gIHN0YXRpYyBmcm9tQ29ycHVzQW5kV2VpZ2h0c1Jlc3VsdHMoY29ycHVzLCB3ZWlnaHRzUmVzdWx0cykge1xuICAgIGxldCB0b3RhbExvc3MgPSAwLFxuICAgICAgICB0b3RhbEFjY3VyYWN5ID0gMDtcblxuICAgIHdlaWdodHNSZXN1bHRzLmZvckVhY2goKHdlaWdodHNSZXN1bHQpID0+IHtcbiAgICAgIGNvbnN0IGxvc3MgPSB3ZWlnaHRzUmVzdWx0LmdldExvc3MoKSxcbiAgICAgICAgICAgIGFjY3VyYWN5ID0gd2VpZ2h0c1Jlc3VsdC5nZXRBY2N1cmFjeSgpO1xuXG4gICAgICB0b3RhbExvc3MgKz0gbG9zcztcblxuICAgICAgdG90YWxBY2N1cmFjeSArPSBhY2N1cmFjeTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvcnB1c1NpemUgPSBjb3JwdXMuZ2V0U2l6ZSgpLFxuICAgICAgICAgIGF2ZXJhZ2VMb3NzID0gdG90YWxMb3NzIC8gY29ycHVzU2l6ZSxcbiAgICAgICAgICBhdmVyYWdlQWNjdXJhY3kgPSB0b3RhbEFjY3VyYWN5IC8gY29ycHVzU2l6ZSxcbiAgICAgICAgICBhY2N1cmFjeSA9IGF2ZXJhZ2VBY2N1cmFjeSxcbiAgICAgICAgICBsb3NzID0gYXZlcmFnZUxvc3MsIC8vL1xuICAgICAgICAgIG1vZGVsUmVzdWx0ID0gbmV3IE1vZGVsUmVzdWx0KGFjY3VyYWN5LCBsb3NzKTtcblxuICAgIHJldHVybiBtb2RlbFJlc3VsdDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vZGVsUmVzdWx0IiwiZnJvbUNvcnB1c0FuZFdlaWdodHNSZXN1bHRzIiwiY29ycHVzIiwid2VpZ2h0c1Jlc3VsdHMiLCJ0b3RhbExvc3MiLCJ0b3RhbEFjY3VyYWN5IiwiZm9yRWFjaCIsIndlaWdodHNSZXN1bHQiLCJsb3NzIiwiZ2V0TG9zcyIsImFjY3VyYWN5IiwiZ2V0QWNjdXJhY3kiLCJjb3JwdXNTaXplIiwiZ2V0U2l6ZSIsImF2ZXJhZ2VMb3NzIiwiYXZlcmFnZUFjY3VyYWN5IiwibW9kZWxSZXN1bHQiLCJSZXN1bHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzZEQUZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUosSUFBQSxBQUFNQSw0QkFBTjtjQUFNQTthQUFBQTtnQ0FBQUE7ZUFBTixrQkFBTUE7O2tCQUFBQTs7WUFDWkMsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyxNQUFNLEVBQUVDLGNBQWM7Z0JBQ3ZELElBQUlDLFlBQVksR0FDWkMsZ0JBQWdCO2dCQUVwQkYsZUFBZUcsT0FBTyxDQUFDLFNBQUNDO29CQUN0QixJQUFNQyxPQUFPRCxjQUFjRSxPQUFPLElBQzVCQyxXQUFXSCxjQUFjSSxXQUFXO29CQUUxQ1AsYUFBYUk7b0JBRWJILGlCQUFpQks7Z0JBQ25CO2dCQUVBLElBQU1FLGFBQWFWLE9BQU9XLE9BQU8sSUFDM0JDLGNBQWNWLFlBQVlRLFlBQzFCRyxrQkFBa0JWLGdCQUFnQk8sWUFDbENGLFdBQVdLLGlCQUNYUCxPQUFPTSxhQUNQRSxjQUFjLElBbkJIaEIsWUFtQm1CVSxVQUFVRjtnQkFFOUMsT0FBT1E7WUFDVDs7O1dBdEJtQmhCO0VBQW9CaUIsZUFBTSJ9