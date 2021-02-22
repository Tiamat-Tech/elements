import React from 'react';

import { Layout } from '~components/layout';
import { Reveal } from '~components/basic-reveal';

const Demo = () => {
  return (
    <Layout>
      <div className="wrapper">
        <h2 className="header">Basic reveal</h2>
        <p className="body">This toggle switches state based on on mouse and touch events.</p>
        <div className="mt-16 space-y-16 overflow-hidden">
          <Reveal>
            <div className="slide bg-green-200">
              <img
                src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
                className="image"
                alt=""
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="slide bg-red-200">
              <img
                src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
                className="image"
                alt=""
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="slide bg-blue-200">
              <img
                src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
                className="image"
                alt=""
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="slide bg-yellow-200">
              <img
                src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
                className="image"
                alt=""
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="slide bg-purple-200">
              <img
                src="https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"
                className="image"
                alt=""
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="slide bg-pink-200">
              <img
                src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
                className="image"
                alt=""
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Layout>
  );
};

export default Demo;
