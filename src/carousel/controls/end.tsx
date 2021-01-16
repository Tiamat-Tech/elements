import * as React from 'react';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { currentSlideAtom, configAtom } from '../atoms';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const End = ({ className = '', children = 'End', ...rest }: Props) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);

  const { lastSlide } = useAtomValue(configAtom);

  const handleEndClick = () => {
    setCurrentSlide(lastSlide);
  };

  return (
    <button
      type="button"
      onClick={handleEndClick}
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
