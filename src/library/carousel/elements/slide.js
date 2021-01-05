import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Slide = ({ className, children, ...rest }) => {
  return (
    <div
      className={cx('carousel-slide', className)}
      aria-roledescription="slide"
      role="group"
      {...rest}
    >
      {children}
    </div>
  );
};

Slide.defaultProps = {
  className: '',
};

Slide.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
