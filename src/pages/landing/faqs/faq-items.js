import React from 'react'
import { Collapse } from 'antd'
import { FiPlus } from 'react-icons/fi'

const { Panel } = Collapse

const data = [
  {
    title: 'When will I be able to rent?',
    text: 'Any day within the week, our technology helps us keep track of your request 24/7'
  },
  {
    title: 'What do I need to get started?',
    text: 'Your firstname and mobile number'
  },
  {
    title: 'How can I use the app?',
    text: 'Our application is available on computer and mobile, you can just head to Bolstaar.com and begin'
  },
  {
    title: 'What can i use this app for?',
    text: 'For rent of farm equipment like tractors and other products'
  }
]
const FaqItems = () => {
  const genExtra = () => (
        <FiPlus
            className={'text-success-100'}
            onClick={(event) => {
              event.stopPropagation()
            }}
        />
  )
  return (
        <Collapse bordered={false} ghost accordion>
            {
                data.map(({ title, text }, index) => (
                    <Panel showArrow={false} header={title} key={index} extra={genExtra()}>
                        <p>{text}</p>
                    </Panel>
                ))
            }
        </Collapse>
  )
}
export default FaqItems
