import React from 'react'
import { connect } from 'react-redux'
import { TlaModal } from '../../components/pop-ups/tla-modal'

export const CompleteCheckout = () => {
  return (
        <TlaModal title={'Order Received'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet, animi assumenda commodi corporis
            dolore earum eos facilis illum in magnam minima natus perferendis porro, quia sequi soluta veritatis?
        </TlaModal>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(null, mapDispatchToProps)(CompleteCheckout)
