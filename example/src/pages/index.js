import React from 'react';
import Head from 'next/head';

import { Carousel } from '../components/carousel';
import { SLIDES } from '../data/slides';

const Home = () => {
  return (
    <>
      <Head>
        <title>@cndycd/core playground</title>
      </Head>
      <div className="p-16">
        <h1 className="font-bold text-3xl">@cndycd/core</h1>
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
