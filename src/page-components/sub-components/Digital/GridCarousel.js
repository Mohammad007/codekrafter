import React, {useState} from 'react';
import OwlCarousel from 'react-owl-carousel';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function GridCarousel() {
    const [show,SetShow]= useState(false);
    const [show1,SetShow1]= useState(false);
    const [show2,SetShow2]= useState(false);
    const [show3,SetShow3]= useState(false);
    const [show4,SetShow4]= useState(false);
    // const [toggleState,SetToggleState]= useState(true);

    // const toggleTab = (index => {
    //     SetToggleState(index);
    // })
    const nextIcon = '<i className="fa fa-angle-right"></i>';
    const prevIcon = '<i className="fa fa-angle-left"></i>';
    const options = {
        items: 1,
        loop: true,
        nav: false,
        dots: false,
        navText: [
            prevIcon,
            nextIcon
        ],
        autoplay: 5000,
        autoplaySpeed: 10,
        autoplayTimeout: 5000,
        responsiveClass: true,

    }
    const digitalcategories = useSelector(state => state.SliceData.digitalcategories);
    return (
        <>
            <section className='grid-mobile-view'>
                <div className='grid-mob-box'>
                    <div className='grid-mob-img'>
                        <img src="assets/Images/main-img-3.jpg" className="img-responsive portfolio-image" alt="" />

                    </div>
                    <div className={show ? "grid-text grd-txt1 grd-open":"grid-text grd-txt1"}>
                        <div className="item-title ">
                            <h4>Accounting<br />and Finance </h4>
                        </div>
                        <div className=" item-desc ">
                            <p> Lorem ipsum dolor sit amet conse cte. Pro
                                inqualdesu is eres topiusi iqueenean sollici
                                tuinworem quisi. </p>
                        </div>
                        <div className="qodef-ib-item-btn-holde">
                            <Link  onClick={()=>SetShow(!show)}
                                to=""
                                className="best-btn read-btn">
                                <span aria-hidden="true"
                                    className="plus_icon_span "><i className="fa-solid fa-plus"></i></span><span className="span-ind"> Read
                                        More</span></Link>
                        </div>

                    </div>
                </div>
                <div className='grid-mob-box'>
                    <div className='grid-mob-img'>
                        <img src="assets/Images/main-interactiv-b-1.jpg" className="img-responsive portfolio-image" alt="" />

                    </div>
                    <div className={show1 ? "grid-text grd-txt1 grd-open":"grid-text grd-txt1"}>
                        <div className="item-title ">
                            <h4> Data<br /> Analysis </h4>
                        </div>
                        <div className=" item-desc ">
                            <p> Lorem ipsum dolor sit amet conse cte. Pro
                                inqualdesu is eres topiusi iqueenean sollici
                                tuinworem quisi. </p>
                        </div>
                        <div className="qodef-ib-item-btn-holde">
                            <Link onClick={()=>SetShow1(!show1)}
                                to=""
                                className="best-btn read-btn">
                                <span aria-hidden="true"
                                    className="plus_icon_span "><i className="fa-solid fa-plus"></i></span><span className="span-ind"> Read
                                        More</span></Link>
                        </div>

                    </div>
                </div>
                <div className='grid-mob-box'>
                    <div className='grid-mob-img'>
                        <img src="assets/Images/main-interactiv-b-2.jpg" className="img-responsive portfolio-image" alt="" />

                    </div>
                    <div className={show2 ? "grid-text grd-txt1 grd-open":"grid-text grd-txt1"}>
                        <div className="item-title ">
                            <h4>Management<br />Skills </h4>
                        </div>
                        <div className=" item-desc ">
                            <p> Lorem ipsum dolor sit amet conse cte. Pro
                                inqualdesu is eres topiusi iqueenean sollici
                                tuinworem quisi. </p>
                        </div>
                        <div className="qodef-ib-item-btn-holde">
                            <Link onClick={()=>SetShow2(!show2)}
                                to=""
                                className="best-btn read-btn">
                                <span aria-hidden="true"
                                    className="plus_icon_span "><i className="fa-solid fa-plus"></i></span><span className="span-ind"> Read
                                        More</span></Link>
                        </div>

                    </div>
                </div>
                <div className='grid-mob-box'>
                    <div className='grid-mob-img'>
                        <img src="assets/Images/main-interactiv-b-3.jpg" className="img-responsive portfolio-image" alt="" />

                    </div>
                    <div className={show3 ? "grid-text grd-txt1 grd-open":"grid-text grd-txt1"}>
                        <div className="item-title ">
                            <h4>Presentation<br />Ideas </h4>
                        </div>
                        <div className=" item-desc ">
                            <p> Lorem ipsum dolor sit amet conse cte. Pro
                                inqualdesu is eres topiusi iqueenean sollici
                                tuinworem quisi. </p>
                        </div>
                        <div className="qodef-ib-item-btn-holde">
                            <Link onClick={()=>SetShow3(!show3)}
                                to=""
                                className="best-btn read-btn">
                                <span aria-hidden="true"
                                    className="plus_icon_span "><i className="fa-solid fa-plus"></i></span><span className="span-ind"> Read
                                        More</span></Link>
                        </div>

                    </div>
                </div>
                <div className='grid-mob-box'>
                    <div className='grid-mob-img'>
                        <img src="assets/Images/main-interactiv-b-4.jpg" className="img-responsive portfolio-image" alt="" />

                    </div>
                    <div className={show4 ? "grid-text grd-txt1 grd-open":"grid-text grd-txt1"}>
                        <div className="item-title ">
                            <h4>Design<br />Inspiration </h4>
                        </div>
                        <div className=" item-desc ">
                            <p> Lorem ipsum dolor sit amet conse cte. Pro
                                inqualdesu is eres topiusi iqueenean sollici
                                tuinworem quisi. </p>
                        </div>
                        <div className="qodef-ib-item-btn-holde">
                            <Link onClick={()=>SetShow4(!show4)}
                                to=""
                                className="best-btn read-btn">
                                <span aria-hidden="true"
                                    className="plus_icon_span "><i className="fa-solid fa-plus"></i></span><span className="span-ind"> Read
                                        More</span></Link>
                        </div>

                    </div>
                </div>
            </section>
            <section className='grid-slide-outer'>
                <OwlCarousel className='owl-carousel portfolio-carousel  owl-theme' {...options}>
                    <div className="item item1">
                        <div className="owl-img">

                            <img src="assets/Images/main-img-3.jpg" className="img-responsive portfolio-image"
                                alt="" />

                        </div>
                    </div>
                    <div className="item item1">
                        <div className="owl-img">

                            <img src="assets/Images/main-interactiv-b-1.jpg" className="img-responsive portfolio-image"
                                alt="" />

                        </div>
                    </div>
                    <div className="item item2">
                        <div className="owl-img">

                            <img src="assets/Images/main-interactiv-b-2.jpg" className="img-responsive portfolio-image"
                                alt="" />

                        </div>
                    </div>
                    <div className="item item3">
                        <div className="owl-img">

                            <img src="assets/Images/main-interactiv-b-3.jpg" className="img-responsive portfolio-image"
                                alt="" />

                        </div>
                    </div>
                    <div className="item item4">
                        <div className="owl-img">

                            <img src="assets/Images/main-interactiv-b-4.jpg" className="img-responsive portfolio-image"
                                alt="" />

                        </div>
                    </div>

                </OwlCarousel>
                <div className="grid-style">
                    <div className='row'>
                        {digitalcategories?.map((item, index) => (
                        <div className='col-2' key={index}>
                            <div className='grid-one'>
                                <div className='grid-bx'>
                                    <div className='inside-grid '>
                                        <div className='flx-bx '>
                                            <div className='flx-overlay'></div>
                                            <div className='grid-text'>
                                                <div className="qodef-ib-item-title item-title accounting">
                                                    <h4> {item?.title} </h4>
                                                </div>
                                                <div className="qodef-ib-item-description item-desc qodef-hidden accounting">
                                                    <p>{item?.content}</p>
                                                </div>
                                                <div className="qodef-ib-item-btn-holde">
                                                    <Link
                                                        to=""
                                                        className="best-btn read-btn">
                                                        <span aria-hidden="true"
                                                            className="plus_icon_span "><i className="fa-solid fa-plus"></i></span><span className="span-ind"> Read
                                                                More</span></Link>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='grid-overlay'></div>
                            </div>
                        </div>
                        ))}
  
                    </div>
                </div>
            </section>
        </>
    )
}

export default GridCarousel