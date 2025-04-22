"use strict";

import Transition from "./transition";

export default class Chunk {
  constructor(tokens) {
    this.tokens = tokens;
  }

  getTokens() {
    return this.tokens;
  }

  forEachToken(callback) { this.tokens.forEach(callback); }

  forEachTransition(callback) {
    const tokensLength = this.tokens.length,
          transitionsLength = tokensLength - 1;

    for (let index = 0; index < transitionsLength; index++) {
      const start = index,  ///
            end = index + 2,
            tokens = this.tokens.slice(start, end),
            transition = Transition.fromTokens(tokens);

      callback(transition);
    }
  }

  toJSON() {
    const tokens = this.tokens,
          json = {
            tokens
          };

    return json;
  }

  static fromJSON(json) {
    const tokens = json,  //
          chunk = new Chunk(tokens);

    return chunk;
  }
}
