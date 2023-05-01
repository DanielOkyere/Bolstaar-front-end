import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import TlaConfirm from '../../components/tla-confirm'
import { Select } from 'antd'

const Item = ({ to, name, active }) => (
    <div className={`${active ? 'bg-success-50' : 'bg-white-000'} py-2 px-3 rounded-lg`}>
        <Link to={`/my-profile/${to}`} className={`${active ? 'text-success-600' : 'text-gray-700'}`}>
            {name}
        </Link>
    </div>
)
Item.propTypes = {
  to: PropTypes.string,
  active: PropTypes.bool,
  name: PropTypes.string
}

function ProfileTabs () {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const options = [
    {
      value: 'general',
      label: 'General'
    },
    {
      value: 'change-password',
      label: 'Change Password'
    },
    {
      value: 'orders',
      label: 'My Orders'
    }
  ]
  const isActive = (tab) => {
    return pathname === `/my-profile/${tab}`
  }

  return (
        <div>
            <div className={'hidden md:block'}>
                <div className={'flex flex-col gap-7 border-r pr-4'}>
                    <Item to={'general'} name={'General'} active={ isActive('general') }/>
                    <Item to={'change-password'} name={'Change Password'} active={ isActive('change-password') }/>
                    <div className={'border-b pb-[18px]'}>
                        <Item to={'orders'} name={'My Orders'} active={ isActive('orders') }/>
                    </div>
                    <div className={'px-2 delete-label'}>
                        <TlaConfirm fullText={'Are you sure you want to delete your account ? This action can’t be undone.'}
                                    title={'Delete Account'}
                                    showIcon={false} callBack={() => {}}>
                            <h3 className={'text-base'}>Delete Account</h3>
                        </TlaConfirm>

                    </div>
                </div>
            </div>
            <div className={'md:hidden'}>
                <Select
                    onChange={(value) => navigate(`/my-profile/${value}`)}
                    defaultValue="general" size={'large'} className={'w-full'}
                    options={options}
                />
            </div>
        </div>
  )
}

export default ProfileTabs
