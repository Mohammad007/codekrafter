// import React, { useRef, useState } from 'react';
import myVideo1 from "./dancer.mp4";
import React from 'react';

const DigitalHero = () => {

    // const [isVideoPlaying, setIsVideoPlaying] = useState(true);

    // const videoRef = useRef();

    // const handleVideoPlay = () => {
    //     videoRef.current.play();
    //     setIsVideoPlaying(true);
    // }
    return (
        <>
            <section id="Hero" className="js-hero digital_hero parallax-section relative onscreen">
                <div className="hero_wrapper" >
                    <aside className="hero__background mouse-react">
                        <div className="mouse-distort">
                            <video type="video/mp4" className="js-hero-media hero__video hero__video--background" loop muted volume >
                                <source src={myVideo1} type="video/mp4"></source>
                            </video>

                            {/* <video type="video/mp4" className="js-hero-media hero__video hero__video--background" autoPlay loop muted volume >
                                <source src={myVideo1} type="video/mp4"></source>
                            </video> */}
                            {/* <video src="assets/Images/dancer.mp4" /> */}
                            {/* <video muted="muted" loop="loop" playsinline="" autoplay="autoplay" autobuffer="" className="js-hero-media hero__video hero__video--background" style={{ opacity: "0.9925", transform: "scale(1.0025)" }}>
                                <source src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/dancer_6905da6b12.webm" type="video/webm" />
                                <source src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/dancer_9314ca09f4.mp4" type="video/mp4" />
                            </video> */}
                        </div>
                    </aside>

                    <span className="js-hero-overlay hero__overlay"></span>
                    <div className='hero__container '>
                        <div data-parallax="-100" data-parallaxstart="50" className="hero__header parallax-element">
                            <p className="js-hero-title hero__title h1"><span>Don't just do.</span> <br /> <strong>Achieve.</strong></p>

                        </div>
                    </div>
                    <aside className="js-hero-accent hero__accent cursor-pointerready"></aside>
                </div>
                {/* <video  src="assets/Images/dancer.mp4" type="video/mp4" className="js-hero-media hero__video hero__video--background" autoPlay loop muted volume/> */}
            </section>

            <div className='my-100'>
                <div className='container'>
                    <div className='ligh-sec'>

                        <div className='light-gr-bg'>
                            <div className='li-img-bg'>
                                <img src="assets/Images/hands.webp" width="100%" alt="" />
                            </div>
                        </div>
                        <div className='specialist'>
                            <h1>Specialist</h1>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default DigitalHero