import * as React from 'react';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { currentPanelAtom, configAtom } from '../atoms';

type Props = {
  index: number;
  children: React.ReactNode;
};

export const Button = ({ index, children, ...rest }: Props) => {
  const [currentPanel, setCurrentPanel] = useAtom(currentPanelAtom);
  const { keyString } = useAtomValue(configAtom);

  const isOpen = currentPanel === index;
  const uid = `${keyString}${index}`;

  const handleClick = () => {
    if (currentPanel !== index) {
      setCurrentPanel(index);
    } else {
      setCurrentPanel(undefined);
    }
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
