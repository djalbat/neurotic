"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    first: function() {
        return first;
    },
    flatten: function() {
        return flatten;
    },
    second: function() {
        return second;
    }
});
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second;
function flatten(arrays) {
    return arrays.reduce(function(elements, array) {
        elements = elements.concat(array);
        return elements;
    }, []);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IHtcbiAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmNvbmNhdChhcnJheSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImZsYXR0ZW4iLCJzZWNvbmQiLCJhcnJheVV0aWxpdGllcyIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiYXJyYXkiLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUllQSxLQUFLO2VBQUxBOztJQUVDQyxPQUFPO2VBQVBBOztJQUZNQyxNQUFNO2VBQU5BOzs7eUJBRlM7QUFFeEIsSUFBUUYsUUFBa0JHLHlCQUFjLENBQWhDSCxPQUFPRSxTQUFXQyx5QkFBYyxDQUF6QkQ7QUFFZixTQUFTRCxRQUFRRyxNQUFNO0lBQzVCLE9BQU9BLE9BQU9DLE1BQU0sQ0FBQyxTQUFDQyxVQUFVQztRQUM5QkQsV0FBV0EsU0FBU0UsTUFBTSxDQUFDRDtRQUUzQixPQUFPRDtJQUNULEdBQUcsRUFBRTtBQUNQIn0=