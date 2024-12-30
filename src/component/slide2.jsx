import React, { useState } from "react";
import { Tabs, Tab, Accordion, Card } from "react-bootstrap";
import './slide2.css'
// Import Swiper styles
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
function Slide2() {
  // const [activeTab, setActiveTab ,setActiveIndex] = useState("tabs-1");

  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  // };

  // const handleAccordionClick = (index) => {
  //   setActiveIndex(index);
  // };

  return (
    <>




 <div className="card">
  <img src={"image.jpg"} alt="Image" className="card-img"/>
    
  <div className="card-content">
    <h2 className="card-title">Card Title</h2>
    <p className="card-text">This is the card content. You can add any text or HTML here.</p>
    <a href="#" className="card-btn">Learn More</a>
  </div>
</div>

    </>
    );
}
export default Slide2;