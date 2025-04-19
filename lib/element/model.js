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
var _main = require("necessary/lib/main");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _weights = /*#__PURE__*/ _interop_require_default(require("../element/weights"));
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("../element/vocabulary"));
var _oneHot = /*#__PURE__*/ _interop_require_default(require("../vector/oneHot"));
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
var writeFile = _main.fileSystemUtilities.writeFile;
var Model = /*#__PURE__*/ function(Element) {
    _inherits(Model, Element);
    function Model(vocabulary, weights) {
        _class_call_check(this, Model);
        var _this;
        _this = _call_super(this, Model);
        _this.vocabulary = vocabulary;
        _this.weights = weights;
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
            key: "getWeights",
            value: function getWeights() {
                return this.weights;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                if (this.vocabulary === null) {
                    throw new Error("The model has no vocabulary.");
                }
                this.vocabulary.initialise();
                if (this.weights === null) {
                    throw new Error("The model has no weights.");
                }
                var size = this.vocabulary.getSize();
                this.weights.initialise(size);
            }
        },
        {
            key: "train",
            value: function train(corpus) {
                var _this = this;
                var chunks = corpus.getChunks();
                chunks.forEach(function(chunk) {
                    var tokens = chunk, oneHotVectors = tokens.map(function(token) {
                        var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, _this.vocabulary);
                        return oneHotVector;
                    });
                    _this.weights.train(oneHotVectors);
                });
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
            key: "toJSON",
            value: function toJSON() {
                var vocabularyJSON = this.vocabulary.toJSON(), weightsJSON = this.weights.toJSON(), vocabulary = vocabularyJSON, weights = weightsJSON, json = {
                    vocabulary: vocabulary,
                    weights: weights
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var vocabulary = (0, _json.vocabularyFromJSON)(json), weights = (0, _json.weightsFromJSON)(json), model = new MOdel(vocabulary, weights);
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
                var childElements = properties.childElements, vocabulary = (0, _element1.elementFromChildElements)(childElements, _vocabulary.default), weights = (0, _element1.elementFromChildElements)(childElements, _weights.default), model = (_Element = _element.default).fromProperties.apply(_Element, [
                    Model,
                    properties,
                    vocabulary,
                    weights
                ].concat(_to_consumable_array(remainingArguments)));
                model.initialise();
                return model;
            }
        }
    ]);
    return Model;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL2VsZW1lbnQvd2VpZ2h0c1wiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4uL2VsZW1lbnQvdm9jYWJ1bGFyeVwiO1xuaW1wb3J0IE9uZUhvdFZlY3RvciBmcm9tIFwiLi4vdmVjdG9yL29uZUhvdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01PREVMX0ZJTEVfUEFUSCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB3ZWlnaHRzRnJvbUpTT04sIHZvY2FidWxhcnlGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3Iodm9jYWJ1bGFyeSwgd2VpZ2h0cykge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5O1xuICAgIHRoaXMud2VpZ2h0cyA9IHdlaWdodHM7XG4gIH1cblxuICBnZXRWb2NhYnVsYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnZvY2FidWxhcnk7XG4gIH1cblxuICBnZXRXZWlnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLndlaWdodHM7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGlmICh0aGlzLnZvY2FidWxhcnkgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtb2RlbCBoYXMgbm8gdm9jYWJ1bGFyeS5cIilcbiAgICB9XG5cbiAgICB0aGlzLnZvY2FidWxhcnkuaW5pdGlhbGlzZSgpO1xuXG4gICAgaWYgKHRoaXMud2VpZ2h0cyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG1vZGVsIGhhcyBubyB3ZWlnaHRzLlwiKVxuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSB0aGlzLnZvY2FidWxhcnkuZ2V0U2l6ZSgpO1xuXG4gICAgdGhpcy53ZWlnaHRzLmluaXRpYWxpc2Uoc2l6ZSk7XG4gIH1cblxuICB0cmFpbihjb3JwdXMpIHtcbiAgICBjb25zdCBjaHVua3MgPSBjb3JwdXMuZ2V0Q2h1bmtzKCk7XG5cbiAgICBjaHVua3MuZm9yRWFjaCgoY2h1bmspID0+IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IGNodW5rLCAvLy9cbiAgICAgICAgICAgIG9uZUhvdFZlY3RvcnMgPSB0b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvbmVIb3RWZWN0b3IgPSBPbmVIb3RWZWN0b3IuZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSh0b2tlbiwgdGhpcy52b2NhYnVsYXJ5KTtcblxuICAgICAgICAgICAgICByZXR1cm4gb25lSG90VmVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHRoaXMud2VpZ2h0cy50cmFpbihvbmVIb3RWZWN0b3JzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlcmlhbGlzZShmaWxlUGF0aCA9IERFRkFVTFRfTU9ERUxfRklMRV9QQVRIKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMudG9KU09OKCksXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAvLy9cblxuICAgIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeUpTT04gPSB0aGlzLnZvY2FidWxhcnkudG9KU09OKCksXG4gICAgICAgICAgd2VpZ2h0c0pTT04gPSB0aGlzLndlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlKU09OLCAgLy8vXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdm9jYWJ1bGFyeSxcbiAgICAgICAgICAgIHdlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBtb2RlbCA9IG5ldyBNT2RlbCh2b2NhYnVsYXJ5LCB3ZWlnaHRzKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBWb2NhYnVsYXJ5KSxcbiAgICAgICAgICB3ZWlnaHRzID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFdlaWdodHMpLFxuICAgICAgICAgIG1vZGVsID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNb2RlbCwgcHJvcGVydGllcywgdm9jYWJ1bGFyeSwgd2VpZ2h0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG1vZGVsLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vZGVsIiwid3JpdGVGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInZvY2FidWxhcnkiLCJ3ZWlnaHRzIiwiZ2V0Vm9jYWJ1bGFyeSIsImdldFdlaWdodHMiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJzaXplIiwiZ2V0U2l6ZSIsInRyYWluIiwiY29ycHVzIiwiY2h1bmtzIiwiZ2V0Q2h1bmtzIiwiZm9yRWFjaCIsImNodW5rIiwidG9rZW5zIiwib25lSG90VmVjdG9ycyIsIm1hcCIsInRva2VuIiwib25lSG90VmVjdG9yIiwiT25lSG90VmVjdG9yIiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsInNlcmlhbGlzZSIsImZpbGVQYXRoIiwiREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgiLCJqc29uIiwidG9KU09OIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50Iiwidm9jYWJ1bGFyeUpTT04iLCJ3ZWlnaHRzSlNPTiIsImZyb21KU09OIiwidm9jYWJ1bGFyeUZyb21KU09OIiwid2VpZ2h0c0Zyb21KU09OIiwibW9kZWwiLCJNT2RlbCIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwiVm9jYWJ1bGFyeSIsIldlaWdodHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O29CQWJlOzhEQUVoQjs4REFDQTtpRUFDRzs2REFDRTt3QkFFZTt3QkFDQztvQkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElB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