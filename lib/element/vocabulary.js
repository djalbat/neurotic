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
    function Vocabulary(properties, childElements, tokens, filePath) {
        _class_call_check(this, Vocabulary);
        var _this;
        _this = _call_super(this, Vocabulary, [
            properties,
            childElements
        ]);
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
            key: "getTokenAt",
            value: function getTokenAt(index) {
                var token = this.tokens[index];
                return token;
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
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3ZvY2FidWxhcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGZpbGVTeXN0ZW1VdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5L2xpYi9tYWluXCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IENBUlJJQUdFX1JFVFVSTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERFRkFVTFRfVk9DQUJVTEFSWV9UT0tFTlMsIERFRkFVTFRfVk9DQUJVTEFSWV9GSUxFX1BBVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcblxuY29uc3QgeyByZWFkRmlsZSB9ID0gZmlsZVN5c3RlbVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVm9jYWJ1bGFyeSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzLCBjaGlsZEVsZW1lbnRzLCB0b2tlbnMsIGZpbGVQYXRoKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRFbGVtZW50cyk7XG5cbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIGNvbnN0IHRva2Vuc0xlbmd0aCA9IHRoaXMudG9rZW5zLmxlbmd0aCxcbiAgICAgICAgICBzaXplID0gdG9rZW5zTGVuZ3RoOyAgLy8vXG5cbiAgICByZXR1cm4gc2l6ZTtcbiAgfVxuXG4gIGdldFRva2VuQXQoaW5kZXgpIHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMudG9rZW5zW2luZGV4XTtcblxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlKHRoaXMuZmlsZVBhdGgpO1xuXG4gICAgdGhpcy50b2tlbnMgPSBjb250ZW50LnNwbGl0KENBUlJJQUdFX1JFVFVSTik7XG4gIH1cblxuICBpbmRleE9mVG9rZW4odG9rZW4pIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudG9rZW5zLmluZGV4T2YodG9rZW4pO1xuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRva2VucyA9IHRoaXMudG9rZW5zLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0b2tlbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpKU09OKGpzb24pIHtcbiAgICBjb25zdCB7IHRva2VucyB9ID0ganNvbixcbiAgICAgICAgICB2b2NhYnVsYXJ5ID0gbmV3IFZvY2FidWxhcnkodG9rZW5zKTtcblxuICAgIHJldHVybiB2b2NhYnVsYXJ5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGNvbnN0IHsgdG9rZW5zID0gREVGQVVMVF9WT0NBQlVMQVJZX1RPS0VOUywgZmlsZVBhdGggPSBERUZBVUxUX1ZPQ0FCVUxBUllfRklMRV9QQVRIIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZvY2FidWxhcnksIHByb3BlcnRpZXMsIHRva2VucywgZmlsZVBhdGgsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICByZXR1cm4gdm9jYWJ1bGFyeTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZvY2FidWxhcnkiLCJyZWFkRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInRva2VucyIsImZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0RmlsZVBhdGgiLCJnZXRTaXplIiwidG9rZW5zTGVuZ3RoIiwibGVuZ3RoIiwic2l6ZSIsImdldFRva2VuQXQiLCJpbmRleCIsInRva2VuIiwiaW5pdGlhbGlzZSIsImNvbnRlbnQiLCJzcGxpdCIsIkNBUlJJQUdFX1JFVFVSTiIsImluZGV4T2ZUb2tlbiIsImluZGV4T2YiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpKU09OIiwidm9jYWJ1bGFyeSIsImZyb21Qcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsIkRFRkFVTFRfVk9DQUJVTEFSWV9UT0tFTlMiLCJERUZBVUxUX1ZPQ0FCVUxBUllfRklMRV9QQVRIIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OztvQkFUZTs4REFFaEI7eUJBRVk7d0JBQ3dDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFeEUsSUFBTSxBQUFFQyxXQUFhQyx5QkFBbUIsQ0FBaENEO0FBRU8sSUFBQSxBQUFNRCwyQkFBTjtjQUFNQTthQUFBQSxXQUNQRyxVQUFVLEVBQUVDLGFBQWEsRUFBRUMsTUFBTSxFQUFFQyxRQUFRO2dDQURwQ047O2dCQUVqQixrQkFGaUJBO1lBRVhHO1lBQVlDOztRQUVsQixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsUUFBUSxHQUFHQTs7O2tCQUxDTjs7WUFRbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxlQUFlLElBQUksQ0FBQ0wsTUFBTSxDQUFDTSxNQUFNLEVBQ2pDQyxPQUFPRixjQUFlLEdBQUc7Z0JBRS9CLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsS0FBSztnQkFDZCxJQUFNQyxRQUFRLElBQUksQ0FBQ1YsTUFBTSxDQUFDUyxNQUFNO2dCQUVoQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUksSUFBSSxDQUFDWCxNQUFNLEtBQUssTUFBTTtvQkFDeEI7Z0JBQ0Y7Z0JBRUEsSUFBTVksVUFBVWhCLFNBQVMsSUFBSSxDQUFDSyxRQUFRO2dCQUV0QyxJQUFJLENBQUNELE1BQU0sR0FBR1ksUUFBUUMsS0FBSyxDQUFDQywwQkFBZTtZQUM3Qzs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhTCxLQUFLO2dCQUNoQixJQUFNRCxRQUFRLElBQUksQ0FBQ1QsTUFBTSxDQUFDZ0IsT0FBTyxDQUFDTjtnQkFFbEMsT0FBT0Q7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNakIsU0FBUyxJQUFJLENBQUNBLE1BQU0sRUFDcEJrQixPQUFPO29CQUNMbEIsUUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2tCO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsVUFBVUQsSUFBSTtnQkFDbkIsSUFBTSxBQUFFbEIsU0FBV2tCLEtBQVhsQixRQUNGb0IsYUFBYSxJQXhERnpCLFdBd0RpQks7Z0JBRWxDLE9BQU9vQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsZUFBZXZCLFVBQVU7Z0JBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUd3QixxQkFBSCxVQUFBLE9BQUEsSUFBQSxPQUFBLFFBQUEsT0FBQSxHQUFBLE9BQUEsTUFBQTtvQkFBR0EsbUJBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFxQjs7b0JBRWxDQztnQkFEbkIseUJBQXdGekIsV0FBaEZFLFFBQUFBLHlDQUFTd0IsbUNBQXlCLDhDQUE4QzFCLFdBQTVDRyxVQUFBQSw2Q0FBV3dCLHNDQUE0Qix5QkFDN0VMLGFBQWFHLENBQUFBLFdBQUFBLGdCQUFPLEVBQUNGLGNBQWMsT0FBdEJFLFVBQUFBO29CQS9ERjVCO29CQStEcUNHO29CQUFZRTtvQkFBUUM7aUJBQWdDLENBQXZGc0IsT0FBaUUscUJBQUdEO2dCQUV2RixPQUFPRjtZQUNUOzs7V0FsRW1CekI7cUJBQW1CNEIsZ0JBQU8ifQ==