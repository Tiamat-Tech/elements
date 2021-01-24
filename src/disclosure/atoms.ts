import { atom } from 'jotai';

export const disclosureScope = Symbol();

export const openAtom = atom<boolean>(false);
openAtom.scope = disclosureScope;

export const configAtom = atom<any>({
  springConfig: 'default',
});
configAtom.scope = disclosureScope;
