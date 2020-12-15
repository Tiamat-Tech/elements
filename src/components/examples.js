import React from 'react';

import { Carousel } from '~components/carousel';

const Examples = () => {
  const slides = [
    <div key="1">
      <div className="flex bg-blue-200 w-full h-full justify-center">
        <img
          src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
          className="object-contain p-8"
        />
      </div>
    </div>,
    <div key="2">
      <div className="flex bg-green-200 w-full h-full justify-center">
        <img
          src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
          className="object-contain p-8"
        />
      </div>
    </div>,
    <div key="3">
      <div className="flex bg-yellow-200 w-full h-full justify-center">
        <img
          src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
          className="object-contain p-8"
        />
      </div>
    </div>,
    <div key="4">
      <div className="flex bg-pink-200 w-full h-full justify-center">
        <img
          src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
          className="object-contain p-8"
        />
      </div>
    </div>,
    <div key="5">
      <div className="flex bg-purple-200 w-full h-full justify-center">
        <img
          src="https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"
          className="object-contain p-8"
        />
      </div>
    </div>,
    <div key="6">
      <div className="flex bg-yellow-200 w-full h-full justify-center">
        <img
          src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
          className="object-contain p-8"
        />
      </div>
    </div>,
  ];

  return (
    <div className="p-16">
      <h1 className="font-bold text-3xl">React Spring Elements</h1>
      <h2 className="mt-16 font-bold text-xl">Carousel</h2>
      <div className="max-w-2xl mt-4">
        <Carousel slides={slides} gestures={true} />
      </div>
    </div>
  );
};

export default Examples;
