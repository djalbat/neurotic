"use strict";
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import Element from "./element";
import { flatten } from "./utilities/array";
import { removeFalseyElements } from "./utilities/elements";
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        childElements[_key - 2] = arguments[_key];
    }
    var element = null;
    properties = properties || {}; ///
    childElements = sanitiseChildElements(childElements); ///
    if (isSubclassOf(firstArgument, Element)) {
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
export default React;
function isSubclassOf(argument, Class) {
    var subclassOf = _instanceof(argument.prototype, Class);
    return subclassOf;
}
function sanitiseChildElements(childElements) {
    childElements = flatten(childElements);
    childElements = removeFalseyElements(childElements);
    return childElements;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlFbGVtZW50cyB9IGZyb20gXCIuL3V0aWxpdGllcy9lbGVtZW50c1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KGZpcnN0QXJndW1lbnQsIHByb3BlcnRpZXMsIC4uLmNoaWxkRWxlbWVudHMpIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzIHx8IHt9OyAgLy8vXG5cbiAgY2hpbGRFbGVtZW50cyA9IHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTsgLy8vXG5cbiAgaWYgKGlzU3ViY2xhc3NPZihmaXJzdEFyZ3VtZW50LCBFbGVtZW50KSkge1xuICAgIGNvbnN0IENsYXNzID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgT2JqZWN0LmFzc2lnbihwcm9wZXJ0aWVzLCB7XG4gICAgICBjaGlsZEVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBlbGVtZW50ID0gQ2xhc3MuZnJvbVByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgUmVhY3QgPSB7XG4gIGNyZWF0ZUVsZW1lbnRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBpc1N1YmNsYXNzT2YoYXJndW1lbnQsIENsYXNzKSB7XG4gIGNvbnN0IHN1YmNsYXNzT2YgPSAoYXJndW1lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ2xhc3MpO1xuXG4gIHJldHVybiBzdWJjbGFzc09mO1xufVxuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cykge1xuICBjaGlsZEVsZW1lbnRzID0gZmxhdHRlbihjaGlsZEVsZW1lbnRzKTtcblxuICBjaGlsZEVsZW1lbnRzID0gcmVtb3ZlRmFsc2V5RWxlbWVudHMoY2hpbGRFbGVtZW50cyk7XG5cbiAgcmV0dXJuIGNoaWxkRWxlbWVudHM7XG59XG4iXSwibmFtZXMiOlsiRWxlbWVudCIsImZsYXR0ZW4iLCJyZW1vdmVGYWxzZXlFbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdEFyZ3VtZW50IiwicHJvcGVydGllcyIsImNoaWxkRWxlbWVudHMiLCJlbGVtZW50Iiwic2FuaXRpc2VDaGlsZEVsZW1lbnRzIiwiaXNTdWJjbGFzc09mIiwiQ2xhc3MiLCJPYmplY3QiLCJhc3NpZ24iLCJmcm9tUHJvcGVydGllcyIsIlJlYWN0IiwiYXJndW1lbnQiLCJzdWJjbGFzc09mIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFFQSxPQUFPQSxhQUFhLFlBQVk7QUFFaEMsU0FBU0MsT0FBTyxRQUFRLG9CQUFvQjtBQUM1QyxTQUFTQyxvQkFBb0IsUUFBUSx1QkFBdUI7QUFFNUQsU0FBU0MsY0FBY0MsYUFBYSxFQUFFQyxVQUFVO0lBQUUsSUFBQSxJQUFBLE9BQUEsVUFBQSxRQUFBLEFBQUdDLGdCQUFILFVBQUEsT0FBQSxJQUFBLE9BQUEsUUFBQSxPQUFBLEdBQUEsT0FBQSxNQUFBO1FBQUdBLGNBQUgsT0FBQSxLQUFBLFNBQUEsQ0FBQSxLQUFnQjs7SUFDaEUsSUFBSUMsVUFBVTtJQUVkRixhQUFhQSxjQUFjLENBQUMsR0FBSSxHQUFHO0lBRW5DQyxnQkFBZ0JFLHNCQUFzQkYsZ0JBQWdCLEdBQUc7SUFFekQsSUFBSUcsYUFBYUwsZUFBZUosVUFBVTtRQUN4QyxJQUFNVSxRQUFRTixlQUFnQixHQUFHO1FBRWpDTyxPQUFPQyxNQUFNLENBQUNQLFlBQVk7WUFDeEJDLGVBQUFBO1FBQ0Y7UUFFQUMsVUFBVUcsTUFBTUcsY0FBYyxDQUFDUjtJQUNqQztJQUVBLE9BQU9FO0FBQ1Q7QUFFQSxJQUFNTyxRQUFRO0lBQ1pYLGVBQUFBO0FBQ0Y7QUFFQSxlQUFlVyxNQUFNO0FBRXJCLFNBQVNMLGFBQWFNLFFBQVEsRUFBRUwsS0FBSztJQUNuQyxJQUFNTSxhQUFjRCxBQUFrQixZQUFsQkEsU0FBU0UsU0FBUyxFQUFZUDtJQUVsRCxPQUFPTTtBQUNUO0FBRUEsU0FBU1Isc0JBQXNCRixhQUFhO0lBQzFDQSxnQkFBZ0JMLFFBQVFLO0lBRXhCQSxnQkFBZ0JKLHFCQUFxQkk7SUFFckMsT0FBT0E7QUFDVCJ9