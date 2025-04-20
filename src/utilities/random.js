"use strict";

import { DEFAULT_LOWER_BOUND, DEFAULT_UPPER_BOUND } from "../defaults";

export function random(lowerBound = DEFAULT_LOWER_BOUND, upperBound = DEFAULT_UPPER_BOUND) {
  let number;

  const spread = upperBound - lowerBound;

  do {
    number = Math.random() * spread + lowerBound;
  } while (number === lowerBound);

  return number;
}
