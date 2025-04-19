"use strict";

import Vocabulary from "../element/vocabulary";

export function vocabularyFromJSON(json) {
  let vocabulary;

  ({ vocabulary } = json);

  json = vocabulary;  ///

  vocabulary = Vocabulary.fromJSON(json);

  return vocabulary;
}