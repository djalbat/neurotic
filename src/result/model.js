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
          accuracy = averageAccuracy,
          loss = averageLoss, ///
          modelResult = new ModelResult(accuracy, loss);

    return modelResult;
  }
}
