import React, { useEffect } from 'react';
import Header from '../main-components/Header';
import Footer from '../main-components/Footer'
// import DigitalBanner from './sub-components/Digital/DigitalBanner';
import DigitalMain from './sub-components/Digital/DigitalMain';
import { useDispatch } from 'react-redux';
import { BaseUrl } from '../BaseUrl';
import { addDigitalcategoriesData, addSettingsData } from '../Redux/SliceData/SliceData';
import DigitalHero from './sub-components/Digital/DigitalHero';
import MegaMenu from '../main-components/MegaMenu';

const Digital = () => {
  const dispatch = useDispatch();
  useEffect(() => {

    ;(async () => {

            // settings api
            const settings = await fetch(`${BaseUrl}/settings`);
            const settingsJson = await settings.json();
            dispatch(addSettingsData(settingsJson.settings));

      // digitalcategories api
      const digitalcategories = await fetch(`${BaseUrl}/digitalcategories`);
      const digitalcategoriesJson = await digitalcategories.json();
      dispatch(addDigitalcategoriesData(digitalcategoriesJson.digitalcategories));
      
    })();

  }, []);
  return (
    <>
     <MegaMenu/>
    {/* <Header/> */}
    {/* <DigitalBanner/> */}
    <DigitalHero/>
    <DigitalMain/>
    <Footer/>
    </>
  )
}

export default Digital