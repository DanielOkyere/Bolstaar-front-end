import React from 'react'
import FooterBackground from '../Assets/Images/Footer.png'
function Footer() {
  return (
    <div 
    className='w-screen h-[24rem] p-5 relative flex justify-center '  >
      <img src={FooterBackground} className="absolute " />
      <div className='grid-cols-3 grid'>
         {/* 1rst column */}
         <div className='bg-red-100'></div>
         {/* 2nd column */}
         <div className='bg-yellow-100'></div>
         {/* 3rd column */}
         <div className='bg-blue-100'></div>
      </div>
        
        </div>
  )
}

export default Footer