import * as React from 'react';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { configAtom, expandAtom } from '../atoms';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Expand = ({ className = '', children = 'Expand', ...rest }: Props) => {
  const [isExpanded, setIsExpanded] = useAtom(expandAtom);

  const { allowExpansion } = useAtomValue(configAtom);

  const handleExpandClick = () => {
    if (!allowExpansion) return;

    setIsExpanded(!isExpanded);
  };

  return (
    <button
      type="button"
      onClick={handleExpandClick}
      className={cx('carousel-expand-button', className)}
      {...rest}
    >
      {children}
    </button>
  );
};
