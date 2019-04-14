import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PlainSection = styled.section`
  min-height: ${({ isFullScreen }) => (isFullScreen ? '100' : '70')}vh;
  /* width: 100%; */
`

PlainSection.propTypes = {
  isFullScreen: PropTypes.bool,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

const RegularSection = ({ className, title, children, ...other }) => (
  <PlainSection className={`section ${className}`} {...other}>
    <div className="container">
      <div className="columns">
        <div className="column is-10-widescreen is-9-tablet is-10-mobile is-offset-1-mobile">
          <h2 className="title">{title}</h2>
          <hr />
          {children}
        </div>
      </div>
    </div>
  </PlainSection>
)

RegularSection.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export { PlainSection }

const StyledRegularSection = styled(RegularSection)`
  display: flex;
  align-items: center;

  background: ${({ bgColor = '#fff' }) => bgColor};

  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ hdColor = '#22a39f' }) => hdColor};
  }

  hr {
    border: 1em;
    width: 80%;
    background: white; /* For browsers that do not support gradients */
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(204, 204, 204, 0.6),
      rgba(0, 0, 0, 0)
    );
  }
`

StyledRegularSection.propTypes = {
  bgColor: PropTypes.string,
  hdColor: PropTypes.string
}

export default StyledRegularSection
