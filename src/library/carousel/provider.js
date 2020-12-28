import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const defaultValues = {
  currentSlide: 0,
  setCurrentSlide: () => null,
  gestures: true,
  keyboard: true,
  expanding: false,
  isExpanded: false,
  setIsExpanded: () => null,
  lastSlide: 0,
  threshold: 50,
  totalSlides: 1,
};

export const CarouselContext = createContext(defaultValues);

export const Provider = ({
  gestures,
  keys,
  expanding,
  lastSlide,
  threshold,
  totalSlides,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <CarouselContext.Provider
      value={{
        ...defaultValues,
        currentSlide,
        setCurrentSlide,
        gestures,
        keys,
        expanding,
        isExpanded,
        setIsExpanded,
        lastSlide,
        threshold,
        totalSlides,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

Provider.defaultProps = {
  gestures: true,
  keys: true,
  expanding: false,
  threshold: 50,
};

Provider.propTypes = {
  gestures: PropTypes.bool,
  keys: PropTypes.bool,
  expanding: PropTypes.bool,
  lastSlide: PropTypes.number.isRequired,
  threshold: PropTypes.number,
  totalSlides: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
