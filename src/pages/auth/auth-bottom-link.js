import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function AuthBottomLink ({ text, linkText, link, size, color }) {
  return (
        <div className={'text-center'}>
            <p className={`text-${size} text-gray-500 flex justify-center items-center`}>
                <span>{text}</span>&nbsp;
                <Link className={`text-${color}`} to={link}>{linkText}</Link>
            </p>
        </div>
  )
}

AuthBottomLink.defaultProps = {
  size: 'base',
  color: 'primary-700'
}

AuthBottomLink.propTypes = {
  text: PropTypes.any,
  linkText: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  link: PropTypes.string
}

export default AuthBottomLink
