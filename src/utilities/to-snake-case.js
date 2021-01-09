export const toSnakeCase = (value) => value.replace(/([A-Z])/g, '_$1').toUpperCase();
