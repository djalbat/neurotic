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
    // const corpus = Corpus.fromJSON([
    //   ["Cats", "Meow"]
    // ]);
    tokens = corpus.asTokens();
    var model = /*#__PURE__*/ React.createElement(_index.Model, null, /*#__PURE__*/ React.createElement(_index.Vocabulary, {
        tokens: tokens
    }), /*#__PURE__*/ React.createElement(_index.Weights, null));
    model.train(corpus);
    // console.log(model.weights.matrix.asString())
    var token = "Fluffy", length = 10;
    for(var count = 0; count < 50; count++){
        tokens = model.infer(token, length);
        console.log(JSON.stringify(tokens));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2ZsdWZmeUNhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTW9kZWwsIENvcnB1cywgV2VpZ2h0cywgVm9jYWJ1bGFyeSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsdWZmeUNhdEV4YW1wbGVJKCkge1xuICBsZXQgdG9rZW5zO1xuXG4gIGNvbnN0IGNvcnB1cyA9IENvcnB1cy5mcm9tSlNPTihbXG4gICAgW1wiRmx1ZmZ5XCIsIFwiQ2F0XCJdLFxuICAgIFtcIlNtZWxseVwiLCBcIkRvZ1wiXSxcbiAgICBbXCJGbHVmZnlcIiwgXCJDYXRcIiwgXCJQdXJyc1wiXSxcbiAgICBbXCJTbWVsbHlcIiwgXCJEb2dcIiwgXCJCYXJrc1wiXSxcbiAgICBbXCJEb2dcIiwgXCJDaGFzZXNcIiwgXCJDYXRcIl0sXG4gICAgW1wiQ2F0XCIsIFwiU2NyYXRjaGVzXCIsIFwiRG9nXCJdXG4gIF0pO1xuXG4gIC8vIGNvbnN0IGNvcnB1cyA9IENvcnB1cy5mcm9tSlNPTihbXG4gIC8vICAgW1wiQ2F0c1wiLCBcIk1lb3dcIl1cbiAgLy8gXSk7XG5cbiAgdG9rZW5zID0gY29ycHVzLmFzVG9rZW5zKCk7XG5cbiAgY29uc3QgbW9kZWwgPVxuXG4gICAgPE1vZGVsPlxuICAgICAgPFZvY2FidWxhcnkgdG9rZW5zPXt0b2tlbnN9IC8+XG4gICAgICA8V2VpZ2h0cy8+XG4gICAgPC9Nb2RlbD5cblxuICA7XG5cbiAgbW9kZWwudHJhaW4oY29ycHVzKTtcblxuICAvLyBjb25zb2xlLmxvZyhtb2RlbC53ZWlnaHRzLm1hdHJpeC5hc1N0cmluZygpKVxuXG4gIGNvbnN0IHRva2VuID0gXCJGbHVmZnlcIixcbiAgICAgICAgbGVuZ3RoID0gMTA7XG5cbiAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IDUwOyBjb3VudCsrKSB7XG4gICAgdG9rZW5zID0gbW9kZWwuaW5mZXIodG9rZW4sIGxlbmd0aCk7XG5cbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0b2tlbnMpKTtcbiAgfVxufSJdLCJuYW1lcyI6WyJmbHVmZnlDYXRFeGFtcGxlSSIsInRva2VucyIsImNvcnB1cyIsIkNvcnB1cyIsImZyb21KU09OIiwiYXNUb2tlbnMiLCJtb2RlbCIsIk1vZGVsIiwiVm9jYWJ1bGFyeSIsIldlaWdodHMiLCJ0cmFpbiIsInRva2VuIiwibGVuZ3RoIiwiY291bnQiLCJpbmZlciIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O3FCQUYyQjtBQUVwQyxTQUFTQTtJQUN0QixJQUFJQztJQUVKLElBQU1DLFNBQVNDLGFBQU0sQ0FBQ0MsUUFBUSxDQUFDO1FBQzdCO1lBQUM7WUFBVTtTQUFNO1FBQ2pCO1lBQUM7WUFBVTtTQUFNO1FBQ2pCO1lBQUM7WUFBVTtZQUFPO1NBQVE7UUFDMUI7WUFBQztZQUFVO1lBQU87U0FBUTtRQUMxQjtZQUFDO1lBQU87WUFBVTtTQUFNO1FBQ3hCO1lBQUM7WUFBTztZQUFhO1NBQU07S0FDNUI7SUFFRCxtQ0FBbUM7SUFDbkMscUJBQXFCO0lBQ3JCLE1BQU07SUFFTkgsU0FBU0MsT0FBT0csUUFBUTtJQUV4QixJQUFNQyxzQkFFSixvQkFBQ0MsWUFBSyxzQkFDSixvQkFBQ0MsaUJBQVU7UUFBQ1AsUUFBUUE7c0JBQ3BCLG9CQUFDUSxjQUFPO0lBS1pILE1BQU1JLEtBQUssQ0FBQ1I7SUFFWiwrQ0FBK0M7SUFFL0MsSUFBTVMsUUFBUSxVQUNSQyxTQUFTO0lBRWYsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVEsSUFBSUEsUUFBUztRQUN2Q1osU0FBU0ssTUFBTVEsS0FBSyxDQUFDSCxPQUFPQztRQUU1QkcsUUFBUUMsR0FBRyxDQUFDQyxLQUFLQyxTQUFTLENBQUNqQjtJQUM3QjtBQUNGIn0=