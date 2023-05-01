import React from 'react'
import WavyLine from '../../components/wavy-line'

function InfoSection () {
  return (
        <div className={'bg-white'}>
            <div className={'flex justify-center mt-[57px] md:mt-[130px] mb-[31px] md:mb-[41px]'}>
                <WavyLine/>
            </div>
            <div className={'text-center'}>
                <h3 className={'font-semibold md:font-bold text-[20px] md:text-[37px] leading-[30px]' +
                    ' md:leading-[50px] tracking-[-1.92px] text-black-100 max-w-[601px] mx-8 md:mx-auto'}>
                    Distance is not a barrier. We get your equipment delivered to you easily .
                </h3>
                <p className={'text-gray-600 text-sm md:text-[18px] mt-3 md:mt-7 mb-9 md:mb-[190px]' +
                    ' max-w-[600px] mx-8 md:mx-auto'}>
                    Get the best tools for your farm project to increase yield up to 100%
                </p>
            </div>
        </div>
  )
}

export default InfoSection
