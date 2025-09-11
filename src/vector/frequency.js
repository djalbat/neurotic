"use strict";

import Vector from "../vector";

import { random } from "../utilities/random";
import { elementsAsElementsString } from "../vector";

export default class FrequencyVector extends Vector {
  constructor(elements, count) {
    super(elements);

    this.count = count;
  }

  getCount() {
    return this.count;
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

  getFrequencyAt(index) {
    const element = this.getElementAt(index),
          frequency = element;  ///

    return frequency;
  }

  setFrequencyAt(index, frequency) {
    const element = frequency;  ///

    this.setElementAt(index, element);
  }

  getTotalFrequency() {
    const frequencies = this.getFrequencies(),
          totalFrequency = frequencies.reduce((totalFrequency, frequency) => {
            totalFrequency += frequency;

            return totalFrequency;
          }, 0);

    return totalFrequency;
  }

  isEmpty() {
    const empty = (this.count === 1);

    return empty;
  }

  train(row) {
    const index = row;  ///

    let frequency = this.getFrequencyAt(index);

    frequency++;

    this.count++;

    this.setFrequencyAt(index, frequency);
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

  predict() {
    let column = null;

    const empty = this.isEmpty();

    if (!empty) {
      const index = this.sample();

      column = index; ///
    }

    return column;
  }

  asString() {
    const elements = this.getElements(),
          elementsString = elementsAsElementsString(elements),
          string = `[ ${this.count}: ${elementsString} ]`;

    return string;
  }

  toJSON() {
    const elements = this.getElements(),
          count = this.count,
          json = {
            elements,
            count
          };

    return json;
  }

  static fromSize(size) {
    const count = 1,
          element = 0,
          elements = [];

    for (let index = 0; index < size; index++) {
      elements.push(element);
    }

    const frequencyVector = new FrequencyVector(elements, count);

    return frequencyVector;
  }

  static fromJSON(json) {
    const { elements, count } = json,
          frequencyVector = new FrequencyVector(elements, count);

    return frequencyVector;
  }
}
