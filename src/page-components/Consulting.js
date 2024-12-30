import React from 'react';
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import ConsultingBanner from './sub-components/Consulting/ConsultingBanner';
import ConsultingMain from './sub-components/Consulting/ConsultingMain';
import MegaMenu from '../main-components/MegaMenu';


const Consulting = () => {
  return (
    <>
     <MegaMenu/>
    {/* <Header/> */}
    <ConsultingBanner/>
    <ConsultingMain/>
    <Footer/>
    </>
  )
}

export default Consulting