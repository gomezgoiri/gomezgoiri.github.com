import React from 'react'
import PropTypes from 'prop-types'
import Link from 'components/Link'

const SubsectionDropdown = ({ subsections }) => (
  <div className="dropdown is-hoverable">
    <div className="dropdown-trigger">
      <button className="button" type="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Subsections</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down" aria-hidden="true" />
        </span>
      </button>
    </div>
    <div className="dropdown-menu" id="dropdown-menu" role="menu">
      <div className="dropdown-content">
        {subsections.map(s => (
          <Link
            key={s.url}
            href={s.url}
            className={`dropdown-item ${s.selected? 'is-active' : ''}`}
          >
            {s.title}
          </Link>
        ))}
      </div>
    </div>
  </div>
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
