import React from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useRecoilState } from "recoil";

import BolstarLogo from "../../../Assets/Images/nav-logo.svg";
import NavAtom from "../../../recoil/Atoms/NavAtom";

import { NavBarRoot } from "./NavBar.style";
import { navList } from "./NavBar.data";

function NavBar() {
  const [isOpen, setIsOpen] = useRecoilState(NavAtom);

  const openNav = () => setIsOpen(true);
  const closeNav = () => setIsOpen(false);

  return (
    <NavBarRoot className={isOpen ? "open" : ""}>
      <div className="container">
        <Logo />

        <NavList />
        <Buttons />

        <div className="nav-btn" onClick={openNav}>
          <IoIosMenu size={40} />
        </div>

        <Sidebar onClose={closeNav} />
      </div>
    </NavBarRoot>
  );
}

function Sidebar(props) {
  const { onClose } = props;

  return (
    <>
      <div className="sidebar">
        <div className="close-btn" onClick={onClose}>
          <IoIosClose size={40} />
        </div>

        <Logo />

        <div className="content">
          <NavList onClick={() => setTimeout(onClose, 300)} />
          <Buttons />
        </div>
      </div>
      <div className="overlay" onClick={onClose}></div>
    </>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src={BolstarLogo} alt="Bolstar" />
    </div>
  );
}

function NavList(props) {
  const { onClick } = props;
  return (
    <ul className="nav-list">
      {navList.map(({ to, display }) => (
        <li className="nav-item" onClick={onClick} key={display}>
          <Link to={to} className="nav-link">
            {display}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Buttons() {
  return (
    <div className="buttons">
      <Link className="btn btn-empty" to="/login">
        Login
      </Link>
      <Link className="btn btn-primary" to="/signup/main">
        Sign up
      </Link>
    </div>
  );
}

export default NavBar;
