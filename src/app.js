import React from 'react';

import '~styles/app.css';
import '~styles/core.css';

import { Accordion, Carousel, Credits, Disclosure } from '~components';
import { SLIDES } from '~data';

const App = () => {
  return (
    <>
      <div className="p-16">
        <h1 className="font-bold text-3xl">@candycode/core</h1>

        <h2 className="mt-16 font-bold text-xl">Accordion Demo</h2>

        <div className="max-w-xs mt-4">
          <Accordion keyString="pokemon">
            {SLIDES.map((slide, index) => (
              <Accordion.Item key={index}>
                <Accordion.Button>Open/close</Accordion.Button>
                <Accordion.Panel>{slide}</Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>

        <h2 className="mt-16 font-bold text-xl">Disclosure Demo</h2>

        <div className="max-w-xs mt-4">
          {SLIDES.map((slide, index) => (
            <Disclosure key={index} uid={`pokemon_item${index}`}>
              <Disclosure.Button>Open/close</Disclosure.Button>
              <Disclosure.Panel>{slide}</Disclosure.Panel>
            </Disclosure>
          ))}
        </div>

        <h2 className="mt-16 font-bold text-xl">Carousel Demo</h2>
        <div className="max-w-3xl mt-4">
          <Carousel aspectRatio="wider" keyboardMode="gaming">
            {SLIDES}
          </Carousel>
        </div>
      </div>
      <Credits className="fixed right-0 bottom-0" />
    </>
  );
};

export default App;
