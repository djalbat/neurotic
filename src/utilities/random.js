"use strict";

export function random(lowerBound, upperBound) {
  const spread = upperBound - lowerBound,
        number = Math.random() * spread + lowerBound;

  return number;
}
