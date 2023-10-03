import React from "react";
import Breadcumb from "../components/common/Breadcumb";
import Layout from "../components/layout/Layout";
import blogCardData from "../components/data/blog_grid_data.json";
import Widget_search from "../components/blog/Widget_search";
import Widget_categories from "../components/blog/Widget_categories";
import Widget_Popular_post from "../components/blog/Widget_Popular_post";
import Widget_tag from "../components/blog/Widget_tag";
import Link from "next/link";
export default function BlogSIdeBarPage() {
  return (
    <Layout>
      <Breadcumb pageName="Blog Sidebar" pageTitle="Blog Sidebar" />
      <div className="blog-sidebar-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row g-4">
                {blogCardData.slice(0, 10).map((data) => {
                  const {
                    id,
                    grid_image,
                    authorName,
                    date,
                    blogTitle,
                    commentCount,
                  } = data;
                  return (
                    <div key={id} className="col-lg-6 col-md-6 col-sm-6">
                      <div className="blog-card">
                        <div className="blog-img">
                          <img src={grid_image} alt="" className="img-fluid" />
                          <div className="blog-date">
                            <i className="flaticon-calendar" />
                            {date}
                          </div>
                        </div>
                        <div className="blog-details">
                          <div className="blog-info">
                            <Link href="#">
                              <a className="blog-writer">
                                <i className="flaticon-user" />
                                &nbsp;{authorName}
                              </a>
                            </Link>
                            <Link href="#">
                              <a className="blog-comment">
                                <i className="flaticon-comment" />
                                <span>({commentCount})</span>Comment
                              </a>
                            </Link>
                          </div>
                          <Link href="/blog-details">
                            <a className="blog-title">{blogTitle}</a>
                          </Link>
                          <div className="blog-btn">
                            <Link href="/blog-details">
                              <a className="btn-common-sm">Read More</a>
                            </Link>
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
              <div className="blog-sidebar">
                <Widget_search />
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <Widget_categories />
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <Widget_Popular_post />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <Widget_tag />
                  </div>
                  <div className="col-lg-12 col-md-6">
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
                            <Link href="/package-detail">
                              <a>Book Now</a>
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
