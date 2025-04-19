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
    add: function() {
        return add;
    },
    flatten: function() {
        return flatten;
    },
    guarantee: function() {
        return guarantee;
    }
});
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function add(arrayA, arrayB) {
    arrayB.forEach(function(elementB) {
        arrayA.push(elementB);
    });
}
function flatten(arrays) {
    return arrays.reduce(function(elements, array) {
        elements = elements.concat(array);
        return elements;
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnRCKSA9PiB7XG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IHtcbiAgICBlbGVtZW50cyA9IGVsZW1lbnRzLmNvbmNhdChhcnJheSk7XG5cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiJdLCJuYW1lcyI6WyJhZGQiLCJmbGF0dGVuIiwiZ3VhcmFudGVlIiwiYXJyYXlBIiwiYXJyYXlCIiwiZm9yRWFjaCIsImVsZW1lbnRCIiwicHVzaCIsImFycmF5cyIsInJlZHVjZSIsImVsZW1lbnRzIiwiYXJyYXkiLCJjb25jYXQiLCJhcnJheU9yRWxlbWVudCIsIkFycmF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFFZ0JBLEdBQUc7ZUFBSEE7O0lBTUFDLE9BQU87ZUFBUEE7O0lBUUFDLFNBQVM7ZUFBVEE7Ozs7Ozs7Ozs7QUFkVCxTQUFTRixJQUFJRyxNQUFNLEVBQUVDLE1BQU07SUFDaENBLE9BQU9DLE9BQU8sQ0FBQyxTQUFDQztRQUNkSCxPQUFPSSxJQUFJLENBQUNEO0lBQ2Q7QUFDRjtBQUVPLFNBQVNMLFFBQVFPLE1BQU07SUFDNUIsT0FBT0EsT0FBT0MsTUFBTSxDQUFDLFNBQUNDLFVBQVVDO1FBQzlCRCxXQUFXQSxTQUFTRSxNQUFNLENBQUNEO1FBRTNCLE9BQU9EO0lBQ1QsR0FBRyxFQUFFO0FBQ1A7QUFFTyxTQUFTUixVQUFVVyxjQUFjO0lBQ3RDQSxpQkFBaUJBLGtCQUFrQixFQUFFO0lBRXJDLE9BQU8sQUFBQ0EsQUFBYyxZQUFkQSxnQkFBMEJDLFNBQ3hCRCxpQkFDQztRQUFFQTtLQUFnQjtBQUMvQiJ9