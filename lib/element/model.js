"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Model;
    }
});
var _necessary = require("necessary");
var _head = /*#__PURE__*/ _interop_require_default(require("../element/head"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("./vocabulary"));
var _defaults = require("../defaults");
var _element1 = require("../utilities/element");
var _json = require("../utilities/json");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var writeFile = _necessary.fileSystemUtilities.writeFile;
var Model = /*#__PURE__*/ function(Element) {
    _inherits(Model, Element);
    function Model(vocabulary, head) {
        _class_call_check(this, Model);
        var _this;
        _this = _call_super(this, Model);
        _this.vocabulary = vocabulary;
        _this.head = head;
        return _this;
    }
    _create_class(Model, [
        {
            key: "getVocabulary",
            value: function getVocabulary() {
                return this.vocabulary;
            }
        },
        {
            key: "getHead",
            value: function getHead() {
                return this.head;
            }
        },
        {
            key: "train",
            value: function train(corpus) {
                var _this = this;
                corpus.forEachChunk(function(chunk) {
                    chunk.forEachTransition(_this.vocabulary, function(transition) {
                        _this.head.train(transition);
                    });
                });
            }
        },
        {
            key: "infer",
            value: function infer(token, length) {
                var tokens = [];
                for(var count = 0; count < length; count++){
                    token = this.forward(token);
                    if (token === null) {
                        break;
                    }
                    tokens.push(token);
                }
                return tokens;
            }
        },
        {
            key: "forward",
            value: function forward(token) {
                return this.head.forward(token, this.vocabulary);
            }
        },
        {
            key: "serialise",
            value: function serialise() {
                var filePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_MODEL_FILE_PATH;
                var json = this.toJSON(), jsonString = JSON.stringify(json), content = jsonString; ///
                writeFile(filePath, content);
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.vocabulary.initialise();
                this.head.initialise(this.vocabulary);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var vocabularyJSON = this.vocabulary.toJSON(), headJSON = this.head.toJSON(), vocabulary = vocabularyJSON, head = headJSON, json = {
                    vocabulary: vocabulary,
                    head: head
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var vocabulary = (0, _json.vocabularyFromJSON)(json), head = (0, _json.headFromJSON)(json), model = new MOdel(vocabulary, head);
                return model;
            }
        },
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _Element;
                var childElements = properties.childElements, vocabulary = (0, _element1.elementFromChildElements)(childElements, _vocabulary.default), head = (0, _element1.elementFromChildElements)(childElements, _head.default), model = (_Element = _element.default).fromProperties.apply(_Element, [
                    Model,
                    properties,
                    vocabulary,
                    head
                ].concat(_to_consumable_array(remainingArguments)));
                model.initialise();
                return model;
            }
        }
    ]);
    return Model;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vZWxlbWVudC9oZWFkXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4vdm9jYWJ1bGFyeVwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01PREVMX0ZJTEVfUEFUSCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBoZWFkRnJvbUpTT04sIHZvY2FidWxhcnlGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iodm9jYWJ1bGFyeSwgaGVhZCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5O1xuICAgIHRoaXMuaGVhZCA9IGhlYWQ7XG4gIH1cblxuICBnZXRWb2NhYnVsYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnZvY2FidWxhcnk7XG4gIH1cblxuICBnZXRIZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cblxuICB0cmFpbihjb3JwdXMpIHtcbiAgICBjb3JwdXMuZm9yRWFjaENodW5rKChjaHVuaykgPT4ge1xuICAgICAgY2h1bmsuZm9yRWFjaFRyYW5zaXRpb24odGhpcy52b2NhYnVsYXJ5LCAodHJhbnNpdGlvbikgPT4ge1xuICAgICAgICB0aGlzLmhlYWQudHJhaW4odHJhbnNpdGlvbik7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluZmVyKHRva2VuLCBsZW5ndGgpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBsZW5ndGg7IGNvdW50KyspIHtcbiAgICAgIHRva2VuID0gdGhpcy5mb3J3YXJkKHRva2VuKTtcblxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGZvcndhcmQodG9rZW4pIHsgcmV0dXJuIHRoaXMuaGVhZC5mb3J3YXJkKHRva2VuLCB0aGlzLnZvY2FidWxhcnkpOyB9XG5cbiAgc2VyaWFsaXNlKGZpbGVQYXRoID0gREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy50b0pTT04oKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcbiAgICBcbiAgICB0aGlzLmhlYWQuaW5pdGlhbGlzZSh0aGlzLnZvY2FidWxhcnkpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHZvY2FidWxhcnlKU09OID0gdGhpcy52b2NhYnVsYXJ5LnRvSlNPTigpLFxuICAgICAgICAgIGhlYWRKU09OID0gdGhpcy5oZWFkLnRvSlNPTigpLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5SlNPTiwgIC8vL1xuICAgICAgICAgIGhlYWQgPSBoZWFkSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZvY2FidWxhcnksXG4gICAgICAgICAgICBoZWFkXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pLFxuICAgICAgICAgIGhlYWQgPSBoZWFkRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgbW9kZWwgPSBuZXcgTU9kZWwodm9jYWJ1bGFyeSwgaGVhZCk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgVm9jYWJ1bGFyeSksXG4gICAgICAgICAgaGVhZCA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBIZWFkKSxcbiAgICAgICAgICBtb2RlbCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTW9kZWwsIHByb3BlcnRpZXMsIHZvY2FidWxhcnksIGhlYWQsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBtb2RlbC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNb2RlbCIsIndyaXRlRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJ2b2NhYnVsYXJ5IiwiaGVhZCIsImdldFZvY2FidWxhcnkiLCJnZXRIZWFkIiwidHJhaW4iLCJjb3JwdXMiLCJmb3JFYWNoQ2h1bmsiLCJjaHVuayIsImZvckVhY2hUcmFuc2l0aW9uIiwidHJhbnNpdGlvbiIsImluZmVyIiwidG9rZW4iLCJsZW5ndGgiLCJ0b2tlbnMiLCJjb3VudCIsImZvcndhcmQiLCJwdXNoIiwic2VyaWFsaXNlIiwiZmlsZVBhdGgiLCJERUZBVUxUX01PREVMX0ZJTEVfUEFUSCIsImpzb24iLCJ0b0pTT04iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJpbml0aWFsaXNlIiwidm9jYWJ1bGFyeUpTT04iLCJoZWFkSlNPTiIsImZyb21KU09OIiwidm9jYWJ1bGFyeUZyb21KU09OIiwiaGVhZEZyb21KU09OIiwibW9kZWwiLCJNT2RlbCIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwiVm9jYWJ1bGFyeSIsIkhlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O3lCQVplOzJEQUVuQjs4REFDRztpRUFDRzt3QkFFaUI7d0JBQ0M7b0JBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFNLEFBQUVDLFlBQWNDLDhCQUFtQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELHNCQUFOO2NBQU1BO2FBQUFBLE1BQ1BHLFVBQVUsRUFBRUMsSUFBSTtnQ0FEVEo7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtHLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0MsSUFBSSxHQUFHQTs7O2tCQUxLSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFH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