"use strict";

import { arrayUtilities } from "necessary";

export const { first, second } = arrayUtilities;

export function flatten(arrays) {
  return arrays.reduce((elements, array) => {
    elements = elements.concat(array);

    return elements;
  }, []);
}
