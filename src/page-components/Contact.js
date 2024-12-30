import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BaseUrl } from '../BaseUrl'
import Footer from '../main-components/Footer'
import Header from '../main-components/Header'
import { addSettingsData } from '../Redux/SliceData/SliceData'
import ContactBanner from './sub-components/Contact/ContactBanner'
import ContactMain from './sub-components/Contact/ContactMain'
import MegaMenu from '../main-components/MegaMenu'

const Contact = () => {
  const dispatch = useDispatch();
  useEffect(() => {

    ;(async () => {
      // settings api
      const settings = await fetch(`${BaseUrl}/settings`);
      const settingsJson = await settings.json();
      dispatch(addSettingsData(settingsJson.settings));

    })();

  }, []);
  return (
    <>
     <MegaMenu/>
    {/* <Header/> */}
    <ContactBanner/>
    <ContactMain/>
    <Footer/>
    </>
  )
}

export default Contact