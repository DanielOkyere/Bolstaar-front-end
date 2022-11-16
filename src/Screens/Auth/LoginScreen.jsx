import React from 'react'
import LoginBackground from "../../Assets/Images/BackgroundLogin.png"
import BolstarLogo from '../../Assets/Images/BolStar_Logo.png'
import { MdEmail, MdLock } from 'react-icons/md'
import { Link } from 'react-router-dom'
function LoginScreen() {
  return (
    <div className='flex items-center justify-center my-24' >
      <div className="w-full h-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <img src={BolstarLogo} className='self-center' />
        <form className='mb-4 items-center'>
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Email Address Or UserName
            </label>
            <input type="email" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="email" id="email" placeholder="Username or Email" />
          </div>
          <div className="mb-4 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">
              Password
            </label>
            <input type="password" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="password" id="password" placeholder="Password" />
          </div>
          <div className="flex justify-center items-center">
          <input type="submit" className='bg-green-700 w-56 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center ' value="login" />
          </div>

        </form>

        <p className="text-lg font-lg">
          Not yet signed Up?
          <Link to='/signup/main'><span className='text-green-400 mx-2'>Sign Up Here</span></Link>
        </p>      </div>

    </div>
  )
}

export default LoginScreen