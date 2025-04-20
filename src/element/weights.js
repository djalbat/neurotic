"use strict";

import Matrix from "../matrix";
import Element from "../element";
import WeightsResult from "../result/weights";

import { matrixFromJSON } from "../utilities/json";

export default class Weights extends Element {
  constructor(matrix) {
    super();

    this.matrix = matrix;
  }

  getMatrix() {
    return this.matrix;
  }

  initialise(size) {
    this.matrix.initialise(size);
  }

  step(oneHotVectors, learningRate) {
    const [ inputOneHotVector, outputOneHotVector ] = oneHotVectors,
          logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix),
          logitsVectorSoftmax = logitsVector.softmax(),
          probabilitiesVector = logitsVectorSoftmax,  ///
          gradientVector = probabilitiesVector.subtractVector(outputOneHotVector),
          deltasMatrix = inputOneHotVector.outerMultiplyByVector(gradientVector),
          scaledDeltasMatrix = deltasMatrix.multiplyByScalar(learningRate);

    this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);

    const weightsResult = WeightsResult.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);

    return weightsResult;
  }

  evaluate(oneHotVectors) {
    const [ inputOneHotVector, outputOneHotVector ] = oneHotVectors,
          logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix),
          logitsVectorSoftmax = logitsVector.softmax(),
          probabilitiesVector = logitsVectorSoftmax,
          weightsResult = WeightsResult.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);

    return weightsResult;
  }

  forward(oneHotVector) {
    const inputOneHotVector = oneHotVector, ///
          logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix),
          logitsVectorSoftmax = logitsVector.softmax(),
          probabilitiesVector = logitsVectorSoftmax;  ///

    return probabilitiesVector;
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
    const matrix = Matrix.fromNothing(),
          weights = Element.fromProperties(Weights, properties, matrix, ...remainingArguments);

    return weights;
  }
}
