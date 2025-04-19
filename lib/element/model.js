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
var _vocabulary = /*#__PURE__*/ _interop_require_default(require("../element/vocabulary"));
var _json = require("../utilities/json");
var _defaults = require("../defaults");
var _element1 = require("../utilities/element");
var _training = require("../utilities/training");
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
    function Model(vocabulary) {
        _class_call_check(this, Model);
        var _this;
        _this = _call_super(this, Model);
        _this.vocabulary = vocabulary;
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
            key: "initialise",
            value: function initialise() {
                if (this.vocabulary === null) {
                    throw Exception("The model has no vocabulary.");
                }
                this.vocabulary.initialise();
            }
        },
        {
            key: "train",
            value: function train(corpus) {
                var _this = this;
                var chunks = corpus.getChunks();
                chunks.forEach(function(chunk) {
                    var tokens = _this.vocabulary.getTokens(), oneHotVectors = (0, _training.oneHotVectorsFromChunkAndTokens)(chunk, tokens);
                    debugger;
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
                var vocabularyJSON = this.vocabulary.asJSON(), vocabulary = vocabularyJSON, json = {
                    vocabulary: vocabulary
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json) {
                var vocabulary = (0, _json.vocabularyFromJSON)(json), model = new MOdel(vocabulary);
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
                var childElements = properties.childElements, vocabulary = (0, _element1.elementFromChildElements)(childElements, _vocabulary.default), model = (_Element = _element.default).fromProperties.apply(_Element, [
                    Model,
                    properties,
                    vocabulary
                ].concat(_to_consumable_array(remainingArguments)));
                model.initialise();
                return model;
            }
        }
    ]);
    return Model;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeS9saWIvbWFpblwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IFZvY2FidWxhcnkgZnJvbSBcIi4uL2VsZW1lbnQvdm9jYWJ1bGFyeVwiO1xuXG5pbXBvcnQgeyB2b2NhYnVsYXJ5RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IERFRkFVTFRfTU9ERUxfRklMRV9QQVRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5pbXBvcnQgeyBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IG9uZUhvdFZlY3RvcnNGcm9tQ2h1bmtBbmRUb2tlbnMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3RyYWluaW5nXCI7XG5cbmNvbnN0IHsgd3JpdGVGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih2b2NhYnVsYXJ5KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudm9jYWJ1bGFyeSA9IHZvY2FidWxhcnk7XG4gIH1cblxuICBnZXRWb2NhYnVsYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnZvY2FidWxhcnk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGlmICh0aGlzLnZvY2FidWxhcnkgPT09IG51bGwpIHtcbiAgICAgIHRocm93IEV4Y2VwdGlvbihcIlRoZSBtb2RlbCBoYXMgbm8gdm9jYWJ1bGFyeS5cIilcbiAgICB9XG5cbiAgICB0aGlzLnZvY2FidWxhcnkuaW5pdGlhbGlzZSgpO1xuICB9XG5cbiAgdHJhaW4oY29ycHVzKSB7XG4gICAgY29uc3QgY2h1bmtzID0gY29ycHVzLmdldENodW5rcygpO1xuXG4gICAgY2h1bmtzLmZvckVhY2goKGNodW5rKSA9PiB7XG4gICAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnZvY2FidWxhcnkuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBvbmVIb3RWZWN0b3JzID0gb25lSG90VmVjdG9yc0Zyb21DaHVua0FuZFRva2VucyhjaHVuaywgdG9rZW5zKTtcblxuICAgICAgZGVidWdnZXJcbiAgICB9KTtcbiAgfVxuXG4gIHNlcmlhbGlzZShmaWxlUGF0aCA9IERFRkFVTFRfTU9ERUxfRklMRV9QQVRIKSB7XG4gICAgY29uc3QganNvbiA9IHRoaXMuYXNKU09OKCksXG4gICAgICAgICAganNvblN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGpzb24pLFxuICAgICAgICAgIGNvbnRlbnQgPSBqc29uU3RyaW5nOyAvLy9cblxuICAgIHdyaXRlRmlsZShmaWxlUGF0aCwgY29udGVudCk7XG4gIH1cblxuICBhc0pTT04oKSB7XG4gICAgY29uc3Qgdm9jYWJ1bGFyeUpTT04gPSB0aGlzLnZvY2FidWxhcnkuYXNKU09OKCksXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IHZvY2FidWxhcnlKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZvY2FidWxhcnlcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgbW9kZWwgPSBuZXcgTU9kZWwodm9jYWJ1bGFyeSk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgVm9jYWJ1bGFyeSksXG4gICAgICAgICAgbW9kZWwgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKE1vZGVsLCBwcm9wZXJ0aWVzLCB2b2NhYnVsYXJ5LCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgbW9kZWwuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTW9kZWwiLCJ3cml0ZUZpbGUiLCJmaWxlU3lzdGVtVXRpbGl0aWVzIiwidm9jYWJ1bGFyeSIsImdldFZvY2FidWxhcnkiLCJpbml0aWFsaXNlIiwiRXhjZXB0aW9uIiwidHJhaW4iLCJjb3JwdXMiLCJjaHVua3MiLCJnZXRDaHVua3MiLCJmb3JFYWNoIiwiY2h1bmsiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJvbmVIb3RWZWN0b3JzIiwib25lSG90VmVjdG9yc0Zyb21DaHVua0FuZFRva2VucyIsInNlcmlhbGlzZSIsImZpbGVQYXRoIiwiREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgiLCJqc29uIiwiYXNKU09OIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50Iiwidm9jYWJ1bGFyeUpTT04iLCJmcm9tSlNPTiIsInZvY2FidWxhcnlGcm9tSlNPTiIsIm1vZGVsIiwiTU9kZWwiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsIlZvY2FidWxhcnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBY3FCQTs7O29CQVplOzhEQUVoQjtpRUFDRztvQkFFWTt3QkFDSzt3QkFDQzt3QkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhELElBQU0sQUFBRUMsWUFBY0MseUJBQW1CLENBQWpDRDtBQUVPLElBQUEsQUFBTUQsc0JBQU47Y0FBTUE7YUFBQUEsTUFDUEcsVUFBVTtnQ0FESEg7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtHLFVBQVUsR0FBR0E7OztrQkFKREg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxJQUFJLENBQUNGLFVBQVUsS0FBSyxNQUFNO29CQUM1QixNQUFNRyxVQUFVO2dCQUNsQjtnQkFFQSxJQUFJLENBQUNILFVBQVUsQ0FBQ0UsVUFBVTtZQUM1Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNOztnQkFDVixJQUFNQyxTQUFTRCxPQUFPRSxTQUFTO2dCQUUvQkQsT0FBT0UsT0FBTyxDQUFDLFNBQUNDO29CQUNkLElBQU1DLFNBQVMsTUFBS1YsVUFBVSxDQUFDVyxTQUFTLElBQ2xDQyxnQkFBZ0JDLElBQUFBLHlDQUErQixFQUFDSixPQUFPQztvQkFFN0QsUUFBUTtnQkFDVjtZQUNGOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO29CQUFVQyxXQUFBQSxpRUFBV0MsaUNBQXVCO2dCQUMxQyxJQUFNQyxPQUFPLElBQUksQ0FBQ0MsTUFBTSxJQUNsQkMsYUFBYUMsS0FBS0MsU0FBUyxDQUFDSixPQUM1QkssVUFBVUgsWUFBWSxHQUFHO2dCQUUvQnJCLFVBQVVpQixVQUFVTztZQUN0Qjs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSyxpQkFBaUIsSUFBSSxDQUFDdkIsVUFBVSxDQUFDa0IsTUFBTSxJQUN2Q2xCLGFBQWF1QixnQkFDYk4sT0FBTztvQkFDTGpCLFlBQUFBO2dCQUNGO2dCQUVOLE9BQU9pQjtZQUNUOzs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNQLElBQUk7Z0JBQ2xCLElBQU1qQixhQUFheUIsSUFBQUEsd0JBQWtCLEVBQUNSLE9BQ2hDUyxRQUFRLElBQUlDLE1BQU0zQjtnQkFFeEIsT0FBTzBCO1lBQ1Q7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxlQUFlQyxVQUFVO2dCQUFFLElBQUEsSUFBQSxPQUFBLFVBQUEsUUFBQSxBQUFHQyxxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBR3ZDQztnQkFGZCxJQUFNLEFBQUVDLGdCQUFrQkgsV0FBbEJHLGVBQ0ZoQyxhQUFhaUMsSUFBQUEsa0NBQXdCLEVBQUNELGVBQWVFLG1CQUFVLEdBQy9EUixRQUFRSyxDQUFBQSxXQUFBQSxnQkFBTyxFQUFDSCxjQUFjLE9BQXRCRyxVQUFBQTtvQkExREdsQztvQkEwRDJCZ0M7b0JBQVk3QjtpQkFBa0MsQ0FBNUUrQixPQUFzRCxxQkFBR0Q7Z0JBRXZFSixNQUFNeEIsVUFBVTtnQkFFaEIsT0FBT3dCO1lBQ1Q7OztXQS9EbUI3QjtxQkFBY2tDLGdCQUFPIn0=