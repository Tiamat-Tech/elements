import React from 'react';
import { Provider, On, Off } from '../../../src/toggle';

export const Toggle = ({ children, ...rest }) => {
  return <Provider {...rest}>{children}</Provider>;
};

Toggle.On = On;
Toggle.Off = Off;
