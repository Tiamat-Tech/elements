import React from 'react';

import { Layout } from '~components/layout';
import { BasicCarousel } from '~components/basic-carousel';
import { CarouselWithDrawer } from '~components/carousel-with-drawer';
import { SlowCarousel } from '~components/slow-carousel';

const Demo = () => {
  return (
    <Layout>
      <div className="wrapper">
        <h2 className="header">Basic carousel</h2>
        <p className="body">This carousel uses basic mouse and touch gestures.</p>
        <BasicCarousel>
          <div className="slide bg-green-200">
            <img
              src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-red-200">
            <img
              src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-blue-200">
            <img
              src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-yellow-200">
            <img
              src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-purple-200">
            <img
              src="https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-pink-200">
            <img
              src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
              className="image"
              alt=""
            />
          </div>
        </BasicCarousel>
      </div>

      <div className="wrapper">
        <h2 className="header">Carousel with drawer</h2>
        <p className="body">
          This carousel also listens to keyboard events. Try pressing ← and → keys!
        </p>
        <CarouselWithDrawer>
          <div className="slide bg-green-200">
            <img
              src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-red-200">
            <img
              src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-blue-200">
            <img
              src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-yellow-200">
            <img
              src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-purple-200">
            <img
              src="https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-pink-200">
            <img
              src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
              className="image"
              alt=""
            />
          </div>
        </CarouselWithDrawer>
      </div>

      <div className="wrapper">
        <h2 className="header">Carousel with slower animation</h2>
        <p className="body">
          This carousel uses the 'molasses' react-spring configuration, which is very slow. You
          probably wouldn't want to do this in a real project, but it demonstrates the diversity of
          the animations you can use to power the carousel.
        </p>
        <p className="body">
          <i>Note that gestures are intentionally disabled for this example.</i>
        </p>
        <SlowCarousel>
          <div className="slide bg-green-200">
            <img
              src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-red-200">
            <img
              src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-blue-200">
            <img
              src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-yellow-200">
            <img
              src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-purple-200">
            <img
              src="https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"
              className="image"
              alt=""
            />
          </div>
          <div className="slide bg-pink-200">
            <img
              src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
              className="image"
              alt=""
            />
          </div>
        </SlowCarousel>
      </div>
    </Layout>
  );
};

export default Demo;
