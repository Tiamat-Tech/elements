import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CarouselContext } from '../provider';

export const Start = ({ className, children, ...rest }) => {
  const { currentSlide, setCurrentSlide } = useContext(CarouselContext);

  return (
    <button
      onClick={() => setCurrentSlide(0)}
      disabled={currentSlide === 0}
      className={cx(
        'carousel-start-button',
        currentSlide === 0 && 'carousel-button--disabled',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Start.defaultProps = {
  className: '',
  children: 'Start',
};

Start.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
