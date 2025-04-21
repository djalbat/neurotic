"use strict";

import { evaluate, forward } from "../../lib.node";

import Vector from "../vector";
import Matrix from "../matrix";
import Element from "../element";
import WeightsResult from "../result/weights";

import { matrixFromJSON } from "../utilities/json";

export default class Weights extends Element {
  constructor(properties, childElements, matrix) {
    super(properties, childElements);

    this.matrix = matrix;
  }

  getMatrix() {
    return this.matrix;
  }

  initialise(size) {
    this.matrix.initialise(size);
  }

  prepare(inputOneHotVector, outputOneHotVector) {
    const logitsVector = inputOneHotVector.multiplyByMatrix(this.matrix),
          logitsVectorSoftmax = logitsVector.softmax(),
          probabilitiesVector = logitsVectorSoftmax,  ///
          gradientVector = probabilitiesVector.subtractVector(outputOneHotVector),
          deltaMatrix = inputOneHotVector.outerMultiplyByVector(gradientVector),
          weightsResult = WeightsResult.fromOutputOneHotVectorProbabilitiesVectorAndDeltaMatrix(outputOneHotVector, probabilitiesVector, deltaMatrix);

    return weightsResult;
  }

  update(scaledDeltasMatrix) {
    this.matrix = this.matrix.subtractMatrix(scaledDeltasMatrix);
  }

  forward(oneHotVector) {
    const oneHotVectorFloat32Array = oneHotVector.toFloat32Array(),
          matrixFloat32Array = this.matrix.toFloat32Array(),
          rows = this.matrix.getRows(),
          columns = this.matrix.getColumns(),
          probabilitiesFloat32Array = forward(oneHotVectorFloat32Array, matrixFloat32Array, rows, columns),
          probabilitiesVector = Vector.fromFloat32Array(probabilitiesFloat32Array);

    return probabilitiesVector;
  }

  evaluate(inputOneHotVector, outputOneHotVector) {
    const oneHotVector = inputOneHotVector, ///
          oneHotVectorFloat32Array = oneHotVector.toFloat32Array(),
          matrixFloat32Array = this.matrix.toFloat32Array(),
          rows = this.matrix.getRows(),
          columns = this.matrix.getColumns(),
          probabilitiesFloat32Array = evaluate(oneHotVectorFloat32Array, matrixFloat32Array, rows, columns),
          probabilitiesVector = Vector.fromFloat32Array(probabilitiesFloat32Array),
          weightsResult = WeightsResult.fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector);

    return weightsResult;
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
