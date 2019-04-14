import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ExperienceTable = ({
  className,
  experiences = [],
  showTitle = false
}) => (
  <div className={`columns ${className} is-desktop`}>
    <div className="column is-full">
      {experiences.map(({ title, what, when, where, bodyHtml }) => (
        <div key={`${what}-${when}`} className="columns">
          <div className="column is-one-thirds">
            {showTitle && <div className="experience-title">{title}</div>}
            <div className="experience-period">{when}</div>
          </div>
          <div className="column is-two-thirds">
            {!showTitle && title && <div>{title}</div>}
            {what && <div className="what">{what}</div>}
            <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
            {where && (
              <div className="location">
                <i className="fas fa-map-marker-alt" /> {where}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

ExperienceTable.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      when: PropTypes.string,
      where: PropTypes.string,
      what: PropTypes.string,
      bodyHtml: PropTypes.string
    })
  ),
  showTitle: PropTypes.bool,
  className: PropTypes.string.isRequired
}

export default styled(ExperienceTable)`
  .experience-title {
    font-weight: bold;
  }

  .location {
    margin-top: 1em;
  }

  .what {
    font-weight: ${({ remarkWhat = false }) =>
      remarkWhat ? 'bold' : 'normal'};
  }
`
