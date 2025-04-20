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
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
                var batch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_BATCH, learningRate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_LEARNING_RATE;
                var weightsResults = corpus.mapChunk(function(chunk) {
                    var oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, _this.vocabulary), _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], weightsResult = _this.weights.prepare(inputOneHotVector, outputOneHotVector, learningRate);
                    if (!batch) {
                        var deltaMatrix = weightsResult.getDeltaMatrix(), scaledDeltaMatrix = deltaMatrix.multiplyByScalar(learningRate);
                        _this.weights.update(scaledDeltaMatrix);
                    }
                    return weightsResult;
                });
                if (batch) {
                    var deltaMatrices = weightsResults.map(function(weightsResult) {
                        var deltaMatrix = weightsResult.getDeltaMatrix();
                        return deltaMatrix;
                    }), meanDeltaMatrix = meanOfMatrices(deltaMatrices), scaledMeanDeltaMatrix = meanDeltaMatrix.multiplyByScalar(learningRate);
                    this.weights.update(scaledMeanDeltaMatrix);
                }
                var modelResult = _model.default.fromCorpusAndWeightsResults(corpus, weightsResults);
                return modelResult;
            }
        },
        {
            key: "train",
            value: function train(corpus) {
                var batch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_BATCH, epochs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_EPOCHS, learningRate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _defaults.DEFAULT_LEARNING_RATE;
                var results = [];
                for(var count = 0; count < epochs; count++){
                    var result = this.step(corpus, batch, learningRate);
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
                var sampling = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_SAMPLING;
                var tokens = [];
                for(var count = 0; count < length; count++){
                    token = this.forward(token, sampling);
                    tokens.push(token);
                }
                return tokens;
            }
        },
        {
            key: "forward",
            value: function forward(token) {
                var sampling = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_SAMPLING;
                var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, this.vocabulary), probabilitiesVector = this.weights.forward(oneHotVector), index = probabilitiesVector.predictIndex(sampling);
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
function meanOfMatrices(matrices) {}
function oneHotVectorsFromChunkAnvVocabulary(chunk, vocabulary) {
    var tokens = chunk, oneHotVectors = tokens.map(function(token) {
        var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, vocabulary);
        return oneHotVector;
    });
    return oneHotVectors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgV2VpZ2h0cyBmcm9tIFwiLi93ZWlnaHRzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4vdm9jYWJ1bGFyeVwiO1xuaW1wb3J0IE1vZGVsUmVzdWx0IGZyb20gXCIuLi9yZXN1bHQvbW9kZWxcIjtcbmltcG9ydCBPbmVIb3RWZWN0b3IgZnJvbSBcIi4uL3ZlY3Rvci9vbmVIb3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB3ZWlnaHRzRnJvbUpTT04sIHZvY2FidWxhcnlGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgREVGQVVMVF9CQVRDSCwgREVGQVVMVF9FUE9DSFMsIERFRkFVTFRfU0FNUExJTkcsIERFRkFVTFRfTEVBUk5JTkdfUkFURSwgREVGQVVMVF9NT0RFTF9GSUxFX1BBVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyB3cml0ZUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZvY2FidWxhcnksIHdlaWdodHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeTtcbiAgICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgZ2V0Vm9jYWJ1bGFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy52b2NhYnVsYXJ5O1xuICB9XG5cbiAgZ2V0V2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHRzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy52b2NhYnVsYXJ5ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbW9kZWwgaGFzIG5vIHZvY2FidWxhcnkuXCIpXG4gICAgfVxuXG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcblxuICAgIGlmICh0aGlzLndlaWdodHMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtb2RlbCBoYXMgbm8gd2VpZ2h0cy5cIilcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgc3RlcChjb3JwdXMsIGJhdGNoID0gREVGQVVMVF9CQVRDSCwgbGVhcm5pbmdSYXRlID0gREVGQVVMVF9MRUFSTklOR19SQVRFKSB7XG4gICAgY29uc3Qgd2VpZ2h0c1Jlc3VsdHMgPSBjb3JwdXMubWFwQ2h1bmsoKGNodW5rKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbmVIb3RWZWN0b3JzID0gb25lSG90VmVjdG9yc0Zyb21DaHVua0FudlZvY2FidWxhcnkoY2h1bmssIHRoaXMudm9jYWJ1bGFyeSksXG4gICAgICAgICAgICAgICAgICBbIGlucHV0T25lSG90VmVjdG9yLCBvdXRwdXRPbmVIb3RWZWN0b3IgXSA9IG9uZUhvdFZlY3RvcnMsXG4gICAgICAgICAgICAgICAgICB3ZWlnaHRzUmVzdWx0ID0gdGhpcy53ZWlnaHRzLnByZXBhcmUoaW5wdXRPbmVIb3RWZWN0b3IsIG91dHB1dE9uZUhvdFZlY3RvciwgbGVhcm5pbmdSYXRlKTtcblxuICAgICAgICAgICAgaWYgKCFiYXRjaCkge1xuICAgICAgICAgICAgICBjb25zdCBkZWx0YU1hdHJpeCA9IHdlaWdodHNSZXN1bHQuZ2V0RGVsdGFNYXRyaXgoKSxcbiAgICAgICAgICAgICAgICAgICAgc2NhbGVkRGVsdGFNYXRyaXggPSBkZWx0YU1hdHJpeC5tdWx0aXBseUJ5U2NhbGFyKGxlYXJuaW5nUmF0ZSk7XG5cbiAgICAgICAgICAgICAgdGhpcy53ZWlnaHRzLnVwZGF0ZShzY2FsZWREZWx0YU1hdHJpeCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB3ZWlnaHRzUmVzdWx0O1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKGJhdGNoKSB7XG4gICAgICBjb25zdCBkZWx0YU1hdHJpY2VzID0gd2VpZ2h0c1Jlc3VsdHMubWFwKCh3ZWlnaHRzUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlbHRhTWF0cml4ID0gd2VpZ2h0c1Jlc3VsdC5nZXREZWx0YU1hdHJpeCgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkZWx0YU1hdHJpeDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgbWVhbkRlbHRhTWF0cml4ID0gbWVhbk9mTWF0cmljZXMoZGVsdGFNYXRyaWNlcyksXG4gICAgICAgICAgICBzY2FsZWRNZWFuRGVsdGFNYXRyaXggPSBtZWFuRGVsdGFNYXRyaXgubXVsdGlwbHlCeVNjYWxhcihsZWFybmluZ1JhdGUpO1xuXG4gICAgICB0aGlzLndlaWdodHMudXBkYXRlKHNjYWxlZE1lYW5EZWx0YU1hdHJpeCk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kZWxSZXN1bHQgPSBNb2RlbFJlc3VsdC5mcm9tQ29ycHVzQW5kV2VpZ2h0c1Jlc3VsdHMoY29ycHVzLCB3ZWlnaHRzUmVzdWx0cyk7XG5cbiAgICByZXR1cm4gbW9kZWxSZXN1bHQ7XG4gIH1cblxuICB0cmFpbihjb3JwdXMsIGJhdGNoID0gREVGQVVMVF9CQVRDSCwgZXBvY2hzID0gREVGQVVMVF9FUE9DSFMsIGxlYXJuaW5nUmF0ZSA9IERFRkFVTFRfTEVBUk5JTkdfUkFURSkge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBbXVxuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGVwb2NoczsgY291bnQrKykge1xuICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zdGVwKGNvcnB1cywgYmF0Y2gsIGxlYXJuaW5nUmF0ZSk7XG5cbiAgICAgIHJlc3VsdHMucHVzaChyZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRzO1xuICB9XG5cbiAgZXZhbHVhdGUoY29ycHVzKSB7XG4gICAgY29uc3Qgd2VpZ2h0c1Jlc3VsdHMgPSBjb3JwdXMubWFwQ2h1bmsoKGNodW5rKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvbmVIb3RWZWN0b3JzID0gb25lSG90VmVjdG9yc0Zyb21DaHVua0FudlZvY2FidWxhcnkoY2h1bmssIHRoaXMudm9jYWJ1bGFyeSksXG4gICAgICAgICAgICAgICAgICB3ZWlnaHRzUmVzdWx0ID0gdGhpcy53ZWlnaHRzLmV2YWx1YXRlKG9uZUhvdFZlY3RvcnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gd2VpZ2h0c1Jlc3VsdDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtb2RlbFJlc3VsdCA9IE1vZGVsUmVzdWx0LmZyb21Db3JwdXNBbmRXZWlnaHRzUmVzdWx0cyhjb3JwdXMsIHdlaWdodHNSZXN1bHRzKTtcblxuICAgIHJldHVybiBtb2RlbFJlc3VsdDtcbiAgfVxuXG4gIGluZmVyKHRva2VuLCBsZW5ndGgsIHNhbXBsaW5nID0gREVGQVVMVF9TQU1QTElORykge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGxlbmd0aDsgY291bnQrKykge1xuICAgICAgdG9rZW4gPSB0aGlzLmZvcndhcmQodG9rZW4sIHNhbXBsaW5nKTtcblxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBmb3J3YXJkKHRva2VuLCBzYW1wbGluZyA9IERFRkFVTFRfU0FNUExJTkcpIHtcbiAgICBjb25zdCBvbmVIb3RWZWN0b3IgPSBPbmVIb3RWZWN0b3IuZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSh0b2tlbiwgdGhpcy52b2NhYnVsYXJ5KSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gdGhpcy53ZWlnaHRzLmZvcndhcmQob25lSG90VmVjdG9yKSxcbiAgICAgICAgICBpbmRleCA9IHByb2JhYmlsaXRpZXNWZWN0b3IucHJlZGljdEluZGV4KHNhbXBsaW5nKTtcblxuICAgIHRva2VuID0gdGhpcy52b2NhYnVsYXJ5LnRva2VuQXQoaW5kZXgpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc2VyaWFsaXNlKGZpbGVQYXRoID0gREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy50b0pTT04oKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5SlNPTiA9IHRoaXMudm9jYWJ1bGFyeS50b0pTT04oKSxcbiAgICAgICAgICB3ZWlnaHRzSlNPTiA9IHRoaXMud2VpZ2h0cy50b0pTT04oKSxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUpTT04sICAvLy9cbiAgICAgICAgICB3ZWlnaHRzID0gd2VpZ2h0c0pTT04sIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB2b2NhYnVsYXJ5LFxuICAgICAgICAgICAgd2VpZ2h0c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICB3ZWlnaHRzID0gd2VpZ2h0c0Zyb21KU09OKGpzb24pLFxuICAgICAgICAgIG1vZGVsID0gbmV3IE1PZGVsKHZvY2FidWxhcnksIHdlaWdodHMpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFZvY2FidWxhcnkpLFxuICAgICAgICAgIHdlaWdodHMgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgV2VpZ2h0cyksXG4gICAgICAgICAgbW9kZWwgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1vZGVsLCBwcm9wZXJ0aWVzLCB2b2NhYnVsYXJ5LCB3ZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbW9kZWwuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lYW5PZk1hdHJpY2VzKG1hdHJpY2VzKSB7XG5cbn1cblxuZnVuY3Rpb24gb25lSG90VmVjdG9yc0Zyb21DaHVua0FudlZvY2FidWxhcnkoY2h1bmssIHZvY2FidWxhcnkpIHtcbiAgY29uc3QgdG9rZW5zID0gY2h1bmssIC8vL1xuICAgICAgICBvbmVIb3RWZWN0b3JzID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCBvbmVIb3RWZWN0b3IgPSBPbmVIb3RWZWN0b3IuZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSh0b2tlbiwgdm9jYWJ1bGFyeSk7XG5cbiAgICAgICAgICByZXR1cm4gb25lSG90VmVjdG9yO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gb25lSG90VmVjdG9ycztcbn1cbiJdLCJuYW1lcyI6WyJNb2RlbCIsIndyaXRlRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJ2b2NhYnVsYXJ5Iiwid2VpZ2h0cyIsImdldFZvY2FidWxhcnkiLCJnZXRXZWlnaHRzIiwiaW5pdGlhbGlzZSIsIkVycm9yIiwic2l6ZSIsImdldFNpemUiLCJzdGVwIiwiY29ycHVzIiwiYmF0Y2giLCJERUZBVUxUX0JBVENIIiwibGVhcm5pbmdSYXRlIiwiREVGQVVMVF9MRUFSTklOR19SQVRFIiwid2VpZ2h0c1Jlc3VsdHMiLCJtYXBDaHVuayIsImNodW5rIiwib25lSG90VmVjdG9ycyIsIm9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5IiwiaW5wdXRPbmVIb3RWZWN0b3IiLCJvdXRwdXRPbmVIb3RWZWN0b3IiLCJ3ZWlnaHRzUmVzdWx0IiwicHJlcGFyZSIsImRlbHRhTWF0cml4IiwiZ2V0RGVsdGFNYXRyaXgiLCJzY2FsZWREZWx0YU1hdHJpeCIsIm11bHRpcGx5QnlTY2FsYXIiLCJ1cGRhdGUiLCJkZWx0YU1hdHJpY2VzIiwibWFwIiwibWVhbkRlbHRhTWF0cml4IiwibWVhbk9mTWF0cmljZXMiLCJzY2FsZWRNZWFuRGVsdGFNYXRyaXgiLCJtb2RlbFJlc3VsdCIsIk1vZGVsUmVzdWx0IiwiZnJvbUNvcnB1c0FuZFdlaWdodHNSZXN1bHRzIiwidHJhaW4iLCJlcG9jaHMiLCJERUZBVUxUX0VQT0NIUyIsInJlc3VsdHMiLCJjb3VudCIsInJlc3VsdCIsInB1c2giLCJldmFsdWF0ZSIsImluZmVyIiwidG9rZW4iLCJsZW5ndGgiLCJzYW1wbGluZyIsIkRFRkFVTFRfU0FNUExJTkciLCJ0b2tlbnMiLCJmb3J3YXJkIiwib25lSG90VmVjdG9yIiwiT25lSG90VmVjdG9yIiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJpbmRleCIsInByZWRpY3RJbmRleCIsInRva2VuQXQiLCJzZXJpYWxpc2UiLCJmaWxlUGF0aCIsIkRFRkFVTFRfTU9ERUxfRklMRV9QQVRIIiwianNvbiIsInRvSlNPTiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCIsInZvY2FidWxhcnlKU09OIiwid2VpZ2h0c0pTT04iLCJmcm9tSlNPTiIsInZvY2FidWxhcnlGcm9tSlNPTiIsIndlaWdodHNGcm9tSlNPTiIsIm1vZGVsIiwiTU9kZWwiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsIlZvY2FidWxhcnkiLCJXZWlnaHRzIiwibWF0cmljZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZ0JxQkE7OztvQkFkZTs4REFFaEI7OERBQ0E7aUVBQ0c7NERBQ0M7NkRBQ0M7d0JBRWdCO29CQUNXO3dCQUM0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhILElBQU0sQUFBRUMsWUFBY0MseUJBQW1CLENBQWpDRDtBQUVPLElBQUEsQUFBTUQsc0JBQU47Y0FBTUE7YUFBQUEsTUFDUEcsVUFBVSxFQUFFQyxPQUFPO2dDQURaSjs7Z0JBRWpCLGtCQUZpQkE7UUFJakIsTUFBS0csVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxPQUFPLEdBQUdBOzs7a0JBTEVKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksSUFB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