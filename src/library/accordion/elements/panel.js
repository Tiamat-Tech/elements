import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import { useSpring, animated, config as defaultConfigs } from 'react-spring';
import useMeasure from 'react-use-measure';

import { currentPanelAtom, configAtom } from '../atoms';
import { getAnimationConfig } from '../../utilities/get-animation-config';

export const Panel = ({ index, children, ...rest }) => {
  const [currentPanel] = useAtom(currentPanelAtom);
  const { keyString, springConfig } = useAtomValue(configAtom);

  const isOpen = currentPanel === index;
  const uid = `${keyString}${index}`;

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
      <div ref={ref} id={uid} {...rest}>
        {children}
      </div>
    </animated.div>
  );
};

Panel.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};