import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { CarouselContext } from './provider';

export const Wrapper = ({ children }) => {
  const { isExpanded } = useContext(CarouselContext);

  return (
    <div className={cx('carousel-wrapper', isExpanded && 'carousel-wrapper--expanded')}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export const Track = ({ className, children, ...rest }) => {
  const { currentSlide, setCurrentSlide, gestures, lastSlide, threshold, totalSlides } = useContext(
    CarouselContext,
  );

  const bind = useDrag(({ down, dragging, movement: [mx] }) => {
    if (!gestures) return;
    if (currentSlide === 0 && mx > 0) return;
    if (currentSlide === lastSlide && mx < 0) return;
    if (!dragging && mx > threshold) return setCurrentSlide(currentSlide - 1);
    if (!dragging && mx < -threshold) return setCurrentSlide(currentSlide + 1);

    setAnimation({
      width: `${totalSlides * 100}%`,
      transform: `translate3d(calc(-${currentSlide * 100}% + ${dragging ? mx : 0}px),0,0)`,
      cursor: down ? 'grabbing' : 'grab',
      config: {
        ...config.default,
        clamp: true,
      },
    });
  });

  const [animation, setAnimation] = useSpring(() => ({
    width: `${totalSlides * 100}%`,
    transform: `translate3d(calc(-${currentSlide * 100}% + ${0}px),0,0)`,
    cursor: gestures ? 'grab' : 'default',
    config: {
      ...config.default,
      clamp: true,
    },
  }));

  useEffect(() => {
    setAnimation({
      width: `${totalSlides * 100}%`,
      transform: `translate3d(calc(-${currentSlide * 100}% + ${0}px),0,0)`,
      cursor: gestures ? 'grab' : 'default',
      config: {
        ...config.default,
        clamp: true,
      },
    });
  }, [currentSlide]);

  return (
    <animated.div
      {...bind()}
      className={cx('carousel-track', className)}
      style={animation}
      {...rest}
    >
      {children}
    </animated.div>
  );
};

Track.defaultProps = {
  className: '',
};

Track.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export const Slide = ({ className, children, ...rest }) => (
  <div className={cx('carousel-slide', className)} {...rest}>
    {children}
  </div>
);

Slide.defaultProps = {
  className: '',
};

Slide.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const Drawer = ({ className, children, ...rest }) => (
  <div className={cx('carousel-drawer', className)} {...rest}>
    {children}
  </div>
);

Drawer.defaultProps = {
  className: '',
};

Drawer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
