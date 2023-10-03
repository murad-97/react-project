import React from "react";
import Link from "next/link";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);
export default function Home2Feature() {
  const destinationSlide = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 20,
    // autoplay: true,
    loop: true,
    // roundLengths: true,
    pagination: {
      el: ".review-pagination",
      clickable: "true",
    },
    navigation: {
      nextEl: ".bannerPrev1",
      prevEl: ".bannerNext1",
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
    <>
      <div className="feature-area-2 p-80 mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="section-head feature-head-2 pb-40">
                <h5>Feature Tours</h5>
                <h2>See Our Best Popular Destinations</h2>
              </div>
            </div>
          </div>
          <div className="feature-slider-2">
            <div className="slider-arrows text-center d-xl-flex d-none justify-content-between">
              <div className="bannerNext1 swiper-btn">
                <i className="bx bx-chevron-left"></i>
              </div>
              <div className="bannerPrev1 swiper-btn">
                <i className="bx bx-chevron-right"></i>
              </div>
            </div>
            <Swiper {...destinationSlide} className="swiper">
              <div className="swiper-wrapper">
                <SwiperSlide>
                  {" "}
                  <div className="feature-card-2">
                    <div className="feature-thumb">
                      <img
                        src="assets/images/feature/ff-3.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="feature-price">
                        <h5>
                          $110 <span>/ Couple</span>
                        </h5>
                      </div>
                    </div>
                    <div className="feature-details">
                      <h5 className="tour-duration">
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link href="/package-details">&nbsp;Paris Hill Tour</Link>
                      </h3>
                    </div>
                    <div className="feature-card-review">
                      <p>
                        (<span>20</span> Review )
                      </p>
                      <ul className="feature-rating">
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
                      <Link href="/package-details">
                        <a className="feature-btn">Book Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-card-2">
                    <div className="feature-thumb">
                      <img
                        src="assets/images/feature/ff-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="feature-price">
                        <h5>
                          $110 <span>/ Couple</span>
                        </h5>
                      </div>
                    </div>
                    <div className="feature-details">
                      <h5 className="tour-duration">
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link href="/package-details">&nbsp;Jumeirah Mosque</Link>
                      </h3>
                    </div>
                    <div className="feature-card-review">
                      <p>
                        (<span>20</span> Review )
                      </p>
                      <ul className="feature-rating">
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
                      <Link href="/package-details">
                        <a className="feature-btn">Book Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-card-2">
                    <div className="feature-thumb">
                      <img
                        src="assets/images/feature/ff-3.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="feature-price">
                        <h5>
                          $110 <span>/ Couple</span>
                        </h5>
                      </div>
                    </div>
                    <div className="feature-details">
                      <h5 className="tour-duration">
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link href="/package-details">&nbsp;Paris Hill Tour</Link>
                      </h3>
                    </div>
                    <div className="feature-card-review">
                      <p>
                        (<span>20</span> Review )
                      </p>
                      <ul className="feature-rating">
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
                      <Link href="/package-details">
                        <a className="feature-btn">Book Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="feature-card-2">
                    <div className="feature-thumb">
                      <img
                        src="assets/images/feature/ff-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="feature-price">
                        <h5>
                          $110 <span>/ Couple</span>
                        </h5>
                      </div>
                    </div>
                    <div className="feature-details">
                      <h5 className="tour-duration">
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link href="/package-details">&nbsp;Jumeirah Mosque</Link>
                      </h3>
                    </div>
                    <div className="feature-card-review">
                      <p>
                        (<span>20</span> Review )
                      </p>
                      <ul className="feature-rating">
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
                      <Link href="/package-details">
                        <a className="feature-btn">Book Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="feature-card-2">
                    <div className="feature-thumb">
                      <img
                        src="assets/images/feature/ff-2.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="feature-price">
                        <h5>
                          $110 <span>/ Couple</span>
                        </h5>
                      </div>
                    </div>
                    <div className="feature-details">
                      <h5 className="tour-duration">
                        <i className="flaticon-calendar" />5 Days/6 night
                      </h5>
                      <h3>
                        <i className="flaticon-arrival" />
                        <Link href="/package-details">&nbsp;Souks of Deira</Link>
                      </h3>
                    </div>
                    <div className="feature-card-review">
                      <p>
                        (<span>20</span> Review )
                      </p>
                      <ul className="feature-rating">
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
                      <Link href="/package-details">
                        <a className="feature-btn">Book Now</a>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
