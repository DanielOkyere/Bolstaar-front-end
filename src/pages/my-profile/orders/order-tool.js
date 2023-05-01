import React from 'react'
import Stars from '../../../assets/images/stars.png'
import TlaAddNew from '../../../components/pop-ups/tla-add-new'

// eslint-disable-next-line react/prop-types
function OrderItem ({ rate }) {
  return (
        <div>
            <div className={'text-sm border-b pb-[18px]'}>
                <h3 className={'text-gray-700'}>Knapsack sprayer
                    <span className={'text-gray-500 ml-2 text-xs'}>22nd  - 25th Jan. 2023</span>
                </h3>
                <h3 className={'text-gray-500 py-2'}>GHC 332.99</h3>
                {
                    rate
                      ? <TlaAddNew link={'/orders/rate'}>
                            <h3 className={'text-sm text-gray-500 underline underline-offset-4'}>
                                Rate tool
                            </h3>
                        </TlaAddNew>
                      : <img src={Stars} alt={'Stars'}/>
                }
            </div>
        </div>
  )
}

export default OrderItem
