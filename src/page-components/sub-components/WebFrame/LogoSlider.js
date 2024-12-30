import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function LogoSlider() {
  const options1 = {
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
      <div className="logoslider">
        <OwlCarousel
          className="owl-carousel portfolio-carousel1  owl-theme"
          {...options1}
        >
          <div className="item p-2">
            <div className="logo-slider-img shadow">
              <img
                src="assets/Images/l-java2.png"
                className="img-responsive portfolio-image"
                alt=""
              />
            </div>
          </div>
          <div className="item p-2">
            <div className="logo-slider-img shadow">
              <img
                src="assets/Images/l-react-js.png"
                className="img-responsive portfolio-image"
                alt=""
              />
            </div>
          </div>
          <div className="item p-2">
            <div className="logo-slider-img shadow">
              <img
                src="assets/Images/l-vue.png"
                className="img-responsive portfolio-image"
                alt=""
              />
            </div>
          </div>
          <div className="item p-2">
            <div className="logo-slider-img shadow">
              <img
                src="assets/Images/l-nextjs.webp"
                className="img-responsive portfolio-image"
                alt=""
              />
            </div>
          </div>
          <div className="item p-2">
            <div className="logo-slider-img shadow">
              <img
                src="assets/Images/l-redux.png"
                className="img-responsive portfolio-image"
                alt=""
              />
            </div>
          </div>
          <div className="item p-2">
            <div className="logo-slider-img shadow">
              <img
                src="assets/Images/l-angular.png"
                className="img-responsive portfolio-image"
                alt=""
              />
            </div>
          </div>
          <div className="item p-2">
            <div className="logo-slider-img shadow">
              <img
                src="assets/Images/l-php.png"
                className="img-responsive portfolio-image"
                alt=""
              />
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}

export default LogoSlider;
