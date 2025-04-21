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
            key: "forEachToken",
            value: function forEachToken(callback) {
                this.tokens.forEach(callback);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaHVuay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFBhaXIgZnJvbSBcIi4vcGFpclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaHVuayB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGZvckVhY2hUb2tlbihjYWxsYmFjaykgeyB0aGlzLnRva2Vucy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hQYWlyKGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoLFxuICAgICAgICAgIHBhaXJzTGVuZ3RoID0gdG9rZW5zTGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYWlyc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZW5kID0gaW5kZXggKyAyLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgICBwYWlyID0gUGFpci5mcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIGNhbGxiYWNrKHBhaXIpO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnRva2VucyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB0b2tlbnMgPSBqc29uLCAgLy9cbiAgICAgICAgICBjaHVuayA9IG5ldyBDaHVuayh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIGNodW5rO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ2h1bmsiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJmb3JFYWNoVG9rZW4iLCJjYWxsYmFjayIsImZvckVhY2giLCJmb3JFYWNoUGFpciIsInRva2Vuc0xlbmd0aCIsImxlbmd0aCIsInBhaXJzTGVuZ3RoIiwiaW5kZXgiLCJzdGFydCIsImVuZCIsInNsaWNlIiwicGFpciIsIlBhaXIiLCJmcm9tVG9rZW5zIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY2h1bmsiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzJEQUZKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUYsSUFBQSxBQUFNQSxzQkFBTjthQUFNQSxNQUNQQyxNQUFNO2dDQURDRDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUZHRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxRQUFRO2dCQUFJLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxPQUFPLENBQUNEO1lBQVc7OztZQUV4REUsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlGLFFBQVE7Z0JBQ2xCLElBQU1HLGVBQWUsSUFBSSxDQUFDTixNQUFNLENBQUNPLE1BQU0sRUFDakNDLGNBQWNGLGVBQWU7Z0JBRW5DLElBQUssSUFBSUcsUUFBUSxHQUFHQSxRQUFRRCxhQUFhQyxRQUFTO29CQUNoRCxJQUFNQyxRQUFRRCxPQUNSRSxNQUFNRixRQUFRLEdBQ2RULFNBQVMsSUFBSSxDQUFDQSxNQUFNLENBQUNZLEtBQUssQ0FBQ0YsT0FBT0MsTUFDbENFLE9BQU9DLGFBQUksQ0FBQ0MsVUFBVSxDQUFDZjtvQkFFN0JHLFNBQVNVO2dCQUNYO1lBQ0Y7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWhCLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCaUIsT0FBTztvQkFDTGpCLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9pQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUk7Z0JBQ2xCLElBQU1qQixTQUFTaUIsTUFDVEUsUUFBUSxJQXBDR3BCLE1Bb0NPQztnQkFFeEIsT0FBT21CO1lBQ1Q7OztXQXZDbUJwQiJ9