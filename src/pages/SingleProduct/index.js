import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import Boot from '../../assets/images/boot.png'
import MoreInfo from './details/more-info'
import { connect } from 'react-redux'
import { handleGetProduct } from '../../actions/products/Actions'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router'
import { Spin } from 'antd'

function SingleProduct ({ getProduct }) {
  const [loading, setLoading] = useState(true)
  const { setTitle } = useOutletContext()

  const location = useLocation()

  useEffect(() => {
    setTitle('')
    getProduct(location.state.productId)
      .then(() => setLoading(false))
      .catch(() => setLoading(false))
  }, [])

  const images = [
    Boot,
    Boot,
    Boot,
    Boot
  ]

  return (
      <Spin spinning={loading}>
        <div className={'flex gap-x-7 flex-col md:flex-row mt-[58px]'}>
          <div>
            <div className={'flex flex-col md:flex-row gap-x-8 w-full md:w-[734px]'}>
              <div className={'flex flex-row md:flex-col gap-x-8'}>
                {
                  images.map((img, index) => (
                      <div key={index} className={'mb-8'}>
                        <img src={img} className={'rounded h-[60px] md:h-[96px] w-[60px] md:w-[96px]'} alt="Image"/>
                      </div>
                  ))
                }
              </div>
              <div>
                <div>
                  <img src={Boot} className={'rounded h-[269px] md:h-[481px] w-[343px] md:w-[606px]'} alt="Image"/>
                </div>
              </div>
            </div>
            <div className={'md:hidden mt-6'}>
              <MoreInfo/>
            </div>
            {/* <RelatedProducts/> */}
          </div>
          <div className={'hidden md:block'}>
            <MoreInfo/>
          </div>
        </div>
      </Spin>
  )
}

SingleProduct.propTypes = {
  getProduct: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id) => dispatch(handleGetProduct(id))
})

export default connect(null, mapDispatchToProps)(SingleProduct)
