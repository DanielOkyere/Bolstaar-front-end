import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../../pages/auth/sign-in'
import Register from '../../pages/auth/register'
import ForgotPassword from '../../pages/auth/forgot-password'
import ResetPassword from '../../pages/auth/reset-password'
import Landing from '../../pages/landing'
import SingleProduct from '../../pages/SingleProduct'
import NoResults from '../../pages/SingleProduct/no-results'
import Checkout from '../../pages/checkout'
import SearchResultLayout from '../../pages/SingleProduct/search-result-layout'
import Products from '../../pages/products'
import SearchResults from '../../pages/products/search-results'
import Careers from '../../pages/careers'

export const PublicRoutes = () => {
  return (
        <>
            <Routes>
                <Route exact element={<Landing/>} path="/"/>
                <Route exact element={<SignIn/>} path="/sign-in"/>
                <Route element={<Register/>} path={'/sign-up'}/>
                <Route element={<ForgotPassword/>} path={'/forgot-password'}/>
                <Route element={<ResetPassword/>} path={'/reset-password'}/>
                <Route element={<ResetPassword/>} path={'/connect/:provider/redirect'}/>
                <Route path={'/products'} element={<SearchResultLayout/>}>
                    <Route element={<Products/>} index/>
                    <Route element={<SearchResults/>} path={'search-results'}/>
                    <Route element={<SingleProduct/>} path={':item'}/>
                    <Route element={<Checkout/>} path={':item/checkout'}/>
                </Route>
                <Route path={'/careers'} element={<SearchResultLayout/>}>
                    <Route index element={<Careers/>}/>
                </Route>
                <Route element={<NoResults/>} path={'/nothing-found'}/>
                <Route path={'*'} element={<>not found</>}>
                </Route>
            </Routes>
        </>
  )
}
