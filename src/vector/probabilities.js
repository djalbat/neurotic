"use strict";

import Vector from "../vector";

import { random } from "../utilities/random";

import { DEFAULT_CUTOFF, DEFAULT_THRESHOLD, DEFAULT_TEMPERATURE } from "../defaults";

export default class ProbabilitiesVector extends Vector {
  getProbabilities() {
    const elements = this.getElements(),
          probabilities = elements; ///

    return probabilities;
  }

  probabilityAt(index) {
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

  sample(cutoff = DEFAULT_CUTOFF, temperature = DEFAULT_TEMPERATURE) {
    const lowerBound  = 0,
          upperBound = 1 - cutoff,
          number = random(lowerBound, upperBound);

    let probabilities;

    probabilities = this.getProbabilities();

    probabilities = sharpenProbabilities(probabilities, temperature);

    const length = probabilities.length,
          sortedIndexes = sortIndexes(probabilities);

    let sortedIndex,
        accumulatedProbability = 0;

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

  predictIndex(cutoff = DEFAULT_CUTOFF, threshold = DEFAULT_THRESHOLD, temperature = DEFAULT_TEMPERATURE) {
    const normalisedEntropy = this.normalisedEntropy(),
          index = (normalisedEntropy < threshold) ?
                     this.sample(cutoff, temperature) :
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

function sharpenProbabilities(probabilities, temperature) {
  const power = 1 / temperature,
        transformedProbabilities = probabilities.map((probability) => {
          const transformedProbability = Math.pow(probability, power);

          return transformedProbability;
        }),
        totalTransformedProbabilities = transformedProbabilities.reduce((totalTransformedProbabilities, probability) => {
          totalTransformedProbabilities = totalTransformedProbabilities + probability;

          return totalTransformedProbabilities;
        }, 0);

  probabilities = transformedProbabilities.map(transformedProbability => {
    const probability = (transformedProbability / totalTransformedProbabilities);

    return probability;
  });

  return probabilities;
}