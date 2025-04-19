"use strict";

import Element from "../element";

export default class ModelElement extends Element {
  static fromProperties(Class, properties, ...remainingArguments) {
    const modelElement = Element.fromProperties(Class, properties, ...remainingArguments);

    return modelElement;
  }
}
