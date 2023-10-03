import React from "react";
import Breadcumb from "../components/common/Breadcumb";
import Layout from "../components/layout/Layout";
import blogData from "../components/data/blog_grid_data.json";
import Link from "next/link";
export default function blog() {
  return (
    <Layout>
      <Breadcumb pageName="blog" pageTitle="Blog" />
      <div className="blog-wrapper pt-120">
        <div className="container">
          <div className="row g-4">
            {blogData.map((data) => {
              const {
                id,
                grid_image,
                date,
                authorName,
                blogTitle,
                commentCount,
              } = data;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-6">
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
              <div className="pagination mt-50">
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
