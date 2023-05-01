import React, { useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import JobItem from './job-item'

function Careers () {
  const items = [
    {
      name: 'Product Designer',
      price: 'We’re looking for a mid-level product designer to join our team.',
      tag: 'Design'
    },
    {
      name: 'Engineering Manager',
      price: 'We’re looking for an experienced engineering manager to join our team.',
      tag: 'Design'
    },
    {
      name: 'Customer Success Manager',
      price: 'We’re looking for a customer success manager to join our team.',
      tag: 'Design'
    },
    {
      name: 'Account Executive',
      price: 'We’re looking for an account executive to join our team.',
      tag: 'Design'
    },
    {
      name: 'SEO Marketing Manager',
      price: 'We’re looking for an experienced SEO marketing manager to join our team.',
      tag: 'Design'
    },
    {
      name: 'UX Researcher',
      price: 'We’re looking for a senior user researcher to join our team.',
      tag: 'Design'
    }
  ]

  const { setTitle, setHasCrumbs } = useOutletContext()

  useEffect(() => {
    setTitle('')
    setHasCrumbs(false)
  }, [])

  return (
        <div>
            <div className={'text-center mt-24'}>
                <h3 className={'text-gray-900 text-3xl md:text-[50px] font-semibold mb-5'}>Work with us</h3>
                <p className={'text-sm md:text-xl text-gray-500 leading-8 text-left md:text-center'}>
                    It is a long established fact that a reader will be distracted
                    by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that
                    it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here,
                    content here&lsquo;, making it look
                    like readable English.
                </p>
            </div>
            <div className={'mt-16 mb-16'}>
                <p className={'text-base font-semibold text-black-000 mb-3'}>Open positions</p>
                <h3 className={'text-gray-900 font-semibold text-3xl md:text-4xl mb-5'}>
                    We’re looking for talented people
                </h3>
                <p className={'text-gray-500 text-[18px] md:text-xl'}>We’re a 100% remote team spread all across the world. Join
                    us!</p>
            </div>
            <div className={'flex flex-wrap gap-2 justify-between'}>
                {
                    items.map((item, index) => (
                        <Link className={`${(index === 0 || index === 1) ? 'border-t' : ''} border-b w-full md:w-[49%]`}
                              to={'wallington-boots'} key={index}>
                            <JobItem item={item}/>
                        </Link>
                    ))
                }
            </div>
        </div>
  )
}

export default Careers
