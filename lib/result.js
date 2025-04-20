"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Result;
    }
});
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
var Result = /*#__PURE__*/ function() {
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
    ]);
    return Result;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKGFjY3VyYWN5LCBsb3NzKSB7XG4gICAgdGhpcy5hY2N1cmFjeSA9IGFjY3VyYWN5O1xuICAgIHRoaXMubG9zcyA9IGxvc3M7XG4gIH1cblxuICBnZXRBY2N1cmFjeSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2N1cmFjeTtcbiAgfVxuXG4gIGdldExvc3MoKSB7XG4gICAgcmV0dXJuIHRoaXMubG9zcztcbiAgfVxuXG4gIGxvZyhjb25zb2xlKSB7XG4gICAgY29uc29sZS5sb2coYEFjY3VyYWN5OiAke3RoaXMuYWNjdXJhY3l9LCBsb3NzOiAke3RoaXMubG9zc30uYClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlc3VsdCIsImFjY3VyYWN5IiwibG9zcyIsImdldEFjY3VyYWN5IiwiZ2V0TG9zcyIsImxvZyIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsdUJBQU47YUFBTUEsT0FDUEMsUUFBUSxFQUFFQyxJQUFJO2dDQURQRjtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsSUFBSUMsT0FBTztnQkFDVEEsUUFBUUQsR0FBRyxDQUFDLEFBQUMsYUFBb0MsT0FBeEIsSUFBSSxDQUFDSixRQUFRLEVBQUMsWUFBb0IsT0FBVixJQUFJLENBQUNDLElBQUksRUFBQztZQUM3RDs7O1dBaEJtQkYifQ==