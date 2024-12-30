import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaximg from './Parallaximg';
// import digital from 'assets/Images/pexels-roberto-nickson-3082341.jpg'

const DigitalBanner = () => {
  return (
    <>
    <ParallaxProvider>
                <Parallaximg imgsrc="assets/Images/digital-bg.jpg" opacity="0.5">
    <section className="contact-bg parallax">

        <div className="social-bg parallax-window">
            <h1 className="info2 text-center" style={{color: "#ffffff"}}>Don't just do. <br/>
Achieve.</h1>
{/* We know the pulse of digital marketing because we create digital product. */}
        </div>
    </section>
    </Parallaximg>

</ParallaxProvider>
    </>
  )
}

export default DigitalBanner