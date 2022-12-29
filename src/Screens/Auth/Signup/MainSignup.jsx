import React, { useRef, useState } from 'react'
import BolstarLogo from '../../../Assets/Images/BolStar_Logo.png'
import { MdEmail, MdLock, MdArrowForward, MdSupervisedUserCircle } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from '../../../components/rebuild/NavBar'
import Footer from '../../../components/rebuild/Footer'

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
  const BACKEND = import.meta.env.VITE_LOCAL_SERVER || import.meta.env.VITE_SERVER_URL;
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
	  <>
	  <NavBar/>
    <div className='flex items-center justify-center my-24'>
      <div className="w-full h-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">
          <div className='flex justify-center'>
	  <h2 className='h2'>Request An Item</h2>
	  </div>
        </span>
        <form  className='mb-4 items-center' onSubmit={handleSubmit}>
          <div className="mb-4 md:w-full">
            <label htmlFor="fullName" className="block text-xs mb-1">
              Full Name
            </label>
            <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="fullname" id="fullname" placeholder="Full Name" onChange={(e)=> handleChange(setEmail, e)} />
          </div>
          <div className="mb-6 md:w-full">
            <label htmlFor="itemName" className="block text-xs mb-1">Item Name</label>
            <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
              name="itemName" id="itemName" placeholder="Item Name" />
          </div>
          <div className="md:w-full">
            <label htmlFor="userOptions">Kindly let us know who you are?</label>
            <select name="userOptions" ref={selectInput} className="mb-4 md:w-full">
              <option value={1}>Farmer</option>
              <option value={2}>Technology Provider</option>
              <option value={3}>Other</option>
            </select>
         <div className='flex justify-center items-center'> 
            <div className="flex bg-green-700 cursor-pointer hover:bg-green-900 rounded-full text-white h-12 w-56 self-center mt-10 shadow-md items-center justify-center">
              <input type="submit" value='Request'/>
            </div>
          </div>
	  </div>
        </form>
        <p className="text-lg font-lg">
          Can't find an Item?
          <span className='text-green-400 mx-2'><a href='mailto:info@bolstaar.com'>Send Us an Email</a></span>
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
	  <Footer/>
	  </>
  )
}

export default MainSignup
