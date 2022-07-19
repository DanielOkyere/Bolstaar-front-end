import React from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/rebuild/NavBar";
import { Outlet } from "react-router-dom";
import NavAtom from "../recoil/Atoms/NavAtom";
import Footer from "../components/Footer";
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
