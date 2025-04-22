"use strict";

import Vector from "../vector";

import { random } from "../utilities/random";

export default class FrequencyVector extends Vector {
  isEmpty() {
    const frequencies = this.getFrequencies(),
          empty = frequencies.every((frequency) => {
            if (frequency === 0) {
              return true;
            }
          });

    return empty;
  }

  getLength() {
    const width = this.getWidth(),
          length = width;

    return length;
  }

  getFrequencies() {
    const elements = this.getElements(),
          frequencies = elements;  ///

    return frequencies;
  }

  getTotalFrequency() {
    const frequencies = this.getFrequencies(),
          totalFrequency = frequencies.reduce((totalFrequency, frequency) => {
            totalFrequency += frequency;

            return totalFrequency;
          }, 0);

    return totalFrequency;
  }

  sample() {
    const length = this.getLength(),
          frequencies = this.getFrequencies(),
          totalFrequency = this.getTotalFrequency(),
          lowerBound = 0,
          upperBound = totalFrequency,  ///
          randomAccumulatedFrequency = random(lowerBound, upperBound);

    let index,
        accumulatedFrequency = 0;

    for (index = 0; index < length; index++) {
      const frequency = frequencies[index];

      accumulatedFrequency += frequency;

      if (randomAccumulatedFrequency < accumulatedFrequency) {
        break;
      }
    }

    return index;
  }

  predictIndex() {
    let index = null;

    const empty = this.isEmpty();

    if (!empty) {
      index = this.sample();
    }

    return index;
  }

  static fromProbabilityVector(probabilityVector) {
    const count = probabilityVector.getCount(),
          length = probabilityVector.getLength(),
          intermediateVector = probabilityVector.multiplyByScalar(count),
          element = 1 / length,
          width = length, ///
          initialVector = Vector.fromWidthAndElement(width, element),
          vector = intermediateVector.subtractVector(initialVector);

    let elements;

    elements = vector.getElements();

    elements = roundElements(elements); ///

    const frequencyVector = new FrequencyVector(elements);

    return frequencyVector;
  }
}

function roundElements(elements) {
  elements = elements.map((element) => {  ///
    element = Math.round(element);

    return element;
  });

  return elements;
}