import React from 'react';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';

import { currentPanelAtom } from '../atoms';

export const Button = ({ uid, children, ...rest }) => {
  const [currentPanel, setCurrentPanel] = useAtom(currentPanelAtom);

  const isOpen = currentPanel === uid;

  const handleClick = () => {
    if (currentPanel !== uid) {
      setCurrentPanel(uid);
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
  uid: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
