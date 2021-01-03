import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtom } from 'jotai';

import { currentSlideAtom } from '../atoms';
import { CarouselContext } from '../provider';

export const End = ({ className, children, ...rest }) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);
  const { lastSlide } = useContext(CarouselContext);

  return (
    <button
      onClick={() => setCurrentSlide(lastSlide)}
      disabled={currentSlide === lastSlide}
      className={cx(
        'carousel-end-button',
        currentSlide === lastSlide && 'carousel-button--disabled',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

End.defaultProps = {
  className: '',
  children: 'End',
};

End.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
