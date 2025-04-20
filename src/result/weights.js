"use strict";

import Result from "../result";

import { registryAssigned } from "../registry";

export default registryAssigned(class WeightsResult extends Result {
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
          result = new Result(accuracy, loss);

    return result;
  }
});
