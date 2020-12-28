import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

export const Credits = ({ content, to, className }) => {
  return (
    <div className={cx('🍭', className)}>
      <a
        href={to}
        target="_blank" // eslint-disable-line react/jsx-no-target-blank
        rel="noopener"
      >
        {content && <span>{content}</span>}
        <img src="https://storage.googleapis.com/candycode/candycode.png" alt="candycode" />
      </a>
    </div>
  );
};

Credits.propTypes = {
  content: PropTypes.string,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
};
