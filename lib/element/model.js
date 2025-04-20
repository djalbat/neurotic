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
            key: "train",
            value: function train(corpus) {
                var _this = this;
                var learningRate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_LEARNING_RATE;
                var totalLoss = 0, totalAccuracy = 0;
                corpus.forEachChunk(function(chunk) {
                    var oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, _this.vocabulary), result = _this.weights.train(oneHotVectors, learningRate), accuracy = result.getAccuracy(), loss = result.getLoss();
                    totalLoss += loss;
                    totalAccuracy += accuracy;
                });
                var Result = _registry.default.Result, corpusSize = corpus.getSize(), averageLoss = totalLoss / corpusSize, averageAccuracy = totalAccuracy / corpusSize, accuracy = averageAccuracy, loss = averageLoss, result = Result.fromAccuracyAndLoss(accuracy, loss);
                return result;
            }
        },
        {
            key: "evaluate",
            value: function evaluate(corpus) {
                var _this = this;
                var totalLoss = 0, totalAccuracy = 0;
                corpus.forEachChunk(function(chunk) {
                    var oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, _this.vocabulary), result = _this.weights.evaluate(oneHotVectors), accuracy = result.getAccuracy(), loss = result.getLoss();
                    totalLoss += loss;
                    totalAccuracy += accuracy;
                });
                var Result = _registry.default.Result, corpusSize = corpus.getSize(), averageLoss = totalLoss / corpusSize, averageAccuracy = totalAccuracy / corpusSize, accuracy = averageAccuracy, loss = averageLoss, result = Result.fromAccuracyAndLoss(accuracy, loss);
                return result;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyByZWdpc3RyeUFzc2lnbmVkIH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHdlaWdodHNGcm9tSlNPTiwgdm9jYWJ1bGFyeUZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBERUZBVUxUX0xFQVJOSU5HX1JBVEUsIERFRkFVTFRfTU9ERUxfRklMRV9QQVRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgd3JpdGVGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyeUFzc2lnbmVkKGNsYXNzIE1vZGVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZvY2FidWxhcnksIHdlaWdodHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeTtcbiAgICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgZ2V0Vm9jYWJ1bGFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy52b2NhYnVsYXJ5O1xuICB9XG5cbiAgZ2V0V2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHRzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy52b2NhYnVsYXJ5ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbW9kZWwgaGFzIG5vIHZvY2FidWxhcnkuXCIpXG4gICAgfVxuXG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcblxuICAgIGlmICh0aGlzLndlaWdodHMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtb2RlbCBoYXMgbm8gd2VpZ2h0cy5cIilcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgdHJhaW4oY29ycHVzLCBsZWFybmluZ1JhdGUgPSBERUZBVUxUX0xFQVJOSU5HX1JBVEUpIHtcbiAgICBsZXQgdG90YWxMb3NzID0gMCxcbiAgICAgICAgdG90YWxBY2N1cmFjeSA9IDA7XG5cbiAgICBjb3JwdXMuZm9yRWFjaENodW5rKChjaHVuaykgPT4ge1xuICAgICAgY29uc3Qgb25lSG90VmVjdG9ycyA9IG9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5KGNodW5rLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy53ZWlnaHRzLnRyYWluKG9uZUhvdFZlY3RvcnMsIGxlYXJuaW5nUmF0ZSksXG4gICAgICAgICAgICBhY2N1cmFjeSA9IHJlc3VsdC5nZXRBY2N1cmFjeSgpLFxuICAgICAgICAgICAgbG9zcyA9IHJlc3VsdC5nZXRMb3NzKCk7XG5cbiAgICAgIHRvdGFsTG9zcyArPSBsb3NzO1xuXG4gICAgICB0b3RhbEFjY3VyYWN5ICs9IGFjY3VyYWN5O1xuICAgIH0pO1xuXG4gICAgY29uc3QgeyBSZXN1bHQgfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgIGNvcnB1c1NpemUgPSBjb3JwdXMuZ2V0U2l6ZSgpLFxuICAgICAgICAgIGF2ZXJhZ2VMb3NzID0gdG90YWxMb3NzIC8gY29ycHVzU2l6ZSxcbiAgICAgICAgICBhdmVyYWdlQWNjdXJhY3kgPSB0b3RhbEFjY3VyYWN5IC8gY29ycHVzU2l6ZSxcbiAgICAgICAgICBhY2N1cmFjeSA9IGF2ZXJhZ2VBY2N1cmFjeSxcbiAgICAgICAgICBsb3NzID0gYXZlcmFnZUxvc3MsIC8vL1xuICAgICAgICAgIHJlc3VsdCA9IFJlc3VsdC5mcm9tQWNjdXJhY3lBbmRMb3NzKGFjY3VyYWN5LCBsb3NzKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBldmFsdWF0ZShjb3JwdXMpIHtcbiAgICBsZXQgdG90YWxMb3NzID0gMCxcbiAgICAgICAgdG90YWxBY2N1cmFjeSA9IDA7XG5cbiAgICBjb3JwdXMuZm9yRWFjaENodW5rKChjaHVuaykgPT4ge1xuICAgICAgY29uc3Qgb25lSG90VmVjdG9ycyA9IG9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5KGNodW5rLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy53ZWlnaHRzLmV2YWx1YXRlKG9uZUhvdFZlY3RvcnMpLFxuICAgICAgICAgICAgYWNjdXJhY3kgPSByZXN1bHQuZ2V0QWNjdXJhY3koKSxcbiAgICAgICAgICAgIGxvc3MgPSByZXN1bHQuZ2V0TG9zcygpO1xuXG4gICAgICB0b3RhbExvc3MgKz0gbG9zcztcblxuICAgICAgdG90YWxBY2N1cmFjeSArPSBhY2N1cmFjeTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgUmVzdWx0IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICBjb3JwdXNTaXplID0gY29ycHVzLmdldFNpemUoKSxcbiAgICAgICAgICBhdmVyYWdlTG9zcyA9IHRvdGFsTG9zcyAvIGNvcnB1c1NpemUsXG4gICAgICAgICAgYXZlcmFnZUFjY3VyYWN5ID0gdG90YWxBY2N1cmFjeSAvIGNvcnB1c1NpemUsXG4gICAgICAgICAgYWNjdXJhY3kgPSBhdmVyYWdlQWNjdXJhY3ksXG4gICAgICAgICAgbG9zcyA9IGF2ZXJhZ2VMb3NzLFxuICAgICAgICAgIHJlc3VsdCA9IFJlc3VsdC5mcm9tQWNjdXJhY3lBbmRMb3NzKGFjY3VyYWN5LCBsb3NzKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmb3J3YXJkKHRva2VuKSB7XG4gICAgY29uc3QgeyBPbmVIb3RWZWN0b3IgfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgIG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSB0aGlzLndlaWdodHMuZm9yd2FyZChvbmVIb3RWZWN0b3IpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3JBcmdtYXggPSBwcm9iYWJpbGl0aWVzVmVjdG9yLmFyZ21heCgpLFxuICAgICAgICAgIGluZGV4ID0gcHJvYmFiaWxpdGllc1ZlY3RvckFyZ21heDsgLy8vXG5cbiAgICB0b2tlbiA9IHRoaXMudm9jYWJ1bGFyeS50b2tlbkF0KGluZGV4KTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIGluZmVyKHRva2VuLCBsZW5ndGgpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBsZW5ndGg7IGNvdW50KyspIHtcbiAgICAgIHRva2VuID0gdGhpcy5mb3J3YXJkKHRva2VuKTtcblxuICAgICAgdG9rZW5zLnB1c2godG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBzZXJpYWxpc2UoZmlsZVBhdGggPSBERUZBVUxUX01PREVMX0ZJTEVfUEFUSCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLnRvSlNPTigpLFxuICAgICAgICAgIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKSxcbiAgICAgICAgICBjb250ZW50ID0ganNvblN0cmluZzsgLy8vXG5cbiAgICB3cml0ZUZpbGUoZmlsZVBhdGgsIGNvbnRlbnQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHZvY2FidWxhcnlKU09OID0gdGhpcy52b2NhYnVsYXJ5LnRvSlNPTigpLFxuICAgICAgICAgIHdlaWdodHNKU09OID0gdGhpcy53ZWlnaHRzLnRvSlNPTigpLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5SlNPTiwgIC8vL1xuICAgICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZvY2FidWxhcnksXG4gICAgICAgICAgICB3ZWlnaHRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgbW9kZWwgPSBuZXcgTU9kZWwodm9jYWJ1bGFyeSwgd2VpZ2h0cyk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBXZWlnaHRzLCBWb2NhYnVsYXJ5IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICB7IGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBWb2NhYnVsYXJ5KSxcbiAgICAgICAgICB3ZWlnaHRzID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFdlaWdodHMpLFxuICAgICAgICAgIG1vZGVsID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNb2RlbCwgcHJvcGVydGllcywgdm9jYWJ1bGFyeSwgd2VpZ2h0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG1vZGVsLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5KGNodW5rLCB2b2NhYnVsYXJ5KSB7XG4gIGNvbnN0IHRva2VucyA9IGNodW5rLCAvLy9cbiAgICAgICAgb25lSG90VmVjdG9ycyA9IHRva2Vucy5tYXAoKHRva2VuKSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBPbmVIb3RWZWN0b3IgfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgICAgICAgIG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB2b2NhYnVsYXJ5KTtcblxuICAgICAgICAgIHJldHVybiBvbmVIb3RWZWN0b3I7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBvbmVIb3RWZWN0b3JzO1xufVxuIl0sIm5hbWVzIjpbIndyaXRlRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJyZWdpc3RyeUFzc2lnbmVkIiwiTW9kZWwiLCJ2b2NhYnVsYXJ5Iiwid2VpZ2h0cyIsImdldFZvY2FidWxhcnkiLCJnZXRXZWlnaHRzIiwiaW5pdGlhbGlzZSIsIkVycm9yIiwic2l6ZSIsImdldFNpemUiLCJ0cmFpbiIsImNvcnB1cyIsImxlYXJuaW5nUmF0ZSIsIkRFRkFVTFRfTEVBUk5JTkdfUkFURSIsInRvdGFsTG9zcyIsInRvdGFsQWNjdXJhY3kiLCJmb3JFYWNoQ2h1bmsiLCJjaHVuayIsIm9uZUhvdFZlY3RvcnMiLCJvbmVIb3RWZWN0b3JzRnJvbUNodW5rQW52Vm9jYWJ1bGFyeSIsInJlc3VsdCIsImFjY3VyYWN5IiwiZ2V0QWNjdXJhY3kiLCJsb3NzIiwiZ2V0TG9zcyIsIlJlc3VsdCIsInJlZ2lzdHJ5IiwiY29ycHVzU2l6ZSIsImF2ZXJhZ2VMb3NzIiwiYXZlcmFnZUFjY3VyYWN5IiwiZnJvbUFjY3VyYWN5QW5kTG9zcyIsImV2YWx1YXRlIiwiZm9yd2FyZCIsInRva2VuIiwiT25lSG90VmVjdG9yIiwib25lSG90VmVjdG9yIiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsInByb2JhYmlsaXRpZXNWZWN0b3IiLCJwcm9iYWJpbGl0aWVzVmVjdG9yQXJnbWF4IiwiYXJnbWF4IiwiaW5kZXgiLCJ0b2tlbkF0IiwiaW5mZXIiLCJsZW5ndGgiLCJ0b2tlbnMiLCJjb3VudCIsInB1c2giLCJzZXJpYWxpc2UiLCJmaWxlUGF0aCIsIkRFRkFVTFRfTU9ERUxfRklMRV9QQVRIIiwianNvbiIsInRvSlNPTiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCIsInZvY2FidWxhcnlKU09OIiwid2VpZ2h0c0pTT04iLCJmcm9tSlNPTiIsInZvY2FidWxhcnlGcm9tSlNPTiIsIndlaWdodHNGcm9tSlNPTiIsIm1vZGVsIiwiTU9kZWwiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiV2VpZ2h0cyIsIlZvY2FidWxhcnkiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwibWFwIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztvQkFab0M7OERBRWhCO2dFQUNDO3dCQUdvQjtvQkFDVzt3QkFDVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0QsSUFBTSxBQUFFQSxZQUFjQyx5QkFBbUIsQ0FBakNEO0lBRVIsV0FBZUUsSUFBQUEsMEJBQWdCLGdCQUFDOzthQUFNQyxNQUN4QkMsVUFBVSxFQUFFQyxPQUFP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