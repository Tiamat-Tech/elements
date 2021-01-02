import { useState, useEffect } from 'react';

export const useLocalStorage = (key, defaultState) => {
  const [state, setState] = useState(() => {
    try {
      const storedState = window.localStorage.getItem(key);
      return storedState !== null ? JSON.parse(storedState) : defaultState;
    } catch (error) {
      console.error(error);
      return defaultState;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
