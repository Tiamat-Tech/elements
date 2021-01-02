import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CarouselContext } from '../provider';

export const Expand = ({ className, children, ...rest }) => {
  const { allowExpansion, isExpanded, setIsExpanded } = useContext(CarouselContext);

  const handleExpandClick = () => {
    if (!allowExpansion) return;

    setIsExpanded(!isExpanded);
  };

  return (
    <button
      onClick={handleExpandClick}
      className={cx('carousel-expand-button', className)}
      {...rest}
    >
      {children}
    </button>
  );
};

Expand.defaultProps = {
  className: '',
  children: 'Expand',
};

Expand.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
