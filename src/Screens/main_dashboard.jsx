import React, { Fragment, useRef, useState } from 'react'
import Modal from '../Components/Modal'
function RightContent () {
  return (
    <>
      <MainContent />
    </>
  )
}

function MainContent () {
  const [showModal, setShowModal] = useState(false)
  const handleOnClose = () => setShowModal(false)
  return (
    <>
      <div className='mt-3'>
        <ul className='flex flex-wrap gap-10  md:flex-row'>
          <div className='farm_tools cursor-pointer rounded-lg  shadow-lg' onClick={() => setShowModal(true)}>
            <h4>Farm Tools</h4>
          </div>
          <div className='farm_machinery cursor-pointer rounded-lg  shadow-lg' onClick={() => setShowModal(true)}>
            <h4>Farm machinery</h4>
          </div>
          <div className='accessories cursor-pointer rounded-lg  shadow-lg' onClick={() => setShowModal(true)}>
            <h4>Other Accessories</h4>
          </div>
        </ul>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} />
    </>
  )
}

function AdminNavBar () {
  return (
    <>
      <div className='absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4'>
        <div className='w-full mx-auto items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4'>
          <form className='sm:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3'>
            <div className='relative flex w-full flex-wrap items-stretch'>
              <input
                type='text'
                placeholder='Search here...'
                className='border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10'
              />
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

function Dashboard () {
  const [open, setOpen] = useState(true)
  const Menus = [
    { title: 'Dashboard', src: 'Chart_fill' },
    { title: 'User', src: 'User' },
    { title: 'Setting', src: 'Setting' }
  ]

  return (
    <div className='flex'>
      <div
        className={` ${open ? 'w-72' : 'w-20 '
          } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src='./src/assets/control.png'
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className='flex gap-x-4 items-center'>
          <img
            src='./src/assets/logo.png'
            className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'
              }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${!open && 'scale-0'
              }`}
          />
        </div>
        <ul className='pt-6'>
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-9' : 'mt-2'} ${index === 0 && 'bg-light-white'
                } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && 'hidden'} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className='h-screen flex-1 p-7'>
        <h1 className='text-2xl font-semibold mb-6'>Home Page</h1>
        <RightContent />
      </div>
    </div>
  )
}

export default Dashboard
