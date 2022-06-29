import React from "react";
import { IoIosMenu } from "react-icons/io";
import NavAtom from "../recoil/Atoms/NavAtom";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import BolstarLogo from "../Assets/Images/nav-logo.svg";
import Container from "react-bootstrap/Container";
function Menu() {
    const setNavState = useSetRecoilState(NavAtom);
    const ToggleNav = () => {
        setNavState(true);
    };
    return (
            <section className="bg-white shadow-black border-2">
		    <Container>
                <nav className="flex justify-between md:p-6 px-4">
                    <div className="flex justify-between items-center w-full">
                        <div className="xl:w-1/12">
                            <Link to="/" className="block max-w-max">
                                <img
                                    className="navbar-brand"
                                    src={BolstarLogo}
                                    alt="Bolstaar logo"
                                />
                            </Link>
                        </div>
                        <div className="hidden xl:block xl:w-1/2">
                            <ul className="flex justify-center">
                                <li className="mr-12">
                                    <Link
                                        to="/"
                                        className="text-gray-500 text-2xl hover:text-gray-600 font-[600]"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="mr-12">
                                    <Link
                                        to="/about"
                                        className="text-gray-500 text-2xl hover:text-gray-600 font-[600]"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className="mr-12">
                                    <Link
                                        to="products"
                                        className="text-gray-500 text-2xl hover:text-gray-600 font-[600]"
                                    >
                                        Products
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden xl:block xl:w-1/3">
                            <div className="flex items-center justify-end gap-x-5 ">
                                <Link
                                    to="/login"
                                    className="px-16 py-4 rounded-full inline-block  text-lg leading-5 bg-transparent-700 hover:bg-green-600 font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/signup/main"
                                    className="px-16 py-4 rounded-full inline-block  text-lg  leading-5 text-blue-50 bg-green-500 hover:bg-green-600 font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    signup
                                </Link>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={ToggleNav}
                        className="navbar-burger self-center xl:hidden"
                    >
                        <IoIosMenu size={45} color="text-white" />
                    </button>
                </nav>
		</Container>
                {/* deuxieme bar navigator */}
            </section>

    );
}

export default Menu;
