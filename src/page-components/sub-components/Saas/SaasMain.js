import React from 'react';
import { Link } from 'react-router-dom';
// import { Navigation, Pagination, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { useSelector } from 'react-redux';
// import { WebUrl } from '../../../BaseUrl';
// import Donut from './Donut';
const SaasMain = () => {

    const saascategories = useSelector(state => state.SliceData.saascategories);
    // const saasclients = useSelector(state => state.SliceData.saasclients);
    const saasprocess = useSelector(state => state.SliceData.saasprocess);

    return (
        <>
            {/* <!-- boxed container starts --> */}
            <section className="boxed-contt">
                
                <div className="large-too">
                    <span>SERVICES</span>
                </div>
            </section>
            <div className="row saas-service-icon">
                {saascategories?.map((item, index) => (
                    <div className="col-lg-4 col-md-6" key={index}>
                        <div className="boxed d-flex">
                            <div className="icon-box ">
                                {/* <i className="fa-solid fa-pen-ruler"></i> */}
                            </div>
                            <div className="text-box">
                                <h5><Link to="">{item?.title}</Link></h5>
                                <p>{item?.content}</p>
                                <Link to="" className="hover-link"><span className="icon-btn"><i className="fa-solid fa-plus"></i></span>
                                    <span className="btn-infor">Read more</span></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* <!-- boxedd container ends --> */}
            {/* <!-- testimonial starts --> */}

            {/* <!-- tabs section starts --> */}

            <section className="tab-sec ">
                <div className="container">
                    {/* <div className="main-title text-center">
                        <h2>Website Support We Offer</h2>

                    </div> */}
                    <div className="contact-text web-text my-auto text-center main-title py-80">
                        <div className="head text-center ">
                            <p className="first mx-auto">
                                Achieve SAAS's full potential
                            </p>
                        </div>
                        <h2>SAAS Support We Offer</h2>
                    </div>
                    <div className="w-100">
                        <div className="row">
                            <div className="col-lg-12 px-0">
                                <div className="bg-gr web-men">
                                    <nav>
                                        <div className="nav justify-content-start nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-lin active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Data &amp; Analytics</button>
                                            <button className="nav-lin" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">UX-UI Audits</button>
                                            <button className="nav-lin" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Additional New Features</button>
                                            <button className="nav-lin" id="nav-speed-tab" data-bs-toggle="tab" data-bs-target="#nav-speed" type="button" role="tab" aria-controls="nav-speed" aria-selected="false">API Integrations</button>
                                            <button className="nav-lin" id="nav-ams-tab" data-bs-toggle="tab" data-bs-target="#nav-ams" type="button" role="tab" aria-controls="nav-ams" aria-selected="false">Bug Fixing</button>
                                            <div className="animation start-home" id="marker"></div>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tab-content px-3" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                                        <div className="row">
                                            <div className="col-lg-8 order-2 order-lg-1">
                                                <div className="contact-text my-auto py-80">

                                                    <p>Vulputate cursus a sit amet maur is. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. Lorem Ipsum aenean commo dolig. Proin qual de suis erestopius. liqueenean sollicituin. lorem quis bibendum auct ornisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                                                    <div className="consult-address">

                                                        <div className="row">
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <Link to="" className="btn btn-new">Read More <i className="fa-solid fa-angle-right ms-1"></i></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 my-auto order-1 order-lg-2">
                                                <div className='w-100'>

                                                    <div className='saas-img py-3'>

                                                        <img src="assets/Images/all.png" className="img-responsive frame-img" alt="" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                        <div className="row">
                                            <div className="col-lg-8 order-2 order-lg-1">
                                                <div className="contact-text my-auto py-80 ">

                                                    <p>Vulputate cursus a sit amet maur is. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. Lorem Ipsum aenean commo dolig. Proin qual de suis erestopius. liqueenean sollicituin. lorem quis bibendum auct ornisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                                                    <div className="consult-address">

                                                        <div className="row">
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <Link to="" className="btn btn-new">Read More <i className="fa-solid fa-angle-right ms-1"></i></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 my-auto order-1 order-lg-2">
                                                <div className='w-100'>

                                                    <div className='saas-img py-3'>

                                                        <img src="assets/Images/all.png" className="img-responsive frame-img" alt="" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                        <div className="row">
                                            <div className="col-lg-8 order-2 order-lg-1">
                                                <div className="contact-text my-auto py-80">

                                                    <p>Vulputate cursus a sit amet maur is. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. Lorem Ipsum aenean commo dolig. Proin qual de suis erestopius. liqueenean sollicituin. lorem quis bibendum auct ornisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                                                    <div className="consult-address">

                                                        <div className="row">
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <Link to="" className="btn btn-new">Read More <i className="fa-solid fa-angle-right ms-1"></i></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 my-auto order-1 order-lg-2">
                                                <div className='w-100'>

                                                    <div className='saas-img py-3'>

                                                        <img src="assets/Images/all.png" className="img-responsive frame-img" alt="" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-speed" role="tabpanel" aria-labelledby="nav-speed-tab">
                                        <div className="row">
                                            <div className="col-lg-8 order-2 order-lg-1">
                                                <div className="contact-text my-auto py-80">

                                                    <p>Vulputate cursus a sit amet maur is. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. Lorem Ipsum aenean commo dolig. Proin qual de suis erestopius. liqueenean sollicituin. lorem quis bibendum auct ornisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                                                    <div className="consult-address">

                                                        <div className="row">
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <Link to="" className="btn btn-new">Read More <i className="fa-solid fa-angle-right ms-1"></i></Link>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 my-auto order-1 order-lg-2">
                                                <div className='w-100'>

                                                    <div className='saas-img py-3'>

                                                        <img src="assets/Images/all.png" className="img-responsive frame-img" alt="" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="nav-ams" role="tabpanel" aria-labelledby="nav-ams-tab">
                                        <div className="row">
                                            <div className="col-lg-8 order-2 order-lg-1">
                                                <div className="contact-text my-auto py-80">

                                                    <p>Vulputate cursus a sit amet maur is. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare. Lorem Ipsum aenean commo dolig. Proin qual de suis erestopius. liqueenean sollicituin. lorem quis bibendum auct ornisi elit consequat ipsum, nec sagittis sem nibh id elit. </p>
                                                    <div className="consult-address">

                                                        <div className="row">
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>
                                                            <div className="col-lg-6 mb-4">

                                                                <ul>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>
                                                                    <li className="d-flex quick mb-1">
                                                                        <span className="check-icon"><i className="fa-regular me-2 fa-square-check"></i></span>
                                                                        <span className="check-text">Proin qual de suis erestopius                                                    </span>
                                                                    </li>


                                                                </ul>
                                                            </div>


                                                        </div>
                                                    </div>
                                                    <Link to="" className="btn btn-new">Read More <i className="fa-solid fa-angle-right ms-1"></i></Link>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 my-auto order-1 order-lg-2">
                                                <div className='w-100'>

                                                    <div className='saas-img py-3'>

                                                        <img src="assets/Images/all.png" className="img-responsive frame-img" alt="" />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="col-lg-4 py-90 px-50">
                <div id="myChart">
<Donut/>
                </div>
            </div> */}
                            </div>
                        </div>
                    </div>
                    </div>
            </section>


            {/* <!-- tabs section ends --> */}

            {/* <div className='top-slide-hid'>
                <div className="top-swiper">
                    <div className="data order-2 order-md-2">


                    </div>
                    <div className="heading-2 order-1 order-md-1">
                        <h3>What our client says</h3>
                    </div>
                </div>
                <Swiper
                    
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    direction="vertical"
                    loop={true}
                    speed={800}
                    pagination={{ clickable: true }}
                   
                    className='swiper'
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                   

                  
                    {saasclients?.map((item, index) => (
                    <SwiperSlide className='swiper-slide d-flex flex-md-row flex-column' key={index}>
                        
                        <div className="image-slider ">
                            <img src={`${WebUrl}/${item?.image}`} className="mx-auto" width="146px" alt="" />
                        </div>
                        <div className="slide-text">
                            <p>{item?.review}</p>

                            <h2>{item?.name}</h2>
                        </div>
                        
                    </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div> */}

            {/* <!-- process starts --> */}

            <section className="process py-80">
                <div className="container">
                    <div className="main-title text-center">
                        <h2>Our Process</h2>

                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="process-img">
                                <img width="100%" src="assets/Images/Home-4-phone-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5">
                            {saasprocess?.map((item, index) => (
                                <div className="row" key={index}>
                                    <div className="col-3">
                                        <div className="process-left">
                                            <div className="process-number">
                                                0{index + 1}
                                            </div>
                                            <div className="process-line"></div>
                                        </div>
                                    </div>

                                    <div className="col-9 p-3">
                                        <div className="process-txt">
                                            <h5>{item?.title}</h5>
                                            <p>{item?.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            {/* <!-- process ends --> */}
        </>
    )
}

export default SaasMain