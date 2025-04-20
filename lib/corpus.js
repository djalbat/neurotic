"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Corpus;
    }
});
var _necessary = require("necessary");
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
var Corpus = /*#__PURE__*/ function() {
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
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcnB1cyB7XG4gIGNvbnN0cnVjdG9yKGNodW5rcykge1xuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzO1xuICB9XG5cbiAgZ2V0Q2h1bmtzKCkge1xuICAgIHJldHVybiB0aGlzLmNodW5rcztcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgY29uc3QgY2h1bmtzTGVuZ3RoID0gdGhpcy5jaHVua3MubGVuZ3RoLFxuICAgICAgICAgIHNpemUgPSBjaHVua3NMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBzaXplO1xuICB9XG5cbiAgbWFwQ2h1bmsoY2FsbGJhY2spIHsgcmV0dXJuIHRoaXMuY2h1bmtzLm1hcChjYWxsYmFjayk7IH1cblxuICBmb3JFYWNoQ2h1bmsoY2FsbGJhY2spIHsgdGhpcy5jaHVua3MuZm9yRWFjaChjYWxsYmFjayk7IH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY2h1bmtzID0gdGhpcy5jaHVua3MsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNodW5rc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgY2h1bmtzID0ganNvbiwgIC8vXG4gICAgICAgICAgY29ycHVzID0gbmV3IENvcnB1cyhjaHVua3MpO1xuXG4gICAgcmV0dXJuIGNvcnB1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlUGF0aCA9IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgICAganNvblN0cmluZyA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpLFxuICAgICAgICAgIGNvcnB1cyA9IENvcnB1cy5mcm9tSlNPTihqc29uKTtcblxuICAgIHJldHVybiBjb3JwdXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb3JwdXMiLCJyZWFkRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJjaHVua3MiLCJnZXRDaHVua3MiLCJnZXRTaXplIiwiY2h1bmtzTGVuZ3RoIiwibGVuZ3RoIiwic2l6ZSIsIm1hcENodW5rIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoQ2h1bmsiLCJmb3JFYWNoIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY29ycHVzIiwiZnJvbUZpbGUiLCJmaWxlUGF0aCIsIkRFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCIsImNvbnRlbnQiLCJqc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozt5QkFOZTt3QkFFSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekMsSUFBTSxBQUFFQyxXQUFhQyw4QkFBbUIsQ0FBaENEO0FBRU8sSUFBQSxBQUFNRCx1QkFBTjthQUFNQSxPQUNQRyxNQUFNO2dDQURDSDtRQUVqQixJQUFJLENBQUNHLE1BQU0sR0FBR0E7O2tCQUZHSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxNQUFNLEVBQ2pDQyxPQUFPRixjQUFlLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDUSxHQUFHLENBQUNEO1lBQVc7OztZQUV2REUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFGLFFBQVE7Z0JBQUksSUFBSSxDQUFDUCxNQUFNLENBQUNVLE9BQU8sQ0FBQ0g7WUFBVzs7O1lBRXhESSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVgsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJZLE9BQU87b0JBQ0xaLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9ZO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBTVosU0FBU1ksTUFDVEUsU0FBUyxJQS9CRWpCLE9BK0JTRztnQkFFMUIsT0FBT2M7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO29CQUFTQyxXQUFBQSxpRUFBV0Msa0NBQXdCO2dCQUNqRCxJQUFNQyxVQUFVcEIsU0FBU2tCLFdBQ25CRyxhQUFhRCxTQUNiTixPQUFPUSxLQUFLQyxLQUFLLENBQUNGLGFBQ2xCTCxTQUFTakIsQUF4Q0VBLE9Bd0NLZ0IsUUFBUSxDQUFDRDtnQkFFL0IsT0FBT0U7WUFDVDs7O1dBM0NtQmpCIn0=