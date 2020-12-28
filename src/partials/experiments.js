import React from 'react';

import { Carousel, Credits } from '~components';
import { SLIDES } from '~data';

const Experiments = () => {
  return (
    <>
      <div className="p-16">
        <h1 className="font-bold text-3xl">@candycode/core</h1>
        <h2 className="mt-16 font-bold text-xl">Carousel</h2>
        <div className="max-w-2xl mt-4">
          <Carousel slides={SLIDES} />
        </div>
      </div>
      <Credits />
    </>
  );
};

export default Experiments;
