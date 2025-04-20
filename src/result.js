"use strict";

import { registryAssigned } from "./registry";

export default registryAssigned(class Result {
  constructor(accuracy, loss) {
    this.accuracy = accuracy;
    this.loss = loss;
  }

  getAccuracy() {
    return this.accuracy;
  }

  getLoss() {
    return this.loss;
  }

  log(console) {
    console.log(`Accuracy: ${this.accuracy}, loss: ${this.loss}.`)
  }

  static fromAccuracyAndLoss(accuracy, loss) {
    const result = new Result(accuracy, loss);

    return result;
  }

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
