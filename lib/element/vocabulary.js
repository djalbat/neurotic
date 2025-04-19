"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Vocabulary;
    }
});
var _main = require("necessary/lib/main");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _constants = require("../constants");
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
var readFile = _main.fileSystemUtilities.readFile;
var Vocabulary = /*#__PURE__*/ function(Element) {
    _inherits(Vocabulary, Element);
    function Vocabulary(tokens, filePath) {
        _class_call_check(this, Vocabulary);
        var _this;
        _this = _call_super(this, Vocabulary);
        _this.tokens = tokens;
        _this.filePath = filePath;
        return _this;
    }
    _create_class(Vocabulary, [
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                if (this.tokens !== null) {
                    return;
                }
                var content = readFile(this.filePath);
                this.tokens = content.split(_constants.CARRIAGE_RETURN);
            }
        },
        {
            key: "asJSON",
            value: function asJSON() {
                var tokens = this.tokens, json = {
                    tokens: tokens
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJJSON",
            value: function fromJJSON(json) {
                var tokens = json.tokens, vocabulary = new Vocabulary(tokens);
                return vocabulary;
            }
        },
        {
            key: "fromProperties",
            value: function fromProperties(properties) {
                for(var _len = arguments.length, remainingArguments = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    remainingArguments[_key - 1] = arguments[_key];
                }
                var _Element;
                var _properties_tokens = properties.tokens, tokens = _properties_tokens === void 0 ? _defaults.DEFAULT_VOCABULARY_TOKENS : _properties_tokens, _properties_filePath = properties.filePath, filePath = _properties_filePath === void 0 ? _defaults.DEFAULT_VOCABULARY_FILE_PATH : _properties_filePath, vocabulary = (_Element = _element.default).fromProperties.apply(_Element, [
                    Vocabulary,
                    properties,
                    tokens,
                    filePath
                ].concat(_to_consumable_array(remainingArguments)));
                return vocabulary;
            }
        }
    ]);
    return Vocabulary;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZvY2FidWxhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5L2xpYi9tYWluXCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IENBUlJJQUdFX1JFVFVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfVk9DQUJVTEFSWV9UT0tFTlMsIERFRkFVTFRfVk9DQUJVTEFSWV9GSUxFX1BBVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9jYWJ1bGFyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKHRoaXMuZmlsZVBhdGgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBjb250ZW50LnNwbGl0KENBUlJJQUdFX1JFVFVSTik7XG4gIH1cblxuICBhc0pTT04oKSB7XG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy50b2tlbnMsXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRva2Vuc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSkpTT04oanNvbikge1xuICAgIGNvbnN0IHsgdG9rZW5zIH0gPSBqc29uLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBuZXcgVm9jYWJ1bGFyeSh0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHZvY2FidWxhcnk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyB0b2tlbnMgPSBERUZBVUxUX1ZPQ0FCVUxBUllfVE9LRU5TLCBmaWxlUGF0aCA9IERFRkFVTFRfVk9DQUJVTEFSWV9GSUxFX1BBVEggfSA9IHByb3BlcnRpZXMsXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoVm9jYWJ1bGFyeSwgcHJvcGVydGllcywgdG9rZW5zLCBmaWxlUGF0aCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiB2b2NhYnVsYXJ5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiVm9jYWJ1bGFyeSIsInJlYWRGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInRva2VucyIsImZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0RmlsZVBhdGgiLCJpbml0aWFsaXNlIiwiY29udGVudCIsInNwbGl0IiwiQ0FSUklBR0VfUkVUVVJOIiwiYXNKU09OIiwianNvbiIsImZyb21KSlNPTiIsInZvY2FidWxhcnkiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiREVGQVVMVF9WT0NBQlVMQVJZX1RPS0VOUyIsIkRFRkFVTFRfVk9DQUJVTEFSWV9GSUxFX1BBVEgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7O29CQVRlOzhEQUVoQjt5QkFFWTt3QkFDd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4RSxJQUFNLEFBQUVDLFdBQWFDLHlCQUFtQixDQUFoQ0Q7QUFFTyxJQUFBLEFBQU1ELDJCQUFOO2NBQU1BO2FBQUFBLFdBQ1BHLE1BQU0sRUFBRUMsUUFBUTtnQ0FEVEo7O2dCQUVqQixrQkFGaUJBO1FBSWpCLE1BQUtHLE1BQU0sR0FBR0E7UUFDZCxNQUFLQyxRQUFRLEdBQUdBOzs7a0JBTENKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksSUFBSSxDQUFDSixNQUFNLEtBQUssTUFBTTtvQkFDeEI7Z0JBQ0Y7Z0JBRUEsSUFBTUssVUFBVVAsU0FBUyxJQUFJLENBQUNHLFFBQVE7Z0JBRXRDLElBQUksQ0FBQ0QsTUFBTSxHQUFHSyxRQUFRQyxLQUFLLENBQUNDLDBCQUFlO1lBQzdDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1SLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCUyxPQUFPO29CQUNMVCxRQUFBQTtnQkFDRjtnQkFFTixPQUFPUztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVELElBQUk7Z0JBQ25CLElBQU0sQUFBRVQsU0FBV1MsS0FBWFQsUUFDRlcsYUFBYSxJQXJDRmQsV0FxQ2lCRztnQkFFbEMsT0FBT1c7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFFbENDO2dCQURuQix5QkFBd0ZGLFdBQWhGYixRQUFBQSx5Q0FBU2dCLG1DQUF5Qiw4Q0FBOENILFdBQTVDWixVQUFBQSw2Q0FBV2dCLHNDQUE0Qix5QkFDN0VOLGFBQWFJLENBQUFBLFdBQUFBLGdCQUFPLEVBQUNILGNBQWMsT0FBdEJHLFVBQUFBO29CQTVDRmxCO29CQTRDcUNnQjtvQkFBWWI7b0JBQVFDO2lCQUFnQyxDQUF2RmMsT0FBaUUscUJBQUdEO2dCQUV2RixPQUFPSDtZQUNUOzs7V0EvQ21CZDtxQkFBbUJrQixnQkFBTyJ9