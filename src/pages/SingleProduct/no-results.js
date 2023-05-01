import React from 'react'
import PropTypes from 'prop-types'
import Categories from './details/related-products/categories'
import SearchResultLayout from './search-result-layout'
import InfoIcon from '../../assets/images/info.svg'

function NoResults () {
  return (
        <SearchResultLayout>
            <div className={'bg-white-600 text-center'}>
                <img src={InfoIcon} alt="InfoIcon" className={'mx-auto mt-[100px] mb-6'}/>
                <div className={'max-w-screen-2xl mx-auto w-[490px]'}>
                    <h1 className={'text-6xl tracking-[-0.02em] font-semibold mb-6'}>Tool not found</h1>
                    <p className={'mb-12'}>
                        The tool you are looking for isn’t available at the set time. Here are some helpful tools:
                    </p>
                    <Categories/>
                </div>
            </div>
        </SearchResultLayout>
  )
}

NoResults.propTypes = {
  children: PropTypes.any
}

export default NoResults
