import * as React from 'react';
import cx from 'classnames';
import { useAtom } from 'jotai';

import { currentSlideAtom } from '../atoms';

export const Start = ({ className = '', children = 'Start', ...rest }) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);

  const handleStartClick = () => {
    setCurrentSlide(0);
  };

  return (
    <button
      type="button"
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
