import React from 'react';

import { Carousel, Credits } from '~components';
import { SLIDES } from '~data';

const Experiments = () => {
  return (
    <>
      <div className="p-16">
        <h1 className="font-bold text-3xl">@candycode/core</h1>
        <h2 className="mt-16 font-bold text-xl">Carousel Demo</h2>
        {/* <div style={{ height: '900px' }} /> */}
        <div className="max-w-3xl mt-4">
          <Carousel aspectRatio="wider" keyboardMode="gaming">
            {SLIDES}
          </Carousel>
        </div>
      </div>
      <Credits />
    </>
  );
};

export default Experiments;
