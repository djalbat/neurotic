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
    chunksFromJSON: function() {
        return chunksFromJSON;
    },
    chunksToChunksJSON: function() {
        return chunksToChunksJSON;
    },
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
var _chunk = /*#__PURE__*/ _interop_require_default(require("../chunk"));
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
function chunksFromJSON(json) {
    var chunksJSON = json, chunks = chunksJSON.map(function(chunkJSON) {
        var _$json = chunkJSON, chunk = _chunk.default.fromJSON(_$json);
        return chunk;
    });
    return chunks;
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
function chunksToChunksJSON(chunks) {
    var chunksJSON = chunks.map(function(chunk) {
        var chunkJSON = chunk.toJSON();
        return chunkJSON;
    });
    return chunksJSON;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENodW5rIGZyb20gXCIuLi9jaHVua1wiO1xuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgV2VpZ2h0cyBmcm9tIFwiLi4vZWxlbWVudC93ZWlnaHRzXCI7XG5pbXBvcnQgVm9jYWJ1bGFyeSBmcm9tIFwiLi4vZWxlbWVudC92b2NhYnVsYXJ5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRyaXhGcm9tSlNPTihqc29uKSB7XG4gIGxldCBtYXRyaXg7XG5cbiAgKHsgbWF0cml4IH0gPSBqc29uKTtcblxuICBqc29uID0gbWF0cml4OyAgLy8vXG5cbiAgbWF0cml4ID0gTWF0cml4LmZyb21KU09OKGpzb24pO1xuXG4gIHJldHVybiBtYXRyaXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaHVua3NGcm9tSlNPTihqc29uKSB7XG4gIGNvbnN0IGNodW5rc0pTT04gPSBqc29uLCAgLy8vXG4gICAgICAgIGNodW5rcyA9IGNodW5rc0pTT04ubWFwKChjaHVua0pTT04pID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gY2h1bmtKU09OLCAvLy9cbiAgICAgICAgICAgIGNodW5rID0gQ2h1bmsuZnJvbUpTT04oanNvbik7XG5cbiAgICAgICAgICByZXR1cm4gY2h1bms7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBjaHVua3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWlnaHRzRnJvbUpTT04oanNvbikge1xuICBsZXQgd2VpZ2h0cztcblxuICAoeyB3ZWlnaHRzIH0gPSBqc29uKTtcblxuICBqc29uID0gd2VpZ2h0czsgIC8vL1xuXG4gIHdlaWdodHMgPSBXZWlnaHRzLmZyb21KU09OKGpzb24pO1xuXG4gIHJldHVybiB3ZWlnaHRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pIHtcbiAgbGV0IHZvY2FidWxhcnk7XG5cbiAgKHsgdm9jYWJ1bGFyeSB9ID0ganNvbik7XG5cbiAganNvbiA9IHZvY2FidWxhcnk7ICAvLy9cblxuICB2b2NhYnVsYXJ5ID0gVm9jYWJ1bGFyeS5mcm9tSlNPTihqc29uKTtcblxuICByZXR1cm4gdm9jYWJ1bGFyeTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNodW5rc1RvQ2h1bmtzSlNPTihjaHVua3MpIHtcbiAgY29uc3QgY2h1bmtzSlNPTiA9IGNodW5rcy5tYXAoKGNodW5rKSA9PiB7XG4gICAgY29uc3QgY2h1bmtKU09OID0gY2h1bmsudG9KU09OKCk7XG5cbiAgICByZXR1cm4gY2h1bmtKU09OO1xuICB9KTtcblxuICByZXR1cm4gY2h1bmtzSlNPTjtcbn1cblxuIl0sIm5hbWVzIjpbImNodW5rc0Zyb21KU09OIiwiY2h1bmtzVG9DaHVua3NKU09OIiwibWF0cml4RnJvbUpTT04iLCJ2b2NhYnVsYXJ5RnJvbUpTT04iLCJ3ZWlnaHRzRnJvbUpTT04iLCJqc29uIiwibWF0cml4IiwiTWF0cml4IiwiZnJvbUpTT04iLCJjaHVua3NKU09OIiwiY2h1bmtzIiwibWFwIiwiY2h1bmtKU09OIiwiY2h1bmsiLCJDaHVuayIsIndlaWdodHMiLCJXZWlnaHRzIiwidm9jYWJ1bGFyeSIsIlZvY2FidWxhcnkiLCJ0b0pTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1CZ0JBLGNBQWM7ZUFBZEE7O0lBb0NBQyxrQkFBa0I7ZUFBbEJBOztJQWhEQUMsY0FBYztlQUFkQTs7SUFvQ0FDLGtCQUFrQjtlQUFsQkE7O0lBWkFDLGVBQWU7ZUFBZkE7Ozs0REE3QkU7NkRBQ0M7OERBQ0M7aUVBQ0c7Ozs7OztBQUVoQixTQUFTRixlQUFlRyxJQUFJO0lBQ2pDLElBQUlDO0lBRURBLFNBQVdELEtBQVhDO0lBRUhELE9BQU9DLFFBQVMsR0FBRztJQUVuQkEsU0FBU0MsZUFBTSxDQUFDQyxRQUFRLENBQUNIO0lBRXpCLE9BQU9DO0FBQ1Q7QUFFTyxTQUFTTixlQUFlSyxJQUFJO0lBQ2pDLElBQU1JLGFBQWFKLE1BQ2JLLFNBQVNELFdBQVdFLEdBQUcsQ0FBQyxTQUFDQztRQUN2QixJQUFNUCxTQUFPTyxXQUNYQyxRQUFRQyxjQUFLLENBQUNOLFFBQVEsQ0FBQ0g7UUFFekIsT0FBT1E7SUFDVDtJQUVOLE9BQU9IO0FBQ1Q7QUFFTyxTQUFTTixnQkFBZ0JDLElBQUk7SUFDbEMsSUFBSVU7SUFFREEsVUFBWVYsS0FBWlU7SUFFSFYsT0FBT1UsU0FBVSxHQUFHO0lBRXBCQSxVQUFVQyxnQkFBTyxDQUFDUixRQUFRLENBQUNIO0lBRTNCLE9BQU9VO0FBQ1Q7QUFFTyxTQUFTWixtQkFBbUJFLElBQUk7SUFDckMsSUFBSVk7SUFFREEsYUFBZVosS0FBZlk7SUFFSFosT0FBT1ksWUFBYSxHQUFHO0lBRXZCQSxhQUFhQyxtQkFBVSxDQUFDVixRQUFRLENBQUNIO0lBRWpDLE9BQU9ZO0FBQ1Q7QUFFTyxTQUFTaEIsbUJBQW1CUyxNQUFNO0lBQ3ZDLElBQU1ELGFBQWFDLE9BQU9DLEdBQUcsQ0FBQyxTQUFDRTtRQUM3QixJQUFNRCxZQUFZQyxNQUFNTSxNQUFNO1FBRTlCLE9BQU9QO0lBQ1Q7SUFFQSxPQUFPSDtBQUNUIn0=