"use strict";

import { arrayUtilities, fileSystemUtilities } from "necessary";

import Matrix from "../matrix";
import Weights from "./weights";
import Element from "../element";
import Vocabulary from "./vocabulary";
import ModelResult from "../result/model";
import OneHotVector from "../vector/oneHot";

import { elementFromChildElements } from "../utilities/element";
import { weightsFromJSON, vocabularyFromJSON } from "../utilities/json";
import { DEFAULT_BATCH, DEFAULT_EPOCHS, DEFAULT_SAMPLING, DEFAULT_LEARNING_RATE, DEFAULT_MODEL_FILE_PATH } from "../defaults";

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
    const weightsResults = [];

    corpus.forEachChunk((chunk) => {
      chunk.forEachPair((pair) => {
        const oneHotVectors = pair.asOneHotVectors(this.vocabulary),
              [ inputOneHotVector, outputOneHotVector ] = oneHotVectors,
              weightsResult = this.weights.prepare(inputOneHotVector, outputOneHotVector, learningRate);

        if (!batch) {
          const deltaMatrix = weightsResult.getDeltaMatrix(),
                scaledDeltaMatrix = deltaMatrix.multiplyByScalar(learningRate);

          this.weights.update(scaledDeltaMatrix);
        }

        weightsResults.push(weightsResult);
      });
    });

    if (batch) {
      const deltaMatrices = weightsResults.map((weightsResult) => {
              const deltaMatrix = weightsResult.getDeltaMatrix();

              return deltaMatrix;
            }),
            meanDeltaMatrix = meanOfMatrices(deltaMatrices),
            scaledMeanDeltaMatrix = meanDeltaMatrix.multiplyByScalar(learningRate);

      this.weights.update(scaledMeanDeltaMatrix);
    }

    const modelResult = ModelResult.fromCorpusAndWeightsResults(corpus, weightsResults);

    return modelResult;
  }

  train(corpus, batch = DEFAULT_BATCH, epochs = DEFAULT_EPOCHS, learningRate = DEFAULT_LEARNING_RATE) {
    const results = []

    for (let count = 0; count < epochs; count++) {
      const result = this.step(corpus, batch, learningRate);

      results.push(result);
    }

    return results;
  }

  evaluate(corpus) {
    const weightsResults = [];

    corpus.forEachChunk((chunk) => {
      chunk.forEachPair((pair) => {
        const oneHotVectors = pair.asOneHotVectors(this.vocabulary),
              [ inputOneHotVector, outputOneHotVector ] = oneHotVectors,
              weightsResult = this.weights.evaluate(inputOneHotVector, outputOneHotVector);

        weightsResults.push(weightsResult);
      });
    });

    const modelResult = ModelResult.fromCorpusAndWeightsResults(corpus, weightsResults);

    return modelResult;
  }

  infer(token, length, sampling = DEFAULT_SAMPLING) {
    const tokens = [];

    for (let count = 0; count < length; count++) {
      token = this.forward(token, sampling);

      tokens.push(token);
    }

    return tokens;
  }

  forward(token, sampling = DEFAULT_SAMPLING) {
    const oneHotVector = OneHotVector.fromTokenAndVocabulary(token, this.vocabulary),
          probabilitiesVector = this.weights.forward(oneHotVector),
          index = probabilitiesVector.predictIndex(sampling);

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
