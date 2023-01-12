import React from 'react'
import NavBar from '../components/rebuild/NavBar'
import Footer from '../components/rebuild/Footer/Footer'
import Kosmos from '../../src/Assets/Images/Kosmos.png'
function Sponsors() {
  return (
    <div className='sponsor_page text-white'>
      <NavBar/>
      <div className=" container flex flex-col mt-4 mb-5">
        <div className="h1 self-center">
          Our Partners & Sponsors
        </div>
        <div className="bg-green-700 bg-opacity-60 flex flex-col md:flex-row gap-5 space-x-4 my-4 self-center p-5">
          <div className='w-64 md:w-80  md:shrink-0 self-center'>
            <Images />
          </div>
          <div className="sponsor_info flex flex-col gap-2 md:w-80 p-2">
            <p className='my-auto text-justify text-white'>It is a multi-year business incubation program aimed at preparing businesses for growth, scale, and investor readiness. The incubation program provides specialized coaching and mentorship, networking, physical infrastructure, access to technical expertise and a continuous learning environment for businesses with high growth potential selected from the AgriTech Challenge Pro.</p>
            <div className="btn btn-primary mt-4">Visit website</div>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <div className="h2 self-center">
            For business related Enquiries
          </div>
          <div className="btn btn-primary mx-auto ">Drop Us a Message</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

function Images() {
  return (<div className='sponsor_img'>
    <img src={Kosmos} alt='Kosmos Image' />
  </div>)
}

export default Sponsors
