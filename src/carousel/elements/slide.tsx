import * as React from 'react';
import cx from 'classnames';

export const Slide = ({ className = '', children, ...rest }) => {
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
