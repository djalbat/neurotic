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
var _constants = require("../constants");
var _registry = require("../registry");
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
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function(Element) {
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
            key: "getSize",
            value: function getSize() {
                var tokensLength = this.tokens.length, size = tokensLength; ///
                return size;
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
            key: "indexOfToken",
            value: function indexOfToken(token) {
                var index = this.tokens.indexOf(token);
                return index;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
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
}(_wrap_native_super(_element.default)));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZvY2FidWxhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5L2xpYi9tYWluXCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IENBUlJJQUdFX1JFVFVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJlZ2lzdHJ5QXNzaWduZWQgfSBmcm9tIFwiLi4vcmVnaXN0cnlcIjtcbmltcG9ydCB7IERFRkFVTFRfVk9DQUJVTEFSWV9UT0tFTlMsIERFRkFVTFRfVk9DQUJVTEFSWV9GSUxFX1BBVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0cnlBc3NpZ25lZChjbGFzcyBWb2NhYnVsYXJ5IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRva2VucywgZmlsZVBhdGgpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0U2l6ZSgpIHtcbiAgICBjb25zdCB0b2tlbnNMZW5ndGggPSB0aGlzLnRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgc2l6ZSA9IHRva2Vuc0xlbmd0aDsgIC8vL1xuXG4gICAgcmV0dXJuIHNpemU7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGlmICh0aGlzLnRva2VucyAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRlbnQgPSByZWFkRmlsZSh0aGlzLmZpbGVQYXRoKTtcblxuICAgIHRoaXMudG9rZW5zID0gY29udGVudC5zcGxpdChDQVJSSUFHRV9SRVRVUk4pO1xuICB9XG5cbiAgaW5kZXhPZlRva2VuKHRva2VuKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRva2Vucy5pbmRleE9mKHRva2VuKTtcblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0b2tlbnMgPSB0aGlzLnRva2VucyxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdG9rZW5zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KSlNPTihqc29uKSB7XG4gICAgY29uc3QgeyB0b2tlbnMgfSA9IGpzb24sXG4gICAgICAgICAgdm9jYWJ1bGFyeSA9IG5ldyBWb2NhYnVsYXJ5KHRva2Vucyk7XG5cbiAgICByZXR1cm4gdm9jYWJ1bGFyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCB7IHRva2VucyA9IERFRkFVTFRfVk9DQUJVTEFSWV9UT0tFTlMsIGZpbGVQYXRoID0gREVGQVVMVF9WT0NBQlVMQVJZX0ZJTEVfUEFUSCB9ID0gcHJvcGVydGllcyxcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gRWxlbWVudC5mcm9tUHJvcGVydGllcyhWb2NhYnVsYXJ5LCBwcm9wZXJ0aWVzLCB0b2tlbnMsIGZpbGVQYXRoLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHZvY2FidWxhcnk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInJlYWRGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInJlZ2lzdHJ5QXNzaWduZWQiLCJWb2NhYnVsYXJ5IiwidG9rZW5zIiwiZmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXRGaWxlUGF0aCIsImdldFNpemUiLCJ0b2tlbnNMZW5ndGgiLCJsZW5ndGgiLCJzaXplIiwiaW5pdGlhbGlzZSIsImNvbnRlbnQiLCJzcGxpdCIsIkNBUlJJQUdFX1JFVFVSTiIsImluZGV4T2ZUb2tlbiIsInRva2VuIiwiaW5kZXgiLCJpbmRleE9mIiwidG9KU09OIiwianNvbiIsImZyb21KSlNPTiIsInZvY2FidWxhcnkiLCJmcm9tUHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJyZW1haW5pbmdBcmd1bWVudHMiLCJFbGVtZW50IiwiREVGQVVMVF9WT0NBQlVMQVJZX1RPS0VOUyIsIkRFRkFVTFRfVk9DQUJVTEFSWV9GSUxFX1BBVEgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O29CQVZvQzs4REFFaEI7eUJBRVk7d0JBQ0M7d0JBQ3VDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsSUFBTSxBQUFFQSxXQUFhQyx5QkFBbUIsQ0FBaENEO0lBRVIsV0FBZUUsSUFBQUEsMEJBQWdCLGdCQUFDOzthQUFNQyxXQUN4QkMsTUFBTSxFQUFFQyxRQUFRO2dDQURRRjs7Z0JBRWxDLGtCQUZrQ0E7UUFJbEMsTUFBS0MsTUFBTSxHQUFHQTtRQUNkLE1BQUtDLFFBQVEsR0FBR0E7Ozs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE1BQU07WUFDcEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZUFBZSxJQUFJLENBQUNMLE1BQU0sQ0FBQ00sTUFBTSxFQUNqQ0MsT0FBT0YsY0FBZSxHQUFHO2dCQUUvQixPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksSUFBSSxDQUFDUixNQUFNLEtBQUssTUFBTTtvQkFDeEI7Z0JBQ0Y7Z0JBRUEsSUFBTVMsVUFBVWIsU0FBUyxJQUFJLENBQUNLLFFBQVE7Z0JBRXRDLElBQUksQ0FBQ0QsTUFBTSxHQUFHUyxRQUFRQyxLQUFLLENBQUNDLDBCQUFlO1lBQzdDOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLEtBQUs7Z0JBQ2hCLElBQU1DLFFBQVEsSUFBSSxDQUFDZCxNQUFNLENBQUNlLE9BQU8sQ0FBQ0Y7Z0JBRWxDLE9BQU9DO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTWhCLFNBQVMsSUFBSSxDQUFDQSxNQUFNLEVBQ3BCaUIsT0FBTztvQkFDTGpCLFFBQUFBO2dCQUNGO2dCQUVOLE9BQU9pQjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFVBQVVELElBQUk7Z0JBQ25CLElBQU0sQUFBRWpCLFNBQVdpQixLQUFYakIsUUFDRm1CLGFBQWEsSUFBSXBCLFdBQVdDO2dCQUVsQyxPQUFPbUI7WUFDVDs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLGVBQWVDLFVBQVU7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLHFCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO29CQUFHQSxtQkFBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQXFCOztvQkFFbENDO2dCQURuQix5QkFBd0ZGLFdBQWhGckIsUUFBQUEseUNBQVN3QixtQ0FBeUIsOENBQThDSCxXQUE1Q3BCLFVBQUFBLDZDQUFXd0Isc0NBQTRCLHlCQUM3RU4sYUFBYUksQ0FBQUEsV0FBQUEsZ0JBQU8sRUFBQ0gsY0FBYyxPQUF0QkcsVUFBQUE7b0JBQXVCeEI7b0JBQVlzQjtvQkFBWXJCO29CQUFRQztpQkFBZ0MsQ0FBdkZzQixPQUFpRSxxQkFBR0Q7Z0JBRXZGLE9BQU9IO1lBQ1Q7Ozs7cUJBNUR1REksZ0JBQU8ifQ==