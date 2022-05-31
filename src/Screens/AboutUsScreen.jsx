import React from 'react'
import LogoBolstaar from '../Assets/Images/LogoBolstaar.jpg'
import farmerImg from '../Assets/Images/farmer2.jpg'
import {FaQuestion,FaEye,FaAward} from 'react-icons/fa'
import {TiGroup} from 'react-icons/ti'
function AboutUsScreen() {
  return (
    <div className='flex flex-col bg-white h-full '>
     
     <div className='h-screen  flex-col flex md:grid md:grid-cols-2 '>
       {/* description */}
<div className='flex flex-col  md:pt-48 pt-4 pl-4 md:pl-52 ' >
  <div className='flex gap-x-4 items-center  '>
<div className='h-16 w-16 rounded-full bg-green-700 flex justify-center items-center shadow-green-500'>
<FaQuestion size={30}  className='text-white fill-current' />
</div>
<h1 className='text-xl uppercase text-green-700 font-[900] '>who we are ?</h1>
  </div>

<h1 className='font-[800] tracking-tight leading-12 text-lg  md:text-[2rem] mr-8 '>
Bolstaar is Africa’s first easy-to-use farm technologies aggregation platform. The platform allows smallholder farmers to conveniently rent or buy farm technologies, machineries and implements on demand.  
Our unique business model uses log-in, call-in and walk-in options to manage interactions between farmers and technology providers, and allows farmers to access technologies using Bolstaar’s infrastructure. We support sub-urban and rural agricultural infrastructure expansion, and enhance technology adoption and farm mechanization.

</h1>
</div>
{/* image */}
<img src={LogoBolstaar} />
     </div>

     {/* vision and mision */}
     <div className='h-auto  w-full flex flex-col place-items-center md:grid md:grid-cols-2 '>
     <div className='h-[14rem] flex flex-col  pl-4  ' >
  <div className='flex gap-x-4 items-center  '>
<div className='h-16 w-16 rounded-full bg-green-700 flex justify-center items-center shadow-green-500'>
<FaEye size={30}  className='text-white fill-current' />
</div>
<h1 className='text-xl uppercase text-green-700 font-[900] '>vision</h1>
  </div>

<h1 className='font-[800] tracking-wide leading-12 text-[1rem] mr-8 '>
To create Africa’s largest farm logistics community and expand rural farm technology adoption

</h1>
</div>
<div className=' h-[14rem] flex flex-col  pl-4  ' >
  <div className='flex gap-x-4 items-center  '>
<div className='h-16 w-16 rounded-full bg-green-700 flex justify-center items-center shadow-green-500'>
<FaAward size={30}  className='text-white fill-current' />
</div>
<h1 className='text-xl uppercase text-green-700 font-[900] '>missions</h1>
  </div>

<h1 className='font-[800] tracking-wide leading-12 text-[1rem] mr-8 '>
To create Africa’s largest farm logistics community and expand rural farm technology adoption

</h1>
</div>
     </div>
     {/* team */}
     <div className='h-auto flex-col md:px-16'>
     <div className='flex gap-x-4 items-center  '>
<div className='h-16 w-16 rounded-full bg-green-700 flex justify-center items-center shadow-green-500'>
<TiGroup size={30}  className='text-white fill-current' />
</div>
<h1 className='text-xl uppercase text-green-700 font-[900] '>team</h1>
  </div>
  <div style={{  backgroundColor : "#F9F8F3"}}    className='flex-1  h-[38rem] mb-14  mt-8  flex flex-col md:flex-row md:justify-center items-center gap-4 '>

<div className='flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg '>
<img src={farmerImg}  className='h-1/2 object-cover ' alt="" />
<div className='h-24 absolute bottom-36  w-24 self-center  rounded-full bg-white flex justify-center items-center   '>
<TiGroup size={30}  className='text-black fill-current' />
</div>
<h1 className='text-2xl font-[800]  tracking-wide leading-14 mt-[3rem] text-center z-20 '>Team leader</h1>
<p className='text-center text-gray-400 font-[700] '>To create Africa’s largest farm logistics community and expand rural farm technology adoption.</p>
</div>
<div className='flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg '>
<img src={farmerImg}  className='h-1/2 object-cover ' alt="" />
<div className='h-24 absolute bottom-36  w-24 self-center  rounded-full bg-white flex justify-center items-center   '>
<TiGroup size={30}  className='text-black fill-current' />
</div>
<h1 className='text-2xl font-[800]  tracking-wide leading-14 mt-[3rem] text-center z-20 '>Team leader</h1>
<p className='text-center text-gray-400 font-[700] '>To create Africa’s largest farm logistics community and expand rural farm technology adoption.</p>
</div>
<div className='flex flex-col w-[22rem] h-[26rem] bg-white relative border-2 shadow-lg '>
<img src={farmerImg}  className='h-1/2 object-cover ' alt="" />
<div className='h-24 absolute bottom-36  w-24 self-center  rounded-full bg-white flex justify-center items-center   '>
<TiGroup size={30}  className='text-black fill-current' />
</div>
<h1 className='text-2xl font-[800]  tracking-wide leading-14 mt-[3rem] text-center z-20 '>Team leader</h1>
<p className='text-center text-gray-400 font-[700] '>To create Africa’s largest farm logistics community and expand rural farm technology adoption.</p>
</div>
  </div>
     </div>
    </div>
  )
}

export default AboutUsScreen