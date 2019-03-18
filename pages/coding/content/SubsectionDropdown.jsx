import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from '../../../src/components/Link'

const Bold = styled.span`
  font-weight: bold;
`

const SubsectionDropdown = ({ subsections }) => (
  <ul className="nav navbar-nav navbar-right">
    <li className="dropdown">
      <a
        href="#"
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Subsections
        <span className="caret" />
      </a>
      <ul id="subsectionsDropdown" className="dropdown-menu">
        {subsections.map(s => (
          <li key={s.url}>
            {s.selected ? (
              <a href="#">
                <Bold>{s.title}</Bold>
              </a>
            ) : (
              <Link href={s.url}>{s.title}</Link>
            )}
          </li>
        ))}
      </ul>
    </li>
  </ul>
)

SubsectionDropdown.propTypes = {
  subsections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string
    })
  )
}

export default SubsectionDropdown
