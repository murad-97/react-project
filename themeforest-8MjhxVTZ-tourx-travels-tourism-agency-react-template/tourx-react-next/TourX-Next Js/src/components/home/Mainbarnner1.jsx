import React from "react";
import Link from "next/link";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Autoplay, EffectFade]);
export default function Mainbarnner1() {
  const bennarSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    roundLengths: true,
    navigation: {
      nextEl: ".bannerNext",
      prevEl: ".bannerPrev",
    },

   
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="main-banner">
      <Swiper {...bennarSlider} className="swipper">
        <div className="swipper-wrapper banner-slider">
          <SwiperSlide className="slider-item slider-item-1">
            <div className="container">
              <div
                className="slider-content wow fadeInLeft animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <h2>Amazing Tour In Hampshire </h2>
                <h5>7 Days, 8 Night Tour</h5>
                <div className="banner-btn">
                  <Link href="/package">
                    <a className="btn-common">Book Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item slider-item-2">
            <div className="container">
              <div
                className="slider-content wow fadeInLeft animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <h2>Amazing Tour In Indonesia </h2>
                <h5>7 Days, 8 Night Tour</h5>
                <div className="banner-btn">
                  <Link href="/package">
                    <a className="btn-common">Book Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slider-item slider-item-3">
            <div className="container">
              <div
                className="slider-content wow fadeInLeft animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <h2>Amazing Tour In madagascar </h2>
                <h5>7 Days, 8 Night Tour</h5>
                <div className="banner-btn">
                  <Link href="/package">
                    <a className="btn-common">Book Now</a>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </div>
        <div className="slider-arrows text-center d-xl-flex d-none justify-content-between">
        <div className="bannerNext swiper-btn">
        <i className="bx bx-chevron-left"></i>
      </div>
      <div className="bannerPrev swiper-btn">
        <i className="bx bx-chevron-right"></i>
      </div>
        </div>
        
      </Swiper>
      
    </div>
  );
}
