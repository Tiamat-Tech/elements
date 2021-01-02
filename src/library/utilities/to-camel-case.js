export const toCamelCase = (value) =>
  value.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, character) => character.toUpperCase());
