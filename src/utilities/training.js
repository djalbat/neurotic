"use strict";

export function oneHotVectorsFromChunkAndTokens(chunk, tokens) {
  const chunkTokens = chunk,  ///
        vocabularyTokens = tokens,  ///
        vocabularyTokensLength = vocabularyTokens.length,
        size = vocabularyTokensLength,  ///
        oneHotVectors = chunkTokens.map((chunkToken) => {
          const index = vocabularyTokens.indexOf(chunkToken);

          if (index === -1) {
            throw Error(`The ${chunkToken} token in not in the vocabulary.`)
          }

          const oneHotVector = oneHotVectorFromSizeAndIndex(size, index);

          return oneHotVector;
        });

  return oneHotVectors;
}

export function oneHotVectorFromSizeAndIndex(size, index) {
  const oneHotVector = oneHotVectorFromSize(size);

  oneHotVector[index] = 1;

  return oneHotVector;
}

export function oneHotVectorFromSize(size) {
  const oneHotVector = [];

  for (let index = 0; index < size; index++) {
    oneHotVector.push(0);
  }

  return oneHotVector;
}
