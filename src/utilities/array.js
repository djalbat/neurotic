"use strict";

import { arrayUtilities } from "necessary";

export const { first, second } = arrayUtilities;

export function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return (arrayOrElement instanceof Array) ?
           arrayOrElement :
             [ arrayOrElement ];
}

export function flatten(arrays) {
  return arrays.reduce((elements, array) => {
    elements = elements.concat(array);

    return elements;
  }, []);
}
