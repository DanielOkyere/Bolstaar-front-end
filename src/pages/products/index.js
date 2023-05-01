import React, { useEffect, useState } from 'react'
import Categories from '../SingleProduct/details/related-products/categories'
import Product from '../../components/product'
import { Link, useOutletContext } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleGetAllProducts } from '../../actions/products/Actions'
import PropTypes from 'prop-types'
import { Spin } from 'antd'

function Products (props) {
  const { products, getProducts } = props
  const [loading, setLoading] = useState(true)

  const { setTitle } = useOutletContext()

  useEffect(() => {
    getProducts().then(() => {
      setLoading(false)
    }).catch(() => setLoading(false))
    setTitle('Explore what we have to offer')
  }, [])

  return (
        <div>
            <div className={'overflow-auto mt-6'}>
                <Categories/>
            </div>
            <div className={'flex flex-wrap justify-center md:justify-start gap-x-[20px] gap-y-6 mt-6'}>
                <Spin spinning={loading}>
                    {
                        products.data.map((item, index) => (
                            <Link
                                to={item.attributes.name.replace(' ', '-')}
                                key={index} state={{ productId: item.id }}>
                                <Product product={item}/>
                            </Link>
                        ))
                    }
                </Spin>
            </div>
        </div>
  )
}

Products.propTypes = {
  products: PropTypes.object.isRequired,
  getProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: state.productsReducer.products
})

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(handleGetAllProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)
