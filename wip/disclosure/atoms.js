import { atom } from 'jotai';

export const disclosureScope = Symbol(); // eslint-disable-line no-undef

export const openAtom = atom(false);
openAtom.scope = disclosureScope;

export const configAtom = atom({
  springConfig: 'default',
});
configAtom.scope = disclosureScope;
