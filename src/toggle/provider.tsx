import * as React from 'react';
import { Provider as JotaiProvider } from 'jotai';

import { toggleScope, activeAtom } from './atoms';

type Props = {
  children: React.ReactNode;
};

export const Provider = ({ children, ...rest }: Props) => {
  return (
    <JotaiProvider initialValues={[[activeAtom, false]]} scope={toggleScope}>
      <div {...rest}>{children}</div>
    </JotaiProvider>
  );
};
