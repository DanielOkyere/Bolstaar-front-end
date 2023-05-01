import React from 'react'
import DesktopNav from '../../components/navigation/desktop-nav'
import SearchTools from './search-tools'
import MobileNav from '../../components/navigation/mobile-nav'

function Landing () {
  return (
        <div>
            <MobileNav/>
            <div className={'h-[599px] md:h-screen w-full bg-hero-image bg-cover bg-center bg-no-repeat'}>
                <div className={'text-white-000 max-w-screen-2xl mx-auto'}>
                    <DesktopNav/>
                    <div className={'text-center mx-auto pt-[110px]'}>
                        <h1 className={'font-semibold md:font-bold text-[33px] md:text-[76px] leading-10' +
                            ' md:leading-[95px] mb-[25px] w-[332px] md:w-[792px] mx-auto tracking-[-2.48px]'}>
                            Search and rent tools <br/> the simplest way!
                        </h1>
                        <h6 className={'text-sm md:text-lg leading-[27px] w-[321px] md:w-[559px] mx-auto'}>
                            In need of tools for your agricultural work? Look for further, we got
                            you covered! We delivery the tools at your doorstep.
                        </h6>
                    </div>
                </div>
            </div>
            <div className={'max-w-screen-2xl mx-auto'}>
                <SearchTools/>
            </div>
        </div>
  )
}

export default Landing
