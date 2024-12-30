import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useSelector } from "react-redux";
import { BaseUrl, WebUrl } from "../../../BaseUrl";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

export default function WebsiteBanner(props) {
  const { webdata } = props
  const [webhome, setWebHome] = useState(webdata || [])
  const websitedevelopment = useSelector(
    (state) => state.SliceData.websitedevelopment
  );
  const saassliders = useSelector((state) => state.SliceData.saassliders);
  const navigate = useNavigate()

  const options = {
    items: 1,
    loop: true,
    nav: false,

    dots: false,

    autoplay: true,
    smartSpeed: 200,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        stagePadding: 100,
        autoWidth: true,
        center: true,
      },
      1100: {
        items: 1,
        nav: false,
        stagePadding: 100,
        autoWidth: true,
        center: true,
      },
    },
  };

  const options1 = {
    items: 1,
    loop: true,
    nav: false,
    dots: false,
    autoplay: false,
    smartSpeed: 200,
    autoplaySpeed: 500,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 3,
        nav: false,
      },
      768: {
        items: 4,
        autoWidth: true,
        center: true,
      },
      1100: {
        items: 8,
        nav: false,
        autoWidth: true,
        center: true,
      },
    },
  };

  return (
    <>
      <section className="showcase">
        <div className="row">
          <div className="col">
            <div className="logoslider">
              <OwlCarousel
                className="owl-carousel portfolio-carousel1 owl-theme"
                {...options1}
              >
                {webhome.length > 0 &&
                  webhome?.map((item, index) => (
                    <div className="item p-3" key={index}>
                      <div className="logo-slider-img shadow">
                        <Link to={`/websitedetails/websitehome/${item.id}}`} style={{ textDecoration:'none' }}>
                          <h4 style={{ color:'#293478', fontWeight:'bold', marginTop:'8px' }}>{item?.name}</h4>
                        </Link>
                      </div>
                    </div>
                  ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <br />
        <div className="container-fluid mt-5">
          <div className="text-center main-title-1">
            <h2>{websitedevelopment?.title}</h2>
            <p>{websitedevelopment?.content}</p>
          </div>
        </div>
        <div className="qodef-wrapper pb-40">
          <div className="qodef-wrapper-inner">
            <div className="row">
              <div className="col-12">
                <div className="appframe text-center ">
                  <div className="frame-holder ">
                    <div className="mobile-frame">
                      <img
                        src="assets/Images/frame-slider-laptop.png"
                        className="img-responsive frame-img"
                        alt=""
                      />
                    </div>
                    <div className="owl-div d-flex justify-content-center">
                      <OwlCarousel
                        className="owl-carousel portfolio-carousel1  owl-theme"
                        {...options}
                      >
                        {saassliders?.map((slider, index) => (
                          <div className="item" key={index}>
                            <div className="owl-img1">
                              <img
                                src={`${WebUrl}/${slider?.image}`}
                                className="img-responsive portfolio-image"
                                alt=""
                              />
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
  );
}
