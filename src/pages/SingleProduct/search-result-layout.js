import React, { useState } from 'react'
import DesktopNav from '../../components/navigation/desktop-nav'
import PageCrumbs from '../../components/page-crumbs'
import { Outlet } from 'react-router-dom'
import Footer from '../landing/footer'

function SearchResultLayout () {
  const [title, setTitle] = useState('')
  const [hasCrumbs, setHasCrumbs] = useState(true)

  return (
        <div className={'bg-white-600'}>
            <DesktopNav/>
            {
                title !== '' &&
                <div className={'bg-mini-banner h-[141px] bg-cover flex items-center justify-center'}>
                    <h3 className={'text-[32px] font-bold text-white-000'}>
                        {title}
                    </h3>
                </div>
            }
            <div className={'max-w-screen-2xl mx-auto'}>
                <div className={'w-full md:w-[1219px] mx-4 md:mx-auto mb-[300px]'}>
                    {
                        hasCrumbs &&
                        <div className="mt-[30px]">
                            <PageCrumbs/>
                        </div>
                    }
                    <Outlet context={{ setTitle, setHasCrumbs }}/>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default SearchResultLayout
