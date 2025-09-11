"use strict";

import Head from "../head";
import Weights from "../weights";

import { ATTENTION_HEAD_TYPE } from "../../types";
import { qWeightsFromJSON, kWeightsFromJSON, vWeightsFromJSON } from "../../utilities/json";

export default class AttentionHead extends Head {
  constructor(qWeights, kWeights, vWeights) {
    super();

    this.qWeights = qWeights;
    this.kWeights = kWeights;
    this.vWeights = vWeights;
  }

  getQWeights() {
    return this.qWeights;
  }

  getKWeights() {
    return this.kWeights;
  }

  getVWeights() {
    return this.vWeights;
  }

  train(transition) {

    debugger

  }

  forward(token, vocabulary) {
    const index = vocabulary.indexOfToken(token);

    debugger

    return token;
  }

  initialise(vocabulary) {
    const size = vocabulary.getSize();

    this.qWeights.initialise(size);
    this.kWeights.initialise(size);
    this.vWeights.initialise(size);
  }

  toJSON() {
    const qWeightsJSON = this.qWeights.toJSON(),
          kWeightsJSON = this.kWeights.toJSON(),
          vWeightsJSON = this.vWeights.toJSON(),
          type = ATTENTION_HEAD_TYPE,
          qWeights = qWeightsJSON, ///
          kWeights = kWeightsJSON, ///
          vWeights = vWeightsJSON, ///
          json = {
            type,
            qWeights,
            kWeights,
            vWeights
          };

    return json;
  }

  static fromJSON(json) {
    let attentionHead = null;

    const { type } = json;

    if (type === ATTENTION_HEAD_TYPE) {
      const qWeights = qWeightsFromJSON(json),
            kWeights = kWeightsFromJSON(json),
            vWeights = vWeightsFromJSON(json);

      attentionHead = new AttentionHead(qWeights, kWeights, vWeights);
    }

    return attentionHead;
  }

  static fromProperties(properties, ...remainingArguments) {
    const qWeights = Weights.fromNothing(),
          kWeights = Weights.fromNothing(),
          vWeights = Weights.fromNothing(),
          attentionHead = Head.fromProperties(AttentionHead, properties, qWeights, kWeights, vWeights, ...remainingArguments);

    return attentionHead;
  }
}
