import React from 'react'
import { Col, Form, Input, Row } from 'antd'
import ShadowButton from '../../components/shadow-button'

function ChangePassword () {
  return (
      <Form layout={'vertical'} requiredMark={false}>
          <Row>
              <Col span={24}>
                  <Form.Item name="current_password"
                             label={'Current Password*'}
                             rules={[
                               { required: true, message: 'Password is required!' },
                               { min: 8, message: '' }
                             ]}>
                      <Input.Password
                          size={'large'}
                          type={'password'}
                          placeholder="••••••••"/>
                  </Form.Item>
              </Col>
              <Col span={24}>
                  <Form.Item name="password"
                             label={'New Password*'}
                             rules={[
                               { required: true, message: 'Password is required!' },
                               { min: 8, message: '' }
                             ]}>
                      <Input.Password
                          size={'large'}
                          type={'password'}
                          placeholder="••••••••"/>
                  </Form.Item>
              </Col>
              <Col span={24}>
                  <Form.Item
                      dependencies={['password']}
                      name="password_confirmation"
                      label={'Confirm New Password*'}
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
              </Col>
              <Col span={24}>
                  <div className={'flex justify-end'}>
                      <div className={'w-fit'}>
                          <ShadowButton buttonText={'Save Changes'} buttonType={'submit'}/>
                      </div>
                  </div>
              </Col>
          </Row>
      </Form>
  )
}

export default ChangePassword
