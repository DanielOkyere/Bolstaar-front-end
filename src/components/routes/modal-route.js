import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CompleteCheckout } from '../../pages/SingleProduct/complete-checkout'
import RateTool from '../../pages/my-profile/orders/rate-tool'

export const ModalRoute = () => {
  return (
        <Routes>
            <Route path={'/categories/:item/checkout'}>
                <Route element={<CompleteCheckout/>} path={'complete'}/>
            </Route>
            <Route path={'/orders'}>
                <Route path={'rate'} element={<RateTool/>}/>
            </Route>
        </Routes>
  )
}
