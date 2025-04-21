"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Pair;
    }
});
var _oneHot = /*#__PURE__*/ _interop_require_default(require("./vector/oneHot"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Pair = /*#__PURE__*/ function() {
    function Pair(tokens) {
        _class_call_check(this, Pair);
        this.tokens = tokens;
    }
    _create_class(Pair, [
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "asOneHotVectors",
            value: function asOneHotVectors(vocabulary) {
                var oneHotVectors = this.tokens.map(function(token) {
                    var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, vocabulary);
                    return oneHotVector;
                });
                return oneHotVectors;
            }
        }
    ], [
        {
            key: "fromTokens",
            value: function fromTokens(tokens) {
                var pair = new Pair(tokens);
                return pair;
            }
        }
    ]);
    return Pair;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWlyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT25lSG90VmVjdG9yIGZyb20gXCIuL3ZlY3Rvci9vbmVIb3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFpciB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGFzT25lSG90VmVjdG9ycyh2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3Qgb25lSG90VmVjdG9ycyA9IHRoaXMudG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgIGNvbnN0IG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB2b2NhYnVsYXJ5KTtcblxuICAgICAgcmV0dXJuIG9uZUhvdFZlY3RvcjtcbiAgICB9KTtcblxuICAgIHJldHVybiBvbmVIb3RWZWN0b3JzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbnModG9rZW5zKSB7XG4gICAgY29uc3QgcGFpciA9IG5ldyBQYWlyKHRva2Vucyk7XG5cbiAgICByZXR1cm4gcGFpcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlBhaXIiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJhc09uZUhvdFZlY3RvcnMiLCJ2b2NhYnVsYXJ5Iiwib25lSG90VmVjdG9ycyIsIm1hcCIsInRva2VuIiwib25lSG90VmVjdG9yIiwiT25lSG90VmVjdG9yIiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsImZyb21Ub2tlbnMiLCJwYWlyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs2REFGSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVWLElBQUEsQUFBTUEscUJBQU47YUFBTUEsS0FDUEMsTUFBTTtnQ0FEQ0Q7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFGR0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCQyxVQUFVO2dCQUN4QixJQUFNQyxnQkFBZ0IsSUFBSSxDQUFDSixNQUFNLENBQUNLLEdBQUcsQ0FBQyxTQUFDQztvQkFDckMsSUFBTUMsZUFBZUMsZUFBWSxDQUFDQyxzQkFBc0IsQ0FBQ0gsT0FBT0g7b0JBRWhFLE9BQU9JO2dCQUNUO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsV0FBV1YsTUFBTTtnQkFDdEIsSUFBTVcsT0FBTyxJQXBCSVosS0FvQktDO2dCQUV0QixPQUFPVztZQUNUOzs7V0F2Qm1CWiJ9