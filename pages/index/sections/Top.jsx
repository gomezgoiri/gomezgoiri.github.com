import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import NavBar from 'components/NavBar'
import Intersected from '../Intersected'
import { PlainSection as Section } from '../Section'

const Top = ({ onTop, className, ...other }) => (
  <Intersected
    onIntersect={ratio => {
      const isOnTop = ratio > 0
      onTop(isOnTop)
    }}
    options={{ threshold: [0, 0.01] }}
  >
    <Section
      isFullScreen
      className={`hero is-primary is-bold ${className}`}
      {...other}
    >
      <div className="hero-head">
        <NavBar hideBrand />
      </div>
      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">Aitor Gómez Goiri</p>
          {/* <p className="subtitle">Subtitle</p> */}
        </div>
      </div>
    </Section>
  </Intersected>
)

Top.propTypes = {
  onTop: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
}

export default styled(Top)`
  .hero-body {
    display: flex;
    align-items: center;
  }
`
