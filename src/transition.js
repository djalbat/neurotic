"use strict";

import OneHotVector from "./vector/oneHot";

import { first, second } from "./utilities/array";

export default class Transition {
  constructor(tokens) {
    this.tokens = tokens;
  }

  getTokens() {
    return this.tokens;
  }

  inputOneHotVector(vocabulary) {
    const firstToken = first(this.tokens),
          inputToken = firstToken,  ///
          inputOneHotVector = OneHotVector.fromTokenAndVocabulary(inputToken, vocabulary);

    return inputOneHotVector;
  }

  outputOneHotVector(vocabulary) {
    const secondToken = second(this.tokens),
          outputToken = secondToken,  ///
          outputOneHotVector = OneHotVector.fromTokenAndVocabulary(outputToken, vocabulary);

    return outputOneHotVector;
  }

  static fromTokens(tokens) {
    const transition = new Transition(tokens);

    return transition;
  }
}
