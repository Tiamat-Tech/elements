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

export const BasicCarousel = ({ children, ...rest }) => {
  const buttonClasses =
    'inline-flex justify-center items-center w-8 h-8 m-2 bg-black bg-opacity-75 rounded-full';

  return (
    <Provider
      totalSlides={children.length ? children.length : 1}
      aspectRatio="wide"
      allowKeyboard={false}
      allowExpansion={false}
      allowFullscreen={false}
      {...rest}
    >
      <Wrapper>
        <Track>
          {children.length ? (
            children.map((child, index) => <Slide key={index}>{child}</Slide>)
          ) : (
            <Slide>{children}</Slide>
          )}
        </Track>
        <Backward className="absolute left-0">
          <div className={buttonClasses}>←</div>
        </Backward>
        <Forward className="absolute right-0">
          <div className={buttonClasses}>→</div>
        </Forward>
      </Wrapper>
    </Provider>
  );
};

export const CarouselWithDrawer = ({ children, ...rest }) => {
  return (
    <Provider
      totalSlides={children.length ? children.length : 1}
      aspectRatio="wide"
      keyboardMode="gaming"
      focusMode="always"
      allowFullscreen={false}
      {...rest}
    >
      <Wrapper>
        <Track>
          {children.length ? (
            children.map((child, index) => <Slide key={index}>{child}</Slide>)
          ) : (
            <Slide>{children}</Slide>
          )}
        </Track>
        <Drawer className="bg-black bg-opacity-50 text-white">
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

export const SlowCarousel = ({ children, ...rest }) => {
  const buttonClasses =
    'inline-flex justify-center items-center w-8 h-8 m-2 bg-black bg-opacity-75 rounded-full';

  return (
    <Provider
      totalSlides={children.length ? children.length : 1}
      aspectRatio="wide"
      springConfig="molasses"
      allowGestures={false}
      allowKeyboard={false}
      allowExpansion={false}
      allowFullscreen={false}
      {...rest}
    >
      <Wrapper>
        <Track>
          {children.length ? (
            children.map((child, index) => <Slide key={index}>{child}</Slide>)
          ) : (
            <Slide>{children}</Slide>
          )}
        </Track>
        <Backward className="absolute left-0">
          <div className={buttonClasses}>←</div>
        </Backward>
        <Forward className="absolute right-0">
          <div className={buttonClasses}>→</div>
        </Forward>
      </Wrapper>
    </Provider>
  );
};
