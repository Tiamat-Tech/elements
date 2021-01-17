import * as React from 'react';
import { useMemo } from 'react';
import { Provider as JotaiProvider } from 'jotai';

import { accordionScope, currentPanelAtom, configAtom } from './atoms';

type Props = {
  defaultPanel?: 'none' | 'first';
  keyString: string;
  springConfig?: 'default' | 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'molasses' | SpringConfig;
  children: React.ReactNode;
};

type SpringConfig = {
  mass?: number;
  tension: number;
  friction: number;
};

export const Provider = ({
  defaultPanel = 'none',
  keyString,
  springConfig = 'default',
  children,
}: Props) => {
  const initialPanel = useMemo(() => {
    switch (defaultPanel) {
      case 'none':
        return -1;
      case 'first':
        return 0;
    }
  }, [defaultPanel]);

  return (
    <JotaiProvider
      initialValues={[
        [currentPanelAtom, initialPanel],
        [configAtom, { keyString: keyString, springConfig: springConfig }],
      ]}
      scope={accordionScope}
    >
      {children}
    </JotaiProvider>
  );
};
