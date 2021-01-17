import React from 'react';
import { Helmet } from 'react-helmet';

export const Head = ({ lang = 'en-US', title }) => {
  const htmlAttributes = {
    lang: lang,
  };

  const siteIcon = '/favicon.png';

  return (
    <Helmet htmlAttributes={htmlAttributes} defer={false}>
      <title>{title}</title>
      <link rel="icon" type="image/png" href={siteIcon} />
    </Helmet>
  );
};
