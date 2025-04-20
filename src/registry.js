"use strict";

const registry = {};

export function registryAssigned(Class) {
  const { name } = Class;

  registry[name] = Class;

  return Class;
}

export default registry;
