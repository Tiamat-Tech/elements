const atoms = new Map();

export const atomWithKey = (key: string, atom: any) => {
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
