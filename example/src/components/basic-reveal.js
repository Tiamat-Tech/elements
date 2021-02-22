import React from 'react';

import { Reveal as CustomReveal } from '../../../src/reveal';

export const Reveal = ({ children, ...rest }) => {
  return (
    <CustomReveal delay={200} threshold={0.4} {...rest}>
      {children}
    </CustomReveal>
  );
};
