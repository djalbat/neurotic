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
var _function = /*#__PURE__*/ _interop_require_default(require("./element/function"));
var _constants = require("./constants");
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function createElement(firstArgument, properties) {
    for(var _len = arguments.length, childElements = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
        childElements[_key - 2] = arguments[_key];
    }
    properties = properties || {}; ///
    childElements = sanitiseChildElements(childElements); ///
    var element;
    if (isSubclassOf(firstArgument, _element.default)) {
        var Class = firstArgument; ///
        Object.assign(properties, {
            childElements: childElements
        });
        element = Class.fromProperties(properties);
    } else if ((typeof firstArgument === "undefined" ? "undefined" : _type_of(firstArgument)) === _constants.FUNCTION) {
        var func = firstArgument, childElements1 = (0, _array.guarantee)(func(properties));
        Object.assign(properties, {
            childElements: childElements1
        });
        element = _function.default.fromProperties(properties);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWFjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZWxlbWVudFwiO1xuaW1wb3J0IEZ1bmN0aW9uRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50L2Z1bmN0aW9uXCI7XG5cbmltcG9ydCB7IEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBmbGF0dGVuLCBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHJlbW92ZUZhbHNleUVsZW1lbnRzIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2VsZW1lbnRzXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRFbGVtZW50cykge1xuICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcyB8fCB7fTsgIC8vL1xuXG4gIGNoaWxkRWxlbWVudHMgPSBzYW5pdGlzZUNoaWxkRWxlbWVudHMoY2hpbGRFbGVtZW50cyk7IC8vL1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGlmIChpc1N1YmNsYXNzT2YoZmlyc3RBcmd1bWVudCwgRWxlbWVudCkpIHtcbiAgICBjb25zdCBDbGFzcyA9IGZpcnN0QXJndW1lbnQ7ICAvLy9cblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IENsYXNzLmZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgIGNvbnN0IGZ1bmMgPSBmaXJzdEFyZ3VtZW50LCAgLy8vXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9IGd1YXJhbnRlZShmdW5jKHByb3BlcnRpZXMpKTtcblxuICAgIE9iamVjdC5hc3NpZ24ocHJvcGVydGllcywge1xuICAgICAgY2hpbGRFbGVtZW50c1xuICAgIH0pO1xuXG4gICAgZWxlbWVudCA9IEZ1bmN0aW9uRWxlbWVudC5mcm9tUHJvcGVydGllcyhwcm9wZXJ0aWVzKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5jb25zdCBSZWFjdCA9IHtcbiAgY3JlYXRlRWxlbWVudFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhY3Q7XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgY29uc3Qgc3ViY2xhc3NPZiA9IChhcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBDbGFzcyk7XG5cbiAgcmV0dXJuIHN1YmNsYXNzT2Y7XG59XG5cbmZ1bmN0aW9uIHNhbml0aXNlQ2hpbGRFbGVtZW50cyhjaGlsZEVsZW1lbnRzKSB7XG4gIGNoaWxkRWxlbWVudHMgPSBmbGF0dGVuKGNoaWxkRWxlbWVudHMpO1xuXG4gIGNoaWxkRWxlbWVudHMgPSByZW1vdmVGYWxzZXlFbGVtZW50cyhjaGlsZEVsZW1lbnRzKTtcblxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVFbGVtZW50IiwiZmlyc3RBcmd1bWVudCIsInByb3BlcnRpZXMiLCJjaGlsZEVsZW1lbnRzIiwic2FuaXRpc2VDaGlsZEVsZW1lbnRzIiwiZWxlbWVudCIsImlzU3ViY2xhc3NPZiIsIkVsZW1lbnQiLCJDbGFzcyIsIk9iamVjdCIsImFzc2lnbiIsImZyb21Qcm9wZXJ0aWVzIiwiRlVOQ1RJT04iLCJmdW5jIiwiZ3VhcmFudGVlIiwiRnVuY3Rpb25FbGVtZW50IiwiUmVhY3QiLCJhcmd1bWVudCIsInN1YmNsYXNzT2YiLCJwcm90b3R5cGUiLCJmbGF0dGVuIiwicmVtb3ZlRmFsc2V5RWxlbWVudHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQTs7O2VBQUE7Ozs4REF4Q29COytEQUNRO3lCQUVIO3FCQUNVO3dCQUNFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxTQUFTQSxjQUFjQyxhQUFhLEVBQUVDLFVBQVU7SUFBRSxJQUFBLElBQUEsT0FBQSxVQUFBLFFBQUEsQUFBR0MsZ0JBQUgsVUFBQSxPQUFBLElBQUEsT0FBQSxRQUFBLE9BQUEsR0FBQSxPQUFBLE1BQUE7UUFBR0EsY0FBSCxPQUFBLEtBQUEsU0FBQSxDQUFBLEtBQWdCOztJQUNoRUQsYUFBYUEsY0FBYyxDQUFDLEdBQUksR0FBRztJQUVuQ0MsZ0JBQWdCQyxzQkFBc0JELGdCQUFnQixHQUFHO0lBRXpELElBQUlFO0lBRUosSUFBSUMsYUFBYUwsZUFBZU0sZ0JBQU8sR0FBRztRQUN4QyxJQUFNQyxRQUFRUCxlQUFnQixHQUFHO1FBRWpDUSxPQUFPQyxNQUFNLENBQUNSLFlBQVk7WUFDeEJDLGVBQUFBO1FBQ0Y7UUFFQUUsVUFBVUcsTUFBTUcsY0FBYyxDQUFDVDtJQUNqQyxPQUFPLElBQUksQ0FBQSxPQUFPRCw4Q0FBUCxTQUFPQSxjQUFZLE1BQU1XLG1CQUFRLEVBQUU7UUFDNUMsSUFBTUMsT0FBT1osZUFDUEUsaUJBQWdCVyxJQUFBQSxnQkFBUyxFQUFDRCxLQUFLWDtRQUVyQ08sT0FBT0MsTUFBTSxDQUFDUixZQUFZO1lBQ3hCQyxlQUFBQTtRQUNGO1FBRUFFLFVBQVVVLGlCQUFlLENBQUNKLGNBQWMsQ0FBQ1Q7SUFDM0M7SUFFQSxPQUFPRztBQUNUO0FBRUEsSUFBTVcsUUFBUTtJQUNaaEIsZUFBQUE7QUFDRjtJQUVBLFdBQWVnQjtBQUVmLFNBQVNWLGFBQWFXLFFBQVEsRUFBRVQsS0FBSztJQUNuQyxJQUFNVSxhQUFjRCxBQUFrQixZQUFsQkEsU0FBU0UsU0FBUyxFQUFZWDtJQUVsRCxPQUFPVTtBQUNUO0FBRUEsU0FBU2Qsc0JBQXNCRCxhQUFhO0lBQzFDQSxnQkFBZ0JpQixJQUFBQSxjQUFPLEVBQUNqQjtJQUV4QkEsZ0JBQWdCa0IsSUFBQUEsOEJBQW9CLEVBQUNsQjtJQUVyQyxPQUFPQTtBQUNUIn0=