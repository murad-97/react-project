import React from "react";
import Widget_search from "../components/blog/Widget_search";
import Breadcumb from "../components/common/Breadcumb";
import Layout from "../components/layout/Layout";
import PackageCategory from "../components/package/PackageCategory";
import PackageDuration from "../components/package/PackageDuration";
import PriceRange from "../components/package/PriceRange";
import packageSidebarData from "../components/data/package_grid.json";
import Link from "next/link";
export default function PackageStandardPage() {
  return (
    <Layout>
      <Breadcumb pageName="package standard" pageTitle="Package Standard" />
      <div className="package-standard-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row mb-30">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="package-filter">
                    <h5>Showing 1-5 of 10 Result</h5>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="package-option">
                    <select>
                      <option value={0}>Package 1</option>
                      <option value={1}>Package 2</option>
                      <option value={2}>Package 3</option>
                      <option value={3}>Package 4</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                {packageSidebarData.slice(0, 7).map((data) => {
                  const { id, standard_image, price, time, rating, title } =
                    data;
                  return (
                    <div key={id} className="col-lg-12 col-md-12">
                      <div className="package-card-xl">
                        <div className="package-thumb-xl">
                          <img
                            src={standard_image}
                            alt=""
                            className="img-fluid"
                          />
                        </div>
                        <div className="package-details-xl">
                          <div className="package-info">
                            <h5>
                              <span>${price}</span>/Per Person
                            </h5>
                            <h5>
                              <i className="flaticon-calendar" />
                              {time}
                            </h5>
                          </div>
                          <h3>
                            <i className="flaticon-arrival" />
                            <Link href="/package-details"><a>&nbsp;{title}</a></Link>
                          </h3>
                          <p>{title}</p>
                          <div className="package-rating">
                            <strong>
                              <i className="bx bxs-star" />
                              <span>{rating}</span> Rating
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="pagination mt-40">
                    <a href="#">
                      <i className="bx bx-chevron-left" />
                    </a>
                    <a href="#" className="active">
                      1
                    </a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">4</a>
                    <a href="#">
                      <i className="bx bx-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-sidebar">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <Widget_search />
                  </div>
                  <div className="col-lg-12 col-md-12">
                  <PriceRange color="#FF7F47" />
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <PackageDuration />
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <PackageCategory />
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="sidebar-banner mt-40">
                      <img
                        src="assets/images/sidebar-banner.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="sidebar-banner-overlay">
                        <div className="overlay-content">
                          <h3>Get 50% Off In Dubai Tour</h3>
                          <div className="sidebar-banner-btn">
                            <Link href="/package-detail"><a>Book Now</a></Link>
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
