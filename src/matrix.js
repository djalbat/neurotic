"use strict";

import { multiplyMatrixByScalar, subtractMatrixFromMatrix } from "../lib.node";

import { random } from "./utilities/random";

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

  subtractMatrix(matrix) {
    const matrixA = matrix, ///
          matrixB = this, ///
          matrixAFloat32Array = matrixA.toFloat32Array(),
          matrixBFloat32Array = matrixB.toFloat32Array(),
          resultFloat32Array = subtractMatrixFromMatrix(matrixAFloat32Array, matrixBFloat32Array),
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

    const cardinality = this.rows * this.columns,
          lowerBound = -1,
          upperBound = +1;

    for (let count = 0; count < cardinality; count++) {
      const element = random(lowerBound, upperBound);

      this.elements.push(element);
    }
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

  static fromRowsColumnsAndElements(Class, rows, columns, elements) {
    if (elements === undefined) {
      elements = columns; ///

      columns = rows; ///

      rows = Class; ///

      Class = Matrix; ///
    }

    const matrix = new Class(rows, columns, elements);

    return matrix;
  }

  static fromRowsColumnsAndFloat32Array(Class, rows, columns, float32Array) {
    if (float32Array === undefined) {
      float32Array = columns; ///

      columns = rows; ///

      rows = Class; ///

      Class = Matrix; ///
    }

    const elements = Array.from(float32Array),
          matrix = new Class(rows, columns, elements);

    return matrix;
  }
}
