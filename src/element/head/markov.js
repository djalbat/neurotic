"use strict";

import Head from "../head";
import Weights from "../weights";

import { weightsFromJSON } from "../../utilities/json";
import { MARKOV_HEAD_TYPE } from "../../types";

export default class MarkovHead extends Head {
  constructor(weights) {
    super();

    this.weights = weights;
  }

  getWeights() {
    return this.weights;
  }

  train(transition) { return this.weights.train(transition); }

  forward(token, vocabulary) {
    const index = vocabulary.indexOfToken(token),
          row = index,  ///
          frequencyVector = this.weights.getFrequencyVectorAtRow(row),
          column = frequencyVector.predict();

    if (column === null) {
      token = null;
    } else {
      const index = column; ///

      token = vocabulary.getTokenAt(index);
    }

    return token;
  }

  initialise(vocabulary) {
    const size = vocabulary.getSize();

    this.weights.initialise(size);
  }

  toJSON() {
    const weightsJSON = this.weights.toJSON(),
          type = MARKOV_HEAD_TYPE,
          weights = weightsJSON, ///
          json = {
            type,
            weights
          };

    return json;
  }

  static fromJSON(json) {
    let markovHead = null;

    const { type } = json;

    if (type === MARKOV_HEAD_TYPE) {
      const weights = weightsFromJSON(json);

      markovHead = new MarkovHead(weights);
    }

    return markovHead;
  }

  static fromProperties(properties, ...remainingArguments) {
    const weights = Weights.fromNothing(),
          markovHead = Head.fromProperties(MarkovHead, properties, weights, ...remainingArguments);

    return markovHead;
  }
}
