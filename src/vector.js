"use strict";

import { vectorSoftmax, vectorScalarMultiply, vectorMultiplyMatrix, vectorSubtractVector, vectorOuterMultiplyVector } from "../lib.node";

import Matrix from "./matrix";

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
          resultFloat32Array = vectorSoftmax(vectorFloat32Array),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  argmax() {
    let maximumElement = -Infinity

    const elements = this.getElements(),
          argmax = elements.reduce((argmax, element, index) => {
            if (element > maximumElement) {
              maximumElement = element; ///

              argmax = index; ///
            }

            return argmax;
          }, -1);

    return argmax;
  }

  elementAt(index) {
    const element = this.elements[index];

    return element;
  }

  subtractVector(vector) {
    const vectorA = this, ///
          vectorB = vector, ///
          vectorAFloat32Array = vectorA.toFloat32Array(),
          vectorBFloat32Array = vectorB.toFloat32Array(),
          resultFloat32Array = vectorSubtractVector(vectorAFloat32Array, vectorBFloat32Array),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  multiplyByScalar(scalar) {
    const vectorFloat32Array = this.toFloat32Array(),
          resultFloat32Array = vectorScalarMultiply(vectorFloat32Array, scalar),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  multiplyByMatrix(matrix) {
    const rows = matrix.getRows(),
          columns = matrix.getColumns(),
          vectorFloat32Array = this.toFloat32Array(),
          matrixFloat32Array = matrix.toFloat32Array(),
          resultFloat32Array = vectorMultiplyMatrix(vectorFloat32Array, matrixFloat32Array, rows, columns),
          resultVector = Vector.fromFloat32Array(resultFloat32Array);

    return resultVector;
  }

  outerMultiplyByVector(vector) {
    const vectorA = this, ///
          vectorB = vector, ///
          vectorAFloat32Array = vectorA.toFloat32Array(),
          vectorBFloat32Array = vectorB.toFloat32Array(),
          vectorAWidth = vectorA.getWidth(),
          vectorBWidth = vectorB.getWidth(),
          rows = vectorAWidth,  ///
          columns = vectorBWidth, ///
          resultFloat32Array = vectorOuterMultiplyVector(vectorAFloat32Array, vectorBFloat32Array),
          resultMatrix = Matrix.fromRowsColumnsAndFloat32Array(rows, columns, resultFloat32Array);

    return resultMatrix;
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

  static fromElements(Class, elements) {
    if (elements === undefined) {
      elements = Class; ///

      Class = Vector; ///
    }

    const vector = new Class(elements);

    return vector;
  }

  static fromFloat32Array(Class, float32Array) {
    if (float32Array === undefined) {
      float32Array = Class; ///

      Class = Vector; ///
    }

    const elements = Array.from(float32Array),  ///
          vector = new Class(elements);

    return vector;
  }
}
