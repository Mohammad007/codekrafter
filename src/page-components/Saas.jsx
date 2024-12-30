import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BaseUrl } from "../BaseUrl";
import Footer from "../main-components/Footer";
import {
  addSaascategoriesData,
  addSaasclientsData,
  addSaasprocessData,
  addSaasservicesData,
  addSaasslidersData,
  addSettingsData,
} from "../Redux/SliceData/SliceData";
import SaasHero from "./sub-components/Saas/SaasHero";
import SaasMain from "./sub-components/Saas/SaasMain";
import MegaMenu from "../main-components/MegaMenu";
import Loading from "../component/Loading";

const Saas = () => {
  const dispatch = useDispatch();
  const [websass, setWebSass] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      // settings api
      const settings = await fetch(`${BaseUrl}/settings`);
      const settingsJson = await settings.json();
      dispatch(addSettingsData(settingsJson.settings));

      // saasservices api
      const saasservices = await fetch(`${BaseUrl}/saasservices`);
      const saasservicesJson = await saasservices.json();
      dispatch(addSaasservicesData(saasservicesJson.saasservices));

      // saassliders api
      const saassliders = await fetch(`${BaseUrl}/saassliders`);
      const saasslidersJson = await saassliders.json();
      dispatch(addSaasslidersData(saasslidersJson.saassliders));

      // saascategories api
      const saascategories = await fetch(`${BaseUrl}/saascategories`);
      const saascategoriesJson = await saascategories.json();
      dispatch(addSaascategoriesData(saascategoriesJson.saascategories));

      // saasclients api
      const saasclients = await fetch(`${BaseUrl}/saasclients`);
      const saasclientsJson = await saasclients.json();
      dispatch(addSaasclientsData(saasclientsJson.saasclients));

      // saasprocess api
      const saasprocess = await fetch(`${BaseUrl}/saasprocess`);
      const saasprocessJson = await saasprocess.json();
      dispatch(addSaasprocessData(saasprocessJson.saasprocess));
    })();
  }, []);

  useEffect(() => {
    fetchAPI()
  },[])

  const fetchAPI = async () => {
    try {
      const websass = await fetch(`${BaseUrl}/getSassWebApi`);
      const websassJson = await websass.json();
      setWebSass(websassJson?.sasslist)
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
      <SaasHero websass={websass} />
      <SaasMain />
      <Footer />
    </>
  );
};

export default Saas;
