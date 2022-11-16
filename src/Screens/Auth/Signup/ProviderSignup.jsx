import React from 'react'
import LoginBackground from "../../../Assets/Images/Providers.jpg"
import BolstarLogo from '../../../Assets/Images/BolStar_Logo.png'
import ImageProviderSignup from '../../../Assets/Images/ImageProviderSignup.jpg'
import { MdLocationPin, MdHomeWork, MdCall } from 'react-icons/md'
function ProviderSignup() {
  return (
    <div className='flex justify-center items-center m-24'>
      <form className='w-full h-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto'>
        <div className="flex flex-col justify-center items-center">

          <img src={BolstarLogo} className='self-center ' />
          <img src={ImageProviderSignup} className='h-24 w-30 justify-center items-center mb-6' />
        </div>

        <div className="mb-4 md:w-full">
          <label htmlFor="companyName" className="block text-xs mb-1">
            Company Name
          </label>
          <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
            name="companyName" id="companyName_id" placeholder="Company Name" />
        </div>
        <div className="mb-4 md:w-full">
          <label htmlFor="companyAddress" className="block text-xs mb-1">
            Company Name
          </label>
          <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
            name="companyAddress" id="companyAddress_id" placeholder="Company Address" />
        </div>
        <div className="flex justify-center items-center">
          <input type="submit" className='bg-green-700 w-56 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center ' value="Signup" />
        </div>

      </form>
    </div>
  )
}

export default ProviderSignup