import React from 'react';
import { Provider, Button, Panel } from '@candycode/elements/disclosure';

export const Disclosure_PROD = ({ children, ...rest }) => {
  return <Provider {...rest}>{children}</Provider>;
};

const CustomButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

const CustomPanel = ({ children, ...rest }) => {
  return <Panel {...rest}>{children}</Panel>;
};

Disclosure_PROD.Button = CustomButton;
Disclosure_PROD.Panel = CustomPanel;
