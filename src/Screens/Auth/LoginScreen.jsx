import React from 'react'
import LoginBackground from "../../Assets/Images/BackgroundLogin.png"
import BolstarLogo from '../../Assets/Images/BolStar_Logo.png'
import {MdEmail,MdLock } from 'react-icons/md'
import { Link } from 'react-router-dom'
function LoginScreen() {
  return (
    <div style={{ backgroundImage :  ` url(${LoginBackground})` }}
     className='w-screen h-screen  flex flex flex-col gap-y-7 justify-center items-center'
    >
      <img src={BolstarLogo}  className='h-24 w-38' />
   <form className='   w-[29rem] md:w-[38rem] h-[32rem] shadow-xl  border-2  px-14  gap-y-6 rounded-2xl justify-center  bg-white flex flex-col p-2  '>
     <div  >
   <label
            className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900"
            htmlFor=""
          >
Phone Number or Email
          </label>
       {/* logo et input */}
       <div className='flex border-2   border-gray-200 gap-x-2  items-center w-full   h-[4rem]  '>
            <MdEmail  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
            <input type='text' className='w-3/4 text-xs md:text-lg  outline-none h-full text-xl text-gray-500 appearence-none' placeholder='enter your Mail or phoneNumber'   />
       </div>
        </div>
     <div>
   <label
            className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900  "
            htmlFor=""
          >
      Password
          </label>
       {/* logo et input */}
       <div className='flex border-2 border-gray-200 gap-x-2  items-center w-full  h-[4rem] '>
            <MdLock  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
            <input type='password' className='w-3/4 text-xs  md:text-lg outline-none h-full text-xl text-gray-500'  placeholder='enter your password'/>
       </div>
        </div>

<input  type="submit" className='bg-firstGreen w-56 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center '  value="login" />

   </form>
    
<p className='text-lg  tracking-wide font-[500] '> not signup yet ?  <Link to="/signup/main" > <span className='text-blue-400'>Signup here</span></Link>   </p>

    </div>
  )
}

export default LoginScreen