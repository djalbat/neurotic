"use strict";

import Result from "../result";

export default class WeightsResult extends Result {
  static fromOutputOneHotVectorAndProbabilitiesVector(outputOneHotVector, probabilitiesVector) {
    const probabilitiesVectorArgmax = probabilitiesVector.argmax(),
          outputOneHotVectorArgmax = outputOneHotVector.argmax(),
          predictedIndex = probabilitiesVectorArgmax, ///
          expectedIndex = outputOneHotVectorArgmax, ///
          index = outputOneHotVectorArgmax, ///
          probability = probabilitiesVector.elementAt(index),
          accuracy = (predictedIndex === expectedIndex) ?
                        1 :
                          0,
          loss = -Math.log(probability),
          result = new WeightsResult(accuracy, loss);

    return result;
  }
}

