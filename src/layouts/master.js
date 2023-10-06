import React, { useState, useEffect,createContext } from "react";
import Header from '../common/header';
import Footer from '../common/footer';
import { useNavigate } from "react-router-dom";

function Layout({ children }) {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Initialize isLoggedIn from sessionStorage when the component mounts
    const storedIsLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setIsLoggedIn(storedIsLoggedIn === "true");
    }
  }, []);

  const handleLogout = () => {
    // Perform the logout logic, e.g., clearing session storage or making an API call.
    sessionStorage.setItem('isLoggedIn', 'false');
    // Then, update the login status.
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/> 
      {children}
      <Footer /> 
    </>
  );
}

export default Layout;
