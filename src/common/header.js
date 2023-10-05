import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
export default function Header() {
  return (
    <>
      <header className="main_header_arae">
        <div className="navbar-area">
          <div className="main-responsive-nav">
            <div className="container">
              <div className="main-responsive-menu">
                <div className="logo">
                  <a href="index.html">
                    <img
                      src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/LIGHT.png"
                      alt="logo"
                      width="240"
                      height="60"
                      style={{ marginTop: "5px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main-navbar">
            <div className="container">
              <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="index.html">
                  <img
                    src="https://backpacktraveler.qodeinteractive.com/wp-content/uploads/2018/09/LIGHT.png"
                    alt="logo"
                    width="240"
                    height="60"
                    style={{ marginTop: "5px" }}
                  />
                </a>
                <div
                  className="collapse navbar-collapse mean-menu"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="/"
                        activeClassName="active"
                      >
                        Home
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        Categories
                        <i className="fas fa-angle-down"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            HoneyMoon Tours
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Group Tours
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#" className="nav-link">
                            Individual Tours
                          </a>
                        </li>
                        {/* Rest of the categories */}
                      </ul>
                    </li>
                    <li className="nav-item">
                      {/* <Nav.Link as={NavLink} exact to="/about">About us
                      </Nav.Link> */}
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="/about"
                        activeClassName="active"
                      >
                        About us
                      </Nav.Link>
                    </li>

                    <li className="nav-item">
                      <Nav.Link as={NavLink} exact to="/contact">
                        Contact us
                      </Nav.Link>
                    </li>
                    <li className="nav-item">
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="/single"
                        activeClassName="active"
                      >
                        Single
                      </Nav.Link>
                    </li>
                  </ul>
                  <div className="others-options d-flex align-items-center">
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn  btn_navber">
                        Sign in
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="become-vendor.html" className="btn  btn_navber">
                        Register
                      </a>
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
                      <a href="#" className="search-box">
                        <i className="fas fa-search"></i>
                      </a>
                    </div>
                    <div className="option-item">
                      <a href="contact.html" className="btn  btn_navber">
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
