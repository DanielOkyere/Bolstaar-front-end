import React, { useState } from 'react'
import Logo from '../../assets/images/logo.svg'
import { Button, Drawer } from 'antd'
import { FiMenu } from 'react-icons/fi'
import { LandingPageMenus } from '../../utils/menu-items'
import { Link } from 'react-router-dom'

function MobileNav () {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
        <div className={'block md:hidden'}>
            <div className={'bg-white-000 h-[50px] flex justify-between items-center mx-[25px]'}>
                <img src={Logo} alt={'Bolstaar'}/>
                <Button onClick={showDrawer} className={'border-0'}>
                    <FiMenu className={'text-2xl'}/>
                </Button>
            </div>

            <Drawer title="Menu" placement="right" onClose={onClose} open={open}>
                <div className={'flex flex-col'}>
                    {
                        LandingPageMenus.map(({ link, title }, index) => (
                            <div className={'border-b py-2 uppercase'} key={index}>
                                <Link className={'mx-[38px]'} to={link}>{title}</Link>
                            </div>
                        ))
                    }
                </div>
            </Drawer>
        </div>
  )
}

export default MobileNav
