"use strict";

export default class Result {
  constructor(loss, accuracy) {
    this.loss = loss;
    this.accuracy = accuracy;
  }

  getLoss() {
    return this.loss;
  }

  getAccuracy() {
    return this.accuracy;
  }

  log(console) {
    console.log(`Accuracy: ${this.accuracy}, loss: ${this.loss}.`)
  }
}
