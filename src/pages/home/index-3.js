import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index3 = () => {
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
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="button">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <section id="home_three_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_area_three">
                <h3 className="top_banner_three_text">Welcome to Andtour</h3>
                <h2>Experience the world together</h2>
                <h3 className="bottom_banner_three_text">
                  Find awesome flights, hotel, tour, car and packages
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home_news_four" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Choose your destinations</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="news_card_four_wrapper">
                <div className="news_card_four_img">
                  <a href="news-details.html">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-3.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="news_card_four_heading text-center">
                  <h3>
                    <a href="news-details.html">HoneyMoon Tour</a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="news_card_four_wrapper">
                <div className="news_card_four_img">
                  <a href="news-details.html">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-1.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="news_card_four_heading text-center">
                  <h3>
                    <a href="news-details.html">Group Tour</a>
                  </h3>
                  {/* <ul>
                                <li>24th January <i className="fas fa-circle"></i></li>
                                <li>5min read</li>
                            </ul> */}
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="news_card_four_wrapper">
                <div className="news_card_four_img">
                  <a href="news-details.html">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/news/news-2.png"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="news_card_four_heading text-center">
                  <h3>
                    <a href="news-details.html">Individual Tour</a>
                  </h3>
                  {/* <ul>
                                <li>24th January <i className="fas fa-circle"></i></li>
                                <li>5min read</li>
                            </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partner_area" className="section_padding_top">
        <div className="container">
          <div className="partner_area_bg">
            <div className="row">
              <div className="col-lg-6">
                <div className="partner_area_left">
                  <h5>Find your best travel partner</h5>
                  <h2>
                    Prepare yourself and let’s enjoy the beauty of the world
                  </h2>
                  <p>
                    Sint est eu sit ipsum enim amet esse sunt incididunt.
                    Occaecat aliquip commodo ipsum officia in Lorem commodo
                    aliquip dolore. Nisi domip excepteur commodo ea nostrud
                    mollit.
                  </p>
                  <div className="partner_video_area">
                    <a
                      className="video_btn video_play_area"
                      href="https://www.youtube.com/watch?v=_2LLXnUdUIc"
                      title="Youtube Video"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                  <div className="local_counter_area">
                    <div className="local_counter_box">
                      <h2>12K</h2>
                      <h5>Local guides</h5>
                    </div>
                    <div className="local_counter_box">
                      <h2>750+</h2>
                      <h5>Destinations</h5>
                    </div>
                    <div className="local_counter_box">
                      <h2>100%</h2>
                      <h5>Happiness</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="three_We_area" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="we_offer_area_three">
                <h4 className="three_heading_area">What we offer</h4>
                <h2>Discover your all the destinations with us!</h2>
                <p>
                  Sint est eu sit ipsum enim amet esse sunt incididunt. Occaecat
                  aliquip commodo ipsum officia in mollit.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="three_offer_slider owl-theme owl-carousel">
                <div className="three_offer_item">
                  <img src="assets/img/icon/offer-1.png" alt="icon" />
                  <h3>Wedding destinations</h3>
                  <p>
                    Dolore ullamco voluptate duis est volupt exercitation
                    officia ad qui nostrud adipisicing non.
                  </p>
                </div>
                <div className="three_offer_item">
                  <img
                    src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/offer-2.png"
                    alt="icon"
                  />
                  <h3>Homeymoon tour</h3>
                  <p>
                    Dolore ullamco voluptate duis est volupt exercitation
                    officia ad qui nostrud adipisicing non.
                  </p>
                </div>
                <div className="three_offer_item">
                  <img src="assets/img/icon/offer-3.png" alt="icon" />
                  <h3>Group tour </h3>
                  <p>
                    Dolore ullamco voluptate duis est volupt exercitation
                    officia ad qui nostrud adipisicing non.
                  </p>
                </div>
                <div className="three_offer_item">
                  <img src="assets/img/icon/offer-4.png" alt="icon" />
                  <h3>Family tour</h3>
                  <p>
                    Dolore ullamco voluptate duis est volupt exercitation
                    officia ad qui nostrud adipisicing non.
                  </p>
                </div>
                <div className="three_offer_item">
                  <img src="assets/img/icon/offer-1.png" alt="icon" />
                  <h3>Wedding destinations</h3>
                  <p>
                    Dolore ullamco voluptate duis est volupt exercitation
                    officia ad qui nostrud adipisicing non.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="promotional_tours" className="section_padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Trending tour</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="Trending_tour_slider owl-theme owl-carousel arrow_style">
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img src="assets/img/tab-img/hotel1.png" alt="img" />
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
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img src="assets/img/tab-img/hotel2.png" alt="img" />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>Indonesia
                    </p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">
                        Hotel paradise international
                      </a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img src="assets/img/tab-img/hotel3.png" alt="img" />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>Kualalampur
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">Hotel kualalampur</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img src="assets/img/tab-img/hotel4.png" alt="img" />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>Mariana island
                    </p>
                    <div className="discount_tab">
                      <span>50%</span>
                    </div>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">Hotel deluxe</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img src="assets/img/tab-img/hotel6.png" alt="img" />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>Beach view
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">Thailand grand suit</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
                <div className="theme_common_box_two img_hover">
                  <div className="theme_two_box_img">
                    <a href="hotel-details.html">
                      <img src="assets/img/tab-img/hotel7.png" alt="img" />
                    </a>
                    <p>
                      <i className="fas fa-map-marker-alt"></i>Long island
                    </p>
                  </div>
                  <div className="theme_two_box_content">
                    <h4>
                      <a href="hotel-details.html">Zefi resort and spa</a>
                    </h4>
                    <p>
                      <span className="review_rating">4.8/5 Excellent</span>{" "}
                      <span className="review_count">(1214 reviewes)</span>
                    </p>
                    <h3>
                      $99.00 <span>Price starts from</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="promotional_tours" className="section_padding_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Trending tour</h2>
              </div>
            </div>
          </div>
          <div className="row">
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
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      <section id="width_offer_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="width_offer_item">
                <div className="width_offer_icon">
                  <img src="assets/img/icon/plan.png" alt="icon" />
                </div>
                <div className="width_offer_text">
                  <h3>550+ destinations</h3>
                  <p>
                    Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla
                    irure nostrud.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="width_offer_item">
                <div className="width_offer_icon">
                  <img src="assets/img/icon/location.png" alt="icon" />
                </div>
                <div className="width_offer_text">
                  <h3>Best price guarantee</h3>
                  <p>
                    Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla
                    irure nostrud.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="width_offer_item">
                <div className="width_offer_icon">
                  <img src="assets/img/icon/suport.png" alt="icon" />
                </div>
                <div className="width_offer_text">
                  <h3>Top quality customer support</h3>
                  <p>
                    Nostrud aliqua ipsum dolore velit labore nulla fugiat nulla
                    irure nostrud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="home_Three_client" className="section_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="home_client_wrpper">
                <h4>Our testimonials</h4>
                <h2>What our client say about us</h2>
                <div className="home-two-quote">
                  <img src="assets/img/icon/quote.png" alt="img" />
                  <h3>Awesome service</h3>
                </div>
                <div className="home_two_client_slider  owl-theme owl-carousel">
                  <div className="client_two_content">
                    <p>
                      Ad non quis quis commodo ut nostrud ipsum ad
                      reprehenderit. Lorem eiusmod excepteur anim adipisicing
                      officia officia. Ad non quis quis commodo ut nostrud ipsum
                      ad reprehenderit. Lorem eiusmod excepteur
                    </p>
                    <div className="client_two_author">
                      <h5>Cameron douglas</h5>
                      <h6>Businessman</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_three_client_right">
                <img
                  src="https://andit.co/projects/html/and-tour/demo/assets/img/icon/test.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our_partners" className="section_padding_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="section_heading_center">
                <h2>Our partners</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="partner_slider_area owl-theme owl-carousel">
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
                <div className="partner_logo">
                  <a href="#!">
                    <img
                      src="https://andit.co/projects/html/and-tour/demo/assets/img/partner/1.png"
                      alt="logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </>
  );
};

export default Index3;
