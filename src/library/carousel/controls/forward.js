import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CarouselContext } from '../provider';

export const Forward = ({ className, children, ...rest }) => {
  const { currentSlide, setCurrentSlide, lastSlide } = useContext(CarouselContext);

  return (
    <button
      onClick={() => setCurrentSlide(currentSlide + 1)}
      disabled={currentSlide === lastSlide}
      className={cx(
        'carousel-forward-button',
        currentSlide === lastSlide && 'carousel-button--disabled',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Forward.defaultProps = {
  className: '',
  children: 'Forward',
};

Forward.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
