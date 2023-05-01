import React from 'react'
import { Tabs } from 'antd'

// eslint-disable-next-line react/prop-types
function ReviewAndDescription ({ description, reviews }) {
  const Description = () => (
        <div className={'text-base leading-[27px]'}>
            <h6 className={'mb-2 text-black-100 font-medium'}>About this tool</h6>
            <div className={'font-normal'}>
                {description}
            </div>
        </div>
  )

  return (
      <div className={'max-w-[421px]'}>
          <Tabs
              defaultActiveKey="1"
              items={[
                {
                  label: 'Description',
                  key: 'description',
                  children: <Description/>
                },
                {
                  label: <>Reviews </>,
                  key: 'reviews',
                  children: <>{reviews}</>
                }
              ]}
          />
      </div>
  )
}

export default ReviewAndDescription
