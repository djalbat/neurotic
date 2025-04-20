"use strict";

import { fileSystemUtilities } from "necessary/lib/main";

import Element from "../element";
import Weights from "../element/weights";
import Vocabulary from "../element/vocabulary";
import OneHotVector from "../vector/oneHot";

import { elementFromChildElements } from "../utilities/element";
import { weightsFromJSON, vocabularyFromJSON } from "../utilities/json";
import { DEFAULT_LEARNING_RATE, DEFAULT_MODEL_FILE_PATH } from "../defaults";

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
      throw new Error("The model has no vocabulary.")
    }

    this.vocabulary.initialise();

    if (this.weights === null) {
      throw new Error("The model has no weights.")
    }

    const size = this.vocabulary.getSize();

    this.weights.initialise(size);
  }

  train(corpus, learningRate = DEFAULT_LEARNING_RATE) {
    const chunks = corpus.getChunks();

    chunks.forEach((chunk) => {
      const tokens = chunk, ///
            oneHotVectors = tokens.map((token) => {
              const oneHotVector = OneHotVector.fromTokenAndVocabulary(token, this.vocabulary);

              return oneHotVector;
            });

      this.weights.train(oneHotVectors, learningRate);
    });
  }

  serialise(filePath = DEFAULT_MODEL_FILE_PATH) {
    const json = this.toJSON(),
          jsonString = JSON.stringify(json),
          content = jsonString; ///

    writeFile(filePath, content);
  }

  toJSON() {
    const vocabularyJSON = this.vocabulary.toJSON(),
          weightsJSON = this.weights.toJSON(),
          vocabulary = vocabularyJSON,  ///
          weights = weightsJSON, ///
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
