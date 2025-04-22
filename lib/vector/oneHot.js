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
    function OneHotVector(elements, index) {
        _class_call_check(this, OneHotVector);
        var _this;
        _this = _call_super(this, OneHotVector, [
            elements
        ]);
        _this.index = index;
        return _this;
    }
    _create_class(OneHotVector, [
        {
            key: "getIndex",
            value: function getIndex() {
                return this.index;
            }
        },
        {
            key: "argmax",
            value: function argmax() {
                var argmax = this.index;
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
                var oneHotVector = new OneHotVector(elements, index);
                return oneHotVector;
            }
        }
    ]);
    return OneHotVector;
}(_vector.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3Ivb25lSG90LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lSG90VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudHMsIGluZGV4KSB7XG4gICAgc3VwZXIoZWxlbWVudHMpO1xuXG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgZ2V0SW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXg7XG4gIH1cblxuICBhcmdtYXgoKSB7XG4gICAgY29uc3QgYXJnbWF4ID0gdGhpcy5pbmRleDtcbiAgICBcbiAgICByZXR1cm4gYXJnbWF4O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ub2tlbkFuZFZvY2FidWxhcnkodG9rZW4sIHZvY2FidWxhcnkpIHtcbiAgICBjb25zdCBzaXplID0gdm9jYWJ1bGFyeS5nZXRTaXplKCksXG4gICAgICAgICAgaW5kZXggPSB2b2NhYnVsYXJ5LmluZGV4T2ZUb2tlbih0b2tlbiksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBzaXplOyBjb3VudCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gKGNvdW50ID09PSBpbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25lSG90VmVjdG9yID0gbmV3IE9uZUhvdFZlY3RvcihlbGVtZW50cywgaW5kZXgpO1xuXG4gICAgcmV0dXJuIG9uZUhvdFZlY3RvcjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk9uZUhvdFZlY3RvciIsImVsZW1lbnRzIiwiaW5kZXgiLCJnZXRJbmRleCIsImFyZ21heCIsImZyb21Ub2tlbkFuZFZvY2FidWxhcnkiLCJ0b2tlbiIsInZvY2FidWxhcnkiLCJzaXplIiwiZ2V0U2l6ZSIsImluZGV4T2ZUb2tlbiIsImNvdW50IiwiZWxlbWVudCIsInB1c2giLCJvbmVIb3RWZWN0b3IiLCJWZWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OzZEQUZGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUosSUFBQSxBQUFNQSw2QkFBTjtjQUFNQTthQUFBQSxhQUNQQyxRQUFRLEVBQUVDLEtBQUs7Z0NBRFJGOztnQkFFakIsa0JBRmlCQTtZQUVYQzs7UUFFTixNQUFLQyxLQUFLLEdBQUdBOzs7a0JBSklGOztZQU9uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxLQUFLO1lBQ25COzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1BLFNBQVMsSUFBSSxDQUFDRixLQUFLO2dCQUV6QixPQUFPRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLHVCQUF1QkMsS0FBSyxFQUFFQyxVQUFVO2dCQUM3QyxJQUFNQyxPQUFPRCxXQUFXRSxPQUFPLElBQ3pCUCxRQUFRSyxXQUFXRyxZQUFZLENBQUNKLFFBQ2hDTCxXQUFXLEVBQUU7Z0JBRW5CLElBQUssSUFBSVUsUUFBUSxHQUFHQSxRQUFRSCxNQUFNRyxRQUFTO29CQUN6QyxJQUFNQyxVQUFVLEFBQUNELFVBQVVULFFBQ1QsSUFDRTtvQkFFcEJELFNBQVNZLElBQUksQ0FBQ0Q7Z0JBQ2hCO2dCQUVBLElBQU1FLGVBQWUsSUE5QkpkLGFBOEJxQkMsVUFBVUM7Z0JBRWhELE9BQU9ZO1lBQ1Q7OztXQWpDbUJkO0VBQXFCZSxlQUFNIn0=