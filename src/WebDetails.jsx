import React, { useState } from "react";
import Page1 from "./component/page1";
import Header from "./main-components/MegaMenu";
import Footer from "./main-components/Footer";
import Slide2 from "./component/slider3";
import Tabsection from "./component/tab-section";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { BaseUrl, ImageURL } from "./BaseUrl";
import { useEffect } from "react";
import Loading from "./component/Loading";

const WebDetails = () => {
  const [index, setIndex] = useState(0);
  const [webHomeDetail, setWebHomeDetail] = useState(null);
  const [sliders, setSliders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { name, id } = useParams();

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    FetchAPI();
  }, [name,id]);

  const FetchAPI = async () => {
    try {
      if(name == "websitehome"){
        const webhomeData = await fetch(`${BaseUrl}/getWebHomeByIdApi/${id}`);
        const webhomeDataJson = await webhomeData.json();
        setWebHomeDetail(webhomeDataJson?.webhomes);
        setSliders(JSON.parse(webhomeDataJson?.webhomes?.sliders))
        setIsLoading(false);
      } else if(name == "sass"){
        const webhomeData = await fetch(`${BaseUrl}/getSassWebByIdApi/${id}`);
        const webhomeDataJson = await webhomeData.json();
        setWebHomeDetail(webhomeDataJson?.sass);
        setSliders(JSON.parse(webhomeDataJson?.sass?.sliders))
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(name);
  console.log(id);


  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <div className="p-header">
        <div className="p-nav">
          <div className="p-logo">
            <h2>{webHomeDetail?.name}</h2>
          </div>
          <ul style={{ marginRight: "25px" }}>
            <li>
              <div className="contact-text my-auto py-80">
                <Link to="" className=" btn-new">
                  Get In Touch <i className="fa-solid fa-angle-right ms-1"></i>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-6">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {sliders?.map((item, index) => 
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  style={{ height: "400px" }}
                  src={`${ImageURL}/${item}`}
                  alt={`${item}`}
                />
              </Carousel.Item>
              )}
            </Carousel>
          </div>
          <div className="col-md-6">
            <ReactMarkdown>{webHomeDetail?.content_one || ""}</ReactMarkdown>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-7">
            <div>
              <ReactMarkdown>{webHomeDetail?.content_two || ""}</ReactMarkdown>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <ReactMarkdown>
                {webHomeDetail?.content_three || ""}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      <Tabsection />
      <Slide2 />
      <Footer />
    </>
  );
};

export default WebDetails;
