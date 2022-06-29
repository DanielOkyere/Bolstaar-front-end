import React, { useRef } from 'react'
import ImageMainSignup from "../../../Assets/Images/SignupMainImage.png"
import BolstarLogo from '../../../Assets/Images/BolStar_Logo.png'
import {MdEmail,MdLock,MdArrowForward,MdSupervisedUserCircle } from 'react-icons/md'
import {HiUserCircle } from 'react-icons/hi'
import {FaUserCog} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
function MainSignup() {
  const Navigate = useNavigate()
  const previous = () => { 
    Navigate(-1)
   }
  const selectInput = useRef(null)
  const moveToSignupScreen = () =>{
    console.log(selectInput.current.value)
    const option = parseInt( selectInput.current.value)
if(option === 1){
  Navigate('/signup/farmer')
}else{
  Navigate('/signup/provider')
}
 
  
  }

  return (
    <div className='w-auto h-auto  flex  md:grid md:grid-cols-2'>
         <div  onClick={previous}
       className='bg-white shadow-md absolute top-6 left-3  md:left-6 cursor-pointer  hover:bg-gray-100 ml-8 w-16 h-16 rounded-lg flex items-center justify-center '>
<BiLeftArrowAlt  size={58} color='green'  className='text-white fill-current font-bold'/>
    </div>
<div className=' hidden  md:flex justify-center items-center  h-9/12 w-full '>
  <img src={ImageMainSignup} className='   h-[56rem] w-full  ' />
  
</div>
<div className=' w-full flex justify-center items-center flex-col p-4 '>
<form className='   w-[29rem] md:w-[38rem] h-[48rem] shadow-xl  border-2  px-14 
 gap-y-6 rounded-2xl justify-center  bg-white flex flex-col p-2  '>
    <img src={BolstarLogo}  className='h-28 w-30 self-center' />
     <div  >
   <label
            className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900"
            htmlFor=""
          >
Name
          </label>
       {/* logo et input */}
       <div className='flex border-2   border-gray-200 gap-x-2  items-center w-full   h-[4rem]  '>
            <HiUserCircle  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
            <input type='text' className='w-3/4 text-xs md:text-lg  outline-none h-full text-xl text-gray-500' placeholder='enter your name'   />
       </div>
        </div>
     <div  >
   <label
            className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900"
            htmlFor=""
          >
Email
          </label>
       {/* logo et input */}
       <div className='flex border-2   border-gray-200 gap-x-2  items-center w-full   h-[4rem]  '>
            <MdEmail  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
            <input type='text' className='w-3/4 text-xs md:text-lg  outline-none h-full text-xl text-gray-500' placeholder='enter your Mail or phoneNumber'   />
       </div>
        </div>
     <div  >
   <label
            className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900"
            htmlFor=""
          >
Password
          </label>
       {/* logo et input */}
       <div className='flex border-2   border-gray-200 gap-x-2  items-center w-full   h-[4rem]  '>
            <MdLock  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
            <input type='text' className='w-3/4 text-xs md:text-lg  outline-none h-full text-xl text-gray-500' placeholder='enter your password'   />
       </div>
        </div>
     <div>
   <label
            className="block mb-2 text-gray-800 font-medium leading-6 text-xl font-900  "
            htmlFor=""
          >
      Type of user
          </label>
       {/* logo et input */}
       <div className='flex border-2 border-gray-200 gap-x-2  items-center w-full  h-[4rem] '>
       <FaUserCog  size={35} className='fill-current text-gray-200 w-1/4   ' /> 
            <select ref={selectInput}   className='w-full text-xs  md:text-lg outline-none h-full text-xl text-gray-500'  placeholder='enter your password'>
            <option  value={1}>Farmer</option>
  <option value={2}  >Provider</option>
  
              </select>
       </div>
        </div>

<div onClick={moveToSignupScreen} className="bg-green-700 w-48 font-[700] gap-x-4 flex justify-center items-center mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-end" >
<p> next</p>
<MdArrowForward  size={35} className='fill-current text-white ' /> 
</div>
   </form>
   <p className='text-lg  tracking-wide font-[500] '> Already signup yet ?  <Link to="/login" > <span className='text-blue-400'>login here</span></Link>   </p>

</div>
    </div>
  )
}

export default MainSignup