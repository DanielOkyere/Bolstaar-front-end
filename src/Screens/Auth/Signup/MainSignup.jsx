import React, { useRef, useState } from 'react'
import BolstarLogo from '../../../Assets/Images/BolStar_Logo.png'
import { MdEmail, MdLock, MdArrowForward, MdSupervisedUserCircle } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function MainSignup() {
  const Navigate = useNavigate()
  const selectInput = useRef(null)
  const moveToSignupScreen = () => {
    console.log(selectInput.current.value)
    const option = parseInt(selectInput.current.value)
    if (option === 1) {
      Navigate('/signup/farmer')
    } else if (option === 2) {
      Navigate('/signup/provider')
    }
    else {
      Navigate('/signup/farmer')
    }


  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const BACKEND = import.meta.env.VITE_LOCAL_SERVER;
  const responseBody = { email: "", password: "" }

  const handleToastError = (message) => toast.error(message);

  const handleChange = (setFunction, event) => {
    const email = event.target.email;
    const password = event.target.confirmPassword;
    setFunction(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    responseBody.email = email
    responseBody.password = password
    if (responseBody.email && responseBody.password) {
     const userExist = axios.post(`${BACKEND}/api/auth/local/register/`, {
        username: responseBody.email,
        password: responseBody.password,
        email: responseBody.email
      })
        .then((response) => {
          moveToSignupScreen()
        })
        .catch((error) => {
          handleToastError('Kindly Check email or password, user may already exist!')
        })
    }
  }
  return (

    <div className='flex items-center justify-center my-24'>
      <div className="w-full h-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">
          <img src={BolstarLogo} className='self-center' />
        </span>
        <form  className='mb-4 items-center' onSubmit={handleSubmit}>
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Email Address
            </label>
            <input type="email" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="email" id="email" placeholder="Username or Email" onChange={(e)=> handleChange(setEmail, e)} />
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">Password</label>
            <input type="password" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="password" id="password" placeholder="Password" />
            <label htmlFor="confirmPassword" className="block text-xs mb-1">Confirm Password</label>
            <input type="password" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="confirmPassword" id="confirmPassword" placeholder="confirmPassword" onChange={(e)=> handleChange(setPassword, e)}/>
          </div>
          <div className="md:w-full">
            <label htmlFor="userOptions">Kindly let us know who you are?</label>
            <select name="userOptions" ref={selectInput} className="mb-4 md:w-full">
              <option value={1}>Farmer</option>
              <option value={2}>Technology Provider</option>
              <option value={3}>Other</option>
            </select>
          
            <div className="flex bg-green-700 justify-center items-center cursor-pointer hover:bg-green-900 rounded-full text-white
            h-8 w-24 self-end">
              <input type="submit" className='px-3'/>
            </div>
          </div>
        </form>
        <p className="text-lg font-lg">
          Already Signed Up!
          <Link to='/login'><span className='text-green-400 mx-2'>Login Here</span></Link>
        </p>
        <ToastContainer position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
      </div>
    </div>
  )
}

export default MainSignup