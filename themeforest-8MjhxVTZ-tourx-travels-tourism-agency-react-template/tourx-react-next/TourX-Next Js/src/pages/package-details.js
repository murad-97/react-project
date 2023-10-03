import Link from "next/link";
import React, { useState } from "react";
import Breadcumb from "../components/common/Breadcumb";
import Layout from "../components/layout/Layout";
import PackageContent from "../components/package/PackageContent";
import PackageTab from "../components/package/PackageTab";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function PackageDetails() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Layout>
      <Breadcumb pageName="Package Details" pageTitle="Tour Package Details" />
      <div className="package-details-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="package-details">
                <PackageContent />
                <PackageTab />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-d-sidebar">
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="p-sidebar-form">
                      <form>
                        <h5 className="package-d-head">Book This Package</h5>
                        <div className="row">
                          <div className="col-lg-12">
                            <input type="text" placeholder="Your Full Name" />
                          </div>
                          <div className="col-lg-12">
                            <input type="email" placeholder="Your Email" />
                          </div>
                          <div className="col-lg-12">
                            <input type="tel" placeholder="Phone" />
                          </div>
                          <div className="col-lg-12">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Tickets Type</option>
                              <option value={1}>Travel With Bus</option>
                              <option value={2}>Travel With Plane</option>
                            </select>
                          </div>
                          <div className="col-lg-6">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Adult</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                          </div>
                          <div className="col-lg-6">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>Child</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                            </select>
                          </div>
                          <div className="col-lg-12">
                            <div className="calendar-input">
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                              <i className="flaticon-calendar" />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <textarea
                              cols={30}
                              rows={7}
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                          <div className="col-lg-12">
                            <input type="submit" value="Book Now" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="p-sidebar-cards mt-40">
                      <h5 className="package-d-head">Popular Packages</h5>
                      <ul className="package-cards">
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img
                              src="assets/images/package/p-sm-1.png"
                              alt=""
                            />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link href="/package-details"><a>&nbsp;Lake Garda</a></Link>
                            </h3>
                            <h5>
                              <span>$180</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img
                              src="assets/images/package/p-sm-4.png"
                              alt=""
                            />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link href="/package-details"><a>&nbsp;Paris Hill Tour</a></Link>
                            </h3>
                            <h5>
                              <span>$180</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img
                              src="assets/images/package/p-sm-2.png"
                              alt=""
                            />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link href="/package-details"><a>&nbsp;Amalfi Costa</a></Link>
                            </h3>
                            <h5>
                              <span>$180</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img
                              src="assets/images/package/p-sm-3.png"
                              alt=""
                            />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link href="/package-details"><a>&nbsp;Mount Dtna</a></Link>
                            </h3>
                            <h5>
                              <span>$180</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                        <li className="package-card-sm">
                          <div className="p-sm-img">
                            <img
                              src="assets/images/package/p-sm-4.png"
                              alt=""
                            />
                          </div>
                          <div className="package-info">
                            <div className="package-date-sm">
                              <strong>
                                <i className="flaticon-calendar" />5 Days/6
                                night
                              </strong>
                            </div>
                            <h3>
                              <i className="flaticon-arrival" />
                              <Link href="/package-details"><a>&nbsp;Fench Rivirany</a></Link>
                            </h3>
                            <h5>
                              <span>$180</span>/ Per Person
                            </h5>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="p-sidebar-organizer mt-40">
                      <h5 className="package-d-head">Organized By</h5>
                      <div className="organizer-card">
                        <div className="organizer-img">
                          <img src="assets/images/organizer.png" alt="" />
                        </div>
                        <div className="organizer-info">
                          <h5>Travelhotel</h5>
                          <p>Member since 2021</p>
                          <ul className="organizer-rating">
                            <li>
                              <i className="bx bxs-star" />
                            </li>
                            <li>
                              <i className="bx bxs-star" />
                            </li>
                            <li>
                              <i className="bx bxs-star" />
                            </li>
                            <li>
                              <i className="bx bxs-star" />
                            </li>
                            <li>
                              <i className="bx bx-star" />
                            </li>
                          </ul>
                          <h5>500 Reviews</h5>
                        </div>
                      </div>
                      <div className="p-ask-btn">
                        <a href="#">ASK A QUESTION</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="p-sidebar-banner mt-40">
                      <img
                        src="assets/images/sidebar-banner.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="sidebar-banner-overlay">
                        <div className="overlay-content">
                          <h3>Get 50% Off In Dubai Tour</h3>
                          <div className="sidebar-banner-btn">
                            <Link href="/package-detail">
                              <a>
                              Book Now
                              </a>
                              </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
