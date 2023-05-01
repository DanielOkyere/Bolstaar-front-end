import React from 'react'
import OrderItem from './order-tool'
import { Link } from 'react-router-dom'

function Orders () {
  return (
        <div>
            <div className={'flex flex-col gap-[22px]'}>
                <OrderItem/>
                <OrderItem/>
                <OrderItem rate/>
                <OrderItem rate/>
            </div>

            <div className={'mt-4 mx-auto w-fit'}>
                <Link to={'orders'} className={'text-sm text-success-100 underline underline-offset-4'}>
                    View More
                </Link>
            </div>
        </div>
  )
}

export default Orders
