/* eslint-disable react/prop-types */
import React from 'react';
import { Provider, Wrapper, Button, Panel } from '@cndycd/core/accordion';

export const Accordion = ({ children, ...rest }) => {
  return (
    <Provider initialPanel="first" {...rest}>
      <Wrapper>{children}</Wrapper>
    </Provider>
  );
};

const CustomItem = ({ children, ...rest }) => {
  return <div {...rest}>{children}</div>;
};

const CustomButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

const CustomPanel = ({ children, ...rest }) => {
  return <Panel {...rest}>{children}</Panel>;
};

Accordion.Item = CustomItem;
Accordion.Button = CustomButton;
Accordion.Panel = CustomPanel;
