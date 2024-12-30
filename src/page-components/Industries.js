import React from 'react'
import Footer from '../main-components/Footer';
import Header from '../main-components/Header';
import IndustriesBanner from './sub-components/Industries/IndustriesBanner';
import IndustriesMain from './sub-components/Industries/IndustriesMain';
import MegaMenu from '../main-components/MegaMenu';




const Industries = () => {
  return (
    <>
     <MegaMenu/>
    {/* <Header/> */}
    <IndustriesBanner/>
    <IndustriesMain/>
    <Footer/>
    </>
  )
}

export default Industries