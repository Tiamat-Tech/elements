import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const defaultValues = {
  currentSlide: 0,
  setCurrentSlide: () => null,
  lastSlide: 0,
  totalSlides: 1,
  orientation: 'horizontal',
  isFocused: false,
  setIsFocused: () => null,
  focusMode: 'auto',
  inViewThreshold: 50,
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
  lastSlide,
  totalSlides,
  orientation,
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFocused, setIsFocused] = useState(() => focusMode === 'always');
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <CarouselContext.Provider
      value={{
        ...defaultValues,
        currentSlide,
        setCurrentSlide,
        lastSlide,
        totalSlides,
        orientation,
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
  );
};

Provider.defaultProps = {
  orientation: 'horizontal',
  focusMode: 'auto',
  inViewThreshold: 50,
  allowGestures: true,
  dragThreshold: 50,
  allowKeyboard: true,
  keyboardMode: 'standard',
  allowExpansion: true,
  allowFullscreen: true,
};

Provider.propTypes = {
  lastSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
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
