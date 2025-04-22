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
var _array = require("../utilities/array");
var _defaults = require("../defaults");
var _element1 = require("../utilities/element");
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
var writeFile = _necessary.fileSystemUtilities.writeFile;
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
            key: "train",
            value: function train(corpus) {
                var _this = this;
                corpus.forEachChunk(function(chunk) {
                    chunk.forEachTransition(function(transition) {
                        _this.weights.train(transition, _this.vocabulary);
                    });
                });
            }
        },
        {
            key: "infer",
            value: function infer(token, length) {
                var tokens = [];
                for(var count = 0; count < length; count++){
                    token = this.forward(token);
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
                var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, this.vocabulary), probabilityVector = this.weights.forward(oneHotVector), index = probabilityVector.predictIndex();
                token = index !== null ? this.vocabulary.getTokenAt(index) : null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWF0cml4IGZyb20gXCIuLi9tYXRyaXhcIjtcbmltcG9ydCBXZWlnaHRzIGZyb20gXCIuL3dlaWdodHNcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVm9jYWJ1bGFyeSBmcm9tIFwiLi92b2NhYnVsYXJ5XCI7XG5pbXBvcnQgT25lSG90VmVjdG9yIGZyb20gXCIuLi92ZWN0b3Ivb25lSG90XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgREVGQVVMVF9NT0RFTF9GSUxFX1BBVEggfSBmcm9tIFwiLi4vZGVmYXVsdHNcIjtcbmltcG9ydCB7IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgd2VpZ2h0c0Zyb21KU09OLCB2b2NhYnVsYXJ5RnJvbUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyB3cml0ZUZpbGUgfSA9IGZpbGVTeXN0ZW1VdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMsIGNoaWxkRWxlbWVudHMsIHZvY2FidWxhcnksIHdlaWdodHMpIHtcbiAgICBzdXBlcihwcm9wZXJ0aWVzLCBjaGlsZEVsZW1lbnRzKTtcblxuICAgIHRoaXMudm9jYWJ1bGFyeSA9IHZvY2FidWxhcnk7XG4gICAgdGhpcy53ZWlnaHRzID0gd2VpZ2h0cztcbiAgfVxuXG4gIGdldFZvY2FidWxhcnkoKSB7XG4gICAgcmV0dXJuIHRoaXMudm9jYWJ1bGFyeTtcbiAgfVxuXG4gIGdldFdlaWdodHMoKSB7XG4gICAgcmV0dXJuIHRoaXMud2VpZ2h0cztcbiAgfVxuXG4gIHRyYWluKGNvcnB1cykge1xuICAgIGNvcnB1cy5mb3JFYWNoQ2h1bmsoKGNodW5rKSA9PiB7XG4gICAgICBjaHVuay5mb3JFYWNoVHJhbnNpdGlvbigodHJhbnNpdGlvbikgPT4ge1xuICAgICAgICB0aGlzLndlaWdodHMudHJhaW4odHJhbnNpdGlvbiwgdGhpcy52b2NhYnVsYXJ5KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5mZXIodG9rZW4sIGxlbmd0aCkge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGxlbmd0aDsgY291bnQrKykge1xuICAgICAgdG9rZW4gPSB0aGlzLmZvcndhcmQodG9rZW4pO1xuXG4gICAgICBpZiAodG9rZW4gPT09IG51bGwpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRva2Vucy5wdXNoKHRva2VuKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW5zO1xuICB9XG5cbiAgZm9yd2FyZCh0b2tlbikge1xuICAgIGNvbnN0IG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgIHByb2JhYmlsaXR5VmVjdG9yID0gdGhpcy53ZWlnaHRzLmZvcndhcmQob25lSG90VmVjdG9yKSxcbiAgICAgICAgICBpbmRleCA9IHByb2JhYmlsaXR5VmVjdG9yLnByZWRpY3RJbmRleCgpO1xuXG4gICAgdG9rZW4gPSAoaW5kZXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgdGhpcy52b2NhYnVsYXJ5LmdldFRva2VuQXQoaW5kZXgpIDpcbiAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc2VyaWFsaXNlKGZpbGVQYXRoID0gREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy50b0pTT04oKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcbiAgICBcbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHZvY2FidWxhcnlKU09OID0gdGhpcy52b2NhYnVsYXJ5LnRvSlNPTigpLFxuICAgICAgICAgIHdlaWdodHNKU09OID0gdGhpcy53ZWlnaHRzLnRvSlNPTigpLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5SlNPTiwgIC8vL1xuICAgICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZvY2FidWxhcnksXG4gICAgICAgICAgICB3ZWlnaHRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgbW9kZWwgPSBuZXcgTU9kZWwodm9jYWJ1bGFyeSwgd2VpZ2h0cyk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgVm9jYWJ1bGFyeSksXG4gICAgICAgICAgd2VpZ2h0cyA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBXZWlnaHRzKSxcbiAgICAgICAgICBtb2RlbCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTW9kZWwsIHByb3BlcnRpZXMsIHZvY2FidWxhcnksIHdlaWdodHMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBtb2RlbC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJNb2RlbCIsIndyaXRlRmlsZSIsImZpbGVTeXN0ZW1VdGlsaXRpZXMiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsInZvY2FidWxhcnkiLCJ3ZWlnaHRzIiwiZ2V0Vm9jYWJ1bGFyeSIsImdldFdlaWdodHMiLCJ0cmFpbiIsImNvcnB1cyIsImZvckVhY2hDaHVuayIsImNodW5rIiwiZm9yRWFjaFRyYW5zaXRpb24iLCJ0cmFuc2l0aW9uIiwiaW5mZXIiLCJ0b2tlbiIsImxlbmd0aCIsInRva2VucyIsImNvdW50IiwiZm9yd2FyZCIsInB1c2giLCJvbmVIb3RWZWN0b3IiLCJPbmVIb3RWZWN0b3IiLCJmcm9tVG9rZW5BbmRWb2NhYnVsYXJ5IiwicHJvYmFiaWxpdHlWZWN0b3IiLCJpbmRleCIsInByZWRpY3RJbmRleCIsImdldFRva2VuQXQiLCJzZXJpYWxpc2UiLCJmaWxlUGF0aCIsIkRFRkFVTFRfTU9ERUxfRklMRV9QQVRIIiwianNvbiIsInRvSlNPTiIsImpzb25TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwiY29udGVudCIsImluaXRpYWxpc2UiLCJzaXplIiwiZ2V0U2l6ZSIsInZvY2FidWxhcnlKU09OIiwid2VpZ2h0c0pTT04iLCJmcm9tSlNPTiIsInZvY2FidWxhcnlGcm9tSlNPTiIsIndlaWdodHNGcm9tSlNPTiIsIm1vZGVsIiwiTU9kZWwiLCJmcm9tUHJvcGVydGllcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsIkVsZW1lbnQiLCJlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMiLCJWb2NhYnVsYXJ5IiwiV2VpZ2h0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFpQnFCQTs7O3lCQWZlOzZEQUVqQjs4REFDQzs4REFDQTtpRUFDRzs2REFDRTtxQkFFSDt3QkFDa0I7d0JBQ0M7b0JBQ1c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRCxJQUFNLEFBQUVDLFlBQWNDLDhCQUFtQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELHNCQUFOO2NBQU1BO2FBQUFBLE1BQ1BHLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0NBRHZDTjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7WUFBWUM7O1FBRWxCLE1BQUtDLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0MsT0FBTyxHQUFHQTs7O2tCQUxFTjs7WUFRbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNOztnQkFDVkEsT0FBT0MsWUFBWSxDQUFDLFNBQUNDO29CQUNuQkEsTUFBTUMsaUJBQWlCLENBQUMsU0FBQ0M7d0JBQ3ZCLE1BQUtSLE9BQU8sQ0FBQ0csS0FBSyxDQUFDSyxZQUFZLE1BQUtULFVB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