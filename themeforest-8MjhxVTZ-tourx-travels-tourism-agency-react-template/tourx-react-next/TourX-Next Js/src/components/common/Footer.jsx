import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <div className="footer-info">
              <div className="footer-logo">
                <img
                  src="assets/images/logo-2.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione
              </p>
              <div className="footer-social-icons">
                <h5>Follow Us:</h5>
                <ul>
                  <li>
                    <a href="#">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bx bxl-dribbble" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-7">
                <div className="footer-links">
                  <h5 className="widget-title">Contact us</h5>
                  <div className="contact-box">
                    <span>
                      <i className="bx bx-phone" />
                    </span>
                    <div>
                      <a href="tel:+01852-1265122">+01852-1265122</a>
                      <a href="tel:+01852-1265122">+01852-1265122</a>
                    </div>
                  </div>
                  <div className="contact-box">
                    <span>
                      <i className="bx bx-mail-send" />
                    </span>
                    <div>
                      <a href="mailto:info@example.com">info@example.com</a>
                      <a href="mailto:support@example.com">
                        support@example.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-box">
                    <span>
                      <i className="bx bx-location-plus" />
                    </span>
                    <div>
                      <a href="#">
                        2752 Willison Street <br />
                        Eagan, United State
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-5">
                <div className="footer-links">
                  <h5 className="widget-title">support</h5>
                  <div className="category-list">
                    <ul>
                      <li>
                        <Link href="/contact">
                          <a>Contact us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>About us</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>Services</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog">
                          <a>our Blogs</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a> terms and conditions</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer-links payment-links">
                  <h5 className="widget-title">We Accepts:</h5>
                  <div className="payment-cards">
                    <img
                      src="assets/images/payment/payment-card-2.png"
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src="assets/images/payment/payment-card-1.png"
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src="assets/images/payment/payment-card-3.png"
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src="assets/images/payment/payment-card-4.png"
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src="assets/images/payment/payment-card-5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="copyrigth-area">
              <p>
                Copyright 2022 <a href="#">TourX</a> | Design By{" "}
                <Link href="#">
                  <a>Egens Lab</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
