import * as React from 'react';
import cx from 'classnames';

import { Disclosure } from './disclosure';
import { Button } from '../controls/button';
import { Panel } from './panel';

type Props = {
  className?: string;
  children: React.ReactNode;
};

export const Wrapper = ({ className = '', children = [], ...rest }: Props) => {
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
