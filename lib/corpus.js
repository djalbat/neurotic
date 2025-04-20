"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _registry = require("./registry");
var _defaults = require("./defaults");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var readFile = _necessary.fileSystemUtilities.readFile;
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function() {
    function Corpus(chunks) {
        _class_call_check(this, Corpus);
        this.chunks = chunks;
    }
    _create_class(Corpus, [
        {
            key: "getChunks",
            value: function getChunks() {
                return this.chunks;
            }
        },
        {
            key: "getSize",
            value: function getSize() {
                var chunksLength = this.chunks.length, size = chunksLength; ///
                return size;
            }
        },
        {
            key: "mapChunk",
            value: function mapChunk(callback) {
                return this.chunks.map(callback);
            }
        },
        {
            key: "forEachChunk",
            value: function forEachChunk(callback) {
                this.chunks.forEach(callback);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var chunks = this.chunks, json = {
                    chunks: chunks
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var chunks = json, corpus = new Corpus(chunks);
                return corpus;
            }
        },
        {
            key: "fromFile",
            value: function fromFile() {
                var filePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_CORPUS_FILE_PATH;
                var content = readFile(filePath), jsonString = content, json = JSON.parse(jsonString), corpus = Corpus.fromJSON(json);
                return corpus;
            }
        }
    ]);
    return Corpus;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJlZ2lzdHJ5QXNzaWduZWQgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgREVGQVVMVF9DT1JQVVNfRklMRV9QQVRIIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnlBc3NpZ25lZChjbGFzcyBDb3JwdXMge1xuICBjb25zdHJ1Y3RvcihjaHVua3MpIHtcbiAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcbiAgfVxuXG4gIGdldENodW5rcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaHVua3M7XG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIGNvbnN0IGNodW5rc0xlbmd0aCA9IHRoaXMuY2h1bmtzLmxlbmd0aCxcbiAgICAgICAgICBzaXplID0gY2h1bmtzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuXG4gIG1hcENodW5rKGNhbGxiYWNrKSB7IHJldHVybiB0aGlzLmNodW5rcy5tYXAoY2FsbGJhY2spOyB9XG5cbiAgZm9yRWFjaENodW5rKGNhbGxiYWNrKSB7IHRoaXMuY2h1bmtzLmZvckVhY2goY2FsbGJhY2spOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNodW5rcyA9IHRoaXMuY2h1bmtzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjaHVua3NcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGNodW5rcyA9IGpzb24sICAvL1xuICAgICAgICAgIGNvcnB1cyA9IG5ldyBDb3JwdXMoY2h1bmtzKTtcblxuICAgIHJldHVybiBjb3JwdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZVBhdGggPSBERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKSxcbiAgICAgICAgICBjb3JwdXMgPSBDb3JwdXMuZnJvbUpTT04oanNvbik7XG5cbiAgICByZXR1cm4gY29ycHVzO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZWFkRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWdpc3RyeUFzc2lnbmVkIiwiQ29ycHVzIiwiY2h1bmtzIiwiZ2V0Q2h1bmtzIiwiZ2V0U2l6ZSIsImNodW5rc0xlbmd0aCIsImxlbmd0aCIsInNpemUiLCJtYXBDaHVuayIsImNhbGxiYWNrIiwibWFwIiwiZm9yRWFjaENodW5rIiwiZm9yRWFjaCIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvcnB1cyIsImZyb21GaWxlIiwiZmlsZVBhdGgiLCJERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgiLCJjb250ZW50IiwianNvblN0cmluZyIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7eUJBUG9DO3dCQUVIO3dCQUNROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVBLFdBQWFDLDhCQUFtQixDQUFoQ0Q7SUFFUixXQUFlRSxJQUFBQSwwQkFBZ0IsZ0JBQUM7YUFBTUMsT0FDeEJDLE1BQU07Z0NBRGtCRDtRQUVsQyxJQUFJLENBQUNDLE1BQU0sR0FBR0E7Ozs7WUFHaEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxNQUFNLEVBQ2pDQyxPQUFPRixjQUFlLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDUSxHQUFHLENBQUNEO1lBQVc7OztZQUV2REUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFGLFFBQVE7Z0JBQUksSUFBSSxDQUFDUCxNQUFNLENBQUNVLE9BQU8sQ0FBQ0g7WUFBVzs7O1lBRXhESSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVgsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJZLE9BQU87b0JBQ0xaLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9ZO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBTVosU0FBU1ksTUFDVEUsU0FBUyxJQUFJZixPQUFPQztnQkFFMUIsT0FBT2M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO29CQUFTQyxXQUFBQSxpRUFBV0Msa0NBQXdCO2dCQUNqRCxJQUFNQyxVQUFVdEIsU0FBU29CLFdBQ25CRyxhQUFhRCxTQUNiTixPQUFPUSxLQUFLQyxLQUFLLENBQUNGLGFBQ2xCTCxTQUFTZixPQUFPYyxRQUFRLENBQUNEO2dCQUUvQixPQUFPRTtZQUNUIn0=