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
var _pair = /*#__PURE__*/ _interop_require_default(require("./pair"));
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
            key: "forEachPair",
            value: function forEachPair(callback) {
                var tokensLength = this.tokens.length, pairsLength = tokensLength - 1;
                for(var index = 0; index < pairsLength; index++){
                    var start = index, end = index + 2, tokens = this.tokens.slice(start, end), pair = _pair.default.fromTokens(tokens);
                    callback(pair);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaHVuay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhaXIgZnJvbSBcIi4vcGFpclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaHVuayB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGZvckVhY2hQYWlyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoLFxuICAgICAgICAgIHBhaXJzTGVuZ3RoID0gdG9rZW5zTGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYWlyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZW5kID0gaW5kZXggKyAyLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgICBwYWlyID0gUGFpci5mcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIGNhbGxiYWNrKHBhaXIpO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnRva2VucyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB0b2tlbnMgPSBqc29uLCAgLy9cbiAgICAgICAgICBjaHVuayA9IG5ldyBDaHVuayh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNodW5rO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2h1bmsiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJmb3JFYWNoUGFpciIsImNhbGxiYWNrIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwicGFpcnNMZW5ndGgiLCJpbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJwYWlyIiwiUGFpciIsImZyb21Ub2tlbnMiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjaHVuayJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MkRBRko7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRixJQUFBLEFBQU1BLHNCQUFOO2FBQU1BLE1BQ1BDLE1BQU07Z0NBRENEO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7a0JBRkdEOztZQUtuQkUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlDLFFBQVE7Z0JBQ2xCLElBQU1DLGVBQWUsSUFBSSxDQUFDSixNQUFNLENBQUNLLE1BQU0sRUFDakNDLGNBQWNGLGVBQWU7Z0JBRW5DLElBQUssSUFBSUcsUUFBUSxHQUFHQSxRQUFRRCxhQUFhQyxRQUFTO29CQUNoRCxJQUFNQyxRQUFRRCxPQUNSRSxNQUFNRixRQUFRLEdBQ2RQLFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNVLEtBQUssQ0FBQ0YsT0FBT0MsTUFDbENFLE9BQU9DLGFBQUksQ0FBQ0MsVUFBVSxDQUFDYjtvQkFFN0JHLFNBQVNRO2dCQUNYO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWQsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJlLE9BQU87b0JBQ0xmLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9lO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBTWYsU0FBU2UsTUFDVEUsUUFBUSxJQWxDR2xCLE1Ba0NPQztnQkFFeEIsT0FBT2lCO1lBQ1Q7OztXQXJDbUJsQiJ9