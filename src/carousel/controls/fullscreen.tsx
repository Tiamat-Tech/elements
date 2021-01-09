import * as React from 'react';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { configAtom, fullscreenAtom } from '../atoms';

export const Fullscreen = ({ className = '', children = 'Fullscreen', ...rest }) => {
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
