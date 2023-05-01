import React from 'react'
import AuthLogo from './auth-logo'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function AuthHeader ({ label, link, linkText }) {
  return (
      <div className={' bg-white-000'}>
          <div className={'flex justify-between mx-[112px] h-[72px] items-center'}>
              <AuthLogo/>
              <div>
                  <p className={'flex'}>
                      <span className={'text-gray-500'}>{label}</span>
                      &nbsp;
                      <Link to={link} className={'text-primary-700'}>{linkText}</Link>
                  </p>
              </div>
          </div>
      </div>
  )
}

AuthHeader.defaultProps = {
  label: 'Already have an account?',
  linkText: 'Sign in',
  link: 'sign-in'
}

AuthHeader.propTypes = {
  label: PropTypes.string,
  linkText: PropTypes.string,
  link: PropTypes.string
}

export default AuthHeader
