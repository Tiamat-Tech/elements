import React from 'react';
import PropTypes from 'prop-types';
import { Provider as JotaiProvider } from 'jotai';

import { accordionScope, currentPanelAtom, configAtom } from './atoms';

export const Provider = ({ defaultPanel, springConfig, children }) => {
  return (
    <JotaiProvider
      initialValues={[
        [currentPanelAtom, undefined],
        [configAtom, { defaultPanel: defaultPanel, springConfig: springConfig }],
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
