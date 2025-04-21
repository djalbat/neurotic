"use strict";

import { fileSystemUtilities } from "necessary";

import { DEFAULT_CORPUS_FILE_PATH } from "./defaults";
import { chunksFromJSON, chunksToChunksJSON } from "./utilities/json";

const { readFile } = fileSystemUtilities;

export default class Corpus {
  constructor(chunks) {
    this.chunks = chunks;
  }

  getChunks() {
    return this.chunks;
  }

  getSize() {
    const chunksLength = this.chunks.length,
          size = chunksLength;  ///

    return size;
  }

  mapChunk(callback) { return this.chunks.map(callback); }

  forEachChunk(callback) { this.chunks.forEach(callback); }

  toJSON() {
    const chunksJSON = chunksToChunksJSON(this.chunks),
          chunks = chunksJSON,  ///
          json = {
            chunks
          };

    return json;
  }

  static fromJSON(json) {
    const chunks = chunksFromJSON(json),
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
