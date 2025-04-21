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
var _matrix = /*#__PURE__*/ _interop_require_default(require("../matrix"));
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
var first = _necessary.arrayUtilities.first, writeFile = _necessary.fileSystemUtilities.writeFile;
var Model = /*#__PURE__*/ function(Element) {
    _inherits(Model, Element);
    function Model(properties, childElements, vocabulary, weights) {
        _class_call_check(this, Model);
        var _this;
        _this = _call_super(this, Model, [
            properties,
            childElements
        ]);
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
                var weightsResults = [];
                corpus.forEachChunk(function(chunk) {
                    chunk.forEachPair(function(pair) {
                        var oneHotVectors = pair.asOneHotVectors(_this.vocabulary), _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], weightsResult = _this.weights.prepare(inputOneHotVector, outputOneHotVector, learningRate);
                        if (!batch) {
                            var deltaMatrix = weightsResult.getDeltaMatrix(), scaledDeltaMatrix = deltaMatrix.multiplyByScalar(learningRate);
                            _this.weights.update(scaledDeltaMatrix);
                        }
                        weightsResults.push(weightsResult);
                    });
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
                var weightsResults = [];
                corpus.forEachChunk(function(chunk) {
                    chunk.forEachPair(function(pair) {
                        var oneHotVectors = pair.asOneHotVectors(_this.vocabulary), _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], weightsResult = _this.weights.evaluate(inputOneHotVector, outputOneHotVector);
                        weightsResults.push(weightsResult);
                    });
                });
                var modelResult = _model.default.fromCorpusAndWeightsResults(corpus, weightsResults);
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
function meanOfMatrices(matrices) {
    var firstMatrix = first(matrices), rows = firstMatrix.getRows(), columns = firstMatrix.getColumns();
    var totalMatrix = _matrix.default.fromRowsAndColumns(rows, columns);
    matrices.forEach(function(matrix) {
        totalMatrix = totalMatrix.addMatrix(matrix);
    });
    var length = matrices.length, meanMatrix = totalMatrix.divideByScalar(length);
    return meanMatrix;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgV2VpZ2h0cyBmcm9tIFwiLi93ZWlnaHRzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4vdm9jYWJ1bGFyeVwiO1xuaW1wb3J0IE1vZGVsUmVzdWx0IGZyb20gXCIuLi9yZXN1bHQvbW9kZWxcIjtcbmltcG9ydCBPbmVIb3RWZWN0b3IgZnJvbSBcIi4uL3ZlY3Rvci9vbmVIb3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB3ZWlnaHRzRnJvbUpTT04sIHZvY2FidWxhcnlGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgREVGQVVMVF9CQVRDSCwgREVGQVVMVF9FUE9DSFMsIERFRkFVTFRfU0FNUExJTkcsIERFRkFVTFRfTEVBUk5JTkdfUkFURSwgREVGQVVMVF9NT0RFTF9GSUxFX1BBVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHdyaXRlRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcGVydGllcywgY2hpbGRFbGVtZW50cywgdm9jYWJ1bGFyeSwgd2VpZ2h0cykge1xuICAgIHN1cGVyKHByb3BlcnRpZXMsIGNoaWxkRWxlbWVudHMpO1xuXG4gICAgdGhpcy52b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeTtcbiAgICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgZ2V0Vm9jYWJ1bGFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy52b2NhYnVsYXJ5O1xuICB9XG5cbiAgZ2V0V2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHRzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy52b2NhYnVsYXJ5ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbW9kZWwgaGFzIG5vIHZvY2FidWxhcnkuXCIpXG4gICAgfVxuXG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcblxuICAgIGlmICh0aGlzLndlaWdodHMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtb2RlbCBoYXMgbm8gd2VpZ2h0cy5cIilcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgc3RlcChjb3JwdXMsIGJhdGNoID0gREVGQVVMVF9CQVRDSCwgbGVhcm5pbmdSYXRlID0gREVGQVVMVF9MRUFSTklOR19SQVRFKSB7XG4gICAgY29uc3Qgd2VpZ2h0c1Jlc3VsdHMgPSBbXTtcblxuICAgIGNvcnB1cy5mb3JFYWNoQ2h1bmsoKGNodW5rKSA9PiB7XG4gICAgICBjaHVuay5mb3JFYWNoUGFpcigocGFpcikgPT4ge1xuICAgICAgICBjb25zdCBvbmVIb3RWZWN0b3JzID0gcGFpci5hc09uZUhvdFZlY3RvcnModGhpcy52b2NhYnVsYXJ5KSxcbiAgICAgICAgICAgICAgWyBpbnB1dE9uZUhvdFZlY3Rvciwgb3V0cHV0T25lSG90VmVjdG9yIF0gPSBvbmVIb3RWZWN0b3JzLFxuICAgICAgICAgICAgICB3ZWlnaHRzUmVzdWx0ID0gdGhpcy53ZWlnaHRzLnByZXBhcmUoaW5wdXRPbmVIb3RWZWN0b3IsIG91dHB1dE9uZUhvdFZlY3RvciwgbGVhcm5pbmdSYXRlKTtcblxuICAgICAgICBpZiAoIWJhdGNoKSB7XG4gICAgICAgICAgY29uc3QgZGVsdGFNYXRyaXggPSB3ZWlnaHRzUmVzdWx0LmdldERlbHRhTWF0cml4KCksXG4gICAgICAgICAgICAgICAgc2NhbGVkRGVsdGFNYXRyaXggPSBkZWx0YU1hdHJpeC5tdWx0aXBseUJ5U2NhbGFyKGxlYXJuaW5nUmF0ZSk7XG5cbiAgICAgICAgICB0aGlzLndlaWdodHMudXBkYXRlKHNjYWxlZERlbHRhTWF0cml4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdlaWdodHNSZXN1bHRzLnB1c2god2VpZ2h0c1Jlc3VsdCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGlmIChiYXRjaCkge1xuICAgICAgY29uc3QgZGVsdGFNYXRyaWNlcyA9IHdlaWdodHNSZXN1bHRzLm1hcCgod2VpZ2h0c1Jlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBkZWx0YU1hdHJpeCA9IHdlaWdodHNSZXN1bHQuZ2V0RGVsdGFNYXRyaXgoKTtcblxuICAgICAgICAgICAgICByZXR1cm4gZGVsdGFNYXRyaXg7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG1lYW5EZWx0YU1hdHJpeCA9IG1lYW5PZk1hdHJpY2VzKGRlbHRhTWF0cmljZXMpLFxuICAgICAgICAgICAgc2NhbGVkTWVhbkRlbHRhTWF0cml4ID0gbWVhbkRlbHRhTWF0cml4Lm11bHRpcGx5QnlTY2FsYXIobGVhcm5pbmdSYXRlKTtcblxuICAgICAgdGhpcy53ZWlnaHRzLnVwZGF0ZShzY2FsZWRNZWFuRGVsdGFNYXRyaXgpO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGVsUmVzdWx0ID0gTW9kZWxSZXN1bHQuZnJvbUNvcnB1c0FuZFdlaWdodHNSZXN1bHRzKGNvcnB1cywgd2VpZ2h0c1Jlc3VsdHMpO1xuXG4gICAgcmV0dXJuIG1vZGVsUmVzdWx0O1xuICB9XG5cbiAgdHJhaW4oY29ycHVzLCBiYXRjaCA9IERFRkFVTFRfQkFUQ0gsIGVwb2NocyA9IERFRkFVTFRfRVBPQ0hTLCBsZWFybmluZ1JhdGUgPSBERUZBVUxUX0xFQVJOSU5HX1JBVEUpIHtcbiAgICBjb25zdCByZXN1bHRzID0gW11cblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBlcG9jaHM7IGNvdW50KyspIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc3RlcChjb3JwdXMsIGJhdGNoLCBsZWFybmluZ1JhdGUpO1xuXG4gICAgICByZXN1bHRzLnB1c2gocmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIGV2YWx1YXRlKGNvcnB1cykge1xuICAgIGNvbnN0IHdlaWdodHNSZXN1bHRzID0gW107XG5cbiAgICBjb3JwdXMuZm9yRWFjaENodW5rKChjaHVuaykgPT4ge1xuICAgICAgY2h1bmsuZm9yRWFjaFBhaXIoKHBhaXIpID0+IHtcbiAgICAgICAgY29uc3Qgb25lSG90VmVjdG9ycyA9IHBhaXIuYXNPbmVIb3RWZWN0b3JzKHRoaXMudm9jYWJ1bGFyeSksXG4gICAgICAgICAgICAgIFsgaW5wdXRPbmVIb3RWZWN0b3IsIG91dHB1dE9uZUhvdFZlY3RvciBdID0gb25lSG90VmVjdG9ycyxcbiAgICAgICAgICAgICAgd2VpZ2h0c1Jlc3VsdCA9IHRoaXMud2VpZ2h0cy5ldmFsdWF0ZShpbnB1dE9uZUhvdFZlY3Rvciwgb3V0cHV0T25lSG90VmVjdG9yKTtcblxuICAgICAgICB3ZWlnaHRzUmVzdWx0cy5wdXNoKHdlaWdodHNSZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb2RlbFJlc3VsdCA9IE1vZGVsUmVzdWx0LmZyb21Db3JwdXNBbmRXZWlnaHRzUmVzdWx0cyhjb3JwdXMsIHdlaWdodHNSZXN1bHRzKTtcblxuICAgIHJldHVybiBtb2RlbFJlc3VsdDtcbiAgfVxuXG4gIGluZmVyKHRva2VuLCBsZW5ndGgsIHNhbXBsaW5nID0gREVGQVVMVF9TQU1QTElORykge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGxlbmd0aDsgY291bnQrKykge1xuICAgICAgdG9rZW4gPSB0aGlzLmZvcndhcmQodG9rZW4sIHNhbXBsaW5nKTtcblxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBmb3J3YXJkKHRva2VuLCBzYW1wbGluZyA9IERFRkFVTFRfU0FNUExJTkcpIHtcbiAgICBjb25zdCBvbmVIb3RWZWN0b3IgPSBPbmVIb3RWZWN0b3IuZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSh0b2tlbiwgdGhpcy52b2NhYnVsYXJ5KSxcbiAgICAgICAgICBwcm9iYWJpbGl0aWVzVmVjdG9yID0gdGhpcy53ZWlnaHRzLmZvcndhcmQob25lSG90VmVjdG9yKSxcbiAgICAgICAgICBpbmRleCA9IHByb2JhYmlsaXRpZXNWZWN0b3IucHJlZGljdEluZGV4KHNhbXBsaW5nKTtcblxuICAgIHRva2VuID0gdGhpcy52b2NhYnVsYXJ5LnRva2VuQXQoaW5kZXgpO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc2VyaWFsaXNlKGZpbGVQYXRoID0gREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy50b0pTT04oKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5SlNPTiA9IHRoaXMudm9jYWJ1bGFyeS50b0pTT04oKSxcbiAgICAgICAgICB3ZWlnaHRzSlNPTiA9IHRoaXMud2VpZ2h0cy50b0pTT04oKSxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUpTT04sICAvLy9cbiAgICAgICAgICB3ZWlnaHRzID0gd2VpZ2h0c0pTT04sIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB2b2NhYnVsYXJ5LFxuICAgICAgICAgICAgd2VpZ2h0c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICB3ZWlnaHRzID0gd2VpZ2h0c0Zyb21KU09OKGpzb24pLFxuICAgICAgICAgIG1vZGVsID0gbmV3IE1PZGVsKHZvY2FidWxhcnksIHdlaWdodHMpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFZvY2FidWxhcnkpLFxuICAgICAgICAgIHdlaWdodHMgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgV2VpZ2h0cyksXG4gICAgICAgICAgbW9kZWwgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1vZGVsLCBwcm9wZXJ0aWVzLCB2b2NhYnVsYXJ5LCB3ZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbW9kZWwuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lYW5PZk1hdHJpY2VzKG1hdHJpY2VzKSB7XG4gIGNvbnN0IGZpcnN0TWF0cml4ID0gZmlyc3QobWF0cmljZXMpLFxuICAgICAgICByb3dzID0gZmlyc3RNYXRyaXguZ2V0Um93cygpLFxuICAgICAgICBjb2x1bW5zID0gZmlyc3RNYXRyaXguZ2V0Q29sdW1ucygpO1xuXG4gIGxldCB0b3RhbE1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0FuZENvbHVtbnMocm93cywgY29sdW1ucyk7XG5cbiAgbWF0cmljZXMuZm9yRWFjaCgobWF0cml4KSA9PiB7XG4gICAgdG90YWxNYXRyaXggPSB0b3RhbE1hdHJpeC5hZGRNYXRyaXgobWF0cml4KTtcbiAgfSk7XG5cbiAgY29uc3QgbGVuZ3RoID0gbWF0cmljZXMubGVuZ3RoLFxuICAgICAgICBtZWFuTWF0cml4ID0gdG90YWxNYXRyaXguZGl2aWRlQnlTY2FsYXIobGVuZ3RoKTtcblxuICByZXR1cm4gbWVhbk1hdHJpeDtcbn1cbiJdLCJuYW1lcyI6WyJNb2RlbCIsImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJ3cml0ZUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJ2b2NhYnVsYXJ5Iiwid2VpZ2h0cyIsImdldFZvY2FidWxhcnkiLCJnZXRXZWlnaHRzIiwiaW5pdGlhbGlzZSIsIkVycm9yIiwic2l6ZSIsImdldFNpemUiLCJzdGVwIiwiY29ycHVzIiwiYmF0Y2giLCJERUZBVUxUX0JBVENIIiwibGVhcm5pbmdSYXRlIiwiREVGQVVMVF9MRUFSTklOR19SQVRFIiwid2VpZ2h0c1Jlc3VsdHMiLCJmb3JFYWNoQ2h1bmsiLCJjaHVuayIsImZvckVhY2hQYWlyIiwicGFpciIsIm9uZUhvdFZlY3RvcnMiLCJhc09uZUhvdFZlY3RvcnMiLCJpbnB1dE9uZUhvdFZlY3RvciIsIm91dHB1dE9uZUhvdFZlY3RvciIsIndlaWdodHNSZXN1bHQiLCJwcmVwYXJlIiwiZGVsdGFNYXRyaXgiLCJnZXREZWx0YU1hdHJpeCIsInNjYWxlZERlbHRhTWF0cml4IiwibXVsdGlwbHlCeVNjYWxhciIsInVwZGF0ZSIsInB1c2giLCJkZWx0YU1hdHJpY2VzIiwibWFwIiwibWVhbkRlbHRhTWF0cml4IiwibWVhbk9mTWF0cmljZXMiLCJzY2FsZWRNZWFuRGVsdGFNYXRyaXgiLCJtb2RlbFJlc3VsdCIsIk1vZGVsUmVzdWx0IiwiZnJvbUNvcnB1c0FuZFdlaWdodHNSZXN1bHRzIiwidHJhaW4iLCJlcG9jaHMiLCJERUZBVUxUX0VQT0NIUyIsInJlc3VsdHMiLCJjb3VudCIsInJlc3VsdCIsImV2YWx1YXRlIiwiaW5mZXIiLCJ0b2tlbiIsImxlbmd0aCIsInNhbXBsaW5nIiwiREVGQVVMVF9TQU1QTElORyIsInRva2VucyIsImZvcndhcmQiLCJvbmVIb3RWZWN0b3IiLCJPbmVIb3RWZWN0b3IiLCJmcm9tVG9rZW5BbmRWb2NhYnVsYXJ5IiwicHJvYmFiaWxpdGllc1ZlY3RvciIsImluZGV4IiwicHJlZGljdEluZGV4IiwidG9rZW5BdCIsInNlcmlhbGlzZSIsImZpbGVQYXRoIiwiREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgiLCJqc29uIiwidG9KU09OIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50Iiwidm9jYWJ1bGFyeUpTT04iLCJ3ZWlnaHRzSlNPTiIsImZyb21KU09OIiwidm9jYWJ1bGFyeUZyb21KU09OIiwid2VpZ2h0c0Zyb21KU09OIiwibW9kZWwiLCJNT2RlbCIsImZyb21Qcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsIlZvY2FidWxhcnkiLCJXZWlnaHRzIiwibWF0cmljZXMiLCJmaXJzdE1hdHJpeCIsInJvd3MiLCJnZXRSb3dzIiwiY29sdW1ucyIsImdldENvbHVtbnMiLCJ0b3RhbE1hdHJpeCIsIk1hdHJpeCIsImZyb21Sb3dzQW5kQ29sdW1ucyIsImZvckVhY2giLCJtYXRyaXgiLCJhZGRNYXRyaXgiLCJtZWFuTWF0cml4IiwiZGl2aWRlQnlTY2FsYXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBa0JxQkE7Ozt5QkFoQitCOzZEQUVqQzs4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