import React from 'react';
import Layout from './src/components/Layout';

const wrapPageElement = ({ elements, props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreadingq
  <Layout {...props}>{elements}</Layout>
);

export default wrapPageElement;
