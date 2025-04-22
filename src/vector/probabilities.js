"use strict";

import Vector from "../vector";

import { random } from "../utilities/random";

import { DEFAULT_CUTOFF, DEFAULT_THRESHOLD } from "../defaults";

export default class ProbabilitiesVector extends Vector {
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

  sample(cutoff = DEFAULT_CUTOFF) {
    const length = this.getLength(),
        probabilities = this.getProbabilities(),
        sortedIndexes = sortIndexes(probabilities);

    let sortedIndex,
        accumulatedProbability = 0;

    const lowerBound  = 0,
          upperBound = 1 - cutoff,
          number = random(lowerBound, upperBound);

    for (let index = 0; index < length; index++) {
      sortedIndex = sortedIndexes[index];

      const probability = probabilities[sortedIndex];

      accumulatedProbability += probability;

      if (number < accumulatedProbability) {
        break;
      }
    }

    const index = sortedIndex;  ///

    return index;
  }

  entropy() {
    const probabilities = this.getProbabilities(),
          entropy = probabilities.reduce((entropy, probability) => {
            if (probability > 0) {
              const information = Math.log2(probability);

              entropy = entropy - (probability * information);
            }

            return entropy;
          }, 0);

    return entropy;
  }

  maximumEntropy() {
    const width = this.getWidth(),
          maximumEntropy = Math.log2(width);

    return maximumEntropy;
  }

  normalisedEntropy() {
    const entropy = this.entropy(),
          maximumEntropy = this.maximumEntropy(),
          normalisedEEntropy = (entropy / maximumEntropy);

    return normalisedEEntropy;
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

  predictIndex(cutoff = DEFAULT_CUTOFF, threshold = DEFAULT_THRESHOLD) {
    const normalisedEntropy = this.normalisedEntropy(),
          index = (normalisedEntropy < threshold) ?
                     this.sample(cutoff) :
                       null;

    return index;
  }

  static fromVector(vector) {
    const elements = vector.getElements(),
          probabilitiesVector = new ProbabilitiesVector(elements);

    return probabilitiesVector;
  }

  static fromFloat32Array(float32Array) {
    const elements = Array.from(float32Array),  ///
          probabilitiesVector = new ProbabilitiesVector(elements);

    return probabilitiesVector;
  }
}

function sortIndexes(probabilities) {
  const indexes = [],
        length = probabilities.length;

  for (let index = 0; index < length; index++) {
    indexes.push(index);
  }

  indexes.sort((indexA, indexB) => {
    const probabilityA = probabilities[indexA],
          probabilityB = probabilities[indexB],
          difference = (probabilityB - probabilityA);

    return difference;
  });

  const sortedIndexes = indexes;  ///

  return sortedIndexes;
}
