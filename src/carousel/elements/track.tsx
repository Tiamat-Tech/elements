import * as React from 'react';
import { useEffect, useMemo } from 'react';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import {
  useSpring,
  animated,
  config as defaultConfigs,
  SpringValues,
  SpringStartFn,
} from 'react-spring';
import { useDrag } from 'react-use-gesture';

import { currentSlideAtom, configAtom, focusAtom, expandAtom, fullscreenAtom } from '../atoms';
import { getAnimationConfig } from '../../utilities/get-animation-config';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Track = ({ className = '', children, ...rest }: Props) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);

  const [isFocused] = useAtom(focusAtom);

  const [isExpanded, setIsExpanded] = useAtom(expandAtom);

  const [isFullscreen, setIsFullscreen] = useAtom(fullscreenAtom);

  const {
    lastSlide,
    totalSlides,
    orientation,
    springConfig,
    focusMode,
    allowGestures,
    dragThreshold,
    allowKeyboard,
    keyboardMode,
    allowExpansion,
    allowFullscreen,
  } = useAtomValue(configAtom);

  const animationConfig = useMemo(() => getAnimationConfig(springConfig, defaultConfigs), [
    springConfig,
  ]);

  // Standard carousel animation
  const [animation, setAnimation] = useSpring(() => ({
    width: `${totalSlides * 100}%`,
    transform: `translate3d(calc(-${currentSlide * 100}% + ${0}px),0,0)`,
    cursor: allowGestures ? 'grab' : 'default',
    config: animationConfig,
  })) as [SpringValues<any>, SpringStartFn<any>];

  // Drag gestures functionality
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
      config: animationConfig,
    });
  });

  // Basic carousel functionality
  useEffect(() => {
    setAnimation({
      width: `${totalSlides * 100}%`,
      transform: `translate3d(calc(-${currentSlide * 100}% + ${0}px),0,0)`,
      cursor: allowGestures ? 'grab' : 'default',
      config: animationConfig,
    });
  }, [setAnimation, totalSlides, currentSlide, allowGestures, animationConfig]);

  // Keyboard support functionality
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

      // const handleStartPress = () => {
      //   if (currentSlide === 0) return;
      //   setCurrentSlide(0);
      // };

      const handleBackPress = () => {
        if (currentSlide === 0) return;
        setCurrentSlide(currentSlide - 1);
      };

      const handleForwardPress = () => {
        if (currentSlide === lastSlide) return;
        setCurrentSlide(currentSlide + 1);
      };

      // const handleEndPress = () => {
      //   if (currentSlide === lastSlide) return;
      //   setCurrentSlide(lastSlide);
      // };

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
          // @TODO must prevent a 'Home' press from also scrolling up the page
          // handleStartPress();
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
          // @TODO must prevent an 'End' press from also scrolling down the page
          // handleEndPress();
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
  }, [
    currentSlide,
    setCurrentSlide,
    lastSlide,
    orientation,
    isFocused,
    focusMode,
    allowKeyboard,
    keyboardMode,
    allowExpansion,
    isExpanded,
    setIsExpanded,
    allowFullscreen,
    isFullscreen,
    setIsFullscreen,
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
