import Link from "next/link";
import React from "react";

export default function Home1Blog() {
  return (
    <div className="blog-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-head pb-30">
              <h5>Latest Blog</h5>
              <h2>Stay Updated And new post our Blog</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          <div
            className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft animated"
            data-wow-duration="1500ms"
            data-wow-delay="0ms"
          >
            <div className="blog-card">
              <div className="blog-img">
                <img
                  src="assets/images/blog/b-1.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="blog-date">
                  <i className="flaticon-calendar" /> 1 April, 2021
                </div>
              </div>
              <div className="blog-details">
                <div className="blog-info">
                  <a className="blog-writer" href="#">
                    <i className="flaticon-user" />
                    Dina Jems
                  </a>
                  <a className="blog-comment" href="#">
                    <i className="flaticon-comment" />
                    <span>(3)</span>Comment
                  </a>
                </div>
                <Link href="/blog-details">
                  <a className="blog-title">
                    Donec egestas orci viverra fermentum risus.
                  </a>
                </Link>
                <div className="blog-btn">
                  <Link href="/blog-details">
                    <a className="btn-common-sm">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6  wow fadeInLeft animated"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div className="blog-card">
              <div className="blog-img">
                <img
                  src="assets/images/blog/b-2.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="blog-date">
                  <i className="flaticon-calendar" /> 1 April, 2021
                </div>
              </div>
              <div className="blog-details">
                <div className="blog-info">
                  <a className="blog-writer" href="#">
                    <i className="flaticon-user" />
                    Dina Jems
                  </a>
                  <a className="blog-comment" href="#">
                    <i className="flaticon-comment" />
                    <span>(3)</span>Comment
                  </a>
                </div>
                <Link href="/blog-details">
                  <a className="blog-title">
                    Praesent ut mattis ante the Nullam lobortis.{" "}
                  </a>
                </Link>
                <div className="blog-btn">
                  <Link href="/blog-details">
                    <a className="btn-common-sm">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 col-md-6 col-sm-6 wow fadeInLeft animated"
            data-wow-duration="1500ms"
            data-wow-delay="600ms"
          >
            <div className="blog-card">
              <div className="blog-img">
                <img
                  src="assets/images/blog/b-3.png"
                  alt=""
                  className="img-fluid"
                />
                <div className="blog-date">
                  <i className="flaticon-calendar" /> 1 April, 2021
                </div>
              </div>
              <div className="blog-details">
                <div className="blog-info">
                  <a className="blog-writer" href="#">
                    <i className="flaticon-user" />
                    Dina Jems
                  </a>
                  <a className="blog-comment" href="#">
                    <i className="flaticon-comment" />
                    <span>(3)</span>Comment
                  </a>
                </div>
                <Link href="/blog-details">
                  <a className="blog-title">
                    Maecenas vehicula risus non neque tincidunt.
                  </a>
                </Link>
                <div className="blog-btn">
                  <Link href="/blog-details">
                    <a className="btn-common-sm">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
