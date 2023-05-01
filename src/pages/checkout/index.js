import React from 'react'
import Boot from '../../assets/images/boot.png'
import PropTypes from 'prop-types'
import { Col, DatePicker, Form, Input, Radio, Row } from 'antd'
import ShadowButton from '../../components/shadow-button'
import Mastercard from '../../assets/images/mastercard.png'
import Paypal from '../../assets/images/paypal.png'
import TlaAddNew from '../../components/pop-ups/tla-add-new'

const Title = ({ title }) => (
    <h3 className={'text-[20px] leading-[24px] font-medium'}>{title}</h3>
)
Title.propTypes = {
  title: PropTypes.string
}

function Checkout () {
  return (
        <Form layout={'vertical'}>
            <div className={'flex flex-col md:flex-row justify-between gap-[30px]'}>
                <div className={'w-full md:w-[756px]'}>
                    <div className={'rounded-lg border p-[20px] md:p-8 mb-10 bg-white-000'}>
                        <Title title={'Contact Information'}/>
                        <div className={'mt-6'}>
                            <Row gutter={32}>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'Full name'}>
                                        <Input placeholder={'Enter your full name'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'Email'}>
                                        <Input placeholder={'Enter your email'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'Mobile number'}>
                                        <Input placeholder={'Enter your mobile number'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className={'rounded-lg border p-[20px] md:p-8 mb-10 bg-white-000'}>
                        <Title title={'Delivery Information'}/>
                        <div>
                            <Row gutter={32}>
                                <Col span={12} xs={24} sm={24} md={12} className={'mt-[29px]'}>
                                    <Form.Item label="">
                                        <Radio.Group>
                                            <Radio value="apple"> Doorstep delivery </Radio>
                                            <Radio value="pear"> Pick up from office </Radio>
                                        </Radio.Group>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'Delivery date'}>
                                        <DatePicker placeholder={'Delivery date'} className={'w-full'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'Return date'}>
                                        <DatePicker placeholder={'Return date'} className={'w-full'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'City / Town'}>
                                        <Input placeholder={'Enter your city / town'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'Address'}>
                                        <Input placeholder={'Enter your address'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label={<span>Additional notes <span className={'text-gray-500'}>optional</span></span>}>
                                        <Input.TextArea rows={4} placeholder={'Anything you want us to know...'}
                                                        size={'large'}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className={'rounded-lg border p-[20px] md:p-8 mb-10 bg-white-000'}>
                        <Title title={'Payment Method'}/>
                        <div className={'mt-6'}>
                            <Row gutter={32}>
                                <Col span={24}>
                                    <div className={'flex justify-start gap-2 md:gap-8 mb-8'}>
                                        <div className={'w-[112px] h-[52px] border rounded flex items-center' +
                                            ' justify-center text-center'}>
                                            <img src={Mastercard} alt={'Mastercard'}/>
                                        </div>
                                        <div className={'w-[112px] h-[52px] border rounded flex items-center' +
                                            ' justify-center text-center'}>
                                            <img src={Paypal} alt={'Paypal'}/>
                                        </div>
                                        <div className={'w-[112px] h-[52px] border rounded flex items-center' +
                                            ' justify-center text-center'}>
                                            Mobile Money
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'Card holder'}>
                                        <Input placeholder={'Card holder'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'Card details'}>
                                        <Input prefix={
                                            <img className={'border p-1 rounded'}
                                                 width={24}
                                                 src={Mastercard} alt={'Mastercard'}/>}
                                               placeholder={'Card number'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                                <Col span={12} xs={24} sm={24} md={12}>
                                    <Form.Item label={'CVV'} help={'We do not save your card details'}>
                                        <Input placeholder={'Enter security code'} size={'large'}/>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className={'w-[426px] p-4 pb-12 border rounded-lg bg-white-000 h-fit'}>
                    <img src={Boot} alt={'Boot'} className={'h-auto md:h-[299px] w-full md:w-[392px]'}/>
                    <div className={'text-gray-500 text-base'}>
                        <div className={'flex justify-between mt-[45px]'}>
                            <p>Item Fee</p>
                            <p>GHC 300.99</p>
                        </div>
                        <div className={'flex justify-between py-[22px]'}>
                            <p>Delivery Fee</p>
                            <p>GHC 20.99</p>
                        </div>
                        <div className={'flex justify-between text-black-100 font-medium border-b pb-5 mb-12'}>
                            <p>Total</p>
                            <p>GHC 320.99</p>
                        </div>
                        <div className={'px-4 mb-[65px]'}>
                            By continuing, you agree to our <span
                            className={'text-violet-300'}>terms and conditions</span> governing the usage of this tool
                        </div>
                        <div className={'mx-auto w-[161px] md:w-fit'}>
                            <TlaAddNew link={'complete'}>
                                <ShadowButton buttonText={'Rent this tool'}/>
                            </TlaAddNew>
                        </div>
                    </div>
                </div>
            </div>
        </Form>
  )
}

export default Checkout
