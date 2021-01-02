import { useState } from 'react';

import { useEffectOnce } from '../hooks/use-effect-once';

export const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffectOnce(() => {
    setHasMounted(true);
  });

  if (!hasMounted) return null;

  return children;
};
