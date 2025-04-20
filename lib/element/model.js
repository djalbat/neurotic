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
var _element1 = require("../utilities/element");
var _json = require("../utilities/json");
var _defaults = require("../defaults");
var _result = /*#__PURE__*/ _interop_require_default(require("../result"));
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
                var learningRate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_LEARNING_RATE;
                var chunks = corpus.getChunks();
                var totalLoss = 0, totalAccuracy = 0;
                chunks.forEach(function(chunk) {
                    var tokens = chunk, oneHotVectors = tokens.map(function(token) {
                        var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, _this.vocabulary);
                        return oneHotVector;
                    }), result = _this.weights.train(oneHotVectors, learningRate), accuracy = result.getAccuracy(), loss = result.getLoss();
                    totalLoss += loss;
                    totalAccuracy += accuracy;
                });
                var corpusSize = corpus.getSize(), averageLoss = totalLoss / corpusSize, averageAccuracy = totalAccuracy / corpusSize, accuracy = averageAccuracy, loss = averageLoss, result = _result.default.fromAccuracyAndLoss(accuracy, loss);
                return result;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL2VsZW1lbnQvd2VpZ2h0c1wiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4uL2VsZW1lbnQvdm9jYWJ1bGFyeVwiO1xuaW1wb3J0IE9uZUhvdFZlY3RvciBmcm9tIFwiLi4vdmVjdG9yL29uZUhvdFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHdlaWdodHNGcm9tSlNPTiwgdm9jYWJ1bGFyeUZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBERUZBVUxUX0xFQVJOSU5HX1JBVEUsIERFRkFVTFRfTU9ERUxfRklMRV9QQVRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuLi9yZXN1bHRcIjtcblxuY29uc3QgeyB3cml0ZUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHZvY2FidWxhcnksIHdlaWdodHMpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy52b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeTtcbiAgICB0aGlzLndlaWdodHMgPSB3ZWlnaHRzO1xuICB9XG5cbiAgZ2V0Vm9jYWJ1bGFyeSgpIHtcbiAgICByZXR1cm4gdGhpcy52b2NhYnVsYXJ5O1xuICB9XG5cbiAgZ2V0V2VpZ2h0cygpIHtcbiAgICByZXR1cm4gdGhpcy53ZWlnaHRzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBpZiAodGhpcy52b2NhYnVsYXJ5ID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbW9kZWwgaGFzIG5vIHZvY2FidWxhcnkuXCIpXG4gICAgfVxuXG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcblxuICAgIGlmICh0aGlzLndlaWdodHMgPT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtb2RlbCBoYXMgbm8gd2VpZ2h0cy5cIilcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgdHJhaW4oY29ycHVzLCBsZWFybmluZ1JhdGUgPSBERUZBVUxUX0xFQVJOSU5HX1JBVEUpIHtcbiAgICBjb25zdCBjaHVua3MgPSBjb3JwdXMuZ2V0Q2h1bmtzKCk7XG5cbiAgICBsZXQgdG90YWxMb3NzID0gMCxcbiAgICAgICAgdG90YWxBY2N1cmFjeSA9IDA7XG5cbiAgICBjaHVua3MuZm9yRWFjaCgoY2h1bmspID0+IHtcbiAgICAgIGNvbnN0IHRva2VucyA9IGNodW5rLCAvLy9cbiAgICAgICAgICAgIG9uZUhvdFZlY3RvcnMgPSB0b2tlbnMubWFwKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBvbmVIb3RWZWN0b3IgPSBPbmVIb3RWZWN0b3IuZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSh0b2tlbiwgdGhpcy52b2NhYnVsYXJ5KTtcblxuICAgICAgICAgICAgICByZXR1cm4gb25lSG90VmVjdG9yO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLndlaWdodHMudHJhaW4ob25lSG90VmVjdG9ycywgbGVhcm5pbmdSYXRlKSxcbiAgICAgICAgICAgIGFjY3VyYWN5ID0gcmVzdWx0LmdldEFjY3VyYWN5KCksXG4gICAgICAgICAgICBsb3NzID0gcmVzdWx0LmdldExvc3MoKTtcblxuICAgICAgdG90YWxMb3NzICs9IGxvc3M7XG5cbiAgICAgIHRvdGFsQWNjdXJhY3kgKz0gYWNjdXJhY3k7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjb3JwdXNTaXplID0gY29ycHVzLmdldFNpemUoKSxcbiAgICAgICAgICBhdmVyYWdlTG9zcyA9IHRvdGFsTG9zcyAvIGNvcnB1c1NpemUsXG4gICAgICAgICAgYXZlcmFnZUFjY3VyYWN5ID0gdG90YWxBY2N1cmFjeSAvIGNvcnB1c1NpemUsXG4gICAgICAgICAgYWNjdXJhY3kgPSBhdmVyYWdlQWNjdXJhY3ksXG4gICAgICAgICAgbG9zcyA9IGF2ZXJhZ2VMb3NzLCAvLy9cbiAgICAgICAgICByZXN1bHQgPSBSZXN1bHQuZnJvbUFjY3VyYWN5QW5kTG9zcyhhY2N1cmFjeSwgbG9zcyk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2VyaWFsaXNlKGZpbGVQYXRoID0gREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy50b0pTT04oKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5SlNPTiA9IHRoaXMudm9jYWJ1bGFyeS50b0pTT04oKSxcbiAgICAgICAgICB3ZWlnaHRzSlNPTiA9IHRoaXMud2VpZ2h0cy50b0pTT04oKSxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUpTT04sICAvLy9cbiAgICAgICAgICB3ZWlnaHRzID0gd2VpZ2h0c0pTT04sIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB2b2NhYnVsYXJ5LFxuICAgICAgICAgICAgd2VpZ2h0c1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICB3ZWlnaHRzID0gd2VpZ2h0c0Zyb21KU09OKGpzb24pLFxuICAgICAgICAgIG1vZGVsID0gbmV3IE1PZGVsKHZvY2FidWxhcnksIHdlaWdodHMpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgY2hpbGRFbGVtZW50cyB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFZvY2FidWxhcnkpLFxuICAgICAgICAgIHdlaWdodHMgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgV2VpZ2h0cyksXG4gICAgICAgICAgbW9kZWwgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1vZGVsLCBwcm9wZXJ0aWVzLCB2b2NhYnVsYXJ5LCB3ZWlnaHRzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbW9kZWwuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTW9kZWwiLCJ3cml0ZUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwidm9jYWJ1bGFyeSIsIndlaWdodHMiLCJnZXRWb2NhYnVsYXJ5IiwiZ2V0V2VpZ2h0cyIsImluaXRpYWxpc2UiLCJFcnJvciIsInNpemUiLCJnZXRTaXplIiwidHJhaW4iLCJjb3JwdXMiLCJsZWFybmluZ1JhdGUiLCJERUZBVUxUX0xFQVJOSU5HX1JBVEUiLCJjaHVua3MiLCJnZXRDaHVua3MiLCJ0b3RhbExvc3MiLCJ0b3RhbEFjY3VyYWN5IiwiZm9yRWFjaCIsImNodW5rIiwidG9rZW5zIiwib25lSG90VmVjdG9ycyIsIm1hcCIsInRva2VuIiwib25lSG90VmVjdG9yIiwiT25lSG90VmVjdG9yIiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsInJlc3VsdCIsImFjY3VyYWN5IiwiZ2V0QWNjdXJhY3kiLCJsb3NzIiwiZ2V0TG9zcyIsImNvcnB1c1NpemUiLCJhdmVyYWdlTG9zcyIsImF2ZXJhZ2VBY2N1cmFjeSIsIlJlc3VsdCIsImZyb21BY2N1cmFjeUFuZExvc3MiLCJzZXJpYWxpc2UiLCJmaWxlUGF0aCIsIkRFRkFVTFRfTU9ERUxfRklMRV9QQVRIIiwianNvbiIsInRvSlNPTiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCIsInZvY2FidWxhcnlKU09OIiwid2VpZ2h0c0pTT04iLCJmcm9tSlNPTiIsInZvY2FidWxhcnlGcm9tSlNPTiIsIndlaWdodHNGcm9tSlNPTiIsIm1vZGVsIiwiTU9kZWwiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsIlZvY2FidWxhcnkiLCJXZWlnaHRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWdCcUJBOzs7b0JBZGU7OERBRWhCOzhEQUNBO2lFQUNHOzZEQUNFO3dCQUVnQjtvQkFDVzt3QkFDVzs2REFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFNLEFBQUVDLFlBQWNDLHlCQUFtQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELHNCQUFOO2NBQU1BO2FBQUFB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