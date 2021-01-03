import React, { useEffect, useContext, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtomValue } from 'jotai/utils';
import { useHover } from 'react-use-gesture';
import { useInView } from 'react-intersection-observer';

import { configAtom } from '../atoms';
import { CarouselContext } from '../provider';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import { getAspectRatioClassName } from '../utilities/get-aspect-ratio-class-name';

export const Wrapper = ({ children }) => {
  const {
    aspectRatio,
    focusMode,
    inViewThreshold,
    allowGestures,
    allowExpansion,
    allowFullscreen,
  } = useAtomValue(configAtom);

  const { setIsFocused, isExpanded, isFullscreen, setIsFullscreen } = useContext(CarouselContext);

  const ref = useRef();

  const { ref: inViewRef, inView } = useInView({
    threshold: inViewThreshold,
  });

  // Set aspect ratio class
  const aspectRatioClassName = useMemo(() => getAspectRatioClassName(aspectRatio), [aspectRatio]);

  // Add/remove focus based on viewport visibility in 'auto' focus mode
  useEffect(() => {
    if (focusMode !== 'auto') return;

    setIsFocused(inView);
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  // Add focus when hovering over carousel in 'manual' focus mode
  const bind = useHover(({ hovering }) => {
    if (focusMode !== 'manual') return;

    if (hovering) {
      setIsFocused(true);
    }
  });

  // Remove focus when clicking outside of carousel in 'manual' focus mode
  useOnClickOutside(ref, () => {
    if (focusMode !== 'manual') return;

    setIsFocused(false);
  });

  // Toggle fullscreen mode based on current document and `isFullscreen` state
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
        aspectRatioClassName,
        allowGestures && 'carousel--gestures',
        allowExpansion ? (isExpanded ? 'carousel--expanded' : 'carousel--collapsed') : null,
      )}
      {...bind()}
    >
      <div ref={inViewRef}>{children}</div>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
