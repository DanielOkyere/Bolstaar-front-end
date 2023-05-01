import React from 'react'
import Categories from './categories'
import Product from '../../../../components/product'
import Boot from '../../../../assets/images/boot.png'

function Index () {
  const items = [
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Wheel barrow',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Water Pump',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Water Pump',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    }
  ]

  return (
        <div>
            <div>
                <h3 className={'text-black-100 text-xl mb-6 mt-6'}>You may also like these</h3>
            </div>
            <div className={'overflow-auto'}>
                <Categories/>
            </div>
            <div className={'w-[375px] md:w-[734px] flex flex-wrap gap-x-1.5 md:gap-x-8 gap-y-6 mt-6'}>
                {
                    items.map((item, index) => (
                        <Product item={item} key={index}/>
                    ))
                }
            </div>
        </div>
  )
}

export default Index
