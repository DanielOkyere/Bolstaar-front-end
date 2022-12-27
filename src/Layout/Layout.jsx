import React from 'react'
import NavBar from '../components/rebuild/NavBar'
import { Outlet } from 'react-router-dom'
import NavAtom from '../recoil/Atoms/NavAtom'
import Footer from '../components/rebuild/Footer/Footer'
import { useRecoilValue, useSetRecoilState } from 'recoil'
function Layout () {
  const NavState = useRecoilValue(NavAtom)
  return (
    <>
      {/* sideBar or or Navbar */}
      <NavBar />
      {/* {NavState ? <SideBar /> : ""} */}
      {/* body */}
      {/* <Container> */}
      <Outlet />
      {/* </Container> */}
      {/* footer */}
      <Footer />
    </>
  )
}

export default Layout
