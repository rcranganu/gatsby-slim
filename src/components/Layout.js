import React from 'react';
import 'normalize.css';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
);

export default Layout;
