import Link from "next/link";
import React from "react";
import packageData from "../data/package_grid.json";
export default function Home1package() {
  return (
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
        <div className="row g-4">
          {packageData.slice(0, 6).map((data) => {
            const { id, image, price, time, title, rating } = data;
            return (
              <div
                key={id}
                className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated"
                data-wow-duration="1500ms"
                data-wow-delay="0ms"
              >
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
                        <a>&nbsp;{title}</a>
                      </Link>
                    </h3>
                    <div className="package-rating">
                      <strong>
                        <i className="bx bxs-star" />
                        <span>&nbsp;{rating}+&nbsp;</span>Rating
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
