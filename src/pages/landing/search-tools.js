import React from 'react'
import { Col, DatePicker, Form, Input, Row } from 'antd'
import { FiHelpCircle, FiSearch } from 'react-icons/fi'
import ShadowButton from '../../components/shadow-button'
import { Link } from 'react-router-dom'

function SearchTools () {
  return (
        <Form layout="vertical">
            <div className={'rounded-lg bg-white-000 h-full md:h-[130px] shadow-3xl mt-[-220px] md:mt-[-70px]' +
                ' py-4 md:py-0 mx-0 md:mx-[138px] px-[18px]'}>
                <Row gutter={24} align={'middle'} justify={'center'}>
                    <Col xs={24} sm={24} md={24} lg={10} className={'search-col-item'}>
                        <Form.Item label={'Name of tool'} className={'w-full'}>
                            <Input.Search
                                style={{ width: '100%' }}
                                size={'large'}
                                placeholder={'Which tool do you want to rent ?'}
                                className={'bolstaar-search'}
                                prefix={<FiSearch/>}
                                suffix={<FiHelpCircle/>}/>
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4} className={'search-col-item'}>
                        <Form.Item label={'Pickup date'}>
                            <DatePicker
                                style={{ width: '100%' }}
                                size={'large'}/>
                        </Form.Item>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={4} className={'search-col-item'}>
                        <Form.Item label={'Return date'}>
                            <DatePicker
                                style={{ width: '100%' }}
                                size={'large'}/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={4} className={'search-col-item'}>
                        <Link to={'/products/search-results'}>
                            <ShadowButton buttonText={'Search now'} buttonType={'submit'}/>
                        </Link>
                    </Col>
                </Row>
            </div>
        </Form>
  )
}

export default SearchTools
