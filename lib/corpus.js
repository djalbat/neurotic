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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcnB1cyB7XG4gIGNvbnN0cnVjdG9yKGNodW5rcykge1xuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzO1xuICB9XG5cbiAgZ2V0Q2h1bmtzKCkge1xuICAgIHJldHVybiB0aGlzLmNodW5rcztcbiAgfVxuXG4gIGdldFNpemUoKSB7XG4gICAgY29uc3QgY2h1bmtzTGVuZ3RoID0gdGhpcy5jaHVua3MubGVuZ3RoLFxuICAgICAgICAgIHNpemUgPSBjaHVua3NMZW5ndGg7ICAvLy9cblxuICAgIHJldHVybiBzaXplO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNodW5rcyA9IHRoaXMuY2h1bmtzLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjaHVua3NcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IGNodW5rcyA9IGpzb24sICAvL1xuICAgICAgICAgIGNvcnB1cyA9IG5ldyBDb3JwdXMoY2h1bmtzKTtcblxuICAgIHJldHVybiBjb3JwdXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZVBhdGggPSBERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gcmVhZEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBjb250ZW50LCAvLy9cbiAgICAgICAgICBqc29uID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKSxcbiAgICAgICAgICBjb3JwdXMgPSBDb3JwdXMuZnJvbUpTT04oanNvbik7XG5cbiAgICByZXR1cm4gY29ycHVzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29ycHVzIiwicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwiY2h1bmtzIiwiZ2V0Q2h1bmtzIiwiZ2V0U2l6ZSIsImNodW5rc0xlbmd0aCIsImxlbmd0aCIsInNpemUiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb3JwdXMiLCJmcm9tRmlsZSIsImZpbGVQYXRoIiwiREVGQVVMVF9DT1JQVVNfRklMRV9QQVRIIiwiY29udGVudCIsImpzb25TdHJpbmciLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7O3lCQU5lO3dCQUVLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QyxJQUFNLEFBQUVDLFdBQWFDLDhCQUFtQixDQUFoQ0Q7QUFFTyxJQUFBLEFBQU1ELHVCQUFOO2FBQU1BLE9BQ1BHLE1BQU07Z0NBRENIO1FBRWpCLElBQUksQ0FBQ0csTUFBTSxHQUFHQTs7a0JBRkdIOztZQUtuQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDSCxNQUFNLENBQUNJLE1BQU0sRUFDakNDLE9BQU9GLGNBQWUsR0FBRztnQkFFL0IsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNTixTQUFTLElBQUksQ0FBQ0EsTUFBTSxFQUNwQk8sT0FBTztvQkFDTFAsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT087WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJO2dCQUNsQixJQUFNUCxTQUFTTyxNQUNURSxTQUFTLElBM0JFWixPQTJCU0c7Z0JBRTFCLE9BQU9TO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtvQkFBU0MsV0FBQUEsaUVBQVdDLGtDQUF3QjtnQkFDakQsSUFBTUMsVUFBVWYsU0FBU2EsV0FDbkJHLGFBQWFELFNBQ2JOLE9BQU9RLEtBQUtDLEtBQUssQ0FBQ0YsYUFDbEJMLFNBQVNaLEFBcENFQSxPQW9DS1csUUFBUSxDQUFDRDtnQkFFL0IsT0FBT0U7WUFDVDs7O1dBdkNtQloifQ==