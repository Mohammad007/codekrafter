import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import data2 from './data2';
import { useSelector } from 'react-redux';
import { WebUrl } from '../../../BaseUrl';

// import SliderWrapper from './SlickSliderStyle';
// import SliderWrapper from "./_SlickSliderStyle";


function HomeBanner2() {

  const homeslider = useSelector(state => state.SliceData.homeslider);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    draggable: false,
    slidesToShow: 1,
    // slidesToScroll: 1,
    initialSlide: 0,
    pauseOnHover: false,
    // fade: true,
    // cssEase: 'ease-in-out',
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: (i) => {
      return (
        <div className="ft-slick__dots--custom">
          {/* <div className="loading" /> */}
          <div className="line-box">
            <div className="line"></div>
          </div>
          <div className="dots-text">{homeslider[i]?.name}</div>

        </div>
      )
    }
  };
  return (
    <>
      <Slider {...settings} className='slider'>
        {homeslider?.map((item, index) => (
        <div className="testimoni--wrapper" key={index}>
          <div className="overlay1"></div>
          <img src={`${WebUrl}/${item?.image}`} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-block text-start about-part-1">
            <p className="par"><span>{item?.title}</span></p>
            <h1>{item?.content}</h1>
          </div>
        </div>
        ))}
      </Slider>
    </>
  )
}

export default HomeBanner2