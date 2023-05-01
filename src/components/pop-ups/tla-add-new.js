import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

function TlaAddNew ({ link, children, data }) {
  const location = useLocation()
  return (
        <Link to={link} state={{ background: location, data }}>
            {children}
        </Link>
  )
}

TlaAddNew.defaultProps = {
  link: '#'
}

TlaAddNew.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
  link: PropTypes.string
}

export default TlaAddNew
