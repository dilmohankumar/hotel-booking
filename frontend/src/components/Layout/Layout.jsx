import React from 'react';
import Rout from '../../router/Routers';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Rout />
      <Footer />
    </>
  );
}

export default Layout;
