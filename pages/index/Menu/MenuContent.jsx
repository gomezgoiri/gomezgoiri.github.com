import React from 'react'
import PropTypes from 'prop-types'

const Menu = ({ items = [], selected = null, className }) => (
  <aside className={className}>
    <ul className="menu-list">
      {items.map(({ href, label }) => (
        <li key={href}>
          <a
            href={`#${href}`}
            className={selected === href ? 'is-active' : undefined}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  </aside>
)

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ href: PropTypes.string, label: PropTypes.string })
  ),
  selected: PropTypes.string,
  className: PropTypes.string
}

export default Menu
