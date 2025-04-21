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
            key: "step",
            value: function step(corpus) {
                var _this = this;
                var batch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_BATCH, learningRate = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_LEARNING_RATE;
                var deltaMatrices = [];
                corpus.forEachChunk(function(chunk) {
                    chunk.forEachPair(function(pair) {
                        var oneHotVectors = pair.asOneHotVectors(_this.vocabulary), _oneHotVectors = _sliced_to_array(oneHotVectors, 2), inputOneHotVector = _oneHotVectors[0], outputOneHotVector = _oneHotVectors[1], deltaMatrix = _this.weights.prepare(inputOneHotVector, outputOneHotVector, learningRate);
                        if (batch) {
                            deltaMatrices.push(deltaMatrix);
                            return;
                        }
                        var scaledDeltaMatrix = deltaMatrix.multiplyByScalar(learningRate);
                        _this.weights.update(scaledDeltaMatrix);
                    });
                });
                if (batch) {
                    var meanDeltaMatrix = meanOfMatrices(deltaMatrices), scaledMeanDeltaMatrix = meanDeltaMatrix.multiplyByScalar(learningRate);
                    this.weights.update(scaledMeanDeltaMatrix);
                }
            }
        },
        {
            key: "train",
            value: function train(corpus) {
                var batch = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_BATCH, epochs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_EPOCHS, learningRate = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _defaults.DEFAULT_LEARNING_RATE;
                var results = [];
                for(var count = 0; count < epochs; count++){
                    this.step(corpus, batch, learningRate);
                }
                return results;
            }
        },
        {
            key: "infer",
            value: function infer(token, length) {
                var cutoff = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_CUTOFF, threshold = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _defaults.DEFAULT_THRESHOLD, temperature = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : _defaults.DEFAULT_TEMPERATURE;
                var tokens = [];
                for(var count = 0; count < length; count++){
                    token = this.forward(token, cutoff, threshold, temperature);
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
                var cutoff = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_CUTOFF, threshold = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_THRESHOLD, temperature = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _defaults.DEFAULT_TEMPERATURE;
                var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, this.vocabulary), probabilitiesVector = this.weights.forward(oneHotVector), index = probabilitiesVector.predictIndex(cutoff, threshold, temperature);
                token = index !== null ? this.vocabulary.tokenAt(index) : null;
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
            key: "initialise",
            value: function initialise() {
                this.vocabulary.initialise();
                var size = this.vocabulary.getSize();
                this.weights.initialise(size);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcywgZmlsZVN5c3RlbVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IE1hdHJpeCBmcm9tIFwiLi4vbWF0cml4XCI7XG5pbXBvcnQgV2VpZ2h0cyBmcm9tIFwiLi93ZWlnaHRzXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4vdm9jYWJ1bGFyeVwiO1xuaW1wb3J0IE9uZUhvdFZlY3RvciBmcm9tIFwiLi4vdmVjdG9yL29uZUhvdFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHdlaWdodHNGcm9tSlNPTiwgdm9jYWJ1bGFyeUZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBERUZBVUxUX0JBVENILFxuICAgICAgICAgREVGQVVMVF9FUE9DSFMsXG4gICAgICAgICBERUZBVUxUX0NVVE9GRixcbiAgICAgICAgIERFRkFVTFRfVEhSRVNIT0xELFxuICAgICAgICAgREVGQVVMVF9URU1QRVJBVFVSRSxcbiAgICAgICAgIERFRkFVTFRfTEVBUk5JTkdfUkFURSxcbiAgICAgICAgIERFRkFVTFRfTU9ERUxfRklMRV9QQVRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyB3cml0ZUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMsIGNoaWxkRWxlbWVudHMsIHZvY2FidWxhcnksIHdlaWdodHMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZEVsZW1lbnRzKTtcblxuICAgIHRoaXMudm9jYWJ1bGFyeSA9IHZvY2FidWxhcnk7XG4gICAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cztcbiAgfVxuXG4gIGdldFZvY2FidWxhcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudm9jYWJ1bGFyeTtcbiAgfVxuXG4gIGdldFdlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0cztcbiAgfVxuXG4gIHN0ZXAoY29ycHVzLCBiYXRjaCA9IERFRkFVTFRfQkFUQ0gsIGxlYXJuaW5nUmF0ZSA9IERFRkFVTFRfTEVBUk5JTkdfUkFURSkge1xuICAgIGNvbnN0IGRlbHRhTWF0cmljZXMgPSBbXTtcblxuICAgIGNvcnB1cy5mb3JFYWNoQ2h1bmsoKGNodW5rKSA9PiB7XG4gICAgICBjaHVuay5mb3JFYWNoUGFpcigocGFpcikgPT4ge1xuICAgICAgICBjb25zdCBvbmVIb3RWZWN0b3JzID0gcGFpci5hc09uZUhvdFZlY3RvcnModGhpcy52b2NhYnVsYXJ5KSxcbiAgICAgICAgICAgICAgWyBpbnB1dE9uZUhvdFZlY3Rvciwgb3V0cHV0T25lSG90VmVjdG9yIF0gPSBvbmVIb3RWZWN0b3JzLFxuICAgICAgICAgICAgICBkZWx0YU1hdHJpeCA9IHRoaXMud2VpZ2h0cy5wcmVwYXJlKGlucHV0T25lSG90VmVjdG9yLCBvdXRwdXRPbmVIb3RWZWN0b3IsIGxlYXJuaW5nUmF0ZSk7XG5cbiAgICAgICAgaWYgKGJhdGNoKSB7XG4gICAgICAgICAgZGVsdGFNYXRyaWNlcy5wdXNoKGRlbHRhTWF0cml4KTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjYWxlZERlbHRhTWF0cml4ID0gZGVsdGFNYXRyaXgubXVsdGlwbHlCeVNjYWxhcihsZWFybmluZ1JhdGUpO1xuXG4gICAgICAgIHRoaXMud2VpZ2h0cy51cGRhdGUoc2NhbGVkRGVsdGFNYXRyaXgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAoYmF0Y2gpIHtcbiAgICAgIGNvbnN0IG1lYW5EZWx0YU1hdHJpeCA9IG1lYW5PZk1hdHJpY2VzKGRlbHRhTWF0cmljZXMpLFxuICAgICAgICAgICAgc2NhbGVkTWVhbkRlbHRhTWF0cml4ID0gbWVhbkRlbHRhTWF0cml4Lm11bHRpcGx5QnlTY2FsYXIobGVhcm5pbmdSYXRlKTtcblxuICAgICAgdGhpcy53ZWlnaHRzLnVwZGF0ZShzY2FsZWRNZWFuRGVsdGFNYXRyaXgpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWluKGNvcnB1cywgYmF0Y2ggPSBERUZBVUxUX0JBVENILCBlcG9jaHMgPSBERUZBVUxUX0VQT0NIUywgbGVhcm5pbmdSYXRlID0gREVGQVVMVF9MRUFSTklOR19SQVRFKSB7XG4gICAgY29uc3QgcmVzdWx0cyA9IFtdXG5cbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgZXBvY2hzOyBjb3VudCsrKSB7XG4gICAgICB0aGlzLnN0ZXAoY29ycHVzLCBiYXRjaCwgbGVhcm5pbmdSYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIGluZmVyKHRva2VuLCBsZW5ndGgsIGN1dG9mZiA9IERFRkFVTFRfQ1VUT0ZGLCB0aHJlc2hvbGQgPSBERUZBVUxUX1RIUkVTSE9MRCwgdGVtcGVyYXR1cmUgPSBERUZBVUxUX1RFTVBFUkFUVVJFKSB7XG4gICAgY29uc3QgdG9rZW5zID0gW107XG5cbiAgICBmb3IgKGxldCBjb3VudCA9IDA7IGNvdW50IDwgbGVuZ3RoOyBjb3VudCsrKSB7XG4gICAgICB0b2tlbiA9IHRoaXMuZm9yd2FyZCh0b2tlbiwgY3V0b2ZmLCB0aHJlc2hvbGQsIHRlbXBlcmF0dXJlKTtcblxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGZvcndhcmQodG9rZW4sIGN1dG9mZiA9IERFRkFVTFRfQ1VUT0ZGLCB0aHJlc2hvbGQgPSBERUZBVUxUX1RIUkVTSE9MRCwgdGVtcGVyYXR1cmUgPSBERUZBVUxUX1RFTVBFUkFUVVJFKSB7XG4gICAgY29uc3Qgb25lSG90VmVjdG9yID0gT25lSG90VmVjdG9yLmZyb21Ub2tlbkFuZFZvY2FidWxhcnkodG9rZW4sIHRoaXMudm9jYWJ1bGFyeSksXG4gICAgICAgICAgcHJvYmFiaWxpdGllc1ZlY3RvciA9IHRoaXMud2VpZ2h0cy5mb3J3YXJkKG9uZUhvdFZlY3RvciksXG4gICAgICAgICAgaW5kZXggPSBwcm9iYWJpbGl0aWVzVmVjdG9yLnByZWRpY3RJbmRleChjdXRvZmYsIHRocmVzaG9sZCwgdGVtcGVyYXR1cmUpO1xuXG4gICAgdG9rZW4gPSAoaW5kZXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgdGhpcy52b2NhYnVsYXJ5LnRva2VuQXQoaW5kZXgpIDpcbiAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc2VyaWFsaXNlKGZpbGVQYXRoID0gREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy50b0pTT04oKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcbiAgICBcbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHZvY2FidWxhcnlKU09OID0gdGhpcy52b2NhYnVsYXJ5LnRvSlNPTigpLFxuICAgICAgICAgIHdlaWdodHNKU09OID0gdGhpcy53ZWlnaHRzLnRvSlNPTigpLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5SlNPTiwgIC8vL1xuICAgICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZvY2FidWxhcnksXG4gICAgICAgICAgICB3ZWlnaHRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgbW9kZWwgPSBuZXcgTU9kZWwodm9jYWJ1bGFyeSwgd2VpZ2h0cyk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgVm9jYWJ1bGFyeSksXG4gICAgICAgICAgd2VpZ2h0cyA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBXZWlnaHRzKSxcbiAgICAgICAgICBtb2RlbCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTW9kZWwsIHByb3BlcnRpZXMsIHZvY2FidWxhcnksIHdlaWdodHMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBtb2RlbC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVhbk9mTWF0cmljZXMobWF0cmljZXMpIHtcbiAgY29uc3QgZmlyc3RNYXRyaXggPSBmaXJzdChtYXRyaWNlcyksXG4gICAgICAgIHJvd3MgPSBmaXJzdE1hdHJpeC5nZXRSb3dzKCksXG4gICAgICAgIGNvbHVtbnMgPSBmaXJzdE1hdHJpeC5nZXRDb2x1bW5zKCk7XG5cbiAgbGV0IHRvdGFsTWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQW5kQ29sdW1ucyhyb3dzLCBjb2x1bW5zKTtcblxuICBtYXRyaWNlcy5mb3JFYWNoKChtYXRyaXgpID0+IHtcbiAgICB0b3RhbE1hdHJpeCA9IHRvdGFsTWF0cml4LmFkZE1hdHJpeChtYXRyaXgpO1xuICB9KTtcblxuICBjb25zdCBsZW5ndGggPSBtYXRyaWNlcy5sZW5ndGgsXG4gICAgICAgIG1lYW5NYXRyaXggPSB0b3RhbE1hdHJpeC5kaXZpZGVCeVNjYWxhcihsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuTWF0cml4O1xufVxuIl0sIm5hbWVzIjpbIk1vZGVsIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIndyaXRlRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInZvY2FidWxhcnkiLCJ3ZWlnaHRzIiwiZ2V0Vm9jYWJ1bGFyeSIsImdldFdlaWdodHMiLCJzdGVwIiwiY29ycHVzIiwiYmF0Y2giLCJERUZBVUxUX0JBVENIIiwibGVhcm5pbmdSYXRlIiwiREVGQVVMVF9MRUFSTklOR19SQVRFIiwiZGVsdGFNYXRyaWNlcyIsImZvckVhY2hDaHVuayIsImNodW5rIiwiZm9yRWFjaFBhaXIiLCJwYWlyIiwib25lSG90VmVjdG9ycyIsImFzT25lSG90VmVjdG9ycyIsImlucHV0T25lSG90VmVjdG9yIiwib3V0cHV0T25lSG90VmVjdG9yIiwiZGVsdGFNYXRyaXgiLCJwcmVwYXJlIiwicHVzaCIsInNjYWxlZERlbHRhTWF0cml4IiwibXVsdGlwbHlCeVNjYWxhciIsInVwZGF0ZSIsIm1lYW5EZWx0YU1hdHJpeCIsIm1lYW5PZk1hdHJpY2VzIiwic2NhbGVkTWVhbkRlbHRhTWF0cml4IiwidHJhaW4iLCJlcG9jaHMiLCJERUZBVUxUX0VQT0NIUyIsInJlc3VsdHMiLCJjb3VudCIsImluZmVyIiwidG9rZW4iLCJsZW5ndGgiLCJjdXRvZmYiLCJERUZBVUxUX0NVVE9GRiIsInRocmVzaG9sZCIsIkRFRkFVTFRfVEhSRVNIT0xEIiwidGVtcGVyYXR1cmUiLCJERUZBVUxUX1RFTVBFUkFUVVJFIiwidG9rZW5zIiwiZm9yd2FyZCIsIm9uZUhvdFZlY3RvciIsIk9uZUhvdFZlY3RvciIsImZyb21Ub2tlbkFuZFZvY2FidWxhcnkiLCJwcm9iYWJpbGl0aWVzVmVjdG9yIiwiaW5kZXgiLCJwcmVkaWN0SW5kZXgiLCJ0b2tlbkF0Iiwic2VyaWFsaXNlIiwiZmlsZVBhdGgiLCJERUZBVUxUX01PREVMX0ZJTEVfUEFUSCIsImpzb24iLCJ0b0pTT04iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJpbml0aWFsaXNlIiwic2l6ZSIsImdldFNpemUiLCJ2b2NhYnVsYXJ5SlNPTiIsIndlaWdodHNKU09OIiwiZnJvbUpTT04iLCJ2b2NhYnVsYXJ5RnJvbUpTT04iLCJ3ZWlnaHRzRnJvbUpTT04iLCJtb2RlbCIsIk1PZGVsIiwiZnJvbVByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwiVm9jYWJ1bGFyeSIsIldlaWdodHMiLCJtYXRyaWNlcyIsImZpcnN0TWF0cml4Iiwicm93cyIsImdldFJvd3MiLCJjb2x1bW5zIiwiZ2V0Q29sdW1ucyIsInRvdGFsTWF0cml4IiwiTWF0cml4IiwiZnJvbVJvd3NBbmRDb2x1bW5zIiwiZm9yRWFjaCIsIm1hdHJpeCIsImFkZE1hdHJpeCIsIm1lYW5NYXRyaXgiLCJkaXZpZGVCeVNjYWxhciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF1QnFCQTs7O3lCQXJCK0I7NkRBRWpDOzhEQUNDOzhEQUNBO2lFQUNHOzZEQUNFO3dCQUVnQjtvQkFDVzt3QkFPWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXhDLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJELE9BQ0YsQUFBRUUsWUFBY0MsOEJBQW1CLENBQWpDRDtBQUVPLElBQUEsQUFBTUgsc0JBQU47Y0FBTUE7YUFBQUEsTUFDUEssVUFBVSxFQUFFQyxhQUFhLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQ0FEdkNSOztnQkFFakIsa0JBRmlCQTtZQUVYSztZQUFZQzs7UUFFbEIsTUFBS0MsVUFBVSxHQUFHQTtRQUNsQixNQUFLQyxPQUFPLEdBQUdBOzs7a0JBTEVSOztZQVFuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixVQUFVO1lBQ3hCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixPQUFPO1lBQ3JCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLEtBQUtDLE1BQU07O29CQUFFQyxRQUFBQSxpRUFBUUMsdUJBQWEsRUFBRUMsZUFBQUEsaUVBQWVDLCtCQUFxQjtnQkFDdEUsSUFBTUMsZ0JBQWdCLEVBQUU7Z0JBRXhCTCxPQUFPTSxZQUFZLENBQUMsU0FBQ0M7b0JBQ25CQSxNQUFNQyxXQUFXLENBQUMsU0FBQ0M7d0JBQ2pCLElBQU1DLGdCQUFnQkQsS0FBS0UsZUFBZSxDQUFDLE1BQUtoQixVQUFVLEdBQ1JlLGtDQUFBQSxtQkFBMUNFLG9CQUEwQ0YsbUJBQXZCRyxxQkFBdUJILG1CQUM1Q0ksY0FBYyxNQUFLbEIsT0FBTyxDQUFDbUIsT0FBTyxDQUFDSCxtQkFBbUJDLG9CQUFvQlY7d0JBRWhGLElBQUlGLE9BQU87NEJBQ1RJLGNBQWNXLElBQUksQ0FBQ0Y7NEJBRW5CO3dCQUNGO3dCQUVBLElBQU1HLG9CQUFvQkgsWUFBWUksZ0JBQWdCLENBQUNmO3dCQUV2RCxNQUFLUCxPQUFPLENBQUN1QixNQUFNLENBQUNGO29CQUN0QjtnQkFDRjtnQkFFQSxJQUFJaEIsT0FBTztvQkFDVCxJQUFNbUIsa0JBQWtCQyxlQUFlaEIsZ0JBQ2pDaUIsd0JBQXdCRixnQkFBZ0JGLGdCQUFnQixDQUFDZjtvQkFFL0QsSUFBSSxDQUFDUCxPQUFPLENBQUN1QixNQUFNLENBQUNHO2dCQUN0QjtZQUNGOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU12QixNQUFNO29CQUFFQyxRQUFBQSxpRUFBUUMsdUJBQWEsRUFBRXNCLFNBQUFBLGlFQUFTQyx3QkFBYyxFQUFFdEIsZUFBQUEsaUVBQWVDLCtCQUFxQjtnQkFDaEcsSUFBTXNCLFVBQVUsRUFBRTtnQkFFbEIsSUFBSyxJQUFJQyxRQUFRLEdBQUdBLFFBQVFILFFBQVFHLFFBQVM7b0JBQzNDLElBQUksQ0FBQzVCLElBQUksQ0FBQ0MsUUFBUUMsT0FBT0U7Z0JBQzNCO2dCQUVBLE9BQU91QjtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLEtBQUssRUFBRUMsTUFBTTtvQkFBRUMsU0FBQUEsaUVBQVNDLHdCQUFjLEVBQUVDLFlBQUFBLGlFQUFZQywyQkFBaUIsRUFBRUMsY0FBQUEsaUVBQWNDLDZCQUFtQjtnQkFDNUcsSUFBTUMsU0FBUyxFQUFFO2dCQUVqQixJQUFLLElBQUlWLFFBQVEsR0FBR0EsUUFBUUcsUUFBUUgsUUFBUztvQkFDM0NFLFFBQVEsSUFBSSxDQUFDUyxPQUFPLENBQUNULE9BQU9FLFFBQVFFLFdBQVdFO29CQUUvQyxJQUFJTixVQUFVLE1BQU07d0JBQ2xCO29CQUNGO29CQUVBUSxPQUFPckIsSUFBSSxDQUFDYTtnQkFDZDtnQkFFQSxPQUFPUTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFULEtBQUs7b0JBQUVFLFNBQUFBLGlFQUFTQyx3QkFBYyxFQUFFQyxZQUFBQSxpRUFBWUMsMkJBQWlCLEVBQUVDLGNBQUFBLGlFQUFjQyw2QkFBbUI7Z0JBQ3RHLElBQU1HLGVBQWVDLGVBQVksQ0FBQ0Msc0JBQXNCLENBQUNaLE9BQU8sSUFBSSxDQUFDbEMsVUFBVSxHQUN6RStDLHNCQUFzQixJQUFJLENBQUM5QyxPQUFPLENBQUMwQyxPQUFPLENBQUNDLGVBQzNDSSxRQUFRRCxvQkFBb0JFLFlBQVksQ0FBQ2IsUUFBUUUsV0FBV0U7Z0JBRWxFTixRQUFRLEFBQUNjLFVBQVUsT0FDVCxJQUFJLENBQUNoRCxVQUFVLENBQUNrRCxPQUFPLENBQUNGLFNBQ3RCO2dCQUVaLE9BQU9kO1lBQ1Q7OztZQUVBaUIsS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVQyxXQUFBQSxpRUFBV0MsaUNBQXVCO2dCQUMxQyxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsTUFBTSxJQUNsQkMsYUFBYUMsS0FBS0MsU0FBUyxDQUFDSixPQUM1QkssVUFBVUgsWUFBWSxHQUFHO2dCQUUvQjVELFVBQVV3RCxVQUFVTztZQUN0Qjs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLENBQUM1RCxVQUFVLENBQUM0RCxVQUFVO2dCQUUxQixJQUFNQyxPQUFPLElBQUksQ0FBQzdELFVBQVUsQ0FBQzhELE9BQU87Z0JBRXBDLElBQUksQ0FBQzdELE9BQU8sQ0FBQzJELFVBQVUsQ0FBQ0M7WUFDMUI7OztZQUVBTixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVEsaUJBQWlCLElBQUksQ0FBQy9ELFVBQVUsQ0FBQ3VELE1BQU0sSUFDdkNTLGNBQWMsSUFBSSxDQUFDL0QsT0FBTyxDQUFDc0QsTUFBTSxJQUNqQ3ZELGFBQWErRCxnQkFDYjlELFVBQVUrRCxhQUNWVixPQUFPO29CQUNMdEQsWUFBQUE7b0JBQ0FDLFNBQUFBO2dCQUNGO2dCQUVOLE9BQU9xRDtZQUNUOzs7O1lBRU9XLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNYLElBQUk7Z0JBQ2xCLElBQU10RCxhQUFha0UsSUFBQUEsd0JBQWtCLEVBQUNaLE9BQ2hDckQsVUFBVWtFLElBQUFBLHFCQUFlLEVBQUNiLE9BQzFCYyxRQUFRLElBQUlDLE1BQU1yRSxZQUFZQztnQkFFcEMsT0FBT21FO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxlQUFleEUsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR3lFLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFJdkNDO2dCQUhkLElBQU0sQUFBRXpFLGdCQUFrQkQsV0FBbEJDLGVBQ0ZDLGFBQWF5RSxJQUFBQSxrQ0FBd0IsRUFBQzFFLGVBQWUyRSxtQkFBVSxHQUMvRHpFLFVBQVV3RSxJQUFBQSxrQ0FBd0IsRUFBQzFFLGVBQWU0RSxnQkFBTyxHQUN6RFAsUUFBUUksQ0FBQUEsV0FBQUEsZ0JBQU8sRUFBQ0YsY0FBYyxPQUF0QkUsVUFBQUE7b0JBNUhHL0U7b0JBNEgyQks7b0JBQVlFO29CQUFZQztpQkFBK0IsQ0FBckZ1RSxPQUErRCxxQkFBR0Q7Z0JBRWhGSCxNQUFNUixVQUFVO2dCQUVoQixPQUFPUTtZQUNUOzs7V0FqSW1CM0U7cUJBQWMrRSxnQkFBTztBQW9JMUMsU0FBUzlDLGVBQWVrRCxRQUFRO0lBQzlCLElBQU1DLGNBQWNuRixNQUFNa0YsV0FDcEJFLE9BQU9ELFlBQVlFLE9BQU8sSUFDMUJDLFVBQVVILFlBQVlJLFVBQVU7SUFFdEMsSUFBSUMsY0FBY0MsZUFBTSxDQUFDQyxrQkFBa0IsQ0FBQ04sTUFBTUU7SUFFbERKLFNBQVNTLE9BQU8sQ0FBQyxTQUFDQztRQUNoQkosY0FBY0EsWUFBWUssU0FBUyxDQUFDRDtJQUN0QztJQUVBLElBQU1uRCxTQUFTeUMsU0FBU3pDLE1BQU0sRUFDeEJxRCxhQUFhTixZQUFZTyxjQUFjLENBQUN0RDtJQUU5QyxPQUFPcUQ7QUFDVCJ9