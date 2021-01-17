import { atom } from 'jotai';

export const accordionScope = Symbol();

export const currentPanelAtom = atom<number | undefined>(undefined);
currentPanelAtom.scope = accordionScope;

export const configAtom = atom<any>({
  defaultPanel: undefined,
  springConfig: 'default',
});
configAtom.scope = accordionScope;
