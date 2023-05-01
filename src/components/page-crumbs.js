import React from 'react'
import { Breadcrumb } from 'antd'
import { IoIosArrowForward } from 'react-icons/io'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { capitalize } from '../utils'
import { FiHome } from 'react-icons/fi'

const PageCrumbs = ({ homePath }) => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)

  // eslint-disable-next-line react/prop-types
  const LinkItem = ({ url, item, isURL }) => (
    isURL
      ? <p>{
          capitalize(decodeURIComponent(item)
            .replace('-', ' ')
            .replace('_', ' '))
      }</p>
      : <Link to={url}>
                {
                    capitalize(decodeURIComponent(item)
                      .replace('-', ' ')
                      .replace('_', ' '))
                }
            </Link>
  )
  return (
        <Breadcrumb separator={<IoIosArrowForward/>} className={'flex items-center'}>
            <Breadcrumb.Item className={'pt-3'}>
                <Link to={homePath}>
                    <FiHome/>
                </Link>
            </Breadcrumb.Item>
            {
                pathSnippets.map((_, index) => {
                  const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
                  return (
                        <Breadcrumb.Item key={url} style={{ fontSize: index === 0 && 16 }}>
                            <LinkItem item={pathSnippets[index]} url={url} isURL={index === (pathSnippets.length - 1)}/>
                        </Breadcrumb.Item>
                  )
                })
            }
        </Breadcrumb>
  )
}

PageCrumbs.defaultProps = {
  homePath: '/'
}

PageCrumbs.propTypes = {
  homePath: PropTypes.string
}

export default PageCrumbs
