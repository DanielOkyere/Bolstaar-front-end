import React from 'react'
import AuthLayout from './auth-layout'
import TlaFormWrapper from '../../components/tla-form-wrapper'
import { Form, Input } from 'antd'
import AuthBottomLink from './auth-bottom-link'
import { handleRegistration } from '../../actions/authenticate/Actions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import GoogleLogin from './google-login'

function Register ({ registerUser }) {
  return (
        <AuthLayout pageTitle={'Create an account'}>
            <div>
                <TlaFormWrapper afterSubmit={'/'} buttonText={'Create my account'} onSubmit={registerUser}>
                    <Form.Item name="username" label="Name*"
                               rules={[
                                 {
                                   required: true,
                                   message: 'Name is Required'
                                 }
                               ]}>
                        <Input size={'large'} placeholder={'Enter your name'}/>
                    </Form.Item>
                    <Form.Item name="email" label="Email*"
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
                    <Form.Item
                        dependencies={['password']}
                        name="password_confirmation"
                        label={'Confirm password'}
                        rules={[
                          {
                            required: true,
                            message: 'Password is required!'
                          }, ({ getFieldValue }) => ({
                            validator (_, value) {
                              if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                              }
                              return Promise.reject(new Error('Password mismatch'))
                            }
                          }),
                          {
                            min: 8,
                            message: 'Password should be at least 8 characters'
                          }
                        ]}>
                        <Input.Password
                            size={'large'}
                            type="password"
                            placeholder="••••••••"
                        />
                    </Form.Item>
                </TlaFormWrapper>
                <div className={'mb-4'}>
                    <GoogleLogin/>
                </div>
                <AuthBottomLink text={'Already have an account?'} link={'/'} linkText={'Sign in'}/>
            </div>
        </AuthLayout>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (values) => dispatch(handleRegistration(values))
  }
}

export default connect(null, mapDispatchToProps)(Register)
