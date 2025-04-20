"use strict";

import { fileSystemUtilities } from "necessary/lib/main";

import Weights from "./weights";
import Element from "../element";
import Vocabulary from "./vocabulary";
import ModelResult from "../result/model";
import OneHotVector from "../vector/oneHot";

import { elementFromChildElements } from "../utilities/element";
import { weightsFromJSON, vocabularyFromJSON } from "../utilities/json";
import { DEFAULT_EPOCHS, DEFAULT_LEARNING_RATE, DEFAULT_MODEL_FILE_PATH } from "../defaults";

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

  step(corpus, learningRate = DEFAULT_LEARNING_RATE) {
    const weightsResults = corpus.mapChunk((chunk) => {
            const oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, this.vocabulary),
                  weightsResult = this.weights.step(oneHotVectors, learningRate);

            return weightsResult;
          }),
          modelResult = ModelResult.fromCorpusAndWeightsResults(corpus, weightsResults);

    return modelResult;
  }

  train(corpus, epochs = DEFAULT_EPOCHS, learningRate = DEFAULT_LEARNING_RATE) {
    const results = []

    for (let count = 0; count < epochs; count++) {
      const result = this.step(corpus, learningRate);

      results.push(result);
    }

    return results;
  }

  evaluate(corpus) {
    const weightsResults = corpus.mapChunk((chunk) => {
            const oneHotVectors = oneHotVectorsFromChunkAnvVocabulary(chunk, this.vocabulary),
                  weightsResult = this.weights.evaluate(oneHotVectors);

            return weightsResult;
          }),
          modelResult = ModelResult.fromCorpusAndWeightsResults(corpus, weightsResults);

    return modelResult;
  }

  infer(token, length) {
    const tokens = [];

    for (let count = 0; count < length; count++) {
      token = this.forward(token);

      tokens.push(token);
    }

    return tokens;
  }

  forward(token) {
    const oneHotVector = OneHotVector.fromTokenAndVocabulary(token, this.vocabulary),
          probabilitiesVector = this.weights.forward(oneHotVector),
          probabilitiesVectorArgmax = probabilitiesVector.argmax(),
          index = probabilitiesVectorArgmax; ///

    token = this.vocabulary.tokenAt(index);

    return token;
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

function oneHotVectorsFromChunkAnvVocabulary(chunk, vocabulary) {
  const tokens = chunk, ///
        oneHotVectors = tokens.map((token) => {
          const oneHotVector = OneHotVector.fromTokenAndVocabulary(token, vocabulary);

          return oneHotVector;
        });

  return oneHotVectors;
}
