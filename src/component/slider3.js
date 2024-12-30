import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slide2.css'

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './img/1.jpg';
import slide_image_2 from './photo.jpg';
import slide_image_3 from './img/3.jpg';
import slide_image_4 from './img/2.jpeg';
import slide_image_5 from './img/1.jpg';
import slide_image_6 from './photo.jpg';
import slide_image_7 from './img/2.jpeg';

function slide3() {
  return (
    <div style={{ height: '', border: ' ', position: 'relative' }}>
      <div className="container-s2" style={{ height: '', border: ' ' }}>
        {/* <h1 className="heading">Our best Work</h1> */}



        <div className="contact-text web-text my-auto text-center main-title py-80">
                        <div className="head text-center ">
                            <p className="first mx-auto">
                              Our best Work                            
                              </p>
                        </div>
                        <h2>Our Best Work</h2>
                    </div>
        <Swiper style={{ height: 'auto' }}


          autoHeight={true}
          height={'auto'}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{

            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: .5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {/* <SwiperSlide>
          <img style={{height:'80vh'}}  src={slide_image_1} alt="slide_image" className='slide_image'/>
        </SwiperSlide> */}
          <SwiperSlide>
            <img style={{ height: '35rem', padding: '0 20px' }} src={slide_image_2} alt="slide_image" className='slide_image' />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ height: '35rem', padding: '0 20px' }} src={slide_image_3} alt="slide_image" className='slide_image' />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ height: '35rem', padding: '0 20px' }} src={slide_image_4} alt="slide_image" className='slide_image' />
          </SwiperSlide>
          {/* <SwiperSlide>
          <img style={{height:'35rem' , padding:'0 20px'}} src={slide_image_5} alt="slide_image" className='slide_image'/>
        </SwiperSlide> */}
          <SwiperSlide>
            <img style={{ height: '35rem', padding: '0 20px' }} src={slide_image_6} alt="slide_image" className='slide_image' />
          </SwiperSlide>
          <SwiperSlide>
            <img style={{ height: '35rem', padding: '0 20px' }} src={slide_image_7} alt="slide_image" className='slide_image' />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
export default slide3