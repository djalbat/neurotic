"use strict";

import Matrix from "../matrix";
import Element from "../element";

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

  train(oneHotVectors) {
    debugger
  }

  asJSON() {
    const matrixJSON = this.matrix.asJSON(),
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
