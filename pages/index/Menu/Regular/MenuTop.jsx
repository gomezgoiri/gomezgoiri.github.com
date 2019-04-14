import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MenuTop = ({ className, href }) => (
  <div className={className}>
    <a href={href}>
      <div className="fas fa-chevron-down" />
    </a>
  </div>
)

MenuTop.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string
}

// For some reason top 93vh does not work properly
const StyledMenuTop = styled(MenuTop)`
  position: absolute;
  top: 94vh;
  height: 7vh;

  max-height: 52px;
  border-radius: 10px 10px 0 0;
  background-color: #222222;
  ${({ css }) => css}

  a {
    display: block;
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 3vh;
  }

  @keyframes wiggle {
    0% {
      padding-top: 1.5vh;
    }
    50% {
      padding-top: 2.5vh;
    }
    100% {
      padding-top: 1.5vh;
    }
  }

  a div {
    animation-name: wiggle;
    animation-duration: 1.2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
  }
`

StyledMenuTop.propTypes = {
  css: PropTypes.arrayOf(PropTypes.string)
}

export default StyledMenuTop
