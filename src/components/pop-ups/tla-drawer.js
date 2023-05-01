import React from 'react'
import PopUps from './index'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

export default function TlaDrawer ({ children, extra }) {
  const navigate = useNavigate()
  return (
        <PopUps>
            <div className="ant-drawer ant-drawer-right ant-drawer-open" tabIndex="-1">
                <div className="ant-drawer-mask"></div>
                <div tabIndex="0" aria-hidden="true" data-sentinel="start"
                     style={{ width: '0px', height: '0px', overflow: 'hidden', outline: 'none', position: 'absolute' }}></div>
                <div className="ant-drawer-content-wrapper" style={{ width: '680px' }}>
                    <div className="ant-drawer-content" aria-modal="true" role="dialog">
                        <div className="ant-drawer-wrapper-body">
                            <div className="ant-drawer-header">
                                <div className="ant-drawer-header-title">
                                    <div className="ant-drawer-title">
                                        <button onClick={() => navigate(-1)} type="button" className="ant-btn ant-btn-default">
                                            <span>Cancel</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="ant-drawer-extra">
                                    {extra}
                                </div>
                            </div>
                            <div className="ant-drawer-body" style={{ paddingBottom: '80px' }}>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <div tabIndex="0" aria-hidden="true" data-sentinel="end"
                     style={{
                       width: '0px', height: '0px', overflow: 'hidden', outline: 'none', position: 'absolute'
                     }}></div>
            </div>
        </PopUps>
  )
}

TlaDrawer.propTypes = {
  children: PropTypes.any,
  extra: PropTypes.any
}
