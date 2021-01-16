import * as React from 'react';
import { Provider as JotaiProvider } from 'jotai';

import { disclosureScope, openAtom, configAtom } from './atoms';

type Props = {
  uid: string;
  springConfig?: 'default' | 'gentle' | 'wobbly' | 'stiff' | 'slow' | 'molasses' | SpringConfig;
  children: React.ReactNode;
};

type SpringConfig = {
  mass?: number;
  tension: number;
  friction: number;
};

export const Provider = ({ uid, springConfig = 'default', children, ...rest }: Props) => {
  return (
    <JotaiProvider
      initialValues={[
        [openAtom, false],
        [configAtom, { uid: uid, springConfig: springConfig }],
      ]}
      scope={disclosureScope}
    >
      <div {...rest}>{children}</div>
    </JotaiProvider>
  );
};
