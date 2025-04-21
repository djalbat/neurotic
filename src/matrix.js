"use strict";

import { addMatrixToMatrix, 
         divideMatrixByScalar, 
         multiplyMatrixByScalar, 
         subtractMatrixFromMatrix } from "../lib.node";

import { DECIMAL_PLACES } from "./constants";

export default class Matrix {
  constructor(rows, columns, elements) {
    this.rows = rows;
    this.columns = columns;
    this.elements = elements;
  }

  getRows() {
    return this.rows;
  }

  getColumns() {
    return this.columns;
  }

  getElements() {
    return this.elements;
  }

  addMatrix(matrix) {
    const matrixA = matrix, ///
          matrixB = this, ///
          matrixAFloat32Array = matrixA.toFloat32Array(),
          matrixBFloat32Array = matrixB.toFloat32Array(),
          resultFloat32Array = addMatrixToMatrix(matrixAFloat32Array, matrixBFloat32Array),
          resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);
    
    return resultMatrix;
  }

  subtractMatrix(matrix) {
    const matrixA = matrix, ///
          matrixB = this, ///
          matrixAFloat32Array = matrixA.toFloat32Array(),
          matrixBFloat32Array = matrixB.toFloat32Array(),
          resultFloat32Array = subtractMatrixFromMatrix(matrixAFloat32Array, matrixBFloat32Array),
          resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);

    return resultMatrix;
  }

  divideByScalar(scalar) {
    const matrixFloat32Array = this.toFloat32Array(),
          resultFloat32Array = divideMatrixByScalar(matrixFloat32Array, scalar),
          resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);

    return resultMatrix;
  }

  multiplyByScalar(scalar) {
    const matrixFloat32Array = this.toFloat32Array(),
          resultFloat32Array = multiplyMatrixByScalar(matrixFloat32Array, scalar),
          resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);

    return resultMatrix;
  }

  initialise(size) {
    this.rows = size;  ///
    this.columns = size; ///
    this.elements = [];

    const element = 1 / size,
          cardinality = size * size;

    for (let count = 0; count < cardinality; count++) {
      this.elements.push(element);
    }
  }

  asString() {
    let string = "[\n";

    const lastRow = this.rows -1,
          lastColumn = this.columns -1;

    for (let row = 0; row < this.rows; row++) {
      string += "  ";

      for (let column = 0; column < this.columns; column++) {
        const index = row * this.columns + column,
              element = this.elements[index],
              number = Number(element),
              roundedNumber = number.toFixed(DECIMAL_PLACES);

        if (roundedNumber >= 0) {
          string += "+";
        }

        string += roundedNumber;

        if (column < lastColumn) {
          string += ", ";
        }
      }

      if (row < lastRow) {
        string += ",\n";
      }
    }

    string += "\n]";

    return string;
  }

  toJSON() {
    const rows = this.rows,
          columns = this.columns,
          elements = this.elements,
          json = {
            rows,
            columns,
            elements
          };

    return json;
  }

  toFloat32Array() {
    const float32Array = new Float32Array(this.elements);

    return float32Array;
  }

  static fromJSON(json) {
    const { rows, columns, elements } = json,  //
          matrix = new Matrix(rows, columns, elements);

    return matrix;
  }

  static fromNothing() {
    const rows = null,
          columns = null,
          elements = null,
          matrix = new Matrix(rows, columns, elements);

    return matrix;
  }
  
  static fromRowsAndColumns(rows, columns) {
    const elements = [],
          cardinality = rows * columns;
    
    for (let index = 0; index < cardinality; index++) {
      const element = 0;

      elements.push(element);
    }
    
    const matrix = new Matrix(rows, columns, elements);
    
    return matrix;
  }

  static fromRowsColumnsAndFloat32Array(rows, columns, float32Array) {
    const elements = Array.from(float32Array),
          matrix = new Matrix(rows, columns, elements);

    return matrix;
  }
}
