import React from 'react'
import ShadowButton from '../../components/shadow-button'
import WavyLine from '../../components/wavy-line'
import ColoredHeader from '../../assets/images/rent-a-tool/header.svg'
import Locations from '../../assets/images/rent-a-tool/location-mobile.png'
import { Link } from 'react-router-dom'

function RentToolsSection () {
  const LeftContent = () => (
        <div>
            <h3 className={'mt-10 font-semibold md:font-bold text-[26px] md:text-5xl leading-9 md:leading-[58px]' +
                ' text-center md:text-left text-black-100 tracking-[-1.92px] w-full md:w-[463px]'}>
                Rent tools that help your business grow
            </h3>
            <div className={'mx-[15px]'}>
                <p className={'mt-4 l-item'}>
                    Just log in to our platform
                </p>
                <p className={'my-4 l-item'}>
                    Search for the tool you want
                </p>
                <p className={'mb-[38px] l-item'}>
                    Rent the tool and it will be delivered to you.
                </p>
            </div>
            <div className={'flex justify-center md:justify-start'}>
                <div className={'w-[151px]'}>
                    <Link to={'/sign-in'}>
                        <ShadowButton buttonText={'Try it out'}/>
                    </Link>
                </div>
            </div>
        </div>
  )

  const Info = () => (
        <p className={'text-gray-600 text-[18px]'}>
            &quot;Agriculture is our wisest pursuit, because it will in
            the end contribute most to real wealth, good
            morals & happiness&quot;.
        </p>
  )

  return (
        <div>
            <div className={'bg-white relative hidden md:block'}>
                <div className={'flex justify-center gap-x-[106px] mb-[370px]'}>
                    <div className={'w-[463px]'}>
                        <WavyLine/>
                        <LeftContent/>
                    </div>
                    <div className={'w-[530px]'}>
                        <div className={'pt-[26px]'}>
                            <div className={'bg-coloured-banner bg-no-repeat mt-[130px] w-[382px] mx-auto'}>
                                &nbsp;
                            </div>
                            <div className={'bg-white-300 h-[421px] flex items-center justify-center mt-[52px]'}>
                                <div className={'shadow-4xl py-12 px-[42px] w-[530px]'}>
                                    <Info/>
                                </div>
                            </div>
                        </div>
                        <div className={'bg-locations w-[530px] h-full bg-no-repeat absolute top-[539px] left-[600px]'}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'md:hidden bg-white-200'}>
                <div className={'pb-[64px]'}>
                    <div className={'mx-[29px]'}>
                        <WavyLine/>
                    </div>
                    <LeftContent/>
                </div>

                <div className={'bg-white-000 pt-[66px] pb-[99px]'}>
                    <img src={ColoredHeader} className={'mx-auto'} width={325} alt="Header"/>
                </div>
                <div className={'bg-white-300'}>
                    <div className={'py-12 px-[26px]'}>
                        <Info/>
                    </div>
                </div>
               <div>
                   <img className={'w-full -mt-[32px]'} src={Locations} alt="Locations"/>
               </div>
            </div>
        </div>
  )
}

export default RentToolsSection
