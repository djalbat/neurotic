"use strict";

import Chunk from "../chunk";
import Matrix from "../matrix";
import Weights from "../element/weights";
import Vocabulary from "../element/vocabulary";
import MarkovHead from "../element/head/markov";
import AttentionHead from "../element/head/attention";
import FrequencyVector from "../vector/frequency";

export function headFromJSON(json) {
  let head;

  ({head} = json);

  json = head;  ///

  head = MarkovHead.fromJSON(json)
      || AttentionHead.fromJSON(json);

  return head;
}

export function matrixFromJSON(json) {
  let matrix;

  ({ matrix } = json);

  json = matrix;  ///

  matrix = Matrix.fromJSON(json);

  return matrix;
}

export function chunksFromJSON(json) {
  const chunksJSON = json,  ///
        chunks = chunksJSON.map((chunkJSON) => {
          const json = chunkJSON, ///
            chunk = Chunk.fromJSON(json);

          return chunk;
        });

  return chunks;
}

export function weightsFromJSON(json) {
  let weights;

  ({ weights } = json);

  json = weights;  ///

  weights = Weights.fromJSON(json);

  return weights;
}

export function qWeightsFromJSON(json) {
  let qWeights;

  ({ qWeights } = json);

  json = qWeights;  ///

  qWeights = Weights.fromJSON(json);

  return qWeights;
}

export function kWeightsFromJSON(json) {
  let kWeights;

  ({ kWeights } = json);

  json = kWeights;  ///

  kWeights = Weights.fromJSON(json);

  return kWeights;
}

export function vWeightsFromJSON(json) {
  let vWeights;

  ({ vWeights } = json);

  json = vWeights;  ///

  vWeights = Weights.fromJSON(json);

  return vWeights;
}

export function frequencyVectorsFromJSON(json) {
  let frequencyVectors;

  ({ frequencyVectors } = json);

  const frequencyVectorsJSON = frequencyVectors;  ///

  frequencyVectors = frequencyVectorsJSON.map((frequencyVectorJSON) => {
    const json = frequencyVectorJSON, ///
          frequencyVector = FrequencyVector.fromJSON(json);

    return frequencyVector;
  });

  return frequencyVectors;
}

export function vocabularyFromJSON(json) {
  let vocabulary;

  ({ vocabulary } = json);

  json = vocabulary;  ///

  vocabulary = Vocabulary.fromJSON(json);

  return vocabulary;
}

export function chunksToChunksJSON(chunks) {
  const chunksJSON = chunks.map((chunk) => {
    const chunkJSON = chunk.toJSON();

    return chunkJSON;
  });

  return chunksJSON;
}

export function frequencyVectorsToFrequencyVectorsJSON(frequencyVectors) {
  const frequencyVectorsJSON = frequencyVectors.map((frequencyVector) => {
    const frequencyVectorJSON = frequencyVector.toJSON();

    return frequencyVectorJSON;
  });

  return frequencyVectorsJSON;
}
