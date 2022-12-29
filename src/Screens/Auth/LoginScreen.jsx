import React from 'react'
import { useState } from 'react';
import BolstarLogo from '../../Assets/Images/BolStar_Logo.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../../components/rebuild/NavBar'
import Footer from '../../components/rebuild/Footer'
function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const BACKEND = import.meta.env.VITE_LOCAL_SERVER || import.meta.env.VITE_SERVER_URL;

  const responseBody = { email: "", password: "" }

  const handleChange = (setFunction, event) => {
    const email = event.target.email;
    const password = event.target.password;
    setFunction(event.target.value);
  }

  const handleToastError = (message) => toast.error(message);
  const handleToastSuccess = (message) => toast.success(message);

  const handleSubmit = (event) => {
    event.preventDefault()
    responseBody.email = email
    responseBody.password = password
    let user_jt = '';
    if (responseBody.email && responseBody.password) {
      axios.post(`${BACKEND}/api/auth/local/`, {
        identifier: responseBody.email,
        password: responseBody.password
      })
        .then((response) => {
          user_jt = response.data.jwt
          if (user_jt) {
            handleToastSuccess('Login Successfully')
            navigate('/dashboard')
          }
        })
        .catch((error) => {
          handleToastError("Invalid login Credentials, Kindly check Email Or Password")
        })
    }
  }


  return (
    <div>
      <NavBar/>
    <div className='flex items-center justify-center my-24' >
      <div className="w-full h-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <img src={BolstarLogo} className='self-center' />
        <form className='mb-4 items-center' onSubmit={handleSubmit}>
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Email Address Or UserName
            </label>
            <input type="email" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="email" id="email" placeholder="Username or Email" onChange={(e) => handleChange(setEmail, e)} />
          </div>
          <div className="mb-4 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">
              Password
            </label>
            <input type="password" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="password" id="password" placeholder="Password" onChange={(e) => handleChange(setPassword, e)} />
          </div>
          <div className="flex justify-center items-center">
            <input type="submit" className='bg-green-700 w-56 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center ' value="login" />
          </div>

        </form>

        <p className="text-lg font-lg">
          Not yet signed Up?
          <Link to='/signup/main'><span className='text-green-400 mx-2'>Sign Up Here</span></Link>
        </p>      </div>
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
    <Footer/>
    </div>
  )
}

export default LoginScreen