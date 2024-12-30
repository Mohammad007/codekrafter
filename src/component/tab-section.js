


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
const SaasMaintab = () => {

    const saascategories = useSelector(state => state.SliceData.saascategories);
    // const saasclients = useSelector(state => state.SliceData.saasclients);
    const saasprocess = useSelector(state => state.SliceData.saasprocess);

    return (
        <>


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
                                                    <Link to="" className=" btn-new">Read More <i className="fa-solid fa-angle-right ms-1"></i></Link>
                                                   
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
        </>

    )
}

export default SaasMaintab