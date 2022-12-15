import React, {useState} from 'react'
import BolstarLogo from '../../../Assets/Images/BolStar_Logo.png'

import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProviderSignup() {
  const [companyName, setCompanyName] = useState("")
  const [companyAddress, setCompanyAddress] = useState("")
  const [typeOfEquipment, setTypeOfEquipment] = useState("")
  const [companyEmail, setCompanyEmail] = useState("")

  const responseBody = {companyName:"", companyAddress:"", typeOfEquipment: "", companyEmail:""}

  const handleToastError = (message) => toast.error(message);
  const handleToastSuccess = (message) => toast.success(message);

  const handleChange = (setFunction, event) => {
    const companyName = event.target.companyName;
    const companyAddress = event.target.companyAddress;
    const typeOfEquipment = event.target.typeOfEquipment;
    const companyEmail = event.target.companyEmail;
    setFunction(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    responseBody.companyName = companyName
    responseBody.companyAddress = companyAddress
    responseBody.typeOfEquipment = typeOfEquipment
    responseBody.companyEmail = companyEmail

    if (responseBody.companyEmail) {
      axios.post(`${BACKEND}/api/provider-details`, {
       
      })
        .then((response) => {
          user_jt = response.data.jwt
          if (user_jt) {
            handleToastSuccess('Login Successfully')
            navigate('/dashboard')
          }
        })
        .catch((error) => {
          handleToastError("Failed to signup")
        })
    }
  }
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
            name="companyName" id="companyName_id" placeholder="Company Name" onChange={(e) => handleChange(setCompanyName, e)} />
        </div>
        <div className="mb-4 md:w-full">
          <label htmlFor="companyAddress" className="block text-xs mb-1">
            Company Address
          </label>
          <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
            name="companyAddress" id="companyAddress_id" placeholder="Company Address" onChange={(e) => handleChange(setCompanyAddress, e)}/>
        </div>
        <div className="mb-4 md:w-full">
          <label htmlFor="equipment" className="block text-xs mb-1">
           Type Of Equipment
          </label>
          <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
            name="equipment" id="equipment_id" placeholder="Type Of Equipment" onChange={(e) => handleChange(setTypeOfEquipment, e)} />
        </div>
        <div className="flex justify-center items-center">
          <input type="submit" className='bg-green-700 w-56 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center ' value="Signup" />
        </div>

      </form>
    </div>
  )
}

export default ProviderSignup