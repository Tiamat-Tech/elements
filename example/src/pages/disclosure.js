import React from 'react';

import { Head } from '~components/head';
import { Intro } from '~components/intro';
import { Disclosure } from '~components/basic-disclosure';

const Demo = () => {
  return (
    <>
      <Head />
      <Intro />
      <div className="wrapper">
        <h2 className="header">Basic disclosure</h2>
        <p className="body">This disclosure opens and closes on mouse and touch events.</p>
        <Disclosure uid="pikachu">
          <Disclosure.Button>Who’s that pokemon?</Disclosure.Button>
          <Disclosure.Panel>
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
                className="w-32 object-contain"
                alt=""
              />
              <span>It’s Pikachu!</span>
            </div>
          </Disclosure.Panel>
        </Disclosure>
        <Disclosure uid="togepi">
          <Disclosure.Button>But what about this one?</Disclosure.Button>
          <Disclosure.Panel>
            <div className="flex items-center space-x-4">
              <img
                src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
                className="w-32 object-contain"
                alt=""
              />
              <span>It’s Togepi!</span>
            </div>
          </Disclosure.Panel>
        </Disclosure>
      </div>
    </>
  );
};

export default Demo;
