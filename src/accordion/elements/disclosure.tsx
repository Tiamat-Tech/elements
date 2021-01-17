import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Disclosure = ({ children, ...rest }: Props) => {
  return <div {...rest}>{children}</div>;
};
