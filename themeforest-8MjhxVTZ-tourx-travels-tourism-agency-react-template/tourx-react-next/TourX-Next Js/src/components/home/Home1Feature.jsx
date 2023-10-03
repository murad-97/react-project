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
export default function Home1Feature() {
  const featureSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 20,
    // autoplay: true,
    loop: true,
   
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
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 2,
      },
    },
  };
  return (
    <div className="feature-area mt-120 p-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="section-head pb-60">
              <h5>Feature Tours</h5>
              <h2>See Our Best Popular Package</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper {...featureSlider} className="swiper feature-slider">
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <div className="feature-card">
                    <div className="feature-img">
                      <img
                        src="assets/images/feature/f-1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="feature-content">
                      <a href="package-details.html" className="title">
                        Group Travel Go To Bea Amsterdam
                      </a>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Rating
                      </h5>
                      <strong>
                        $150 <span>$200</span>
                      </strong>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-card">
                    <div className="feature-img">
                      <img
                        src="assets/images/feature/f-2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="feature-content">
                      <a href="package-details.html" className="title">
                        Group Travel Go To Bea Amsterdam
                      </a>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Rating
                      </h5>
                      <strong>
                        $150 <span>$200</span>
                      </strong>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="feature-card">
                    <div className="feature-img">
                      <img
                        src="assets/images/feature/f-1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="feature-content">
                      <a href="package-details.html" className="title">
                        Group Travel Go To Bea Amsterdam
                      </a>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Rating
                      </h5>
                      <strong>
                        $150 <span>$200</span>
                      </strong>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="feature-card">
                    <div className="feature-img">
                      <img
                        src="assets/images/feature/f-1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="feature-content">
                      <a href="package-details.html" className="title">
                        Group Travel Go To Bea Amsterdam
                      </a>
                      <h5>
                        <i className="bx bxs-star" />
                        <span> 7K+</span>Rating
                      </h5>
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
    </div>
  );
}
