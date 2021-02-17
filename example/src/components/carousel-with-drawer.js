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
} from '../../../src/carousel';

export const CarouselWithDrawer = ({ children, ...rest }) => {
  return (
    <Provider
      totalSlides={children.length ? children.length : 1}
      aspectRatio="wide"
      keyboardMode="gaming"
      focusMode="always"
      allowFullscreen={true}
      {...rest}
    >
      <Wrapper className="group">
        <Track>
          {children.length ? (
            children.map((child, index) => <Slide key={index}>{child}</Slide>)
          ) : (
            <Slide>{children}</Slide>
          )}
        </Track>
        <Drawer className="bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-700">
          <Start className="p-2" />
          <Backward className="p-2">Prev</Backward>
          <Expand className="p-2" />
          <Fullscreen className="p-2" />
          <Forward className="p-2">Next</Forward>
          <End className="p-2" />
        </Drawer>
      </Wrapper>
    </Provider>
  );
};
