import React from 'react'
import { CgFacebook } from 'react-icons/cg'
import { RiInstagramFill } from 'react-icons/ri'
import { BsTwitter } from 'react-icons/bs'

function ContactUs () {
  return (
        <div className={'text-white-000'}>
            <h6 className={'text-base font-bold mb-7'}>
                Contact Us
            </h6>
            <div className={'text-sm text-white-400'}>
                <p>Address: Bolstaar’s address here</p>
                <p className={'my-4'}>Phone: +2332XXXXXXXXX</p>
                <p>Email: info@gmail.com</p>
            </div>
            <div className={'flex gap-[30px] text-[20px] mt-8 mb-[114px]'}>
                <CgFacebook/>
                <RiInstagramFill/>
                <BsTwitter/>
            </div>
        </div>
  )
}

export default ContactUs
