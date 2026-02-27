"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get first () {
        return first;
    },
    get flatten () {
        return flatten;
    },
    get guarantee () {
        return guarantee;
    },
    get second () {
        return second;
    }
});
const _necessary = require("necessary");
const { first, second } = _necessary.arrayUtilities;
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return arrayOrElement instanceof Array ? arrayOrElement : [
        arrayOrElement
    ];
}
function flatten(arrays) {
    return arrays.reduce((elements, array)=>{
        elements = elements.concat(array);
        return elements;
    }, []);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICBhcnJheU9yRWxlbWVudCA6XG4gICAgICAgICAgICAgWyBhcnJheU9yRWxlbWVudCBdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKGVsZW1lbnRzLCBhcnJheSkgPT4ge1xuICAgIGVsZW1lbnRzID0gZWxlbWVudHMuY29uY2F0KGFycmF5KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfSwgW10pO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwiZmxhdHRlbiIsImd1YXJhbnRlZSIsInNlY29uZCIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXlPckVsZW1lbnQiLCJBcnJheSIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiYXJyYXkiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQUllQTtlQUFBQTs7UUFVQ0M7ZUFBQUE7O1FBUkFDO2VBQUFBOztRQUZNQztlQUFBQTs7OzJCQUZTO0FBRXhCLE1BQU0sRUFBRUgsS0FBSyxFQUFFRyxNQUFNLEVBQUUsR0FBR0MseUJBQWM7QUFFeEMsU0FBU0YsVUFBVUcsY0FBYztJQUN0Q0EsaUJBQWlCQSxrQkFBa0IsRUFBRTtJQUVyQyxPQUFPLEFBQUNBLDBCQUEwQkMsUUFDekJELGlCQUNFO1FBQUVBO0tBQWdCO0FBQy9CO0FBRU8sU0FBU0osUUFBUU0sTUFBTTtJQUM1QixPQUFPQSxPQUFPQyxNQUFNLENBQUMsQ0FBQ0MsVUFBVUM7UUFDOUJELFdBQVdBLFNBQVNFLE1BQU0sQ0FBQ0Q7UUFFM0IsT0FBT0Q7SUFDVCxHQUFHLEVBQUU7QUFDUCJ9