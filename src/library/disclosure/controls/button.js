import React from 'react';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';

import { openAtom } from '../atoms';

export const Button = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useAtom(openAtom);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
