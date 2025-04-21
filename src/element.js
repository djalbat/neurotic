"use strict";

export default class Element {
  constructor(properties, childElements) {
    this.properties = properties;
    this.childElements = childElements;
  }

  getProperties() {
    return this.properties;
  }

  getChildElements() {
    return this.childElements;
  }

  static fromProperties(Class, properties, ...remainingArguments) {
    const { childElements = [] } = properties,
          element = new Class(properties, childElements, ...remainingArguments);

    return element;
  }
}
