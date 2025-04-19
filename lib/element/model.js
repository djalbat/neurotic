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
var _defaults = require("../defaults");
var _element1 = require("../utilities/element");
var _training = require("../utilities/training");
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
                    throw Exception("The model has no vocabulary.");
                }
                this.vocabulary.initialise();
                if (this.weights === null) {
                    throw Exception("The model has no weights.");
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
                    var size = _this.vocabulary.getSize(), tokens = _this.vocabulary.getTokens(), oneHotVectors = (0, _training.oneHotVectorsFromChunkSizeAndTokens)(chunk, size, tokens);
                    _this.weights.train(oneHotVectors);
                });
            }
        },
        {
            key: "serialise",
            value: function serialise() {
                var filePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_MODEL_FILE_PATH;
                var json = this.asJSON(), jsonString = JSON.stringify(json), content = jsonString; ///
                writeFile(filePath, content);
            }
        },
        {
            key: "asJSON",
            value: function asJSON() {
                var vocabularyJSON = this.vocabulary.asJSON(), weightsJSON = this.weights.toJSON(), vocabulary = vocabularyJSON, weights = vocabulary, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL2VsZW1lbnQvd2VpZ2h0c1wiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4uL2VsZW1lbnQvdm9jYWJ1bGFyeVwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX01PREVMX0ZJTEVfUEFUSCB9IGZyb20gXCIuLi9kZWZhdWx0c1wiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBvbmVIb3RWZWN0b3JzRnJvbUNodW5rU2l6ZUFuZFRva2VucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvdHJhaW5pbmdcIjtcbmltcG9ydCB7IHdlaWdodHNGcm9tSlNPTiwgdm9jYWJ1bGFyeUZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgd3JpdGVGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2b2NhYnVsYXJ5LCB3ZWlnaHRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudm9jYWJ1bGFyeSA9IHZvY2FidWxhcnk7XG4gICAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cztcbiAgfVxuXG4gIGdldFZvY2FidWxhcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudm9jYWJ1bGFyeTtcbiAgfVxuXG4gIGdldFdlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0cztcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgaWYgKHRoaXMudm9jYWJ1bGFyeSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgRXhjZXB0aW9uKFwiVGhlIG1vZGVsIGhhcyBubyB2b2NhYnVsYXJ5LlwiKVxuICAgIH1cblxuICAgIHRoaXMudm9jYWJ1bGFyeS5pbml0aWFsaXNlKCk7XG5cbiAgICBpZiAodGhpcy53ZWlnaHRzID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBFeGNlcHRpb24oXCJUaGUgbW9kZWwgaGFzIG5vIHdlaWdodHMuXCIpXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudm9jYWJ1bGFyeS5nZXRTaXplKCk7XG5cbiAgICB0aGlzLndlaWdodHMuaW5pdGlhbGlzZShzaXplKTtcbiAgfVxuXG4gIHRyYWluKGNvcnB1cykge1xuICAgIGNvbnN0IGNodW5rcyA9IGNvcnB1cy5nZXRDaHVua3MoKTtcblxuICAgIGNodW5rcy5mb3JFYWNoKChjaHVuaykgPT4ge1xuICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMudm9jYWJ1bGFyeS5nZXRTaXplKCksXG4gICAgICAgICAgICB0b2tlbnMgPSB0aGlzLnZvY2FidWxhcnkuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBvbmVIb3RWZWN0b3JzID0gb25lSG90VmVjdG9yc0Zyb21DaHVua1NpemVBbmRUb2tlbnMoY2h1bmssIHNpemUsIHRva2Vucyk7XG5cbiAgICAgIHRoaXMud2VpZ2h0cy50cmFpbihvbmVIb3RWZWN0b3JzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlcmlhbGlzZShmaWxlUGF0aCA9IERFRkFVTFRfTU9ERUxfRklMRV9QQVRIKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXNKU09OKCksXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAvLy9cblxuICAgIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG4gIH1cblxuICBhc0pTT04oKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeUpTT04gPSB0aGlzLnZvY2FidWxhcnkuYXNKU09OKCksXG4gICAgICAgICAgd2VpZ2h0c0pTT04gPSB0aGlzLndlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlKU09OLCAgLy8vXG4gICAgICAgICAgd2VpZ2h0cyA9IHZvY2FidWxhcnksIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB2b2NhYnVsYXJ5LFxuICAgICAgICAgICAgd2VpZ2h0c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICB3ZWlnaHRzID0gd2VpZ2h0c0Zyb21KU09OKGpzb24pLFxuICAgICAgICAgIG1vZGVsID0gbmV3IE1PZGVsKHZvY2FidWxhcnksIHdlaWdodHMpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFZvY2FidWxhcnkpLFxuICAgICAgICAgIHdlaWdodHMgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgV2VpZ2h0cyksXG4gICAgICAgICAgbW9kZWwgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1vZGVsLCBwcm9wZXJ0aWVzLCB2b2NhYnVsYXJ5LCB3ZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbW9kZWwuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTW9kZWwiLCJ3cml0ZUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwidm9jYWJ1bGFyeSIsIndlaWdodHMiLCJnZXRWb2NhYnVsYXJ5IiwiZ2V0V2VpZ2h0cyIsImluaXRpYWxpc2UiLCJFeGNlcHRpb24iLCJzaXplIiwiZ2V0U2l6ZSIsInRyYWluIiwiY29ycHVzIiwiY2h1bmtzIiwiZ2V0Q2h1bmtzIiwiZm9yRWFjaCIsImNodW5rIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwib25lSG90VmVjdG9ycyIsIm9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtTaXplQW5kVG9rZW5zIiwic2VyaWFsaXNlIiwiZmlsZVBhdGgiLCJERUZBVUxUX01PREVMX0ZJTEVfUEFUSCIsImpzb24iLCJhc0pTT04iLCJqc29uU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnRlbnQiLCJ2b2NhYnVsYXJ5SlNPTiIsIndlaWdodHNKU09OIiwidG9KU09OIiwiZnJvbUpTT04iLCJ2b2NhYnVsYXJ5RnJvbUpTT04iLCJ3ZWlnaHRzRnJvbUpTT04iLCJtb2RlbCIsIk1PZGVsIiwiZnJvbVByb3BlcnRpZXMiLCJwcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMiLCJWb2NhYnVsYXJ5IiwiV2VpZ2h0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFlcUJBOzs7b0JBYmU7OERBRWhCOzhEQUNBO2lFQUNHO3dCQUVpQjt3QkFDQzt3QkFDVztvQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBELElBQU0sQUFBRUMsWUFBY0MseUJBQW1CLENBQWpD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