"use strict";

import Element from "../element";
import registry from "../registry";

import { matrixFromJSON } from "../utilities/json";
import { registryAssigned } from "../registry";

export default registryAssigned(class Weights extends Element {
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

  train(oneHotVectors, learningRate) {
    const [ inputOneHotVector, outputOneHotVector ] = oneHotVectors,
          logitsVector = this.matrix.multiplyVector(inputOneHotVector),
          logitsVectorSoftmax = logitsVector.softmax(),
          probabilitiesVector = logitsVectorSoftmax,  ///
          gradientVector = probabilitiesVector.subtractVector(outputOneHotVector),
          deltasMatrix = inputOneHotVector.outerMultiplyVector(gradientVector),
          scaledDeltasMatrix = deltasMatrix.scalarMultiply(learningRate);

    this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);

    const { Result } = registry,
          result = Result.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);

    return result;
  }

  evaluate(oneHotVectors) {
    const [ inputOneHotVector, outputOneHotVector ] = oneHotVectors,
          logitsVector = this.matrix.multiplyVector(inputOneHotVector),
          logitsVectorSoftmax = logitsVector.softmax(),
          probabilitiesVector = logitsVectorSoftmax;  ///

    const { Result } = registry,
          result = Result.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);

    return result;
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
    const { Matrix, Weights } = registry,
          matrix = Matrix.fromNothing(),
          weights = Element.fromProperties(Weights, properties, matrix, ...remainingArguments);

    return weights;
  }
});
