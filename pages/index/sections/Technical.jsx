import React from 'react'
import styled from 'styled-components'

import { filterCV } from 'utils/content'
import Section from '../IntersectedSection'

const SKILLS = filterCV('technical').reverse()

// Add categories: EXPERIENCE WITH, DAY-TO-DAY COMFORT
const TechnicalSkills = props => (
  <Section title="Technical Skills" {...props}>
    <p>
      The following should be read as: "Experience with" (default) and
      "Day-to-day comfort" (in italic).
    </p>
    {SKILLS.map(({ title, bodyHtml }) => (
      <React.Fragment key={title}>
        <h3 className="subtitle">{title}</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      </React.Fragment>
    ))}
  </Section>
)

export default styled(TechnicalSkills)`
  p {
    margin-bottom: 2em;
  }
`
