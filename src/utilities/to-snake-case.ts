export const toSnakeCase = (value: string) => value.replace(/([A-Z])/g, '_$1').toUpperCase();
