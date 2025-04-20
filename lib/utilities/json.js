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
var _matrix = /*#__PURE__*/ _interop_require_default(require("../matrix"));
var _weights = /*#__PURE__*/ _interop_require_default(require("../element/weights"));
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("../element/vocabulary"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function matrixFromJSON(json) {
    var matrix;
    matrix = json.matrix;
    json = matrix; ///
    matrix = _matrix.default.fromJSON(json);
    return matrix;
}
function weightsFromJSON(json) {
    var weights;
    weights = json.weights;
    json = weights; ///
    weights = _weights.default.fromJSON(json);
    return weights;
}
function vocabularyFromJSON(json) {
    var vocabulary;
    vocabulary = json.vocabulary;
    json = vocabulary; ///
    vocabulary = _vocabulary.default.fromJSON(json);
    return vocabulary;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgV2VpZ2h0cyBmcm9tIFwiLi4vZWxlbWVudC93ZWlnaHRzXCI7XG5pbXBvcnQgVm9jYWJ1bGFyeSBmcm9tIFwiLi4vZWxlbWVudC92b2NhYnVsYXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXhGcm9tSlNPTihqc29uKSB7XG4gIGxldCBtYXRyaXg7XG5cbiAgKHsgbWF0cml4IH0gPSBqc29uKTtcblxuICBqc29uID0gbWF0cml4OyAgLy8vXG5cbiAgbWF0cml4ID0gTWF0cml4LmZyb21KU09OKGpzb24pO1xuXG4gIHJldHVybiBtYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWlnaHRzRnJvbUpTT04oanNvbikge1xuICBsZXQgd2VpZ2h0cztcblxuICAoeyB3ZWlnaHRzIH0gPSBqc29uKTtcblxuICBqc29uID0gd2VpZ2h0czsgIC8vL1xuXG4gIHdlaWdodHMgPSBXZWlnaHRzLmZyb21KU09OKGpzb24pO1xuXG4gIHJldHVybiB3ZWlnaHRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pIHtcbiAgbGV0IHZvY2FidWxhcnk7XG5cbiAgKHsgdm9jYWJ1bGFyeSB9ID0ganNvbik7XG5cbiAganNvbiA9IHZvY2FidWxhcnk7ICAvLy9cblxuICB2b2NhYnVsYXJ5ID0gVm9jYWJ1bGFyeS5mcm9tSlNPTihqc29uKTtcblxuICByZXR1cm4gdm9jYWJ1bGFyeTtcbn0iXSwibmFtZXMiOlsibWF0cml4RnJvbUpTT04iLCJ2b2NhYnVsYXJ5RnJvbUpTT04iLCJ3ZWlnaHRzRnJvbUpTT04iLCJqc29uIiwibWF0cml4IiwiTWF0cml4IiwiZnJvbUpTT04iLCJ3ZWlnaHRzIiwiV2VpZ2h0cyIsInZvY2FidWxhcnkiLCJWb2NhYnVsYXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLGNBQWM7ZUFBZEE7O0lBd0JBQyxrQkFBa0I7ZUFBbEJBOztJQVpBQyxlQUFlO2VBQWZBOzs7NkRBaEJHOzhEQUNDO2lFQUNHOzs7Ozs7QUFFaEIsU0FBU0YsZUFBZUcsSUFBSTtJQUNqQyxJQUFJQztJQUVEQSxTQUFXRCxLQUFYQztJQUVIRCxPQUFPQyxRQUFTLEdBQUc7SUFFbkJBLFNBQVNDLGVBQU0sQ0FBQ0MsUUFBUSxDQUFDSDtJQUV6QixPQUFPQztBQUNUO0FBRU8sU0FBU0YsZ0JBQWdCQyxJQUFJO0lBQ2xDLElBQUlJO0lBRURBLFVBQVlKLEtBQVpJO0lBRUhKLE9BQU9JLFNBQVUsR0FBRztJQUVwQkEsVUFBVUMsZ0JBQU8sQ0FBQ0YsUUFBUSxDQUFDSDtJQUUzQixPQUFPSTtBQUNUO0FBRU8sU0FBU04sbUJBQW1CRSxJQUFJO0lBQ3JDLElBQUlNO0lBRURBLGFBQWVOLEtBQWZNO0lBRUhOLE9BQU9NLFlBQWEsR0FBRztJQUV2QkEsYUFBYUMsbUJBQVUsQ0FBQ0osUUFBUSxDQUFDSDtJQUVqQyxPQUFPTTtBQUNUIn0=