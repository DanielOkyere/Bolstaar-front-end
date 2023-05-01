import React from 'react'
import Stars from '../../../../assets/images/stars.png'
import ShadowButton from '../../../../components/shadow-button'
import ReviewAndDescription from './review-and-description'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

function MoreInfo ({ product }) {
  return (
        <div>
            <div className={'sm:border-l pl-0 md:pl-8 w-full md:w-[485px]'}>
                <h3 className={'text-[28px] leading-7 font-bold text-black-100 mb-[11px]'}>
                    {product.attributes?.name}
                </h3>
                <div className={'mb-[7px] flex items-center gap-x-2.5 h-[21px]'}>
                    <img src={Stars} alt={'Stars'}/>
                    <span className={'text-sm text-gray-600'}>100 Reviews</span>
                </div>
                <h3 className={'mb-2 text-black-100 text-[28px] leading-[27px] font-bold flex items-center gap-x-2.5'}>
                    <span>GHC {product.attributes?.price_per_day}</span>
                    <span className={'text-[18px] font-semibold text-gray-500'}>per day</span>
                </h3>
                {
                    product.attributes?.delivery_available &&
                    <div className={'mb-[30px] bg-success-50 py-2 px-5 text-center rounded-[27px] w-[147px]'}>
                        <p className={'text-success-600 text-xs'}>Delivery available</p>
                    </div>
                }
                <div className={'mb-12'}>
                    <h3>Instructions</h3>
                    <div>
                        {
                            product.attributes?.instructions
                        }
                    </div>
                </div>
                <div className={'mb-[62px] w-[151px]'}>
                    <Link to={'checkout'}>
                        <ShadowButton buttonType={'button'} buttonText={'Proceed'}/>
                    </Link>
                </div>
                <ReviewAndDescription
                    description={product.attributes?.description}
                    reviews={product.attributes?.reviews}/>
            </div>
        </div>
  )
}

MoreInfo.propTypes = {
  product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  product: state.productsReducer.product
})

export default connect(mapStateToProps, null)(MoreInfo)
