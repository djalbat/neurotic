"use strict";
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
import { fileSystemUtilities } from "necessary";
import { DEFAULT_CORPUS_FILE_PATH } from "./defaults";
import { chunksFromJSON, chunksToChunksJSON } from "./utilities/json";
var readFile = fileSystemUtilities.readFile;
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
            key: "asTokens",
            value: function asTokens() {
                var tokenMap = {};
                this.forEachChunk(function(chunk) {
                    chunk.forEachToken(function(token) {
                        tokenMap[token] = token;
                    });
                });
                var tokens = Object.keys(tokenMap);
                return tokens;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var chunksJSON = chunksToChunksJSON(this.chunks), chunks = chunksJSON, json = {
                    chunks: chunks
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var chunks = chunksFromJSON(json), corpus = new Corpus(chunks);
                return corpus;
            }
        },
        {
            key: "fromFile",
            value: function fromFile() {
                var filePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : DEFAULT_CORPUS_FILE_PATH;
                var content = readFile(filePath), jsonString = content, json = JSON.parse(jsonString), corpus = Corpus.fromJSON(json);
                return corpus;
            }
        }
    ]);
    return Corpus;
}();
export { Corpus as default };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBjaHVua3NGcm9tSlNPTiwgY2h1bmtzVG9DaHVua3NKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ycHVzIHtcbiAgY29uc3RydWN0b3IoY2h1bmtzKSB7XG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XG4gIH1cblxuICBnZXRDaHVua3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2h1bmtzO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICBjb25zdCBjaHVua3NMZW5ndGggPSB0aGlzLmNodW5rcy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZSA9IGNodW5rc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHNpemU7XG4gIH1cblxuICBtYXBDaHVuayhjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaHVua3MubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hDaHVuayhjYWxsYmFjaykgeyB0aGlzLmNodW5rcy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGFzVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VuTWFwID0ge307XG5cbiAgICB0aGlzLmZvckVhY2hDaHVuaygoY2h1bmspID0+IHtcbiAgICAgIGNodW5rLmZvckVhY2hUb2tlbigodG9rZW4pID0+IHtcbiAgICAgICAgdG9rZW5NYXBbdG9rZW5dID0gdG9rZW47XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VucyA9IE9iamVjdC5rZXlzKHRva2VuTWFwKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY2h1bmtzSlNPTiA9IGNodW5rc1RvQ2h1bmtzSlNPTih0aGlzLmNodW5rcyksXG4gICAgICAgICAgY2h1bmtzID0gY2h1bmtzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjaHVua3NcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGNodW5rcyA9IGNodW5rc0Zyb21KU09OKGpzb24pLFxuICAgICAgICAgIGNvcnB1cyA9IG5ldyBDb3JwdXMoY2h1bmtzKTtcblxuICAgIHJldHVybiBjb3JwdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZVBhdGggPSBERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKSxcbiAgICAgICAgICBjb3JwdXMgPSBDb3JwdXMuZnJvbUpTT04oanNvbik7XG5cbiAgICByZXR1cm4gY29ycHVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZmlsZVN5c3RlbVV0aWxpdGllcyIsIkRFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCIsImNodW5rc0Zyb21KU09OIiwiY2h1bmtzVG9DaHVua3NKU09OIiwicmVhZEZpbGUiLCJDb3JwdXMiLCJjaHVua3MiLCJnZXRDaHVua3MiLCJnZXRTaXplIiwiY2h1bmtzTGVuZ3RoIiwibGVuZ3RoIiwic2l6ZSIsIm1hcENodW5rIiwiY2FsbGJhY2siLCJtYXAiLCJmb3JFYWNoQ2h1bmsiLCJmb3JFYWNoIiwiYXNUb2tlbnMiLCJ0b2tlbk1hcCIsImNodW5rIiwiZm9yRWFjaFRva2VuIiwidG9rZW4iLCJ0b2tlbnMiLCJPYmplY3QiLCJrZXlzIiwidG9KU09OIiwiY2h1bmtzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvcnB1cyIsImZyb21GaWxlIiwiZmlsZVBhdGgiLCJjb250ZW50IiwianNvblN0cmluZyIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsbUJBQW1CLFFBQVEsWUFBWTtBQUVoRCxTQUFTQyx3QkFBd0IsUUFBUSxhQUFhO0FBQ3RELFNBQVNDLGNBQWMsRUFBRUMsa0JBQWtCLFFBQVEsbUJBQW1CO0FBRXRFLElBQU0sQUFBRUMsV0FBYUosb0JBQWJJO0FBRU8sSUFBQSxBQUFNQyx1QkFBTjthQUFNQSxPQUNQQyxNQUFNO2dDQURDRDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7O2tCQUZHRDs7WUFLbkJFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsTUFBTTtZQUNwQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxNQUFNLEVBQ2pDQyxPQUFPRixjQUFlLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsUUFBUTtnQkFBSSxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDUSxHQUFHLENBQUNEO1lBQVc7OztZQUV2REUsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFGLFFBQVE7Z0JBQUksSUFBSSxDQUFDUCxNQUFNLENBQUNVLE9BQU8sQ0FBQ0g7WUFBVzs7O1lBRXhESSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxDQUFDO2dCQUVsQixJQUFJLENBQUNILFlBQVksQ0FBQyxTQUFDSTtvQkFDakJBLE1BQU1DLFlBQVksQ0FBQyxTQUFDQzt3QkFDbEJILFFBQVEsQ0FBQ0csTUFBTSxHQUFHQTtvQkFDcEI7Z0JBQ0Y7Z0JBRUEsSUFBTUMsU0FBU0MsT0FBT0MsSUFBSSxDQUFDTjtnQkFFM0IsT0FBT0k7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhdkIsbUJBQW1CLElBQUksQ0FBQ0csTUFBTSxHQUMzQ0EsU0FBU29CLFlBQ1RDLE9BQU87b0JBQ0xyQixRQUFBQTtnQkFDRjtnQkFFTixPQUFPcUI7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJO2dCQUNsQixJQUFNckIsU0FBU0osZUFBZXlCLE9BQ3hCRSxTQUFTLElBOUNFeEIsT0E4Q1NDO2dCQUUxQixPQUFPdUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO29CQUFTQyxXQUFBQSxpRUFBVzlCO2dCQUN6QixJQUFNK0IsVUFBVTVCLFNBQVMyQixXQUNuQkUsYUFBYUQsU0FDYkwsT0FBT08sS0FBS0MsS0FBSyxDQUFDRixhQUNsQkosU0FBU3hCLEFBdkRFQSxPQXVES3VCLFFBQVEsQ0FBQ0Q7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztXQTFEbUJ4Qjs7QUFBckIsU0FBcUJBLG9CQTJEcEIifQ==