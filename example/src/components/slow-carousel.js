import React from 'react';
import { Provider, Wrapper, Track, Slide, Backward, Forward } from '../../../src/carousel';

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
