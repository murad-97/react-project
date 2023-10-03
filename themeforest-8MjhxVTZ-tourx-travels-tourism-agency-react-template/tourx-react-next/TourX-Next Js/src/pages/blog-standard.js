import React from "react";
import Widget_categories from "../components/blog/Widget_categories";
import Widget_Popular_post from "../components/blog/Widget_Popular_post";
import Widget_search from "../components/blog/Widget_search";
import Widget_tag from "../components/blog/Widget_tag";
import Breadcumb from "../components/common/Breadcumb";
import Layout from "../components/layout/Layout";
import blogStandardData from "../components/data/blog_standard.json";
import Link from "next/link";
export default function BLogStandard() {
  return (
    <Layout>
      <Breadcumb pageName="Blog Standard" pageTitle="Blog Standard" />
      <div className="blog-standard-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="row g-4">
                {blogStandardData.map((data) => {
                  const {
                    id,
                    image,
                    auhtorName,
                    commnetCount,
                    blogTitle,
                    blogdetails,
                    date,
                  } = data;
                  return (
                    <div key={id} className="col-lg-12 col-md-12 col-sm-12">
                      <div className="blog-card-xl">
                        <div className="blog-img">
                          <img src={image} alt="" className="img-fluid" />
                          <div className="blog-date">
                            <i className="flaticon-calendar" />
                            {date}
                          </div>
                        </div>
                        <div className="blog-details">
                          <div className="blog-info">
                            <a className="blog-writer" href="#">
                              <i className="flaticon-user" />
                              &nbsp;{auhtorName}
                            </a>
                            <a className="blog-comment" href="#">
                              <i className="flaticon-comment" />
                              <span>({commnetCount})</span>Comment
                            </a>
                          </div>
                          <Link href="/blog-details">
                            <a  className="blog-title">
                            {blogTitle}

                            </a>
                          </Link>
                          <p className="blog-discription">{blogdetails}</p>
                          <div className="blog-btn">
                            <a href="#" className="btn-common-sm">
                              Read More
                            </a>
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
            <div className="col-lg-4 col-md-5">
              <div className="blog-sidebar">
                <Widget_search />
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <Widget_categories />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <Widget_Popular_post />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <Widget_tag />
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="sidebar-banner mt-40">
                      <img
                        src="assets/images/sidebar-banner.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="sidebar-banner-overlay">
                        <div className="sidebar-content">
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
