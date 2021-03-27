import * as React from 'react';
import { useMemo } from 'react';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated, config as defaultConfigs, SpringValues } from 'react-spring';

import { getAnimationConfig } from '../../utilities/get-animation-config';

type Props = {
  big?: boolean;
  delay?: number;
  threshold?: number;
  springConfig?: 'default' | 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'molasses' | SpringConfig;
  className?: string;
  children: React.ReactNode;
};

type SpringConfig = {
  mass?: number;
  tension: number;
  friction: number;
};

export const Reveal = ({
  big = false,
  delay = 200,
  threshold = 0.1,
  springConfig = 'default',
  className = '',
  children,
  ...rest
}: Props) => {
  const [ref, inView] = useInView({
    delay: delay,
    threshold: threshold,
    triggerOnce: true,
  });

  const animationConfig = useMemo(() => getAnimationConfig(springConfig, defaultConfigs, true), [
    springConfig,
  ]);

  const outOfViewTransform = useMemo(
    () => (big ? 'translate3d(0,1000px,0)' : 'translate3d(0,100%,0)'),
    [big],
  );

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate3d(0,0,0),' : outOfViewTransform,
    config: animationConfig,
  }) as SpringValues<any>;

  return (
    <div ref={ref} className={cx('reveal', className)} {...rest}>
      <animated.div style={animation}>{children}</animated.div>
    </div>
  );
};
