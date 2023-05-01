import React from 'react'
import PropTypes from 'prop-types'
import { FiClock } from 'react-icons/fi'
import { RiMapPinLine } from 'react-icons/ri'
import { GoPrimitiveDot } from 'react-icons/go'

// eslint-disable-next-line react/prop-types
const Tag = ({ icon, title }) => (
    <span className={'flex items-center'}>{icon}&nbsp;{title}</span>
)

function JobItem ({ item }) {
  return (
        <div className={'pt-4 pb-12 text-gray-500'}>
            <h6 className={'text-[18px] font-semibold mb-2 text-gray-900 flex flex-col md:flex-row'}>
                {item.name} &nbsp;
                <span className={'rounded-[16px] w-fit py-px px-2.5 text-sm font-normal flex items-center' +
                    ' text-primary-500 bg-primary-50'}>
                    <GoPrimitiveDot/>{item.tag}
                </span>
            </h6>
            <p className={'text-sm md:text-base mb-6'}>
                {item.price}
            </p>
            <div className={'flex justify-start gap-6'}>
                <Tag icon={<RiMapPinLine/>} title={'Remote'}/>
                <Tag icon={<FiClock/>} title={'Full-time'}/>
            </div>
        </div>

  )
}

JobItem.propTypes = {
  item: PropTypes.object.isRequired
}
export default JobItem
