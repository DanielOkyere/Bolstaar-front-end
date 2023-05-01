import React, { useEffect } from 'react'
import Product from '../../components/product'
import Boot from '../../assets/images/boot.png'
import { Link, useOutletContext } from 'react-router-dom'

function SearchResults () {
  const items = [
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Wheel barrow',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Water Pump',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Water Pump',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    },
    {
      name: 'Fertilizer',
      price: 'GHC 50',
      image: Boot
    }
  ]

  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('We found 19 results for your search')
  }, [])

  return (
        <div>
            <div className={'flex flex-wrap gap-x-2 gap-y-6 mt-8'}>
                {
                    items.map((item, SearchResults) => (
                        <Link to={'/products/wallington-boots'} key={SearchResults}>
                            <Product item={item}/>
                        </Link>
                    ))
                }
            </div>
        </div>
  )
}

export default SearchResults
