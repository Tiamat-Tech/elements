import React from 'react';
import { Provider, Button, Panel } from '../../../src/disclosure';

export const Disclosure_DEV = ({ children, ...rest }) => {
  return <Provider {...rest}>{children}</Provider>;
};

const CustomButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

const CustomPanel = ({ children, ...rest }) => {
  return <Panel {...rest}>{children}</Panel>;
};

Disclosure_DEV.Button = CustomButton;
Disclosure_DEV.Panel = CustomPanel;
