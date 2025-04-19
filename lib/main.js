"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _libnode = require("../lib.node");
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
]), result = (0, _libnode.matrixMultiply)(matrix, vector, rows, cols);
console.log(result);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdHJpeE11bHRpcGx5IH0gZnJvbSBcIi4uL2xpYi5ub2RlXCI7XG5cbmNvbnN0IHJvd3MgPSAzO1xuY29uc3QgY29scyA9IDQ7XG5cbmNvbnN0IG1hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAxLCAgMiwgIDMsICA0LFxuICAgICAgICA1LCAgNiwgIDcsICA4LFxuICAgICAgICA5LCAxMCwgMTEsIDEyXG4gICAgICBdKSxcbiAgICAgIHZlY3RvciA9IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDAsIDEsIDBdKSxcbiAgICAgIHJlc3VsdCA9IG1hdHJpeE11bHRpcGx5KG1hdHJpeCwgdmVjdG9yLCByb3dzLCBjb2xzKTtcblxuY29uc29sZS5sb2cocmVzdWx0KTtcbiJdLCJuYW1lcyI6WyJyb3dzIiwiY29scyIsIm1hdHJpeCIsIkZsb2F0MzJBcnJheSIsInZlY3RvciIsInJlc3VsdCIsIm1hdHJpeE11bHRpcGx5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozt1QkFBK0I7QUFFL0IsSUFBTUEsT0FBTztBQUNiLElBQU1DLE9BQU87QUFFYixJQUFNQyxTQUFTLElBQUlDLGFBQWE7SUFDeEI7SUFBSTtJQUFJO0lBQUk7SUFDWjtJQUFJO0lBQUk7SUFBSTtJQUNaO0lBQUc7SUFBSTtJQUFJO0NBQ1osR0FDREMsU0FBUyxJQUFJRCxhQUFhO0lBQUM7SUFBRztJQUFHO0lBQUc7Q0FBRSxHQUN0Q0UsU0FBU0MsSUFBQUEsdUJBQWMsRUFBQ0osUUFBUUUsUUFBUUosTUFBTUM7QUFFcERNLFFBQVFDLEdBQUcsQ0FBQ0gifQ==