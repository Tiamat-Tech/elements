import { useEffect } from 'react';

export const useEffectOnce = (effect) => {
  useEffect(effect, []); // eslint-disable-line react-hooks/exhaustive-deps
};
