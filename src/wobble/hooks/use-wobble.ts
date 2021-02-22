import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSpring, config as defaultConfigs, SpringValues } from 'react-spring';

import { getAnimationConfig } from '../../utilities/get-animation-config';

type Props = {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  timing?: number;
  springConfig?: 'default' | 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'molasses' | SpringConfig;
};

type SpringConfig = {
  mass?: number;
  tension: number;
  friction: number;
};

export const useWobble = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = 'default',
}: Props) => {
  const [isWobbled, setIsWobbled] = useState(false);

  const animationConfig = useMemo(() => getAnimationConfig(springConfig, defaultConfigs, false), [
    springConfig,
  ]);

  const animation = useSpring({
    transform: isWobbled
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
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

  const trigger = useCallback(() => {
    setIsWobbled(true);
  }, []);

  return [animation, trigger];
};
