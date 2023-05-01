import React from 'react'
import { Button } from 'antd'
import PropTypes from 'prop-types'

function ShadowButton ({ buttonText, buttonType }) {
  return (
        <div className={'relative w-full'}>
            <Button htmlType={buttonType} className={'btn-success-landing'} size={'large'}>
                {buttonText}
            </Button>
            <div className={'absolute'} style={{
              background: 'rgba(56, 245, 86, 0.14)',
              filter: 'blur(27px)',
              borderRadius: '10px',
              height: '100%',
              width: '138px',
              left: '10px'
            }}>&nbsp;</div>
        </div>
  )
}

ShadowButton.defaultProp = {
  buttonType: 'button'
}

ShadowButton.propTypes = {
  buttonType: PropTypes.string,
  buttonText: PropTypes.string
}

export default ShadowButton
