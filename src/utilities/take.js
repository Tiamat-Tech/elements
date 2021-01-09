export const take = (array, length = 1) => {
  return length === 1 ? array[0] : array.slice(0, length);
};
