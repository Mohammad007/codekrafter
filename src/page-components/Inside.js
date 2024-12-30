import React from 'react'
import Footer from '../main-components/Footer'
import Header from '../main-components/Header'
import InsideBanner from './sub-components/Inside/InsideBanner'
import InsideMain from './sub-components/Inside/InsideMain'
import MegaMenu from '../main-components/MegaMenu'

const Inside = () => {
  return (
    <>
     <MegaMenu/>
    {/* <Header/> */}
    <InsideBanner/>
    <InsideMain/>
    <Footer/>
    </>
  )
}

export default Inside