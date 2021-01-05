import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { configAtom, expandAtom } from '../atoms';

export const Expand = ({ className, children, ...rest }) => {
  const [isExpanded, setIsExpanded] = useAtom(expandAtom);

  const { allowExpansion } = useAtomValue(configAtom);

  const handleExpandClick = () => {
    if (!allowExpansion) return;

    setIsExpanded(!isExpanded);
  };

  return (
    <button
      type="button"
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
