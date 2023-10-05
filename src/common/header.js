import React, { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

export default function Header() {
  const [userName, setUserName] = useState('');
  const isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true';

  const handleLogout = () => {
    sessionStorage.setItem('isLoggedIn', 'false');
    window.location.href = '/';
  };

  useEffect(() => {
    const loggedInUserEmail = sessionStorage.getItem('userEmail'); // Assuming user's email is stored in sessionStorage
    if (loggedInUserEmail) {
      const apiUrl = `https://651a6344340309952f0d333a.mockapi.io/hasan?email=${loggedInUserEmail}`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Assuming the API response is an array containing a single user object
          
          if (data.length > 0) {
            const user = data[0];
            setUserName(user.name);
          } else {
            console.error('User not found');
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);
  
  
  return (
    <>
    <header className="main_header_arae">
      
      <div className="navbar-area">
        <div className="main-responsive-nav">
          <div className="container">
            <div className="main-responsive-menu">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/img/logo.png" alt="logo"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-navbar">
          <div className="container">
            <nav className="navbar navbar-expand-md navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo_black.png" alt="logo"/>
              </a>
              <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <Nav.Link as={NavLink} exact='true' to="/" activeclassname="active">Home
                      </Nav.Link>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Categories
                      <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                      <Nav.Link as={NavLink} exact='true' to="/product/honeymoon/" className="nav-link">HoneyMoon Tours
                      </Nav.Link>
                        {/* <a href="#" className="nav-link">
                          HoneyMoon Tours
                        </a> */}
                      </li>
                      <li className="nav-item">
                      <Nav.Link as={NavLink} exact='true' to="/product/grouptour/" className="nav-link">Group Tours
                      </Nav.Link>
                      </li>
                      <li className="nav-item">
                      <Nav.Link as={NavLink} exact='true' to="/product/indivisualtour/" className="nav-link">Individual Tours
                      </Nav.Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                  <Nav.Link as={NavLink} exact='true' to="/">About us
                      </Nav.Link>
                  </li>
                  <li className="nav-item">
                  <Nav.Link as={NavLink} exact='true' to="/contact">Contact us
                      </Nav.Link>
                  </li>
                  
                 
                  
                </ul>

                <div className="others-options d-flex align-items-center">
          {isLoggedIn ? (
            <>
              <div className="option-item">Welcome, {userName}</div>
              <div className="option-item">
                <button className="btn btn_navber" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="option-item">
                <NavLink to="/login" className="btn btn_navber">
                  Login
                </NavLink>
              </div>
              <div className="option-item">
                <NavLink to="/register" className="btn btn_navber">
                  Sign Up
                </NavLink>
              </div>
                      </>
                    )}
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="others-option-for-responsive">
            <div className="container">
              <div className="dot-menu">
                <div className="inner">
                  <div className="circle circle-one"></div>
                  <div className="circle circle-two"></div>
                  <div className="circle circle-three"></div>
                </div>
              </div>
              <div className="container">
                <div className="option-inner">
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="#" className="search-box">
                        <i className="fas fa-search"></i>
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="contact.html" className="btn btn_navber">
                        Get a free quote
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      <Outlet />
      </>
  );
}
