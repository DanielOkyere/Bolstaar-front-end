import React, { useEffect } from 'react'
import { Col, Form, Input, Row } from 'antd'
import ShadowButton from '../../components/shadow-button'
import { connect } from 'react-redux'
import { handleGetMyProfile } from '../../actions/authenticate/Actions'

// eslint-disable-next-line react/prop-types
function General ({ getMyProfile, authToken }) {
  useEffect(() => {
    getMyProfile(authToken).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])
  return (
        <Form layout={'vertical'}>
            <Row>
                <Col span={24} className={'mb-6'}>
                    <Form.Item label={'Fullname'} help={'This name will be showed on your profile'}>
                        <Input size={'large'}/>
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item
                        rules={[{
                          type: 'email',
                          message: 'Invalid Email'
                        }]}
                        label={'Email'}>
                        <Input size={'large'}/>
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

const mapStateToProps = (state) => ({
  authToken: state.loginReducer.authToken
})

const mapDispatchToProps = (dispatch) => ({
  getMyProfile: (token) => dispatch(handleGetMyProfile(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(General)
