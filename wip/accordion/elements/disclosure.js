import * as React from 'react';
import PropTypes from 'prop-types';

export const Disclosure = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

Disclosure.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
