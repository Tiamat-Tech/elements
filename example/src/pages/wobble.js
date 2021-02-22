import React from 'react';

import { Layout } from '~components/layout';
import { Wobble } from '~components/basic-wobble';

const Demo = () => {
  const buttonClasses =
    'inline-flex justify-center items-center w-16 h-16 bg-gray-700 rounded-full text-3xl';

  return (
    <Layout>
      <div className="wrapper">
        <h2 className="header">Basic wobble</h2>
        <p className="body">This wobble animation activates on hover events.</p>
        <div className="mt-8 space-x-8">
          <Wobble>
            <div className={buttonClasses}>🍰</div>
          </Wobble>
          <Wobble>
            <div className={buttonClasses}>🍬</div>
          </Wobble>
          <Wobble>
            <div className={buttonClasses}>😍</div>
          </Wobble>
        </div>
      </div>
    </Layout>
  );
};

export default Demo;
