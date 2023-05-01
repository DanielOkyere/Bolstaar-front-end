import React from 'react'
import ContactUs from './contact-us'
import Company from './company'
import Updates from './updates'

function Footer () {
  return (
        <div className={'bg-black-200 py-14'}>
            <div className={'max-w-screen-2xl mx-auto'}>
                <div className={'flex flex-wrap items-start justify-between md:w-[1175px] mx-[34px] md:mx-auto' +
                    ' gap-y-[55px]'}>
                    <ContactUs/>
                    <Company/>
                    <Updates/>
                </div>

                <div className={'md:w-[1175px] mx-[34px] md:mx-auto text-white-000'}>
                    <p className={'text-xs mt-[79px] md:mt-0'}>
                        Copyright © All rights Reserved
                    </p>
                </div>
            </div>
        </div>
  )
}

export default Footer
