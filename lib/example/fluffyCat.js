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
var _index = require("../index");
function fluffyCatExampleI() {
    var tokens;
    var corpus = _index.Corpus.fromJSON([
        [
            "Fluffy",
            "Cat"
        ],
        [
            "Smelly",
            "Dog"
        ],
        [
            "Fluffy",
            "Cat",
            "Purrs"
        ],
        [
            "Smelly",
            "Dog",
            "Barks"
        ],
        [
            "Dog",
            "Chases",
            "Cat"
        ],
        [
            "Cat",
            "Scratches",
            "Dog"
        ]
    ]);
    tokens = corpus.asTokens();
    var model = /*#__PURE__*/ React.createElement(_index.Model, null, /*#__PURE__*/ React.createElement(_index.Vocabulary, {
        tokens: tokens
    }), /*#__PURE__*/ React.createElement(_index.Weights, null)), batch = false, epochs = 10, learningRate = 0.5;
    model.train(corpus, batch, epochs, learningRate);
    var token = "Cat", length = 2, cutoff = 0.03, threshold = 3 / 4, temperature = 1 / 2;
    for(var count = 0; count < 100; count++){
        tokens = model.infer(token, length, cutoff, threshold, temperature);
        console.log(JSON.stringify(tokens));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2ZsdWZmeUNhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTW9kZWwsIENvcnB1cywgV2VpZ2h0cywgVm9jYWJ1bGFyeSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsdWZmeUNhdEV4YW1wbGVJKCkge1xuICBsZXQgdG9rZW5zO1xuXG4gIGNvbnN0IGNvcnB1cyA9IENvcnB1cy5mcm9tSlNPTihbXG4gICAgW1wiRmx1ZmZ5XCIsIFwiQ2F0XCJdLFxuICAgIFtcIlNtZWxseVwiLCBcIkRvZ1wiXSxcbiAgICBbXCJGbHVmZnlcIiwgXCJDYXRcIiwgXCJQdXJyc1wiXSxcbiAgICBbXCJTbWVsbHlcIiwgXCJEb2dcIiwgXCJCYXJrc1wiXSxcbiAgICBbXCJEb2dcIiwgXCJDaGFzZXNcIiwgXCJDYXRcIl0sXG4gICAgW1wiQ2F0XCIsIFwiU2NyYXRjaGVzXCIsIFwiRG9nXCJdXG4gIF0pO1xuXG4gIHRva2VucyA9IGNvcnB1cy5hc1Rva2VucygpO1xuXG4gIGNvbnN0IG1vZGVsID1cblxuICAgICAgICAgIDxNb2RlbD5cbiAgICAgICAgICAgIDxWb2NhYnVsYXJ5IHRva2Vucz17dG9rZW5zfSAvPlxuICAgICAgICAgICAgPFdlaWdodHMvPlxuICAgICAgICAgIDwvTW9kZWw+XG5cbiAgICAgICAgLFxuICAgICAgICBiYXRjaCA9IGZhbHNlLFxuICAgICAgICBlcG9jaHMgPSAxMCxcbiAgICAgICAgbGVhcm5pbmdSYXRlID0gMC41O1xuXG4gIG1vZGVsLnRyYWluKGNvcnB1cywgYmF0Y2gsIGVwb2NocywgbGVhcm5pbmdSYXRlKTtcblxuICBjb25zdCB0b2tlbiA9IFwiQ2F0XCIsXG4gICAgICAgIGxlbmd0aCA9IDIsXG4gICAgICAgIGN1dG9mZiA9IDAuMDMsXG4gICAgICAgIHRocmVzaG9sZCA9IDMvNCxcbiAgICAgICAgdGVtcGVyYXR1cmUgPSAxLzI7XG5cbiAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IDEwMDsgY291bnQrKykge1xuICAgIHRva2VucyA9IG1vZGVsLmluZmVyKHRva2VuLCBsZW5ndGgsIGN1dG9mZiwgdGhyZXNob2xkLCB0ZW1wZXJhdHVyZSk7XG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2tlbnMpKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZsdWZmeUNhdEV4YW1wbGVJIiwidG9rZW5zIiwiY29ycHVzIiwiQ29ycHVzIiwiZnJvbUpTT04iLCJhc1Rva2VucyIsIm1vZGVsIiwiTW9kZWwiLCJWb2NhYnVsYXJ5IiwiV2VpZ2h0cyIsImJhdGNoIiwiZXBvY2hzIiwibGVhcm5pbmdSYXRlIiwidHJhaW4iLCJ0b2tlbiIsImxlbmd0aCIsImN1dG9mZiIsInRocmVzaG9sZCIsInRlbXBlcmF0dXJlIiwiY291bnQiLCJpbmZlciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3FCQUYyQjtBQUVwQyxTQUFTQTtJQUN0QixJQUFJQztJQUVKLElBQU1DLFNBQVNDLGFBQU0sQ0FBQ0MsUUFBUSxDQUFDO1FBQzdCO1lBQUM7WUFBVTtTQUFNO1FBQ2pCO1lBQUM7WUFBVTtTQUFNO1FBQ2pCO1lBQUM7WUFBVTtZQUFPO1NBQVE7UUFDMUI7WUFBQztZQUFVO1lBQU87U0FBUTtRQUMxQjtZQUFDO1lBQU87WUFBVTtTQUFNO1FBQ3hCO1lBQUM7WUFBTztZQUFhO1NBQU07S0FDNUI7SUFFREgsU0FBU0MsT0FBT0csUUFBUTtJQUV4QixJQUFNQyxzQkFFRSxvQkFBQ0MsWUFBSyxzQkFDSixvQkFBQ0MsaUJBQVU7UUFBQ1AsUUFBUUE7c0JBQ3BCLG9CQUFDUSxjQUFPLFVBSVpDLFFBQVEsT0FDUkMsU0FBUyxJQUNUQyxlQUFlO0lBRXJCTixNQUFNTyxLQUFLLENBQUNYLFFBQVFRLE9BQU9DLFFBQVFDO0lBRW5DLElBQU1FLFFBQVEsT0FDUkMsU0FBUyxHQUNUQyxTQUFTLE1BQ1RDLFlBQVksSUFBRSxHQUNkQyxjQUFjLElBQUU7SUFFdEIsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVEsS0FBS0EsUUFBUztRQUN4Q2xCLFNBQVNLLE1BQU1jLEtBQUssQ0FBQ04sT0FBT0MsUUFBUUMsUUFBUUMsV0FBV0M7UUFFdkRHLFFBQVFDLEdBQUcsQ0FBQ0MsS0FBS0MsU0FBUyxDQUFDdkI7SUFDN0I7QUFDRiJ9