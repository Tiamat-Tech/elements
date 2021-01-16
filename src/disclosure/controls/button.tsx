import * as React from 'react';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { openAtom, configAtom } from '../atoms';

type Props = {
  children: React.ReactNode;
};

export const Button = ({ children, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useAtom(openAtom);

  const { uid } = useAtomValue(configAtom);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-expanded={isOpen}
      aria-controls={uid}
      {...rest}
    >
      {children}
    </button>
  );
};
