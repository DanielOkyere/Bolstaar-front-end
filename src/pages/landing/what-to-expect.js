import React from 'react'
import SideImage from '../../assets/images/what-to-expect/side-image.svg'
import Clock from '../../assets/images/what-to-expect/clock.svg'
import Finance from '../../assets/images/what-to-expect/finance.svg'
import Laptop from '../../assets/images/what-to-expect/laptop.svg'
import Secured from '../../assets/images/what-to-expect/secured.svg'
import SideImageMobile from '../../assets/images/what-to-expect/side-image-mobile.png'
import PropTypes from 'prop-types'

/**
 *
 * @param icon
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
const InfoItem = ({ title, img }) => (
    <div className={'flex px-[5px] md:px-7 w-[158px] md:w-[271px] bg-white-000 py-[13px] md:py-[35px] items-center' +
        ' border gap-x-2 md:gap-x-5'}>
        <img src={img} alt={'Clock'} className={'w-[40px] md:w-[88px]'}/>
        <div>
            <h3 className={'text-violet-100 text-base md:text-lg font-bold leading-[25px]'}>{title}</h3>
        </div>
    </div>
)

InfoItem.propTypes = {
  title: 'string',
  img: PropTypes.any
}

function WhatToExpect () {
  const Items = () => (
      <>
          <InfoItem img={Clock} title={'Free to Get Started'}/>
          <InfoItem img={Finance} title={'Affordable Prices'}/>
          <InfoItem img={Laptop} title={'Delivery Included'}/>
          <InfoItem img={Secured} title={'Highly Secured'}/>
      </>
  )

  const SubText = () => (
        <p className={'text-gray-600 text-[13px] md:text-[18px] leading-[20px] md:leading-[29px] mt-0 md:mt-[33px]'}>
            Our team lives by these standards and we are keen on delivering to our clients satisfaction
        </p>
  )

  const Title = () => (
        <h3 className={'font-bold text-[20px] md:text-5xl leading-[58px] text-black-100'}>
            What to expect
        </h3>
  )

  return (
        <div className={'bg-white-200'}>
            <div className={'hidden md:block max-w-screen-2xl mx-auto'}>
                <div className={'relative bg-white-000'}>
                    <div className={'flex justify-center gap-[42px] mb-[23px] bg-white-000'}>
                        <div className={'min-w-[471px]'}>
                            <img src={SideImage} alt="Happy Client"
                                 className={'left-[80px] absolute min-w-[471px] min-h-[640px]'}/>
                            <h6 className={'absolute text-[18px] font-medium text-gray-600 top-[70px] left-[160px]'}>
                                Join Our Happy Clients
                            </h6>
                        </div>
                        <div className={'w-[566px]'}>
                            <Title/>
                            <SubText/>
                        </div>
                    </div>
                    <div className={'flex justify-center gap-[42px] bg-white-200 h-[365px] mb-[365px]'}>
                        <div className={'w-[471px]'}>
                        </div>
                        <div className={'w-[566px] mt-[35px]'}>
                            <div className={'flex flex-wrap gap-[23px]'}>
                                <Items/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'md:hidden relative'}>
                <div>
                    <h6 className={'absolute text-[18px] font-medium text-gray-600 top-[40px] left-[25px]'}>
                        Join Our Happy Clients
                    </h6>
                    <img src={SideImageMobile} alt="Happy Client" className={'border'}/>
                </div>
                <div className={'bg-white-200'}>
                    <div className={'mx-[25px] -mt-12 pt-[18px]'}>
                        <Title/>
                        <div className={'mb-9'}>
                            <SubText/>
                        </div>
                    </div>
                    <div className={'flex flex-wrap justify-between gap-2 mx-[25px] pb-[73px]'}>
                        <Items/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default WhatToExpect
