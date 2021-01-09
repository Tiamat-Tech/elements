import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Drawer = ({ className, children, ...rest }) => {
  return (
    <div className={cx('carousel-drawer', className)} {...rest}>
      {children}
    </div>
  );
};

Drawer.defaultProps = {
  className: '',
};

Drawer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
