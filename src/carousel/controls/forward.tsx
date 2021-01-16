import * as React from 'react';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { currentSlideAtom, configAtom } from '../atoms';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Forward = ({ className = '', children = 'Forward', ...rest }: Props) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);

  const { lastSlide } = useAtomValue(configAtom);

  const handleForwardClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <button
      type="button"
      onClick={handleForwardClick}
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
