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
    _create_class(OneHotVector, null, [
        {
            key: "fromTokenAndVocabulary",
            value: function fromTokenAndVocabulary(token, vocabulary) {
                var index = vocabulary.indexOfToken(token);
                if (index === -1) {
                    throw new Error("The '".concat(token, "' token is not in the vocabulary."));
                }
                var size = vocabulary.getSize(), elements = [];
                for(var count = 0; count < size; count++){
                    var element = count === index ? 1 : 0;
                    elements.push(element);
                }
                var oneHotVector = new OneHotVector(elements);
                return oneHotVector;
            }
        },
        {
            key: "fromElements",
            value: function fromElements(elements) {
                return _vector.default.fromElements(OneHotVector, elements);
            }
        }
    ]);
    return OneHotVector;
}(_vector.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3Ivb25lSG90LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi92ZWN0b3JcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT25lSG90VmVjdG9yIGV4dGVuZHMgVmVjdG9yIHtcbiAgc3RhdGljIGZyb21Ub2tlbkFuZFZvY2FidWxhcnkodG9rZW4sIHZvY2FidWxhcnkpIHtcbiAgICBjb25zdCBpbmRleCA9IHZvY2FidWxhcnkuaW5kZXhPZlRva2VuKHRva2VuKTtcblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke3Rva2VufScgdG9rZW4gaXMgbm90IGluIHRoZSB2b2NhYnVsYXJ5LmApO1xuICAgIH1cblxuICAgIGNvbnN0IHNpemUgPSB2b2NhYnVsYXJ5LmdldFNpemUoKSxcbiAgICAgICAgICBlbGVtZW50cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgY291bnQgPSAwOyBjb3VudCA8IHNpemU7IGNvdW50KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSAoY291bnQgPT09IGluZGV4KSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMDtcblxuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBvbmVIb3RWZWN0b3IgPSBuZXcgT25lSG90VmVjdG9yKGVsZW1lbnRzKTtcblxuICAgIHJldHVybiBvbmVIb3RWZWN0b3I7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVsZW1lbnRzKGVsZW1lbnRzKSB7IHJldHVybiBWZWN0b3IuZnJvbUVsZW1lbnRzKE9uZUhvdFZlY3RvciwgZWxlbWVudHMpOyB9XG59XG4iXSwibmFtZXMiOlsiT25lSG90VmVjdG9yIiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsInRva2VuIiwidm9jYWJ1bGFyeSIsImluZGV4IiwiaW5kZXhPZlRva2VuIiwiRXJyb3IiLCJzaXplIiwiZ2V0U2l6ZSIsImVsZW1lbnRzIiwiY291bnQiLCJlbGVtZW50IiwicHVzaCIsIm9uZUhvdFZlY3RvciIsImZyb21FbGVtZW50cyIsIlZlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7NkRBRkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSixJQUFBLEFBQU1BLDZCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtlQUFOLGtCQUFNQTs7a0JBQUFBOztZQUNaQyxLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJDLEtBQUssRUFBRUMsVUFBVTtnQkFDN0MsSUFBTUMsUUFBUUQsV0FBV0UsWUFBWSxDQUFDSDtnQkFFdEMsSUFBSUUsVUFBVSxDQUFDLEdBQUc7b0JBQ2hCLE1BQU0sSUFBSUUsTUFBTSxBQUFDLFFBQWEsT0FBTkosT0FBTTtnQkFDaEM7Z0JBRUEsSUFBTUssT0FBT0osV0FBV0ssT0FBTyxJQUN6QkMsV0FBVyxFQUFFO2dCQUVuQixJQUFLLElBQUlDLFFBQVEsR0FBR0EsUUFBUUgsTUFBTUcsUUFBUztvQkFDekMsSUFBTUMsVUFBVSxBQUFDRCxVQUFVTixRQUNULElBQ0U7b0JBRXBCSyxTQUFTRyxJQUFJLENBQUNEO2dCQUNoQjtnQkFFQSxJQUFNRSxlQUFlLElBbkJKYixhQW1CcUJTO2dCQUV0QyxPQUFPSTtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsYUFBYUwsUUFBUTtnQkFBSSxPQUFPTSxlQUFNLENBQUNELFlBQVksQ0F4QnZDZCxjQXdCc0RTO1lBQVc7OztXQXhCakVUO0VBQXFCZSxlQUFNIn0=