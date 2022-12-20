import React, { useContext } from 'react'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'
import NavAtom from '../../recoil/Atoms/NavAtom'
import { useSetRecoilState } from "recoil"
import BolstarLogo from '../../Assets/Images/LOGO.png'
function SideBar() {
  const setNavState = useSetRecoilState(NavAtom)
  const CloseNav = () => {
    setNavState(false)
  }
  return (
    <div className=" transition-all ease-in-out delay-150 duration-[3000] fixed top-0 left-0 z-[100] w-1/4 h-full bg-coolGray-900 bg-opacity-50  ">
      <div className="fixed top-0 left-0 bottom-0 w-1/2  max-w-xs bg-white">
        <nav className="relative p-6 h-full overflow-y-auto">
          <div className="flex flex-col justify-between h-full">
            <Link to='/'
              className="inline-block" >
              <img
                className="h-16"
                src={BolstarLogo}
                alt=""
              />
            </Link>
            <ul className="py-6 gap-y-">
              <li className="mr-12">
                <Link to='/dashboard'
                  className="text-gray-500 text-3xl hover:text-gray-900 font-300"
                >
                  Home
                </Link>
              </li>
            </ul>
            <div className="flex flex-col flex-wrap">
              <div className="flex-col flex gap-y-5 w-full items-center ">
                <Link to='/login'
                  className="w-full  text-center py-4  inline-block  text-lg  leading-5 text-blue-50 bg-green-700 hover:bg-green-600 font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
                >
                Logout
                </Link>
               
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default SideBar