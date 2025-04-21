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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBjaHVua3NGcm9tSlNPTiwgY2h1bmtzVG9DaHVua3NKU09OIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ycHVzIHtcbiAgY29uc3RydWN0b3IoY2h1bmtzKSB7XG4gICAgdGhpcy5jaHVua3MgPSBjaHVua3M7XG4gIH1cblxuICBnZXRDaHVua3MoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2h1bmtzO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICBjb25zdCBjaHVua3NMZW5ndGggPSB0aGlzLmNodW5rcy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZSA9IGNodW5rc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHNpemU7XG4gIH1cblxuICBtYXBDaHVuayhjYWxsYmFjaykgeyByZXR1cm4gdGhpcy5jaHVua3MubWFwKGNhbGxiYWNrKTsgfVxuXG4gIGZvckVhY2hDaHVuayhjYWxsYmFjaykgeyB0aGlzLmNodW5rcy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIGFzVG9rZW5zKCkge1xuICAgIGNvbnN0IHRva2VuTWFwID0ge307XG5cbiAgICB0aGlzLmZvckVhY2hDaHVuaygoY2h1bmspID0+IHtcbiAgICAgIGNodW5rLmZvckVhY2hUb2tlbigodG9rZW4pID0+IHtcbiAgICAgICAgdG9rZW5NYXBbdG9rZW5dID0gdG9rZW47XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRva2VucyA9IE9iamVjdC5rZXlzKHRva2VuTWFwKTtcblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY2h1bmtzSlNPTiA9IGNodW5rc1RvQ2h1bmtzSlNPTih0aGlzLmNodW5rcyksXG4gICAgICAgICAgY2h1bmtzID0gY2h1bmtzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjaHVua3NcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGNodW5rcyA9IGNodW5rc0Zyb21KU09OKGpzb24pLFxuICAgICAgICAgIGNvcnB1cyA9IG5ldyBDb3JwdXMoY2h1bmtzKTtcblxuICAgIHJldHVybiBjb3JwdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZVBhdGggPSBERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKSxcbiAgICAgICAgICBjb3JwdXMgPSBDb3JwdXMuZnJvbUpTT04oanNvbik7XG5cbiAgICByZXR1cm4gY29ycHVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29ycHVzIiwicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY2h1bmtzIiwiZ2V0Q2h1bmtzIiwiZ2V0U2l6ZSIsImNodW5rc0xlbmd0aCIsImxlbmd0aCIsInNpemUiLCJtYXBDaHVuayIsImNhbGxiYWNrIiwibWFwIiwiZm9yRWFjaENodW5rIiwiZm9yRWFjaCIsImFzVG9rZW5zIiwidG9rZW5NYXAiLCJjaHVuayIsImZvckVhY2hUb2tlbiIsInRva2VuIiwidG9rZW5zIiwiT2JqZWN0Iiwia2V5cyIsInRvSlNPTiIsImNodW5rc0pTT04iLCJjaHVua3NUb0NodW5rc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjaHVua3NGcm9tSlNPTiIsImNvcnB1cyIsImZyb21GaWxlIiwiZmlsZVBhdGgiLCJERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgiLCJjb250ZW50IiwianNvblN0cmluZyIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7eUJBUGU7d0JBRUs7b0JBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5ELElBQU0sQUFBRUMsV0FBYUMsOEJBQW1CLENBQWhDRDtBQUVPLElBQUEsQUFBTUQsdUJBQU47YUFBTUEsT0FDUEcsTUFBTTtnQ0FEQ0g7UUFFakIsSUFBSSxDQUFDRyxNQUFNLEdBQUdBOztrQkFGR0g7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksTUFBTSxFQUNqQ0MsT0FBT0YsY0FBZSxHQUFHO2dCQUUvQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1EsR0FBRyxDQUFDRDtZQUFXOzs7WUFFdkRFLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhRixRQUFRO2dCQUFJLElBQUksQ0FBQ1AsTUFBTSxDQUFDVSxPQUFPLENBQUNIO1lBQVc7OztZQUV4REksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsQ0FBQztnQkFFbEIsSUFBSSxDQUFDSCxZQUFZLENBQUMsU0FBQ0k7b0JBQ2pCQSxNQUFNQyxZQUFZLENBQUMsU0FBQ0M7d0JBQ2xCSCxRQUFRLENBQUNHLE1BQU0sR0FBR0E7b0JBQ3BCO2dCQUNGO2dCQUVBLElBQU1DLFNBQVNDLE9BQU9DLElBQUksQ0FBQ047Z0JBRTNCLE9BQU9JO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYUMsSUFBQUEsd0JBQWtCLEVBQUMsSUFBSSxDQUFDckIsTUFBTSxHQUMzQ0EsU0FBU29CLFlBQ1RFLE9BQU87b0JBQ0x0QixRQUFBQTtnQkFDRjtnQkFFTixPQUFPc0I7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJO2dCQUNsQixJQUFNdEIsU0FBU3dCLElBQUFBLG9CQUFjLEVBQUNGLE9BQ3hCRyxTQUFTLElBOUNFNUIsT0E4Q1NHO2dCQUUxQixPQUFPeUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO29CQUFTQyxXQUFBQSxpRUFBV0Msa0NBQXdCO2dCQUNqRCxJQUFNQyxVQUFVL0IsU0FBUzZCLFdBQ25CRyxhQUFhRCxTQUNiUCxPQUFPUyxLQUFLQyxLQUFLLENBQUNGLGFBQ2xCTCxTQUFTNUIsQUF2REVBLE9BdURLMEIsUUFBUSxDQUFDRDtnQkFFL0IsT0FBT0c7WUFDVDs7O1dBMURtQjVCIn0=