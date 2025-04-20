"use strict";

import { matrixScalarMultiply, vectorMultiplyMatrix } from "../lib.node";

import registry from "./registry";

import { random } from "./utilities/random";
import { registryAssigned } from "./registry";

export default registryAssigned(class Matrix {
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

  scalarMultiply(scalar) {
    const matrixFloat32Array = this.toFloat32Array(),
          resultFloat32Array = matrixScalarMultiply(matrixFloat32Array, scalar),
          resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(this.rows, this.columns, resultFloat32Array);

    return resultMatrix;
  }

  multiplyVector(vector) {
    const { Vector } = registry,
          vectorFloat32Array = vector.toFloat32Array(),
          matrixFloat32Array = this.toFloat32Array(),
          resultFloat32Array = vectorMultiplyMatrix(vectorFloat32Array, matrixFloat32Array, this.rows, this.columns),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
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
});
