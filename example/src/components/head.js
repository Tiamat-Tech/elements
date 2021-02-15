import React from 'react';
import { Helmet } from 'react-helmet';

export const Head = () => {
  return (
    <Helmet defer={false}>
      <title>candycode elements</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Helmet>
  );
};
