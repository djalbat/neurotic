"use strict";

import Element from "../element";
import FrequencyVector from "../vector/frequency";

export default class Weights extends Element {
  constructor(frequencyVectors) {
    super();

    this.frequencyVectors = frequencyVectors;
  }

  getFrequencyVectors() {
    return this.frequencyVectors;
  }

  getFrequencyVectorAtRow(row) {
    const index = row,  ///
          frequencyVector = this.frequencyVectors[index];

    return frequencyVector;
  }

  train(transition) {
    const row = transition.getRow(),
          column = transition.getColumn(),
          frequencyVector = this.getFrequencyVectorAtRow(row);

    frequencyVector.train(column);
  }

  forward(row) {
    const frequencyVector = this.getFrequencyVectorAtRow(row),
          column = frequencyVector.predict();

    return column;
  }

  getCountAtRow(row) {
    const index = row,  ///
          element = this.vector.getElementAt(index),
          count = element;  ///

    return count;
  }

  setCountAtRow(row, count) {
    const index = row,  ///
          element = count;  ///

    this.vector.setElementAt(index, element);
  }

  initialise(size) {
    this.frequencyVectors = [];

    for (let index = 0; index < size; index++) {
      const frequencyVector = FrequencyVector.fromSize(size);

      this.frequencyVectors.push(frequencyVector);
    }
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
    const frequencyVectors = frequencyVectorsFromJSON(json),
          weights = new Weights(frequencyVectors);

    return weights;
  }

  static fromNothing() {
    const properties = {},
          frequencyVectors = null,
          weights = Element.fromProperties(Weights, properties, frequencyVectors);

    return weights;
  }

  static fromProperties(properties, ...remainingArguments) {
    const frequencyVectors = null,
          weights = Element.fromProperties(Weights, properties, frequencyVectors, ...remainingArguments);

    return weights;
  }
}
