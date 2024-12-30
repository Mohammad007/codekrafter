import React from 'react';
import myVideo from "./about-bg.mp4";
// import VideoPlayer from "react-background-video-player";
import {DefaultPlayer as Video} from 'react-html5video'

const AboutBanner = () => {
  return (
    <>
      <section className="video-bg">

        <div className="rel-vid rel-abt-vid pb-0 mb-0">

          {/* <video   type="video/mp4" className="video" loop muted volume autoPlay/>
           
          
          <video /> */}
          {/* <Video id="videoBg"
        className="video"
        src={myVideo}
        autoPlay={true}
        muted={true}
        loop={true}
      /> */}
      <Video id="videoBg"
        className="video" controls autoPlay loop muted>
        <source src={myVideo}  type="video/mp4"/>
    </Video>
          <div className="overlay3 "></div>
          {/* <h1 className="info" style={{color:"#ffffff"}}>About Us</h1> */}
        </div>

      </section>
    </>
  )
}

export default AboutBanner