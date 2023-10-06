import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Trending() {
  const [categoryData, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://651a6056340309952f0d2d66.mockapi.io/Category")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
        <div className="col-lg-12">
              <div className="Trending_tour_slider owl-theme owl-carousel arrow_style">
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img
                        src="https://andit.co/projects/html/and-tour/demo/assets/img/tab-img/hotel7.png"
                        alt="img"
                      />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>New beach,
                      Thailand
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">Kantua hotel, Thailand</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviews)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img
                        src="https://andit.co/projects/html/and-tour/demo/assets/img/tab-img/hotel7.png"
                        alt="img"
                      />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>New beach,
                      Thailand
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">Kantua hotel, Thailand</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviews)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img
                        src="https://andit.co/projects/html/and-tour/demo/assets/img/tab-img/hotel7.png"
                        alt="img"
                      />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>New beach,
                      Thailand
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">Kantua hotel, Thailand</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviews)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img
                        src="https://andit.co/projects/html/and-tour/demo/assets/img/tab-img/hotel7.png"
                        alt="img"
                      />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>New beach,
                      Thailand
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">Kantua hotel, Thailand</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviews)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
