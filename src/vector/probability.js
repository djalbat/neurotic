"use strict";

import Vector from "../vector";
import FrequencyVector from "../vector/frequency";

export default class ProbabilityVector extends Vector {
  constructor(elements, count) {
    super(elements);

    this.count = count;
  }

  getCount() {
    return this.count;
  }

  getLength() {
    const width = this.getWidth(),
          length = width; ///

    return length;
  }

  getProbabilities() {
    const elements = this.getElements(),
          probabilities = elements; ///

    return probabilities;
  }

  getProbabilityAt(index) {
    const probabilities = this.getProbabilities(),
          probability = probabilities[index];

    return probability;
  }

  argmax() {
    let maximumProbability = -Infinity

    const probabilities = this.getProbabilities(),
          argmax = probabilities.reduce((argmax, probability, index) => {
            if (probability > maximumProbability) {
              maximumProbability = probability; ///

              argmax = index; ///
            }

            return argmax;
          }, -1);

    return argmax;
  }

  predictIndex() {
    const probabilityVector = this, ///
          frequencyVector = FrequencyVector.fromProbabilityVector(probabilityVector),
          index = frequencyVector.predictIndex();

    return index;
  }

  maximumProbability() {
    let maximumProbability = -Infinity;

    const probabilities = this.getProbabilities();

    probabilities.forEach((probability) => {
      if (probability > maximumProbability) {
        maximumProbability = probability; ///
      }
    });

    return maximumProbability;
  }

  static fromFloat32Array(float32Array) {
    const count = null,
          elements = Array.from(float32Array),  ///
          probabilityVector = new ProbabilityVector(elements, count);

    return probabilityVector;
  }

  static fromVectorAndCount(vector, count) {
    const elements = vector.getElements(),
          probabilityVector = new ProbabilityVector(elements, count);

    return probabilityVector;
  }
}
