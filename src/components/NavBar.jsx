import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from './Link'

// is-active makes it visible on mobiles
const NavBar = ({ hideBrand = false, className }) => {
  const [isActive, setActive] = useState(false)
  const toggleActive = () => setActive(!isActive)

  return (
    <nav className={`navbar is-transparent ${className}`}>
      <div className="container">
        <div className="navbar-brand">
          {!hideBrand && (
            <Link className="navbar-item" href="/index.html">
              Aitor Gómez Goiri
            </Link>
          )}
          <a
            role="button"
            tabIndex={0}
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={toggleActive}
            onKeyDown={({ key }) => {
              if (key === 'Enter') {
                toggleActive()
              }
            }}
            className={`navbar-burger ${isActive ? 'pressed' : ''}`}
          >
            <i className="fas fa-chevron-down" />
          </a>
        </div>

        <div
          id="navMenu"
          className={`navbar-menu ${isActive ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            <Link className="navbar-item" href="/projects.html">
              Projects
            </Link>
            <Link className="navbar-item" href="/publications.html">
              Publications
            </Link>
            <Link className="navbar-item" href="/research_projects.html">
              R&amp;D Projects
            </Link>
            <Link className="navbar-item" href="/teaching.html">
              Teaching
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  hideBrand: PropTypes.bool,
  className: PropTypes.string.isRequired
}

export default styled(NavBar)`
  background-color: rgb(255, 255, 255, 0.7);

  .navbar-burger > i {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transition: transform 0.2s ease 0s;
  }

  .pressed i {
    transform-origin: center center;
    transform: rotate(180deg);
  }

  .navbar-menu {
    background-color: transparent;
  }
`
