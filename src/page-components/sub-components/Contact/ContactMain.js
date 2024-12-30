import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img1 from "../../../main-components/Images/map-img.png";

const ContactMain = () => {
    const settings = useSelector(state => state.SliceData.settings);
  return (
    <>
           <section className="contact-office pdy-50">
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="contact-img-bx">
                        <img src={img1} width="100%" alt=""/>
                        {/* <i className="fa-solid fa-location-dot"></i> */}
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-center">
                    <div>
                        <div className="contact-text my-auto ">
                            <div className="head">
                                <p className="first">
                                    Our Business
                                </p>
                            </div>
                            <h1>Main Office</h1>
                            <p>{settings[16]?.value}</p>
                            <div className="consult-address">

                                <div className="row">
                                    <div className="col-lg-12 mb-4">
                                        <h5 className="mb-3">Mumbai</h5>
                                        <Link to="" className="quick mb-2 contact-add-icon"><span>{settings[15]?.value}</span></Link>
                                        <Link to="" className="quick mb-2 contact-phone-icon"><span>{settings[13]?.value}</span></Link>
                                        <Link to="" className="quick mb-2 contact-mail-icon">
                                            <span>{settings[14]?.value}</span></Link>
                                    </div>


                                </div>
                            </div>
                            <Link to="" className="btn btn-new">Contact Us <i className="fa-solid fa-angle-right ms-1"></i></Link>
                        </div>
                    </div>
                </div>
            </div>


            <div className="head-large-2">
                <span>REPRESENTATION</span>
            </div>
        </div>
    </section>

    <section className="py-90 container">
        <div className="row">
            <div className="col-lg-3 mb-4">
                <h5 className="mb-3">JAIPUR</h5>
                {/*<Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                        execution</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                    <span> example@gmail.com</span></Link>*/}
            </div>
           
            <div className="col-lg-3 mb-4">
                <h5 className="mb-3">KOLKATA</h5>
                {/*<Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                        execution</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                    <span> example@gmail.com</span></Link>*/}
            </div>
            <div className="col-lg-3 mb-4">
                <h5 className="mb-3">CHENNAI</h5>
                {/*<Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                        execution</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                    <span> example@gmail.com</span></Link>*/}
            </div>
            <div className="col-lg-3 mb-4">
                <h5 className="mb-3">DUBAI</h5>
                {/*<Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                        execution</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                    <span> example@gmail.com</span></Link>*/}
            </div>
            <div className="col-lg-3 mb-4">
                <h5 className="mb-3">BANGLADESH</h5>
                {/*<Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                        execution</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                    <span> example@gmail.com</span></Link>*/}
            </div>
            <div className="col-lg-3 mb-4">
                <h5 className="mb-3">LONDON</h5>
                {/*<Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                        execution</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                    <span> example@gmail.com</span></Link>*/}
            </div>
            <div className="col-lg-3 mb-4">
                <h5 className="mb-3">CLINTON</h5>
                {/*<Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                        execution</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                    <span> example@gmail.com</span></Link>*/}
            </div>

            <div className="col-lg-3 mb-4">
                <h5 className="mb-3">HYDERABAD </h5>
                {/*<Link to="" className="quick mb-2"><i className="fa-solid fa-building"></i> <span> Quick business
                        execution</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-phone"></i> <span>00 875 665 8</span></Link>
                <Link to="" className="quick mb-2"><i className="fa-solid fa-envelope"></i>
                    <span> example@gmail.com</span></Link>*/}
            </div>


        </div>
    </section>
    </>
  )
}

export default ContactMain