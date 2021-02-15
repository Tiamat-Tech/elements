import React from 'react';
import GitHubButton from 'react-github-btn';

export const Intro = () => {
  return (
    <div className="wrapper">
      <a href="https://candycode.co/">
        <img
          src="https://storage.googleapis.com/candycode/candycode.svg"
          style={{ height: 48 }}
          alt="candycode"
        />
      </a>
      <p className="body">
        The{' '}
        <a href="https://github.com/cndycd/elements" className="font-bold text-white">
          @candycode/elements
        </a>{' '}
        library consists of atomic components used to assemble custom React components with
        animations and interactivity powered by <code>react-spring</code> and{' '}
        <code>react-use-gesture</code> respectively.
      </p>
      <GitHubButton
        href="https://github.com/cndycd/elements"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
      >
        Star
      </GitHubButton>
    </div>
  );
};
