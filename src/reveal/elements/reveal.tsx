import * as React from 'react';
import { useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, config as defaultConfigs, SpringValues } from 'react-spring';

import { getAnimationConfig } from '../../utilities/get-animation-config';

type Props = {
  delay: number;
  threshold: number;
  springConfig?: 'default' | 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'molasses' | SpringConfig;
  children: React.ReactNode;
};

type SpringConfig = {
  mass?: number;
  tension: number;
  friction: number;
};

export const Reveal = ({
  delay = 200,
  threshold = 0.25,
  springConfig = 'default',
  children,
  ...rest
}: Props) => {
  const [ref, inView] = useInView({
    delay: delay,
    threshold: threshold,
    triggerOnce: true,
  });

  const animationConfig = useMemo(() => getAnimationConfig(springConfig, defaultConfigs), [
    springConfig,
  ]);

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,0,0),' : 'translate3d(0,50%,0)',
    config: animationConfig,
  }) as SpringValues<any>;

  return (
    <animated.div ref={ref} style={animation} {...rest}>
      {children}
    </animated.div>
  );
};
