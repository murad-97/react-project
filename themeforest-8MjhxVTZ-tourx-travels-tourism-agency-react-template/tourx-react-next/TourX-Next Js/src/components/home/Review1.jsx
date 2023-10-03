import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay, EffectFade, Pagination]);
export default function Review1() {
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
    <div className="review-area mt-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-head pb-40">
              <h5>Our Traveller Say</h5>
              <h2>What Oue Traveller Say About Us</h2>
            </div>
          </div>
        </div>
        <div className="review-slider owl-carousel">
          <Swiper {...destinationSlide} className="swiper">
            <div className="swipper-wrapper">
              <SwiperSlide>
                <div className="review-card ">
                  <div className="reviewer-img">
                    <img
                      src="assets/images/reviewer/reviewer-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="reviewer-info">
                    <h3>Dina Jems</h3>
                    <h5>Traveller</h5>
                    <p>
                      Fusce aliquam luctus est, eget tincidunt velit scelerisque
                      rhoncus. Aliquam lacinia ipsum ornare, porttitor risus
                      nec, mattis mauris.
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="review-card">
                  <div className="reviewer-img">
                    <img
                      src="assets/images/reviewer/reviewer-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="reviewer-info">
                    <h3>Jahid Hassan</h3>
                    <h5>Traveller</h5>
                    <p>
                      Fusce aliquam luctus est, eget tincidunt velit scelerisque
                      rhoncus. Aliquam lacinia ipsum ornare, porttitor risus
                      nec, mattis mauris.{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review-card">
                  <div className="reviewer-img">
                    <img
                      src="assets/images/reviewer/reviewer-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="reviewer-info">
                    <h3>Shwan Pull</h3>
                    <h5>Traveller</h5>
                    <p>
                      Fusce aliquam luctus est, eget tincidunt velit scelerisque
                      rhoncus. Aliquam lacinia ipsum ornare, porttitor risus
                      nec, mattis mauris.{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="review-card ">
                  <div className="reviewer-img">
                    <img
                      src="assets/images/reviewer/reviewer-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="reviewer-info">
                    <h3>Dina Jems</h3>
                    <h5>Traveller</h5>
                    <p>
                      Fusce aliquam luctus est, eget tincidunt velit scelerisque
                      rhoncus. Aliquam lacinia ipsum ornare, porttitor risus
                      nec, mattis mauris.{" "}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
             
            </div>
          </Swiper>
          <div className="review-pagination d-flex justify-content-center align-items-center gap-3" />
        </div>
      </div>
    </div>
  );
}
