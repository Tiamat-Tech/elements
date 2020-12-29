import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const defaultValues = {
  currentSlide: 0,
  setCurrentSlide: () => null,
  lastSlide: 0,
  totalSlides: 1,
  allowGestures: true,
  dragThreshold: 50,
  allowKeyboard: true,
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
  allowGestures,
  dragThreshold,
  allowKeyboard,
  allowExpansion,
  allowFullscreen,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
        allowGestures,
        dragThreshold,
        allowKeyboard,
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
  allowGestures: true,
  dragThreshold: 50,
  allowKeyboard: true,
  allowExpansion: true,
  allowFullscreen: true,
};

Provider.propTypes = {
  lastSlide: PropTypes.number.isRequired,
  totalSlides: PropTypes.number.isRequired,
  allowGestures: PropTypes.bool,
  dragThreshold: PropTypes.number,
  allowKeyboard: PropTypes.bool,
  allowExpansion: PropTypes.bool,
  allowFullscreen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
