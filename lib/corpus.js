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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IHJlZ2lzdHJ5QXNzaWduZWQgfSBmcm9tIFwiLi9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgREVGQVVMVF9DT1JQVVNfRklMRV9QQVRIIH0gZnJvbSBcIi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnlBc3NpZ25lZChjbGFzcyBDb3JwdXMge1xuICBjb25zdHJ1Y3RvcihjaHVua3MpIHtcbiAgICB0aGlzLmNodW5rcyA9IGNodW5rcztcbiAgfVxuXG4gIGdldENodW5rcygpIHtcbiAgICByZXR1cm4gdGhpcy5jaHVua3M7XG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIGNvbnN0IGNodW5rc0xlbmd0aCA9IHRoaXMuY2h1bmtzLmxlbmd0aCxcbiAgICAgICAgICBzaXplID0gY2h1bmtzTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuXG4gIGZvckVhY2hDaHVuayhjYWxsYmFjaykgeyB0aGlzLmNodW5rcy5mb3JFYWNoKGNhbGxiYWNrKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjaHVua3MgPSB0aGlzLmNodW5rcyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY2h1bmtzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBjaHVua3MgPSBqc29uLCAgLy9cbiAgICAgICAgICBjb3JwdXMgPSBuZXcgQ29ycHVzKGNodW5rcyk7XG5cbiAgICByZXR1cm4gY29ycHVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGVQYXRoID0gREVGQVVMVF9DT1JQVVNfRklMRV9QQVRIKSB7XG4gICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyksXG4gICAgICAgICAgY29ycHVzID0gQ29ycHVzLmZyb21KU09OKGpzb24pO1xuXG4gICAgcmV0dXJuIGNvcnB1cztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmVhZEZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicmVnaXN0cnlBc3NpZ25lZCIsIkNvcnB1cyIsImNodW5rcyIsImdldENodW5rcyIsImdldFNpemUiLCJjaHVua3NMZW5ndGgiLCJsZW5ndGgiLCJzaXplIiwiZm9yRWFjaENodW5rIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiY29ycHVzIiwiZnJvbUZpbGUiLCJmaWxlUGF0aCIsIkRFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCIsImNvbnRlbnQiLCJqc29uU3RyaW5nIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozt5QkFQb0M7d0JBRUg7d0JBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUEsV0FBYUMsOEJBQW1CLENBQWhDRDtJQUVSLFdBQWVFLElBQUFBLDBCQUFnQixnQkFBQzthQUFNQyxPQUN4QkMsTUFBTTtnQ0FEa0JEO1FBRWxDLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTs7OztZQUdoQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxNQUFNO1lBQ3BCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGVBQWUsSUFBSSxDQUFDSCxNQUFNLENBQUNJLE1BQU0sRUFDakNDLE9BQU9GLGNBQWUsR0FBRztnQkFFL0IsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxRQUFRO2dCQUFJLElBQUksQ0FBQ1AsTUFBTSxDQUFDUSxPQUFPLENBQUNEO1lBQVc7OztZQUV4REUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1ULFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCVSxPQUFPO29CQUNMVixRQUFBQTtnQkFDRjtnQkFFTixPQUFPVTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUk7Z0JBQ2xCLElBQU1WLFNBQVNVLE1BQ1RFLFNBQVMsSUFBSWIsT0FBT0M7Z0JBRTFCLE9BQU9ZO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQTtvQkFBU0MsV0FBQUEsaUVBQVdDLGtDQUF3QjtnQkFDakQsSUFBTUMsVUFBVXBCLFNBQVNrQixXQUNuQkcsYUFBYUQsU0FDYk4sT0FBT1EsS0FBS0MsS0FBSyxDQUFDRixhQUNsQkwsU0FBU2IsT0FBT1ksUUFBUSxDQUFDRDtnQkFFL0IsT0FBT0U7WUFDVCJ9