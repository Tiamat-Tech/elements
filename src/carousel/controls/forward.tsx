import * as React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { currentSlideAtom, configAtom } from '../atoms';

export const Forward = ({ className, children, ...rest }) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);

  const { lastSlide } = useAtomValue(configAtom);

  const handleForwardClick = () => {
    setCurrentSlide(currentSlide + 1);
  };

  return (
    <button
      type="button"
      onClick={handleForwardClick}
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
