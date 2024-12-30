import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';
import { WebUrl } from '../../../BaseUrl';

export default function WebFrameBanner() {

    const websitedevelopment = useSelector(state => state.SliceData.websitedevelopment);
    const websiteslider = useSelector(state => state.SliceData.websiteslider);

    const options = {
        items: 1,
        loop: true,
        nav: false,

        dots: false,
       
        autoplay: true,
        smartSpeed: 200,
        // slideSpeed: 100,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                stagePadding: 100,
                autoWidth: true,
                center: true,
                // nav:false
            },
            1100: {
                items: 1,
                nav: false,
                stagePadding: 100,
                autoWidth: true,
                center: true,
                // loop:false
            }
        }
    }
  return (
    <>
       <section className="showcase">
        
        <div className="container-fluid">
            <div className="text-center main-title-1">
                <h2>{websitedevelopment?.title}</h2>
                <p>{websitedevelopment?.content}</p>
            </div>
        </div>
        <div className="qodef-wrapper pb-40">
                    <div className="qodef-wrapper-inner  ">
                        <div className='row'>
                            <div className='col-12'>
                                <div className='appframe text-center '>
                                    <div className='frame-holder '>
                                        <div className='mobile-frame'>
                                            <img src="assets/Images/frame-slider-laptop.png" className="img-responsive frame-img"
                                                alt="" />

                                        </div>
                                        <div className='owl-div d-flex justify-content-center'>
                                            <OwlCarousel className='owl-carousel portfolio-carousel1  owl-theme' {...options}>
                                                {websiteslider?.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="owl-img1">
                                                        <img src={`${WebUrl}/${item?.image}`} className="img-responsive portfolio-image"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                ))}

                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                      

                    </div>


                </div>
    </section>

    </>
  )
}

