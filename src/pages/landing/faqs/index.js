import React from 'react'
import FaqItems from './faq-items'

function Index () {
  return (
        <div className={'bg-white mb-[73px] md:mb-[235px]'}>
            <div className={'w-[104px] mx-auto bg-success-200 rounded-[50px] h-10 flex justify-center' +
                ' items-center uppercase text-success-100 text-sm font-medium'}>
                Faqs
            </div>

            <h3 className={'text-[20px] md:text-5xl font-semibold md:font-bold leading-7 md:leading-[58px]' +
                ' text-black-100 text-center mt-[26px] mb-[54px] md:mb-[87px] tracking-[-1.92px]'}>
                Frequently Asked <br/> Questions
            </h3>
            <div className={'mx-[18px] md:mx-auto md:w-[870px]'}>
                <FaqItems/>
            </div>
        </div>
  )
}

export default Index
