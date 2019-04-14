import React from 'react'
import PropTypes from 'prop-types'

import Link from '../Link'
import Headings from './Headings'

const Content = ({
  topLinks,
  heroTitle,
  titleLink,
  subtitle,
  topNav,
  children
}) => (
  <section className="section">
    <div className="container">
      <header>
        <div className="level">
          {topLinks && (
            <nav className="level-left breadcrumb" aria-label="breadcrumbs">
              <ul className="level-item">
                {topLinks.map(link => (
                  <li key={link.href} className="active">
                    <Link href={link.href} className="link">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          {topNav && (
            <div className="level-right">
              <div className="level-item">
                {topNav}
              </div>
            </div>
          )}
        </div>
        <Headings title={heroTitle} subtitle={subtitle} href={titleLink} />
      </header>
      <main className="content">
        {children}
      </main>
    </div>
  </section>
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
