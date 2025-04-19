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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb3JwdXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IERFRkFVTFRfQ09SUFVTX0ZJTEVfUEFUSCB9IGZyb20gXCIuL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgcmVhZEZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcnB1cyB7XG4gIGNvbnN0cnVjdG9yKGNodW5rcykge1xuICAgIHRoaXMuY2h1bmtzID0gY2h1bmtzO1xuICB9XG5cbiAgZ2V0Q2h1bmtzKCkge1xuICAgIHJldHVybiB0aGlzLmNodW5rcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjaHVua3MgPSB0aGlzLmNodW5rcyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY2h1bmtzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCBjaHVua3MgPSBqc29uLCAgLy9cbiAgICAgICAgICBjb3JwdXMgPSBuZXcgQ29ycHVzKGNodW5rcyk7XG5cbiAgICByZXR1cm4gY29ycHVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGVQYXRoID0gREVGQVVMVF9DT1JQVVNfRklMRV9QQVRIKSB7XG4gICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gY29udGVudCwgLy8vXG4gICAgICAgICAganNvbiA9IEpTT04ucGFyc2UoanNvblN0cmluZyksXG4gICAgICAgICAgY29ycHVzID0gQ29ycHVzLmZyb21KU09OKGpzb24pO1xuXG4gICAgcmV0dXJuIGNvcnB1cztcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvcnB1cyIsInJlYWRGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsImNodW5rcyIsImdldENodW5rcyIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvcnB1cyIsImZyb21GaWxlIiwiZmlsZVBhdGgiLCJERUZBVUxUX0NPUlBVU19GSUxFX1BBVEgiLCJjb250ZW50IiwianNvblN0cmluZyIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7eUJBTmU7d0JBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpDLElBQU0sQUFBRUMsV0FBYUMsOEJBQW1CLENBQWhDRDtBQUVPLElBQUEsQUFBTUQsdUJBQU47YUFBTUEsT0FDUEcsTUFBTTtnQ0FEQ0g7UUFFakIsSUFBSSxDQUFDRyxNQUFNLEdBQUdBOztrQkFGR0g7O1lBS25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUYsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJHLE9BQU87b0JBQ0xILFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSTtnQkFDbEIsSUFBTUgsU0FBU0csTUFDVEUsU0FBUyxJQXBCRVIsT0FvQlNHO2dCQUUxQixPQUFPSztZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0E7b0JBQVNDLFdBQUFBLGlFQUFXQyxrQ0FBd0I7Z0JBQ2pELElBQU1DLFVBQVVYLFNBQVNTLFdBQ25CRyxhQUFhRCxTQUNiTixPQUFPUSxLQUFLQyxLQUFLLENBQUNGLGFBQ2xCTCxTQUFTUixBQTdCRUEsT0E2QktPLFFBQVEsQ0FBQ0Q7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztXQWhDbUJSIn0=