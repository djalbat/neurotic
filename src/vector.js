"use strict";

export default class Vector {
  constructor(elements) {
    this.elements = elements;
  }

  getElements() {
    return this.elements;
  }

  getWidth() {
    const elementsLength = this.elements.length,
          width = elementsLength; ///

    return width;
  }

  toFloat32Array() {
    const float32Array = new Float32Array(this.elements);

    return float32Array;
  }

  static fromElements(Class, elements) {
    if (elements === undefined) {
      elements = Class; ///

      Class = Vector; ///
    }

    const vector = new Class(elements);

    return vector;
  }

  static fromFloat32Array(Class, float32Array) {
    if (float32Array === undefined) {
      float32Array = Class; ///

      Class = Vector; ///
    }

    const elements = Array.from(float32Array),  ///
          vector = new Class(elements);

    return vector;
  }
}
