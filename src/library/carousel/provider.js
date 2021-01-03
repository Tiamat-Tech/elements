import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Provider as JotaiProvider } from 'jotai';

export const carouselScope = Symbol(); // eslint-disable-line no-undef

const defaultValues = {
  lastSlide: 0,
  totalSlides: 1,
  aspectRatio: undefined,
  orientation: 'horizontal',
  springConfig: 'default',
  isFocused: false,
  setIsFocused: () => null,
  focusMode: 'auto',
  inViewThreshold: 0.1,
  allowGestures: true,
  dragThreshold: 50,
  allowKeyboard: true,
  keyboardMode: 'standard',
  allowExpansion: true,
  isExpanded: false,
  setIsExpanded: () => null,
  allowFullscreen: true,
  isFullscreen: false,
  setIsFullscreen: () => null,
};

export const CarouselContext = createContext(defaultValues);

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
  const [isFocused, setIsFocused] = useState(() => focusMode === 'always');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const lastSlide = totalSlides - 1;

  return (
    <JotaiProvider initialValues={[]} scope={carouselScope}>
      <CarouselContext.Provider
        value={{
          ...defaultValues,
          lastSlide,
          totalSlides,
          aspectRatio,
          orientation,
          springConfig,
          isFocused,
          setIsFocused,
          focusMode,
          inViewThreshold,
          allowGestures,
          dragThreshold,
          allowKeyboard,
          keyboardMode,
          allowExpansion,
          isExpanded,
          setIsExpanded,
          allowFullscreen,
          isFullscreen,
          setIsFullscreen,
        }}
      >
        {children}
      </CarouselContext.Provider>
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
