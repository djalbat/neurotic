"use strict";

import Chunk from "../chunk";
import Matrix from "../matrix";
import Weights from "../element/weights";
import Vocabulary from "../element/vocabulary";

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

