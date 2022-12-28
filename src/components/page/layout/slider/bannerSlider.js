import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, {Component} from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <img className="banner-btnNext" src={require("../../../Assets/icon/btn-slide.png")} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <img className="banner-btnPrev" src={require("../../../Assets/icon/btn-slide.png")} />
    </div>
  );
}

export default function BannerSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Slider {...settings}>
      <div className="banner-img">
        <img src={require("../../../Assets/img/banner.jpg")} alt="" className="w-100" />
      </div>
      <div className="banner-img">
        <img src={require("../../../Assets/img/banner.jpg")} alt="" className="w-100" />
      </div>
      <div className="banner-img">
        <img src={require("../../../Assets/img/banner.jpg")} alt="" className="w-100" />
      </div>
    </Slider>
  );
}