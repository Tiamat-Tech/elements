import * as React from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useSpring, animated, config as defaultConfigs, SpringValues } from 'react-spring';

import { getAnimationConfig } from '../../utilities/get-animation-config';

type Props = {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  springConfig?: 'default' | 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'molasses' | SpringConfig;
  children: React.ReactNode;
};

type SpringConfig = {
  mass?: number;
  tension: number;
  friction: number;
};

export const Wobble = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = 'wobbly',
  children,
  ...rest
}: Props) => {
  const [isWobbled, setIsWobbled] = useState(false);

  const animationConfig = useMemo(() => getAnimationConfig(springConfig, defaultConfigs, false), [
    springConfig,
  ]);

  const animation = useSpring({
    display: 'inline-block',
    cursor: 'default',
    transform: isWobbled
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    backfaceVisibility: 'hidden',
    config: animationConfig,
  }) as SpringValues<any>;

  useEffect(() => {
    if (!isWobbled) return;

    const timeoutId = window.setTimeout(() => {
      setIsWobbled(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isWobbled, timing]);

  const trigger = () => {
    setIsWobbled(true);
  };

  return (
    <animated.span onMouseEnter={trigger} style={animation} {...rest}>
      {children}
    </animated.span>
  );
};
