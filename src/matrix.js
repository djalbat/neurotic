"use strict";

import { random } from "./utilities/random";

export default class Matrix {
  constructor(width, height, elements) {
    this.width = width;
    this.height = height;
    this.elements = elements;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getElements() {
    return this.elements;
  }

  initialise(size) {
    this.width = size;  ///
    this.height = size; ///
    this.elements = [];

    const cardinality = this.width * this.height,
          lowerBound = -1,
          upperBound = +1;

    for (let count = 0; count < cardinality; count++) {
      const element = random(lowerBound, upperBound);

      this.elements.push(element);
    }
  }

  toJSON() {
    const width = this.width,
          height = this.height,
          elements = this.elements,
          json = {
            width,
            height,
            elements
          };

    return json;
  }

  static fromJSON(json) {
    const { width, height, elements } = json,  //
          matrix = new Matrix(width, height, elements);

    return matrix;
  }

  static fromNothing() {
    const width = null,
          height = null,
          elements = null,
          matrix = new Matrix(width, height, elements);

    return matrix;
  }
}
