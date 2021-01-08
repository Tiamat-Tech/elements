/* eslint-disable react/prop-types */
import React from 'react';
import { Provider, Wrapper, Disclosure, Button, Panel } from '@cndycd/core/accordion';

export const Accordion = ({ children, ...rest }) => {
  return (
    <Provider defaultPanel="first" {...rest}>
      <Wrapper>{children}</Wrapper>
    </Provider>
  );
};

const CustomItem = ({ children }) => {
  return <div>{children}</div>;
};

const CustomButton = ({ children }) => {
  return <div>{children}</div>;
};

const CustomPanel = ({ children }) => {
  return <div>{children}</div>;
};

Accordion.Item = CustomItem;
Accordion.Button = CustomButton;
Accordion.Panel = CustomPanel;
