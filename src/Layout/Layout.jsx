import React from "react";
import SideBar from "../Components/SideBar";
import NavBar from "../Components/rebuild/NavBar";
import { Outlet } from "react-router-dom";
import NavAtom from "../recoil/Atoms/NavAtom";
import Footer from "../Components/rebuild/Footer/Footer";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Container from "react-bootstrap/Container";
function Layout() {
  const NavState = useRecoilValue(NavAtom);
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
  );
}

export default Layout;
