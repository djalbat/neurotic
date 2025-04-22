"use strict";

import { softmaxVector,
         addVectorToVector,
         divideVectorByScalar,
         multiplyVectorByScalar,
         multiplyVectorByMatrix,
         subtractVectorFromVector,
         outerMultiplyVectorByVector } from "../lib.node";

import { DECIMAL_PLACES } from "./constants";

export default class Vector {
  constructor(elements) {
    this.elements = elements;
  }

  getElements() {
    return this.elements;
  }

  getWidth() {
    const elementsLength = this.elements.length,
          width = elementsLength; ///

    return width;
  }

  softmax() {
    const vectorFloat32Array = this.toFloat32Array(),
          resultFloat32Array = softmaxVector(vectorFloat32Array),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  getElementAt(index) {
    const element = this.elements[index];

    return element;
  }

  setElementAt(index, element) {
    this.elements[index] = element;
  }

  addVector(vector) {
    const vectorA = vector, ///
          vectorB = this, ///
          vectorAFloat32Array = vectorA.toFloat32Array(),
          vectorBFloat32Array = vectorB.toFloat32Array(),
          resultFloat32Array = addVectorToVector(vectorAFloat32Array, vectorBFloat32Array),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  subtractVector(vector) {
    const vectorA = vector, ///
          vectorB = this, ///
          vectorAFloat32Array = vectorA.toFloat32Array(),
          vectorBFloat32Array = vectorB.toFloat32Array(),
          resultFloat32Array = subtractVectorFromVector(vectorAFloat32Array, vectorBFloat32Array),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  divideByScalar(scalar) {
    scalar = Number(scalar);  ///

    const vectorFloat32Array = this.toFloat32Array(),
          resultFloat32Array = divideVectorByScalar(vectorFloat32Array, scalar),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  multiplyByScalar(scalar) {
    scalar = Number(scalar);  ///

    const vectorFloat32Array = this.toFloat32Array(),
          resultFloat32Array = multiplyVectorByScalar(vectorFloat32Array, scalar),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  multiplyByMatrix(matrix) {
    const rows = matrix.getRows(),
          columns = matrix.getColumns(),
          vectorFloat32Array = this.toFloat32Array(),
          matrixFloat32Array = matrix.toFloat32Array(),
          resultFloat32Array = multiplyVectorByMatrix(vectorFloat32Array, matrixFloat32Array, rows, columns),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  outerMultiplyByVector(Matrix, vector) {
    const vectorA = this, ///
          vectorB = vector, ///
          vectorAFloat32Array = vectorA.toFloat32Array(),
          vectorBFloat32Array = vectorB.toFloat32Array(),
          vectorAWidth = vectorA.getWidth(),
          vectorBWidth = vectorB.getWidth(),
          rows = vectorAWidth,  ///
          columns = vectorBWidth, ///
          resultFloat32Array = outerMultiplyVectorByVector(vectorAFloat32Array, vectorBFloat32Array),
          resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(rows, columns, resultFloat32Array);

    return resultMatrix;
  }

  initialise(size) {
    this.elements = [];

    const element = 1,
          cardinality = size; ///

    for (let count = 0; count < cardinality; count++) {
      this.elements.push(element);
    }
  }

  asString() {
    let string = "";

    string += "[ ";

    const width = this.getWidth(),
          lastIndex = width - 1;

    for (let index = 0; index < width; index++) {
      const element = this.elements[index],
            number = Number(element),
            roundedNumber = number.toFixed(DECIMAL_PLACES);

      if (roundedNumber >= 0) {
        string += "+";
      }

      string += roundedNumber;

      if (index < lastIndex) {
        string += ", ";
      }
    }

    string += " ]";

    return string;
  }

  toJSON() {
    const elements = this.elements,
          json = {
            elements
          };

    return json;
  }

  toFloat32Array() {
    const float32Array = new Float32Array(this.elements);

    return float32Array;
  }

  static fromNothing() {
    const elements = null,
          vector = new Vector(elements);

    return vector;
  }

  static fromElements(elements) {
    const vector = new Vector(elements);

    return vector;
  }

  static fromFloat32Array(float32Array) {
    const elements = Array.from(float32Array),  ///
          vector = new Vector(elements);

    return vector;
  }

  static fromWidthAndElement(width, element) {
    const elements = [];

    for (let count = 0; count < width; count++) {
      elements.push(element);
    }

    const vector = new Vector(elements);

    return vector;
  }
}
