import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BaseUrl } from "../BaseUrl";
import Footer from "../main-components/Footer";
import {
  addHomeapproachmodelsData,
  addHomeclientsData,
  addHomeclientslogosData,
  addHomesliderData,
  addMobileappsData,
  addMobileappsliderData,
  addOurapproachesData,
  addSettingsData,
} from "../Redux/SliceData/SliceData";
import HomeBanner2 from "./sub-components/Home/HomeBanner2";
import HomeMain3 from "./sub-components/Home/HomeMain3";
import HomeMain1 from "./sub-components/Home/HomeMain1";
import HomeMain2 from "./sub-components/Home/HomeMain2";
import MegaMenu from "../main-components/MegaMenu";
import Loading from "../component/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // settings api
        const settings = await fetch(`${BaseUrl}/settings`);
        const settingsJson = await settings.json();
        dispatch(addSettingsData(settingsJson.settings));

        // homeslider api
        const homeslider = await fetch(`${BaseUrl}/homeslider`);
        const homesliderJson = await homeslider.json();
        dispatch(addHomesliderData(homesliderJson.homeslider));

        // mobileapps api
        const mobileapps = await fetch(`${BaseUrl}/mobileapp`);
        const mobileappsJson = await mobileapps.json();
        dispatch(addMobileappsData(mobileappsJson.mobileapp));

        // mobileappslider api
        const mobileappslider = await fetch(`${BaseUrl}/mobileappslider`);
        const mobileappsliderJson = await mobileappslider.json();
        dispatch(addMobileappsliderData(mobileappsliderJson.mobileappslider));

        // ourapproaches api
        const ourapproaches = await fetch(`${BaseUrl}/ourapproaches`);
        const ourapproachesJson = await ourapproaches.json();
        dispatch(addOurapproachesData(ourapproachesJson.ourapproaches));

        // addHomeapproachmodelsData api
        const homeapproachmodels = await fetch(`${BaseUrl}/homeapproachmodels`);
        const homeapproachmodelsJson = await homeapproachmodels.json();
        dispatch(
          addHomeapproachmodelsData(homeapproachmodelsJson.homeapproachmodels)
        );

        // addHomeclientsData api
        const homeclients = await fetch(`${BaseUrl}/homeclients`);
        const homeclientsJson = await homeclients.json();
        dispatch(addHomeclientsData(homeclientsJson.homeclients));

        // homeclientslogos api
        const homeclientslogos = await fetch(`${BaseUrl}/homeclientslogo`);
        const homeclientslogosJson = await homeclientslogos.json();
        dispatch(addHomeclientslogosData(homeclientslogosJson.homeclientslogo));
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    })();
  }, []);
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <MegaMenu />
      <HomeBanner2 />
      <HomeMain1 />
      <HomeMain3 />
      <HomeMain2 />
      <Footer />
    </>
  );
};

export default Home;
