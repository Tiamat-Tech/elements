import React, { useState, useEffect, useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import useMeasure from 'react-use-measure';

import { Provider, AccordionContext } from './provider';

export const Accordion = ({ children, ...rest }) => <Provider {...rest}>{children}</Provider>;

export const Panel = ({ children }) => children;

export const Button = ({ uid, children, ...rest }) => {
  const { currentPanel, setCurrentPanel, mode } = useContext(AccordionContext);

  const handleClick = () => {
    if (mode === 'tight') {
      return setCurrentPanel(currentPanel === uid ? null : uid);
    }

    if (mode === 'loose') {
      if (currentPanel.includes(uid)) {
        const newPanel = [...currentPanel].filter((item) => item !== uid);
        return setCurrentPanel(newPanel);
      } else {
        const newPanel = [...currentPanel, uid];
        return setCurrentPanel(newPanel);
      }
    }
  };

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export const Content = ({ uid, children }) => {
  const { currentPanel, mode } = useContext(AccordionContext);
  const [isOpen, setIsOpen] = useState(false);

  const [ref, { height }] = useMeasure();
  const animation = useSpring({
    height: isOpen ? height : 0,
    overflow: `hidden`,
    config: {
      ...config.default,
      clamp: true,
    },
  });

  useEffect(() => {
    if (mode === 'tight') {
      return setIsOpen(currentPanel === uid);
    }

    if (mode === 'loose') {
      return setIsOpen(currentPanel.includes(uid));
    }
  }, [mode, currentPanel, uid]);

  return (
    <animated.div style={animation}>
      <div ref={ref}>{children}</div>
    </animated.div>
  );
};

Accordion.Panel = Panel;
Accordion.Button = Button;
Accordion.Content = Content;
