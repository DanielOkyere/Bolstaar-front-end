import React from 'react'
import DesktopNav from '../../components/navigation/desktop-nav'
import PageCrumbs from '../../components/page-crumbs'
import { Outlet } from 'react-router-dom'
import Footer from '../landing/footer'
import ProfilePhoto from './profile-photo'
import ProfileTabs from './profile-tabs'

function ProfileLayout () {
  return (
        <div className={'bg-white-000'}>
            <DesktopNav/>
            <div className={'mx-0 md:mx-[112px] md:mx-[80px] mb-[300px]'}>
                <div className="pl-4 md:pl-0 mt-[30px]">
                    <PageCrumbs/>
                </div>
                <ProfilePhoto/>
                <div className={'w-full md:w-[747px] mx-auto bg-white-000 py-0 md:py-8 px-[38px] md:px-12 mt-[42px]'}>
                    <div className={'gap-12 flex flex-col md:flex-row'}>
                        <div className={'w-full md:w-[247px]'}>
                            <ProfileTabs/>
                        </div>
                        <div className={'w-full md:w-[360px]'}>
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
  )
}

export default ProfileLayout
