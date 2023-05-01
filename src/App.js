import React from 'react'
import './App.css'
import { PublicRoutes } from './components/routes/public-routes'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ProtectedRoutes } from './components/routes/protected-routes'

function App ({ authenticated }) {
  return (
        <div>
            {
                authenticated
                  ? <ProtectedRoutes/>
                  : <PublicRoutes/>
                }
        </div>
  )
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.loginReducer.authenticated,
    authUser: state.loginReducer.authUser
  }
}

export default connect(mapStateToProps)(App)
