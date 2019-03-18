import React from 'react'
import PropTypes from 'prop-types'
import Link from '../Link'

import Container from '../Container'
import Headings from './Headings'

const Content = ({
  topLinks = [],
  heroTitle,
  titleLink,
  subtitle,
  topNav,
  children
}) => (
  <Container>
    <header>
      {(topLinks.length > 0 || topNav) && (
        <nav className="navbar">
          <div className="collapse navbar-collapse">
            {topLinks.length > 0 && (
              <ul className="nav navbar-nav">
                {topLinks.map(link => (
                  <li key={link.href} className="active">
                    <Link href={link.href} className="link">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {topNav}
          </div>
        </nav>
      )}
      <Headings title={heroTitle} subtitle={subtitle} href={titleLink} />
    </header>
    {children}
  </Container>
)

Content.propTypes = {
  topLinks: PropTypes.arrayOf(
    PropTypes.shape({ href: PropTypes.string, text: PropTypes.string })
  ),
  heroTitle: PropTypes.string,
  subtitle: PropTypes.string,
  titleLink: PropTypes.string,
  topNav: PropTypes.node,
  children: PropTypes.node
}

export default Content
