import * as React from 'react';
import { useAtom } from 'jotai';

import { activeAtom } from '../atoms';

type Props = {
  children: React.ReactNode;
};

export const Off = ({ children, ...rest }: Props) => {
  const [active, setActive] = useAtom(activeAtom);

  const handleOffClick = () => {
    setActive(true);
  };

  return (
    <button onClick={handleOffClick} {...rest}>
      {children}
    </button>
  );
};
