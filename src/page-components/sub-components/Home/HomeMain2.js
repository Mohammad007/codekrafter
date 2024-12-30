import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import Select from 'react-select';
import { WebUrl } from '../../../BaseUrl';
import AppFrameBanner from '../AppFrame/AppFrameBanner';
// import data from './data';

// const options = [
//     { value: "one", label: "one" },
//     { value: "two", label: "two" },
//     { value: "three", label: "three" },
//     { value: "four", label: "four" },
//     { value: "five", label: "five" },
// ];
const HomeMain2 = () => {

    const ourapproaches = useSelector(state => state.SliceData.ourapproaches);
    const homeapproachmodels = useSelector(state => state.SliceData.homeapproachmodels);
    const homeclients = useSelector(state => state.SliceData.homeclients);
    const homeclientslogos = useSelector(state => state.SliceData.homeclientslogos);

    // const [toggleState, SetToggleState] = useState(0);

    // const toggleTab = (index => {
    //     SetToggleState(index);
    // })

    const [noOfElement, setnoOfElement] = useState(6);

    const loadMore = () => {
        setnoOfElement(noOfElement + noOfElement)
    }
    const slice = homeclientslogos.slice(0, noOfElement);
    return (
        <>
            <section className="py-90 approach mb-5 pb-0">
                <div className="container">
                    <div className="main-title text-center">
                        <h2>{ourapproaches?.title}</h2>
                        <p>{ourapproaches?.content}</p>
                    </div>


                    {/* <!-- <div className="cards"> --> */}
                    <div className="row ">
                        {homeapproachmodels?.map((item, index) => (
                            <div className=" col-lg-3 col-md-4 col-6 mb-4" key={index}>
                                <div className="cards card-part-1">
                                    <div className="card-hidden">
                                        <p>{item?.content}</p>
                                    </div>
                                    <div className="card-front">
                                        <h3 className="card-heading">{item?.title}</h3>
                                        <span className="card-number">{index + 1}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <!-- </div> --> */}
                </div>
            </section>

            {/* <!-- app frame starts --> */}
            <section className="showcase-to home-app" style={{ background: '#fff' }}>
                <AppFrameBanner />
            </section>



            {/* <!-- app frame ends --> */}
            {/* <!-- approach starts --> */}

            {/* <div className="middle-sec-bg d-flex justify-content-start align-items-center my-70" style={{ background: "url('assets/Images/mid-bg.gif')", backgroundPosition: "center" }}> */}
            <div className="middle-sec-bg d-flex justify-content-end align-items-center my-70"
            style={{
            background: "url('assets/Images/middle-bg.jpeg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
            }}>

                {/* <div className="">
                            <img src="assets/Images/middle-bg.jpeg" width="100%" alt=""/>
        </div> */}
                <div className="container">
                <div className="text-start main-title-2 max-500">
                    <div className="animat-cont ">
                        <h2>Right balance between technical performance and asthetics</h2>
                       
                    </div>
                </div>
                </div>
            </div>
            {/* <!-- approach ends --> */}



            {/* <!-- Web frame starts --> */}

            <section className="animation-bg d-flex align-items-center justify-content-center">
                <div className="overlay2"></div>

                <div className="text-center main-title-2">
                    <div className="animat-cont ">
                        <h2>Website &amp; Dashboard Development</h2>
                        <div className="animat-fields">
                        <Link className='text-d-none' to="/website-development"> <span>Ecommerce</span></Link>
                        <Link className='text-d-none' to="/website-development"> <span>Multivendor</span></Link>
                        <Link className='text-d-none' to="/website-development"> <span className="span-three">Dynamic</span></Link>
                        <Link className='text-d-none' to="/website-development"> <span>Static</span></Link>
                        </div>
                    </div>
                </div>



            </section>

            {/* <!-- web frame ends --> */}


            {/* <!-- section 1 starts --> */}
            {/* <div className="section-1 mt-100 mt-12">
        <div className="row">
            <div className="col-4 achieve-bg">

                <div className="ach-part-1 my-auto">
                    
                    <Link to="">Let's get to work</Link>

                </div>

            </div>
            <div className="col-8 achieve-bg-2">
                <div className="container">
                    <div className="ach-part-2">
                        <h2>What can we help you achieve?</h2>
                        <p>Answer two questions and put our thinking to work on your challenges.</p>
                        <h5>1. What is your industry? <span>Question 1 of 2</span></h5>
                        <Select className='select' isMulti options={options}/>
                        

                    </div>
                </div>
            </div>
        </div>
    </div> */}
            {/* section 1 ends */}

            {/* <!-- logos ends --> */}
            <section className="industries py-90 mt-70 client-logo">
                <div className="container">
                    <div className="main-title text-center">
                        <h2>{homeclients?.title}</h2>
                        <p>{homeclients?.content}</p>
                    </div>

                    <div className="wrapper-li ">

                        <div className="row mb-4">


                            {slice?.map((item, index) => {
                                return (
                                    <div className="col-md-3  col-6 pad-2" key={index}>
                                        <div className="img-area shaddow">
                                            <img src={`${WebUrl}/${item.image}`} width="100%" alt="" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <Link onClick={() => loadMore()} to="" role="button" className="btn-1 mt-4 button-more1">LOAD MORE</Link>
                    </div>



                </div>


            </section>
            {/* <!-- logos ends --> */}


        </>
    )
}

export default HomeMain2