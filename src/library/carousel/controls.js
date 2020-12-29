import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { CarouselContext } from './provider';

export const Start = ({ className, children, ...rest }) => {
  const { currentSlide, setCurrentSlide } = useContext(CarouselContext);

  return (
    <button
      onClick={() => setCurrentSlide(0)}
      disabled={currentSlide === 0}
      className={cx(
        'carousel-start-button',
        currentSlide === 0 && 'carousel-button--disabled',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Start.defaultProps = {
  className: '',
  children: 'Start',
};

Start.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export const Back = ({ className, children, ...rest }) => {
  const { currentSlide, setCurrentSlide } = useContext(CarouselContext);

  return (
    <button
      onClick={() => setCurrentSlide(currentSlide - 1)}
      disabled={currentSlide === 0}
      className={cx(
        'carousel-back-button',
        currentSlide === 0 && 'carousel-button--disabled',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Back.defaultProps = {
  className: '',
  children: 'Back',
};

Back.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export const Forward = ({ className, children, ...rest }) => {
  const { currentSlide, setCurrentSlide, lastSlide } = useContext(CarouselContext);

  return (
    <button
      onClick={() => setCurrentSlide(currentSlide + 1)}
      disabled={currentSlide === lastSlide}
      className={cx(
        'carousel-forward-button',
        currentSlide === lastSlide && 'carousel-button--disabled',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

Forward.defaultProps = {
  className: '',
  children: 'Forward',
};

Forward.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export const End = ({ className, children, ...rest }) => {
  const { currentSlide, setCurrentSlide, lastSlide } = useContext(CarouselContext);

  return (
    <button
      onClick={() => setCurrentSlide(lastSlide)}
      disabled={currentSlide === lastSlide}
      className={cx(
        'carousel-end-button',
        currentSlide === lastSlide && 'carousel-button--disabled',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

End.defaultProps = {
  className: '',
  children: 'End',
};

End.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export const Expand = ({ className, children, ...rest }) => {
  const { allowExpansion, isExpanded, setIsExpanded } = useContext(CarouselContext);

  const handleExpandClick = () => {
    if (!allowExpansion) return;

    setIsExpanded(!isExpanded);
  };

  return (
    <button
      onClick={handleExpandClick}
      className={cx('carousel-expand-button', className)}
      {...rest}
    >
      {children}
    </button>
  );
};

Expand.defaultProps = {
  className: '',
  children: 'Expand',
};

Expand.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

export const Fullscreen = ({ className, children, ...rest }) => {
  const { allowFullscreen, isFullscreen, setIsFullscreen } = useContext(CarouselContext);

  const handleFullscreenClick = () => {
    if (!allowFullscreen) return;

    setIsFullscreen(!isFullscreen);
  };

  return (
    <button
      onClick={handleFullscreenClick}
      className={cx('carousel-fullscreen-button', className)}
      {...rest}
    >
      {children}
    </button>
  );
};

Fullscreen.defaultProps = {
  className: '',
  children: 'Fullscreen',
};

Fullscreen.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
