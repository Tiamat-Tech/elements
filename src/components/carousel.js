import React from 'react';
import PropTypes from 'prop-types';
import {
  Provider,
  Wrapper,
  Track,
  Slide,
  Drawer,
  Start,
  Back,
  Forward,
  End,
  Expand,
  Fullscreen,
} from '@cndycd/core/carousel';

import { getAspectRatioClassName } from '~utilities';

export const Carousel = ({ aspectRatio, slides, ...rest }) => {
  const aspectRatioClassName = aspectRatio |> getAspectRatioClassName;

  return (
    <Provider lastSlide={slides.length - 1} totalSlides={slides.length} {...rest}>
      <div className={aspectRatioClassName}>
        <div>
          <Wrapper>
            <Track>
              {slides.map((node, index) => (
                <Slide key={index}>{node}</Slide>
              ))}
            </Track>
            <Drawer className="bg-black bg-opacity-75 text-pink">
              <Start className="p-4" />
              <Back className="p-4" />
              <Expand className="p-4" />
              <Fullscreen className="p-4" />
              <Forward className="p-4" />
              <End className="p-4" />
            </Drawer>
          </Wrapper>
        </div>
      </div>
    </Provider>
  );
};

Carousel.defaultProps = {
  aspectRatio: 'wider',
};

Carousel.propTypes = {
  aspectRatio: PropTypes.oneOf(['square', 'wide', 'wider', 'widest', 'tall', 'taller', 'tallest']),
  slides: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
