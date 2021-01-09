import { useCallback } from 'react';

export const useCallbackOnce = (callback: () => void) => {
  useCallback(callback, []); // eslint-disable-line react-hooks/exhaustive-deps
};
