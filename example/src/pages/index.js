import React from 'react';
import cx from 'classnames';
import { Helmet } from 'react-helmet';
import GitHubButton from 'react-github-btn';

import { BasicCarousel, CarouselWithDrawer, SlowCarousel } from '~components/carousels';
import { Disclosure } from '~components/disclosures';

const App = () => {
  const wrapperClasses = 'max-w-xl mx-auto my-16';
  const headerClasses = 'font-bold text-lg';
  const bodyClasses = 'block mb-1 text-sm text-gray-300';
  const slideClasses = 'flex w-full h-full justify-center';
  const imageClasses = 'object-contain p-8';

  return (
    <>
      <Helmet defer={false}>
        <title>candycode elements</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Helmet>
      <div className={wrapperClasses}>
        <a href="https://candycode.co/">
          <img
            src="https://storage.googleapis.com/candycode/candycode.svg"
            style={{ height: 48 }}
            alt="candycode"
          />
        </a>
        <p className={bodyClasses}>
          The{' '}
          <a href="https://github.com/cndycd/elements" className="font-bold text-white">
            @candycode/elements
          </a>{' '}
          library consists of atomic components used to assemble custom React components with
          animations and interactivity powered by <code>react-spring</code> and{' '}
          <code>react-use-gesture</code> respectively.
        </p>
        <GitHubButton
          href="https://github.com/cndycd/elements"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
        >
          Star
        </GitHubButton>
      </div>

      <div className={wrapperClasses}>
        <h2 className={headerClasses}>Basic carousel</h2>
        <p className={bodyClasses}>This carousel uses basic mouse and touch gestures.</p>
        <BasicCarousel>
          <div className={cx(slideClasses, 'bg-green-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-red-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-blue-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-yellow-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-purple-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-pink-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
              className={imageClasses}
              alt=""
            />
          </div>
        </BasicCarousel>
      </div>

      <div className={wrapperClasses}>
        <h2 className={headerClasses}>Carousel with drawer</h2>
        <p className={bodyClasses}>
          This carousel also listens to keyboard events. Try pressing ← and → keys!
        </p>
        <CarouselWithDrawer>
          <div className={cx(slideClasses, 'bg-green-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-red-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-blue-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-yellow-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-purple-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-pink-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
              className={imageClasses}
              alt=""
            />
          </div>
        </CarouselWithDrawer>
      </div>

      <div className={wrapperClasses}>
        <h2 className={headerClasses}>Carousel with slower animation</h2>
        <p className={bodyClasses}>
          This carousel uses the 'molasses' react-spring configuration, which is very slow. You
          probably wouldn't want to do this in a real project, but it demonstrates the diversity of
          the animations you can use to power the carousel.
        </p>
        <p className={bodyClasses}>
          <i>Note that gestures are intentionally disabled for this example.</i>
        </p>
        <SlowCarousel>
          <div className={cx(slideClasses, 'bg-green-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/2/21/001Bulbasaur.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-red-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/7/73/004Charmander.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-blue-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/3/39/007Squirtle.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-yellow-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/0/0d/025Pikachu.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-purple-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/e/e2/133Eevee.png"
              className={imageClasses}
              alt=""
            />
          </div>
          <div className={cx(slideClasses, 'bg-pink-200')}>
            <img
              src="https://cdn.bulbagarden.net/upload/6/6b/175Togepi.png"
              className={imageClasses}
              alt=""
            />
          </div>
        </SlowCarousel>
      </div>

      <div className={wrapperClasses}>
        <h2 className={headerClasses}>Basic disclosure</h2>
        <p className={bodyClasses}>This disclosure opens and closes on mouse and touch events.</p>
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
        <div className="h-64" />
        <a href="https://candycode.co/" target="_blank" rel="noreferrer">
          <span role="img" aria-label="cupcake">
            🧁
          </span>
        </a>
      </div>
    </>
  );
};

export default App;
