import { useCallback } from 'react';

export const useCallbackOnce = (callback: () => void) => {
  useCallback(callback, []);
};
