import { Matrix, Vector } from "./index";

const rows = 3,
      columns = 4,
      matrix = Matrix.fromRowsColumnsAndElements(rows, columns, [
        1,  2,  3,  4,
        5,  6,  7,  8,
        9, 10, 11, 12
      ]),
      vector = Vector.fromElements([1, 0, 1, 0]),
      result = matrix.multiplyVector(vector).toFloat32Array();

console.log(result);

