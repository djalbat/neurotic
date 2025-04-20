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
var _main = require("necessary/lib/main");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _registry = /*#__PURE__*/ _interop_require_wildcard(require("../registry"));
var _element1 = require("../utilities/element");
var _json = require("../utilities/json");
var _defaults = require("../defaults");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function(Element) {
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
            key: "step",
            value: function step(corpus) {
                var _this = this;
                var learningRate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_LEARNING_RATE;
                var ModelResult = _registry.default.ModelResult, weightsResults = corpus.mapChunk(function(chunk) {
                    var oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, _this.vocabulary), weightsResult = _this.weights.step(oneHotVectors, learningRate);
                    return weightsResult;
                }), modelResult = ModelResult.fromCorpusAndWeightsResults(corpus, weightsResults);
                return modelResult;
            }
        },
        {
            key: "train",
            value: function train(corpus) {
                var epochs = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_EPOCHS, learningRate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_LEARNING_RATE;
                var results = [];
                for(var count = 0; count < epochs; count++){
                    var result = this.step(corpus, learningRate);
                    results.push(result);
                }
                return results;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(corpus) {
                var _this = this;
                var ModelResult = _registry.default.ModelResult, weightsResults = corpus.mapChunk(function(chunk) {
                    var oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, _this.vocabulary), weightsResult = _this.weights.evaluate(oneHotVectors);
                    return weightsResult;
                }), modelResult = ModelResult.fromCorpusAndWeightsResults(corpus, weightsResults);
                return modelResult;
            }
        },
        {
            key: "infer",
            value: function infer(token, length) {
                var tokens = [];
                for(var count = 0; count < length; count++){
                    token = this.forward(token);
                    tokens.push(token);
                }
                return tokens;
            }
        },
        {
            key: "forward",
            value: function forward(token) {
                var OneHotVector = _registry.default.OneHotVector, oneHotVector = OneHotVector.fromTokenAndVocabulary(token, this.vocabulary), probabilitiesVector = this.weights.forward(oneHotVector), probabilitiesVectorArgmax = probabilitiesVector.argmax(), index = probabilitiesVectorArgmax; ///
                token = this.vocabulary.tokenAt(index);
                return token;
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
                var Weights = _registry.default.Weights, Vocabulary = _registry.default.Vocabulary, childElements = properties.childElements, vocabulary = (0, _element1.elementFromChildElements)(childElements, Vocabulary), weights = (0, _element1.elementFromChildElements)(childElements, Weights), model = (_Element = _element.default).fromProperties.apply(_Element, [
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
}(_wrap_native_super(_element.default)));
function oneHotVectorsFromChunkAnvVocabulary(chunk, vocabulary) {
    var tokens = chunk, oneHotVectors = tokens.map(function(token) {
        var OneHotVector = _registry.default.OneHotVector, oneHotVector = OneHotVector.fromTokenAndVocabulary(token, vocabulary);
        return oneHotVector;
    });
    return oneHotVectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyByZWdpc3RyeUFzc2lnbmVkIH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHdlaWdodHNGcm9tSlNPTiwgdm9jYWJ1bGFyeUZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBERUZBVUxUX0VQT0NIUywgREVGQVVMVF9MRUFSTklOR19SQVRFLCBERUZBVUxUX01PREVMX0ZJTEVfUEFUSCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuXG5jb25zdCB7IHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnlBc3NpZ25lZChjbGFzcyBNb2RlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2b2NhYnVsYXJ5LCB3ZWlnaHRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudm9jYWJ1bGFyeSA9IHZvY2FidWxhcnk7XG4gICAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cztcbiAgfVxuXG4gIGdldFZvY2FidWxhcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudm9jYWJ1bGFyeTtcbiAgfVxuXG4gIGdldFdlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0cztcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgaWYgKHRoaXMudm9jYWJ1bGFyeSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG1vZGVsIGhhcyBubyB2b2NhYnVsYXJ5LlwiKVxuICAgIH1cblxuICAgIHRoaXMudm9jYWJ1bGFyeS5pbml0aWFsaXNlKCk7XG5cbiAgICBpZiAodGhpcy53ZWlnaHRzID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbW9kZWwgaGFzIG5vIHdlaWdodHMuXCIpXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudm9jYWJ1bGFyeS5nZXRTaXplKCk7XG5cbiAgICB0aGlzLndlaWdodHMuaW5pdGlhbGlzZShzaXplKTtcbiAgfVxuXG4gIHN0ZXAoY29ycHVzLCBsZWFybmluZ1JhdGUgPSBERUZBVUxUX0xFQVJOSU5HX1JBVEUpIHtcbiAgICBjb25zdCB7IE1vZGVsUmVzdWx0IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICB3ZWlnaHRzUmVzdWx0cyA9IGNvcnB1cy5tYXBDaHVuaygoY2h1bmspID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9uZUhvdFZlY3RvcnMgPSBvbmVIb3RWZWN0b3JzRnJvbUNodW5rQW52Vm9jYWJ1bGFyeShjaHVuaywgdGhpcy52b2NhYnVsYXJ5KSxcbiAgICAgICAgICAgICAgICAgIHdlaWdodHNSZXN1bHQgPSB0aGlzLndlaWdodHMuc3RlcChvbmVIb3RWZWN0b3JzLCBsZWFybmluZ1JhdGUpO1xuXG4gICAgICAgICAgICByZXR1cm4gd2VpZ2h0c1Jlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtb2RlbFJlc3VsdCA9IE1vZGVsUmVzdWx0LmZyb21Db3JwdXNBbmRXZWlnaHRzUmVzdWx0cyhjb3JwdXMsIHdlaWdodHNSZXN1bHRzKTtcblxuICAgIHJldHVybiBtb2RlbFJlc3VsdDtcbiAgfVxuXG4gIHRyYWluKGNvcnB1cywgZXBvY2hzID0gREVGQVVMVF9FUE9DSFMsIGxlYXJuaW5nUmF0ZSA9IERFRkFVTFRfTEVBUk5JTkdfUkFURSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGVwb2NoczsgY291bnQrKykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zdGVwKGNvcnB1cywgbGVhcm5pbmdSYXRlKTtcblxuICAgICAgcmVzdWx0cy5wdXNoKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBldmFsdWF0ZShjb3JwdXMpIHtcbiAgICBjb25zdCB7IE1vZGVsUmVzdWx0IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICB3ZWlnaHRzUmVzdWx0cyA9IGNvcnB1cy5tYXBDaHVuaygoY2h1bmspID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9uZUhvdFZlY3RvcnMgPSBvbmVIb3RWZWN0b3JzRnJvbUNodW5rQW52Vm9jYWJ1bGFyeShjaHVuaywgdGhpcy52b2NhYnVsYXJ5KSxcbiAgICAgICAgICAgICAgICAgIHdlaWdodHNSZXN1bHQgPSB0aGlzLndlaWdodHMuZXZhbHVhdGUob25lSG90VmVjdG9ycyk7XG5cbiAgICAgICAgICAgIHJldHVybiB3ZWlnaHRzUmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1vZGVsUmVzdWx0ID0gTW9kZWxSZXN1bHQuZnJvbUNvcnB1c0FuZFdlaWdodHNSZXN1bHRzKGNvcnB1cywgd2VpZ2h0c1Jlc3VsdHMpO1xuXG4gICAgcmV0dXJuIG1vZGVsUmVzdWx0O1xuICB9XG5cbiAgaW5mZXIodG9rZW4sIGxlbmd0aCkge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGxlbmd0aDsgY291bnQrKykge1xuICAgICAgdG9rZW4gPSB0aGlzLmZvcndhcmQodG9rZW4pO1xuXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGZvcndhcmQodG9rZW4pIHtcbiAgICBjb25zdCB7IE9uZUhvdFZlY3RvciB9ID0gcmVnaXN0cnksXG4gICAgICAgIG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gdGhpcy53ZWlnaHRzLmZvcndhcmQob25lSG90VmVjdG9yKSxcbiAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvckFyZ21heCA9IHByb2JhYmlsaXRpZXNWZWN0b3IuYXJnbWF4KCksXG4gICAgICAgIGluZGV4ID0gcHJvYmFiaWxpdGllc1ZlY3RvckFyZ21heDsgLy8vXG5cbiAgICB0b2tlbiA9IHRoaXMudm9jYWJ1bGFyeS50b2tlbkF0KGluZGV4KTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHNlcmlhbGlzZShmaWxlUGF0aCA9IERFRkFVTFRfTU9ERUxfRklMRV9QQVRIKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMudG9KU09OKCksXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAvLy9cblxuICAgIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeUpTT04gPSB0aGlzLnZvY2FidWxhcnkudG9KU09OKCksXG4gICAgICAgICAgd2VpZ2h0c0pTT04gPSB0aGlzLndlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlKU09OLCAgLy8vXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdm9jYWJ1bGFyeSxcbiAgICAgICAgICAgIHdlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBtb2RlbCA9IG5ldyBNT2RlbCh2b2NhYnVsYXJ5LCB3ZWlnaHRzKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IFdlaWdodHMsIFZvY2FidWxhcnkgfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgIHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFZvY2FidWxhcnkpLFxuICAgICAgICAgIHdlaWdodHMgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgV2VpZ2h0cyksXG4gICAgICAgICAgbW9kZWwgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1vZGVsLCBwcm9wZXJ0aWVzLCB2b2NhYnVsYXJ5LCB3ZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbW9kZWwuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gb25lSG90VmVjdG9yc0Zyb21DaHVua0FudlZvY2FidWxhcnkoY2h1bmssIHZvY2FidWxhcnkpIHtcbiAgY29uc3QgdG9rZW5zID0gY2h1bmssIC8vL1xuICAgICAgICBvbmVIb3RWZWN0b3JzID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCB7IE9uZUhvdFZlY3RvciB9ID0gcmVnaXN0cnksXG4gICAgICAgICAgICAgICAgb25lSG90VmVjdG9yID0gT25lSG90VmVjdG9yLmZyb21Ub2tlbkFuZFZvY2FidWxhcnkodG9rZW4sIHZvY2FidWxhcnkpO1xuXG4gICAgICAgICAgcmV0dXJuIG9uZUhvdFZlY3RvcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG9uZUhvdFZlY3RvcnM7XG59XG4iXSwibmFtZXMiOlsid3JpdGVGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInJlZ2lzdHJ5QXNzaWduZWQiLCJNb2RlbCIsInZvY2FidWxhcnkiLCJ3ZWlnaHRzIiwiZ2V0Vm9jYWJ1bGFyeSIsImdldFdlaWdodHMiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJzaXplIiwiZ2V0U2l6ZSIsInN0ZXAiLCJjb3JwdXMiLCJsZWFybmluZ1JhdGUiLCJERUZBVUxUX0xFQVJOSU5HX1JBVEUiLCJNb2RlbFJlc3VsdCIsInJlZ2lzdHJ5Iiwid2VpZ2h0c1Jlc3VsdHMiLCJtYXBDaHVuayIsImNodW5rIiwib25lSG90VmVjdG9ycyIsIm9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5Iiwid2VpZ2h0c1Jlc3VsdCIsIm1vZGVsUmVzdWx0IiwiZnJvbUNvcnB1c0FuZFdlaWdodHNSZXN1bHRzIiwidHJhaW4iLCJlcG9jaHMiLCJERUZBVUxUX0VQT0NIUyIsInJlc3VsdHMiLCJjb3VudCIsInJlc3VsdCIsInB1c2giLCJldmFsdWF0ZSIsImluZmVyIiwidG9rZW4iLCJsZW5ndGgiLCJ0b2tlbnMiLCJmb3J3YXJkIiwiT25lSG90VmVjdG9yIiwib25lSG90VmVjdG9yIiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJwcm9iYWJpbGl0aWVzVmVjdG9yQXJnbWF4IiwiYXJnbWF4IiwiaW5kZXgiLCJ0b2tlbkF0Iiwic2VyaWFsaXNlIiwiZmlsZVBhdGgiLCJERUZBVUxUX01PREVMX0ZJTEVfUEFUSCIsImpzb24iLCJ0b0pTT04iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJ2b2NhYnVsYXJ5SlNPTiIsIndlaWdodHNKU09OIiwiZnJvbUpTT04iLCJ2b2NhYnVsYXJ5RnJvbUpTT04iLCJ3ZWlnaHRzRnJvbUpTT04iLCJtb2RlbCIsIk1PZGVsIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsIldlaWdodHMiLCJWb2NhYnVsYXJ5IiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7b0JBWm9DOzhEQUVoQjtnRUFDQzt3QkFHb0I7b0JBQ1c7d0JBQzJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRSxJQUFNLEFBQUVBLFlBQWNDLHlCQUFtQixDQUFqQ0Q7SUFFUixXQUFlRSxJQUFBQSwwQkFBZ0IsZ0JBQUM7O2FBQU1DLE1BQ3hCQyxVQUFVLEVBQUVDLE9BQU87Z0NBREtGOztnQkFFbEMsa0JBRmtDQTtRQUlsQyxNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLE9BQU8sR0FBR0E7Ozs7O1lBR2pCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFVBQVU7WUFDeEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxJQUFJLENBQUNKLFVBQVUsS0FBSyxNQUFNO29CQUM1QixNQUFNLElBQUlLLE1BQU07Z0JBQ2xCO2dCQUVBLElBQUksQ0FBQ0wsVUFBVSxDQUFDSSxVQUFVO2dCQUUxQixJQUFJLElBQUksQ0FB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