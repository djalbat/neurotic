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
const _element = /*#__PURE__*/ _interop_require_default(require("./element"));
const _array = require("./utilities/array");
const _elements = require("./utilities/elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function createElement(firstArgument, properties, ...childElements) {
    let element = null;
    properties = properties || {}; ///
    childElements = sanitiseChildElements(childElements); ///
    if (isSubclassOf(firstArgument, _element.default)) {
        const Class = firstArgument; ///
        Object.assign(properties, {
            childElements
        });
        element = Class.fromProperties(properties);
    }
    return element;
}
const React = {
    createElement
};
const _default = React;
function isSubclassOf(argument, Class) {
    const subclassOf = argument.prototype instanceof Class;
    return subclassOf;
}
function sanitiseChildElements(childElements) {
    childElements = (0, _array.flatten)(childElements);
    childElements = (0, _elements.removeFalseyElements)(childElements);
    return childElements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgLy8vXG5cbiAgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudCIsImZpcnN0QXJndW1lbnQiLCJwcm9wZXJ0aWVzIiwiY2hpbGRFbGVtZW50cyIsImVsZW1lbnQiLCJzYW5pdGlzZUNoaWxkRWxlbWVudHMiLCJpc1N1YmNsYXNzT2YiLCJFbGVtZW50IiwiQ2xhc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tUHJvcGVydGllcyIsIlJlYWN0IiwiYXJndW1lbnQiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIiwiZmxhdHRlbiIsInJlbW92ZUZhbHNleUVsZW1lbnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErQkE7OztlQUFBOzs7Z0VBN0JvQjt1QkFFSTswQkFDYTs7Ozs7O0FBRXJDLFNBQVNBLGNBQWNDLGFBQWEsRUFBRUMsVUFBVSxFQUFFLEdBQUdDLGFBQWE7SUFDaEUsSUFBSUMsVUFBVTtJQUVkRixhQUFhQSxjQUFjLENBQUMsR0FBSSxHQUFHO0lBRW5DQyxnQkFBZ0JFLHNCQUFzQkYsZ0JBQWdCLEdBQUc7SUFFekQsSUFBSUcsYUFBYUwsZUFBZU0sZ0JBQU8sR0FBRztRQUN4QyxNQUFNQyxRQUFRUCxlQUFnQixHQUFHO1FBRWpDUSxPQUFPQyxNQUFNLENBQUNSLFlBQVk7WUFDeEJDO1FBQ0Y7UUFFQUMsVUFBVUksTUFBTUcsY0FBYyxDQUFDVDtJQUNqQztJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxNQUFNUSxRQUFRO0lBQ1paO0FBQ0Y7TUFFQSxXQUFlWTtBQUVmLFNBQVNOLGFBQWFPLFFBQVEsRUFBRUwsS0FBSztJQUNuQyxNQUFNTSxhQUFjRCxTQUFTRSxTQUFTLFlBQVlQO0lBRWxELE9BQU9NO0FBQ1Q7QUFFQSxTQUFTVCxzQkFBc0JGLGFBQWE7SUFDMUNBLGdCQUFnQmEsSUFBQUEsY0FBTyxFQUFDYjtJQUV4QkEsZ0JBQWdCYyxJQUFBQSw4QkFBb0IsRUFBQ2Q7SUFFckMsT0FBT0E7QUFDVCJ9