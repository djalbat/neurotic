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
    get AttentionHead () {
        return _attention.default;
    },
    get Corpus () {
        return _corpus.default;
    },
    get Head () {
        return _head.default;
    },
    get MarkovHead () {
        return _markov.default;
    },
    get Model () {
        return _model.default;
    },
    get React () {
        return _react.default;
    },
    get Vocabulary () {
        return _vocabulary.default;
    },
    get Weights () {
        return _weights.default;
    }
});
var _react = /*#__PURE__*/ _interop_require_default(require("./react"));
var _head = /*#__PURE__*/ _interop_require_default(require("./element/head"));
var _model = /*#__PURE__*/ _interop_require_default(require("./element/model"));
var _corpus = /*#__PURE__*/ _interop_require_default(require("./corpus"));
var _weights = /*#__PURE__*/ _interop_require_default(require("./element/weights"));
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("./element/vocabulary"));
var _markov = /*#__PURE__*/ _interop_require_default(require("./element/head/markov"));
var _attention = /*#__PURE__*/ _interop_require_default(require("./element/head/attention"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZWFjdCB9IGZyb20gXCIuL3JlYWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWQgfSBmcm9tIFwiLi9lbGVtZW50L2hlYWRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kZWwgfSBmcm9tIFwiLi9lbGVtZW50L21vZGVsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvcnB1cyB9IGZyb20gXCIuL2NvcnB1c1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBXZWlnaHRzIH0gZnJvbSBcIi4vZWxlbWVudC93ZWlnaHRzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFZvY2FidWxhcnkgfSBmcm9tIFwiLi9lbGVtZW50L3ZvY2FidWxhcnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTWFya292SGVhZCB9IGZyb20gXCIuL2VsZW1lbnQvaGVhZC9tYXJrb3ZcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXR0ZW50aW9uSGVhZCB9IGZyb20gXCIuL2VsZW1lbnQvaGVhZC9hdHRlbnRpb25cIjtcbiJdLCJuYW1lcyI6WyJBdHRlbnRpb25IZWFkIiwiQ29ycHVzIiwiSGVhZCIsIk1hcmtvdkhlYWQiLCJNb2RlbCIsIlJlYWN0IiwiVm9jYWJ1bGFyeSIsIldlaWdodHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQVNvQkE7ZUFBQUEsa0JBQWE7O1FBSmJDO2VBQUFBLGVBQU07O1FBRk5DO2VBQUFBLGFBQUk7O1FBS0pDO2VBQUFBLGVBQVU7O1FBSlZDO2VBQUFBLGNBQUs7O1FBRkxDO2VBQUFBLGNBQUs7O1FBS0xDO2VBQUFBLG1CQUFVOztRQURWQztlQUFBQSxnQkFBTzs7OzREQUpNOzJEQUNEOzREQUNDOzZEQUNDOzhEQUNDO2lFQUNHOzZEQUNBO2dFQUNHIn0=