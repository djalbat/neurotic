"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Chunk;
    }
});
var _transition = /*#__PURE__*/ _interop_require_default(require("./transition"));
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
var Chunk = /*#__PURE__*/ function() {
    function Chunk(tokens) {
        _class_call_check(this, Chunk);
        this.tokens = tokens;
    }
    _create_class(Chunk, [
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "forEachToken",
            value: function forEachToken(callback) {
                this.tokens.forEach(callback);
            }
        },
        {
            key: "forEachTransition",
            value: function forEachTransition(vocabulary, callback) {
                var tokensLength = this.tokens.length, transitionsLength = tokensLength - 1;
                for(var index = 0; index < transitionsLength; index++){
                    var start = index, end = index + 2, tokens = this.tokens.slice(start, end), transition = _transition.default.fromTokensAndVocabulary(tokens, vocabulary);
                    callback(transition);
                }
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var tokens = this.tokens, json = {
                    tokens: tokens
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var tokens = json, chunk = new Chunk(tokens);
                return chunk;
            }
        }
    ]);
    return Chunk;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaHVuay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaHVuayB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGZvckVhY2hUb2tlbihjYWxsYmFjaykgeyB0aGlzLnRva2Vucy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hUcmFuc2l0aW9uKHZvY2FidWxhcnksIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoLFxuICAgICAgICAgIHRyYW5zaXRpb25zTGVuZ3RoID0gdG9rZW5zTGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0cmFuc2l0aW9uc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZW5kID0gaW5kZXggKyAyLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gVHJhbnNpdGlvbi5mcm9tVG9rZW5zQW5kVm9jYWJ1bGFyeSh0b2tlbnMsIHZvY2FidWxhcnkpO1xuXG4gICAgICBjYWxsYmFjayh0cmFuc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgdG9rZW5zID0ganNvbiwgIC8vXG4gICAgICAgICAgY2h1bmsgPSBuZXcgQ2h1bmsodG9rZW5zKTtcblxuICAgIHJldHVybiBjaHVuaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNodW5rIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiZm9yRWFjaFRva2VuIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZm9yRWFjaFRyYW5zaXRpb24iLCJ2b2NhYnVsYXJ5IiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwidHJhbnNpdGlvbnNMZW5ndGgiLCJpbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsImZyb21Ub2tlbnNBbmRWb2NhYnVsYXJ5IiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY2h1bmsiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O2lFQUZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVIsSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxNQUFNO2dDQURDRDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUZHRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxRQUFRO2dCQUFJLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxPQUFPLENBQUNEO1lBQVc7OztZQUV4REUsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQkMsVUFBVSxFQUFFSCxRQUFRO2dCQUNwQyxJQUFNSSxlQUFlLElBQUksQ0FBQ1AsTUFBTSxDQUFDUSxNQUFNLEVBQ2pDQyxvQkFBb0JGLGVBQWU7Z0JBRXpDLElBQUssSUFBSUcsUUFBUSxHQUFHQSxRQUFRRCxtQkFBbUJDLFFBQVM7b0JBQ3RELElBQU1DLFFBQVFELE9BQ1JFLE1BQU1GLFFBQVEsR0FDZFYsU0FBUyxJQUFJLENBQUNBLE1BQU0sQ0FBQ2EsS0FBSyxDQUFDRixPQUFPQyxNQUNsQ0UsYUFBYUMsbUJBQVUsQ0FBQ0MsdUJBQXVCLENBQUNoQixRQUFRTTtvQkFFOURILFNBQVNXO2dCQUNYO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWpCLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCa0IsT0FBTztvQkFDTGxCLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9rQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUk7Z0JBQ2xCLElBQU1sQixTQUFTa0IsTUFDVEUsUUFBUSxJQXBDR3JCLE1Bb0NPQztnQkFFeEIsT0FBT29CO1lBQ1Q7OztXQXZDbUJyQiJ9