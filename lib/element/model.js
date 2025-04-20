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
                chunks.forEach(function(chunk) {
                    var tokens = chunk, oneHotVectors = tokens.map(function(token) {
                        var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, _this.vocabulary);
                        return oneHotVector;
                    });
                    _this.weights.train(oneHotVectors, learningRate);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFdlaWdodHMgZnJvbSBcIi4uL2VsZW1lbnQvd2VpZ2h0c1wiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4uL2VsZW1lbnQvdm9jYWJ1bGFyeVwiO1xuaW1wb3J0IE9uZUhvdFZlY3RvciBmcm9tIFwiLi4vdmVjdG9yL29uZUhvdFwiO1xuXG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHdlaWdodHNGcm9tSlNPTiwgdm9jYWJ1bGFyeUZyb21KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBERUZBVUxUX0xFQVJOSU5HX1JBVEUsIERFRkFVTFRfTU9ERUxfRklMRV9QQVRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgd3JpdGVGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2b2NhYnVsYXJ5LCB3ZWlnaHRzKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudm9jYWJ1bGFyeSA9IHZvY2FidWxhcnk7XG4gICAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cztcbiAgfVxuXG4gIGdldFZvY2FidWxhcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudm9jYWJ1bGFyeTtcbiAgfVxuXG4gIGdldFdlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0cztcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgaWYgKHRoaXMudm9jYWJ1bGFyeSA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIG1vZGVsIGhhcyBubyB2b2NhYnVsYXJ5LlwiKVxuICAgIH1cblxuICAgIHRoaXMudm9jYWJ1bGFyeS5pbml0aWFsaXNlKCk7XG5cbiAgICBpZiAodGhpcy53ZWlnaHRzID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgbW9kZWwgaGFzIG5vIHdlaWdodHMuXCIpXG4gICAgfVxuXG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMudm9jYWJ1bGFyeS5nZXRTaXplKCk7XG5cbiAgICB0aGlzLndlaWdodHMuaW5pdGlhbGlzZShzaXplKTtcbiAgfVxuXG4gIHRyYWluKGNvcnB1cywgbGVhcm5pbmdSYXRlID0gREVGQVVMVF9MRUFSTklOR19SQVRFKSB7XG4gICAgY29uc3QgY2h1bmtzID0gY29ycHVzLmdldENodW5rcygpO1xuXG4gICAgY2h1bmtzLmZvckVhY2goKGNodW5rKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbnMgPSBjaHVuaywgLy8vXG4gICAgICAgICAgICBvbmVIb3RWZWN0b3JzID0gdG9rZW5zLm1hcCgodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgb25lSG90VmVjdG9yID0gT25lSG90VmVjdG9yLmZyb21Ub2tlbkFuZFZvY2FidWxhcnkodG9rZW4sIHRoaXMudm9jYWJ1bGFyeSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIG9uZUhvdFZlY3RvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB0aGlzLndlaWdodHMudHJhaW4ob25lSG90VmVjdG9ycywgbGVhcm5pbmdSYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlcmlhbGlzZShmaWxlUGF0aCA9IERFRkFVTFRfTU9ERUxfRklMRV9QQVRIKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMudG9KU09OKCksXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAvLy9cblxuICAgIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeUpTT04gPSB0aGlzLnZvY2FidWxhcnkudG9KU09OKCksXG4gICAgICAgICAgd2VpZ2h0c0pTT04gPSB0aGlzLndlaWdodHMudG9KU09OKCksXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlKU09OLCAgLy8vXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdm9jYWJ1bGFyeSxcbiAgICAgICAgICAgIHdlaWdodHNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgd2VpZ2h0cyA9IHdlaWdodHNGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICBtb2RlbCA9IG5ldyBNT2RlbCh2b2NhYnVsYXJ5LCB3ZWlnaHRzKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IGNoaWxkRWxlbWVudHMgfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBWb2NhYnVsYXJ5KSxcbiAgICAgICAgICB3ZWlnaHRzID0gZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMsIFdlaWdodHMpLFxuICAgICAgICAgIG1vZGVsID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhNb2RlbCwgcHJvcGVydGllcywgdm9jYWJ1bGFyeSwgd2VpZ2h0cywgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIG1vZGVsLmluaXRpYWxpc2UoKTtcblxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk1vZGVsIiwid3JpdGVGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInZvY2FidWxhcnkiLCJ3ZWlnaHRzIiwiZ2V0Vm9jYWJ1bGFyeSIsImdldFdlaWdodHMiLCJpbml0aWFsaXNlIiwiRXJyb3IiLCJzaXplIiwiZ2V0U2l6ZSIsInRyYWluIiwiY29ycHVzIiwibGVhcm5pbmdSYXRlIiwiREVGQVVMVF9MRUFSTklOR19SQVRFIiwiY2h1bmtzIiwiZ2V0Q2h1bmtzIiwiZm9yRWFjaCIsImNodW5rIiwidG9rZW5zIiwib25lSG90VmVjdG9ycyIsIm1hcCIsInRva2VuIiwib25lSG90VmVjdG9yIiwiT25lSG90VmVjdG9yIiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsInNlcmlhbGlzZSIsImZpbGVQYXRoIiwiREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgiLCJqc29uIiwidG9KU09OIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50Iiwidm9jYWJ1bGFyeUpTT04iLCJ3ZWlnaHRzSlNPTiIsImZyb21KU09OIiwidm9jYWJ1bGFyeUZyb21KU09OIiwid2VpZ2h0c0Zyb21KU09OIiwibW9kZWwiLCJNT2RlbCIsImZyb21Qcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJjaGlsZEVsZW1lbnRzIiwiZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIiwiVm9jYWJ1bGFyeSIsIldlaWdodHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O29CQWJlOzhEQUVoQjs4REFDQTtpRUFDRzs2REFDRTt3QkFFZ0I7b0JBQ1c7d0JBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRCxJQUFNLEFBQUVDLFlBQWNDLHlCQUFtQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELHNCQUFOO2NBQU1BO2FBQUFBLE1BQ1BHLFVBQVUsRUFBRUMsT0FBTztnQ0FEWko7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtHLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0MsT0FBTyxHQUFHQTs7O2tCQUxFSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJLElBQUksQ0FBQ0osVUFBVSxLQUFLLE1BQU07b0JBQzVCLE1BQU0sSUFBSUssTUFBTTtnQkFDbEI7Z0JBRUEsSUFBSSxDQUFDTCxVQUFVLENBQUNJLFVBQVU7Z0JBRTFCLElBQUksSUFBSSxDQUFDSCxPQUFPLEtBQUssTUFBTTtvQkFDekIsTUFBTSxJQUFJSSxNQUFNO2dCQUNsQjtnQkFFQSxJQUFNQyxPQUFPLElBQUksQ0FBQ04sVUFBVSxDQUFDTyxPQUFPO2dCQUVwQyxJQUFJLENBQUNOLE9BQU8sQ0FBQ0csVUFBVSxDQUFDRTtZQUMxQjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNOztvQkFBRUMsZUFBQUEsaUVBQWVDLCtCQUFxQjtnQkFDaEQsSUFBTUMsU0FBU0gsT0FBT0ksU0FBUztnQkFFL0JELE9BQU9FLE9BQU8sQ0FBQyxTQUFDQztvQkFDZCxJQUFNQyxTQUFTRCxPQUNURSxnQkFBZ0JELE9BQU9FLEdBQUcsQ0FBQyxTQUFDQzt3QkFDMUIsSUFBTUMsZUFBZUMsZUFBWSxDQUFDQyxzQkFBc0IsQ0FBQ0gsT0FBTyxNQUFLbkIsVUFBVTt3QkFFL0UsT0FBT29CO29CQUNUO29CQUVOLE1BQUtuQixPQUFPLENBQUNPLEtBQUssQ0FBQ1MsZUFBZVA7Z0JBQ3BDO1lBQ0Y7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUE7b0JBQVVDLFdBQUFBLGlFQUFXQyxpQ0FBdUI7Z0JBQzFDLElBQU1DLE9BQU8sSUFBSSxDQUFDQyxNQUFNLElBQ2xCQyxhQUFhQyxLQUFLQyxTQUFTLENBQUNKLE9BQzVCSyxVQUFVSCxZQUFZLEdBQUc7Z0JBRS9COUIsVUFBVTBCLFVBQVVPO1lBQ3RCOzs7WUFFQUosS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1LLGlCQUFpQixJQUFJLENBQUNoQyxVQUFVLENBQUMyQixNQUFNLElBQ3ZDTSxjQUFjLElBQUksQ0FBQ2hDLE9BQU8sQ0FBQzBCLE1BQU0sSUFDakMzQixhQUFhZ0MsZ0JBQ2IvQixVQUFVZ0MsYUFDVlAsT0FBTztvQkFDTDFCLFlBQUFBO29CQUNBQyxTQUFBQTtnQkFDRjtnQkFFTixPQUFPeUI7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxTQUFTUixJQUFJO2dCQUNsQixJQUFNMUIsYUFBYW1DLElBQUFBLHdCQUFrQixFQUFDVCxPQUNoQ3pCLFVBQVVtQyxJQUFBQSxxQkFBZSxFQUFDVixPQUMxQlcsUUFBUSxJQUFJQyxNQUFNdEMsWUFBWUM7Z0JBRXBDLE9BQU9vQztZQUNUOzs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZUMsVUFBVTtnQkFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MscUJBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7b0JBQUdBLG1CQUFILE9BQUEsS0FBQSxTQUFBLENBQUEsS0FBcUI7O29CQUl2Q0M7Z0JBSGQsSUFBTSxBQUFFQyxnQkFBa0JILFdBQWxCRyxlQUNGM0MsYUFBYTRDLElBQUFBLGtDQUF3QixFQUFDRCxlQUFlRSxtQkFBVSxHQUMvRDVDLFVBQVUyQyxJQUFBQSxrQ0FBd0IsRUFBQ0QsZUFBZUcsZ0JBQU8sR0FDekRULFFBQVFLLENBQUFBLFdBQUFBLGdCQUFPLEVBQUNILGNBQWMsT0FBdEJHLFVBQUFBO29CQWhGRzdDO29CQWdGMkIyQztvQkFBWXhDO29CQUFZQztpQkFBK0IsQ0FBckZ5QyxPQUErRCxxQkFBR0Q7Z0JBRWhGSixNQUFNakMsVUFBVTtnQkFFaEIsT0FBT2lDO1lBQ1Q7OztXQXJGbUJ4QztxQkFBYzZDLGdCQUFPIn0=