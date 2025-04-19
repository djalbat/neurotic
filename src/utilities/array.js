"use strict";

export function add(arrayA, arrayB) {
  arrayB.forEach((elementB) => {
    arrayA.push(elementB);
  });
}

export function flatten(arrays) {
  return arrays.reduce((elements, array) => {
    elements = elements.concat(array);

    return elements;
  }, []);
}

export function guarantee(arrayOrElement) {
  arrayOrElement = arrayOrElement || [];

  return (arrayOrElement instanceof Array) ?
            arrayOrElement :
             [ arrayOrElement ];
}
