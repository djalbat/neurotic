"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Transition;
    }
});
const _array = require("./utilities/array");
class Transition {
    constructor(row, column){
        this.row = row;
        this.column = column;
    }
    getRow() {
        return this.row;
    }
    getColumn() {
        return this.column;
    }
    static fromTokensAndVocabulary(tokens, vocabulary) {
        const firstToken = (0, _array.first)(tokens), secondToken = (0, _array.second)(tokens);
        tokens = vocabulary.getTokens();
        const row = tokens.indexOf(firstToken), column = tokens.indexOf(secondToken), transition = new Transition(row, column);
        return transition;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90cmFuc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCwgc2Vjb25kIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbHVtbikge1xuICAgIHRoaXMucm93ID0gcm93O1xuICAgIHRoaXMuY29sdW1uID0gY29sdW1uO1xuICB9XG5cbiAgZ2V0Um93KCkge1xuICAgIHJldHVybiB0aGlzLnJvdztcbiAgfVxuXG4gIGdldENvbHVtbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW47XG4gIH1cblxuICBzdGF0aWMgZnJvbVRva2Vuc0FuZFZvY2FidWxhcnkodG9rZW5zLCB2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3QgZmlyc3RUb2tlbiA9IGZpcnN0KHRva2VucyksXG4gICAgICAgICAgc2Vjb25kVG9rZW4gPSBzZWNvbmQodG9rZW5zKTtcblxuICAgIHRva2VucyA9IHZvY2FidWxhcnkuZ2V0VG9rZW5zKCk7XG5cbiAgICBjb25zdCByb3cgPSB0b2tlbnMuaW5kZXhPZihmaXJzdFRva2VuKSxcbiAgICAgICAgICBjb2x1bW4gPSB0b2tlbnMuaW5kZXhPZihzZWNvbmRUb2tlbiksXG4gICAgICAgICAgdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uKHJvdywgY29sdW1uKTtcblxuICAgIHJldHVybiB0cmFuc2l0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVHJhbnNpdGlvbiIsInJvdyIsImNvbHVtbiIsImdldFJvdyIsImdldENvbHVtbiIsImZyb21Ub2tlbnNBbmRWb2NhYnVsYXJ5IiwidG9rZW5zIiwidm9jYWJ1bGFyeSIsImZpcnN0VG9rZW4iLCJmaXJzdCIsInNlY29uZFRva2VuIiwic2Vjb25kIiwiZ2V0VG9rZW5zIiwiaW5kZXhPZiIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBcUJBOzs7dUJBRlM7QUFFZixNQUFNQTtJQUNuQixZQUFZQyxHQUFHLEVBQUVDLE1BQU0sQ0FBRTtRQUN2QixJQUFJLENBQUNELEdBQUcsR0FBR0E7UUFDWCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7SUFDaEI7SUFFQUMsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDRixHQUFHO0lBQ2pCO0lBRUFHLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0YsTUFBTTtJQUNwQjtJQUVBLE9BQU9HLHdCQUF3QkMsTUFBTSxFQUFFQyxVQUFVLEVBQUU7UUFDakQsTUFBTUMsYUFBYUMsSUFBQUEsWUFBSyxFQUFDSCxTQUNuQkksY0FBY0MsSUFBQUEsYUFBTSxFQUFDTDtRQUUzQkEsU0FBU0MsV0FBV0ssU0FBUztRQUU3QixNQUFNWCxNQUFNSyxPQUFPTyxPQUFPLENBQUNMLGFBQ3JCTixTQUFTSSxPQUFPTyxPQUFPLENBQUNILGNBQ3hCSSxhQUFhLElBQUlkLFdBQVdDLEtBQUtDO1FBRXZDLE9BQU9ZO0lBQ1Q7QUFDRiJ9