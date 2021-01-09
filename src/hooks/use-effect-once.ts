import { useEffect } from 'react';

export const useEffectOnce = (effect: () => void) => {
  useEffect(effect, []); // eslint-disable-line react-hooks/exhaustive-deps
};
