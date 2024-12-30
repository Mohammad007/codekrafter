import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BaseUrl } from "../BaseUrl";
import Footer from "../main-components/Footer";
import {
  addSaasclientsData,
  addWebsitecategoriesData,
  addWebsitedevelopmentData,
  addWebsiteprocessData,
  addWebsitesliderData,
} from "../Redux/SliceData/SliceData";
import WebFrameMain from "./sub-components/WebFrame/WebFrameMain";
import WebsiteBanner from "./sub-components/WebFrame/WebsiteBanner";
import MegaMenu from "../main-components/MegaMenu";
import Loading from "../component/Loading";

const WebFrame = () => {
  const dispatch = useDispatch();
  const [webhome, setWebHome] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // websitedevelopment api
      const websitedevelopment = await fetch(`${BaseUrl}/websitedevelopment`);
      const websitedevelopmentJson = await websitedevelopment.json();
      dispatch(
        addWebsitedevelopmentData(websitedevelopmentJson.websitedevelopment)
      );

      // websiteslider api
      const websiteslider = await fetch(`${BaseUrl}/websiteslider`);
      const websitesliderJson = await websiteslider.json();
      dispatch(addWebsitesliderData(websitesliderJson.websiteslider));

      // websitecategories api
      const websitecategories = await fetch(`${BaseUrl}/websitecategories`);
      const websitecategoriesJson = await websitecategories.json();
      dispatch(
        addWebsitecategoriesData(websitecategoriesJson.websitecategories)
      );

      // websiteprocess api
      const websiteprocess = await fetch(`${BaseUrl}/websiteprocess`);
      const websiteprocessJson = await websiteprocess.json();
      dispatch(addWebsiteprocessData(websiteprocessJson.websiteprocess));

      // saasclients api
      const saasclients = await fetch(`${BaseUrl}/saasclients`);
      const saasclientsJson = await saasclients.json();
      dispatch(addSaasclientsData(saasclientsJson.saasclients));
    })();
  }, []);

  useEffect(() => {
    fetchAPI()
  },[])

  const fetchAPI = async () => {
    try {
      const webhome = await fetch(`${BaseUrl}/getWebHomeApi`);
      const webhomeJson = await webhome.json();
      setWebHome(webhomeJson?.webhomelist)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <section className="web-hero-area">
        <MegaMenu />
      </section>
      <WebsiteBanner webdata={webhome} />
      <WebFrameMain />
      <Footer />
    </>
  );
};

export default WebFrame;
