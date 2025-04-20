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
var _vector = /*#__PURE__*/ _interop_require_default(require("../vector"));
var _registry = require("../registry");
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
var _default = (0, _registry.registryAssigned)(/*#__PURE__*/ function(Vector) {
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
}(_vector.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZWN0b3Ivb25lSG90LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVmVjdG9yIGZyb20gXCIuLi92ZWN0b3JcIjtcblxuaW1wb3J0IHsgcmVnaXN0cnlBc3NpZ25lZCB9IGZyb20gXCIuLi9yZWdpc3RyeVwiO1xuXG5leHBvcnQgZGVmYXVsdCByZWdpc3RyeUFzc2lnbmVkKGNsYXNzIE9uZUhvdFZlY3RvciBleHRlbmRzIFZlY3RvciB7XG4gIGFyZ21heCgpIHtcbiAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHMoKSxcbiAgICAgICAgICBhcmdtYXggPSBlbGVtZW50cy5maW5kSW5kZXgoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ID09PSAxKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGFyZ21heDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVG9rZW5BbmRWb2NhYnVsYXJ5KHRva2VuLCB2b2NhYnVsYXJ5KSB7XG4gICAgY29uc3QgaW5kZXggPSB2b2NhYnVsYXJ5LmluZGV4T2ZUb2tlbih0b2tlbik7XG5cbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHt0b2tlbn0nIHRva2VuIGlzIG5vdCBpbiB0aGUgdm9jYWJ1bGFyeS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzaXplID0gdm9jYWJ1bGFyeS5nZXRTaXplKCksXG4gICAgICAgICAgZWxlbWVudHMgPSBbXTtcblxuICAgIGZvciAobGV0IGNvdW50ID0gMDsgY291bnQgPCBzaXplOyBjb3VudCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gKGNvdW50ID09PSBpbmRleCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDA7XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25lSG90VmVjdG9yID0gbmV3IE9uZUhvdFZlY3RvcihlbGVtZW50cyk7XG5cbiAgICByZXR1cm4gb25lSG90VmVjdG9yO1xuICB9XG5cbiAgc3RhdGljIGZyb21FbGVtZW50cyhlbGVtZW50cykgeyByZXR1cm4gVmVjdG9yLmZyb21FbGVtZW50cyhPbmVIb3RWZWN0b3IsIGVsZW1lbnRzKTsgfVxufSk7XG4iXSwibmFtZXMiOlsicmVnaXN0cnlBc3NpZ25lZCIsIk9uZUhvdFZlY3RvciIsImFyZ21heCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJmaW5kSW5kZXgiLCJlbGVtZW50IiwiZnJvbVRva2VuQW5kVm9jYWJ1bGFyeSIsInRva2VuIiwidm9jYWJ1bGFyeSIsImluZGV4IiwiaW5kZXhPZlRva2VuIiwiRXJyb3IiLCJzaXplIiwiZ2V0U2l6ZSIsImNvdW50IiwicHVzaCIsIm9uZUhvdFZlY3RvciIsImZyb21FbGVtZW50cyIsIlZlY3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7NkRBSm1CO3dCQUVjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpDLFdBQWVBLElBQUFBLDBCQUFnQixnQkFBQzs7YUFBTUM7Z0NBQUFBO2VBQU4sa0JBQU1BOzs7O1lBQ3BDQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBVyxJQUFJLENBQUNDLFdBQVcsSUFDM0JGLFNBQVNDLFNBQVNFLFNBQVMsQ0FBQyxTQUFDQztvQkFDM0IsSUFBSUEsWUFBWSxHQUFHO3dCQUNqQixPQUFPO29CQUNUO2dCQUNGO2dCQUVOLE9BQU9KO1lBQ1Q7Ozs7WUFFT0ssS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCQyxLQUFLLEVBQUVDLFVBQVU7Z0JBQzdDLElBQU1DLFFBQVFELFdBQVdFLFlBQVksQ0FBQ0g7Z0JBRXRDLElBQUlFLFVBQVUsQ0FBQyxHQUFHO29CQUNoQixNQUFNLElBQUlFLE1BQU0sQUFBQyxRQUFhLE9BQU5KLE9BQU07Z0JBQ2hDO2dCQUVBLElBQU1LLE9BQU9KLFdBQVdLLE9BQU8sSUFDekJYLFdBQVcsRUFBRTtnQkFFbkIsSUFBSyxJQUFJWSxRQUFRLEdBQUdBLFFBQVFGLE1BQU1FLFFBQVM7b0JBQ3pDLElBQU1ULFVBQVUsQUFBQ1MsVUFBVUwsUUFDVCxJQUNFO29CQUVwQlAsU0FBU2EsSUFBSSxDQUFDVjtnQkFDaEI7Z0JBRUEsSUFBTVcsZUFBZSxJQUFJaEIsYUFBYUU7Z0JBRXRDLE9BQU9jO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhZixRQUFRO2dCQUFJLE9BQU9nQixlQUFNLENBQUNELFlBQVksQ0FBQ2pCLGNBQWNFO1lBQVc7Ozs7RUFuQzNCZ0IsZUFBTSJ9