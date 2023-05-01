import React from 'react'
import { Button, Form, Input } from 'antd'
import Send from '../../../assets/images/send.png'

function Updates () {
  return (
        <div className={'w-full md:w-[407px] text-white-200'}>
            <h6 className={'text-base font-bold text-white-000 mb-7'}>
                Updates
            </h6>
            <div className={'text-sm'}>
                Sign up for our updates and to get more events, promotions & news from us!
            </div>
            <div className={'mt-5'}>
                <Form>
                    <Form.Item>
                        <Input
                            placeholder={'Enter your email'}
                            className={'h-12 rounded-[40px] email-input !pl-3'}
                            suffix={
                                <Button htmlType={'submit'}
                                        className={'border-0 flex items-center'}>
                                    <img src={Send} alt={'Send'} className={'absolute right-[5px]'}/>
                                </Button>
                            }
                        />
                    </Form.Item>
                </Form>
            </div>
        </div>
  )
}

export default Updates
