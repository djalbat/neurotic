"use strict";

import { fileSystemUtilities } from "necessary";

import Head from "../element/head";
import Element from "../element";
import Vocabulary from "./vocabulary";

import { DEFAULT_MODEL_FILE_PATH } from "../defaults";
import { elementFromChildElements } from "../utilities/element";
import { headFromJSON, vocabularyFromJSON } from "../utilities/json";

const { writeFile } = fileSystemUtilities;

export default class Model extends Element {
  constructor(vocabulary, head) {
    super();

    this.vocabulary = vocabulary;
    this.head = head;
  }

  getVocabulary() {
    return this.vocabulary;
  }

  getHead() {
    return this.head;
  }

  train(corpus) {
    corpus.forEachChunk((chunk) => {
      chunk.forEachTransition(this.vocabulary, (transition) => {
        this.head.train(transition);
      });
    });
  }

  infer(token, length) {
    const tokens = [];

    for (let count = 0; count < length; count++) {
      token = this.forward(token);

      if (token === null) {
        break;
      }

      tokens.push(token);
    }

    return tokens;
  }

  forward(token) { return this.head.forward(token, this.vocabulary); }

  serialise(filePath = DEFAULT_MODEL_FILE_PATH) {
    const json = this.toJSON(),
          jsonString = JSON.stringify(json),
          content = jsonString; ///

    writeFile(filePath, content);
  }

  initialise() {
    this.vocabulary.initialise();
    
    this.head.initialise(this.vocabulary);
  }

  toJSON() {
    const vocabularyJSON = this.vocabulary.toJSON(),
          headJSON = this.head.toJSON(),
          vocabulary = vocabularyJSON,  ///
          head = headJSON, ///
          json = {
            vocabulary,
            head
          };

    return json;
  }

  static fromJSON(json) {
    const vocabulary = vocabularyFromJSON(json),
          head = headFromJSON(json),
          model = new MOdel(vocabulary, head);

    return model;
  }

  static fromProperties(properties, ...remainingArguments) {
    const { childElements } = properties,
          vocabulary = elementFromChildElements(childElements, Vocabulary),
          head = elementFromChildElements(childElements, Head),
          model = Element.fromProperties(Model, properties, vocabulary, head, ...remainingArguments);

    model.initialise();

    return model;
  }
}
