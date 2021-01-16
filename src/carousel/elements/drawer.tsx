import * as React from 'react';
import cx from 'classnames';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Drawer = ({ className = '', children, ...rest }: Props) => {
  return (
    <div className={cx('carousel-drawer', className)} {...rest}>
      {children}
    </div>
  );
};
