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
var _array = require("./utilities/array");
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
            key: "inputOneHotVector",
            value: function inputOneHotVector(vocabulary) {
                var firstToken = (0, _array.first)(this.tokens), inputToken = firstToken, inputOneHotVector = _oneHot.default.fromTokenAndVocabulary(inputToken, vocabulary);
                return inputOneHotVector;
            }
        },
        {
            key: "outputOneHotVector",
            value: function outputOneHotVector(vocabulary) {
                var secondToken = (0, _array.second)(this.tokens), outputToken = secondToken, outputOneHotVector = _oneHot.default.fromTokenAndVocabulary(outputToken, vocabulary);
                return outputOneHotVector;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYWlyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT25lSG90VmVjdG9yIGZyb20gXCIuL3ZlY3Rvci9vbmVIb3RcIjtcblxuaW1wb3J0IHsgZmlyc3QsIHNlY29uZCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWlyIHtcbiAgY29uc3RydWN0b3IodG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgaW5wdXRPbmVIb3RWZWN0b3Iodm9jYWJ1bGFyeSkge1xuICAgIGNvbnN0IGZpcnN0VG9rZW4gPSBmaXJzdCh0aGlzLnRva2VucyksXG4gICAgICAgICAgaW5wdXRUb2tlbiA9IGZpcnN0VG9rZW4sICAvLy9cbiAgICAgICAgICBpbnB1dE9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KGlucHV0VG9rZW4sIHZvY2FidWxhcnkpO1xuXG4gICAgcmV0dXJuIGlucHV0T25lSG90VmVjdG9yO1xuICB9XG5cbiAgb3V0cHV0T25lSG90VmVjdG9yKHZvY2FidWxhcnkpIHtcbiAgICBjb25zdCBzZWNvbmRUb2tlbiA9IHNlY29uZCh0aGlzLnRva2VucyksXG4gICAgICAgICAgb3V0cHV0VG9rZW4gPSBzZWNvbmRUb2tlbiwgIC8vL1xuICAgICAgICAgIG91dHB1dE9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KG91dHB1dFRva2VuLCB2b2NhYnVsYXJ5KTtcblxuICAgIHJldHVybiBvdXRwdXRPbmVIb3RWZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgICBjb25zdCBwYWlyID0gbmV3IFBhaXIodG9rZW5zKTtcblxuICAgIHJldHVybiBwYWlyO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGFpciIsInRva2VucyIsImdldFRva2VucyIsImlucHV0T25lSG90VmVjdG9yIiwidm9jYWJ1bGFyeSIsImZpcnN0VG9rZW4iLCJmaXJzdCIsImlucHV0VG9rZW4iLCJPbmVIb3RWZWN0b3IiLCJmcm9tVG9rZW5BbmRWb2NhYnVsYXJ5Iiwib3V0cHV0T25lSG90VmVjdG9yIiwic2Vjb25kVG9rZW4iLCJzZWNvbmQiLCJvdXRwdXRUb2tlbiIsImZyb21Ub2tlbnMiLCJwYWlyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7Ozs2REFKSTtxQkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEscUJBQU47YUFBTUEsS0FDUEMsTUFBTTtnQ0FEQ0Q7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBOztrQkFGR0Q7O1lBS25CRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxVQUFVO2dCQUMxQixJQUFNQyxhQUFhQyxJQUFBQSxZQUFLLEVBQUMsSUFBSSxDQUFDTCxNQUFNLEdBQzlCTSxhQUFhRixZQUNiRixvQkFBb0JLLGVBQVksQ0FBQ0Msc0JBQXNCLENBQUNGLFlBQVlIO2dCQUUxRSxPQUFPRDtZQUNUOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQk4sVUFBVTtnQkFDM0IsSUFBTU8sY0FBY0MsSUFBQUEsYUFBTSxFQUFDLElBQUksQ0FBQ1gsTUFBTSxHQUNoQ1ksY0FBY0YsYUFDZEQscUJBQXFCRixlQUFZLENBQUNDLHNCQUFzQixDQUFDSSxhQUFhVDtnQkFFNUUsT0FBT007WUFDVDs7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSxXQUFXYixNQUFNO2dCQUN0QixJQUFNYyxPQUFPLElBMUJJZixLQTBCS0M7Z0JBRXRCLE9BQU9jO1lBQ1Q7OztXQTdCbUJmIn0=