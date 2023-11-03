import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Round from "../assets/fluent_arrow-sync-checkmark-20-regular.svg";
import Truck from "../assets/ph_truck-light.svg";
import Heart from "../assets/mdi_cards-heart-outline.svg";
import Tick from "../assets/fluent_checkmark-starburst-20-regular.svg";
import NextIcon from "../assets/next.png";
import PrevIcon from "../assets/prev.png";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Header.scss";

const Header = () => {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={NextIcon}
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img
        src={PrevIcon}
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="header_Wrapper">
      <Container>
        <Slider {...settings}>
          <div className="slider_Wrapper">
            <img src={Tick} alt="tick" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className="slider_Wrapper">
            <img src={Truck} alt="tick" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className="slider_Wrapper">
            <img src={Heart} alt="tick" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className="slider_Wrapper">
            <img src={Round} alt="tick" />
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Header;
