import React from 'react'
import Boot from '../../assets/images/boot.png'
import { Button } from 'antd'

function ProfilePhoto () {
  return (
        <div>
            <div className={'w-full md:w-[500px] mx-auto text-center'}>
                <img className={'rounded-full h-[100px] w-[100px] mx-auto mb-4'} src={Boot} alt={Boot}/>
                <div>
                    <h1 className={'text-gray-900 font-medium text-3xl'}>James Mireku</h1>
                    <p className={'text-gray-500'}>james.mireku@gmail.com</p>
                </div>
              <div className={'mt-4 flex gap-x-4 justify-center'}>
                <Button size={'large'}>Change Photo</Button>
                <Button size={'large'} type={'text'}>Remove photo</Button>
              </div>
            </div>
        </div>
  )
}

export default ProfilePhoto
