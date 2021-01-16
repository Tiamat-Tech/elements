import * as React from 'react';
import { useMemo } from 'react';
import { Provider as JotaiProvider } from 'jotai';

import {
  carouselScope,
  currentSlideAtom,
  configAtom,
  focusAtom,
  expandAtom,
  fullscreenAtom,
} from './atoms';

type Props = {
  totalSlides: number;
  aspectRatio?: undefined | 'square' | 'wide' | 'wider' | 'widest' | 'tall' | 'taller' | 'tallest';
  orientation?: 'horizontal' | 'vertical';
  springConfig?: 'default' | 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'molasses' | SpringConfig;
  focusMode?: 'auto' | 'manual' | 'always';
  inViewThreshold?: number;
  allowGestures?: boolean;
  dragThreshold?: number;
  allowKeyboard?: boolean;
  keyboardMode?: 'standard' | 'gaming';
  allowExpansion?: boolean;
  allowFullscreen?: boolean;
  children: React.ReactNode;
};

type SpringConfig = {
  mass?: number;
  tension: number;
  friction: number;
};

export const Provider = ({
  totalSlides,
  aspectRatio = undefined,
  orientation = 'horizontal',
  springConfig = 'default',
  focusMode = 'auto',
  inViewThreshold = 0.1,
  allowGestures = true,
  dragThreshold = 50,
  allowKeyboard = true,
  keyboardMode = 'standard',
  allowExpansion = true,
  allowFullscreen = true,
  children,
}: Props) => {
  const lastSlide = useMemo(() => totalSlides - 1, [totalSlides]);
  const initialFocus = useMemo(() => focusMode === 'always', [focusMode]);

  return (
    <JotaiProvider
      initialValues={[
        [currentSlideAtom, 0],
        [
          configAtom,
          {
            lastSlide: lastSlide,
            totalSlides: totalSlides,
            aspectRatio: aspectRatio,
            orientation: orientation,
            springConfig: springConfig,
            focusMode: focusMode,
            inViewThreshold: inViewThreshold,
            allowGestures: allowGestures,
            dragThreshold: dragThreshold,
            allowKeyboard: allowKeyboard,
            keyboardMode: keyboardMode,
            allowExpansion: allowExpansion,
            allowFullscreen: allowFullscreen,
          },
        ],
        [focusAtom, initialFocus],
        [expandAtom, false],
        [fullscreenAtom, false],
      ]}
      scope={carouselScope}
    >
      {children}
    </JotaiProvider>
  );
};
