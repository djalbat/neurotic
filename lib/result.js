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
    function Result(loss, accuracy) {
        _class_call_check(this, Result);
        this.loss = loss;
        this.accuracy = accuracy;
    }
    _create_class(Result, [
        {
            key: "getLoss",
            value: function getLoss() {
                return this.loss;
            }
        },
        {
            key: "getAccuracy",
            value: function getAccuracy() {
                return this.accuracy;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZXN1bHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKGxvc3MsIGFjY3VyYWN5KSB7XG4gICAgdGhpcy5sb3NzID0gbG9zcztcbiAgICB0aGlzLmFjY3VyYWN5ID0gYWNjdXJhY3k7XG4gIH1cblxuICBnZXRMb3NzKCkge1xuICAgIHJldHVybiB0aGlzLmxvc3M7XG4gIH1cblxuICBnZXRBY2N1cmFjeSgpIHtcbiAgICByZXR1cm4gdGhpcy5hY2N1cmFjeTtcbiAgfVxuXG4gIGxvZyhjb25zb2xlKSB7XG4gICAgY29uc29sZS5sb2coYEFjY3VyYWN5OiAke3RoaXMuYWNjdXJhY3l9LCBsb3NzOiAke3RoaXMubG9zc30uYClcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlc3VsdCIsImxvc3MiLCJhY2N1cmFjeSIsImdldExvc3MiLCJnZXRBY2N1cmFjeSIsImxvZyIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsdUJBQU47YUFBTUEsT0FDUEMsSUFBSSxFQUFFQyxRQUFRO2dDQURQRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUhDRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxJQUFJQyxPQUFPO2dCQUNUQSxRQUFRRCxHQUFHLENBQUMsQUFBQyxhQUFvQyxPQUF4QixJQUFJLENBQUNILFFBQVEsRUFBQyxZQUFvQixPQUFWLElBQUksQ0FBQ0QsSUFBSSxFQUFDO1lBQzdEOzs7V0FoQm1CRCJ9