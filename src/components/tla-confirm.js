import { Button, Modal } from 'antd'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import PropTypes from 'prop-types'

const TlaConfirm = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { title, callBack, children, showIcon, danger, btnType, fullText } = props

  const confirm = () => {
    Modal.confirm({
      title,
      icon: <></>,
      content: fullText,
      okText: children,
      cancelText: 'No, keep it',
      className: 'tla-delete-confirm',
      okButtonProps: {
        className: 'btn confirm-delete-btn',
        danger: true,
        size: 'large',
        block: true
      },
      cancelButtonProps: {
        className: 'btn',
        size: 'large',
        block: true
      },
      onOk: callBack
    })
  }
  return (
        <>
            <Button className={'hover:!bg-white-000'}
                    type={btnType}
                    size={'small'} onClick={confirm}
                    icon={showIcon && <FiTrash2 className={'icon'}/>}>
                {children}
            </Button>
        </>
  )
}

TlaConfirm.defaultProps = {
  title: '',
  fullText: 'Do you want to delete ',
  children: 'Delete',
  callBack: () => {
  },
  showIcon: true,
  btnType: 'text',
  danger: false
}

TlaConfirm.propTypes = {
  title: PropTypes.string,
  fullText: PropTypes.string,
  children: PropTypes.any,
  callBack: PropTypes.func,
  showIcon: PropTypes.bool,
  btnType: PropTypes.string,
  danger: PropTypes.bool
}
export default TlaConfirm
