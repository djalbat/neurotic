"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "flatten", {
    enumerable: true,
    get: function() {
        return flatten;
    }
});
function flatten(arrays) {
    return arrays.reduce(function(elements, array) {
        elements = elements.concat(array);
        return elements;
    }, []);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5cykge1xuICByZXR1cm4gYXJyYXlzLnJlZHVjZSgoZWxlbWVudHMsIGFycmF5KSA9PiB7XG4gICAgZWxlbWVudHMgPSBlbGVtZW50cy5jb25jYXQoYXJyYXkpO1xuXG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9LCBbXSk7XG59XG4iXSwibmFtZXMiOlsiZmxhdHRlbiIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiYXJyYXkiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVnQkE7OztlQUFBQTs7O0FBQVQsU0FBU0EsUUFBUUMsTUFBTTtJQUM1QixPQUFPQSxPQUFPQyxNQUFNLENBQUMsU0FBQ0MsVUFBVUM7UUFDOUJELFdBQVdBLFNBQVNFLE1BQU0sQ0FBQ0Q7UUFFM0IsT0FBT0Q7SUFDVCxHQUFHLEVBQUU7QUFDUCJ9