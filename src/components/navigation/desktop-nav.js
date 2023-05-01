import React, { useEffect, useState } from 'react'
import { LandingPageMenus } from '../../utils/menu-items'
import { Link, useLocation } from 'react-router-dom'
import LogoWhite from '../../assets/images/logo-white.png'
import LogoDark from '../../assets/images/logo.svg'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import NavProfile from './nav-profile'

/**
 *
 * @param token
 * @returns {JSX.Element}
 * @constructor
 */
function DesktopNav ({ token }) {
  const [logo, setLogo] = useState(LogoWhite)
  const location = useLocation()

  useEffect(() => {
    setLogo(location.pathname === '/' ? LogoWhite : LogoDark)
  }, [location])
  return (
        <div className={`hidden md:block max-w-screen-2xl mx-auto
         ${location.pathname !== '/' ? ' border-b border-b-white-700' : ''}`}>
            <div className={'mx-[112px] h-[72px] flex justify-between items-center'}>
                <div>
                    <img src={logo} alt={'Bolstaar'}/>
                </div>
                <div className={'flex'}>
                    {
                        LandingPageMenus.map(({ link, title }, index) => (
                            <Link className={'mx-[28px]'} key={index} to={link}>{title}</Link>
                        ))
                    }
                </div>
                <div>
                    {
                        token === null
                          ? <div>
                                <Link to={'/sign-in'} className={'mr-[52px] text-[15px]'}>Log in</Link>
                                <Link to={'/sign-up'}
                                      className={'btn-light text-success-100 text-[15px] font-bold'}>
                                    Sign Up
                                </Link>
                            </div>
                          : <NavProfile/>
                    }
                </div>
            </div>
        </div>
  )
}

DesktopNav.propTypes = {
  token: null
}

DesktopNav.propTypes = {
  token: PropTypes.any
}

/**
 *
 * @param state
 * @returns {{token: (null|*)}}
 */
const mapStateToProps = (state) => ({
  token: state.loginReducer.authToken
})

export default connect(mapStateToProps)(DesktopNav)
