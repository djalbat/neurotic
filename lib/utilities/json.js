"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "vocabularyFromJSON", {
    enumerable: true,
    get: function() {
        return vocabularyFromJSON;
    }
});
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("../element/vocabulary"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function vocabularyFromJSON(json) {
    var vocabulary;
    vocabulary = json.vocabulary;
    json = vocabulary; ///
    vocabulary = _vocabulary.default.fromJSON(json);
    return vocabulary;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvanNvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4uL2VsZW1lbnQvdm9jYWJ1bGFyeVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pIHtcbiAgbGV0IHZvY2FidWxhcnk7XG5cbiAgKHsgdm9jYWJ1bGFyeSB9ID0ganNvbik7XG5cbiAganNvbiA9IHZvY2FidWxhcnk7ICAvLy9cblxuICB2b2NhYnVsYXJ5ID0gVm9jYWJ1bGFyeS5mcm9tSlNPTihqc29uKTtcblxuICByZXR1cm4gdm9jYWJ1bGFyeTtcbn0iXSwibmFtZXMiOlsidm9jYWJ1bGFyeUZyb21KU09OIiwianNvbiIsInZvY2FidWxhcnkiLCJWb2NhYnVsYXJ5IiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O2lFQUZPOzs7Ozs7QUFFaEIsU0FBU0EsbUJBQW1CQyxJQUFJO0lBQ3JDLElBQUlDO0lBRURBLGFBQWVELEtBQWZDO0lBRUhELE9BQU9DLFlBQWEsR0FBRztJQUV2QkEsYUFBYUMsbUJBQVUsQ0FBQ0MsUUFBUSxDQUFDSDtJQUVqQyxPQUFPQztBQUNUIn0=