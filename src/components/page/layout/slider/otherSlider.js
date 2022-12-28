import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, {Component} from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <img className="otherSlide-btnNext" src={require("../../../Assets/icon/btn-slide2.png")} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick}>
      <img className="otherSlide-btnPrev" src={require("../../../Assets/icon/btn-slide2.png")} />
    </div>
  );
}

export default function OtherSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        }
    },
    {
        breakpoint: 768,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
    }]
  };
  return (
    <Slider {...settings}>
        <div className="other-item">
            <p> 
                was looking for a nice hotel, but with various activities when staying there.
                Boy, was I surprised! Cozynibi Hotel was anything but boring and all the things 
                I did and places I visited was well worth it!
            </p>
            <div className="other-user d-flex">
                <div className="user-img">
                    <img src={require("../../../Assets/img/avt-1.jpg")} alt="" />
                </div>
                <div className="user-content">
                    <b>John abraham</b>
                    <p>From Germany</p>
                </div>
            </div>
        </div>
        <div className="other-item">
            <p> 
                was looking for a nice hotel, but with various activities when staying there.
                Boy, was I surprised! Cozynibi Hotel was anything but boring and all the things 
                I did and places I visited was well worth it!
            </p>
            <div className="other-user d-flex">
                <div className="user-img">
                    <img src={require("../../../Assets/img/avt-2.jpg")} alt="" />
                </div>
                <div className="user-content">
                    <b>John abraham</b>
                    <p>From Germany</p>
                </div>
            </div>
        </div>
        <div className="other-item">
            <p> 
                was looking for a nice hotel, but with various activities when staying there.
                Boy, was I surprised! Cozynibi Hotel was anything but boring and all the things 
                I did and places I visited was well worth it!
            </p>
            <div className="other-user d-flex">
                <div className="user-img">
                    <img src={require("../../../Assets/img/avt-1.jpg")} alt="" />
                </div>
                <div className="user-content">
                    <b>John abraham</b>
                    <p>From Germany</p>
                </div>
            </div>
        </div>
        <div className="other-item">
            <p> 
                was looking for a nice hotel, but with various activities when staying there.
                Boy, was I surprised! Cozynibi Hotel was anything but boring and all the things 
                I did and places I visited was well worth it!
            </p>
            <div className="other-user d-flex">
                <div className="user-img">
                    <img src={require("../../../Assets/img/avt-2.jpg")} alt="" />
                </div>
                <div className="user-content">
                    <b>John abraham</b>
                    <p>From Germany</p>
                </div>
            </div>
        </div>
    </Slider>
  );
}