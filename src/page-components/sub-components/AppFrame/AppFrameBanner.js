import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useSelector } from 'react-redux';
import { WebUrl } from '../../../BaseUrl';
import { Link } from 'react-router-dom';

export default function AppFrameBanner() {

    const mobileapps = useSelector(state => state.SliceData.mobileapps);
    const mobileappslider = useSelector(state => state.SliceData.mobileappslider);

    const options = {
        items: 4,
        loop: true,
        nav: false,

        dots: true,
       
        autoplay: true,
        smartSpeed: 200,
        // slideSpeed: 100,
        autoplaySpeed: 500,
        autoplayTimeout: 2000,
        clickable:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                stagePadding: 100,
                autoWidth: true,
                center: true,
                // nav:false
            },
            1100: {
                items: 4,
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



                <div className="container-fluid">
                    <div className="text-center main-title main-title-1">
                        <h2>{mobileapps?.title}</h2>
                        <p>{mobileapps?.content}</p>
                    </div>
                </div>

                <div className="qodef-wrapper pb-40">
                    <div className="qodef-wrapper-inner  ">
                        <div className='row'>
                            <div className='col-12'>
                                <div className='appframe text-center '>
                                    <div className='frame-holder '>
                                    <Link to="/application-development">
                                        <div className='mobile-frame'>
                                            <img src="assets/Images/frame-slider-phone.png" className="img-responsive frame-img"
                                                alt="" />

                                        </div>
                                        </Link>
                                        <div className='owl-div d-flex justify-content-center'>
                                            <OwlCarousel className='owl-carousel portfolio-carousel  owl-theme' {...options}>
                                                {mobileappslider?.map((item, index) => (
                                                <div className={`item ${index}`} key={index}>
                                                    
                                                    <div className="owl-img">
                                                        <img src={`${WebUrl}/${item?.images}`} className="img-responsive portfolio-image"
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

            

        </>
    )
}
