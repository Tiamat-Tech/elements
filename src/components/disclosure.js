/* eslint-disable react/prop-types */
import React from 'react';
import { Provider, Button, Panel } from '@cndycd/core/disclosure';

export const Disclosure = ({ children, ...rest }) => {
  return <Provider {...rest}>{children}</Provider>;
};

const CustomButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

const CustomPanel = ({ children, ...rest }) => {
  return <Panel {...rest}>{children}</Panel>;
};

Disclosure.Button = CustomButton;
Disclosure.Panel = CustomPanel;
