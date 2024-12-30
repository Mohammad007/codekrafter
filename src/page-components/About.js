import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import { addAboutadsData, addAboutfirmsData, addAboutteamData, addSettingsData } from '../Redux/SliceData/SliceData';
import AboutBanner from './sub-components/About/AboutBanner';
import AboutMain from './sub-components/About/AboutMain';
import { BaseUrl } from '../BaseUrl/index';
import MegaMenu from '../main-components/MegaMenu';


const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {

    ;(async () => {
      
      // settings api
      const settings = await fetch(`${BaseUrl}/settings`);
      const settingsJson = await settings.json();
      dispatch(addSettingsData(settingsJson.settings));

      // aboutfirms api
      const aboutfirms = await fetch(`${BaseUrl}/aboutfirms`);
      const aboutfirmsJson = await aboutfirms.json();
      dispatch(addAboutfirmsData(aboutfirmsJson.aboutfirm));

      // aboutteam api
      const aboutteam = await fetch(`${BaseUrl}/aboutteam`);
      const aboutteamJson = await aboutteam.json();
      dispatch(addAboutteamData(aboutteamJson.aboutteam));

      // aboutads api
      const aboutads = await fetch(`${BaseUrl}/aboutads`);
      const aboutadsJson = await aboutads.json();
      dispatch(addAboutadsData(aboutadsJson.aboutads));
      
    })();

  }, []);
  return (
    <>
     <MegaMenu/>
    {/* <Header/> */}
<AboutBanner/>
<AboutMain/>
<Footer/>
</>
  )
}

export default About