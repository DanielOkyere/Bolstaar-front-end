import React, { useRef, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import slide3 from '../Assets/Images/slide1.png'
// import slide2 from '../Assets/Images/slide2.png'
// import slide1 from '../Assets/Images/slide3.png'
import {IoMdArrowDropleft,IoMdArrowDropright} from 'react-icons/io'
// import {BiLeftArrow,BiRightArrow} from "react-icons/bi"
import BolstarInfo from '../Assets/Images/BolstaarAboutPellets.png'
import BolstarAdd from '../Assets/Images/Rectangle10.png'
import { Link } from 'react-router-dom';
import TesstimialsCard from '../components/TestimonialsCard';
import ControlledCarousel from "../components/CarouselCompenent";
import Certficate from '../components/Svgs/Certificate.jsx'
import Certficate2 from '../components/Svgs/Certificate2.jsx'
import Flower from '../components/Svgs/Flower.jsx'
import Flower2 from '../components/Svgs/Flower2.jsx'
function HomeScreen() {
  //settings pour le carousel
  const [imageIndex, setImageIndex] = useState(0);
  var settings1 = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  
  };
  var settings2 = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  
  };
  // image for carousel
  // const imageUrls =[
  //   slide1,
  //   slide2,
  //   slide3
  // ]
  // reference to the slider
  const slider = useRef()
  // navigation methods
 const  next = () =>  {
  console.log('next')
  slider.current.slickNext();
}
 const    previous = ()  => {
   console.log('prevous')
  slider.current.slickPrev();
}
  return (
    <div className='h-auto'>
      {/* div for carousel */}
      <div className='flex flex-col relative'>
      {/* <div style={{ backgroundColor :  "#C6E1C5"}} 
       onClick={previous} className=' h-8 w-8 md:h-12 md:w-12 z-50 absolute  ring-4 ring-white shadow-2xl cursor-pointer flex justify-center items-center left-4 top-1/2 rounded-full  ' >
          <IoMdArrowDropleft size={40} color='white'  className=''/>
        </div> */}
        {/* <div 
        style={{ backgroundColor :  "#C6E1C5"}} 
        onClick={next} className=' h-8 w-8 md:h-12 md:w-12 flex  z-50 absolute  ring-4 ring-white shadow-2xl cursor-pointer justify-center items-center right-4 top-1/2 rounded-full  ' >
        <IoMdArrowDropright size={40} color='white'  className=''/>
        </div> */}
      <ControlledCarousel />
       {/* current carousel dots  */}
       {/* <div className='justify-center flex z-[60] items-center gap-x-3 mb-4'>
<div className={'h-6 w-6 rounded-full shadow-sm shadow-black ' + (imageIndex ===0 ? " bg-green-500" : "bg-white ") }></div>
<div className={'h-6 w-6 rounded-full shadow-sm shadow-black '  + (imageIndex ===1 ? " bg-green-500" : "bg-white ") }></div>
<div className={'h-6 w-6 rounded-full shadow-sm shadow-black ' + (imageIndex ===2 ? " bg-green-500" : "bg-white ") }></div>
       </div> */}
       </div>
       {/* about part */}
       <div className=' h-screen md:h-[70vh] bg-green-600 p-5 flex flex-col  md:grid md:grid-cols-2 '>
<div className='flex justify-center  font-bold items-center text-white  flex-col tracking-widest leading-8 gap-y-4'>
  <div className='md:w-[34rem] w-auto  '>
  <p className='text-left capitalize text-sm md:text-3xl mb-8'>About bolstaar</p>
  <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
</div>
<div   className=' h-full  pl-4 '
>
  <img src={BolstarInfo} className='object-cover' />
{/* <div className='bg-white h-[12rem] w-[12rem] rounded-lg absolute flex flex-col justify-center items-center shadow-xl  top-3 ' >
<Certficate />
  <h1 className='text-green-600 font-semibold '  > Certified professisonals </h1>
  
</div>
<div className='bg-white h-[12rem] w-[12rem] rounded-lg absolute flex flex-col justify-center items-center shadow-xl  right-[17rem]  ' >
<Flower2 />
  <h1 className='text-green-600 font-semibold '  > Growth & Developement  </h1>

</div>
<div className='bg-white h-[12rem] w-[12rem] rounded-lg absolute flex flex-col justify-center items-center shadow-xl  bottom-12 ' >
<Flower />
<h1 className='text-green-600 font-semibold '  > honest  &  reliable </h1>

</div>
<div className='bg-white h-[12rem] w-[12rem] rounded-lg absolute flex flex-col justify-center items-center shadow-xl  bottom-12 right-7 ' >
<Certficate />
  <h1 className='text-green-600 font-semibold '  > Certified professisonals </h1>

</div> */}
</div>
       </div>
        {/* about part */}
        <div style={{ backgroundImage :  ` url(${BolstarAdd})`   ,backgroundRepeat : 'no-repeat',backgroundSize: "cover"}} 
        className='h-[50vh] bg-yellow-600 flex justify-center py-28  '>
       <div className='gap-y-24'>
         <h1 className='text-white font-bold text-3xl md:text-5xl mb-8'>bolstaar is providing better</h1>
         <p className='text-white font-semibold text-2xl text-center mb-8'>agricultural solutions</p>
         {/* boutton */}
         <div className="flex items-center  justify-center gap-x-5  ">
          <Link to='/login'
            className="px-8 md:px-16 py-4  rounded-full inline-block  text-md md:text-lg  leading-5   bg-white border-2 border-green-600 text-green-600 hover:text-white hover:bg-green-600 font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
           
          >
    know more
          </Link>
          <Link to='/signup/main'
            className=" px-8 md:px-16 py-4  inline-block   text-md md:text-lg  leading-5 text-white  hover:border-2 hover:  border-green-600 hover:text-green-600  bg-green-500 hover:bg-white font-semibold focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
           
          >
            signup
          </Link>
        </div>
       </div>
       </div>
       {/* testimonials */}
       <div className='h-screen  bg-white  grid grid-rows-2  '>
<div className='bg-green-600 pl-4 pt-8'>
<h1 className='text-white font-bold text-4xl mb-8'>Hear  from  some of our clients </h1>
</div>
<div className=' pl-4 pt-8 gap-x-5 relative'>
  <div className='absolute flex gap-x-8 -top-48 right-2'>
 <TesstimialsCard />
 <TesstimialsCard />
 <TesstimialsCard />
 <TesstimialsCard />
 </div>
</div>
       </div>
    </div>
  )
}

export default HomeScreen