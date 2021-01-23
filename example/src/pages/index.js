import React from 'react';

import { Head, Carousel, Disclosure } from '~components';
import SLIDES from '~data/slides';

const Home = () => {
  return (
    <>
      <Head />
      <div className="p-16">
        <h1 className="font-bold text-3xl">candycode elements</h1>
      </div>

      <div className="p-16">
        <h2 className="mt-16 font-bold text-xl">Disclosure Demo</h2>
        <div className="max-w-sm">
          <Disclosure uid="pikachu">
            <Disclosure.Button>Pikachu</Disclosure.Button>
            <Disclosure.Panel>
              <div className="flex bg-pink-200 w-full h-full justify-center">
                <img
                  src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
                  className="object-contain p-8"
                />
              </div>
            </Disclosure.Panel>
          </Disclosure>
        </div>
      </div>

      <div className="p-16">
        <h2 className="mt-16 font-bold text-xl">Carousel Demo</h2>
        <div className="max-w-3xl mt-4">
          <Carousel aspectRatio="wider" keyboardMode="gaming">
            {SLIDES}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
