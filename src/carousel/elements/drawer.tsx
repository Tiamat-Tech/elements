import * as React from 'react';
import cx from 'classnames';

export const Drawer = ({ className = '', children, ...rest }) => {
  return (
    <div className={cx('carousel-drawer', className)} {...rest}>
      {children}
    </div>
  );
};
