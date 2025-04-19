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
    first: function() {
        return first;
    },
    flatten: function() {
        return flatten;
    },
    fourth: function() {
        return fourth;
    },
    guarantee: function() {
        return guarantee;
    },
    push: function() {
        return push;
    },
    second: function() {
        return second;
    },
    separate: function() {
        return separate;
    },
    third: function() {
        return third;
    }
});
var _necessary = require("necessary");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var first = _necessary.arrayUtilities.first, second = _necessary.arrayUtilities.second, third = _necessary.arrayUtilities.third, fourth = _necessary.arrayUtilities.fourth, push = _necessary.arrayUtilities.push, separate = _necessary.arrayUtilities.separate;
function add(arrayA, arrayB) {
    arrayB.forEach(function(elementB) {
        arrayA.push(elementB);
    });
}
function flatten(arrays) {
    return arrays.reduce(function(elements, array) {
        return elements.concat(array);
    }, []);
}
function guarantee(arrayOrElement) {
    arrayOrElement = arrayOrElement || [];
    return _instanceof(arrayOrElement, Array) ? arrayOrElement : [
        arrayOrElement
    ];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgc2Vjb25kLCB0aGlyZCwgZm91cnRoLCBwdXNoLCBzZXBhcmF0ZSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQoYXJyYXlBLCBhcnJheUIpIHtcbiAgYXJyYXlCLmZvckVhY2goKGVsZW1lbnRCKSA9PiB7XG4gICAgYXJyYXlBLnB1c2goZWxlbWVudEIpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oYXJyYXlzKSB7XG4gIHJldHVybiBhcnJheXMucmVkdWNlKChlbGVtZW50cywgYXJyYXkpID0+IGVsZW1lbnRzLmNvbmNhdChhcnJheSksIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgIFsgYXJyYXlPckVsZW1lbnQgXTtcbn1cbiJdLCJuYW1lcyI6WyJhZGQiLCJmaXJzdCIsImZsYXR0ZW4iLCJmb3VydGgiLCJndWFyYW50ZWUiLCJwdXNoIiwic2Vjb25kIiwic2VwYXJhdGUiLCJ0aGlyZCIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXlBIiwiYXJyYXlCIiwiZm9yRWFjaCIsImVsZW1lbnRCIiwiYXJyYXlzIiwicmVkdWNlIiwiZWxlbWVudHMiLCJhcnJheSIsImNvbmNhdCIsImFycmF5T3JFbGVtZW50IiwiQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU1nQkEsR0FBRztlQUFIQTs7SUFGREMsS0FBSztlQUFMQTs7SUFRQ0MsT0FBTztlQUFQQTs7SUFScUJDLE1BQU07ZUFBTkE7O0lBWXJCQyxTQUFTO2VBQVRBOztJQVo2QkMsSUFBSTtlQUFKQTs7SUFBdkJDLE1BQU07ZUFBTkE7O0lBQTZCQyxRQUFRO2VBQVJBOztJQUFyQkMsS0FBSztlQUFMQTs7O3lCQUZDOzs7Ozs7OztBQUV4QixJQUFRUCxRQUFpRFEseUJBQWMsQ0FBL0RSLE9BQU9LLFNBQTBDRyx5QkFBYyxDQUF4REgsUUFBUUUsUUFBa0NDLHlCQUFjLENBQWhERCxPQUFPTCxTQUEyQk0seUJBQWMsQ0FBekNOLFFBQVFFLE9BQW1CSSx5QkFBYyxDQUFqQ0osTUFBTUUsV0FBYUUseUJBQWMsQ0FBM0JGO0FBRTVDLFNBQVNQLElBQUlVLE1BQU0sRUFBRUMsTUFBTTtJQUNoQ0EsT0FBT0MsT0FBTyxDQUFDLFNBQUNDO1FBQ2RILE9BQU9MLElBQUksQ0FBQ1E7SUFDZDtBQUNGO0FBRU8sU0FBU1gsUUFBUVksTUFBTTtJQUM1QixPQUFPQSxPQUFPQyxNQUFNLENBQUMsU0FBQ0MsVUFBVUM7ZUFBVUQsU0FBU0UsTUFBTSxDQUFDRDtPQUFRLEVBQUU7QUFDdEU7QUFFTyxTQUFTYixVQUFVZSxjQUFjO0lBQ3RDQSxpQkFBaUJBLGtCQUFrQixFQUFFO0lBRXJDLE9BQU8sQUFBQ0EsQUFBYyxZQUFkQSxnQkFBMEJDLFNBQ3hCRCxpQkFDQztRQUFFQTtLQUFnQjtBQUMvQiJ9