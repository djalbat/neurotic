"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    matrixFromJSON: function() {
        return matrixFromJSON;
    },
    vocabularyFromJSON: function() {
        return vocabularyFromJSON;
    },
    weightsFromJSON: function() {
        return weightsFromJSON;
    }
});
var _registry = /*#__PURE__*/ _interop_require_default(require("../registry"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function matrixFromJSON(json) {
    var matrix;
    matrix = json.matrix;
    json = matrix; ///
    var Matrix = _registry.default.Matrix;
    matrix = Matrix.fromJSON(json);
    return matrix;
}
function weightsFromJSON(json) {
    var weights;
    weights = json.weights;
    json = weights; ///
    var Weights = _registry.default.Weights;
    weights = Weights.fromJSON(json);
    return weights;
}
function vocabularyFromJSON(json) {
    var vocabulary;
    vocabulary = json.vocabulary;
    json = vocabulary; ///
    var Vocabulary = _registry.default.Vocabulary;
    vocabulary = Vocabulary.fromJSON(json);
    return vocabulary;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4RnJvbUpTT04oanNvbikge1xuICBsZXQgbWF0cml4O1xuXG4gICh7IG1hdHJpeCB9ID0ganNvbik7XG5cbiAganNvbiA9IG1hdHJpeDsgIC8vL1xuXG4gIGNvbnN0IHsgTWF0cml4IH0gPSByZWdpc3RyeTtcblxuICBtYXRyaXggPSBNYXRyaXguZnJvbUpTT04oanNvbik7XG5cbiAgcmV0dXJuIG1hdHJpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlaWdodHNGcm9tSlNPTihqc29uKSB7XG4gIGxldCB3ZWlnaHRzO1xuXG4gICh7IHdlaWdodHMgfSA9IGpzb24pO1xuXG4gIGpzb24gPSB3ZWlnaHRzOyAgLy8vXG5cbiAgY29uc3QgeyBXZWlnaHRzIH0gPSByZWdpc3RyeTtcblxuICB3ZWlnaHRzID0gV2VpZ2h0cy5mcm9tSlNPTihqc29uKTtcblxuICByZXR1cm4gd2VpZ2h0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZvY2FidWxhcnlGcm9tSlNPTihqc29uKSB7XG4gIGxldCB2b2NhYnVsYXJ5O1xuXG4gICh7IHZvY2FidWxhcnkgfSA9IGpzb24pO1xuXG4gIGpzb24gPSB2b2NhYnVsYXJ5OyAgLy8vXG5cbiAgY29uc3QgeyBWb2NhYnVsYXJ5IH0gPSByZWdpc3RyeTtcblxuICB2b2NhYnVsYXJ5ID0gVm9jYWJ1bGFyeS5mcm9tSlNPTihqc29uKTtcblxuICByZXR1cm4gdm9jYWJ1bGFyeTtcbn0iXSwibmFtZXMiOlsibWF0cml4RnJvbUpTT04iLCJ2b2NhYnVsYXJ5RnJvbUpTT04iLCJ3ZWlnaHRzRnJvbUpTT04iLCJqc29uIiwibWF0cml4IiwiTWF0cml4IiwicmVnaXN0cnkiLCJmcm9tSlNPTiIsIndlaWdodHMiLCJXZWlnaHRzIiwidm9jYWJ1bGFyeSIsIlZvY2FidWxhcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsY0FBYztlQUFkQTs7SUE0QkFDLGtCQUFrQjtlQUFsQkE7O0lBZEFDLGVBQWU7ZUFBZkE7OzsrREFoQks7Ozs7OztBQUVkLFNBQVNGLGVBQWVHLElBQUk7SUFDakMsSUFBSUM7SUFFREEsU0FBV0QsS0FBWEM7SUFFSEQsT0FBT0MsUUFBUyxHQUFHO0lBRW5CLElBQU0sQUFBRUMsU0FBV0MsaUJBQVEsQ0FBbkJEO0lBRVJELFNBQVNDLE9BQU9FLFFBQVEsQ0FBQ0o7SUFFekIsT0FBT0M7QUFDVDtBQUVPLFNBQVNGLGdCQUFnQkMsSUFBSTtJQUNsQyxJQUFJSztJQUVEQSxVQUFZTCxLQUFaSztJQUVITCxPQUFPSyxTQUFVLEdBQUc7SUFFcEIsSUFBTSxBQUFFQyxVQUFZSCxpQkFBUSxDQUFwQkc7SUFFUkQsVUFBVUMsUUFBUUYsUUFBUSxDQUFDSjtJQUUzQixPQUFPSztBQUNUO0FBRU8sU0FBU1AsbUJBQW1CRSxJQUFJO0lBQ3JDLElBQUlPO0lBRURBLGFBQWVQLEtBQWZPO0lBRUhQLE9BQU9PLFlBQWEsR0FBRztJQUV2QixJQUFNLEFBQUVDLGFBQWVMLGlCQUFRLENBQXZCSztJQUVSRCxhQUFhQyxXQUFXSixRQUFRLENBQUNKO0lBRWpDLE9BQU9PO0FBQ1QifQ==