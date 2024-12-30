import React from 'react';
import { Link } from 'react-router-dom';

import IndividualIntervalsExample from './Carousel';

const HomeBanner = () => {
  return (
    <>
     <div id="carouselExampleIndicators" interval={4000} className="carousel slide hero carousel-fade" data-bs-ride="carousel"
        data-ride="carousel" data-bs-pause="false" data-interval="1000">
        <div className="carousel-indicators d-flex justify-content-between">
            <Link role="button" type="button" data-bs-target="#carouselExampleIndicators" to="" data-bs-slide-to="0"
                className="active" aria-current="true" aria-label="Slide 1">
                <div className="line-box">
                    <div className="line"></div>
                </div>
                <div className="dots-text">Tech Support</div>
            </Link>
            <Link type="button" data-bs-target="#carouselExampleIndicators" to="" data-bs-slide-to="1" aria-label="Slide 2">
                <div className="line-box">
                    <div className="line"></div>
                </div>
                <div className="dots-text">Benifits for MSME</div>
            </Link>
            <Link type="button" data-bs-target="#carouselExampleIndicators" to="" data-bs-slide-to="2" aria-label="Slide 3">
                <div className="line-box">
                    <div className="line"></div>
                </div>
                <div className="dots-text">Trade Intelligence for 000</div>
            </Link>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <div className="overlay1"></div>
                <img src="assets/Images/dl.beatsnoop.com-1650245138.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-block text-start about-part-1">
                    <p>The Global Impact Of the War in Ukraine </p>
                    <h1>Resilience amid <br/> Global Crisis</h1>
                    {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iusto recusandae repellendus </p> --> */}
                    <Link className="learn" to=""><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
                </div>

            </div>
            <div className="carousel-item">
                <div className="overlay1"></div>
                <img src="assets/Images/dl.beatsnoop.com-1650245477.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-block text-start about-part-1">
                    <p className="par">We are <span>Vajrins</span></p>
                    <h1>Amazing, Incredible, <br/> Unbelievable and <span>Invincible </span></h1>

                    <Link className="learn" to=""><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
                </div>

            </div>
            <div className="carousel-item">
                <div className="overlay1"></div>
                <img src="assets/Images/dl.beatsnoop.com-1650245248.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-block text-start about-part-1">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <h1>Lorem ipsum <br/> amet consectetur</h1>

                    <Link className="learn" to=""><span> Learn More</span> <i className="fa-solid fa-right-long"></i></Link>
                </div>
            </div>
        </div>
        {/* <!-- <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> --> */}
    </div>

    

    <IndividualIntervalsExample/>
    </>
  )
}

export default HomeBanner