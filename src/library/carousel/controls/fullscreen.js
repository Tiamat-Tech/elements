import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtomValue } from 'jotai/utils';

import { configAtom } from '../atoms';
import { CarouselContext } from '../provider';

export const Fullscreen = ({ className, children, ...rest }) => {
  const { allowFullscreen } = useAtomValue(configAtom);

  const { isFullscreen, setIsFullscreen } = useContext(CarouselContext);

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
