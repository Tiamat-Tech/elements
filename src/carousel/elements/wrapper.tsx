import * as React from 'react';
import { useEffect, useMemo, useRef } from 'react';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';
import { useHover } from 'react-use-gesture';
import { useInView } from 'react-intersection-observer';

import { configAtom, focusAtom, expandAtom, fullscreenAtom } from '../atoms';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import { getAspectRatioClassName } from '../utilities/get-aspect-ratio-class-name';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Wrapper = ({ className = '', children, ...rest }: Props) => {
  const {
    aspectRatio,
    focusMode,
    inViewThreshold,
    allowGestures,
    allowExpansion,
    allowFullscreen,
  } = useAtomValue(configAtom);

  const [, setIsFocused] = useAtom(focusAtom);

  const [isExpanded] = useAtom(expandAtom);

  const [isFullscreen, setIsFullscreen] = useAtom(fullscreenAtom);

  const ref = useRef<HTMLElement | null>(null);

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
    <section
      ref={ref}
      className={cx(
        'carousel',
        aspectRatioClassName,
        allowGestures && 'carousel--gestures',
        allowExpansion ? (isExpanded ? 'carousel--expanded' : 'carousel--collapsed') : null,
        className,
      )}
      role="group"
      aria-roledescription="carousel"
      {...bind()}
      {...rest}
    >
      <div ref={inViewRef}>{children}</div>
    </section>
  );
};
