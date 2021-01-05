import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtom } from 'jotai';

import { currentSlideAtom } from '../atoms';

export const Start = ({ className, children, ...rest }) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);

  const handleStartClick = () => {
    setCurrentSlide(0);
  };

  return (
    <button
      onClick={handleStartClick}
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
