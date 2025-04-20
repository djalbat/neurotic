"use strict";

import Result from "../result";

export default class ModelResult extends Result {
  static fromCorpusAndWeightsResults(corpus, weightsResults) {
    let totalLoss = 0,
        totalAccuracy = 0;

    weightsResults.forEach((weightsResult) => {
      const loss = weightsResult.getLoss(),
            accuracy = weightsResult.getAccuracy();

      totalLoss += loss;

      totalAccuracy += accuracy;
    });

    const corpusSize = corpus.getSize(),
          averageLoss = totalLoss / corpusSize,
          averageAccuracy = totalAccuracy / corpusSize,
          loss = averageLoss, ///
          accuracy = averageAccuracy,
          modelResult = new ModelResult(loss, accuracy);

    return modelResult;
  }
}
