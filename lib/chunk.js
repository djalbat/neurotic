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
const _transition = /*#__PURE__*/ _interop_require_default(require("./transition"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class Chunk {
    constructor(tokens){
        this.tokens = tokens;
    }
    getTokens() {
        return this.tokens;
    }
    forEachToken(callback) {
        this.tokens.forEach(callback);
    }
    forEachTransition(vocabulary, callback) {
        const tokensLength = this.tokens.length, transitionsLength = tokensLength - 1;
        for(let index = 0; index < transitionsLength; index++){
            const start = index, end = index + 2, tokens = this.tokens.slice(start, end), transition = _transition.default.fromTokensAndVocabulary(tokens, vocabulary);
            callback(transition);
        }
    }
    toJSON() {
        const tokens = this.tokens, json = {
            tokens
        };
        return json;
    }
    static fromJSON(json) {
        const tokens = json, chunk = new Chunk(tokens);
        return chunk;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jaHVuay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRyYW5zaXRpb24gZnJvbSBcIi4vdHJhbnNpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaHVuayB7XG4gIGNvbnN0cnVjdG9yKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGZvckVhY2hUb2tlbihjYWxsYmFjaykgeyB0aGlzLnRva2Vucy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hUcmFuc2l0aW9uKHZvY2FidWxhcnksIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgdG9rZW5zTGVuZ3RoID0gdGhpcy50b2tlbnMubGVuZ3RoLFxuICAgICAgICAgIHRyYW5zaXRpb25zTGVuZ3RoID0gdG9rZW5zTGVuZ3RoIC0gMTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0cmFuc2l0aW9uc0xlbmd0aDsgaW5kZXgrKykge1xuICAgICAgY29uc3Qgc3RhcnQgPSBpbmRleCwgIC8vL1xuICAgICAgICAgICAgZW5kID0gaW5kZXggKyAyLFxuICAgICAgICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnMuc2xpY2Uoc3RhcnQsIGVuZCksXG4gICAgICAgICAgICB0cmFuc2l0aW9uID0gVHJhbnNpdGlvbi5mcm9tVG9rZW5zQW5kVm9jYWJ1bGFyeSh0b2tlbnMsIHZvY2FidWxhcnkpO1xuXG4gICAgICBjYWxsYmFjayh0cmFuc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgdG9rZW5zID0ganNvbiwgIC8vXG4gICAgICAgICAgY2h1bmsgPSBuZXcgQ2h1bmsodG9rZW5zKTtcblxuICAgIHJldHVybiBjaHVuaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNodW5rIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiZm9yRWFjaFRva2VuIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZm9yRWFjaFRyYW5zaXRpb24iLCJ2b2NhYnVsYXJ5IiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwidHJhbnNpdGlvbnNMZW5ndGgiLCJpbmRleCIsInN0YXJ0IiwiZW5kIiwic2xpY2UiLCJ0cmFuc2l0aW9uIiwiVHJhbnNpdGlvbiIsImZyb21Ub2tlbnNBbmRWb2NhYnVsYXJ5IiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY2h1bmsiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7bUVBRkU7Ozs7OztBQUVSLE1BQU1BO0lBQ25CLFlBQVlDLE1BQU0sQ0FBRTtRQUNsQixJQUFJLENBQUNBLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDRCxNQUFNO0lBQ3BCO0lBRUFFLGFBQWFDLFFBQVEsRUFBRTtRQUFFLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxPQUFPLENBQUNEO0lBQVc7SUFFeERFLGtCQUFrQkMsVUFBVSxFQUFFSCxRQUFRLEVBQUU7UUFDdEMsTUFBTUksZUFBZSxJQUFJLENBQUNQLE1BQU0sQ0FBQ1EsTUFBTSxFQUNqQ0Msb0JBQW9CRixlQUFlO1FBRXpDLElBQUssSUFBSUcsUUFBUSxHQUFHQSxRQUFRRCxtQkFBbUJDLFFBQVM7WUFDdEQsTUFBTUMsUUFBUUQsT0FDUkUsTUFBTUYsUUFBUSxHQUNkVixTQUFTLElBQUksQ0FBQ0EsTUFBTSxDQUFDYSxLQUFLLENBQUNGLE9BQU9DLE1BQ2xDRSxhQUFhQyxtQkFBVSxDQUFDQyx1QkFBdUIsQ0FBQ2hCLFFBQVFNO1lBRTlESCxTQUFTVztRQUNYO0lBQ0Y7SUFFQUcsU0FBUztRQUNQLE1BQU1qQixTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQmtCLE9BQU87WUFDTGxCO1FBQ0Y7UUFFTixPQUFPa0I7SUFDVDtJQUVBLE9BQU9DLFNBQVNELElBQUksRUFBRTtRQUNwQixNQUFNbEIsU0FBU2tCLE1BQ1RFLFFBQVEsSUFBSXJCLE1BQU1DO1FBRXhCLE9BQU9vQjtJQUNUO0FBQ0YifQ==