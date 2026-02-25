"use strict";
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
import { arrayUtilities } from "necessary";
export var first = arrayUtilities.first, second = arrayUtilities.second;
export function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
}
export function flatten(arrays) {
    return arrays.reduce(function(elements, array) {
        elements = elements.concat(array);
        return elements;
    }, []);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgWyBhcnJheU9yRWxlbWVudCBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4ge1xuICAgIGVsZW1lbnRzID0gZWxlbWVudHMuY29uY2F0KGFycmF5KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xufVxuIl0sIm5hbWVzIjpbImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJzZWNvbmQiLCJndWFyYW50ZWUiLCJhcnJheU9yRWxlbWVudCIsIkFycmF5IiwiZmxhdHRlbiIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiYXJyYXkiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQUVBLFNBQVNBLGNBQWMsUUFBUSxZQUFZO0FBRTNDLE9BQU8sSUFBUUMsUUFBa0JELGVBQWxCQyxPQUFPQyxTQUFXRixlQUFYRSxPQUEwQjtBQUVoRCxPQUFPLFNBQVNDLFVBQVVDLGNBQWM7SUFDdENBLGlCQUFpQkEsa0JBQWtCLEVBQUU7SUFFckMsT0FBTyxBQUFDQSxBQUFjLFlBQWRBLGdCQUEwQkMsU0FDekJELGlCQUNFO1FBQUVBO0tBQWdCO0FBQy9CO0FBRUEsT0FBTyxTQUFTRSxRQUFRQyxNQUFNO0lBQzVCLE9BQU9BLE9BQU9DLE1BQU0sQ0FBQyxTQUFDQyxVQUFVQztRQUM5QkQsV0FBV0EsU0FBU0UsTUFBTSxDQUFDRDtRQUUzQixPQUFPRDtJQUNULEdBQUcsRUFBRTtBQUNQIn0=