import React from 'react'
import Image from 'react-bootstrap/Image';


export default function header() {
  return (
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
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Sign up</a></li>
                            <li>
                                <div className="dropdown language-option">
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
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
                                    <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
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
                                <Image src="assets/img/logo.png" alt="logo"/>
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
                                    <a href="#" className="nav-link active">
                                        Home
                                        <i className="fas fa-angle-down"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Home One</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-2.html" className="nav-link">Home Two</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index-3.html" className="nav-link active">Home Three</a>
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
                                                    <a href="top-destinations-details.html" className="nav-link">Destination
                                                        Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Flights
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="flight-search-result.html" className="nav-link">Flight</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="flight-booking-submission.html" className="nav-link">Flight Booking</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link ">
                                                Hotel
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="hotel-search.html" className="nav-link">Hotel Grid</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="hotel-search-list.html" className="nav-link">Hotel List</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="hotel-map.html" className="nav-link">Hotel Map</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="hotel-details.html" className="nav-link">Hotel Booking</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="room-details.html" className="nav-link">Room Details</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="room-booking.html" className="nav-link">Room Booking</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Visa
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="visa-details.html" className="nav-link">Visa Details</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="visa-application.html" className="nav-link">Visa Application</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="visa-info.html" className="nav-link">Business visa </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="visa-info.html" className="nav-link">Education visa </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="visa-info.html" className="nav-link">Working visa </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="visa-info.html" className="nav-link">Tourist visa </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="visa-info.html" className="nav-link">Medical visa </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="visa-info.html" className="nav-link">On-arrival visa </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Apartments
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="apartment-search.html" className="nav-link">Apartments Grid</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="apartment-search-list.html" className="nav-link">Apartments List</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="apartment-search-map.html" className="nav-link">Apartments Map</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="apartment-details.html" className="nav-link">Apartments Details</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="apartment-booking.html" className="nav-link">Apartments Booking</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Bus
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="bus-search-list.html" className="nav-link">Bus</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="bus-search-map.html" className="nav-link">Bus Map</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="bus-booking.html" className="nav-link">Bus Booking</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Cruise
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="cruise-search-list.html" className="nav-link">Cruise</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="cruise-map.html" className="nav-link">Cruise Map</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="cruise-details.html" className="nav-link">Cruise Details</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="cruise-booking.html" className="nav-link">Cruise Booking</a>
                                                </li>
                                            </ul>
                                        </li>
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
                                        <li className="nav-item">
                                            <a href="testimonials.html" className="nav-link">Testimonials</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="faqs.html" className="nav-link">FAQ</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="booking-confirmation.html" className="nav-link">Booking Confirmation</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="become-expert.html" className="nav-link">Become Expert </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">User Pages</a>
                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <a href="login.html" className="nav-link">Login</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="register.html" className="nav-link">Register</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="forgot-password.html" className="nav-link">Forget Password</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="verify-otp.html" className="nav-link">Verify OTP</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="reset-password.html" className="nav-link">Reset Password</a>
                                                </li>
                                            </ul>
                                        </li>
                                       
                                        <li className="nav-item">
                                            <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="error.html" className="nav-link">404 Error</a>
                                        </li>
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
                                        <li className="nav-item">
                                            <a href="flight-booking.html" className="nav-link">Flight booking</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="tour-booking.html" className="nav-link">Tour booking</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="booking-history.html" className="nav-link">Booking history</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="my-profile.html" className="nav-link">My profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="wallet.html" className="nav-link">Wallet</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="notification.html" className="nav-link">Notifications</a>
                                        </li>
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
                                        <li className="nav-item">
                                            <a href="news-v3.html" className="nav-link">News v3</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="news-v4.html" className="nav-link">News v4</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="news-details.html" className="nav-link">News Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="news-details-v2.html" className="nav-link">News Details v2</a>
                                        </li>
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
                                    <a href="contact.html" className="btn  btn_navber">Get free quote</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
