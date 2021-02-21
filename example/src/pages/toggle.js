import React from 'react';

import { Layout } from '~components/layout';
import { Toggle } from '~components/basic-toggle';

const Demo = () => {
  return (
    <Layout>
      <div className="wrapper">
        <h2 className="header">Basic toggle</h2>
        <p className="body">This toggle switches state based on on mouse and touch events.</p>
        <Toggle>
          <Toggle.On>something</Toggle.On>
          <Toggle.Off>something else</Toggle.Off>
        </Toggle>
      </div>
    </Layout>
  );
};

export default Demo;
