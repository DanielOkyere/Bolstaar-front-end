import React, { useRef, useState } from "react";
// Import Swiper React components
import slider1 from '../Assets/Images/slider1.jpeg' 
import slider2 from '../Assets/Images/slider2.jpeg' 
import slider3 from '../Assets/Images/slider3.jpeg' 



// import for slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
var settings = {
  infinite: true,
  lazyLoad: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: 0,
  autoplay: true,
    autoplaySpeed: 2000,
  // beforeChange: (current, next) => setImageIndex(next),

};
const imageUrls =[
  slider1,
  slider2,
  slider3,
]
export default function CarouselCompenent() {
  
  
  
  return (
    <div className=" md:grid flex flex-col md:grid-cols-2" >
      <div className=" flex flex-col justify-center items-center p-5 "  >
        <h1 className="text-5xl font-bold lg:mr-[12rem] md:mr-[4.5rem]  "   >Get quality farm <br/> technologies  & <br/> best techniques</h1>
        <h1 className="text-xl  font-medium   md:ml-[4rem] " >Increase yield by 100%, cut cost of farming by 50%, increase profit by 50%, and more..</h1>
         </div>
         <Slider {...settings} 
        
       className=' flex h-[28rem] md:h-[38rem] justify-center items-center overflow-hidden rounded-lg  w-full  z-10' >
    {imageUrls.map( img =>(

    <div className="p-8"> 
                <img
                key={ Math.random()}
                
                className='w-full h-[20rem] md:h-[35rem] object-contain '
            
                  src={img }
                
                />
        </div>
          
         )

         )}
       </Slider>
    </div>
  )
}