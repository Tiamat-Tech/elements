import { atom } from 'jotai';

import { carouselScope } from './provider';

export const currentSlideAtom = atom(0);
currentSlideAtom.scope = carouselScope;
