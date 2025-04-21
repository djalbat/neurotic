"use strict";

export function flatten(arrays) {
  return arrays.reduce((elements, array) => {
    elements = elements.concat(array);

    return elements;
  }, []);
}
