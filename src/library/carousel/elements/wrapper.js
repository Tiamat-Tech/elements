import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useInView } from 'react-intersection-observer';

import { CarouselContext } from '../provider';

export const Wrapper = ({ children }) => {
  const {
    setIsFocused,
    focusMode,
    allowExpansion,
    isExpanded,
    allowFullscreen,
    isFullscreen,
    setIsFullscreen,
  } = useContext(CarouselContext);

  const ref = useRef();

  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
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
        'carousel-wrapper',
        allowExpansion && isExpanded && 'carousel-wrapper--expanded',
      )}
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
