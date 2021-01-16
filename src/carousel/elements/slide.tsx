import * as React from 'react';
import cx from 'classnames';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Slide = ({ className = '', children, ...rest }: Props) => {
  return (
    <div
      className={cx('carousel-slide', className)}
      role="group"
      aria-roledescription="slide"
      {...rest}
    >
      {children}
    </div>
  );
};
