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
    // const corpus = Corpus.fromJSON([
    //   ["Fluffy", "Cat"],
    //   ["Smelly", "Dog"],
    //   ["Fluffy", "Cat", "Purrs"],
    //   ["Smelly", "Dog", "Barks"],
    //   ["Dog", "Chases", "Cat"],
    //   ["Cat", "Scratches", "Dog"]
    // ]);
    var corpus = _index.Corpus.fromJSON([
        [
            "Cats",
            "Meow"
        ]
    ]);
    tokens = corpus.asTokens();
    var model = /*#__PURE__*/ React.createElement(_index.Model, null, /*#__PURE__*/ React.createElement(_index.Vocabulary, {
        tokens: tokens
    }), /*#__PURE__*/ React.createElement(_index.Weights, null));
    model.train(corpus);
    console.log(model.weights.matrix.asString());
    var token = "Cats", length = 2, cutoff = 1 / 3, threshold = 1;
    tokens = model.infer(token, length, cutoff, threshold);
    console.log(JSON.stringify(tokens));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL2ZsdWZmeUNhdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgTW9kZWwsIENvcnB1cywgV2VpZ2h0cywgVm9jYWJ1bGFyeSB9IGZyb20gXCIuLi9pbmRleFwiOyAgLy8vXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZsdWZmeUNhdEV4YW1wbGVJKCkge1xuICBsZXQgdG9rZW5zO1xuXG4gIC8vIGNvbnN0IGNvcnB1cyA9IENvcnB1cy5mcm9tSlNPTihbXG4gIC8vICAgW1wiRmx1ZmZ5XCIsIFwiQ2F0XCJdLFxuICAvLyAgIFtcIlNtZWxseVwiLCBcIkRvZ1wiXSxcbiAgLy8gICBbXCJGbHVmZnlcIiwgXCJDYXRcIiwgXCJQdXJyc1wiXSxcbiAgLy8gICBbXCJTbWVsbHlcIiwgXCJEb2dcIiwgXCJCYXJrc1wiXSxcbiAgLy8gICBbXCJEb2dcIiwgXCJDaGFzZXNcIiwgXCJDYXRcIl0sXG4gIC8vICAgW1wiQ2F0XCIsIFwiU2NyYXRjaGVzXCIsIFwiRG9nXCJdXG4gIC8vIF0pO1xuXG4gIGNvbnN0IGNvcnB1cyA9IENvcnB1cy5mcm9tSlNPTihbXG4gICAgW1wiQ2F0c1wiLCBcIk1lb3dcIl1cbiAgXSk7XG5cbiAgdG9rZW5zID0gY29ycHVzLmFzVG9rZW5zKCk7XG5cbiAgY29uc3QgbW9kZWwgPVxuXG4gICAgPE1vZGVsPlxuICAgICAgPFZvY2FidWxhcnkgdG9rZW5zPXt0b2tlbnN9IC8+XG4gICAgICA8V2VpZ2h0cy8+XG4gICAgPC9Nb2RlbD5cblxuICA7XG5cbiAgbW9kZWwudHJhaW4oY29ycHVzKTtcblxuICBjb25zb2xlLmxvZyhtb2RlbC53ZWlnaHRzLm1hdHJpeC5hc1N0cmluZygpKVxuXG4gIGNvbnN0IHRva2VuID0gXCJDYXRzXCIsXG4gICAgICAgIGxlbmd0aCA9IDIsXG4gICAgICAgIGN1dG9mZiA9IDEvMyxcbiAgICAgICAgdGhyZXNob2xkID0gMTtcblxuICB0b2tlbnMgPSBtb2RlbC5pbmZlcih0b2tlbiwgbGVuZ3RoLCBjdXRvZmYsIHRocmVzaG9sZCk7XG5cbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodG9rZW5zKSk7XG59XG4iXSwibmFtZXMiOlsiZmx1ZmZ5Q2F0RXhhbXBsZUkiLCJ0b2tlbnMiLCJjb3JwdXMiLCJDb3JwdXMiLCJmcm9tSlNPTiIsImFzVG9rZW5zIiwibW9kZWwiLCJNb2RlbCIsIlZvY2FidWxhcnkiLCJXZWlnaHRzIiwidHJhaW4iLCJjb25zb2xlIiwibG9nIiwid2VpZ2h0cyIsIm1hdHJpeCIsImFzU3RyaW5nIiwidG9rZW4iLCJsZW5ndGgiLCJjdXRvZmYiLCJ0aHJlc2hvbGQiLCJpbmZlciIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlBOzs7ZUFBd0JBOzs7cUJBRjJCO0FBRXBDLFNBQVNBO0lBQ3RCLElBQUlDO0lBRUosbUNBQW1DO0lBQ25DLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLE1BQU07SUFFTixJQUFNQyxTQUFTQyxhQUFNLENBQUNDLFFBQVEsQ0FBQztRQUM3QjtZQUFDO1lBQVE7U0FBTztLQUNqQjtJQUVESCxTQUFTQyxPQUFPRyxRQUFRO0lBRXhCLElBQU1DLHNCQUVKLG9CQUFDQyxZQUFLLHNCQUNKLG9CQUFDQyxpQkFBVTtRQUFDUCxRQUFRQTtzQkFDcEIsb0JBQUNRLGNBQU87SUFLWkgsTUFBTUksS0FBSyxDQUFDUjtJQUVaUyxRQUFRQyxHQUFHLENBQUNOLE1BQU1PLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRO0lBRXpDLElBQU1DLFFBQVEsUUFDUkMsU0FBUyxHQUNUQyxTQUFTLElBQUUsR0FDWEMsWUFBWTtJQUVsQmxCLFNBQVNLLE1BQU1jLEtBQUssQ0FBQ0osT0FBT0MsUUFBUUMsUUFBUUM7SUFFNUNSLFFBQVFDLEdBQUcsQ0FBQ1MsS0FBS0MsU0FBUyxDQUFDckI7QUFDN0IifQ==