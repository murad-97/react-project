import React from "react";
import Breadcumb from "../components/common/Breadcumb";
import Layout from "../components/layout/Layout";
import packageCardData from "../components/data/package_grid.json";
import Link from "next/link";
export default function PackagePage() {
  return (
    <Layout>
      <Breadcumb pageName="Tour Package" pageTitle="Tour Package" />
      <div className="package-area pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head pb-45">
                <h5>Choose Your Package</h5>
                <h2>Select Your best Package For Your Travel</h2>
              </div>
            </div>
          </div>
          <div className="row g-4" >
            {packageCardData.map((data) => {
              const { id, image, rating, price, title, time } = data;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-6">
                  <div className="package-card">
                    <div className="package-thumb">
                      <img src={image} alt="" className="img-fluid" />
                    </div>
                    <div className="package-details">
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
                        <Link href="/package-details">
                          <a>{title}</a>
                        </Link>
                      </h3>
                      <div className="package-rating">
                        <strong>
                          <i className="bx bxs-star" />
                          <i className="bx bxs-star" />
                          <i className="bx bxs-star" />
                          <i class="bx bxs-star-half"></i>
                          <i className="bx bx-star" />
                          <span>{rating}</span> &nbsp; Rating
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
              <div className="pagination mt-30">
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
      </div>
    </Layout>
  );
}
