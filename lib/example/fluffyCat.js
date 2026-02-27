"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return fluffyCatExampleI;
    }
});
const _index = require("../index");
function fluffyCatExampleI() {
    // const corpus = Corpus.fromJSON([
    //   ["Fluffy", "Cat"],
    //   ["Smelly", "Dog"],
    //   ["Fluffy", "Cat", "Purrs"],
    //   ["Smelly", "Dog", "Barks"],
    //   ["Dog", "Chases", "Cat"],
    //   ["Cat", "Scratches", "Dog"]
    // ]);
    const corpus = _index.Corpus.fromJSON([
        [
            "Eek",
            "Meow"
        ],
        [
            "Bark",
            "Hungry"
        ],
        [
            "Meow",
            "Hungry"
        ]
    ]);
    const tokens = corpus.asTokens(), model = /*#__PURE__*/ React.createElement(_index.Model, null, /*#__PURE__*/ React.createElement(_index.Vocabulary, {
        tokens: tokens
    }), /*#__PURE__*/ React.createElement(_index.AttentionHead, null));
    model.train(corpus);
    // console.log(model.weights.matrix.asString())
    const token = "Eek", length = 100;
    for(let count = 0; count < 50; count++){
        const tokens = model.infer(token, length);
        console.log(JSON.stringify(tokens));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2ZsdWZmeUNhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTW9kZWwsIENvcnB1cywgVm9jYWJ1bGFyeSwgQXR0ZW50aW9uSGVhZCB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsdWZmeUNhdEV4YW1wbGVJKCkge1xuICAvLyBjb25zdCBjb3JwdXMgPSBDb3JwdXMuZnJvbUpTT04oW1xuICAvLyAgIFtcIkZsdWZmeVwiLCBcIkNhdFwiXSxcbiAgLy8gICBbXCJTbWVsbHlcIiwgXCJEb2dcIl0sXG4gIC8vICAgW1wiRmx1ZmZ5XCIsIFwiQ2F0XCIsIFwiUHVycnNcIl0sXG4gIC8vICAgW1wiU21lbGx5XCIsIFwiRG9nXCIsIFwiQmFya3NcIl0sXG4gIC8vICAgW1wiRG9nXCIsIFwiQ2hhc2VzXCIsIFwiQ2F0XCJdLFxuICAvLyAgIFtcIkNhdFwiLCBcIlNjcmF0Y2hlc1wiLCBcIkRvZ1wiXVxuICAvLyBdKTtcblxuICBjb25zdCBjb3JwdXMgPSBDb3JwdXMuZnJvbUpTT04oW1xuICAgIFtcIkVla1wiLCBcIk1lb3dcIl0sXG4gICAgW1wiQmFya1wiLCBcIkh1bmdyeVwiXSxcbiAgICBbXCJNZW93XCIsIFwiSHVuZ3J5XCJdXG4gIF0pO1xuXG4gIGNvbnN0IHRva2VucyA9IGNvcnB1cy5hc1Rva2VucygpLFxuICAgICAgICBtb2RlbCA9XG5cbiAgICAgICAgICA8TW9kZWw+XG4gICAgICAgICAgICA8Vm9jYWJ1bGFyeSB0b2tlbnM9e3Rva2Vuc30gLz5cbiAgICAgICAgICAgIDxBdHRlbnRpb25IZWFkLz5cbiAgICAgICAgICA8L01vZGVsPlxuXG4gICAgICAgIDtcblxuICBtb2RlbC50cmFpbihjb3JwdXMpO1xuXG4gIC8vIGNvbnNvbGUubG9nKG1vZGVsLndlaWdodHMubWF0cml4LmFzU3RyaW5nKCkpXG5cbiAgY29uc3QgdG9rZW4gPSBcIkVla1wiLFxuICAgICAgICBsZW5ndGggPSAxMDA7XG5cbiAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IDUwOyBjb3VudCsrKSB7XG4gICAgY29uc3QgdG9rZW5zID0gbW9kZWwuaW5mZXIodG9rZW4sIGxlbmd0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2tlbnMpKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJmbHVmZnlDYXRFeGFtcGxlSSIsImNvcnB1cyIsIkNvcnB1cyIsImZyb21KU09OIiwidG9rZW5zIiwiYXNUb2tlbnMiLCJtb2RlbCIsIk1vZGVsIiwiVm9jYWJ1bGFyeSIsIkF0dGVudGlvbkhlYWQiLCJ0cmFpbiIsInRva2VuIiwibGVuZ3RoIiwiY291bnQiLCJpbmZlciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3VCQUZpQztBQUUxQyxTQUFTQTtJQUN0QixtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsTUFBTTtJQUVOLE1BQU1DLFNBQVNDLGFBQU0sQ0FBQ0MsUUFBUSxDQUFDO1FBQzdCO1lBQUM7WUFBTztTQUFPO1FBQ2Y7WUFBQztZQUFRO1NBQVM7UUFDbEI7WUFBQztZQUFRO1NBQVM7S0FDbkI7SUFFRCxNQUFNQyxTQUFTSCxPQUFPSSxRQUFRLElBQ3hCQyxzQkFFRSxvQkFBQ0MsWUFBSyxzQkFDSixvQkFBQ0MsaUJBQVU7UUFBQ0osUUFBUUE7c0JBQ3BCLG9CQUFDSyxvQkFBYTtJQUt4QkgsTUFBTUksS0FBSyxDQUFDVDtJQUVaLCtDQUErQztJQUUvQyxNQUFNVSxRQUFRLE9BQ1JDLFNBQVM7SUFFZixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUSxJQUFJQSxRQUFTO1FBQ3ZDLE1BQU1ULFNBQVNFLE1BQU1RLEtBQUssQ0FBQ0gsT0FBT0M7UUFFbENHLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDZDtJQUM3QjtBQUNGIn0=