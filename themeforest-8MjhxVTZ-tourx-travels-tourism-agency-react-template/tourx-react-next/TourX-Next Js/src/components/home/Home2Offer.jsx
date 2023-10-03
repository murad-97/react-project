import Link from "next/link";
import React from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);
export default function Home2Offer() {
  const featureSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 20,
    autoplay: true,
    loop: true,
    // roundLengths: true,
    pagination: {
      el: ".review-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".bannerPrev",
      prevEl: ".bannerNext",
    },
    breakpoints: {
      280: {
        slidesPerView: 1,
        navigation: false,
      },
      480: {
        slidesPerView: 1,
        navigation: false,
      },
      768: {
        slidesPerView: 2,
        navigation: false,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="offer-area pt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-head pb-30">
              <h5>Special offer</h5>
              <h2>Our Most Popular And Best Adventures</h2>
            </div>
          </div>
        </div>
        <div className="offer-slider dark-nav owl-carousel">
          <Swiper {...featureSlider} className="swiper">
            <div className="swiper-wrapper">
              <SwiperSlide>
                <div className="offer-card">
                  <div className="offer-thumb">
                    <img
                      src="assets/images/package/offer-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="offer-details">
                    <div className="offer-info">
                      <h5>
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <ul className="offer-rating">
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href="/package-details"><a>&nbsp;Paris Hill Tour</a></Link>
                    </h3>
                    <strong>
                      $150 <span>$200</span>
                    </strong>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer-card">
                  <div className="offer-thumb">
                    <img
                      src="assets/images/package/offer-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="offer-details">
                    <div className="offer-info">
                      <h5>
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <ul className="offer-rating">
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href="/package-details"><a>&nbsp;Lake Garda, Spain</a></Link>
                    </h3>
                    <strong>
                      $170 <span>$200</span>
                    </strong>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="offer-card">
                  <div className="offer-thumb">
                    <img
                      src="assets/images/package/offer-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="offer-details">
                    <div className="offer-info">
                      <h5>
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <ul className="offer-rating">
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href="/package-details"><a>&nbsp;French Rivira, France</a></Link>
                    </h3>
                    <strong>
                      $150 <span>$200</span>
                    </strong>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="offer-card">
                  <div className="offer-thumb">
                    <img
                      src="assets/images/package/offer-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="offer-details">
                    <div className="offer-info">
                      <h5>
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <ul className="offer-rating">
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href="/package-details"><a>&nbsp;Paris Hill Tour</a></Link>
                    </h3>
                    <strong>
                      $150 <span>$200</span>
                    </strong>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="offer-card">
                  <div className="offer-thumb">
                    <img
                      src="assets/images/package/offer-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="offer-details">
                    <div className="offer-info">
                      <h5>
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <ul className="offer-rating">
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href="/package-details"><a>&nbsp;Lake Garda, Spain</a></Link>
                    </h3>
                    <strong>
                      $170 <span>$200</span>
                    </strong>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="offer-card">
                  <div className="offer-thumb">
                    <img
                      src="assets/images/package/offer-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="offer-details">
                    <div className="offer-info">
                      <h5>
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <ul className="offer-rating">
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                        <li>
                          <i className="bx bxs-star" />
                        </li>
                      </ul>
                    </div>
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href="/package-details"><a>&nbsp;French Rivira, France</a></Link>
                    </h3>
                    <strong>
                      $150 <span>$200</span>
                    </strong>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
