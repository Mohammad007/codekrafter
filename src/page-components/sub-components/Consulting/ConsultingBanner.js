import React from 'react';
import { Link } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaximg from './Parallaximg';

const ConsultingBanner = () => {
    return (
        <>
        <ParallaxProvider>
                <Parallaximg imgsrc="assets/Images/Contact-2-title-img.jpg" opacity="0.5">
            <section className="contact-bg parallax">

                <div className="social-bg parallax-window">
                    <div className="container welcome-cont">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="head-txt white-head-txt">
                                    <div className="head">
                                        <p className="first">
                                            Welcome
                                        </p>
                                    </div>
                                </div>
                                <h1 className="welcome" style={{ color: "#ffffff" }}>Sign Up For Consulting And Start Growing</h1>
                                <div className="wl-btn">

                                    <Link className="welcome-btn" to="contact.html">
                                        Contact Us <i className="fa-solid fa-angle-right"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="consult-form">
                                    <h3 className="mb-3">Start Your Business Today <br /> By Contacting Us</h3>
                                    <form action="">
                                        <div className="">
                                            {/* <!-- <label for="exampleFormControlInput1" className="form-label">Email address</label> --> */}
                                            <span className="name-span">
                                                <input type="text" className="form-control" id="name" placeholder="Name" />
                                            </span>
                                        </div>
                                        <div className="emailing">
                                            <span className="email-span">
                                                {/* <!-- <label for="exampleFormControlInput1" className="form-label">Email address</label> --> */}
                                                <input type="email" className="form-control" id="email" placeholder="Email" />
                                            </span>
                                        </div>
                                        <div className="">
                                            {/* <!-- <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label> --> */}
                                            <textarea placeholder="Type Your Message" className="form-control" id="message" rows="3"></textarea>
                                        </div>
                                        <div className="subscribe-btn mb-5">
                                            <button className="subs-btn" href="contact.html">
                                                Submit <i className="fa-solid fa-angle-right"></i>

                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            </Parallaximg>

</ParallaxProvider>
        </>
    )
}

export default ConsultingBanner