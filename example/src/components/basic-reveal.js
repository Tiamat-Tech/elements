import React from 'react';

import { Reveal as CustomReveal } from '../../../src/reveal';

export const Reveal = ({ children, ...rest }) => {
  return (
    <CustomReveal delay={undefined} threshold={0.05} springConfig="slow" {...rest}>
      {children}
    </CustomReveal>
  );
};
