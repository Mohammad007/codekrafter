import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Parallaximg from './Parallaximg';


const ContactBanner = () => {
  return (
    <>
      <ParallaxProvider>
                <Parallaximg imgsrc="assets/Images/door-knocker.jpg" opacity="0.5">
     <section className="contact-bg parallax">

<div className="social-bg parallax-window">
    <h1 className="info" style={{color: "#ffffff"}}>Contact Us</h1>
</div>
</section>
</Parallaximg>

</ParallaxProvider>
    </>
  )
}

export default ContactBanner