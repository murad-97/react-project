import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 3500,
};

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const pauseSlider = () => {
    sliderRef.current.slickPause();
  };

  const resumeSlider = () => {
    sliderRef.current.slickPlay();
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.slickPlay();
    }
  }, []);

  return (
    <div className="tour_details_img_wrapper">
      <div className="slider slider-for">
        <Slider {...sliderSettings} ref={sliderRef}>
          <div>
            <img
              src="https://andit.co/projects/html/and-tour/demo/assets/img/tour/big-img.png"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://andit.co/projects/html/and-tour/demo/assets/img/tour/big-img2.png"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://andit.co/projects/html/and-tour/demo/assets/img/tour/big-img3.png"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://andit.co/projects/html/and-tour/demo/assets/img/tour/big-img4.png"
              alt="img"
            />
          </div>
          <div>
            <img
              src="https://andit.co/projects/html/and-tour/demo/assets/img/tour/big-img6.png"
              alt="img"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
