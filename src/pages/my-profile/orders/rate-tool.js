import React from 'react'
import TlaModalFormWrapper from '../../../components/tla-modal-form-wrapper'
import { Form, Input } from 'antd'
import ShadowButton from '../../../components/shadow-button'

function RateTool () {
  return (
        <TlaModalFormWrapper formTitle={'Rate tool'}>
            <Form.Item label={'Add a comment'}>
                <Input.TextArea
                    rows={4}
                    placeholder={'Anything you want us to know...'}/>
            </Form.Item>
            <Form.Item>
                <div className={'w-fit mx-auto'}>
                    <ShadowButton buttonType={'submit'} buttonText={'Submit Review'}/>
                </div>
            </Form.Item>
        </TlaModalFormWrapper>
  )
}

export default RateTool
