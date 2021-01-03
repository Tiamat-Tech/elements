import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { useAtom } from 'jotai';
import { useAtomValue } from 'jotai/utils';

import { currentSlideAtom, configAtom } from '../atoms';

export const Forward = ({ className, children, ...rest }) => {
  const [currentSlide, setCurrentSlide] = useAtom(currentSlideAtom);
  const { lastSlide } = useAtomValue(configAtom);

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
