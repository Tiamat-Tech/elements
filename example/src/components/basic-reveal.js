import React from 'react';

import { Reveal as CustomReveal } from '../../../src/reveal';

export const Reveal = ({ children, ...rest }) => {
  return (
    <CustomReveal delay={300} threshold={0.5} springConfig="slow" {...rest}>
      {children}
    </CustomReveal>
  );
};
