import React from 'react'
import { connect } from 'react-redux'
import { handleGoogleLogin } from '../../actions/authenticate/Actions'
import PropTypes from 'prop-types'

function GoogleLogin (props) {
  // const { googleLogin } = props

  return (
        <a href={'https://bolstaar-new-admin.herokuapp.com/api/connect/google'} className={'mt-4 flex justify-center items-center' +
            ' gap-x-3'}>
            <div className={'bg-google-icon h-6 w-6'}></div>
            Sign up with Google
        </a>
  )
}

GoogleLogin.propTypes = {
  googleLogin: PropTypes.func.isRequired
}

/**
 *
 * @param dispatch
 * @returns {{googleLogin: (function(*): *)}}
 */
const mapDispatchToProps = (dispatch) => ({
  googleLogin: (values) => dispatch(handleGoogleLogin(values))
})

export default connect(null, mapDispatchToProps)(GoogleLogin)
