import React from 'react'
import AuthLayout from './auth-layout'
import TlaFormWrapper from '../../components/tla-form-wrapper'
import { Form, Input } from 'antd'
import AuthBottomLink from './auth-bottom-link'
import { FiArrowLeft } from 'react-icons/fi'

function ForgotPassword () {
  return (
        <AuthLayout pageTitle={'Forgot password?'}>
            <div>
                <p className={'text-gray-500 text-base text-center mb-4'}>No worries, we’ll send you reset instructions.</p>
                <TlaFormWrapper buttonText={'Send reset link'}>
                    <Form.Item name="email" label="Email"
                               rules={[
                                 {
                                   required: true,
                                   message: 'Email is Required'
                                 }
                               ]}>
                        <Input size={'large'} placeholder={'Enter your email'}/>
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

export default ForgotPassword
