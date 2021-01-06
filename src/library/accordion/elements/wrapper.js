import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Wrapper = ({ className, children, ...rest }) => {
  return (
    <div className={cx('accordion', className)} {...rest}>
      {children}
    </div>
  );
};

Wrapper.defaultProps = {
  className: '',
};

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
