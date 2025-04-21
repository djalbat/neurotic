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
var _element = /*#__PURE__*/ _interop_require_default(require("./element"));
var _array = require("./utilities/array");
var _elements = require("./utilities/elements");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        childElements[_key - 2] = arguments[_key];
    }
    var element = null;
    properties = properties || {}; ///
    childElements = sanitiseChildElements(childElements); ///
    if (isSubclassOf(firstArgument, _element.default)) {
        var Class = firstArgument; ///
        Object.assign(properties, {
            childElements: childElements
        });
        element = Class.fromProperties(properties);
    }
    return element;
}
var React = {
    createElement: createElement
};
var _default = React;
function isSubclassOf(argument, Class) {
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}
function sanitiseChildElements(childElements) {
    childElements = (0, _array.flatten)(childElements);
    childElements = (0, _elements.removeFalseyElements)(childElements);
    return childElements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgLy8vXG5cbiAgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJzYW5pdGlzZUNoaWxkRWxlbWVudHMiLCJpc1N1YmNsYXNzT2YiLCJFbGVtZW50IiwiQ2xhc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tUHJvcGVydGllcyIsIlJlYWN0IiwiYXJndW1lbnQiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIiwiZmxhdHRlbiIsInJlbW92ZUZhbHNleUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErQkE7OztlQUFBOzs7OERBN0JvQjtxQkFFSTt3QkFDYTs7Ozs7Ozs7Ozs7OztBQUVyQyxTQUFTQSxjQUFjQyxhQUFhLEVBQUVDLFVBQVU7SUFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MsZ0JBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBR0EsY0FBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQWdCOztJQUNoRSxJQUFJQyxVQUFVO0lBRWRGLGFBQWFBLGNBQWMsQ0FBQyxHQUFJLEdBQUc7SUFFbkNDLGdCQUFnQkUsc0JBQXNCRixnQkFBZ0IsR0FBRztJQUV6RCxJQUFJRyxhQUFhTCxlQUFlTSxnQkFBTyxHQUFHO1FBQ3hDLElBQU1DLFFBQVFQLGVBQWdCLEdBQUc7UUFFakNRLE9BQU9DLE1BQU0sQ0FBQ1IsWUFBWTtZQUN4QkMsZUFBQUE7UUFDRjtRQUVBQyxVQUFVSSxNQUFNRyxjQUFjLENBQUNUO0lBQ2pDO0lBRUEsT0FBT0U7QUFDVDtBQUVBLElBQU1RLFFBQVE7SUFDWlosZUFBQUE7QUFDRjtJQUVBLFdBQWVZO0FBRWYsU0FBU04sYUFBYU8sUUFBUSxFQUFFTCxLQUFLO0lBQ25DLElBQU1NLGFBQWNELEFBQWtCLFlBQWxCQSxTQUFTRSxTQUFTLEVBQVlQO0lBRWxELE9BQU9NO0FBQ1Q7QUFFQSxTQUFTVCxzQkFBc0JGLGFBQWE7SUFDMUNBLGdCQUFnQmEsSUFBQUEsY0FBTyxFQUFDYjtJQUV4QkEsZ0JBQWdCYyxJQUFBQSw4QkFBb0IsRUFBQ2Q7SUFFckMsT0FBT0E7QUFDVCJ9