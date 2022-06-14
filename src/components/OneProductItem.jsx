import React from 'react'
import DroneImage from '../Assets/Images/drones.png'
import {FaEye} from "react-icons/fa"
import { Link } from 'react-router-dom'
function OneProductItem() {
  return (
    <div className="p-6 bg-gray-50  shadow-lg  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
    <span className="px-2 py-1 text-xs font-bold font-heading border-2 border-red-500 rounded-full text-red-500 bg-white">
      -15%
    </span>
    <a className="block px-6 mt-6 mb-2" href="#">
      <img
        className="mb-5 mx-auto h-56 w-full object-contain"
        src={DroneImage}
        alt=""
      />
      <h3 className="mb-2 text-xl font-bold font-heading">
      Drone rg47
      </h3>
      <p className="text-lg font-bold font-heading text-green-500">
        <span>$14.30</span>
        <span className="text-xs text-gray-500 font-semibold font-heading line-through">
          $15.90
        </span>
      </p>
    </a>
    <Link to='/product'
      className="ml-auto mr-2 flex items-center justify-center w-12 h-12 border rounded-lg hover:border-gray-500"
    >
      <FaEye size={30} color="black" />
    </Link>
  </div>
  )
}

export default OneProductItem