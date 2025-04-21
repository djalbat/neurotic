"use strict";

import Element from "./element";

import { flatten } from "./utilities/array";
import { removeFalseyElements } from "./utilities/elements";

function createElement(firstArgument, properties, ...childElements) {
  let element = null;

  properties = properties || {};  ///

  childElements = sanitiseChildElements(childElements); ///

  if (isSubclassOf(firstArgument, Element)) {
    const Class = firstArgument;  ///

    Object.assign(properties, {
      childElements
    });

    element = Class.fromProperties(properties);
  }

  return element;
}

const React = {
  createElement
};

export default React;

function isSubclassOf(argument, Class) {
  const subclassOf = (argument.prototype instanceof Class);

  return subclassOf;
}

function sanitiseChildElements(childElements) {
  childElements = flatten(childElements);

  childElements = removeFalseyElements(childElements);

  return childElements;
}
