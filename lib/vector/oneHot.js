"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return OneHotVector;
    }
});
var _vector = /*#__PURE__*/ _interop_require_default(require("../vector"));
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var OneHotVector = /*#__PURE__*/ function(Vector) {
    _inherits(OneHotVector, Vector);
    function OneHotVector() {
        _class_call_check(this, OneHotVector);
        return _call_super(this, OneHotVector, arguments);
    }
    _create_class(OneHotVector, [
        {
            key: "argmax",
            value: function argmax() {
                var elements = this.getElements(), argmax = elements.findIndex(function(element) {
                    if (element === 1) {
                        return true;
                    }
                });
                return argmax;
            }
        }
    ], [
        {
            key: "fromTokenAndVocabulary",
            value: function fromTokenAndVocabulary(token, vocabulary) {
                var size = vocabulary.getSize(), index = vocabulary.indexOfToken(token), elements = [];
                for(var count = 0; count < size; count++){
                    var element = count === index ? 1 : 0;
                    elements.push(element);
                }
                var oneHotVector = new OneHotVector(elements);
                return oneHotVector;
            }
        }
    ]);
    return OneHotVector;
}(_vector.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3Ivb25lSG90LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lSG90VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcbiAgYXJnbWF4KCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5nZXRFbGVtZW50cygpLFxuICAgICAgICAgIGFyZ21heCA9IGVsZW1lbnRzLmZpbmRJbmRleCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09IDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gYXJnbWF4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbkFuZFZvY2FidWxhcnkodG9rZW4sIHZvY2FidWxhcnkpIHtcbiAgICBjb25zdCBzaXplID0gdm9jYWJ1bGFyeS5nZXRTaXplKCksXG4gICAgICAgICAgaW5kZXggPSB2b2NhYnVsYXJ5LmluZGV4T2ZUb2tlbih0b2tlbiksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBzaXplOyBjb3VudCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gKGNvdW50ID09PSBpbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25lSG90VmVjdG9yID0gbmV3IE9uZUhvdFZlY3RvcihlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gb25lSG90VmVjdG9yO1xuICB9XG59XG4iXSwibmFtZXMiOlsiT25lSG90VmVjdG9yIiwiYXJnbWF4IiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsImZpbmRJbmRleCIsImVsZW1lbnQiLCJmcm9tVG9rZW5BbmRWb2NhYnVsYXJ5IiwidG9rZW4iLCJ2b2NhYnVsYXJ5Iiwic2l6ZSIsImdldFNpemUiLCJpbmRleCIsImluZGV4T2ZUb2tlbiIsImNvdW50IiwicHVzaCIsIm9uZUhvdFZlY3RvciIsIlZlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NkRBRkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCRixTQUFTQyxTQUFTRSxTQUFTLENBQUMsU0FBQ0M7b0JBQzNCLElBQUlBLFlBQVksR0FBRzt3QkFDakIsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixPQUFPSjtZQUNUOzs7O1lBRU9LLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsS0FBSyxFQUFFQyxVQUFVO2dCQUM3QyxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCQyxRQUFRSCxXQUFXSSxZQUFZLENBQUNMLFFBQ2hDTCxXQUFXLEVBQUU7Z0JBRW5CLElBQUssSUFBSVcsUUFBUSxHQUFHQSxRQUFRSixNQUFNSSxRQUFTO29CQUN6QyxJQUFNUixVQUFVLEFBQUNRLFVBQVVGLFFBQ1QsSUFDRTtvQkFFcEJULFNBQVNZLElBQUksQ0FBQ1Q7Z0JBQ2hCO2dCQUVBLElBQU1VLGVBQWUsSUF6QkpmLGFBeUJxQkU7Z0JBRXRDLE9BQU9hO1lBQ1Q7OztXQTVCbUJmO0VBQXFCZ0IsZUFBTSJ9