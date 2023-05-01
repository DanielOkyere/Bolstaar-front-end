import React from 'react'
import { Dropdown } from 'antd'
import { RiUser6Line } from 'react-icons/ri'
import { FiLogOut } from 'react-icons/fi'
import Boot from '../../assets/images/boot.png'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleLogout } from '../../actions/authenticate/Actions'

// eslint-disable-next-line react/prop-types
const NavProfile = ({ logout }) => {
  const items = [
    {
      key: 'account',
      label: (
                <Link to={'/my-profile/general'}>
                    My Account
                </Link>
      ),
      icon: <RiUser6Line className={'h-4 w-4'}/>
    },
    {
      key: 'logOut',
      label: (
                <a rel="noopener noreferrer"
                   href={'javascript:void(0)'}
                   onClick={() => {
                     logout()
                   }}>
                    Logout
                </a>
      ),
      icon: <FiLogOut className={'h-4 w-4'}/>
    }
  ]
  return (
        <Dropdown placement={'bottomRight'} menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
                <img src={Boot} alt="Boot" className={'h-12 w-12 rounded-full cursor-pointer'}/>
            </a>
        </Dropdown>
  )
}
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(handleLogout())
})

export default connect(null, mapDispatchToProps)(NavProfile)
