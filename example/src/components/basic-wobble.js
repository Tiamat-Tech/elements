import React from 'react';
import { Wobble as CustomWobble } from '../../../src/wobble';

export const Wobble = ({ children, ...rest }) => {
  return (
    <CustomWobble rotation={30} timing={150}>
      {children}
    </CustomWobble>
  );
};
