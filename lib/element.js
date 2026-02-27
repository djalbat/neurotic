"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Element;
    }
});
const _constants = require("./constants");
const _array = require("./utilities/array");
class Element {
    getProperties() {
        return this.properties;
    }
    getChildElements() {
        return this.childElements;
    }
    setProperties(properties) {
        this.properties = properties;
    }
    setChildElements(childElements) {
        this.childElements = childElements;
    }
    static fromProperties(Class, properties, ...remainingArguments) {
        const element = new Class(...remainingArguments), childElements = typeof element.childElements === _constants.FUNCTION ? (0, _array.guarantee)(element.childElements(properties)) : properties.childElements || [];
        element.setProperties(properties);
        element.setChildElements(childElements);
        return element;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lbGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBGVU5DVElPTiB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudCB7XG4gIGdldFByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydGllcztcbiAgfVxuXG4gIGdldENoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hpbGRFbGVtZW50cztcbiAgfVxuXG4gIHNldFByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gIH1cblxuICBzZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpIHtcbiAgICB0aGlzLmNoaWxkRWxlbWVudHMgPSBjaGlsZEVsZW1lbnRzO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKENsYXNzLCBwcm9wZXJ0aWVzLCAuLi5yZW1haW5pbmdBcmd1bWVudHMpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gbmV3IENsYXNzKC4uLnJlbWFpbmluZ0FyZ3VtZW50cyksXG4gICAgICAgICAgY2hpbGRFbGVtZW50cyA9ICh0eXBlb2YgZWxlbWVudC5jaGlsZEVsZW1lbnRzID09PSBGVU5DVElPTikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBndWFyYW50ZWUoZWxlbWVudC5jaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5jaGlsZEVsZW1lbnRzIHx8IFtdO1xuXG4gICAgZWxlbWVudC5zZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuXG4gICAgZWxlbWVudC5zZXRDaGlsZEVsZW1lbnRzKGNoaWxkRWxlbWVudHMpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFbGVtZW50IiwiZ2V0UHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiY2hpbGRFbGVtZW50cyIsInNldFByb3BlcnRpZXMiLCJzZXRDaGlsZEVsZW1lbnRzIiwiZnJvbVByb3BlcnRpZXMiLCJDbGFzcyIsInJlbWFpbmluZ0FyZ3VtZW50cyIsImVsZW1lbnQiLCJGVU5DVElPTiIsImd1YXJhbnRlZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OzsyQkFKSTt1QkFFQztBQUVYLE1BQU1BO0lBQ25CQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0MsVUFBVTtJQUN4QjtJQUVBQyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUNDLGFBQWE7SUFDM0I7SUFFQUMsY0FBY0gsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQ0EsVUFBVSxHQUFHQTtJQUNwQjtJQUVBSSxpQkFBaUJGLGFBQWEsRUFBRTtRQUM5QixJQUFJLENBQUNBLGFBQWEsR0FBR0E7SUFDdkI7SUFFQSxPQUFPRyxlQUFlQyxLQUFLLEVBQUVOLFVBQVUsRUFBRSxHQUFHTyxrQkFBa0IsRUFBRTtRQUM5RCxNQUFNQyxVQUFVLElBQUlGLFNBQVNDLHFCQUN2QkwsZ0JBQWdCLEFBQUMsT0FBT00sUUFBUU4sYUFBYSxLQUFLTyxtQkFBUSxHQUN2Q0MsSUFBQUEsZ0JBQVMsRUFBQ0YsUUFBUU4sYUFBYSxDQUFDRixlQUM5QkEsV0FBV0UsYUFBYSxJQUFJLEVBQUU7UUFFekRNLFFBQVFMLGFBQWEsQ0FBQ0g7UUFFdEJRLFFBQVFKLGdCQUFnQixDQUFDRjtRQUV6QixPQUFPTTtJQUNUO0FBQ0YifQ==