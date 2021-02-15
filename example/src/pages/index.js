import React from 'react';
import { Link } from 'gatsby';

import { Head } from '~components/head';
import { Intro } from '~components/intro';

const Demo = () => {
  const buttonClasses =
    'inline-block px-4 py-2 border border-gray-200 bg-gray-100 rounded-sm text-sm text-gray-900';

  return (
    <>
      <Head />
      <Intro />
      <div className="wrapper">
        <div class="flex space-x-8">
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
        </div>
      </div>
    </>
  );
};

export default Demo;
