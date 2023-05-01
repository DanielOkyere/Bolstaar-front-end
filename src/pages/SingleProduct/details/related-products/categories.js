import React from 'react'

function Categories () {
  const items = ['All', 'Boots', 'Cutlasses', 'Chainsaws', 'Tents', 'Pumps', 'Hoes', 'Goggles', 'Threshers']
  return (
      <div className={'flex gap-4'}>
        {
          items.map((item, index) => (
              <div key={index} className={'bg-neutral-100 text-neutral-700 rounded-2xl text-xs px-3 py-[5px]'}>
                {item}
              </div>
          ))
        }
      </div>
  )
}

export default Categories
