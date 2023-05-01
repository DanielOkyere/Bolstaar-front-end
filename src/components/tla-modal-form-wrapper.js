import React from 'react'
import { Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import { TlaModal } from './pop-ups/tla-modal'
import PropTypes from 'prop-types'
import { TlaError, TlaSuccess } from '../utils/messages'

function TlaModalFormWrapper (props) {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const { onSubmit, initialValues, formTitle, children, file, width } = props

  const submit = (values) => {
    const formData = new FormData()
    values.id !== 0 && formData.append('_method', 'PUT')

    // eslint-disable-next-line no-unused-expressions
    file !== null ? formData.append('file', file) : ''

    for (const key in values) {
      if (Object.prototype.hasOwnProperty.call(values, key)) {
        formData.append(key, values[key])
      }
    }

    onSubmit(formData).then(() => {
      TlaSuccess()
      form.resetFields()
      navigate(-1)
    }).catch((error) => {
      TlaError(error.response.data.message)
    })
  }
  return (
        <TlaModal title={formTitle} width={width}>
            <Form
                form={form}
                onFinish={(values) => { submit(values) }}
                layout="vertical"
                name="formName"
                initialValues={initialValues}>
                {children}
            </Form>
        </TlaModal>
  )
}

TlaModalFormWrapper.defaultProps = {
  file: null,
  width: 520
}

TlaModalFormWrapper.propTypes = {
  initialValues: PropTypes.object,
  submitValues: PropTypes.object,
  formTitle: PropTypes.string,
  onSubmit: PropTypes.func,
  file: PropTypes.any,
  width: PropTypes.any,
  children: PropTypes.any
}

export default TlaModalFormWrapper
