import React from 'react'
import LoginBackground from "../../../Assets/Images/Farmers.jpg"
import BolstarLogo from '../../../Assets/Images/BolStar_Logo.png'
import ImageFarmerSignup from '../../../Assets/Images/ImageFarmerSignup.jpg'
import {MdLocationPin,MdHomeWork,MdCall } from 'react-icons/md'
import { Link } from 'react-router-dom'
function FarmerSignup() {
  return (
    <div style={{ backgroundImage :  ` url(${LoginBackground})`  , backgroundRepeat : "no-repeat", backgroundSize : "cover"}}
    className='w-screen h-screen  flex flex flex-col gap-y-7 justify-center items-center'
   >
    
  <form className='   w-[29rem] md:w-[38rem] h-[48rem] shadow-xl  border-2  px-14  gap-y-4 rounded-2xl justify-center  bg-white flex flex-col p-2  '>
  <img src={BolstarLogo}  className='h-24 w-30 self-center ' />
  <img src={ImageFarmerSignup}  className='h-24 w-30 self-center ' />
    <div  >
  <label
           className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900"
           htmlFor=""
         >
Address
         </label>
      {/* logo et input */}
      <div className='flex border-2   border-gray-200 gap-x-2  items-center w-full   h-[4rem]  '>
           <MdLocationPin  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
           <input type='text' className='w-3/4 text-xs md:text-lg  outline-none h-full text-xl text-gray-500 appearence-none' placeholder='enter your Address '   />
      </div>
       </div>
    <div  >
  <label
           className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900"
           htmlFor=""
         >
Phone Number 
         </label>
      {/* logo et input */}
      <div className='flex border-2   border-gray-200 gap-x-2  items-center w-full   h-[4rem]  '>
           <MdCall  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
           <input type='text' className='w-3/4 text-xs md:text-lg  outline-none h-full text-xl text-gray-500 appearence-none' placeholder='enter your  phoneNumber'   />
      </div>
       </div>
    <div>
  <label
           className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900  "
           htmlFor=""
         >
   Farm Size
         </label>
      {/* logo et input */}
      <div className='flex border-2 border-gray-200 gap-x-2  items-center w-full  h-[4rem] '>
           <MdHomeWork  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
           <input type='password' className='w-3/4 text-xs  md:text-lg outline-none h-full text-xl text-gray-500'  placeholder='enter your Farmsize '/>
      </div>
       </div>

<input  type="submit" className='bg-green-700 w-56 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center '  value="Signup" />

  </form>
   

   </div>
  )
}

export default FarmerSignup