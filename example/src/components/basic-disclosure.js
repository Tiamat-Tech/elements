import React from 'react';
import { Provider, Button, Panel } from '../../../src/disclosure';

export const Disclosure = ({ children, ...rest }) => {
  return <Provider {...rest}>{children}</Provider>;
};

const CustomButton = ({ children, ...rest }) => {
  return (
    <Button
      className="flex justify-between w-full mt-1 p-4 bg-gray-800 font-bold text-left"
      {...rest}
    >
      <div>{children}</div>
    </Button>
  );
};

const CustomPanel = ({ children, ...rest }) => {
  return (
    <Panel className="p-4 bg-gray-600" {...rest}>
      {children}
    </Panel>
  );
};

Disclosure.Button = CustomButton;
Disclosure.Panel = CustomPanel;
