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
var _weights = /*#__PURE__*/ _interop_require_default(require("./weights"));
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("./vocabulary"));
var _model = /*#__PURE__*/ _interop_require_default(require("../result/model"));
var _oneHot = /*#__PURE__*/ _interop_require_default(require("../vector/oneHot"));
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
            key: "step",
            value: function step(corpus) {
                var _this = this;
                var learningRate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_LEARNING_RATE;
                var weightsResults = corpus.mapChunk(function(chunk) {
                    var oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, _this.vocabulary), weightsResult = _this.weights.step(oneHotVectors, learningRate);
                    return weightsResult;
                }), modelResult = _model.default.fromCorpusAndWeightsResults(corpus, weightsResults);
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
                var weightsResults = corpus.mapChunk(function(chunk) {
                    var oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, _this.vocabulary), weightsResult = _this.weights.evaluate(oneHotVectors);
                    return weightsResult;
                }), modelResult = _model.default.fromCorpusAndWeightsResults(corpus, weightsResults);
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
                var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, this.vocabulary), probabilitiesVector = this.weights.forward(oneHotVector), probabilitiesVectorArgmax = probabilitiesVector.argmax(), index = probabilitiesVectorArgmax; ///
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
function oneHotVectorsFromChunkAnvVocabulary(chunk, vocabulary) {
    var tokens = chunk, oneHotVectors = tokens.map(function(token) {
        var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, vocabulary);
        return oneHotVector;
    });
    return oneHotVectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgV2VpZ2h0cyBmcm9tIFwiLi93ZWlnaHRzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4vdm9jYWJ1bGFyeVwiO1xuaW1wb3J0IE1vZGVsUmVzdWx0IGZyb20gXCIuLi9yZXN1bHQvbW9kZWxcIjtcbmltcG9ydCBPbmVIb3RWZWN0b3IgZnJvbSBcIi4uL3ZlY3Rvci9vbmVIb3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB3ZWlnaHRzRnJvbUpTT04sIHZvY2FidWxhcnlGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgREVGQVVMVF9FUE9DSFMsIERFRkFVTFRfTEVBUk5JTkdfUkFURSwgREVGQVVMVF9NT0RFTF9GSUxFX1BBVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyB3cml0ZUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZvY2FidWxhcnksIHdlaWdodHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeTtcbiAgICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgZ2V0Vm9jYWJ1bGFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy52b2NhYnVsYXJ5O1xuICB9XG5cbiAgZ2V0V2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHRzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy52b2NhYnVsYXJ5ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbW9kZWwgaGFzIG5vIHZvY2FidWxhcnkuXCIpXG4gICAgfVxuXG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcblxuICAgIGlmICh0aGlzLndlaWdodHMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtb2RlbCBoYXMgbm8gd2VpZ2h0cy5cIilcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgc3RlcChjb3JwdXMsIGxlYXJuaW5nUmF0ZSA9IERFRkFVTFRfTEVBUk5JTkdfUkFURSkge1xuICAgIGNvbnN0IHdlaWdodHNSZXN1bHRzID0gY29ycHVzLm1hcENodW5rKChjaHVuaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb25lSG90VmVjdG9ycyA9IG9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5KGNodW5rLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgICAgICAgICAgd2VpZ2h0c1Jlc3VsdCA9IHRoaXMud2VpZ2h0cy5zdGVwKG9uZUhvdFZlY3RvcnMsIGxlYXJuaW5nUmF0ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiB3ZWlnaHRzUmVzdWx0O1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1vZGVsUmVzdWx0ID0gTW9kZWxSZXN1bHQuZnJvbUNvcnB1c0FuZFdlaWdodHNSZXN1bHRzKGNvcnB1cywgd2VpZ2h0c1Jlc3VsdHMpO1xuXG4gICAgcmV0dXJuIG1vZGVsUmVzdWx0O1xuICB9XG5cbiAgdHJhaW4oY29ycHVzLCBlcG9jaHMgPSBERUZBVUxUX0VQT0NIUywgbGVhcm5pbmdSYXRlID0gREVGQVVMVF9MRUFSTklOR19SQVRFKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG5cbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgZXBvY2hzOyBjb3VudCsrKSB7XG4gICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnN0ZXAoY29ycHVzLCBsZWFybmluZ1JhdGUpO1xuXG4gICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvcnB1cykge1xuICAgIGNvbnN0IHdlaWdodHNSZXN1bHRzID0gY29ycHVzLm1hcENodW5rKChjaHVuaykgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb25lSG90VmVjdG9ycyA9IG9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5KGNodW5rLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgICAgICAgICAgd2VpZ2h0c1Jlc3VsdCA9IHRoaXMud2VpZ2h0cy5ldmFsdWF0ZShvbmVIb3RWZWN0b3JzKTtcblxuICAgICAgICAgICAgcmV0dXJuIHdlaWdodHNSZXN1bHQ7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbW9kZWxSZXN1bHQgPSBNb2RlbFJlc3VsdC5mcm9tQ29ycHVzQW5kV2VpZ2h0c1Jlc3VsdHMoY29ycHVzLCB3ZWlnaHRzUmVzdWx0cyk7XG5cbiAgICByZXR1cm4gbW9kZWxSZXN1bHQ7XG4gIH1cblxuICBpbmZlcih0b2tlbiwgbGVuZ3RoKSB7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG5cbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgbGVuZ3RoOyBjb3VudCsrKSB7XG4gICAgICB0b2tlbiA9IHRoaXMuZm9yd2FyZCh0b2tlbik7XG5cbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZm9yd2FyZCh0b2tlbikge1xuICAgIGNvbnN0IG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSB0aGlzLndlaWdodHMuZm9yd2FyZChvbmVIb3RWZWN0b3IpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXggPSBwcm9iYWJpbGl0aWVzVmVjdG9yLmFyZ21heCgpLFxuICAgICAgICAgIGluZGV4ID0gcHJvYmFiaWxpdGllc1ZlY3RvckFyZ21heDsgLy8vXG5cbiAgICB0b2tlbiA9IHRoaXMudm9jYWJ1bGFyeS50b2tlbkF0KGluZGV4KTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIHNlcmlhbGlzZShmaWxlUGF0aCA9IERFRkFVTFRfTU9ERUxfRklMRV9QQVRIKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMudG9KU09OKCksXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAvLy9cblxuICAgIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeUpTT04gPSB0aGlzLnZvY2FidWxhcnkudG9KU09OKCksXG4gICAgICAgICAgd2VpZ2h0c0pTT04gPSB0aGlzLndlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlKU09OLCAgLy8vXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdm9jYWJ1bGFyeSxcbiAgICAgICAgICAgIHdlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBtb2RlbCA9IG5ldyBNT2RlbCh2b2NhYnVsYXJ5LCB3ZWlnaHRzKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBWb2NhYnVsYXJ5KSxcbiAgICAgICAgICB3ZWlnaHRzID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFdlaWdodHMpLFxuICAgICAgICAgIG1vZGVsID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNb2RlbCwgcHJvcGVydGllcywgdm9jYWJ1bGFyeSwgd2VpZ2h0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG1vZGVsLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbmVIb3RWZWN0b3JzRnJvbUNodW5rQW52Vm9jYWJ1bGFyeShjaHVuaywgdm9jYWJ1bGFyeSkge1xuICBjb25zdCB0b2tlbnMgPSBjaHVuaywgLy8vXG4gICAgICAgIG9uZUhvdFZlY3RvcnMgPSB0b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgIGNvbnN0IG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB2b2NhYnVsYXJ5KTtcblxuICAgICAgICAgIHJldHVybiBvbmVIb3RWZWN0b3I7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBvbmVIb3RWZWN0b3JzO1xufVxuIl0sIm5hbWVzIjpbIk1vZGVsIiwid3JpdGVGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInZvY2FidWxhcnkiLCJ3ZWlnaHRzIiwiZ2V0Vm9jYWJ1bGFyeSIsImdldFdlaWdodHMiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJzaXplIiwiZ2V0U2l6ZSIsInN0ZXAiLCJjb3JwdXMiLCJsZWFybmluZ1JhdGUiLCJERUZBVUxUX0xFQVJOSU5HX1JBVEUiLCJ3ZWlnaHRzUmVzdWx0cyIsIm1hcENodW5rIiwiY2h1bmsiLCJvbmVIb3RWZWN0b3JzIiwib25lSG90VmVjdG9yc0Zyb21DaHVua0FudlZvY2FidWxhcnkiLCJ3ZWlnaHRzUmVzdWx0IiwibW9kZWxSZXN1bHQiLCJNb2RlbFJlc3VsdCIsImZyb21Db3JwdXNBbmRXZWlnaHRzUmVzdWx0cyIsInRyYWluIiwiZXBvY2hzIiwiREVGQVVMVF9FUE9DSFMiLCJyZXN1bHRzIiwiY291bnQiLCJyZXN1bHQiLCJwdXNoIiwiZXZhbHVhdGUiLCJpbmZlciIsInRva2VuIiwibGVuZ3RoIiwidG9rZW5zIiwiZm9yd2FyZCIsIm9uZUhvdFZlY3RvciIsIk9uZUhvdFZlY3RvciIsImZyb21Ub2tlbkFuZFZvY2FidWxhcnkiLCJwcm9iYWJpbGl0aWVzVmVjdG9yIiwicHJvYmFiaWxpdGllc1ZlY3RvckFyZ21heCIsImFyZ21heCIsImluZGV4IiwidG9rZW5BdCIsInNlcmlhbGlzZSIsImZpbGVQYXRoIiwiREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgiLCJqc29uIiwidG9KU09OIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50Iiwidm9jYWJ1bGFyeUpTT04iLCJ3ZWlnaHRzSlNPTiIsImZyb21KU09OIiwidm9jYWJ1bGFyeUZyb21KU09OIiwid2VpZ2h0c0Zyb21KU09OIiwibW9kZWwiLCJNT2RlbCIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwi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