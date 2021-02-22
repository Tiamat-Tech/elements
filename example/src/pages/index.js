import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '~components/layout';

const Demo = () => {
  const buttonClasses =
    'inline-block px-4 py-2 border border-gray-200 bg-gray-100 rounded-sm text-sm text-gray-900';

  return (
    <Layout>
      <div className="wrapper">
        <div className="flex space-x-8">
          <div>
            <Link to="/carousel" className={buttonClasses}>
              Carousel
            </Link>
          </div>
          <div>
            <Link to="/accordion" className={buttonClasses}>
              Accordion
            </Link>
          </div>
          <div>
            <Link to="/disclosure" className={buttonClasses}>
              Disclosure
            </Link>
          </div>
          <div>
            <Link to="/toggle" className={buttonClasses}>
              Toggle
            </Link>
          </div>
          <div>
            <Link to="/reveal" className={buttonClasses}>
              Reveal
            </Link>
          </div>
          <div>
            <Link to="/wobble" className={buttonClasses}>
              Wobble
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Demo;
