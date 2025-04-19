"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _indexnode = /*#__PURE__*/ _interop_require_default(require("../index.node"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var rows = 3;
var cols = 4;
var matrix = new Float32Array([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12
]);
var vector = new Float32Array([
    1,
    0,
    1,
    0
]);
var result = _indexnode.default.matrixMultiplication(matrix, vector, rows, cols);
console.log(result);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmF0aXZlIGZyb20gXCIuLi9pbmRleC5ub2RlXCI7XG5cbmNvbnN0IHJvd3MgPSAzO1xuY29uc3QgY29scyA9IDQ7XG5cbmNvbnN0IG1hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAxLCAgMiwgIDMsICA0LFxuICA1LCAgNiwgIDcsICA4LFxuICA5LCAxMCwgMTEsIDEyXG5dKTtcblxuY29uc3QgdmVjdG9yID0gbmV3IEZsb2F0MzJBcnJheShbMSwgMCwgMSwgMF0pO1xuXG5jb25zdCByZXN1bHQgPSBuYXRpdmUubWF0cml4TXVsdGlwbGljYXRpb24obWF0cml4LCB2ZWN0b3IsIHJvd3MsIGNvbHMpO1xuXG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuIl0sIm5hbWVzIjpbInJvd3MiLCJjb2xzIiwibWF0cml4IiwiRmxvYXQzMkFycmF5IiwidmVjdG9yIiwicmVzdWx0IiwibmF0aXZlIiwibWF0cml4TXVsdGlwbGljYXRpb24iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7O2dFQUFtQjs7Ozs7O0FBRW5CLElBQU1BLE9BQU87QUFDYixJQUFNQyxPQUFPO0FBRWIsSUFBTUMsU0FBUyxJQUFJQyxhQUFhO0lBQzlCO0lBQUk7SUFBSTtJQUFJO0lBQ1o7SUFBSTtJQUFJO0lBQUk7SUFDWjtJQUFHO0lBQUk7SUFBSTtDQUNaO0FBRUQsSUFBTUMsU0FBUyxJQUFJRCxhQUFhO0lBQUM7SUFBRztJQUFHO0lBQUc7Q0FBRTtBQUU1QyxJQUFNRSxTQUFTQyxrQkFBTSxDQUFDQyxvQkFBb0IsQ0FBQ0wsUUFBUUUsUUFBUUosTUFBTUM7QUFFakVPLFFBQVFDLEdBQUcsQ0FBQ0oifQ==