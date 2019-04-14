import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from 'components/Link'

const BottomNav = ({ className, prev, next }) => (
  <nav className={`level ${className}`}>
    {prev && (
      <div className="level-left">
        <div className="level-item">
          <Link href={prev.url} className="button is-white">
            <i className="fas fa-chevron-left" aria-hidden="true" />
            <span>{prev.title}</span>
          </Link>
        </div>
      </div>
    )}
    {next && (
      <div className="level-right">
        <div className="level-item">
          <Link href={next.url} className="button is-white">
            <span>{next.title}</span>
            <i className="fas fa-chevron-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    )}
  </nav>
)

const NavItem = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
})

BottomNav.propTypes = {
  prev: NavItem,
  next: NavItem,
  className: PropTypes.string.isRequired
}

export default styled(BottomNav)`
  margin-top: 2em;

  .button {
    i.fa-chevron-right {
      margin-left: 1em;
    }

    i.fa-chevron-left {
      margin-right: 1em;
    }
  }
`
