import React from 'react';
import PropTypes from 'prop-types';
import { Provider as JotaiProvider } from 'jotai';

import { disclosureScope, openAtom, configAtom } from './atoms';
import { Button } from './controls/button';
import { Panel } from './elements/panel';

export const Disclosure = ({ springConfig, children, ...rest }) => (
  <JotaiProvider
    initialValues={[
      [openAtom, false],
      [configAtom, { springConfig: springConfig }],
    ]}
    scope={disclosureScope}
  >
    <div {...rest}>{children}</div>
  </JotaiProvider>
);

Disclosure.Button = Button;
Disclosure.Panel = Panel;

Disclosure.propTypes = {
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
