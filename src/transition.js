"use strict";

import { first, second } from "./utilities/array";

export default class Transition {
  constructor(row, column) {
    this.row = row;
    this.column = column;
  }

  getRow() {
    return this.row;
  }

  getColumn() {
    return this.column;
  }

  static fromTokensAndVocabulary(tokens, vocabulary) {
    const firstToken = first(tokens),
          secondToken = second(tokens);

    tokens = vocabulary.getTokens();

    const row = tokens.indexOf(firstToken),
          column = tokens.indexOf(secondToken),
          transition = new Transition(row, column);

    return transition;
  }
}
