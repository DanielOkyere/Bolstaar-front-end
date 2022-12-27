import React from 'react'
import NavBar from '../components/rebuild/NavBar'
import { Link } from 'react-router-dom'
import notfound from '../../src/Assets/Images/notfound.svg'
function NotFound () {
  return (
    <>
      <NavBar />
      <div className='container mx-auto px-4 not_found min-h-full'>
        <p className='flex justify-center align-middle my-5 mx-10 h2'>Sorry, We could not find what you were looking for, let us get you home</p>
        <div className='flex justify-center h-screen '>
          <Link to='/' className='btn btn-primary my-24 w-1/4'>Lets get you home</Link>
        </div>

      </div>
    </>
  )
}

export default NotFound
