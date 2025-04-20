"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "random", {
    enumerable: true,
    get: function() {
        return random;
    }
});
var _defaults = require("../defaults");
function random() {
    var lowerBound = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _defaults.DEFAULT_LOWER_BOUND, upperBound = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _defaults.DEFAULT_UPPER_BOUND;
    var number;
    var spread = upperBound - lowerBound;
    do {
        number = Math.random() * spread + lowerBound;
    }while (number === lowerBound);
    return number;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcmFuZG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBERUZBVUxUX0xPV0VSX0JPVU5ELCBERUZBVUxUX1VQUEVSX0JPVU5EIH0gZnJvbSBcIi4uL2RlZmF1bHRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb20obG93ZXJCb3VuZCA9IERFRkFVTFRfTE9XRVJfQk9VTkQsIHVwcGVyQm91bmQgPSBERUZBVUxUX1VQUEVSX0JPVU5EKSB7XG4gIGxldCBudW1iZXI7XG5cbiAgY29uc3Qgc3ByZWFkID0gdXBwZXJCb3VuZCAtIGxvd2VyQm91bmQ7XG5cbiAgZG8ge1xuICAgIG51bWJlciA9IE1hdGgucmFuZG9tKCkgKiBzcHJlYWQgKyBsb3dlckJvdW5kO1xuICB9IHdoaWxlIChudW1iZXIgPT09IGxvd2VyQm91bmQpO1xuXG4gIHJldHVybiBudW1iZXI7XG59XG4iXSwibmFtZXMiOlsicmFuZG9tIiwibG93ZXJCb3VuZCIsIkRFRkFVTFRfTE9XRVJfQk9VTkQiLCJ1cHBlckJvdW5kIiwiREVGQVVMVF9VUFBFUl9CT1VORCIsIm51bWJlciIsInNwcmVhZCIsIk1hdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUlnQkE7OztlQUFBQTs7O3dCQUZ5QztBQUVsRCxTQUFTQTtRQUFPQyxhQUFBQSxpRUFBYUMsNkJBQW1CLEVBQUVDLGFBQUFBLGlFQUFhQyw2QkFBbUI7SUFDdkYsSUFBSUM7SUFFSixJQUFNQyxTQUFTSCxhQUFhRjtJQUU1QixHQUFHO1FBQ0RJLFNBQVNFLEtBQUtQLE1BQU0sS0FBS00sU0FBU0w7SUFDcEMsUUFBU0ksV0FBV0osWUFBWTtJQUVoQyxPQUFPSTtBQUNUIn0=