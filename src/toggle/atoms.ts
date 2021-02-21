import { atom } from 'jotai';

export const toggleScope = Symbol();

export const activeAtom = atom<boolean>(false);
activeAtom.scope = toggleScope;
