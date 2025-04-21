"use strict";

import OneHotVector from "./vector/oneHot";

export default class Pair {
  constructor(tokens) {
    this.tokens = tokens;
  }

  getTokens() {
    return this.tokens;
  }

  asOneHotVectors(vocabulary) {
    const oneHotVectors = this.tokens.map((token) => {
      const oneHotVector = OneHotVector.fromTokenAndVocabulary(token, vocabulary);

      return oneHotVector;
    });

    return oneHotVectors;
  }

  static fromTokens(tokens) {
    const pair = new Pair(tokens);

    return pair;
  }
}
