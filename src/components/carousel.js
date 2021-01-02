import React from 'react';
import PropTypes from 'prop-types';
import {
  Provider,
  Wrapper,
  Track,
  Slide,
  Drawer,
  Start,
  Backward,
  Forward,
  End,
  Expand,
  Fullscreen,
} from '@cndycd/core/carousel';

import { getAspectRatioClassName } from '~utilities';

export const Carousel = ({ aspectRatio, children, ...rest }) => {
  const aspectRatioClassName = aspectRatio |> getAspectRatioClassName;

  return (
    <Provider totalSlides={children.length ? children.length : 1} {...rest}>
      <div className={aspectRatioClassName}>
        <div>
          <Wrapper>
            <Track>
              {children.length ? (
                children.map((child, index) => <Slide key={index}>{child}</Slide>)
              ) : (
                <Slide>{children}</Slide>
              )}
            </Track>
            <Drawer className="bg-black bg-opacity-75 text-pink">
              <Start className="p-4" />
              <Backward className="p-4" />
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
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};
