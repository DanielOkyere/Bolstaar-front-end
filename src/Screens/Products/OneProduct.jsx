import React, {useRef,useState,useEffect,useContext} from 'react'
import {BsPlayFill,BsFillPauseFill,BsStarFill,BsStarHalf} from 'react-icons/bs'
import {MdLocationPin} from 'react-icons/md'
import {BiLeftArrowAlt} from 'react-icons/bi'

// import dns from '../utils/dns'
import {FaEye} from 'react-icons/fa'
import {Link, useParams} from 'react-router-dom'
import { SpinnerCircular } from 'spinners-react'
import {useNavigate} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {ImCross} from 'react-icons/im'
import {BiHeart} from 'react-icons/bi'
// import { useSetRecoilState } from 'recoil'
// import DroneImage from '../../Assets/Images/drones.png'
import {IoIosArrowBack,IoIosArrowForward} from 'react-icons/io'
function OneProduct() {
  const imageUrls =[
    DroneImage,
    DroneImage,
    DroneImage,
    DroneImage,
  ]
  // const  setResidenceInfo = useSetRecoilState(SignupAtom)
  // const  setForfeit = useSetRecoilState(ForfeitAtom)
  //parametrage du carousel
  const [imageIndex, setImageIndex] = useState(0);
  var settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  
  };

  const Navigate = useNavigate()
  const [VisualState,SetVisual] = useState(false)
  const params = useParams()
  const selectInput = useRef(null)
  const [residence,setResidence] = useState()
  const [loading,SetLoading] = useState(false);
  const OpenVisual = () =>{
    SetVisual(true)
  } 
  const closeModal = () => { 
    SetVisual(false)
   }
   const slider = useRef()
 
   console.log(slider)
// navigation methods
 const  next = () =>  {
  console.log('next')
  slider.current.slickNext();
}
 const    previous = ()  => {
   console.log('prevous')
  slider.current.slickPrev();
}
  
  console.log( )
  return (
    <div className='p-2'>
     
    { loading ? <div className="flex h-screen justify-center items-center  w-screen" > <SpinnerCircular speed={100} size={50} color="blue" /></div> :(<div>

     <Link  to="/products"
       className='bg-green-700 shadow-md cursor-pointer  hover:bg-green-800 ml-8 w-16 h-16 rounded-lg flex items-center justify-center '>
<BiLeftArrowAlt  size={58} color='white'  className='text-white fill-current font-bold'/>
    </Link>
 <div className="container mx-auto px-4">
   <div className="flex flex-wrap -mx-4 mb-24">
     <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
       <div  
        style={{backgroundColor : "#F9F8F3",height: 500   }}
  
        className="relative mb-10 h-auto" >
        <div onClick={previous} className='h-8 w-8 z-50 absolute cursor-pointer flex justify-center items-center -left-4 top-1/2 rounded-full bg-green-700 ' >
          <IoIosArrowBack size={24} color='white' />
        </div>
        <div onClick={next} className='h-8 w-8 flex  z-50 absolute cursor-pointer justify-center items-center -right-4 top-1/2 rounded-full bg-green-700 ' >
        <IoIosArrowForward size={24} color='white' />
        </div>
       <Slider ref={slider}  {...settings} 
        style={{ height: 564 }}
       className=' flex  justify-center items-center overflow-hidden rounded-lg  w-full  z-10' >
    {imageUrls.map( img =>(

    
                <img
                key={ Math.random()}
                style={{ height: 450 }}
                className='w-full object-cover '
            
                  src={img }
                
                />
       
          
         )

         )}
       </Slider>

   
       </div>
       <div className="flex flex-wrap -mx-2">
         {imageUrls.map( img =>(
              <div key={img} className="w-1/2 sm:w-1/4 p-2">
              <a className="block border border-green-300" >
                <img
                  className="w-full h-32 object-cover"
                  src={    img            }
                
                />
              </a>
            </div>
         )

         )}
    
     
       </div>
     </div>
     <div className="w-full md:w-1/2 px-4">
       <div className="lg:pl-20">
         <div className="mb-10 pb-10 border-b">
           <div className='flex gap-x-2 items-center'>
     
           <span className="text-gray-500 text-2xl font-bold">Razor Drone </span>
           </div>
           <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading tracking-tighter">
        Drone rg47
           </h2>
         <p className=" flex gap-x-3 mb-8 text-2xl font-bold font-heading text-red-500">
           <BsStarFill size={38} className="text-yellow-500 fill-current" />
           <BsStarFill size={38} className="text-yellow-500 fill-current" />
           <BsStarFill size={38} className="text-yellow-500 fill-current" />
           <BsStarHalf   size={38} className="text-yellow-500 fill-current" />
           <BsStarFill   size={38} className="text-gray-400 fill-current" />
           
           </p>
           

           <p className="max-w-md text-green-700 text-5xl font-bold mb-5">
           $ 9.69
           </p>
                  
           <p className="max-w-md text-gray-500 font-bold tracking-wider  mt-3">
             Maecenas commodo libero ut molestie dictum. Morbi placerat eros id
             porttitor sagittis.
           </p>
         </div>
         <div className="flex mb-12">
       
           <div>
             <span className="block mb-4 font-bold font-heading text-4xl text-gray-400 uppercase">
             QTY    
         </span>
             <select ref={selectInput}
               className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-green-300 focus:border-green-300 rounded-md"
               name=""
               id=""
             >
               <option value={1}>1</option>
               <option value={2}>2</option>
               <option value={3}>3</option>
             </select>
           </div>
         </div>
         <div className="flex flex-wrap -mx-4 mb-14 items-center">
           <div className="flex gap-3  w-full flex-wrap h-auto  ">
             <div
               className="block bg-green-600  w-[24rem] hover:bg-green-700 cursor-pointer text-center text-white font-bold font-heading py-8 px-8 rounded-md uppercase transition duration-200"
             >
            add to cart
             </div>  
             <div className=' w-24 rounded-lg border-2 border-gray-300 flex justify-center items-center cursor-pointer hover:ring-2 hover:ring-green-300'>
        <BiHeart size={38} color='gray' />
             </div>
           
           </div>
                  </div>
      
       </div>
     </div>
   </div>
   
 </div>
    </div>  )}
  
</div>
  )
}

export default OneProduct