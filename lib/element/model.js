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
                    chunk.forEachPair(function(pair) {
                        _this.weights.train(pair, _this.vocabulary);
                    });
                });
            }
        },
        {
            key: "infer",
            value: function infer(token, length) {
                var cutoff = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_CUTOFF, threshold = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : _defaults.DEFAULT_THRESHOLD;
                var tokens = [];
                for(var count = 0; count < length; count++){
                    token = this.forward(token, cutoff, threshold);
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
                var cutoff = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_CUTOFF, threshold = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _defaults.DEFAULT_THRESHOLD;
                var oneHotVector = _oneHot.default.fromTokenAndVocabulary(token, this.vocabulary), probabilitiesVector = this.weights.forward(oneHotVector), index = probabilitiesVector.predictIndex(cutoff, threshold);
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
function meanOfMatrices(matrices) {
    var firstMatrix = (0, _array.first)(matrices), rows = firstMatrix.getRows(), columns = firstMatrix.getColumns();
    var totalMatrix = _matrix.default.fromRowsAndColumns(rows, columns);
    matrices.forEach(function(matrix) {
        totalMatrix = totalMatrix.addMatrix(matrix);
    });
    var length = matrices.length, meanMatrix = totalMatrix.divideByScalar(length);
    return meanMatrix;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L21vZGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaWxlU3lzdGVtVXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTWF0cml4IGZyb20gXCIuLi9tYXRyaXhcIjtcbmltcG9ydCBXZWlnaHRzIGZyb20gXCIuL3dlaWdodHNcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgVm9jYWJ1bGFyeSBmcm9tIFwiLi92b2NhYnVsYXJ5XCI7XG5pbXBvcnQgT25lSG90VmVjdG9yIGZyb20gXCIuLi92ZWN0b3Ivb25lSG90XCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgZWxlbWVudEZyb21DaGlsZEVsZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB3ZWlnaHRzRnJvbUpTT04sIHZvY2FidWxhcnlGcm9tSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgREVGQVVMVF9DVVRPRkYsXG4gICAgICAgICBERUZBVUxUX1RIUkVTSE9MRCxcbiAgICAgICAgIERFRkFVTFRfTU9ERUxfRklMRV9QQVRIIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmNvbnN0IHsgd3JpdGVGaWxlIH0gPSBmaWxlU3lzdGVtVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RlbCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzLCBjaGlsZEVsZW1lbnRzLCB2b2NhYnVsYXJ5LCB3ZWlnaHRzKSB7XG4gICAgc3VwZXIocHJvcGVydGllcywgY2hpbGRFbGVtZW50cyk7XG5cbiAgICB0aGlzLnZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5O1xuICAgIHRoaXMud2VpZ2h0cyA9IHdlaWdodHM7XG4gIH1cblxuICBnZXRWb2NhYnVsYXJ5KCkge1xuICAgIHJldHVybiB0aGlzLnZvY2FidWxhcnk7XG4gIH1cblxuICBnZXRXZWlnaHRzKCkge1xuICAgIHJldHVybiB0aGlzLndlaWdodHM7XG4gIH1cblxuICB0cmFpbihjb3JwdXMpIHtcbiAgICBjb3JwdXMuZm9yRWFjaENodW5rKChjaHVuaykgPT4ge1xuICAgICAgY2h1bmsuZm9yRWFjaFBhaXIoKHBhaXIpID0+IHtcbiAgICAgICAgdGhpcy53ZWlnaHRzLnRyYWluKHBhaXIsIHRoaXMudm9jYWJ1bGFyeSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluZmVyKHRva2VuLCBsZW5ndGgsIGN1dG9mZiA9IERFRkFVTFRfQ1VUT0ZGLCB0aHJlc2hvbGQgPSBERUZBVUxUX1RIUkVTSE9MRCkge1xuICAgIGNvbnN0IHRva2VucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IGxlbmd0aDsgY291bnQrKykge1xuICAgICAgdG9rZW4gPSB0aGlzLmZvcndhcmQodG9rZW4sIGN1dG9mZiwgdGhyZXNob2xkKTtcblxuICAgICAgaWYgKHRva2VuID09PSBudWxsKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB0b2tlbnMucHVzaCh0b2tlbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGZvcndhcmQodG9rZW4sIGN1dG9mZiA9IERFRkFVTFRfQ1VUT0ZGLCB0aHJlc2hvbGQgPSBERUZBVUxUX1RIUkVTSE9MRCkge1xuICAgIGNvbnN0IG9uZUhvdFZlY3RvciA9IE9uZUhvdFZlY3Rvci5mcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB0aGlzLnZvY2FidWxhcnkpLFxuICAgICAgICAgIHByb2JhYmlsaXRpZXNWZWN0b3IgPSB0aGlzLndlaWdodHMuZm9yd2FyZChvbmVIb3RWZWN0b3IpLFxuICAgICAgICAgIGluZGV4ID0gcHJvYmFiaWxpdGllc1ZlY3Rvci5wcmVkaWN0SW5kZXgoY3V0b2ZmLCB0aHJlc2hvbGQpO1xuXG4gICAgdG9rZW4gPSAoaW5kZXggIT09IG51bGwpID9cbiAgICAgICAgICAgICAgdGhpcy52b2NhYnVsYXJ5LmdldFRva2VuQXQoaW5kZXgpIDpcbiAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgcmV0dXJuIHRva2VuO1xuICB9XG5cbiAgc2VyaWFsaXNlKGZpbGVQYXRoID0gREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy50b0pTT04oKSxcbiAgICAgICAgICBqc29uU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoanNvbiksXG4gICAgICAgICAgY29udGVudCA9IGpzb25TdHJpbmc7IC8vL1xuXG4gICAgd3JpdGVGaWxlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy52b2NhYnVsYXJ5LmluaXRpYWxpc2UoKTtcbiAgICBcbiAgICBjb25zdCBzaXplID0gdGhpcy52b2NhYnVsYXJ5LmdldFNpemUoKTtcblxuICAgIHRoaXMud2VpZ2h0cy5pbml0aWFsaXNlKHNpemUpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHZvY2FidWxhcnlKU09OID0gdGhpcy52b2NhYnVsYXJ5LnRvSlNPTigpLFxuICAgICAgICAgIHdlaWdodHNKU09OID0gdGhpcy53ZWlnaHRzLnRvSlNPTigpLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSB2b2NhYnVsYXJ5SlNPTiwgIC8vL1xuICAgICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHZvY2FidWxhcnksXG4gICAgICAgICAgICB3ZWlnaHRzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24pIHtcbiAgICBjb25zdCB2b2NhYnVsYXJ5ID0gdm9jYWJ1bGFyeUZyb21KU09OKGpzb24pLFxuICAgICAgICAgIHdlaWdodHMgPSB3ZWlnaHRzRnJvbUpTT04oanNvbiksXG4gICAgICAgICAgbW9kZWwgPSBuZXcgTU9kZWwodm9jYWJ1bGFyeSwgd2VpZ2h0cyk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcywgLi4ucmVtYWluaW5nQXJndW1lbnRzKSB7XG4gICAgY29uc3QgeyBjaGlsZEVsZW1lbnRzIH0gPSBwcm9wZXJ0aWVzLFxuICAgICAgICAgIHZvY2FidWxhcnkgPSBlbGVtZW50RnJvbUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cywgVm9jYWJ1bGFyeSksXG4gICAgICAgICAgd2VpZ2h0cyA9IGVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzLCBXZWlnaHRzKSxcbiAgICAgICAgICBtb2RlbCA9IEVsZW1lbnQuZnJvbVByb3BlcnRpZXMoTW9kZWwsIHByb3BlcnRpZXMsIHZvY2FidWxhcnksIHdlaWdodHMsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cyk7XG5cbiAgICBtb2RlbC5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVhbk9mTWF0cmljZXMobWF0cmljZXMpIHtcbiAgY29uc3QgZmlyc3RNYXRyaXggPSBmaXJzdChtYXRyaWNlcyksXG4gICAgICAgIHJvd3MgPSBmaXJzdE1hdHJpeC5nZXRSb3dzKCksXG4gICAgICAgIGNvbHVtbnMgPSBmaXJzdE1hdHJpeC5nZXRDb2x1bW5zKCk7XG5cbiAgbGV0IHRvdGFsTWF0cml4ID0gTWF0cml4LmZyb21Sb3dzQW5kQ29sdW1ucyhyb3dzLCBjb2x1bW5zKTtcblxuICBtYXRyaWNlcy5mb3JFYWNoKChtYXRyaXgpID0+IHtcbiAgICB0b3RhbE1hdHJpeCA9IHRvdGFsTWF0cml4LmFkZE1hdHJpeChtYXRyaXgpO1xuICB9KTtcblxuICBjb25zdCBsZW5ndGggPSBtYXRyaWNlcy5sZW5ndGgsXG4gICAgICAgIG1lYW5NYXRyaXggPSB0b3RhbE1hdHJpeC5kaXZpZGVCeVNjYWxhcihsZW5ndGgpO1xuXG4gIHJldHVybiBtZWFuTWF0cml4O1xufVxuIl0sIm5hbWVzIjpbIk1vZGVsIiwid3JpdGVGaWxlIiwiZmlsZVN5c3RlbVV0aWxpdGllcyIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwidm9jYWJ1bGFyeSIsIndlaWdodHMiLCJnZXRWb2NhYnVsYXJ5IiwiZ2V0V2VpZ2h0cyIsInRyYWluIiwiY29ycHVzIiwiZm9yRWFjaENodW5rIiwiY2h1bmsiLCJmb3JFYWNoUGFpciIsInBhaXIiLCJpbmZlciIsInRva2VuIiwibGVuZ3RoIiwiY3V0b2ZmIiwiREVGQVVMVF9DVVRPRkYiLCJ0aHJlc2hvbGQiLCJERUZBVUxUX1RIUkVTSE9MRCIsInRva2VucyIsImNvdW50IiwiZm9yd2FyZCIsInB1c2giLCJvbmVIb3RWZWN0b3IiLCJPbmVIb3RWZWN0b3IiLCJmcm9tVG9rZW5BbmRWb2NhYnVsYXJ5IiwicHJvYmFiaWxpdGllc1ZlY3RvciIsImluZGV4IiwicHJlZGljdEluZGV4IiwiZ2V0VG9rZW5BdCIsInNlcmlhbGlzZSIsImZpbGVQYXRoIiwiREVGQVVMVF9NT0RFTF9GSUxFX1BBVEgiLCJqc29uIiwidG9KU09OIiwianNvblN0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb250ZW50IiwiaW5pdGlhbGlzZSIsInNpemUiLCJnZXRTaXplIiwidm9jYWJ1bGFyeUpTT04iLCJ3ZWlnaHRzSlNPTiIsImZyb21KU09OIiwidm9jYWJ1bGFyeUZyb21KU09OIiwid2VpZ2h0c0Zyb21KU09OIiwibW9kZWwiLCJNT2RlbCIsImZyb21Qcm9wZXJ0aWVzIiwicmVtYWluaW5nQXJndW1lbnRzIiwiRWxlbWVudCIsImVsZW1lbnRGcm9tQ2hpbGRFbGVtZW50cyIsIlZvY2FidWxhcnkiLCJXZWlnaHRzIiwibWVhbk9mTWF0cmljZXMiLCJtYXRyaWNlcyIsImZpcnN0TWF0cml4IiwiZmlyc3QiLCJyb3dzIiwiZ2V0Um93cyIsImNvbHVtbnMiLCJnZXRDb2x1bW5zIiwidG90YWxNYXRyaXgiLCJNYXRyaXgiLCJmcm9tUm93c0FuZENvbHVtbnMiLCJmb3JFYWNoIiwibWF0cml4IiwiYWRkTWF0cml4IiwibWVhbk1hdHJpeCIsImRpdmlkZUJ5U2NhbGFyIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7eUJBakJlOzZEQUVqQjs4REFDQzs4REFDQTtpRUFDRzs2REFDRTtxQkFFSDt3QkFDbUI7b0JBQ1c7d0JBR1o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QyxJQUFNLEFBQUVDLFlBQWNDLDhCQUFtQixDQUFqQ0Q7QUFFTyxJQUFBLEFBQU1ELHNCQUFOO2NBQU1BO2FBQUFBLE1BQ1BHLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0NBRHZDTjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEc7WUFBWUM7O1FBRWxCLE1BQUtDLFVBQVUsR0FBR0E7UUFDbEIsTUFBS0MsT0FBTyxHQUFHQTs7O2tCQUxFTjs7WUFRbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsVUFBVTtZQUN4Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsT0FBTztZQUNyQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxNQUFNOztnQkFDVkEsT0FBT0MsWUFBWSxDQUFDLFNBQUNDO29CQUNuQkEsTUFBTUMsV0FBVyxDQUFDLFNBQUNDO3dCQUNqQixNQUFLUixPQUFPLENBQUNHLEtBQUssQ0FBQ0ssTUFBTSxNQUFLVCxVQUFVO29CQUMxQztnQkFDRjtZQUNGOzs7WUFF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