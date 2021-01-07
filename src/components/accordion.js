/* eslint-disable react/prop-types */
import React from 'react';
import { Provider, Wrapper } from '@cndycd/core/accordion';

export const Accordion = ({ children, ...rest }) => {
  return (
    <Provider initialPanel="first" {...rest}>
      <Wrapper>{children}</Wrapper>
    </Provider>
  );
};

const CustomItem = ({ children }) => {
  return <div className="p-4 bg-blue-500">{children}</div>;
};

const CustomButton = ({ children }) => {
  return <div className="p-4 bg-green-500">{children}</div>;
};

const CustomPanel = ({ children }) => {
  return <div className="p-4 bg-yellow-500">{children}</div>;
};

Accordion.Item = CustomItem;
Accordion.Button = CustomButton;
Accordion.Panel = CustomPanel;
