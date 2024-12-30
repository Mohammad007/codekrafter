import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import data2 from './data2';

// import SliderWrapper from './SlickSliderStyle';
// import SliderWrapper from "./_SlickSliderStyle";


function CircleCarousel() {
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
    fade: true,
    cssEase: 'ease-in-out',
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: (i) => {
      return (
        <div className="slick-dots7">
          {/* <div className="loading" /> */}


        </div>
      )
    }
  };
  return (
    <>
      {/* <SliderWrapper> */}
      <div className='slick-bg '>
        <div className='slick-outside-box'>
          <div className='slick-box'>
            <div className='slick-wrapper'>
              <div className='inner-wrapper'>
                <Slider {...settings} className='slider1'>
                  <div className="testimoni--wrapper1">
                    {/* <p>Testimoni One</p> */}
                    {/* <div className="overlay1"></div> */}
                    {/* <img src="assets/Images/dl.beatsnoop.com-1650245138.jpg" className="d-block w-100" alt="..." /> */}
                    <div className='center-bx-outer'>
                      <div className='center-bx'>
                        <div className="carousel-capt  text-center ">


                          <h1>Website Development</h1>

                          <Link className="more-btn" to="/website-development"><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimoni--wrapper1">
                    <div className='center-bx-outer'>
                      <div className='center-bx'>
                        {/* <p>Testimoni Two</p> */}
                        {/* <div className="overlay1"></div> */}
                        {/* <img src="assets/Images/dl.beatsnoop.com-1650245248.jpg" className="d-block w-100" alt="..." /> */}
                        <div className="carousel-capt  text-center ">

                          <h1>Mobile Application Development</h1>

                          <Link className="more-btn" style={{}} to="/application-development"><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimoni--wrapper1">
                    {/* <p>Testimoni Three</p> */}
                    {/* <div className="overlay1"></div> */}
                    {/* <img src="assets/Images/dl.beatsnoop.com-1650245477.jpg" className="d-block w-100" alt="..." /> */}
                    <div className='center-bx-outer'>
                      <div className='center-bx'>
                        <div className="carousel-capt  text-center ">

                          <h1>Digital Marketing</h1>
                          {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto recusandae repellendus </p> --> */}
                          <Link className="more-btn" to="/digital-marketing"><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimoni--wrapper1">
                    {/* <p>Testimoni Three</p> */}
                    {/* <div className="overlay1"></div> */}
                    {/* <img src="assets/Images/dl.beatsnoop.com-1650245477.jpg" className="d-block w-100" alt="..." /> */}
                    <div className='center-bx-outer'>
                      <div className='center-bx'>
                        <div className="carousel-capt  text-center">

                          <h1>SAAS Services</h1>
                          {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto recusandae repellendus </p> --> */}
                          <Link className="more-btn" to="/saas-services"><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </SliderWrapper> */}
    </>
  )
}

export default CircleCarousel