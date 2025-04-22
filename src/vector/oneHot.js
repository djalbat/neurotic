"use strict";

import Vector from "../vector";

export default class OneHotVector extends Vector {
  constructor(elements, index) {
    super(elements);

    this.index = index;
  }

  getIndex() {
    return this.index;
  }

  argmax() {
    const argmax = this.index;
    
    return argmax;
  }

  static fromTokenAndVocabulary(token, vocabulary) {
    const size = vocabulary.getSize(),
          index = vocabulary.indexOfToken(token),
          elements = [];

    for (let count = 0; count < size; count++) {
      const element = (count === index) ?
                        1 :
                          0;

      elements.push(element);
    }

    const oneHotVector = new OneHotVector(elements, index);

    return oneHotVector;
  }
}
