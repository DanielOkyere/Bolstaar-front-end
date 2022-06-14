import React from 'react'
import DroneImage from '../Assets/Images/drones.png'
import {BiLeftArrowAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'
function CartScreen() {
  return (
<section className="py-20 bg-gray-100">
  <div className=" mx-auto px-4">
    <div className="p-8 lg:p-20 bg-white">
        <div className='flex gap-x-2 '>  <Link  to="/products"
       className='bg-green-700 shadow-md cursor-pointer  hover:bg-green-800 ml-8 w-16 h-16 rounded-lg flex items-center justify-center '>
<BiLeftArrowAlt  size={58} color='white'  className='text-white fill-current font-bold'/>
    </Link>
      <h2 className="mb-20 text-5xl font-bold font-heading">Your cart</h2></div>
    
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full xl:w-8/12 mb-8 xl:mb-0 px-4">
          <div className="hidden lg:flex w-full">
            <div className="w-full lg:w-3/6">
              <h4 className="mb-6 font-bold font-heading text-gray-500">
                Description
              </h4>
            </div>
            <div className="w-full lg:w-1/6">
              <h4 className="mb-6 font-bold font-heading text-gray-500">
                Price
              </h4>
            </div>
            <div className="w-full lg:w-1/6 text-center">
              <h4 className="mb-6 font-bold font-heading text-gray-500">
                Quantity
              </h4>
            </div>
            <div className="w-full lg:w-1/6 text-right">
              <h4 className="mb-6 font-bold font-heading text-gray-500">
                Subtotal
              </h4>
            </div>
          </div>
          <div className="mb-12 py-6 border-t border-b border-gray-200">
            <div className="flex flex-wrap items-center -mx-4 mb-6 md:mb-3">
              <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                <div className="flex -mx-4 flex-wrap items-center">
                  <div className="w-full md:w-1/3 px-4 mb-3">
                    <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                      <img
                        className="h-full object-contain"
                        src={DroneImage}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-2/3 px-4">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      BRILE water filter carafe
                    </h3>
                    <p className="text-gray-500">Maecenas 0.7 commodo sit</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-2/12 px-4">
                <p className="text-lg text-green-500 font-bold font-heading">
                  $29.89
                </p>
                <span className="text-xs text-gray-500 line-through">
                  $33.69
                </span>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-green-300 focus:border-green-300 rounded-md">
                  <button className="py-2 hover:text-gray-700">
                    <svg
                      width={12}
                      height={2}
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.35">
                        <rect
                          x={12}
                          width={2}
                          height={12}
                          transform="rotate(90 12 0)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                  <input
                    className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                    type="number"
                    placeholder={1}
                  />
                  <button className="py-2 hover:text-gray-700">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.35">
                        <rect x={5} width={2} height={12} fill="currentColor" />
                        <rect
                          x={12}
                          y={5}
                          width={2}
                          height={12}
                          transform="rotate(90 12 5)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                <p className="text-lg text-green-500 font-bold font-heading">
                  $29.89
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full md:w-4/6 lg:w-6/12 px-4 mb-6 md:mb-0">
                <div className="flex -mx-4 flex-wrap items-center">
                  <div className="w-full md:w-1/3 px-4 mb-3">
                    <div className="flex items-center justify-center w-full md:w-24 h-32 bg-gray-100">
                      <img
                        className="h-full object-contain"
                        src={DroneImage}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3 px-4">
                    <h3 className="mb-2 text-xl font-bold font-heading">
                      Nike basketball ball
                    </h3>
                    <p className="text-gray-500">Lorem ipsum dolor L</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:w-2/12 px-4">
                <p className="text-lg text-green-500 font-bold font-heading">
                  $29.89
                </p>
                <span className="text-xs text-gray-500 line-through">
                  $33.69
                </span>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4">
                <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-green-300 focus:border-green-300 rounded-md">
                  <button className="py-2 hover:text-gray-700">
                    <svg
                      width={12}
                      height={2}
                      viewBox="0 0 12 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.35">
                        <rect
                          x={12}
                          width={2}
                          height={12}
                          transform="rotate(90 12 0)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                  <input
                    className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md"
                    type="number"
                    placeholder={1}
                  />
                  <button className="py-2 hover:text-gray-700">
                    <svg
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.35">
                        <rect x={5} width={2} height={12} fill="currentColor" />
                        <rect
                          x={12}
                          y={5}
                          width={2}
                          height={12}
                          transform="rotate(90 12 5)"
                          fill="currentColor"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-auto md:w-1/6 lg:w-2/12 px-4 text-right">
                <p className="text-lg text-green-500 font-bold font-heading">
                  $29.89
                </p>
              </div>
            </div>
          </div>
            {/* <div className="flex flex-wrap items-center lg:-mb-4">
                <span className="mr-12 mb-4 font-medium">Apply discount code:</span>
                <input
                className="flex-1 md:flex-none mr-6 sm:mr-0 md:mr-6 mb-4 px-8 py-4 placeholder-gray-800 font-bold font-heading border rounded-md"
                type="text"
                placeholder="SUMMER30X"
                />
                <a
                className="flex-1 md:flex-none inline-block mb-4 px-8 py-4 text-center text-white font-bold font-heading uppercase bg-gray-800 hover:bg-gray-700 rounded-md"
                href="#"
                >
                Apply
                </a>
            </div> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <div className="p-6 md:p-12 bg-green-700">
            <h2 className="mb-6 text-4xl font-bold font-heading text-white">
              Cart totals
            </h2>
            <div className="flex mb-8 items-center justify-between pb-5 border-b border-green-100">
              <span className="text-green-50">Subtotal</span>
              <span className="text-xl font-bold font-heading text-white">
                $89.67
              </span>
            </div>
            <h4 className="mb-2 text-xl font-bold font-heading text-white">
              Shipping
            </h4>
            <div className="flex mb-2 justify-between items-center">
              <span className="text-green-50">Next day</span>
              <span className="text-xl font-bold font-heading text-white">
                $11.00
              </span>
            </div>
            <div className="flex mb-10 justify-between items-center">
              <span className="text-green-50">Shipping to United States</span>
              <span className="text-xl font-bold font-heading text-white">
                -
              </span>
            </div>
            <div className="flex mb-10 justify-between items-center">
              <span className="text-xl font-bold font-heading text-white">
                Order total
              </span>
              <span className="text-xl font-bold font-heading text-white">
                $100.67
              </span>
            </div>
            <div
              className="block w-full py-4 bg-white hover:bg-green-50 cursor-pointer text-center  font-bold font-heading uppercase rounded-md transition duration-200"
        
            >
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default CartScreen