import React from 'react'

function TesstimialsCard() {
  return (
    <div className=' md:h-[26rem]  h-[28rem] w-[12rem] md:w-[20rem] rounded-lg bg-gray-100 shadow-lg  border-2 '>
    {/* avatar , name and role */}
<div className='h-1/3 bg-red-400 grid grid-cols-2 '>
<div className='bg-gray-100 flex justify-center items-center '>
  <img className='rounded-full md:w-32  w-16 h-16 md:h-32' src='https://d3n8a8pro7vhmx.cloudfront.net/seedyourfuture/pages/77/attachments/original/1598366134/Farmer_New_Background.jpg?1598366134' />
</div>
<div className='bg-gray-100 flex flex-col justify-center items-center'>
  <p className='font-bold md:text-lg text-md tracking-wider'>sarah Williams</p>
  <p className='capitalize italic '>rice farmer</p>
</div>
</div>
{/* message */}
<div className='h-2/3  p-5 '>
<div className='bg-gray-200 italic font-semibold    h-[15rem] rounded-lg  p-2 justify-center items-center flex'>
<p>Bolstaar provided me with tools to help take care of my rice farm. They made sure I got the right
equipment at the right time.
</p>
</div>
</div>
  </div>  )
}

export default TesstimialsCard