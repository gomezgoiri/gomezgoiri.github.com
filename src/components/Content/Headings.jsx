import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'

const Headings = ({ title = '', subtitle, href }) => {
  let value = <span itemProp="name">{title}</span>

  if (href) {
    value = (
      <Link
        href={href}
        rel="bookmark"
        title="Permanent link to "
        itemProp="url"
      >
        {value}
      </Link>
    )
  }

  return (
    <>
      {subtitle && <h4>{subtitle}</h4>}
      <h1>{value}</h1>
    </>
  )
}

Headings.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  href: PropTypes.string
}

export default Headings
