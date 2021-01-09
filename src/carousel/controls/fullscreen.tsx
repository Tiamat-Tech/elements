import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { configAtom, fullscreenAtom } from '../atoms';

export const Fullscreen = ({ className, children, ...rest }) => {
  const [isFullscreen, setIsFullscreen] = useAtom(fullscreenAtom);

  const { allowFullscreen } = useAtomValue(configAtom);

  const handleFullscreenClick = () => {
    if (!allowFullscreen) return;

    setIsFullscreen(!isFullscreen);
  };

  return (
    <button
      type="button"
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
