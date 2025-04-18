"use strict";

import { fileSystemUtilities } from "necessary";

import { DEFAULT_CORPUS_FILE_PATH } from "./defaults";

const { readFile } = fileSystemUtilities;

export default class Corpus {
  constructor(chunks) {
    this.chunks = chunks;
  }

  getChunks() {
    return this.chunks;
  }

  toJSON() {
    const chunks = this.chunks,
          json = {
            chunks
          };

    return json;
  }

  static fromJSON(json) {
    const chunks = json,  //
          corpus = new Corpus(chunks);

    return corpus;
  }

  static fromFile(filePath = DEFAULT_CORPUS_FILE_PATH) {
    const content = readFile(filePath),
          jsonString = content, ///
          json = JSON.parse(jsonString),
          corpus = Corpus.fromJSON(json);

    return corpus;
  }
}
