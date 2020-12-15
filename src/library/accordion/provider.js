import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const defaultValues = {
  currentPanel: [],
  setCurrentPanel: () => null,
  mode: 'loose',
};

export const AccordionContext = createContext(defaultValues);

export const Provider = ({ mode, children }) => {
  const defaultPanel = mode === 'loose' ? [] : -1;
  const [currentPanel, setCurrentPanel] = useState(defaultPanel);

  return (
    <AccordionContext.Provider
      value={{
        ...defaultValues,
        currentPanel,
        setCurrentPanel,
        mode,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

Provider.defaultProps = {
  mode: 'loose',
};

Provider.propTypes = {
  mode: PropTypes.oneOf(['tight', 'loose']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
