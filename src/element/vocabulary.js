"use strict";

import { fileSystemUtilities } from "necessary/lib/main";

import Element from "../element";

import { CARRIAGE_RETURN } from "../constants";
import { registryAssigned } from "../registry";
import { DEFAULT_VOCABULARY_TOKENS, DEFAULT_VOCABULARY_FILE_PATH } from "../defaults";

const { readFile } = fileSystemUtilities;

export default registryAssigned(class Vocabulary extends Element {
  constructor(tokens, filePath) {
    super();

    this.tokens = tokens;
    this.filePath = filePath;
  }

  getTokens() {
    return this.tokens;
  }

  getFilePath() {
    return this.filePath;
  }

  getSize() {
    const tokensLength = this.tokens.length,
          size = tokensLength;  ///

    return size;
  }

  tokenAt(index) {
    const token = this.tokens[index] || null;

    return token;
  }

  initialise() {
    if (this.tokens !== null) {
      return;
    }

    const content = readFile(this.filePath);

    this.tokens = content.split(CARRIAGE_RETURN);
  }

  indexOfToken(token) {
    const index = this.tokens.indexOf(token);

    return index;
  }

  toJSON() {
    const tokens = this.tokens,
          json = {
            tokens
          };

    return json;
  }

  static fromJJSON(json) {
    const { tokens } = json,
          vocabulary = new Vocabulary(tokens);

    return vocabulary;
  }

  static fromProperties(properties, ...remainingArguments) {
    const { tokens = DEFAULT_VOCABULARY_TOKENS, filePath = DEFAULT_VOCABULARY_FILE_PATH } = properties,
          vocabulary = Element.fromProperties(Vocabulary, properties, tokens, filePath, ...remainingArguments);

    return vocabulary;
  }
});
