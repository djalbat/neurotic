"use strict";

import ModelElement from "../../element/model";

export default class FunctionModelElement extends ModelElement {
  static fromProperties(properties) {
    const functionModelElement = ModelElement.fromProperties(FunctionModelElement, properties);

    return functionModelElement;
  }
}
