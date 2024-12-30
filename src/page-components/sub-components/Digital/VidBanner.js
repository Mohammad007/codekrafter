import React from 'react';
import skyVid from "./sky-vid.mp4";


const VidBanner = () => {
    return (
        <>
            
            <div className='darkbg'>
                <div className='container'>
                    <div className='padd-80 position-relative'>
                        <div className='row'>
                            <div className='col-lg-5'>


                            </div>
                            <div className='col-lg-7'>

                                <div className="small-video-sec pb-0 mb-0">


                                    <video className="small-vid" src={skyVid} type="video/mp4" autoPlay loop muted volume />
                                    <div className='black-patch-1'></div>
                                    <div className='black-patch-2'></div>
                                    {/* <div className="overlay3 "></div> */}

                                </div>
                            </div>
                        </div>
                        <div className='results-text re-result'>
                        <p className="js-hero-title hero__title h1 text-white "><span>Results are <br /> everything. <br />
                                It's that <strong>simple.</strong></span> </p>
                            {/* <h1>Results are <br /> everything. <br />
                                It's that <span className='bold-span'>simple.</span> </h1> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VidBanner