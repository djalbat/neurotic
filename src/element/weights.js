"use strict";

import Vector from "../vector";
import Matrix from "../matrix";
import Element from "../element";
import ProbabilityVector from "../vector/probability";

import { matrixFromJSON } from "../utilities/json";

export default class Weights extends Element {
  constructor(properties, childElements, vector, matrix) {
    super(properties, childElements);

    this.vector = vector;
    this.matrix = matrix;
  }

  getVector() {
    return this.vector;
  }

  getMatrix() {
    return this.matrix;
  }

  train(transition, vocabulary) {
    const inputOneHotVector = transition.inputOneHotVector(vocabulary),
          outputOneHotVector = transition.outputOneHotVector(vocabulary),
          index = inputOneHotVector.getIndex(),
          row = index; ///

    let count,
        vector;

    count = this.getCountAtRow(row);

    vector = this.matrix.getVectorAtRow(Vector, row);

    const weightedVector = vector.multiplyByScalar(count),
          augmentedWeightsVector = weightedVector.addVector(outputOneHotVector);

    count++;

    vector = augmentedWeightsVector.divideByScalar(count);

    this.setCountAtRow(row, count);

    this.matrix.setVectorAtRow(row, vector);
  }

  forward(oneHotVector) {
    const index = oneHotVector.getIndex(),
          row = index, ///
          count = this.getCountAtRow(row),
          vector = this.matrix.getVectorAtRow(Vector, row),
          probabilityVector = ProbabilityVector.fromVectorAndCount(vector, count);

    return probabilityVector;
  }

  getCountAtRow(row) {
    const index = row,  ///
          element = this.vector.getElementAt(index),
          count = element;  ///

    return count;
  }

  setCountAtRow(row, count) {
    const index = row,  ///
          element = count;  ///

    this.vector.setElementAt(index, element);
  }

  initialise(size) {
    this.vector.initialise(size);
    this.matrix.initialise(size);
  }

  toJSON() {
    const matrixJSON = this.matrix.toJSON(),
          matrix = matrixJSON,  //
          json = {
            matrix
          };

    return json;
  }

  static fromJJSON(json) {
    const matrix = matrixFromJSON(json),
          weights = new Weights(matrix);

    return weights;
  }

  static fromProperties(properties, ...remainingArguments) {
    const vector = Vector.fromNothing(),
          matrix = Matrix.fromNothing(),
          weights = Element.fromProperties(Weights, properties, vector, matrix, ...remainingArguments);

    return weights;
  }
}
