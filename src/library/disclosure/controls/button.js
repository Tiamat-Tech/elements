import React from 'react';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { openAtom, configAtom } from '../atoms';

export const Button = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useAtom(openAtom);

  const { uid } = useAtomValue(configAtom);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-expanded={isOpen}
      aria-controls={uid}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
