import native from "../index.node";

const rows = 3;
const cols = 4;

const matrix = new Float32Array([
  1,  2,  3,  4,
  5,  6,  7,  8,
  9, 10, 11, 12
]);

const vector = new Float32Array([1, 0, 1, 0]);

const result = native.matrixMultiplication(matrix, vector, rows, cols);

console.log(result);
