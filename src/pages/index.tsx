import React from 'react';
import Home from '@component/Home';
import { Header } from '@component/Common/Header';
import { Footer } from '@component/Common/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
};

export default React.memo(HomePage);
