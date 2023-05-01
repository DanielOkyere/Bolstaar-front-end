import React from 'react'
import PropTypes from 'prop-types'
import Star from '../assets/images/star.png'

function Product ({ product }) {
  const item = product.attributes
  return (
        <div className={'min-h-[249px] w-[160px] md:w-[223px] shadow-5xl rounded-2xl border'}>
            <div>
                <img src={`https://bolstaar-new-admin.herokuapp.com/api${item.images?.data?.[0].attributes.url}`}
                     className={'w-[160px] md:w-[223px] h-[127px] md:h-[159px] rounded-t-2xl'}
                     alt={item.name}/>
            </div>
            <div className={'px-4 py-3'}>
                <h6>{item.name}</h6>
                <div className={'flex justify-between'}>
                    <h6 className={'flex flex-wrap gap-x-2 items-center text-sm md:text-base font-semibold'}>
                        {item.price_per_day}
                        <span className={'text-gray-500 text-xs'}>per day</span>
                    </h6>
                    <span className={'text-sm text-gray-600 flex items-center justify-center font-medium'}>
                        <img alt={'Star'} className={'mr-1.5'} src={Star}/>
                        ({item.rating})
                    </span>
                </div>
            </div>
        </div>

  )
}

Product.propTypes = {
  product: PropTypes.object.isRequired
}

export default Product
