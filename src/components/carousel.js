/* eslint-disable react/prop-types */
import React from 'react';
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

export const Carousel = ({ children, ...rest }) => {
  return (
    <Provider totalSlides={children.length ? children.length : 1} {...rest}>
      <Wrapper>
        <Track>
          {children.length ? (
            children.map((child, index) => <Slide key={index}>{child}</Slide>)
          ) : (
            <Slide>{children}</Slide>
          )}
        </Track>
        <Drawer className="bg-black bg-opacity-75">
          <Start className="p-4" />
          <Backward className="p-4" />
          <Expand className="p-4" />
          <Fullscreen className="p-4" />
          <Forward className="p-4" />
          <End className="p-4" />
        </Drawer>
      </Wrapper>
    </Provider>
  );
};
