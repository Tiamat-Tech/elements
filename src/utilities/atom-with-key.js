const atoms = new Map(); // eslint-disable-line no-undef

export const atomWithKey = (key, atom) => {
  if (!atom.debugLabel) {
    atom.debugLabel = key;
  }
  if (process.env.NODE_ENV === 'development') {
    const oldAtom = atoms.get(key);
    if (oldAtom) {
      return oldAtom;
    } else {
      atoms.set(key, atom);
      return atom;
    }
  }
  return atom;
};
