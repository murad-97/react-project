import React, { useRef, useEffect } from "react";
import TourDetails from "./components/tour-details";
import ImageSlider from "./components/image-slidder";
import Overview from "./components/overview";
import Itinerary from "./components/itinerary";
import IncludedExcluded from "./components/included-excluded";
import CustomerReviews from "./components/reviews";
import OntheSide from "./components/on-the-side";
import Map from "./components/map";
// import { Helmet } from 'react-helmet-async';

// import HelmetComponent from "./components/helmet"
import { Link } from "react-router-dom";



function Single() {
  return (
    <>


      {/* Common Banner Area */}
      <section id="common_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="common_bannner_text">
                <h2>Explore the evergreen forest</h2>
                <ul>
                  <li><Link to="/" style={{ textDecoration:"none", color: "white" }}> Home</Link>
                  </li><li>
                    <span>
                      <i className="fas fa-circle"></i>
                    </span>
                    <a href="tour-search.html">Tours</a>
                  </li>
                  <li><span><i className="fas fa-circle"></i></span>{" "} Tours Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tour Search Areas */}
      <section id="tour_details_main" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour_details_leftside_wrapper">
                {/* Tour Details component */}
                <TourDetails />

                {/* Use the ImageSlider component */}
                <ImageSlider />

                {/* Overview component */}
                <Overview />

                {/* Itinerary component */}
                <Itinerary />

                {/* Included/Excluded component */}
                <IncludedExcluded />

                {/* Map component */}
                <Map />

              </div>
            </div>

            {/* On the Side Component */}
            <OntheSide />

          </div>
        </div>
        {/* Reviews  Component */}
        <CustomerReviews />

      </section>

      <section id="related_tour_packages" className="section_padding_bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_heading_center">
              <h2>Related tour packages</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="promotional_tour_slider owl-theme owl-carousel dot_style">
              {/* Individual tour package items */}
              {/* You can map through your tour data here and create individual items */}
              {/* Example:
              {tourData.map((tour, index) => (
                <div key={index} className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <img src={tour.imageSrc} alt={tour.altText} />
                    <p>
                      <i className="fas fa-map-marker-alt"></i>
                      {tour.location}
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href={tour.link}>{tour.title}</a>
                    </h4>
                    <p>
                      <span className="review_rating">{tour.rating}</span>{" "}
                      <span className="review_count">{tour.reviews}</span>
                    </p>
                    <h3>
                      {tour.price} <span>{tour.priceDescription}</span>
                    </h3>
                  </div>
                </div>
              ))}
              */}
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Cta Area */}

      <section id="cta_area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="cta_left">
                <div className="cta_icon">
                  <img src="assets/img/common/email.png" alt="icon" />
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
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your mail address"
                    />
                    <button className="btn btn_theme btn_md" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* <HelmetComponent/> */}

    </>
  );
}

export default Single;
