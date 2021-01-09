import * as React from 'react';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Provider as JotaiProvider } from 'jotai';

import {
  carouselScope,
  currentSlideAtom,
  configAtom,
  focusAtom,
  expandAtom,
  fullscreenAtom,
} from './atoms';

export const Provider = ({
  totalSlides,
  aspectRatio,
  orientation,
  springConfig,
  focusMode,
  inViewThreshold,
  allowGestures,
  dragThreshold,
  allowKeyboard,
  keyboardMode,
  allowExpansion,
  allowFullscreen,
  children,
}) => {
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

Provider.defaultProps = {
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
};

Provider.propTypes = {
  totalSlides: PropTypes.number.isRequired,
  aspectRatio: PropTypes.oneOf([
    undefined,
    'square',
    'wide',
    'wider',
    'widest',
    'tall',
    'taller',
    'tallest',
  ]),
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  springConfig: PropTypes.oneOf([
    'default',
    'gentle',
    'wobbly',
    'stiff',
    'slow',
    'molasses',
    PropTypes.shape({
      mass: PropTypes.number,
      tension: PropTypes.number.isRequired,
      friction: PropTypes.number.isRequired,
    }),
  ]),
  focusMode: PropTypes.oneOf(['auto', 'manual', 'always']),
  inViewThreshold: PropTypes.number,
  allowGestures: PropTypes.bool,
  dragThreshold: PropTypes.number,
  allowKeyboard: PropTypes.bool,
  keyboardMode: PropTypes.oneOf(['standard', 'gaming']),
  allowExpansion: PropTypes.bool,
  allowFullscreen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
