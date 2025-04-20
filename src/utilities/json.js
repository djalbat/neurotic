"use strict";

import registry from "../registry";

export function matrixFromJSON(json) {
  let matrix;

  ({ matrix } = json);

  json = matrix;  ///

  const { Matrix } = registry;

  matrix = Matrix.fromJSON(json);

  return matrix;
}

export function weightsFromJSON(json) {
  let weights;

  ({ weights } = json);

  json = weights;  ///

  const { Weights } = registry;

  weights = Weights.fromJSON(json);

  return weights;
}

export function vocabularyFromJSON(json) {
  let vocabulary;

  ({ vocabulary } = json);

  json = vocabulary;  ///

  const { Vocabulary } = registry;

  vocabulary = Vocabulary.fromJSON(json);

  return vocabulary;
}