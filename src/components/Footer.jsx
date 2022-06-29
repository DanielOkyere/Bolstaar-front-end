import React from 'react'
import getOurApp from "../Assets/Images/GetourApp.png"
import LOGO from "../Assets/Images/LOGO.png"
import {RiMapPin2Fill} from 'react-icons/ri'
import {IoCall,IoPaperPlaneOutline} from "react-icons/io5"
function Footer() {
  return (
    <div 
    className='w-screen h-auto   flex  mt-8 flex-col '  >
     
         {/* 1rst column */}
         <div className=' flex justify-center  '>
           <img src={getOurApp} className="relative top-16 w-2/3" />
         </div>
         {/* 2nd column */}
         <div className='bg-gray-200 h-[45rem] md:h-[33rem]  flex flex-col  md:grid md:grid-cols-4 px-6 text-4xl '>
           <div className=' flex justify-center items-center flex-col gap-y-8  '>
           <div className='flex md:mt-0 mt-24 items-center '> 
<img src={LOGO} />
               <p className='mt-4'>olstaar</p>
             </div>
             <div className='flex gap-x-3  text-lg  '> 
               <RiMapPin2Fill   color="black" className='md:w-[4em] md:h-[2em]' />
               <p className='text-sm md:text-2xl'>123 Street, accra</p>
             </div>
             <div className='flex gap-x-3 text-lg '> 
               <IoCall   color="black " className='md:w-[4em] md:h-[2em] ' />
               <p className='text-sm md:text-2xl'>+233123456789</p>
             </div>
             
           </div>
           <div className=' flex justify-center items-center flex-col gap-y-8'>
             <p className='md:text-3xl text-lg  font-bold'>About Us</p>
             <p className='md:text-2xl text-sm '>About   </p>
             <p className='md:text-2xl text-sm '>How we work</p>
           </div>
           <div className='  flex justify-center items-center flex-col gap-y-8'>
             <p className='md:text-3xl text-lg font-bold'>Pages</p>
             <p className='md:text-2xl text-sm '>Products  </p>
             <p className='md:text-2xl text-sm '>Signup</p>
           </div>
           <div className='  flex justify-center items-center flex-col gap-y-8 mb-8'>
             <p className='md:text-3xl text-lg  font-bold'>News Letter</p>
           <div className='flex bg-white rounded-lg p-2  '>
             <input type="email"  className='text-2xl' placeholder='Email address' />
             <div className='bg-green-800 hover:bg-green-900  cursor-pointer flex justify-center items-center rounded-lg w-10 h-10 '>
        <IoPaperPlaneOutline size={26} color="fill-black  hover:fill-white" />
             </div>
           </div>
           </div>

         </div>
         {/* 3rd column */}
         <div className='h-[8rem] flex bg-green-800  md:flex-row flex-col justify-around items-center text-white '>
         <p>All rights  reserved bolstaar 2022</p>
        <div className=' flex justify-between gap-x-4 '>
          <p>Privacy</p>
          <p>Services</p>
          <p>Terms & Conditions</p>
        </div>
        </div>
        </div>
  )
}

export default Footer