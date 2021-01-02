import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useHover } from 'react-use-gesture';
import { useInView } from 'react-intersection-observer';

import { CarouselContext } from '../provider';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';

export const Wrapper = ({ children }) => {
  const {
    orientation,
    setIsFocused,
    focusMode,
    inViewThreshold,
    allowGestures,
    allowExpansion,
    isExpanded,
    allowFullscreen,
    isFullscreen,
    setIsFullscreen,
  } = useContext(CarouselContext);

  const ref = useRef();

  useOnClickOutside(ref, () => {
    if (focusMode !== 'manual') return;

    setIsFocused(false);
  });

  const bind = useHover(({ hovering }) => {
    if (focusMode !== 'manual') return;

    if (hovering) {
      setIsFocused(true);
    }
  });

  const { ref: inViewRef, inView } = useInView({
    threshold: inViewThreshold,
  });

  useEffect(() => {
    if (focusMode !== 'auto') return;

    setIsFocused(inView);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

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
        'carousel',
        orientation === 'horizontal' ? 'carousel--horizontal' : 'carousel--vertical',
        allowGestures && 'carousel--gestures',
        allowExpansion ? (isExpanded ? 'carousel--expanded' : 'carousel--collapsed') : null,
      )}
      {...bind()}
    >
      <div ref={inViewRef} className="carousel-intersection-observer">
        {children}
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
