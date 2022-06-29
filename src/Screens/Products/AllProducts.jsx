import React from 'react'
import OneProductItem from '../../components/OneProductItem'
import {FaSearch} from 'react-icons/fa'
function AllProducts() {
  return (
    <section
    style={{backgroundColor : "#F9F8F3" }}
     className="py-20 bg-gray-100">
    <div className=" mx-auto px-4">
      <div className="flex flex-wrap -mx-4 mb-20 items-center justify-between md:grid md:grid-cols-2 ">
        <div className="w-full ml-8 lg:w-auto px-4 mb-12 xl:mb-0 flex gap-x-4">
          <input  placeholder='enter something'  className='appearence-none w-3/4 shadow-lg p-2 border-2 rounded-lg' />
          <div className='h-12 w-12 rounded-lg bg-green-700 flex justify-center items-center cursor-pointer '>
            <FaSearch size={24} className='text-white' />
          </div>
        </div>
        <div className="w-full lg:w-auto px-4 flex flex-wrap items-center">
          <div className="w-full sm:w-auto mb-4 sm:mb-0 mr-5">
            <select
              className="pl-8 py-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
              name=""
              id=""
            >
              <option value={1}> category</option>
              <option value={2}>drones</option>
              <option value={3}>soil test</option>
            </select>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0 mr-5">
            <select
              className="pl-8 py-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
              name=""
              id=""
            >
              <option value={1}> rate</option>
              <option value={2}>1-2</option>
              <option value={3}>2-3</option>
            </select>
          </div>
          <div className="w-full sm:w-auto mb-4 sm:mb-0 mr-5">
            <select
              className="pl-8 py-4 bg-white text-lg border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
              name=""
              id=""
            >
              <option value={1}>price</option>
              <option value={2}>1-45</option>
              <option value={3}>46-200</option>
            </select>
          </div>
     
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-24">
      
    
          <div className="flex flex-wrap -mx-3 gap-3 w-full justify-center">

           

<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />
<OneProductItem />

        
        </div>
      </div>
      <div className="text-center">
        <a
          className="inline-block bg-green-300 hover:bg-green-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase"
          href="#"
        >
          Show More
        </a>
      </div>
    </div>
  </section>
  
  )
}

export default AllProducts