import * as React from 'react';
import cx from 'classnames';
import { useAtom } from 'jotai';

import { currentSlideAtom } from '../atoms';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Backward = ({ className = '', children = 'Backward', ...rest }: Props) => {
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
