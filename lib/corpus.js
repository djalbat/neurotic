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
var _json = require("./utilities/json");
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
                var chunksJSON = (0, _json.chunksToChunksJSON)(this.chunks), chunks = chunksJSON, json = {
                    chunks: chunks
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var chunks = (0, _json.chunksFromJSON)(json), corpus = new Corpus(chunks);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBjaHVua3NGcm9tSlNPTiwgY2h1bmtzVG9DaHVua3NKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ycHVzIHtcbiAgY29uc3RydWN0b3IoY2h1bmtzKSB7XG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XG4gIH1cblxuICBnZXRDaHVua3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2h1bmtzO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICBjb25zdCBjaHVua3NMZW5ndGggPSB0aGlzLmNodW5rcy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZSA9IGNodW5rc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHNpemU7XG4gIH1cblxuICBtYXBDaHVuayhjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaHVua3MubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hDaHVuayhjYWxsYmFjaykgeyB0aGlzLmNodW5rcy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjaHVua3NKU09OID0gY2h1bmtzVG9DaHVua3NKU09OKHRoaXMuY2h1bmtzKSxcbiAgICAgICAgICBjaHVua3MgPSBjaHVua3NKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNodW5rc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3QgY2h1bmtzID0gY2h1bmtzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgY29ycHVzID0gbmV3IENvcnB1cyhjaHVua3MpO1xuXG4gICAgcmV0dXJuIGNvcnB1cztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlUGF0aCA9IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZShmaWxlUGF0aCksXG4gICAgICAgICAganNvblN0cmluZyA9IGNvbnRlbnQsIC8vL1xuICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKGpzb25TdHJpbmcpLFxuICAgICAgICAgIGNvcnB1cyA9IENvcnB1cy5mcm9tSlNPTihqc29uKTtcblxuICAgIHJldHVybiBjb3JwdXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb3JwdXMiLCJyZWFkRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJjaHVua3MiLCJnZXRDaHVua3MiLCJnZXRTaXplIiwiY2h1bmtzTGVuZ3RoIiwibGVuZ3RoIiwic2l6ZSIsIm1hcENodW5rIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoQ2h1bmsiLCJmb3JFYWNoIiwidG9KU09OIiwiY2h1bmtzSlNPTiIsImNodW5rc1RvQ2h1bmtzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNodW5rc0Zyb21KU09OIiwiY29ycHVzIiwiZnJvbUZpbGUiLCJmaWxlUGF0aCIsIkRFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCIsImNvbnRlbnQiLCJqc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVNxQkE7Ozt5QkFQZTt3QkFFSztvQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkQsSUFBTSxBQUFFQyxXQUFhQyw4QkFBbUIsQ0FBaENEO0FBRU8sSUFBQSxBQUFNRCx1QkFBTjthQUFNQSxPQUNQRyxNQUFNO2dDQURDSDtRQUVqQixJQUFJLENBQUNHLE1BQU0sR0FBR0E7O2tCQUZHSDs7WUFLbkJJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxNQUFNLEVBQ2pDQyxPQUFPRixjQUFlLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDUSxHQUFHLENBQUNEO1lBQVc7OztZQUV2REUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFGLFFBQVE7Z0JBQUksSUFBSSxDQUFDUCxNQUFNLENBQUNVLE9BQU8sQ0FBQ0g7WUFBVzs7O1lBRXhESSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYUMsSUFBQUEsd0JBQWtCLEVBQUMsSUFBSSxDQUFDYixNQUFNLEdBQzNDQSxTQUFTWSxZQUNURSxPQUFPO29CQUNMZCxRQUFBQTtnQkFDRjtnQkFFTixPQUFPYztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUk7Z0JBQ2xCLElBQU1kLFNBQVNnQixJQUFBQSxvQkFBYyxFQUFDRixPQUN4QkcsU0FBUyxJQWhDRXBCLE9BZ0NTRztnQkFFMUIsT0FBT2lCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtvQkFBU0MsV0FBQUEsaUVBQVdDLGtDQUF3QjtnQkFDakQsSUFBTUMsVUFBVXZCLFNBQVNxQixXQUNuQkcsYUFBYUQsU0FDYlAsT0FBT1MsS0FBS0MsS0FBSyxDQUFDRixhQUNsQkwsU0FBU3BCLEFBekNFQSxPQXlDS2tCLFFBQVEsQ0FBQ0Q7Z0JBRS9CLE9BQU9HO1lBQ1Q7OztXQTVDbUJwQiJ9