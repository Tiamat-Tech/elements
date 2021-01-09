import { useCallback } from 'react';

export const useCallbackOnce = (callback) => {
  useCallback(callback, []); // eslint-disable-line react-hooks/exhaustive-deps
};
