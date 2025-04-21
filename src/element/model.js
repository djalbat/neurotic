"use strict";

import { arrayUtilities, fileSystemUtilities } from "necessary";

import Matrix from "../matrix";
import Weights from "./weights";
import Element from "../element";
import Vocabulary from "./vocabulary";
import OneHotVector from "../vector/oneHot";

import { elementFromChildElements } from "../utilities/element";
import { weightsFromJSON, vocabularyFromJSON } from "../utilities/json";
import { DEFAULT_BATCH,
         DEFAULT_EPOCHS,
         DEFAULT_CUTOFF,
         DEFAULT_THRESHOLD,
         DEFAULT_TEMPERATURE,
         DEFAULT_LEARNING_RATE,
         DEFAULT_MODEL_FILE_PATH } from "../defaults";

const { first } = arrayUtilities,
      { writeFile } = fileSystemUtilities;

export default class Model extends Element {
  constructor(properties, childElements, vocabulary, weights) {
    super(properties, childElements);

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

  step(corpus, batch = DEFAULT_BATCH, learningRate = DEFAULT_LEARNING_RATE) {
    const deltaMatrices = [];

    corpus.forEachChunk((chunk) => {
      chunk.forEachPair((pair) => {
        const oneHotVectors = pair.asOneHotVectors(this.vocabulary),
              [ inputOneHotVector, outputOneHotVector ] = oneHotVectors,
              deltaMatrix = this.weights.prepare(inputOneHotVector, outputOneHotVector, learningRate);

        if (batch) {
          deltaMatrices.push(deltaMatrix);

          return;
        }

        const scaledDeltaMatrix = deltaMatrix.multiplyByScalar(learningRate);

        this.weights.update(scaledDeltaMatrix);
      });
    });

    if (batch) {
      const meanDeltaMatrix = meanOfMatrices(deltaMatrices),
            scaledMeanDeltaMatrix = meanDeltaMatrix.multiplyByScalar(learningRate);

      this.weights.update(scaledMeanDeltaMatrix);
    }
  }

  train(corpus, batch = DEFAULT_BATCH, epochs = DEFAULT_EPOCHS, learningRate = DEFAULT_LEARNING_RATE) {
    const results = []

    for (let count = 0; count < epochs; count++) {
      this.step(corpus, batch, learningRate);
    }

    return results;
  }

  infer(token, length, cutoff = DEFAULT_CUTOFF, threshold = DEFAULT_THRESHOLD, temperature = DEFAULT_TEMPERATURE) {
    const tokens = [];

    for (let count = 0; count < length; count++) {
      token = this.forward(token, cutoff, threshold, temperature);

      if (token === null) {
        break;
      }

      tokens.push(token);
    }

    return tokens;
  }

  forward(token, cutoff = DEFAULT_CUTOFF, threshold = DEFAULT_THRESHOLD, temperature = DEFAULT_TEMPERATURE) {
    const oneHotVector = OneHotVector.fromTokenAndVocabulary(token, this.vocabulary),
          probabilitiesVector = this.weights.forward(oneHotVector),
          index = probabilitiesVector.predictIndex(cutoff, threshold, temperature);

    token = (index !== null) ?
              this.vocabulary.tokenAt(index) :
                null;

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

function meanOfMatrices(matrices) {
  const firstMatrix = first(matrices),
        rows = firstMatrix.getRows(),
        columns = firstMatrix.getColumns();

  let totalMatrix = Matrix.fromRowsAndColumns(rows, columns);

  matrices.forEach((matrix) => {
    totalMatrix = totalMatrix.addMatrix(matrix);
  });

  const length = matrices.length,
        meanMatrix = totalMatrix.divideByScalar(length);

  return meanMatrix;
}
