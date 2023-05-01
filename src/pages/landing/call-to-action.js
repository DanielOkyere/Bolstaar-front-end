import React from 'react'
import { Button } from 'antd'
import { FiChevronRight } from 'react-icons/fi'

function CallToAction () {
  return (
        <div className={'bg-white mb-[133px] flex flex-wrap items-center justify-center md:justify-between w-full' +
            ' md:w-[900px] mx-auto text-center md:text-left'}>
            <div className={'w-[253px] md:w-[461px]'}>
                <h3 className={'text-[20px] md:text-[40px] font-semibold md:font-bold leading-[58px] text-black-100' +
                    ' mb-2 md:mb-7 tracking-[-1.92px]'}>
                    Still Have Questions
                </h3>
                <p className={'text-gray-500'}>
                    Can’t find the answer you’re looking for? Please chat to our
                    friendly team.
                </p>
            </div>
            <div className={'mt-5 md:mt-0'}>
                <Button className={'rounded-[50px] bg-success-100 text-white-000 border-0 hover:!text-white-000' +
                    ' h-[60px] w-[220px] text-[13px] flex items-center gap-4 justify-center'}>
                    Send a chat now <FiChevronRight className={'text-lg'}/>
                </Button>
            </div>
        </div>
  )
}

export default CallToAction
