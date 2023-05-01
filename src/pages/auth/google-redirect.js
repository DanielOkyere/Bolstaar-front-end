import React from 'react'
import AuthLayout from './auth-layout'
import { connect } from 'react-redux'
import { handleAuthentication } from '../../actions/authenticate/Actions'
import PropTypes from 'prop-types'

function GoogleRedirect (props) {
  return (
        <AuthLayout pageTitle={'Please Wait'}>
            <div>
               Redirect
            </div>
        </AuthLayout>
  )
}

GoogleRedirect.propTypes = {
  authenticateUser: PropTypes.func.isRequired
}

/**
 *
 * @param dispatch
 * @returns {{authenticateUser: (function(*): *)}}
 */
const mapDispatchToProps = (dispatch) => {
  return {
    authenticateUser: (values) => dispatch(handleAuthentication(values))
  }
}

export default connect(null, mapDispatchToProps)(GoogleRedirect)
