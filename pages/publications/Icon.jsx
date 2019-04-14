import React from 'react'
import PropTypes from 'prop-types'
import Link from 'components/Link'

const Icon = ({ href, src, alt, ...other }) => (
  <Link href={href} {...other}>
    <img src={`${process.env.ASSET_PREFIX}/static/img/${src}`} alt={alt} />
  </Link>
)

Icon.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Icon
