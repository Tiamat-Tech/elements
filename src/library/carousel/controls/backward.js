import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CarouselContext } from '../provider';

export const Backward = ({ className, children, ...rest }) => {
  const { currentSlide, setCurrentSlide } = useContext(CarouselContext);

  return (
    <button
      onClick={() => setCurrentSlide(currentSlide - 1)}
      disabled={currentSlide === 0}
      className={cx(
        'carousel-back-button',
        currentSlide === 0 && 'carousel-button--disabled',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Backward.defaultProps = {
  className: '',
  children: 'Backward',
};

Backward.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
