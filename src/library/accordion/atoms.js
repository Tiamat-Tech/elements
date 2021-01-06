import { atom } from 'jotai';

export const accordionScope = Symbol(); // eslint-disable-line no-undef

export const currentPanelAtom = atom(undefined);
currentPanelAtom.scope = accordionScope;

export const configAtom = atom({
  defaultPanel: undefined,
  springConfig: 'default',
});
configAtom.scope = accordionScope;
