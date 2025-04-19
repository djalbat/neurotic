"use strict";

import Vector from "../vector";

export default class OneHotVector extends Vector {
  static fromTokenAndVocabulary(token, vocabulary) {
    const index = vocabulary.indexOfToken(token);

    if (index === -1) {
      throw new Error(`The '${token}' token is not in the vocabulary.`);
    }

    const size = vocabulary.getSize(),
          elements = [];

    for (let count = 0; count < size; count++) {
      const element = (count === index) ?
                        1 :
                          0;

      elements.push(element);
    }

    const oneHotVector = new OneHotVector(elements);

    return oneHotVector;
  }

  static fromElements(elements) { return Vector.fromElements(OneHotVector, elements); }
}
