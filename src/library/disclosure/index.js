import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Provider as JotaiProvider, useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import { useSpring, animated, config as defaultConfigs } from 'react-spring';
import useMeasure from 'react-use-measure';

import { disclosureScope, openAtom, configAtom } from './atoms';
import { getAnimationConfig } from '../utilities/get-animation-config';

export const Disclosure = ({ springConfig, children, ...rest }) => (
  <JotaiProvider
    initialValues={[
      [openAtom, false],
      [configAtom, { springConfig: springConfig }],
    ]}
    scope={disclosureScope}
  >
    <div {...rest}>{children}</div>
  </JotaiProvider>
);

Disclosure.propTypes = {
  springConfig: PropTypes.oneOf([
    'default',
    'gentle',
    'wobbly',
    'stiff',
    'slow',
    'molasses',
    PropTypes.shape({
      mass: PropTypes.number,
      tension: PropTypes.number.isRequired,
      friction: PropTypes.number.isRequired,
    }),
  ]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export const Button = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useAtom(openAtom);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export const Panel = ({ children, ...rest }) => {
  const [isOpen] = useAtom(openAtom);

  const { springConfig } = useAtomValue(configAtom);

  const animationConfig = useMemo(() => getAnimationConfig(springConfig, defaultConfigs), [
    springConfig,
  ]);

  const [ref, { height }] = useMeasure();

  const animation = useSpring({
    height: isOpen ? height : 0,
    overflow: `hidden`,
    config: animationConfig,
  });

  return (
    <animated.div style={animation}>
      <div ref={ref} {...rest}>
        {children}
      </div>
    </animated.div>
  );
};

Panel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

Disclosure.Button = Button;
Disclosure.Panel = Panel;
