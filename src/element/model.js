"use strict";

import { fileSystemUtilities } from "necessary/lib/main";

import Element from "../element";
import Weights from "../element/weights";
import Vocabulary from "../element/vocabulary";

import { DEFAULT_MODEL_FILE_PATH } from "../defaults";
import { elementFromChildElements } from "../utilities/element";
import { oneHotVectorsFromChunkSizeAndTokens } from "../utilities/training";
import { weightsFromJSON, vocabularyFromJSON } from "../utilities/json";

const { writeFile } = fileSystemUtilities;

export default class Model extends Element {
  constructor(vocabulary, weights) {
    super();

    this.vocabulary = vocabulary;
    this.weights = weights;
  }

  getVocabulary() {
    return this.vocabulary;
  }

  getWeights() {
    return this.weights;
  }

  initialise() {
    if (this.vocabulary === null) {
      throw Exception("The model has no vocabulary.")
    }

    this.vocabulary.initialise();

    if (this.weights === null) {
      throw Exception("The model has no weights.")
    }

    const size = this.vocabulary.getSize();

    this.weights.initialise(size);
  }

  train(corpus) {
    const chunks = corpus.getChunks();

    chunks.forEach((chunk) => {
      const size = this.vocabulary.getSize(),
            tokens = this.vocabulary.getTokens(),
            oneHotVectors = oneHotVectorsFromChunkSizeAndTokens(chunk, size, tokens);

      this.weights.train(oneHotVectors);
    });
  }

  serialise(filePath = DEFAULT_MODEL_FILE_PATH) {
    const json = this.asJSON(),
          jsonString = JSON.stringify(json),
          content = jsonString; ///

    writeFile(filePath, content);
  }

  asJSON() {
    const vocabularyJSON = this.vocabulary.asJSON(),
          weightsJSON = this.weights.toJSON(),
          vocabulary = vocabularyJSON,  ///
          weights = vocabulary, ///
          json = {
            vocabulary,
            weights
          };

    return json;
  }

  static fromJSON(json) {
    const vocabulary = vocabularyFromJSON(json),
          weights = weightsFromJSON(json),
          model = new MOdel(vocabulary, weights);

    return model;
  }

  static fromProperties(properties, ...remainingArguments) {
    const { childElements } = properties,
          vocabulary = elementFromChildElements(childElements, Vocabulary),
          weights = elementFromChildElements(childElements, Weights),
          model = Element.fromProperties(Model, properties, vocabulary, weights, ...remainingArguments);

    model.initialise();

    return model;
  }
}
