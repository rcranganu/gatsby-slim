import React from 'react';
import Layout from './src/components/Layout';

const wrapPageElement = ({ elements, props }) => (
  <Layout {...props}>{elements}</Layout>
);

export default wrapPageElement;
