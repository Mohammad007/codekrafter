import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function SaasHero(props) {
  const { websass } = props
  const [websas, setWebSas] = useState(websass || [])
  const saasservices = useSelector((state) => state.SliceData.saasservices);

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
                {websas.length > 0 &&
                  websas?.map((item, index) => (
                    <div className="item p-3" key={index}>
                      <div className="logo-slider-img shadow">
                        <Link to={`/websitedetails/sass/${item.id}}`} style={{ textDecoration:'none' }}>
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
        <section className="saas-hero">
          <div className="container-fluid">
            <div className="text-center main-title-1">
              <h2>{saasservices?.title}</h2>
              <p>{saasservices?.content}</p>
            </div>
          </div>
          <div className="container pb-40">
            <div className="w-100">
              <div className="saas-img">
                <img
                  src="assets/Images/all.png"
                  className="img-responsive frame-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
