import React, { useState, useRef } from 'react';
import { Provider, Button, Panel } from '../../../src/disclosure';

export const Disclosure = ({ children, ...rest }) => {
  return <Provider {...rest}>{children}</Provider>;
};

const CustomButton = ({ children, ...rest }) => {
  const [isOpen] = useState(false);
  const ref = useRef(null);

  return (
    <Button
      ref={ref}
      className="flex justify-between w-full mt-1 p-4 bg-gray-800 font-bold text-left"
      {...rest}
    >
      <div>{children}</div>
      <div>{!isOpen ? '+' : '-'}</div>
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
