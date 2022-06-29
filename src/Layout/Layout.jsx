import React from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import {Outlet} from 'react-router-dom'
import NavAtom from '../recoil/Atoms/NavAtom'
import Footer from '../components/Footer'
import {useRecoilValue} from "recoil"
function Layout() {
    const NavState = useRecoilValue(NavAtom)
  return (
    <div className='overflow-x-hidden'>
{/* sideBar or or Navbar */}
<NavBar />
    {NavState ?     <SideBar /> : '' }
{/* body */}
<Outlet/>
{/* footer */}
<Footer/>
    </div>
  )
}

export default Layout