"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get chunksFromJSON () {
        return chunksFromJSON;
    },
    get chunksToChunksJSON () {
        return chunksToChunksJSON;
    },
    get frequencyVectorsFromJSON () {
        return frequencyVectorsFromJSON;
    },
    get frequencyVectorsToFrequencyVectorsJSON () {
        return frequencyVectorsToFrequencyVectorsJSON;
    },
    get headFromJSON () {
        return headFromJSON;
    },
    get kWeightsFromJSON () {
        return kWeightsFromJSON;
    },
    get matrixFromJSON () {
        return matrixFromJSON;
    },
    get qWeightsFromJSON () {
        return qWeightsFromJSON;
    },
    get vWeightsFromJSON () {
        return vWeightsFromJSON;
    },
    get vocabularyFromJSON () {
        return vocabularyFromJSON;
    },
    get weightsFromJSON () {
        return weightsFromJSON;
    }
});
var _chunk = /*#__PURE__*/ _interop_require_default(require("../chunk"));
var _matrix = /*#__PURE__*/ _interop_require_default(require("../matrix"));
var _weights = /*#__PURE__*/ _interop_require_default(require("../element/weights"));
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("../element/vocabulary"));
var _markov = /*#__PURE__*/ _interop_require_default(require("../element/head/markov"));
var _attention = /*#__PURE__*/ _interop_require_default(require("../element/head/attention"));
var _frequency = /*#__PURE__*/ _interop_require_default(require("../vector/frequency"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function headFromJSON(json) {
    var head;
    head = json.head;
    json = head; ///
    head = _markov.default.fromJSON(json) || _attention.default.fromJSON(json);
    return head;
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
function qWeightsFromJSON(json) {
    var qWeights;
    qWeights = json.qWeights;
    json = qWeights; ///
    qWeights = _weights.default.fromJSON(json);
    return qWeights;
}
function kWeightsFromJSON(json) {
    var kWeights;
    kWeights = json.kWeights;
    json = kWeights; ///
    kWeights = _weights.default.fromJSON(json);
    return kWeights;
}
function vWeightsFromJSON(json) {
    var vWeights;
    vWeights = json.vWeights;
    json = vWeights; ///
    vWeights = _weights.default.fromJSON(json);
    return vWeights;
}
function frequencyVectorsFromJSON(json) {
    var frequencyVectors;
    frequencyVectors = json.frequencyVectors;
    var frequencyVectorsJSON = frequencyVectors; ///
    frequencyVectors = frequencyVectorsJSON.map(function(frequencyVectorJSON) {
        var _$json = frequencyVectorJSON, frequencyVector = _frequency.default.fromJSON(_$json);
        return frequencyVector;
    });
    return frequencyVectors;
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
function frequencyVectorsToFrequencyVectorsJSON(frequencyVectors) {
    var frequencyVectorsJSON = frequencyVectors.map(function(frequencyVector) {
        var frequencyVectorJSON = frequencyVector.toJSON();
        return frequencyVectorJSON;
    });
    return frequencyVectorsJSON;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENodW5rIGZyb20gXCIuLi9jaHVua1wiO1xuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgV2VpZ2h0cyBmcm9tIFwiLi4vZWxlbWVudC93ZWlnaHRzXCI7XG5pbXBvcnQgVm9jYWJ1bGFyeSBmcm9tIFwiLi4vZWxlbWVudC92b2NhYnVsYXJ5XCI7XG5pbXBvcnQgTWFya292SGVhZCBmcm9tIFwiLi4vZWxlbWVudC9oZWFkL21hcmtvdlwiO1xuaW1wb3J0IEF0dGVudGlvbkhlYWQgZnJvbSBcIi4uL2VsZW1lbnQvaGVhZC9hdHRlbnRpb25cIjtcbmltcG9ydCBGcmVxdWVuY3lWZWN0b3IgZnJvbSBcIi4uL3ZlY3Rvci9mcmVxdWVuY3lcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGhlYWRGcm9tSlNPTihqc29uKSB7XG4gIGxldCBoZWFkO1xuXG4gICh7aGVhZH0gPSBqc29uKTtcblxuICBqc29uID0gaGVhZDsgIC8vL1xuXG4gIGhlYWQgPSBNYXJrb3ZIZWFkLmZyb21KU09OKGpzb24pXG4gICAgICB8fCBBdHRlbnRpb25IZWFkLmZyb21KU09OKGpzb24pO1xuXG4gIHJldHVybiBoZWFkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0cml4RnJvbUpTT04oanNvbikge1xuICBsZXQgbWF0cml4O1xuXG4gICh7IG1hdHJpeCB9ID0ganNvbik7XG5cbiAganNvbiA9IG1hdHJpeDsgIC8vL1xuXG4gIG1hdHJpeCA9IE1hdHJpeC5mcm9tSlNPTihqc29uKTtcblxuICByZXR1cm4gbWF0cml4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2h1bmtzRnJvbUpTT04oanNvbikge1xuICBjb25zdCBjaHVua3NKU09OID0ganNvbiwgIC8vL1xuICAgICAgICBjaHVua3MgPSBjaHVua3NKU09OLm1hcCgoY2h1bmtKU09OKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IGNodW5rSlNPTiwgLy8vXG4gICAgICAgICAgICBjaHVuayA9IENodW5rLmZyb21KU09OKGpzb24pO1xuXG4gICAgICAgICAgcmV0dXJuIGNodW5rO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gY2h1bmtzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2VpZ2h0c0Zyb21KU09OKGpzb24pIHtcbiAgbGV0IHdlaWdodHM7XG5cbiAgKHsgd2VpZ2h0cyB9ID0ganNvbik7XG5cbiAganNvbiA9IHdlaWdodHM7ICAvLy9cblxuICB3ZWlnaHRzID0gV2VpZ2h0cy5mcm9tSlNPTihqc29uKTtcblxuICByZXR1cm4gd2VpZ2h0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHFXZWlnaHRzRnJvbUpTT04oanNvbikge1xuICBsZXQgcVdlaWdodHM7XG5cbiAgKHsgcVdlaWdodHMgfSA9IGpzb24pO1xuXG4gIGpzb24gPSBxV2VpZ2h0czsgIC8vL1xuXG4gIHFXZWlnaHRzID0gV2VpZ2h0cy5mcm9tSlNPTihqc29uKTtcblxuICByZXR1cm4gcVdlaWdodHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBrV2VpZ2h0c0Zyb21KU09OKGpzb24pIHtcbiAgbGV0IGtXZWlnaHRzO1xuXG4gICh7IGtXZWlnaHRzIH0gPSBqc29uKTtcblxuICBqc29uID0ga1dlaWdodHM7ICAvLy9cblxuICBrV2VpZ2h0cyA9IFdlaWdodHMuZnJvbUpTT04oanNvbik7XG5cbiAgcmV0dXJuIGtXZWlnaHRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdldlaWdodHNGcm9tSlNPTihqc29uKSB7XG4gIGxldCB2V2VpZ2h0cztcblxuICAoeyB2V2VpZ2h0cyB9ID0ganNvbik7XG5cbiAganNvbiA9IHZXZWlnaHRzOyAgLy8vXG5cbiAgdldlaWdodHMgPSBXZWlnaHRzLmZyb21KU09OKGpzb24pO1xuXG4gIHJldHVybiB2V2VpZ2h0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyZXF1ZW5jeVZlY3RvcnNGcm9tSlNPTihqc29uKSB7XG4gIGxldCBmcmVxdWVuY3lWZWN0b3JzO1xuXG4gICh7IGZyZXF1ZW5jeVZlY3RvcnMgfSA9IGpzb24pO1xuXG4gIGNvbnN0IGZyZXF1ZW5jeVZlY3RvcnNKU09OID0gZnJlcXVlbmN5VmVjdG9yczsgIC8vL1xuXG4gIGZyZXF1ZW5jeVZlY3RvcnMgPSBmcmVxdWVuY3lWZWN0b3JzSlNPTi5tYXAoKGZyZXF1ZW5jeVZlY3RvckpTT04pID0+IHtcbiAgICBjb25zdCBqc29uID0gZnJlcXVlbmN5VmVjdG9ySlNPTiwgLy8vXG4gICAgICAgICAgZnJlcXVlbmN5VmVjdG9yID0gRnJlcXVlbmN5VmVjdG9yLmZyb21KU09OKGpzb24pO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcjtcbiAgfSk7XG5cbiAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2b2NhYnVsYXJ5RnJvbUpTT04oanNvbikge1xuICBsZXQgdm9jYWJ1bGFyeTtcblxuICAoeyB2b2NhYnVsYXJ5IH0gPSBqc29uKTtcblxuICBqc29uID0gdm9jYWJ1bGFyeTsgIC8vL1xuXG4gIHZvY2FidWxhcnkgPSBWb2NhYnVsYXJ5LmZyb21KU09OKGpzb24pO1xuXG4gIHJldHVybiB2b2NhYnVsYXJ5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2h1bmtzVG9DaHVua3NKU09OKGNodW5rcykge1xuICBjb25zdCBjaHVua3NKU09OID0gY2h1bmtzLm1hcCgoY2h1bmspID0+IHtcbiAgICBjb25zdCBjaHVua0pTT04gPSBjaHVuay50b0pTT04oKTtcblxuICAgIHJldHVybiBjaHVua0pTT047XG4gIH0pO1xuXG4gIHJldHVybiBjaHVua3NKU09OO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZnJlcXVlbmN5VmVjdG9yc1RvRnJlcXVlbmN5VmVjdG9yc0pTT04oZnJlcXVlbmN5VmVjdG9ycykge1xuICBjb25zdCBmcmVxdWVuY3lWZWN0b3JzSlNPTiA9IGZyZXF1ZW5jeVZlY3RvcnMubWFwKChmcmVxdWVuY3lWZWN0b3IpID0+IHtcbiAgICBjb25zdCBmcmVxdWVuY3lWZWN0b3JKU09OID0gZnJlcXVlbmN5VmVjdG9yLnRvSlNPTigpO1xuXG4gICAgcmV0dXJuIGZyZXF1ZW5jeVZlY3RvckpTT047XG4gIH0pO1xuXG4gIHJldHVybiBmcmVxdWVuY3lWZWN0b3JzSlNPTjtcbn1cbiJdLCJuYW1lcyI6WyJjaHVua3NGcm9tSlNPTiIsImNodW5rc1RvQ2h1bmtzSlNPTiIsImZyZXF1ZW5jeVZlY3RvcnNGcm9tSlNPTiIsImZyZXF1ZW5jeVZlY3RvcnNUb0ZyZXF1ZW5jeVZlY3RvcnNKU09OIiwiaGVhZEZyb21KU09OIiwia1dlaWdodHNGcm9tSlNPTiIsIm1hdHJpeEZyb21KU09OIiwicVdlaWdodHNGcm9tSlNPTiIsInZXZWlnaHRzRnJvbUpTT04iLCJ2b2NhYnVsYXJ5RnJvbUpTT04iLCJ3ZWlnaHRzRnJvbUpTT04iLCJqc29uIiwiaGVhZCIsIk1hcmtvdkhlYWQiLCJmcm9tSlNPTiIsIkF0dGVudGlvbkhlYWQiLCJtYXRyaXgiLCJNYXRyaXgiLCJjaHVua3NKU09OIiwiY2h1bmtzIiwibWFwIiwiY2h1bmtKU09OIiwiY2h1bmsiLCJDaHVuayIsIndlaWdodHMiLCJXZWlnaHRzIiwicVdlaWdodHMiLCJrV2VpZ2h0cyIsInZXZWlnaHRzIiwiZnJlcXVlbmN5VmVjdG9ycyIsImZyZXF1ZW5jeVZlY3RvcnNKU09OIiwiZnJlcXVlbmN5VmVjdG9ySlNPTiIsImZyZXF1ZW5jeVZlY3RvciIsIkZyZXF1ZW5jeVZlY3RvciIsInZvY2FidWxhcnkiLCJWb2NhYnVsYXJ5IiwidG9KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFtQ2dCQTtlQUFBQTs7UUF5RkFDO2VBQUFBOztRQTdCQUM7ZUFBQUE7O1FBdUNBQztlQUFBQTs7UUE1SEFDO2VBQUFBOztRQTZEQUM7ZUFBQUE7O1FBaERBQztlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQXdCQUM7ZUFBQUE7O1FBNkJBQztl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