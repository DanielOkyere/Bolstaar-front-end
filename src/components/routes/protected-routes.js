import React from 'react'
import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { ModalRoute } from './modal-route'
import Landing from '../../pages/landing'
import SignIn from '../../pages/auth/sign-in'
import Register from '../../pages/auth/register'
import ForgotPassword from '../../pages/auth/forgot-password'
import ResetPassword from '../../pages/auth/reset-password'
import SearchResultLayout from '../../pages/SingleProduct/search-result-layout'
import SingleProduct from '../../pages/SingleProduct'
import Checkout from '../../pages/checkout'
import NoResults from '../../pages/SingleProduct/no-results'
import ProfileLayout from '../../pages/my-profile/profile-layout'
import General from '../../pages/my-profile/general'
import ChangePassword from '../../pages/my-profile/change-password'
import Orders from '../../pages/my-profile/orders'
import Products from '../../pages/products'
import SearchResults from '../../pages/products/search-results'
import Careers from '../../pages/careers'

export const ProtectedRoutes = () => {
  const location = useLocation()
  const background = location.state && location.state.background

  return (
        <>
            <Routes location={background || location}>
                <Route exact element={<Landing/>} path="/"/>
                <Route exact element={<SignIn/>} path="/sign-in"/>
                <Route element={<Register/>} path={'/sign-up'}/>
                <Route element={<ForgotPassword/>} path={'/forgot-password'}/>
                <Route element={<ResetPassword/>} path={'/reset-password'}/>
                <Route path={'/products'} element={<SearchResultLayout/>}>
                    <Route element={<Products/>} index/>
                    <Route element={<SingleProduct/>} path={':item'}/>
                    <Route element={<SearchResults/>} path={'search-results'}/>
                    <Route element={<Checkout/>} path={':item/checkout'}/>
                </Route>
                <Route path={'/careers'} element={<SearchResultLayout/>}>
                    <Route index element={<Careers/>}/>
                </Route>
                <Route path={'/my-profile'} element={<ProfileLayout/>}>
                    <Route path={'general'} element={<General/>}/>
                    <Route path={'change-password'} element={<ChangePassword/>}/>
                    <Route path={'orders'} element={<Orders/>}/>
                </Route>
                <Route element={<NoResults/>} path={'/nothing-found'}/>
                <Route path={'*'} element={<>not found</>}>
                </Route>
            </Routes>

            {background && (<><ModalRoute/> <Outlet/></>)}
        </>
  )
}
