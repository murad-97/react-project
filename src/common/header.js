import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'; 
import Nav from 'react-bootstrap/Nav';
export default function Header() {
    
  return (
    <>
    <header className="main_header_arae">
      <div className="topbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <ul className="topbar-list">
                <li>
                  <a href="#!"><i className="fab fa-facebook"></i></a>
                  <a href="#!"><i className="fab fa-twitter-square"></i></a>
                  <a href="#!"><i className="fab fa-instagram"></i></a>
                  <a href="#!"><i className="fab fa-linkedin"></i></a>
                </li>
                <li><a href="#!"><span>+011 234 567 89</span></a></li>
                <li><a href="#!"><span>contact@domain.com</span></a></li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="topbar-others-options">
                <li> <Nav.Link as={NavLink} exact to="/login" activeClassName="active">login
                      </Nav.Link></li>
                <li><a href="register.html">Sign up</a></li>
                <li>
                  <div className="dropdown language-option">
                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="lang-name"></span>
                    </button>
                    <div className="dropdown-menu language-dropdown-menu">
                      <a className="dropdown-item" href="#">English</a>
                      <a className="dropdown-item" href="#">Arabic</a>
                      <a className="dropdown-item" href="#">French</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="dropdown language-option">
                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="lang-name"></span>
                    </button>
                    <div className="dropdown-menu language-dropdown-menu">
                      <a className="dropdown-item" href="#">USD</a>
                      <a className="dropdown-item" href="#">BD</a>
                      <a className="dropdown-item" href="#">URO</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
                  <Nav.Link as={NavLink} exact to="/" activeClassName="active">Home
                      Home
                      <i className="fas fa-angle-down"></i>
                      </Nav.Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="index.html" className="nav-link">Home One</a>
                      </li>
                      <li className="nav-item">
                        <a href="index-2.html" className="nav-link">Home Two</a>
                      </li>
                      <li className="nav-item">
                      <Nav.Link as={NavLink} exact to="/" activeClassName="active">Home
                      </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <a href="index-4.html" className="nav-link">Home Four</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Categories
                      <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="#" className="nav-link">
                          Tours
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <a href="tour-search.html" className="nav-link">Tour Grid</a>
                          </li>
                          <li className="nav-item">
                            <a href="tour-search-list.html" className="nav-link">Tour List</a>
                          </li>
                          <li className="nav-item">
                            <a href="tour-search-map.html" className="nav-link">Tour Map</a>
                          </li>
                          <li className="nav-item">
                            <a href="tour-details.html" className="nav-link">Tour Details</a>
                          </li>
                          <li className="nav-item">
                            <a href="tour-booking-submission.html" className="nav-link">Tour Booking</a>
                          </li>
                          <li className="nav-item">
                            <a href="top-destinations.html" className="nav-link">Top Destination</a>
                          </li>
                          <li className="nav-item">
                            <a href="top-destinations-details.html" className="nav-link">Destination Details</a>
                          </li>
                        </ul>
                      </li>
                      {/* Rest of the categories */}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Pages
                      <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="about.html" className="nav-link">About</a>
                      </li>
                      <li className="nav-item">
                        <a href="tour-guides.html" className="nav-link">Team</a>
                      </li>
                      {/* Rest of the pages */}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Dashboard  <i className="fas fa-angle-down"></i></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="dashboard.html" className="nav-link">Dashboard</a>
                      </li>
                      <li className="nav-item">
                        <a href="hotel-booking.html" className="nav-link">Hotel booking</a>
                      </li>
                      {/* Rest of the dashboard links */}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">News <i className="fas fa-angle-down"></i></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="news.html" className="nav-link">News</a>
                      </li>
                      <li className="nav-item">
                        <a href="news-v2.html" className="nav-link">News v2</a>
                      </li>
                      {/* Rest of the news links */}
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Contact <i className="fas fa-angle-down"></i></a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a href="contact.html" className="nav-link">Contact v1</a>
                      </li>
                      <li className="nav-item">
                        <a href="contact-v2.html" className="nav-link">Contact v2</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <a href="#" className="search-box">
                      <i className="bi bi-search"></i>
                    </a>
                  </div>
                  <div className="option-item">
                    <a href="become-vendor.html" className="btn  btn_navber">Become a partner</a>
                  </div>
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
                    <a href="#" className="search-box"><i className="fas fa-search"></i></a>
                  </div>
                  <div className="option-item">
                    <a href="contact.html" className="btn  btn_navber">Get a free quote</a>
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
