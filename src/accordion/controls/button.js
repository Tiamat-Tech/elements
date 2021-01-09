import React from 'react';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { currentPanelAtom, configAtom } from '../atoms';

export const Button = ({ index, children, ...rest }) => {
  const [currentPanel, setCurrentPanel] = useAtom(currentPanelAtom);
  const { keyString } = useAtomValue(configAtom);

  const isOpen = currentPanel === index;
  const uid = `${keyString}${index}`;

  const handleClick = () => {
    if (currentPanel !== index) {
      setCurrentPanel(index);
    } else {
      setCurrentPanel(undefined);
    }
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
  index: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
