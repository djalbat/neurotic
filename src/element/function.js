"use strict";

import Element from "../element";

export default class FunctionElement extends Element {
  static fromProperties(properties) {
    const functionElement = Element.fromProperties(FunctionElement, properties);

    return functionElement;
  }
}
