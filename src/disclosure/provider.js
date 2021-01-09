import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider as JotaiProvider } from 'jotai';

import { disclosureScope, openAtom, configAtom } from './atoms';

export const Provider = ({ uid, springConfig, children, ...rest }) => {
  return (
    <JotaiProvider
      initialValues={[
        [openAtom, false],
        [configAtom, { uid: uid, springConfig: springConfig }],
      ]}
      scope={disclosureScope}
    >
      <div {...rest}>{children}</div>
    </JotaiProvider>
  );
};

Provider.defaultProps = {
  springConfig: 'default',
};

Provider.propTypes = {
  uid: PropTypes.string.isRequired,
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
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};
