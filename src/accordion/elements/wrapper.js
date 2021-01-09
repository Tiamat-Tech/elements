import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Disclosure } from './disclosure';
import { Button } from '../controls/button';
import { Panel } from './panel';

export const Wrapper = ({ className, children, ...rest }) => {
  return (
    <section className={cx('accordion', className)} {...rest}>
      {children.length ? (
        children.map((child, index) => (
          <Disclosure key={index}>
            <Button index={index}>{child.props.children[0]}</Button>
            <Panel index={index}>{child.props.children[1]}</Panel>
          </Disclosure>
        ))
      ) : (
        <Disclosure>
          <Button index={0}>{children.props.children[0]}</Button>
          <Panel index={0}>{children.props.children[1]}</Panel>
        </Disclosure>
      )}
    </section>
  );
};

Wrapper.defaultProps = {
  className: '',
};

Wrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
