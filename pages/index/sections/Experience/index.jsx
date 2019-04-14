import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { filterCV } from 'utils/content'
import Section from '../../IntersectedSection'
import Table from './Table'

const CAREER = filterCV('career')
const EDUCATION = filterCV('education')

// Career | Work experience | Professional Experience
const Experience = props => (
  <Section title="Experience" bgColor="#f3efe0" hdColor="#22a39f" {...props}>
    <h3 className="subtitle">Career</h3>
    <Table showTitle remarkWhat experiences={CAREER} />
    <hr />
    <h3 className="subtitle">Education</h3>
    <Table experiences={EDUCATION} />
  </Section>
)

Experience.propTypes = {
  className: PropTypes.string
}

export default styled(Experience)`
  .location {
    color: #22a39f;
  }
`
