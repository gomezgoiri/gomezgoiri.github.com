import React from 'react'
import PropTypes from 'prop-types'

import Intersected from './Intersected'
import Section from './Section'

const IntersectedSection = ({ onEnter, children, ...other }) => (
  <Intersected
    onIntersect={(ratio, height) => {
      if (height > 0) {
        onEnter(other.id, height)
      }
    }}
    options={{ threshold: [0, 0.1, 0.2, 0.5, 0.9, 1] }}
  >
    <Section {...other}>{children}</Section>
  </Intersected>
)

IntersectedSection.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  onEnter: PropTypes.func.isRequired
}

export default IntersectedSection
