/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import cx from 'classnames';

const Credits = ({ content, to, className }) => {
  return (
    <div className={cx('🍭', className)}>
      <a href={to} target="_blank" rel="noopener">
        {content && <span>{content}</span>}
        <img src="https://storage.googleapis.com/candycode/candycode.png" alt="candycode" />
      </a>
    </div>
  );
};

export default Credits;
