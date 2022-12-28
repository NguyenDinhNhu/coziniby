import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, {Component} from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <img className="foodSlide-btnNext" src={require("../../../Assets/icon/btn-slide2.png")} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <img className="foodSlide-btnPrev" src={require("../../../Assets/icon/btn-slide2.png")} />
    </div>
  );
}

export default function FoodSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <Slider {...settings}>
        <div className="foodSlide-item">
            <a href="#" className="food-img">
                <img src={require("../../../Assets/img/food-res.jpg")} alt="" className="w-100" />
            </a> 
            <div className="foodSlide-title">
                <h3><a href="#">Lasagne al Forno</a></h3>
            </div>
        </div>
        <div className="foodSlide-item">
            <a href="#" className="food-img">
                <img src={require("../../../Assets/img/food-res.jpg")} alt="" className="w-100" />
            </a> 
            <div className="foodSlide-title">
                <h3><a href="#">Lasagne al Forno</a></h3>
            </div>
        </div>
    </Slider>
  );
}