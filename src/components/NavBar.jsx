import React from "react";
import {IoIosMenu} from 'react-icons/io'
import NavAtom from '../recoil/Atoms/NavAtom'
import {useSetRecoilState} from "recoil"
import {Link} from 'react-router-dom'
import BolstarLogo from '../Assets/Images/BolStar_Logo.png'
 function Menu() {
  const setNavState =  useSetRecoilState(NavAtom)
  const ToggleNav = () =>{
    setNavState(true)
  }
  return (
   <section className="bg-white shadow-black border-2    ">
  <nav className="flex justify-between   md:p-6 px-4">
    <div className="flex justify-between items-center w-full">
      <div className="xl:w-1/3">
        <Link to="/" className="block max-w-max" >
          <img
            className="h-24"
            src={BolstarLogo}
            alt=""
          />
        </Link>
      </div>
      <div className="hidden xl:block xl:w-1/3">
        <ul className="flex justify-center">
          <li className="mr-12">
            <Link to ='/'
              className="text-3xl text-black font-[500] underline decoration-green-500"
              
            >
             Home
            </Link>
          </li>
          <li className="mr-12">
            <Link to="/about"
              className="text-3xl text-black font-[500]"
              
            >
              AboutUs
            </Link>
          </li>
          <li className="mr-12">
            <Link to='products'
              className="text-3xl text-black font-[500]"
              
            >
              products
            </Link>
          </li>
          <li>
            <Link to='/cart'
              className="text-3xl text-black font-[500]"
             
            >
          cart
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden xl:block xl:w-1/3">
        <div className="flex items-center justify-end gap-x-5 ">
          <Link to='/login'
            className="px-16 py-4 rounded-full inline-block  text-lg  leading-5 text-blue-50 bg-white border-2 border-green-600 text-green-600 hover:text-white hover:bg-green-600 font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
           
          >
      Login
          </Link>
          <Link to='/signup/main'
            className=" px-16 py-4 rounded-full inline-block  text-lg  leading-5 text-white  hover:border-2 hover:  border-green-600 hover:text-green-600  bg-green-500 hover:bg-white font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
           
          >
            signup
          </Link>
        </div>
      </div>
    </div>
    <button onClick={ ToggleNav} className="navbar-burger self-center xl:hidden">
      <IoIosMenu size={45}  color='text-white' />
    </button>
  </nav>
  {/* deuxieme bar navigator */}  
</section>

  );
}

export default Menu