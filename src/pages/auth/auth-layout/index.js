import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Landing from '../../landing'

function AuthLayout ({ children, pageTitle, token }) {
  return (
    token !== null
      ? <Landing/>
      : <div className={'bg-white-000 auth-layout'}>
        <div className={'flex justify-between items-center h-screen'}>
            <div className={'bg-auth-bg bg-cover no-repeat w-1/2 h-full hidden md:block'}></div>
            <div className={'w-full md:w-1/2 flex justify-center items-center'}>
                <div className={'w-[360px]'}>
                    <div className={'bg-logo h-10 w-10 mx-auto mb-[17px]'}></div>
                    <h3 className={'text-center text-gray-900 font-semibold text-3xl leading-[38px] mb-3'}>
                        {pageTitle}
                    </h3>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

AuthLayout.propTypes = {
  token: null
}

AuthLayout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string,
  token: PropTypes.any
}

/**
 *
 * @param state
 * @returns {{token: (null|*)}}
 */
const mapStateToProps = (state) => ({
  token: state.loginReducer.authToken
})

export default connect(mapStateToProps)(AuthLayout)
