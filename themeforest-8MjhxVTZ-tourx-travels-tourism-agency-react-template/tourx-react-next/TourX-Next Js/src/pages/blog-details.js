import Link from "next/link";
import React from "react";
import BlogComments from "../components/blog/BlogComments";
import BlogReplay from "../components/blog/BlogReplay";
import Widget_categories from "../components/blog/Widget_categories";
import Widget_Popular_post from "../components/blog/Widget_Popular_post";
import Widget_search from "../components/blog/Widget_search";
import Widget_tag from "../components/blog/Widget_tag";
import Breadcumb from "../components/common/Breadcumb";
import Layout from "../components/layout/Layout";

export default function BlogDetailsPage() {
  return (
    <Layout>
      <Breadcumb pageName="Blog Details" pageTitle="Blog Details" />
      <div className="blog-details-wrapper pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details">
                <div className="blog-title-xl">
                  <h3>
                    Donec egestas orci viverraDonec egestas orci viverr
                    fermentum risus.
                  </h3>
                  <div className="blog-info-xl">
                    <Link href="#">
                      <a className="blog-writer">
                        <i className="flaticon-user" />
                        &nbsp;Dina Jems
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="blog-comment">
                        <i className="flaticon-comment" />
                        <span>(3)</span>Comment
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="blog-img-xl">
                  <img
                    src="assets/images/blog/bd.png"
                    alt=""
                    className="img-fluid"
                  />
                  <div className="blog-date">
                    <i className="flaticon-calendar" /> 1 April, 2021
                  </div>
                </div>
                <div className="blog-texts mt-30">
                  <p>
                    Suspendisse dolor risus, congue ac diam id, viverra
                    facilisis dolor. Cras nec purus sagittis, varius tortor at,
                    maximus erat. Sed at tellus id tellus lobortis dictum.
                    Mauris dignissim, turpis vitae ullamcorper fermentum, sapien
                    arcu aliquam arcu, in viverra quam est ac ex. Cras sed
                    lectus eu sem ullamcorper lobortis a sit amet nulla. Proin a
                    rutrum ipsum, sed maximus orci. Suspendisse nec risus nec
                    felis accumsan rutrum sagittis vitae lectus.
                  </p>
                  <p className="mt-20">
                    Suspendisse dolor risus, congue ac diam id, viverra
                    facilisis dolor. Cras nec purus sagittis, varius tortor at,
                    maximus erat. Sed at tellus id tellus lobortis dictum.
                    Mauris dignissim, turpis vitae ullamcorper fermentum, sapien
                    arcu aliquam arcu, in viverra quam est ac ex. Cras sed
                    lectus eu sem ullamcorper lobortis a sit amet nulla. Proin a
                    rutrum ipsum, sed maximus orci. Suspendisse nec risus nec
                    felis accumsan rutrum sagittis vitae lectus. Donec mauris
                    metus, iaculis non interdum et, scelerisque luctus mauris.
                    Morbi ac lectus euismod, vehicula est sit amet, malesuada
                    quam. Vivamus sed eros eu nibh scelerisque porta. Ut nec sem
                    eget est rutrum facilisis. Donec purus tortor, scelerisque
                    ut massa vitae, varius accumsan mauris. Nullam ut metus at
                    lacus porta aliquet. Curabitur eu facilisis dolor, sed
                    sagittis enim. Suspendisse venenatis urna nec tortor
                    porttitor interdum. Mauris convallis tempus dictum. Morbi
                    convallis sapien at sem pellentesque maximus.
                  </p>
                  <div className="blog-qoute">
                    <i className="bx bxs-quote-right qoute-icon" />
                    <strong>
                      Suspendisse dolor risus, congue ac diam id, the viverra
                      facilisis dolor. Cras nec purus sagittis, an varius tortor
                      at, maximus erat. Sed at tellus id foe tellus lobortis
                      dictum. Mauris dignissim, turpis{" "}
                    </strong>
                  </div>
                  <p>
                    Suspendisse dolor risus, congue ac diam id, viverra
                    facilisis dolor. Cras nec purus sagittis, varius tortor at,
                    maximus erat. Sed at tellus id tellus lobortis dictum.
                    Mauris dignissim, turpis vitae ullamcorper fermentum, sapien
                    arcu aliquam arcu, in viverra quam est ac ex. Cras sed
                    lectus eu sem ullamcorper lobortis a sit amet nulla. Proin a
                    rutrum ipsum, sed maximus orci. Suspendisse nec risus nec
                    felis accumsan rutrum sagittis vitae lectus.
                  </p>
                  <div className="blog-gallary">
                    <img
                      src="assets/images/blog/blog-g-1.png"
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src="assets/images/blog/blog-g-2.png"
                      alt=""
                      className="img-fluid"
                    />
                    <img
                      src="assets/images/blog/blog-g-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="sub-title">Things You Can Do to a vibe</h3>
                  <p className="mt-20">
                    Suspendisse dolor risus, congue ac diam id, viverra
                    facilisis dolor. Cras nec purus sagittis, varius tortor at,
                    maximus erat. Sed at tellus id tellus lobortis dictum.
                    Mauris dignissim, turpis vitae ullamcorper fermentum, sapien
                    arcu aliquam arcu, in viverra quam est ac ex. Cras sed
                    lectus eu sem ullamcorper lobortis a sit amet nulla. Proin a
                    rutrum ipsum, sed maximus orci. Suspendisse nec risus nec
                    felis accumsan rutrum sagittis vitae lectus.
                  </p>
                  <p className="mt-20">
                    Suspendisse dolor risus, congue ac diam id, viverra
                    facilisis dolor. Cras nec purus sagittis, varius tortor at,
                    maximus erat. Sed at tellus id tellus lobortis dictum.
                    Mauris dignissim, turpis vitae ullamcorper fermentum, sapien
                    arcu aliquam arcu, in viverra quam est ac ex. Cras sed
                    lectus eu sem ullamcorper lobortis a sit amet nulla. Proin a
                    rutrum ipsum, sed maximus orci. Suspendisse nec risus nec
                    felis accumsan rutrum sagittis vitae lectus.
                  </p>
                </div>
                <div className="blog-bottom">
                  <div className="blog-tags">
                    <h5>tags:</h5>
                    <ul>
                      <li>
                        <Link href="#">
                          <a>Trip</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>Travel Forest</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <a>Tourist</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="bx bxl-instagram" />
                        </a>
                        <a href="#">
                          <i className="bx bxl-facebook" />
                        </a>
                        <a href="#">
                          <i className="bx bxl-twitter" />
                        </a>
                        <a href="#">
                          <i className="bx bxl-whatsapp" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <BlogComments />
                <BlogReplay />
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
