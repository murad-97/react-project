import React from 'react';
import Header from '../common/header'; // Import the Header component
import Footer from '../common/footer'; // Import the Footer component

function Layout({ children }) {
  return (
    <>
      <Header /> 
        {children}
      <Footer /> 
    </>
  );
}

export default Layout;