import { atom } from 'jotai';

export const carouselScope = Symbol();

export const currentSlideAtom = atom<number>(0);
currentSlideAtom.scope = carouselScope;

export const configAtom = atom<any>({
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

export const focusAtom = atom<boolean>(false);
focusAtom.scope = carouselScope;

export const expandAtom = atom<boolean>(false);
expandAtom.scope = carouselScope;

export const fullscreenAtom = atom<boolean>(false);
fullscreenAtom.scope = carouselScope;
