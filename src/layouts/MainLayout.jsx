import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';

function MainLayout() {
  return (
    <div className="site-shell">
      <Header />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}

export default MainLayout;
