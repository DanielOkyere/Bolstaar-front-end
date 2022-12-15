import React from 'react'
import BolstarLogo from '../../../Assets/Images/BolStar_Logo.png'
import { Link } from 'react-router-dom'
function FarmerSignup() {
  return (

    <div className='flex items-center justify-center my-24' >
      <div className="w-full h-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <div className="flex flex-col justify-center items-center">
          <img src={BolstarLogo} className='self-center ' />
        </div>
        <form className='mb-4 items-center'>
          <div className="mb-4 md:w-full">
            <label htmlFor="phone" className="block text-xs mb-1">
              Phone Number
            </label>
            <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="Phone" id="Phone" placeholder="Phone Number" />
          </div>
          <div className="mb-4 md:w-full">
            <label htmlFor="location" className="block text-xs mb-1">
              Location
            </label>
            <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="location" id="location" placeholder="Farm Location" />
          </div>
          <div className="mb-4 md:w-full">
            <label htmlFor="location" className="block text-xs mb-1">
              Main Produce
            </label>
            <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="produce" id="produce" placeholder="Main Produce" />
          </div>
          <div className="mb-4 md:w-full">
            <label htmlFor="farmSize" className="block text-xs mb-1">
              Farm Size
            </label>
            <select name="userOptions" className="mb-4 md:w-full">
              <option value={1}>1 Acre</option>
              <option value={2}>~ 2 - 4 Acre</option>
              <option value={3}>larger than 4 Acre</option>
              <option value={4}>other</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <input type="submit" className='bg-green-700 w-56 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center ' value="Sign Up" />
          </div>

        </form>

        <p className="text-lg font-lg">
          Already Signed Up!
          <Link to='/login'><span className='text-green-400 mx-2'>Login Here</span></Link>
        </p>      </div>
    </div>


  )
}

export default FarmerSignup