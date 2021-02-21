import * as React from 'react';
import { useAtom } from 'jotai';

import { activeAtom } from '../atoms';

type Props = {
  children: React.ReactNode;
};

export const On = ({ children, ...rest }: Props) => {
  const [active, setActive] = useAtom(activeAtom);

  const handleOnClick = () => {
    setActive(false);
  };

  return (
    <button onClick={handleOnClick} {...rest}>
      {children}
    </button>
  );
};
