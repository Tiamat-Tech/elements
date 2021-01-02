import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useSpring, animated, config } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { CarouselContext } from '../provider';

export const Track = ({ className, children, ...rest }) => {
  const {
    currentSlide,
    setCurrentSlide,
    lastSlide,
    totalSlides,
    orientation,
    isFocused,
    focusMode,
    allowGestures,
    dragThreshold,
    allowKeyboard,
    keyboardMode,
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
    if (!allowKeyboard || !isFocused) return;

    const onKeyUp = ({ code }) => {
      const handleEscapePress = () => {
        if (allowExpansion) {
          setIsExpanded(false);
        }
        if (allowFullscreen) {
          setIsFullscreen(false);
        }
      };

      const handleStartPress = () => {
        if (currentSlide === 0) return;
        setCurrentSlide(0);
      };

      const handleBackPress = () => {
        if (currentSlide === 0) return;
        setCurrentSlide(currentSlide - 1);
      };

      const handleForwardPress = () => {
        if (currentSlide === lastSlide) return;
        setCurrentSlide(currentSlide + 1);
      };

      const handleEndPress = () => {
        if (currentSlide === lastSlide) return;
        setCurrentSlide(lastSlide);
      };

      const handleExpandPress = () => {
        if (!allowExpansion) return;
        setIsExpanded(!isExpanded);
      };

      const handleFullscreenPress = () => {
        if (!allowFullscreen) return;
        setIsFullscreen(!isFullscreen);
      };

      switch (code) {
        case 'Escape':
          handleEscapePress();
          break;
        case 'Home':
          handleStartPress();
          break;
        case 'ArrowLeft':
          handleBackPress();
          break;
        case 'KeyA':
          if (keyboardMode !== 'gaming') return;
          handleBackPress();
          break;
        case 'ArrowUp':
          if (orientation !== 'vertical') return;
          handleBackPress();
          break;
        case 'KeyW':
          if (orientation !== 'vertical' || keyboardMode !== 'gaming') return;
          handleBackPress();
          break;
        case 'ArrowRight':
          handleForwardPress();
          break;
        case 'KeyD':
          if (keyboardMode !== 'gaming') return;
          handleForwardPress();
          break;
        case 'ArrowDown':
          if (orientation !== 'vertical') return;
          handleForwardPress();
          break;
        case 'KeyS':
          if (orientation !== 'vertical' || keyboardMode !== 'gaming') return;
          handleForwardPress();
          break;
        case 'End':
          handleEndPress();
          break;
        case 'KeyE':
          handleExpandPress();
          break;
        case 'KeyF':
          handleFullscreenPress();
          break;
      }
    };

    document.addEventListener('keyup', onKeyUp);
    return () => document.removeEventListener('keyup', onKeyUp);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    currentSlide,
    lastSlide,
    isFocused,
    focusMode,
    allowKeyboard,
    keyboardMode,
    allowExpansion,
    isExpanded,
    allowFullscreen,
    isFullscreen,
  ]);

  return (
    <animated.div
      className={cx('carousel-track', className)}
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
