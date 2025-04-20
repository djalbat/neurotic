"use strict";

import Result from "../result";

export default class WeightsResult extends Result {
  constructor(loss, accuracy, deltaMatrix){
    super(loss, accuracy);

    this.deltaMatrix = deltaMatrix;
  }

  getDeltaMatrix() {
    return this.deltaMatrix;
  }

  static fromOutputOneHotVectorAndProbabilitiesVectorAndDeltaMatrix(outputOneHotVector, probabilitiesVector, deltaMatrix) {
    const probabilitiesVectorArgmax = probabilitiesVector.argmax(),
          outputOneHotVectorArgmax = outputOneHotVector.argmax(),
          predictedIndex = probabilitiesVectorArgmax, ///
          expectedIndex = outputOneHotVectorArgmax, ///
          index = outputOneHotVectorArgmax, ///
          probability = probabilitiesVector.elementAt(index),
          loss = -Math.log(probability),
          accuracy = (predictedIndex === expectedIndex) ?
                        1 :
                          0,
          result = new WeightsResult(loss, accuracy, deltaMatrix);

    return result;
  }
}

