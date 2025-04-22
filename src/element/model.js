"use strict";

import { fileSystemUtilities } from "necessary";

import Matrix from "../matrix";
import Weights from "./weights";
import Element from "../element";
import Vocabulary from "./vocabulary";
import OneHotVector from "../vector/oneHot";

import { first } from "../utilities/array";
import { elementFromChildElements } from "../utilities/element";
import { weightsFromJSON, vocabularyFromJSON } from "../utilities/json";
import { DEFAULT_CUTOFF,
         DEFAULT_THRESHOLD,
         DEFAULT_MODEL_FILE_PATH } from "../defaults";

const { writeFile } = fileSystemUtilities;

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

  train(corpus) {
    corpus.forEachChunk((chunk) => {
      chunk.forEachPair((pair) => {
        this.weights.train(pair, this.vocabulary);
      });
    });
  }

  infer(token, length, cutoff = DEFAULT_CUTOFF, threshold = DEFAULT_THRESHOLD) {
    const tokens = [];

    for (let count = 0; count < length; count++) {
      token = this.forward(token, cutoff, threshold);

      if (token === null) {
        break;
      }

      tokens.push(token);
    }

    return tokens;
  }

  forward(token, cutoff = DEFAULT_CUTOFF, threshold = DEFAULT_THRESHOLD) {
    const oneHotVector = OneHotVector.fromTokenAndVocabulary(token, this.vocabulary),
          probabilitiesVector = this.weights.forward(oneHotVector),
          index = probabilitiesVector.predictIndex(cutoff, threshold);

    token = (index !== null) ?
              this.vocabulary.getTokenAt(index) :
                null;

    return token;
  }

  serialise(filePath = DEFAULT_MODEL_FILE_PATH) {
    const json = this.toJSON(),
          jsonString = JSON.stringify(json),
          content = jsonString; ///

    writeFile(filePath, content);
  }

  initialise() {
    this.vocabulary.initialise();
    
    const size = this.vocabulary.getSize();

    this.weights.initialise(size);
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
