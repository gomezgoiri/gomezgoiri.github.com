import React from 'react'
import PropTypes from 'prop-types'
import NextJsLink from 'next/link'

const assetPrefix = process.env.ASSET_PREFIX

const Link = ({ href, children, ...rest }) => {
  const customLink = href.indexOf('/') === 0

  if (customLink) {
    return (
      <NextJsLink href={href} as={`${assetPrefix}${href}`}>
        <a {...rest}>{children}</a>
      </NextJsLink>
    )
  }

  return (
    <a href={href} {...rest}>
      {children}
    </a>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Link
