"use strict";

import { arrayUtilities } from "necessary";

export const { first, second, third, fourth, push, separate } = arrayUtilities;

export function add(arrayA, arrayB) {
  arrayB.forEach((elementB) => {
    arrayA.push(elementB);
  });
}

export function flatten(arrays) {
  return arrays.reduce((elements, array) => elements.concat(array), []);
}

export function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
             [ arrayOrElement ];
}
