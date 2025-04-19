"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _libnode = /*#__PURE__*/ _interop_require_default(require("../lib.node"));
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
]), vector = new Float32Array([
    1,
    0,
    1,
    0
]), result = _libnode.default.matrixMultiply(matrix, vector, rows, cols);
console.log(result);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbGliIGZyb20gXCIuLi9saWIubm9kZVwiO1xuXG5jb25zdCByb3dzID0gMztcbmNvbnN0IGNvbHMgPSA0O1xuXG5jb25zdCBtYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMSwgIDIsICAzLCAgNCxcbiAgICAgICAgNSwgIDYsICA3LCAgOCxcbiAgICAgICAgOSwgMTAsIDExLCAxMlxuICAgICAgXSksXG4gICAgICB2ZWN0b3IgPSBuZXcgRmxvYXQzMkFycmF5KFsxLCAwLCAxLCAwXSksXG4gICAgICByZXN1bHQgPSBsaWIubWF0cml4TXVsdGlwbHkobWF0cml4LCB2ZWN0b3IsIHJvd3MsIGNvbHMpO1xuXG5jb25zb2xlLmxvZyhyZXN1bHQpO1xuIl0sIm5hbWVzIjpbInJvd3MiLCJjb2xzIiwibWF0cml4IiwiRmxvYXQzMkFycmF5IiwidmVjdG9yIiwicmVzdWx0IiwibGliIiwibWF0cml4TXVsdGlwbHkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OzhEQUFnQjs7Ozs7O0FBRWhCLElBQU1BLE9BQU87QUFDYixJQUFNQyxPQUFPO0FBRWIsSUFBTUMsU0FBUyxJQUFJQyxhQUFhO0lBQ3hCO0lBQUk7SUFBSTtJQUFJO0lBQ1o7SUFBSTtJQUFJO0lBQUk7SUFDWjtJQUFHO0lBQUk7SUFBSTtDQUNaLEdBQ0RDLFNBQVMsSUFBSUQsYUFBYTtJQUFDO0lBQUc7SUFBRztJQUFHO0NBQUUsR0FDdENFLFNBQVNDLGdCQUFHLENBQUNDLGNBQWMsQ0FBQ0wsUUFBUUUsUUFBUUosTUFBTUM7QUFFeERPLFFBQVFDLEdBQUcsQ0FBQ0oifQ==