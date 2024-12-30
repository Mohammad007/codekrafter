import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BaseUrl } from '../BaseUrl';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import { addMobileappsData, addMobileappsliderData, addMobileappsliderdevData, addMobilecategoriesData, addMobileintrosData, addMobileprosData, addSaasclientsData, addSettingsData } from '../Redux/SliceData/SliceData';
import AppFrameBanner from './sub-components/AppFrame/AppFrameBanner';
import AppFrameMain from './sub-components/AppFrame/AppFrameMain';
import AppHero from './sub-components/AppFrame/AppHero';
import MegaMenu from '../main-components/MegaMenu';

const AppFrame = () => {
  const dispatch = useDispatch();
  useEffect(() => {

    ;(async () => {

      // settings api
      const settings = await fetch(`${BaseUrl}/settings`);
      const settingsJson = await settings.json();
      dispatch(addSettingsData(settingsJson.settings));

      // mobileapps api
      const mobileapps = await fetch(`${BaseUrl}/mobileapp`);
      const mobileappsJson = await mobileapps.json();
      dispatch(addMobileappsData(mobileappsJson.mobileapp));

      // mobileappslider api
      const mobileappslider = await fetch(`${BaseUrl}/mobileappslider`);
      const mobileappsliderJson = await mobileappslider.json();
      dispatch(addMobileappsliderData(mobileappsliderJson.mobileappslider));

      // mobilecategories api
      const mobilecategories = await fetch(`${BaseUrl}/mobilecategories`);
      const mobilecategoriesJson = await mobilecategories.json();
      dispatch(addMobilecategoriesData(mobilecategoriesJson.mobilecategories));

      // mobilepros api
      const mobilepros = await fetch(`${BaseUrl}/mobilepros`);
      const mobileprosJson = await mobilepros.json();
      dispatch(addMobileprosData(mobileprosJson.mobilepros));

      // saasclients api
      const saasclients = await fetch(`${BaseUrl}/saasclients`);
      const saasclientsJson = await saasclients.json();
      dispatch(addSaasclientsData(saasclientsJson.saasclients));
      
    })();

  }, []);
  return (
    <>
    <section className='app-hero-area'>
    <MegaMenu/>
{/* <Header/> */}
</section>
<AppHero/>
<section className="showcase-to mt--140">
<AppFrameBanner/>
</section>
<section className='app-area-col'>
<AppFrameMain/>
<Footer/>
</section>
    </>
  )
}

export default AppFrame