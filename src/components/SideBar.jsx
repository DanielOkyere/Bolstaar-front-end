import React,{useContext} from 'react'
import {ImCross} from 'react-icons/im'
import { Link } from 'react-router-dom'
import NavAtom from '../recoil/Atoms/NavAtom'
import {useSetRecoilState} from "recoil"
import BolstarLogo from '../Assets/Images/BolStar_Logo.png'
function SideBar() {
  const setNavState =  useSetRecoilState(NavAtom)
  const CloseNav = () =>{
    setNavState(false)
  }
  return (
    <div>
    <nav className="flex flex-col  flex-wrap items-center justify-between p-4 bg-white  "> 
<div className="navbar-menu flex-col  lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
<ul className="flex justify-center">
          <li className=" ml-8 mr-12">
            <Link to ='/'
              className="md:text-3xl text-lg text-black font-[500] underline decoration-green-500"
              
            >
             Home
            </Link>
          </li>
          <li className="mr-12">
            <Link to="/about"
              className="md:text-3xl text-lg text-black font-[500]"
              
            >
              AboutUs
            </Link>
          </li>
          <li className="mr-12">
            <Link to='products'
              className="md:text-3xl text-lg text-black font-[500]"
              
            >
              products
            </Link>
          </li>
          {/* <li>
            <Link to='/cart'
              className="text-3xl text-black font-[500]"
             
            >
          cart
            </Link>
          </li> */}
        </ul>

<div className="flex flex-col gap-y-4 mt-8 items-center justify-end gap-x-5 ">
          <Link to='/login'
            className="px-8 md:px-16 py-4   inline-block  text-lg  leading-5   bg-white border-2 border-green-600 text-green-600 hover:text-white hover:bg-green-600 font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
           
          >
      Login
          </Link>
          <Link to='/signup/main'
            className=" px-8 md:px-16 py-4    inline-block  text-lg  leading-5 text-white  hover:border-2 hover:  border-green-600 hover:text-green-600  bg-green-500 hover:bg-white font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
           
          >
            signup
          </Link>
        </div>
</div>

</nav>
</div>

  )
}

export default SideBar