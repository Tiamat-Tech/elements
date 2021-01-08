import { atom } from 'jotai';

import { atomWithKey } from '../utilities/atom-with-key';

export const carouselScope = Symbol(); // eslint-disable-line no-undef

export const currentSlideAtom = atomWithKey('currentSlide', atom(0));
currentSlideAtom.scope = carouselScope;

export const configAtom = atomWithKey(
  'config',
  atom({
    lastSlide: 0,
    totalSlides: 1,
    aspectRatio: undefined,
    orientation: 'horizontal',
    springConfig: 'default',
    focusMode: 'auto',
    inViewThreshold: 0.1,
    allowGestures: true,
    dragThreshold: 50,
    allowKeyboard: true,
    keyboardMode: 'standard',
    allowExpansion: true,
    allowFullscreen: true,
  }),
);
configAtom.scope = carouselScope;

export const focusAtom = atomWithKey('focus', atom(false));
focusAtom.scope = carouselScope;

export const expandAtom = atomWithKey('expand', atom(false));
expandAtom.scope = carouselScope;

export const fullscreenAtom = atomWithKey('fullscreen', atom(false));
fullscreenAtom.scope = carouselScope;
