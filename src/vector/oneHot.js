"use strict";

import Vector from "../vector";

export default class OneHotVector extends Vector {
  argmax() {
    const elements = this.getElements(),
          argmax = elements.findIndex((element) => {
            if (element === 1) {
              return true;
            }
          });

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

    const oneHotVector = new OneHotVector(elements);

    return oneHotVector;
  }
}
