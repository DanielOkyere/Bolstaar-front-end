import React from 'react'
import AuthLayout from './auth-layout'
import TlaFormWrapper from '../../components/tla-form-wrapper'
import { Form, Input } from 'antd'
import AuthBottomLink from './auth-bottom-link'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAuthentication } from '../../actions/authenticate/Actions'
import PropTypes from 'prop-types'
import GoogleLogin from './google-login'

function SignIn (props) {
  const { authenticateUser } = props

  return (
        <AuthLayout pageTitle={'Sign in to your account'}>
            <div>
                <TlaFormWrapper afterSubmit={'/'} buttonText={'Sign in'} onSubmit={authenticateUser}>
                    <Form.Item name="identifier" label="Email*"
                               rules={[
                                 {
                                   required: true,
                                   message: 'Email is Required'
                                 }
                               ]}>
                        <Input size={'large'} placeholder={'Enter your email'}/>
                    </Form.Item>
                    <Form.Item name="password"
                               label={'Password'}
                               rules={[
                                 { required: true, message: 'Password is required!' },
                                 { min: 8, message: '' }
                               ]}>
                        <Input.Password
                            size={'large'}
                            type={'password'}
                            placeholder="••••••••"/>
                    </Form.Item>
                    <div className={'flex items-center justify-end mb-4'}>
                        <Link className={'text-primary-700'} to={'/forgot-password'}>Forgot Password</Link>
                    </div>
                </TlaFormWrapper>
                <div className={'mb-3'}>
                    <GoogleLogin/>
                </div>
                <AuthBottomLink text={'Don’t have an account?'} link={'/sign-up'} linkText={'Sign up'}/>
            </div>
        </AuthLayout>
  )
}

SignIn.propTypes = {
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

export default connect(null, mapDispatchToProps)(SignIn)
