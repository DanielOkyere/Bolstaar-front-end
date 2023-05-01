import React from 'react'
import Stars from '../../../../assets/images/stars.png'
import Boot from '../../../../assets/images/boot.png'

function Reviews () {
  const items = [
    {
      content: 'All thanks to bolstaar for this amazing opportunity to rent modern tools at affordable rates. This' +
          ' tool works like magic',
      name: 'Henry Opoku Boateng',
      date: 'January 31, 2023'
    },
    {
      content: 'All thanks to bolstaar for this amazing opportunity to rent modern tools at affordable rates. This' +
          ' tool works like magic',
      name: 'Henry Opoku Boateng',
      date: 'January 31, 2023'
    },
    {
      content: 'All thanks to bolstaar for this amazing opportunity to rent modern tools at affordable rates. This' +
          ' tool works like magic',
      name: 'Henry Opoku Boateng',
      date: 'January 31, 2023'
    }
  ]

  return (
      <div>
        {
          items.map((item, index) => (
              <div key={index}>
                <div className={'flex justify-between gap-x-[26px] mb-6'}>
                  <div className={'min-w-[40px]'}>
                    <img className={'rounded-full h-10 w-10'} src={Boot} alt="Boot"/>
                  </div>
                  <div>
                    <img src={Stars} alt="Stars"/>
                    <p className={'mt-4'}>{item.content}</p>
                    <div className={'text-black-100 flex gap-x-1.5 mt-3.5'}>
                      <span className={'text-sm font-bold'}>{item.name}</span>
                      <span>{`at ${item.date}`}</span>
                    </div>
                  </div>
                </div>
              </div>
          ))
        }
        <div className={'text-center'}>
          <h3 className={'text-base text-black-100 underline'}>View more reviews...</h3>
        </div>
      </div>
  )
}

export default Reviews
