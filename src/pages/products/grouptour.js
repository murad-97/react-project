import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Search  from "./search";
import GroupGrid  from "./groupGrid";
import Productsidebar  from "./productsidebar";

const products = () => {
  return (
    <>
      <div className="search-overlay">
        <div className="d-table">
            <div className="d-table-cell">
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-layer"></div>
                <div className="search-overlay-close">
                    <span className="search-overlay-close-line"></span>
                    <span className="search-overlay-close-line"></span>
                </div>
                <div className="search-overlay-form">
                    <form>
                        <input type="text" className="input-search" placeholder="Search here..."/>
                        <button type="button"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <section id="common_banner">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="common_bannner_text">
                        <h2>Tour search result</h2>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><span><i className="fas fa-circle"></i></span> Tours</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="theme_search_form_tour">
        <div className="container">
              <Search />
        </div>
    </section>

    <section id="explore_area" className="section_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="section_heading_center">
                        <h2>42 tours found</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <Productsidebar />
                <GroupGrid />
            </div>
        </div>
    </section>

    <section id="cta_area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="cta_left">
                        <div className="cta_icon">
                            <img src="https://andit.co/projects/html/and-tour/demo/assets/img/common/email.png" alt="icon"/>
                        </div>
                        <div className="cta_content">
                            <h4>Get the latest news and offers</h4>
                            <h2>Subscribe to our newsletter</h2>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="cat_form">
                        <form id="cta_form_wrappper">
                            <div className="input-group"><input type="text" className="form-control"
                                    placeholder="Enter your mail address"/><button className="btn btn_theme btn_md"
                                    type="button">Subscribe</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  );
};

export default products;