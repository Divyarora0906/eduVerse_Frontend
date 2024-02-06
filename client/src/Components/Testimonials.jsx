import React, { useRef, useEffect } from "react";
import "./CSS/Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgGit from "../assets/download (9).png";
import gif from "../assets/line.gif"
const WheelCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    vertical: true, // Set to true for a vertical carousel
    verticalSwiping: true, // Enable vertical swiping
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1500,
  };

  return (
    <>
      <div className="testimonials_heading">
      <h2 className="testimonials"> Testimonials</h2>
       <img src={gif} alt="Line"/>
    </div>
      <Slider {...settings} className="slider">
        <div className="Cards">
        <div className="Card-Testimonial">
          <img src={imgGit} className="img-Card-Testimonial"></img>
        </div>
        </div>
        <div className="Cards">
        <div className="Card-Testimonial">
          <img src={imgGit} className="img-Card-Testimonial"></img>
          <p className="Card-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit
            blanditiis fugiat nisi tempora, aspernatur voluptate a adipisci
            eius? Quod atque sint quae.
          </p>
        </div>
        
        </div>
        <div className="Cards">
        <div className="Card-Testimonial">
          <img src={imgGit} className="img-Card-Testimonial"></img>
          <p className="Card-para">
            Lorem  blanditiis fugiat nisi tempora, aspernatur voluptate a adipisci
            eius? Quod atque sint quae.
          </p>
        </div>
        
        </div>
      </Slider>
    </>
  );
};

export default WheelCarousel;
