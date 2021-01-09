import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtom } from 'jotai';

import { currentSlideAtom } from '../atoms';

export const Backward = ({ className, children, ...rest }) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);

  const handleBackClick = () => {
    setCurrentSlide(currentSlide - 1);
  };

  return (
    <button
      type="button"
      onClick={handleBackClick}
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
