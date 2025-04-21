"use strict";

import Pair from "./pair";

export default class Chunk {
  constructor(tokens) {
    this.tokens = tokens;
  }

  getTokens() {
    return this.tokens;
  }

  forEachPair(callback) {
    const tokensLength = this.tokens.length,
          pairsLength = tokensLength - 1;

    for (let index = 0; index < pairsLength; index++) {
      const start = index,  ///
            end = index + 2,
            tokens = this.tokens.slice(start, end),
            pair = Pair.fromTokens(tokens);

      callback(pair);
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
