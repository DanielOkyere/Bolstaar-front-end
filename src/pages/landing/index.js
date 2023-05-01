import React from 'react'
import HeroBanner from './hero-banner'
import InfoSection from './info-section'
import WhatToExpect from './what-to-expect'
import RentToolsSection from './rent-tools-section'
import Reviews from './reviews'
import Faqs from './faqs'
import CallToAction from './call-to-action'
import Footer from './footer'

function Landing () {
  return (
        <div>
            <HeroBanner/>
            <InfoSection/>
            <WhatToExpect/>
            <RentToolsSection/>
            <Reviews/>
            <Faqs/>
            <CallToAction/>
            <Footer/>
        </div>
  )
}

export default Landing
