
import React, { Fragment, useRef, useState } from 'react'
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
      <div className='mt-3 container'>
        <div className='flex flex-col mx-24 mt-16'>
          <ul>
            <div className='flex flex-row space-x-24 space-y-24'>
              <div className='farm_tools cursor-pointer rounded-lg  shadow-lg w-32 h-32' onClick={() => setShowModal(true)}>
                <h4>Farm Tools</h4>
              </div>
              <div className='farm_machinery cursor-pointer rounded-lg  shadow-lg w-32 h-32' onClick={() => setShowModal(true)}>
                <h4>Farm machinery</h4>
              </div>
            </div>
            <div className='mx-auto mt-8 align-self-center'>
              <div className='accessories cursor-pointer rounded-lg  shadow-lg w-32 h-32' onClick={() => setShowModal(true)}>
                <h4>Other Accessories</h4>
              </div>
            </div>
          </ul>
        </div>
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

function Modal({ visible, onClose }) {
  if (!visible) return null;
  const handleOnClose = (e) => {
      if (e.target.id === "modalContainer")
          onClose();
  };
  return (
      <>
          <div id="modalContainer"
              onClick={handleOnClose} className="
          fixed inset-0 bg-opacity-30 backdrop-blur-sm
          flex justify-center items-center
          ">
              <div className="bg-white p-2 rounded">
                  <form className='mb-4 items-center' >
                      <div className="mb-4  md:w-full">
                          <label htmlFor="item_name" className="block text-xs mb-1">
                              Item Name
                          </label>
                          <input type="text" className="w-full border rounded p-2 outline-none focus:shadow-outline"
                              name="item_name" id="item_name" placeholder="Item Name" />
                      </div>
                      <div className="mb-4 md:w-full">
                          <label htmlFor="item_quantity" className="block text-xs mb-1">
                              Item Quantity
                          </label>
                          <input type="item_quantity" className="w-full border rounded p-2 outline-none focus:shadow-outline"
                              name="item_quantity" id="item_quantity" placeholder="Item Quantity" />
                      </div>
                      <div className="mb-4 md:w-full">
                          <label htmlFor="contact_person" className="block text-xs mb-1">
                              Contact Person
                          </label>
                          <input type="contact_person" className="w-full border rounded p-2 outline-none focus:shadow-outline"
                              name="contact_person" id="contact_person" placeholder="Contact Person" />
                      </div>
                      <div className="mb-4 md:w-full">
                          <label htmlFor="delivery_to" className="block text-xs mb-1">
                              Delivery To
                          </label>
                          <input type="delivery_to" className="w-full border rounded p-2 outline-none focus:shadow-outline"
                              name="delivery_to" id="delivery_to" placeholder="Item Quantity" />
                      </div>
                      <div className="flex justify-center items-center gap-4">
                          <input type="submit" className='bg-green-700 w-24 font-[700] mt-10 uppercase cursor-pointer hover:bg-green-900 shadow-md  h-16 rounded-full text-white self-center ' value="Submit" />
                          <button onClick={onClose} className="bg-gray-400 w-24 rounded-full uppercase cursor-pointer shadow-md h-16 mt-10 text-white ">Close</button>
                      </div>

                  </form>
              </div>

          </div>
      </>)
}
export default Dashboard

