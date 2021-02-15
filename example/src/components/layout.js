import React from 'react';

import { Head } from '~components/head';
import { Intro } from '~components/intro';

export const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Intro />
      {children}
    </>
  );
};
