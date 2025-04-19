"use strict";

import { fileSystemUtilities } from "necessary/lib/main";

import Element from "../element";
import Vocabulary from "../element/vocabulary";

import { vocabularyFromJSON } from "../utilities/json";
import { DEFAULT_MODEL_FILE_PATH } from "../defaults";
import { elementFromChildElements } from "../utilities/element";

const { writeFile } = fileSystemUtilities;

export default class Model extends Element {
  constructor(vocabulary) {
    super();

    this.vocabulary = vocabulary;
  }

  getVocabulary() {
    return this.vocabulary;
  }

  serialise(filePath = DEFAULT_MODEL_FILE_PATH) {
    const json = this.asJSON(),
          jsonString = JSON.stringify(json),
          content = jsonString; ///

    writeFile(filePath, content);
  }

  initialise() {
    if (this.vocabulary === null) {
      throw Exception("The model has no vocabulary.")
    }

    this.vocabulary.initialise();
  }

  asJSON() {
    const vocabularyJSON = this.vocabulary.asJSON(),
          vocabulary = vocabularyJSON,  ///
          json = {
            vocabulary
          };

    return json;
  }

  static fromJSON(json) {
    const vocabulary = vocabularyFromJSON(json),
          model = new MOdel(vocabulary);

    return model;
  }

  static fromProperties(properties, ...remainingArguments) {
    const { childElements } = properties,
          vocabulary = elementFromChildElements(childElements, Vocabulary),
          model = Element.fromProperties(Model, properties, vocabulary, ...remainingArguments);

    model.initialise();

    return model;
  }
}
