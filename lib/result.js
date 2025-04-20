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
var _registry = require("./registry");
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
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function() {
    function Result(accuracy, loss) {
        _class_call_check(this, Result);
        this.accuracy = accuracy;
        this.loss = loss;
    }
    _create_class(Result, [
        {
            key: "getAccuracy",
            value: function getAccuracy() {
                return this.accuracy;
            }
        },
        {
            key: "getLoss",
            value: function getLoss() {
                return this.loss;
            }
        },
        {
            key: "log",
            value: function log(console) {
                console.log("Accuracy: ".concat(this.accuracy, ", loss: ").concat(this.loss, "."));
            }
        }
    ], [
        {
            key: "fromAccuracyAndLoss",
            value: function fromAccuracyAndLoss(accuracy, loss) {
                var result = new Result(accuracy, loss);
                return result;
            }
        },
        {
            key: "fromOutputOneHotVectorAndProbabilitiesVector",
            value: function fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector) {
                var probabilitiesVectorArgmax = probabilitiesVector.argmax(), outputOneHotVectorArgmax = outputOneHotVector.argmax(), predictedIndex = probabilitiesVectorArgmax, expectedIndex = outputOneHotVectorArgmax, index = outputOneHotVectorArgmax, probability = probabilitiesVector.elementAt(index), accuracy = predictedIndex === expectedIndex ? 1 : 0, loss = -Math.log(probability), result = new Result(accuracy, loss);
                return result;
            }
        }
    ]);
    return Result;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJlZ2lzdHJ5QXNzaWduZWQgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyeUFzc2lnbmVkKGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKGFjY3VyYWN5LCBsb3NzKSB7XG4gICAgdGhpcy5hY2N1cmFjeSA9IGFjY3VyYWN5O1xuICAgIHRoaXMubG9zcyA9IGxvc3M7XG4gIH1cblxuICBnZXRBY2N1cmFjeSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2N1cmFjeTtcbiAgfVxuXG4gIGdldExvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9zcztcbiAgfVxuXG4gIGxvZyhjb25zb2xlKSB7XG4gICAgY29uc29sZS5sb2coYEFjY3VyYWN5OiAke3RoaXMuYWNjdXJhY3l9LCBsb3NzOiAke3RoaXMubG9zc30uYClcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQWNjdXJhY3lBbmRMb3NzKGFjY3VyYWN5LCBsb3NzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFJlc3VsdChhY2N1cmFjeSwgbG9zcyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGZyb21PdXRwdXRPbmVIb3RWZWN0b3JBbmRQcm9iYWJpbGl0aWVzVmVjdG9yKG91dHB1dE9uZUhvdFZlY3RvciwgcHJvYmFiaWxpdGllc1ZlY3Rvcikge1xuICAgIGNvbnN0IHByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXggPSBwcm9iYWJpbGl0aWVzVmVjdG9yLmFyZ21heCgpLFxuICAgICAgICAgIG91dHB1dE9uZUhvdFZlY3RvckFyZ21heCA9IG91dHB1dE9uZUhvdFZlY3Rvci5hcmdtYXgoKSxcbiAgICAgICAgICBwcmVkaWN0ZWRJbmRleCA9IHByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXgsIC8vL1xuICAgICAgICAgIGV4cGVjdGVkSW5kZXggPSBvdXRwdXRPbmVIb3RWZWN0b3JBcmdtYXgsIC8vL1xuICAgICAgICAgIGluZGV4ID0gb3V0cHV0T25lSG90VmVjdG9yQXJnbWF4LCAvLy9cbiAgICAgICAgICBwcm9iYWJpbGl0eSA9IHByb2JhYmlsaXRpZXNWZWN0b3IuZWxlbWVudEF0KGluZGV4KSxcbiAgICAgICAgICBhY2N1cmFjeSA9IChwcmVkaWN0ZWRJbmRleCA9PT0gZXhwZWN0ZWRJbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgIGxvc3MgPSAtTWF0aC5sb2cocHJvYmFiaWxpdHkpLFxuICAgICAgICAgIHJlc3VsdCA9IG5ldyBSZXN1bHQoYWNjdXJhY3ksIGxvc3MpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmVnaXN0cnlBc3NpZ25lZCIsIlJlc3VsdCIsImFjY3VyYWN5IiwibG9zcyIsImdldEFjY3VyYWN5IiwiZ2V0TG9zcyIsImxvZyIsImNvbnNvbGUiLCJmcm9tQWNjdXJhY3lBbmRMb3NzIiwicmVzdWx0IiwiZnJvbU91dHB1dE9uZUhvdFZlY3RvckFuZFByb2JhYmlsaXRpZXNWZWN0b3IiLCJvdXRwdXRPbmVIb3RWZWN0b3IiLCJwcm9iYWJpbGl0aWVzVmVjdG9yIiwicHJvYmFiaWxpdGllc1ZlY3RvckFyZ21heCIsImFyZ21heCIsIm91dHB1dE9uZUhvdFZlY3RvckFyZ21heCIsInByZWRpY3RlZEluZGV4IiwiZXhwZWN0ZWRJbmRleCIsImluZGV4IiwicHJvYmFiaWxpdHkiLCJlbGVtZW50QXQiLCJNYXRoIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQUE7Ozt3QkFGaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLFdBQWVBLElBQUFBLDBCQUFnQixnQkFBQzthQUFNQyxPQUN4QkMsUUFBUSxFQUFFQyxJQUFJO2dDQURVRjtRQUVsQyxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUNUQSxRQUFRRCxHQUFHLENBQUMsQUFBQyxhQUFvQyxPQUF4QixJQUFJLENBQUNKLFFBQVEsRUFBQyxZQUFvQixPQUFWLElBQUksQ0FBQ0MsSUFBSSxFQUFDO1lBQzdEOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQk4sUUFBUSxFQUFFQyxJQUFJO2dCQUN2QyxJQUFNTSxTQUFTLElBQUlSLE9BQU9DLFVBQVVDO2dCQUVwQyxPQUFPTTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNkNBQTZDQyxrQkFBa0IsRUFBRUMsbUJBQW1CO2dCQUN6RixJQUFNQyw0QkFBNEJELG9CQUFvQkUsTUFBTSxJQUN0REMsMkJBQTJCSixtQkFBbUJHLE1BQU0sSUFDcERFLGlCQUFpQkgsMkJBQ2pCSSxnQkFBZ0JGLDBCQUNoQkcsUUFBUUgsMEJBQ1JJLGNBQWNQLG9CQUFvQlEsU0FBUyxDQUFDRixRQUM1Q2hCLFdBQVcsQUFBQ2MsbUJBQW1CQyxnQkFDbEIsSUFDRSxHQUNmZCxPQUFPLENBQUNrQixLQUFLZixHQUFHLENBQUNhLGNBQ2pCVixTQUFTLElBQUlSLE9BQU9DLFVBQVVDO2dCQUVwQyxPQUFPTTtZQUNUIn0=