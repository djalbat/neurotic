"use strict";

export default class Result {
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
}
