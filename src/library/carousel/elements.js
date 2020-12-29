import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { CarouselContext } from './provider';

export const Wrapper = ({ children }) => {
  const { allowExpansion, isExpanded, allowFullscreen, isFullscreen, setIsFullscreen } = useContext(
    CarouselContext,
  );
  const ref = useRef();

  useEffect(() => {
    if (!allowFullscreen) return;

    const onFullscreenChange = () => {
      if (document.fullscreenElement) {
        setIsFullscreen(true);
      } else {
        setIsFullscreen(false);
      }
    };

    if (isFullscreen && ref.current) {
      ref.current.requestFullscreen();
    }

    if (!isFullscreen && document.fullscreenElement) {
      document.exitFullscreen();
    }

    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, [allowFullscreen, isFullscreen]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={ref}
      className={cx(
        'carousel-wrapper',
        allowExpansion && isExpanded && 'carousel-wrapper--expanded',
      )}
    >
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export const Track = ({ className, children, ...rest }) => {
  const {
    currentSlide,
    setCurrentSlide,
    lastSlide,
    totalSlides,
    allowGestures,
    dragThreshold,
    allowKeyboard,
    allowExpansion,
    isExpanded,
    setIsExpanded,
    allowFullscreen,
    isFullscreen,
    setIsFullscreen,
  } = useContext(CarouselContext);

  const bind = useDrag(({ down, dragging, movement: [mx] }) => {
    if (!allowGestures) return;
    if (currentSlide === 0 && mx > 0) return;
    if (currentSlide === lastSlide && mx < 0) return;
    if (!dragging && mx > dragThreshold) return setCurrentSlide(currentSlide - 1);
    if (!dragging && mx < -dragThreshold) return setCurrentSlide(currentSlide + 1);

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
    cursor: allowGestures ? 'grab' : 'default',
    config: {
      ...config.default,
      clamp: true,
    },
  }));

  useEffect(() => {
    setAnimation({
      width: `${totalSlides * 100}%`,
      transform: `translate3d(calc(-${currentSlide * 100}% + ${0}px),0,0)`,
      cursor: allowGestures ? 'grab' : 'default',
      config: {
        ...config.default,
        clamp: true,
      },
    });
  }, [currentSlide, totalSlides, allowGestures]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!allowKeyboard) return;

    const onKeyUp = ({ code }) => {
      switch (code) {
        case 'Escape':
          if (allowExpansion) {
            setIsExpanded(false);
          }
          break;
        case 'Home':
          if (currentSlide === 0) return;
          setCurrentSlide(0);
          break;
        case 'ArrowLeft':
          if (currentSlide === 0) return;
          setCurrentSlide(currentSlide - 1);
          break;
        case 'ArrowRight':
          if (currentSlide === lastSlide) return;
          setCurrentSlide(currentSlide + 1);
          break;
        case 'End':
          if (currentSlide === lastSlide) return;
          setCurrentSlide(lastSlide);
          break;
        case 'KeyE':
          if (!allowExpansion) return;
          setIsExpanded(!isExpanded);
          break;
        case 'KeyF':
          if (!allowFullscreen) return;
          setIsFullscreen(!isFullscreen);
          break;
      }
    };

    document.addEventListener('keyup', onKeyUp);
    return () => document.removeEventListener('keyup', onKeyUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentSlide,
    lastSlide,
    allowKeyboard,
    allowExpansion,
    isExpanded,
    allowFullscreen,
    isFullscreen,
  ]);

  return (
    <animated.div
      className={cx('carousel-track', allowGestures && 'carousel-track--gestures', className)}
      style={animation}
      {...bind()}
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
