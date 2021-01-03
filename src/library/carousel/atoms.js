import { atom } from 'jotai';

export const carouselScope = Symbol(); // eslint-disable-line no-undef

export const currentSlideAtom = atom(0);
currentSlideAtom.scope = carouselScope;

export const configAtom = atom({
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
});
configAtom.scope = carouselScope;
