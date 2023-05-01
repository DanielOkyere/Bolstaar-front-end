import React from 'react'
import { Link } from 'react-router-dom'

function Company () {
  return (
      <div className={'text-white-200'}>
          <h6 className={'text-base font-bold text-white-000 mb-7'}>
              Company
          </h6>
          <div className={'flex gap-10'}>
              <div className={'flex flex-col gap-y-6'}>
                  <Link to={'/careers'}>Careers</Link>
                  <Link to={'/contact'}>Contact</Link>
              </div>
              <div className={'flex flex-col gap-y-6'}>
                  <Link to={'/about-us'}>Tools</Link>
                  <Link to={'/features'}>Help</Link>
                  <Link to={'/careers'}>Privacy Policy</Link>
              </div>
          </div>
      </div>
  )
}

export default Company
