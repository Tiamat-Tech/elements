import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Provider as JotaiProvider } from 'jotai';

import { accordionScope, currentPanelAtom, configAtom } from './atoms';

export const Provider = ({ defaultPanel, keyString, springConfig, children }) => {
  const initialPanel = useMemo(() => {
    switch (defaultPanel) {
      case 'none':
        return -1;
      case 'first':
        return 0;
    }
  }, [defaultPanel]);

  // @TODO remove console.info for defaultPanel, initialPanel
  console.info('defaultPanel, initialPanel:', defaultPanel, initialPanel);

  return (
    <JotaiProvider
      initialValues={[
        [currentPanelAtom, initialPanel],
        [configAtom, { keyString: keyString, springConfig: springConfig }],
      ]}
      scope={accordionScope}
    >
      {children}
    </JotaiProvider>
  );
};

Provider.defaultProps = {
  defaultPanel: 'none',
  springConfig: 'default',
};

Provider.propTypes = {
  keyString: PropTypes.string.isRequired,
  defaultPanel: PropTypes.oneOf(['none', 'first']),
  springConfig: PropTypes.oneOf([
    'default',
    'gentle',
    'wobbly',
    'stiff',
    'slow',
    'molasses',
    PropTypes.shape({
      mass: PropTypes.number,
      tension: PropTypes.number.isRequired,
      friction: PropTypes.number.isRequired,
    }),
  ]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
