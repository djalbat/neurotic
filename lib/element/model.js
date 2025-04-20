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
                var OneHotVector = _registry.default.OneHotVector, oneHotVector = OneHotVector.fromTokenAndVocabulary(token, this.vocabulary);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IHJlZ2lzdHJ5IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuXG5pbXBvcnQgeyByZWdpc3RyeUFzc2lnbmVkIH0gZnJvbSBcIi4uL3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHdlaWdodHNGcm9tSlNPTiwgdm9jYWJ1bGFyeUZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBERUZBVUxUX0xFQVJOSU5HX1JBVEUsIERFRkFVTFRfTU9ERUxfRklMRV9QQVRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgd3JpdGVGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyeUFzc2lnbmVkKGNsYXNzIE1vZGVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZvY2FidWxhcnksIHdlaWdodHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeTtcbiAgICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgZ2V0Vm9jYWJ1bGFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy52b2NhYnVsYXJ5O1xuICB9XG5cbiAgZ2V0V2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHRzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy52b2NhYnVsYXJ5ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbW9kZWwgaGFzIG5vIHZvY2FidWxhcnkuXCIpXG4gICAgfVxuXG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcblxuICAgIGlmICh0aGlzLndlaWdodHMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtb2RlbCBoYXMgbm8gd2VpZ2h0cy5cIilcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgdHJhaW4oY29ycHVzLCBsZWFybmluZ1JhdGUgPSBERUZBVUxUX0xFQVJOSU5HX1JBVEUpIHtcbiAgICBsZXQgdG90YWxMb3NzID0gMCxcbiAgICAgICAgdG90YWxBY2N1cmFjeSA9IDA7XG5cbiAgICBjb3JwdXMuZm9yRWFjaENodW5rKChjaHVuaykgPT4ge1xuICAgICAgY29uc3Qgb25lSG90VmVjdG9ycyA9IG9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5KGNodW5rLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy53ZWlnaHRzLnRyYWluKG9uZUhvdFZlY3RvcnMsIGxlYXJuaW5nUmF0ZSksXG4gICAgICAgICAgICBhY2N1cmFjeSA9IHJlc3VsdC5nZXRBY2N1cmFjeSgpLFxuICAgICAgICAgICAgbG9zcyA9IHJlc3VsdC5nZXRMb3NzKCk7XG5cbiAgICAgIHRvdGFsTG9zcyArPSBsb3NzO1xuXG4gICAgICB0b3RhbEFjY3VyYWN5ICs9IGFjY3VyYWN5O1xuICAgIH0pO1xuXG4gICAgY29uc3QgeyBSZXN1bHQgfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgIGNvcnB1c1NpemUgPSBjb3JwdXMuZ2V0U2l6ZSgpLFxuICAgICAgICAgIGF2ZXJhZ2VMb3NzID0gdG90YWxMb3NzIC8gY29ycHVzU2l6ZSxcbiAgICAgICAgICBhdmVyYWdlQWNjdXJhY3kgPSB0b3RhbEFjY3VyYWN5IC8gY29ycHVzU2l6ZSxcbiAgICAgICAgICBhY2N1cmFjeSA9IGF2ZXJhZ2VBY2N1cmFjeSxcbiAgICAgICAgICBsb3NzID0gYXZlcmFnZUxvc3MsIC8vL1xuICAgICAgICAgIHJlc3VsdCA9IFJlc3VsdC5mcm9tQWNjdXJhY3lBbmRMb3NzKGFjY3VyYWN5LCBsb3NzKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBldmFsdWF0ZShjb3JwdXMpIHtcbiAgICBsZXQgdG90YWxMb3NzID0gMCxcbiAgICAgICAgdG90YWxBY2N1cmFjeSA9IDA7XG5cbiAgICBjb3JwdXMuZm9yRWFjaENodW5rKChjaHVuaykgPT4ge1xuICAgICAgY29uc3Qgb25lSG90VmVjdG9ycyA9IG9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5KGNodW5rLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy53ZWlnaHRzLmV2YWx1YXRlKG9uZUhvdFZlY3RvcnMpLFxuICAgICAgICAgICAgYWNjdXJhY3kgPSByZXN1bHQuZ2V0QWNjdXJhY3koKSxcbiAgICAgICAgICAgIGxvc3MgPSByZXN1bHQuZ2V0TG9zcygpO1xuXG4gICAgICB0b3RhbExvc3MgKz0gbG9zcztcblxuICAgICAgdG90YWxBY2N1cmFjeSArPSBhY2N1cmFjeTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgUmVzdWx0IH0gPSByZWdpc3RyeSxcbiAgICAgICAgICBjb3JwdXNTaXplID0gY29ycHVzLmdldFNpemUoKSxcbiAgICAgICAgICBhdmVyYWdlTG9zcyA9IHRvdGFsTG9zcyAvIGNvcnB1c1NpemUsXG4gICAgICAgICAgYXZlcmFnZUFjY3VyYWN5ID0gdG90YWxBY2N1cmFjeSAvIGNvcnB1c1NpemUsXG4gICAgICAgICAgYWNjdXJhY3kgPSBhdmVyYWdlQWNjdXJhY3ksXG4gICAgICAgICAgbG9zcyA9IGF2ZXJhZ2VMb3NzLFxuICAgICAgICAgIHJlc3VsdCA9IFJlc3VsdC5mcm9tQWNjdXJhY3lBbmRMb3NzKGFjY3VyYWN5LCBsb3NzKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmb3J3YXJkKHRva2VuKSB7XG4gICAgY29uc3QgeyBPbmVIb3RWZWN0b3IgfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgIG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB0aGlzLnZvY2FidWxhcnkpO1xuXG5cbiAgfVxuXG4gIHNlcmlhbGlzZShmaWxlUGF0aCA9IERFRkFVTFRfTU9ERUxfRklMRV9QQVRIKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMudG9KU09OKCksXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAvLy9cblxuICAgIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeUpTT04gPSB0aGlzLnZvY2FidWxhcnkudG9KU09OKCksXG4gICAgICAgICAgd2VpZ2h0c0pTT04gPSB0aGlzLndlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlKU09OLCAgLy8vXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdm9jYWJ1bGFyeSxcbiAgICAgICAgICAgIHdlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBtb2RlbCA9IG5ldyBNT2RlbCh2b2NhYnVsYXJ5LCB3ZWlnaHRzKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IFdlaWdodHMsIFZvY2FidWxhcnkgfSA9IHJlZ2lzdHJ5LFxuICAgICAgICAgIHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFZvY2FidWxhcnkpLFxuICAgICAgICAgIHdlaWdodHMgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgV2VpZ2h0cyksXG4gICAgICAgICAgbW9kZWwgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1vZGVsLCBwcm9wZXJ0aWVzLCB2b2NhYnVsYXJ5LCB3ZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbW9kZWwuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59KTtcblxuZnVuY3Rpb24gb25lSG90VmVjdG9yc0Zyb21DaHVua0FudlZvY2FidWxhcnkoY2h1bmssIHZvY2FidWxhcnkpIHtcbiAgY29uc3QgdG9rZW5zID0gY2h1bmssIC8vL1xuICAgICAgICBvbmVIb3RWZWN0b3JzID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICBjb25zdCB7IE9uZUhvdFZlY3RvciB9ID0gcmVnaXN0cnksXG4gICAgICAgICAgICAgICAgb25lSG90VmVjdG9yID0gT25lSG90VmVjdG9yLmZyb21Ub2tlbkFuZFZvY2FidWxhcnkodG9rZW4sIHZvY2FidWxhcnkpO1xuXG4gICAgICAgICAgcmV0dXJuIG9uZUhvdFZlY3RvcjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG9uZUhvdFZlY3RvcnM7XG59XG4iXSwibmFtZXMiOlsid3JpdGVGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInJlZ2lzdHJ5QXNzaWduZWQiLCJNb2RlbCIsInZvY2FidWxhcnkiLCJ3ZWlnaHRzIiwiZ2V0Vm9jYWJ1bGFyeSIsImdldFdlaWdodHMiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJzaXplIiwiZ2V0U2l6ZSIsInRyYWluIiwiY29ycHVzIiwibGVhcm5pbmdSYXRlIiwiREVGQVVMVF9MRUFSTklOR19SQVRFIiwidG90YWxMb3NzIiwidG90YWxBY2N1cmFjeSIsImZvckVhY2hDaHVuayIsImNodW5rIiwib25lSG90VmVjdG9ycyIsIm9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbnZWb2NhYnVsYXJ5IiwicmVzdWx0IiwiYWNjdXJhY3kiLCJnZXRBY2N1cmFjeSIsImxvc3MiLCJnZXRMb3NzIiwiUmVzdWx0IiwicmVnaXN0cnkiLCJjb3JwdXNTaXplIiwiYXZlcmFnZUxvc3MiLCJhdmVyYWdlQWNjdXJhY3kiLCJmcm9tQWNjdXJhY3lBbmRMb3NzIiwiZXZhbHVhdGUiLCJmb3J3YXJkIiwidG9rZW4iLCJPbmVIb3RWZWN0b3IiLCJvbmVIb3RWZWN0b3IiLCJmcm9tVG9rZW5BbmRWb2NhYnVsYXJ5Iiwic2VyaWFsaXNlIiwiZmlsZVBhdGgiLCJERUZBVUxUX01PREVMX0ZJTEVfUEFUSCIsImpzb24iLCJ0b0pTT04iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJ2b2NhYnVsYXJ5SlNPTiIsIndlaWdodHNKU09OIiwiZnJvbUpTT04iLCJ2b2NhYnVsYXJ5RnJvbUpTT04iLCJ3ZWlnaHRzRnJvbUpTT04iLCJtb2RlbCIsIk1PZGVsIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsIldlaWdodHMiLCJWb2NhYnVsYXJ5IiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsInRva2VucyIsIm1hcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7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