"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _index = require("./index");
var rows = 3, columns = 4, matrix = _index.Matrix.fromRowsColumnsAndElements(rows, columns, [
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
]), vector = _index.Vector.fromElements([
    1,
    0,
    1,
    0
]), result = matrix.multiplyVector(vector).toFloat32Array();
console.log(result);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hdHJpeCwgVmVjdG9yIH0gZnJvbSBcIi4vaW5kZXhcIjtcblxuY29uc3Qgcm93cyA9IDMsXG4gICAgICBjb2x1bW5zID0gNCxcbiAgICAgIG1hdHJpeCA9IE1hdHJpeC5mcm9tUm93c0NvbHVtbnNBbmRFbGVtZW50cyhyb3dzLCBjb2x1bW5zLCBbXG4gICAgICAgIDEsICAyLCAgMywgIDQsXG4gICAgICAgIDUsICA2LCAgNywgIDgsXG4gICAgICAgIDksIDEwLCAxMSwgMTJcbiAgICAgIF0pLFxuICAgICAgdmVjdG9yID0gVmVjdG9yLmZyb21FbGVtZW50cyhbMSwgMCwgMSwgMF0pLFxuICAgICAgcmVzdWx0ID0gbWF0cml4Lm11bHRpcGx5VmVjdG9yKHZlY3RvcikudG9GbG9hdDMyQXJyYXkoKTtcblxuY29uc29sZS5sb2cocmVzdWx0KTtcblxuIl0sIm5hbWVzIjpbInJvd3MiLCJjb2x1bW5zIiwibWF0cml4IiwiTWF0cml4IiwiZnJvbVJvd3NDb2x1bW5zQW5kRWxlbWVudHMiLCJ2ZWN0b3IiLCJWZWN0b3IiLCJmcm9tRWxlbWVudHMiLCJyZXN1bHQiLCJtdWx0aXBseVZlY3RvciIsInRvRmxvYXQzMkFycmF5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7OztxQkFBK0I7QUFFL0IsSUFBTUEsT0FBTyxHQUNQQyxVQUFVLEdBQ1ZDLFNBQVNDLGFBQU0sQ0FBQ0MsMEJBQTBCLENBQUNKLE1BQU1DLFNBQVM7SUFDeEQ7SUFBSTtJQUFJO0lBQUk7SUFDWjtJQUFJO0lBQUk7SUFBSTtJQUNaO0lBQUc7SUFBSTtJQUFJO0NBQ1osR0FDREksU0FBU0MsYUFBTSxDQUFDQyxZQUFZLENBQUM7SUFBQztJQUFHO0lBQUc7SUFBRztDQUFFLEdBQ3pDQyxTQUFTTixPQUFPTyxjQUFjLENBQUNKLFFBQVFLLGNBQWM7QUFFM0RDLFFBQVFDLEdBQUcsQ0FBQ0oifQ==