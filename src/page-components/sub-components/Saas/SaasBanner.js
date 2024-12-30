import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';
import { BaseUrl, WebUrl } from '../../../BaseUrl';

export default function SaasBanner() {

    const saasservices = useSelector(state => state.SliceData.saasservices);
    const saassliders = useSelector(state => state.SliceData.saassliders);

    const options = {
        items: 1,
        loop: false,
        nav: false,

        dots: false,
       center:true,
        autoplay: false,
        smartSpeed: 200,
        // slideSpeed: 100,
        slidesToShow:1,
        // autoplaySpeed: 500,
        // autoplayTimeout: 2000,
        // responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
             
                autoWidth: true,
                center: true,
                // nav:false
            },
            1100: {
                items: 1,
                nav: false,
                slidesToShow:1,
                autoWidth: true,
               
                // loop:false
            }
        }
    }
  return (
    <>
       <section className="showcase">
        
        <div className="container-fluid">
            <div className="text-center main-title-1">
                <h2>{saasservices?.title}</h2>
                <p>{saasservices?.content}</p>
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
                                                {saassliders?.map((slider, index) => (
                                                <div className="item" key={index}>
                                                    <div className="owl-img1">
                                                        <img src={`${WebUrl}/${slider?.image}`} className="img-responsive portfolio-image"
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

