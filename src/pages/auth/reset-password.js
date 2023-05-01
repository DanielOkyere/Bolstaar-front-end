import React from 'react'
import AuthLayout from './auth-layout'
import TlaFormWrapper from '../../components/tla-form-wrapper'
import { Form, Input } from 'antd'
import AuthBottomLink from './auth-bottom-link'
import { FiArrowLeft } from 'react-icons/fi'

function ResetPassword () {
  return (
        <AuthLayout pageTitle={'Reset Password'}>
            <div>
                <TlaFormWrapper buttonText={'Save Changes'}>
                    <Form.Item name="password"
                               label={'New Password'}
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
                        label={'Confirm New Password'}
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
                <div className={'mt-4'}>
                    <AuthBottomLink
                        text={<FiArrowLeft size={18}/>}
                        link={'/'}
                        linkText={'Back to login'}
                        size={'sm'}
                        color={'gray-500'}
                    />
                </div>
            </div>
        </AuthLayout>
  )
}

export default ResetPassword
